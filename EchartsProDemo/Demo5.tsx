import React from 'react';
import { Alert, Text, View } from 'react-native';
import RNEChartsPro from 'react-native-echarts-pro';
import FangSong from './font/FangSong';

const MyChartComponent = () => {
  const showAlert = () => {
    Alert.alert('渲染完成', '这是一个eventActions触发的警告框');
  };

  const option = {
    textStyle: {
      fontFamily: "FangSong",
      fontSize: 15,
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

      axisLabel: {
        formatter: `function (val) {
              return val;
            }`,
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: `function (val) {
              return val + formatterVariable.unit;
            }`,
        textStyle: {
          color: `function (value, index) {
                return value >= 200 ? 'green' : 'red';
              }`,
        },
      },
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  };


  return (
    <View style={{ height: 300, paddingTop: 25 }}>
      <Text>formatterVariable（Y轴单位使用变量传入）/enableParseStringFunction（使用变量单位必须开启字符串函数）/eventActions（完成事件钩子回调）/fontFamilies（自定义字体为仿宋）</Text>
      <RNEChartsPro
        height={250}
        option={option}
        enableParseStringFunction
        formatterVariable={{ unit: '￥' }}
        eventActions={{
          finished: showAlert,
        }}
        fontFamilies={
          [
            { fontName: "FangSong", fontFile: FangSong }
          ]
        }
      />
    </View>
  );
};

export default MyChartComponent;