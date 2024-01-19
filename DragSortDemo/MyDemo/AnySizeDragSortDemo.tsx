import React,{createRef} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { AnySizeDragSortableView } from 'react-native-drag-sort'

const {width} = Dimensions.get('window')
const headerViewHeight = 160
const bottomViewHeight = 40

const getW = (index, isWidth) => isWidth ? index % 3 === 0 ? (width - 40) : (width - 60) / 2 : 80;
// const getW = (index, isWidth) => 120 + Math.floor((Math.random() - 0.5) * 100);
// const getW = (index, isWidth) => 150;

export default class AnySizeDragSortDemo extends React.Component {
  constructor(props) {
    super(props);
    const items = []
    for (let i = 0; i < 26; i++) {
        items.push({
            text: String.fromCharCode(65 + i),
            width: getW(i, true),
            height: getW(i, false)
        })
    }
    this.state = { 
        items,
        movedKey: null
    };

    this.sortableViewRef = createRef()
  }

  onDeleteItem = (item, index) => {
    const items = [...this.state.items]
    items.splice(index, 1)
    this.setState({ items })
  }

  _renderItem = (item, index, isMoved) => {
    const {movedKey} = this.state
    return (
      <TouchableOpacity
        onLongPress={() => {
            this.setState({movedKey: item.text})
            this.sortableViewRef.current.startTouch(item, index)
        }}
        onPressOut = {() => this.sortableViewRef.current.onPressOut()}
      >
        <View style={[styles.item_wrap, {opacity: (movedKey === item.text && !isMoved) ? 1 : 1}]}>
            {
                <View style={styles.item_clear_wrap}>
                    <TouchableOpacity onPress={() => this.onDeleteItem(item, index)}>
                        <Image source={require('./data/img/clear.png')} style={styles.item_clear}/>
                    </TouchableOpacity>
                </View>
            }
            <View style={[styles.item, {width: item.width, height: item.height, backgroundColor: isMoved ? 'red' : '#f39c12'}]}>
                {
                    isMoved ? (
                        <View style={styles.item_icon_swipe}>
                            <Image source={{uri: 'https://img0.baidu.com/it/u=4232278629,1470839503&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=746'}} style={styles.item_icon}/>
                        </View>
                    ) : null
                }
                <View style={styles.item_text_swipe}>
                    <Text style={styles.item_text}>{item.text}</Text>
                </View>
            </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { items } = this.state;
    const renderHeaderView = (
        <View style={styles.aheader}>
            <Image source={{uri: 'https://p7.itc.cn/mpbp/pro/20200929/650b94a7b8a542fda242a6575f51d74f.jpeg'}} style={styles.aheader_img}/>
            <View style={styles.aheader_context}>
                <Text style={styles.aheader_title}>mochixuan</Text>
                <Text style={styles.aheader_desc}>Android, React-Native, Flutter, React, Web。Learn new knowledge and share new knowledge.</Text>
            </View>
        </View>
    )
    const renderBottomView = (
        <View style={styles.abottom}>
            <Text style={styles.abottom_desc}>yarn add react-native-drag-sort</Text>
        </View>
    )
    return (
      <>
        <View style={styles.header}>
            <Text style={styles.header_title}>AnySize</Text>
        </View>
        <AnySizeDragSortableView
            ref={this.sortableViewRef}
            dataSource={items}
            keyExtractor={(item) => item.text}
            renderItem={this._renderItem}
            onDataChange={(data, callback)=> {
                this.setState({items: data},()=>{
                    callback()
                    console.log('移动了')
                })
            }}
            renderHeaderView = {renderHeaderView}
            headerViewHeight={headerViewHeight}
            renderBottomView = {renderBottomView}
            bottomViewHeight={bottomViewHeight}
            movedWrapStyle={styles.item_moved}
            onDragEnd={()=> console.log('Drag end')}
            scrollIndicatorInsets={{ top: 1, left: 1, bottom: 1, right: 1 }}
            // onScrollListener={(event) => console.log('Scroll event:', event.nativeEvent)}
            // onScrollRef={(ref) => console.log('Scroll ref:', ref)}
            autoThrottle={100}
            autoThrottleDuration={500}
            areaOverlapRatio={0.5}
            childMarginTop={10}
            childMarginBottom={10}
            childMarginLeft={10}
            childMarginRight={10}


        />
        </>
    );
  }
}

const styles = StyleSheet.create({
  item_wrap: {
    position: 'relative',
    paddingLeft: 20,
    paddingTop: 20
  },
  item: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f39c12',
    borderRadius: 4,
  },
  item_clear_wrap: {
    position: 'absolute',
    left: 10,
    top: 10,
    width: 20,
    height: 20,
    zIndex: 999
  },
  item_clear: {
    width: 20,
    height: 20
  },
  item_moved: {
    opacity: 0.95,
    borderRadius: 4,
    // backgroundColor: 'rgba(255, 0, 0, 0.5)'
  },
  item_icon_swipe: {
      width: 50,
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 50 * 0.5,
      justifyContent: 'center',
      alignItems: 'center',
  },
  item_icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  item_text_swipe: {
      backgroundColor: '#fff',
      width: 56,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
  },
  item_text: {
      color: '#444',
      fontSize: 20,
      fontWeight: 'bold',
  },
  header: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#2ecc71',
    borderBottomWidth: 2,
},
header_title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold'
},
  aheader: {
    height: headerViewHeight,
    flexDirection: 'row',
    borderBottomColor: '#2ecc71',
    borderBottomWidth: 2,
    zIndex: 100,
    backgroundColor: '#fff'
},
aheader_img: {
    width: headerViewHeight * 0.6,
    height: headerViewHeight * 0.6,
    resizeMode: 'cover',
    borderRadius: headerViewHeight * 0.3,
    marginLeft: 16,
    marginTop: 10,
},
aheader_context: {
    marginLeft: 8,
    height: headerViewHeight * 0.4,
    marginTop: 10
},
aheader_title: {
    color: '#333',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold'
},
aheader_desc: {
    color: '#444',
    fontSize: 16,
    width: width - headerViewHeight * 0.6 - 32
},
abottom: {
    justifyContent: 'center',
    alignItems: 'center',
    height: bottomViewHeight,
    backgroundColor: '#fff',
    zIndex: 100,
    borderTopColor: '#2ecc71',
    borderTopWidth: 2,
},
abottom_desc: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold'
}
});