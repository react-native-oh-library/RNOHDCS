import {Tester,TestSuite} from '@rnoh/testerino';
import {TestCase} from './TestCase';
import { PureComponent, Component,useState } from 'react';
import { View, Dimensions, Image, Animated, ImageProps, ActivityIndicator, Text, Platform, TouchableOpacity,ScrollView,Button } from 'react-native'
import WaterfallFlow from 'react-native-waterfall-flow'
import imgList from './imgList'


const window = Dimensions.get('window')

export default class TestWaterfallFlowScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      refreshing: false,
      noMore: false,
      inited: false
    }
    this.page = 1
    this.pageSize = 10
    this.loading = false
    this.listRef = null
  }

  componentDidMount() {

    this.loadData(1)

    setTimeout(() => {
      // this.listRef.scrollToIndex({ index: 6,viewPosition:1 })
      // this.listRef.scrollToEnd()
      // this.listRef.scrollToOffset({ offset: 200 })
    }, 3000)
  }

  loadData = (page = 1, refreshing) => {
    if (this.loading) {
      return
    }
    this.loading = true
    if (refreshing) {
      this.setState({
        refreshing: true
      })
    } 
    setTimeout(() => { // mock request data
      const newData = imgList.slice((page - 1) * this.pageSize, page * this.pageSize).map(img => {
        const { width, height } = img
        const cardWidth = Math.floor(window.width / 2)
        return {
          ...img, 
          width: cardWidth,
          height: Math.floor(height / width * cardWidth)
        }
      })
      const noMore = newData.length < this.pageSize
      this.loading = false
      this.page = refreshing ? 1 : page
      this.setState({
        data: refreshing ? newData : this.state.data.concat(newData),
        refreshing: false,
        noMore,
        inited: true
      })
    }, refreshing ? 1000 : 500)
  }

  onEndReached = () => {
    if (!this.state.noMore) {
      this.loadData(this.page + 1)
    }
  }

  render() {
    const { data, refreshing, noMore, inited } = this.state

    
    const scrollToEndFn = () => {
        this.listRef.scrollToEnd()
    }
    const scrollToIndexFn = () => {
        this.listRef.scrollToIndex({ index: 6 })
    }

    const scrollToOffsetFn = () => {
      this.listRef.scrollToOffset({ offset: 200 })
    }

    
    return (
      <Tester>
        <TestSuite name="WaterfallFlow">
        <ScrollView>
          <TestCase.Example itShould="display items in the WaterfallFlow (data, renderItem)">
            <View style= {{height: 300}}>
              <WaterfallFlow 
                data={data}
                renderItem={({ item, index, columnIndex }) => {
                  return (
                    <Card item={item} index={index} columnIndex={columnIndex}/>
                  )
                }}
              /> 
            </View> 
          </TestCase.Example>

          <TestCase.Example itShould="Show four columns">
            <NumFun/>
          </TestCase.Example>

          <TestCase.Example itShould="The head shows a large image">
            <View style= {{height: 300}}>
              <WaterfallFlow
                data={data}
                ListHeaderComponent={<Header />}
                renderItem={({ item, index, columnIndex }) => {
                  return (
                    <Card item={item} index={index} columnIndex={columnIndex}/>
                  )
                }}
              />
            </View> 
          </TestCase.Example>

          <TestCase.Example itShould="The bottom shows loading">
            <View style= {{height: 300}}>
              <WaterfallFlow
                data={data}
                ListFooterComponent={<Footer noMore={noMore} inited={inited} isEmpty={data.length === 0}/>}
                renderItem={({ item, index, columnIndex }) => {
                  return (
                    <Card item={item} index={index} columnIndex={columnIndex}/>
                  )
                }}
              />
            </View> 
          </TestCase.Example>

          <TestCase.Example itShould="List is empty">
            <View style= {{height: 300}}>
              <WaterfallFlow
                data={[]}
                ListEmptyComponent ={<Isnall />}
                renderItem={({ item, index, columnIndex }) => {
                  return (
                    <Card item={item} index={index} columnIndex={columnIndex}/>
                  )
                }}
              />
            </View> 
          </TestCase.Example>

          <TestCase.Example itShould="The list scrolls to the bottom of the number of recurring pages">
            <View style= {{height: 300}}>
              <WaterfallFlow
                data={data}
                onEndReached={this.onEndReached}
                renderItem={({ item, index, columnIndex }) => {
                  return (
                    <Card item={item} index={index} columnIndex={columnIndex}/>
                  )
                }}
              />
            </View> 
          </TestCase.Example>

          <TestCase.Example itShould="pull-to-refresh">
            <View style= {{height: 300}}>
              <WaterfallFlow
                data={data}
                refreshing={refreshing}
                onRefresh={() => this.loadData(1, true)}
                renderItem={({ item, index, columnIndex }) => {
                  return (
                    <Card item={item} index={index} columnIndex={columnIndex}/>
                  )
                }}
              />
            </View> 
          </TestCase.Example>

          <TestCase.Example itShould="Set the container background color">
            <ColorFun/>
          </TestCase.Example>

          <TestCase.Example itShould="Click the button to scroll to the specified location">
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              <Button title="scrollToEnd" color="#841584" onPress={scrollToEndFn}/>
              <Button title="scrollToIndex" color="#841584" onPress={scrollToIndexFn}/>
              <Button title="scrollToOffset" color="#841584" onPress={scrollToOffsetFn}/>
            </View>
            <View style= {{height: 300}}>
              <WaterfallFlow
                ref={ref => this.listRef = ref}
                data={data}
                renderItem={({ item, index, columnIndex }) => {
                  return (
                    <Card item={item} index={index} columnIndex={columnIndex}/>
                  )
                }}
              />
            </View> 
          </TestCase.Example>
          </ScrollView>
        </TestSuite>
      </Tester>
    )
  }
}

