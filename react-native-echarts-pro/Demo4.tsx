import React, { useRef, useState } from "react";
import RNEChartsPro from "react-native-echarts-pro";
import { duidiezhexian, zhexian } from './options';
import { Button, Text, View } from "react-native";

export default function Demo2() {
  const chartsRef = useRef<any>();
  const [option, setOption] = useState(true);
  const [height, setHeight] = useState('未获取');

  const onSetOption = () => {
    setOption(!option);
    const data = option ? duidiezhexian : zhexian;
    chartsRef.current && chartsRef.current.setNewOption(data, { notMerge: true });
  }
  const onGetInstance = () => {
    chartsRef.current && chartsRef.current.getInstance('getHeight').then((res: any) => {
      setHeight(res);
    });
  };
  const onDispatchAction = () => {
    chartsRef.current && chartsRef.current.dispatchAction({
      type: "showTip", // 显示 tooltip
      seriesIndex: 0,
      dataIndex: 0,
    })
  };
  return (
    <View>
      <View style={{ gap: 10, marginBottom: 10 }}>
        <Button title="setNewOption（修改图表配置）" onPress={onSetOption} />
        <Button title="dispatchAction（手动触发事件）" onPress={onDispatchAction} />
        <Button title="getInstance（获取实例）" onPress={onGetInstance} />

      </View>
      <Text>获取实例，实例高度为：{height}</Text>
      <RNEChartsPro
        ref={chartsRef}
        height={400}
        option={zhexian}
      />
    </View>
  );
}