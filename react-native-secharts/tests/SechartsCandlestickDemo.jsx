import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, findNodeHandle } from 'react-native';
import { Echarts, echarts } from 'react-native-secharts';

export default class SechartsCandlestick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      option1: {
        xAxis: {
          data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
        },
        yAxis: {},
        series: [
          {
            type: 'candlestick',
            data: [
              [20, 34, 10, 38],
              [40, 35, 30, 50],
              [31, 38, 33, 44],
              [38, 15, 5, 42]
            ]
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
            renderLoading={() => <View style={{ backgroundColor: 'rgba(255,255,0,0)' }} />} />
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
    marginTop: 5
  }
});
