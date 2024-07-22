import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Echarts, echarts } from 'react-native-secharts';

export default class SechartsBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      value: null,
      option1: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70],
            type: 'bar'
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
            onPress={this.onPress}
            height={600}
            width={300}
            backgroundColor={'#468B58'}
            renderLoading={() => <View style={{ backgroundColor: 'rgba(255,255,0,0)' }} />} />
        </View>
        <View>
        <Text>点击图表红色部分可触发onPress方法</Text>
          <Text>{!this.state.value ? '这里显示被点击的值' : '被点击的值：' + this.state.value}</Text>
        </View>
      </View>
    );
  }
  onPress = (e) => {
    this.setState({ value: e.value })
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