function NumFun(){
  const dataone=imgList;
  const [isHungry, setIsHungry] = useState(2);
  return (
    <View>
      <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Button title="Show two columns" color="#841584" onPress={() => {setIsHungry(2);}}/>
        <Button title="Show four columns" color="#841584" onPress={() => {setIsHungry(4);}}/>
      </View>
      <View style= {{height: 300}}>
        <WaterfallFlow 
          data={dataone}
          numColumns={isHungry}
          renderItem={({ item, index, columnIndex }) => {
            return (
              <Card item={item} index={index} columnIndex={columnIndex}/>
            )
          }}
        /> 
      </View>
    </View>
  ) 
}

function ColorFun(){
  const dataone=imgList;
  const [isColor, setIsColor] = useState('pink');
  return (
    <View style= {{height: 300}}>
      <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Button title="background color pink" color="#841584" onPress={() => {setIsColor('pink');}}/>
        <Button title="background color blue" color="#841584" onPress={() => {setIsColor('blue');}}/>
      </View>
      <WaterfallFlow
        data={dataone}
        contentContainerStyle={{ backgroundColor: isColor }}
        renderItem={({ item, index, columnIndex }) => {
          return (
            <Card item={item} index={index} columnIndex={columnIndex}/>
          )
        }}
      />
    </View>
  )
}

class Card extends PureComponent {
  render() {
    const { item, index, columnIndex } = this.props
    return (
      <View style={{ flex: 1, overflow: 'hidden' }}>
        <TouchableOpacity 
          style={{ backgroundColor: '#fff', flex: 1 }} 
          activeOpacity={1}
        >
          <FadeImage 
            source={{ uri: item.thumbURL, width: item.width, height: item.height }} 
            resizeMode="cover" 
          />
        </TouchableOpacity>
      </View>
    )
  }
}

class Header extends PureComponent {
  render() {
    return (
      <FadeImage 
        resizeMode="cover"  
        source={{ 
          uri: 'https://img0.baidu.com/it/u=266597227,4250059863&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281', 
          width: window.width, 
          height: 281 / 500 * window.width 
        }}
      />
    )
  }
}

class Isnall extends PureComponent {
  render() {
    return (
      <View><Text>no data here</Text></View>
    )
  }
}

class Footer extends PureComponent {
  render() {
    const { noMore, inited, isEmpty } = this.props
    if (!inited || isEmpty) {
      return null
    }
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 60 }}>
        {!noMore && <ActivityIndicator color="red"/>}
        <Text style={{ color: '#999', marginLeft: 8 }}>{noMore ? '我是有底线的哦~' : '加载中...'}</Text>
      </View>
    )
  }
}


class Empty extends PureComponent {
  render() {
    const { inited } = this.props
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 300 }}>
        {!inited && <ActivityIndicator color="red"/>}
        <Text style={{ color: '#999', marginLeft: 8 }}>{inited ? '这里空空的哦~' : '获取数据中...'}</Text>
      </View>
    )
  }
}

class FadeImage extends Component<ImageProps> {

  constructor(props) {
    super(props)
    this._animatedValue = new Animated.Value(0)
  }

  render() {
    const { style, onLoadEnd } = this.props
    if (Platform.OS === 'android') {
      return <Image {...this.props}/>
    }
    return (
      <Animated.Image 
        {...this.props}
        onLoadEnd={() => {
          Animated.timing(this._animatedValue, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true
          }).start()
          onLoadEnd && onLoadEnd()
        }}
        style={[style, { opacity: this._animatedValue }]} 
      />
    )
  }
}