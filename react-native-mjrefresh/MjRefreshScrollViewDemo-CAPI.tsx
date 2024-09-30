import React, { Component } from "react";
import { Text, View } from "react-native";
import MJRefresh, { ScrollView } from "react-native-mjrefresh";

export default class MjRefreshDemo extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    text: "下拉刷新",
    refreshing: false
  }
  _onRefresh = () => {
    setTimeout(() => {
      this._hw && this._hw.finishRefresh();
    }, 1000);
  }
  render() {
    return (
      <ScrollView
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
      >
        <Text>{"mjRefresh TEST mjRefresh TEST mjRefresh TEST mjRefresh TEST mjRefresh TEST"}</Text>
      </ScrollView>
    )
  };
};