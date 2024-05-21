import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import RNEChartsPro from 'react-native-echarts-pro';
import FangSong from './font/FangSong';

const MyChartComponent = () => {
  const [stateTxt, setStateTxt] = useState('初始化，未触发渲染完成事件');

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
      <Text>当前加载状态：{stateTxt}</Text>
      <RNEChartsPro
        height={250}
        option={option}
        enableParseStringFunction
        formatterVariable={{ unit: '￥' }}
        eventActions={{
          finished: () => { setStateTxt('渲染完成，已触发完成事件') },
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