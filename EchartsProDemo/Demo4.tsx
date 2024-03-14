import React, { PureComponent } from "react";
import { View, Alert, Button } from "react-native";
import RNEChartsPro from "react-native-echarts-pro";
import { duidiezhexian, zhexian } from './options';

interface Props { }
interface State { option: Object }

export default class Home extends PureComponent<Props, State> {
  private chartsRef: any = null;
  private tag: Boolean = false;
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      option: zhexian,
    };
  }
  onSetOption = () => {
    const data = this.tag ? zhexian : duidiezhexian;
    this.tag = !this.tag;
    this.chartsRef && this.chartsRef.setNewOption(data, { notMerge: true });
  };
  onGetInstance = () => {
    this.chartsRef && this.chartsRef.getInstance('getHeight').then((res: any) => {
      Alert.alert('获取实例', '实例高度为' + res);
    });
  };
  onDispatchAction = () => {
    this.chartsRef && this.chartsRef.dispatchAction({
      type: "showTip", // 显示 tooltip
      seriesIndex: 0,
      dataIndex: 0,
    })
  };
  setChartsRef = (ref: null) => {
    this.chartsRef = ref;
  };
  render() {
    return (
      <View>
        <Button title="setNewOption（重设配置）" onPress={this.onSetOption} />
        <Button title="getInstance（获取实例）" onPress={this.onGetInstance} />
        <Button title="dispatchAction（手动触发事件）" onPress={this.onDispatchAction} />
        <RNEChartsPro
          ref={this.setChartsRef}
          height={400}
          option={this.state.option}
        />
      </View>
    );
  }
}