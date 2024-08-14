import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import MJRefresh, { ScrollView } from 'react-native-mjrefresh'

export default class FlatListExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8'],
    };
  }
  _onRefresh = () => {
    setTimeout(() => {
      this._hw && this._hw.finishRefresh()
    }, 1000)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          //legacyImplementation 如果需要使用此属性，应从mjrefresh插件中引入Flatlist
          keyExtractor={(item) => item}
          data={this.state.data}
          renderItem={({ item, index }) => <Text key={index} onPress={() => alert(111)} style={{ height: 100 }}>{item}</Text>}
          renderScrollComponent={props => <ScrollView
            style={{ flex: 1 }}
            refreshControl={
              <MJRefresh
                ref={ref => this._mjrefresh = ref}
                onRefresh={
                  () => {
                    this.setState({
                      text: '正在刷新'
                    })
                    console.log('onRefresh')
                    setTimeout(() => {
                      this._mjrefresh && this._mjrefresh.finishRefresh();
                    }, 1000)
                  }
                }
                onRefreshIdle={() => console.log('onRefreshIdle')}
                onReleaseToRefresh={() => {
                  this.setState({
                    text: '释放刷新'
                  })
                }}
                onPulling={e => {
                  console.log('cbdtest onPulling:' + e.nativeEvent.percent)
                  if (e.nativeEvent.percent < 0.1) {
                    this.setState({
                      text: '下拉刷新'
                    })
                  }
                }}
              >
                <View style={{
                  height: 100, backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center', flexDirection: 'row'
                }}>
                  <Text>{this.state.text}</Text>
                </View>
              </MJRefresh>
            }
            {...props}
          />}
        />
      </View>
    )
  }
}