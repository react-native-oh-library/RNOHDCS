import React from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView, Switch, Alert } from "react-native";
import MapView, { Circle } from "@react-native-oh-tpl/react-native-maps";
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 34.21;
const LONGITUDE = 108.84;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

const REGION = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};
const CENTER = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
};

export class CircleTest extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      strokeWidth: false,
      strokeColor: false,
      fillColor: false,
      zIndex: false,
      lineCap: false,
      lineJoin: false,
      miterLimit: false,
      lineDashPhase: false,
      lineDashPattern: false,
    };
  }

  setCircleProps(circleProps: { [key: string]: any}, key: string) {
    switch (key) {
      case 'strokeWidth':
        circleProps[key] = this.state[key] ? 8 : 1;
        break;
      case 'strokeColor':
        circleProps[key] = this.state[key] ? 'rgba(0,255,0, 1)' : '#000';
        break;
      case 'fillColor':
        circleProps[key] = this.state[key] ? 'rgba(0, 0, 255, 1)' : '#000';
        break;
      case 'zIndex':
        circleProps[key] = this.state[key] ? 5 : 1;
        break;
      case 'lineCap':
        circleProps[key] = this.state[key] ? 'butt' : 'round';
        break;
      case 'lineJoin':
        circleProps[key] = this.state[key] ? 'miter' : '';
        break;
      case 'miterLimit':
        circleProps[key] = this.state[key] ? 30 : 10;
        break;
      case 'lineDashPhase':
        circleProps[key] = this.state[key] ? 10 : 0;
        break;
      case 'lineDashPattern':
        circleProps[key] = this.state[key] ? [20, 5, 10, 5] : [];
        break;
      default:
        break;
    }
  }

  render() {
    const propList = (
      <TestSuite name="属性">
        <TestCase itShould="center: 中心点--必需属性，以下可选属性都需要该属性配合使用，图中显示已设置该属性值">
          <View></View>
        </TestCase>
        <TestCase itShould="radius: 半径--必需属性，以下可选属性都需要该属性配合使用，图中显示已设置该属性值">
          <View></View>
        </TestCase>
        <TestCase itShould="strokeWidth: 线宽度">
          <Switch 
            value={this.state.strokeWidth} 
            onValueChange={(value) => this.setState({ strokeWidth: value })}
          />
        </TestCase>
        <TestCase itShould="strokeColor: 线颜色">
          <Switch 
            value={this.state.strokeColor} 
            onValueChange={(value) => this.setState({ strokeColor: value })}
          />
        </TestCase>
        <TestCase itShould="fillColor: 填充色">
          <Switch 
            value={this.state.fillColor} 
            onValueChange={(value) => this.setState({ fillColor: value })}
          />
        </TestCase>
        <TestCase itShould="zIndex: 显示的层级">
          <Switch 
            value={this.state.zIndex} 
            onValueChange={(value) => this.setState({ zIndex: value })}
          />
        </TestCase>
        {/* <TestCase itShould="lineCap: 线两端的样式~不支持">
          <Switch 
            value={this.state.lineCap} 
            onValueChange={(value) => this.setState({ lineCap: value })}
          />
        </TestCase> */}
        {/* <TestCase itShould="lineJoin: 线连接处的样式~不支持">
          <Switch 
            value={this.state.lineJoin} 
            onValueChange={(value) => this.setState({ lineJoin: value })}
          />
        </TestCase> */}
        {/* <TestCase itShould="miterLimit: 连接的线段之间的连接处出现尖峰的极限值~不支持">
          <Switch 
            value={this.state.miterLimit} 
            onValueChange={(value) => this.setState({ miterLimit: value })}
          />
        </TestCase> */}
        {/* <TestCase itShould="lineDashPhase: 虚线的开始偏移量~不支持">
          <Switch 
            value={this.state.lineDashPhase} 
            onValueChange={(value) => this.setState({ lineDashPhase: value })}
          />
        </TestCase> */}
        <TestCase itShould="lineDashPattern: 虚线设置">
          <Switch 
            value={this.state.lineDashPattern} 
            onValueChange={(value) => this.setState({ lineDashPattern: value })}
          />
        </TestCase>
      </TestSuite>
    );
    
    const circleProps = {};
    Object.keys(this.state).forEach((key) => {
      this.setCircleProps(circleProps, key);
    });

    return (
      <>
        <View style={styles.container}>
          <MapView style={styles.map} initialRegion={REGION}>
            <Circle
              center={CENTER} // yes 必填属性，圆的中心
              radius={3000} // yes 必填属性，圆的半径
              {...circleProps}
              // onPress={() => {
              //   Alert.alert('click circle');
              // }}
            />
            <Circle
              center={{ latitude: CENTER.latitude, longitude: CENTER.longitude - 0.04 }}
              radius={1500}
              fillColor="rgba(0, 255, 255, 0.8)"
              zIndex={2}
            />
          </MapView>
        </View>
        {/* @ts-ignore */}
        <ScrollView style={{ flex: 1, height: "calc(100% - 200px)" }}>
          <Tester>
            {propList}
          </Tester>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
    position: 'relative',
    height: 200,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});