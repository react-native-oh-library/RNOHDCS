import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { MJRefreshControl } from "react-native-mjrefresh";

export default class MjRefreshDemo extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    text : "下拉刷新",
    refreshing : false
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
              <MJRefreshControl
                  ref={ref=>this._mjrefresh = ref}
                  onRefresh={
                  ()=>{
                      this.setState({
                          text:'正在刷新'
                      })
                      console.log('onRefresh')
                      this._mjrefresh.beginRefresh();
                      setTimeout(()=>{
                          this._mjrefresh && this._mjrefresh.finishRefresh();
                      },1000)
                  }
                  }
                  onRefreshIdle={()=>console.log('onRefreshIdle')}
                  onReleaseToRefresh={()=>{
                      this.setState({
                          text:'释放刷新'
                      })
                  }}
                  onPulling={e=>{
                      if(e.nativeEvent.percent<0.1){
                          this.setState({
                              text:'下拉刷新'
                          })
                      }
                  }}

                  HeaderComponent = {
                  <View style={{height:100,backgroundColor:'red',
                    justifyContent:'center',
                    alignItems:'center',flexDirection:'row'
                }}>
                  <Text>{this.state.text}</Text>
                </View>
                  }
              >
                
              </MJRefreshControl>
            }
        >
          <Text>{"mjRefresh TEST mjRefresh TEST mjRefresh TEST mjRefresh TEST mjRefresh TEST"}</Text>
        </ScrollView>
      )
  };
};