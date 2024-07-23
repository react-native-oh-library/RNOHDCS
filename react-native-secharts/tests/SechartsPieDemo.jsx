import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, findNodeHandle } from 'react-native';
import { Echarts, echarts } from 'react-native-secharts';


export default class SechartsPie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            option1: {
                title: {
                  text: '测试饼状图',
                  subtext: '假数据',
                  left: 'center'
                },
                tooltip: {
                  trigger: 'item'
                },
                legend: {
                  orient: 'vertical',
                  left: 'left'
                },
                series: [
                  {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                      { value: 1048, name: 'Search Engine' },
                      { value: 735, name: 'Direct' },
                      { value: 580, name: 'Email' },
                      { value: 484, name: 'Union Ads' },
                      { value: 300, name: 'Video Ads' }
                    ],
                    emphasis: {
                      itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                    }
                  }
                ]
              },
            flag: false  // 这个布尔值是为了测试option1在setstate操作后不会被重置成初始状态。
        }
        this.echart1 = React.createRef();
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Echarts ref={this.echart1} 
                    option={this.state.option1} 
                    backgroundColor={'white'} 
                    renderLoading={()=><View style={{backgroundColor: 'rgba(255,255,0,0)'}}/>}/>
                </View>
            </View>
        );
    }
    
}
const styles = StyleSheet.create({
  container: {
      // flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#F5FCFF'
  },
  buttonContainer: {
      width: 300,
      marginTop:5
  }
});
