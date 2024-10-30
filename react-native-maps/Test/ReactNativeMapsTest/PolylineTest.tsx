import React from "react";
import { StyleSheet, View, Dimensions, ScrollView, Alert, Switch } from "react-native";
import MapView, { Polyline } from "@react-native-oh-tpl/react-native-maps";
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
const POLYLINE = [
  {
    latitude: LATITUDE,
    longitude: LONGITUDE,
  },
  {
    latitude: LATITUDE - 4 * SPACE,
    longitude: LONGITUDE,
  },
  {
    latitude: LATITUDE - 4 * SPACE,
    longitude: LONGITUDE + 2 * SPACE,
  },
  {
    latitude: LATITUDE - 2 * SPACE,
    longitude: LONGITUDE - 2 * SPACE,
  }
];
const POLYLINE2 = [
  {
    latitude: LATITUDE + SPACE,
    longitude: LONGITUDE,
  },
  {
    latitude: LATITUDE + 2 * SPACE,
    longitude: LONGITUDE - SPACE,
  },
  {
    latitude: LATITUDE - 2 * SPACE,
    longitude: LONGITUDE - 2 * SPACE,
  }
];

export class PolylineTest extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      strokeWidth: false,
      strokeColor: false,
      strokeColors: false,
      lineCap: false,
      lineJoin: false,
      miterLimit: false,
      geodesic: false,
      lineDashPhase: false,
      lineDashPattern: false,
      tappable: false,
    };
  }

  setPolylineProps(polylineProps: { [key: string]: any}, key: string) {
    switch (key) {
      case 'strokeWidth':
        polylineProps[key] = this.state[key] ? 30 : 1;
        break;
      case 'strokeColor':
        polylineProps[key] = this.state[key] ? 'rgba(255,0,0, 1)' : '#000';
        break;
      case 'strokeColors':
        polylineProps[key] = this.state[key] 
          ? ["rgba(255,0,0, 1)", "rgba(0,255,0, 1)", "rgba(0,0,255, 1)"] 
          : [polylineProps.strokeColor, polylineProps.strokeColor, polylineProps.strokeColor];
        break;
      case 'lineCap':
        polylineProps[key] = this.state[key] ? 'square' : 'round';
        break;
      case 'lineJoin':
        polylineProps[key] = this.state[key] ? 'bevel' : 'round';
        break;
      case 'miterLimit':
        polylineProps[key] = this.state[key] ? 30 : 0;
        break;
      case 'geodesic':
        polylineProps[key] = this.state[key] ? true : false;
        break;
      case 'lineDashPhase':
        polylineProps[key] = this.state[key] ? 10 : 0;
        break;
      case 'lineDashPattern':
        polylineProps[key] = this.state[key] ? [50, 10, 50, 20] : undefined;
        break;
      case 'tappable':
        polylineProps[key] = this.state[key] ? true : false;
        break;
      default:
        break;
    }
  }

  render() {
    const propList = (
      <TestSuite name="属性">
        <TestCase itShould="coordinates: 多段线的点集合--必需属性，以下可选属性都需要该属性配合使用，图中显示已设置该属性值">
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
        <TestCase itShould="strokeColors: 多段线颜色，比 strokeColor 优先级高，请看图中的两段线示例">
          <View></View>
          {/* <Switch 
            value={this.state.strokeColors} 
            onValueChange={(value) => this.setState({ strokeColors: value })}
          /> */}
        </TestCase>
        <TestCase itShould="lineCap: 线两端的样式">
          <Switch 
            value={this.state.lineCap} 
            onValueChange={(value) => this.setState({ lineCap: value })}
          />
        </TestCase>
        <TestCase itShould="lineJoin: 线连接处的样式">
          <Switch 
            value={this.state.lineJoin} 
            onValueChange={(value) => this.setState({ lineJoin: value })}
          />
        </TestCase>
        {/* <TestCase itShould="miterLimit: 连接的线段之间的连接处出现尖峰的极限值~不支持">
          <Switch 
            value={this.state.miterLimit} 
            onValueChange={(value) => this.setState({ miterLimit: value })}
          />
        </TestCase> */}
        <TestCase itShould="geodesic: 是否为大地曲线，缩小地图查看绿色线">
          <View></View>
        </TestCase>
        {/* <TestCase itShould="lineDashPhase: 虚线的开始偏移量~不支持">
          <Switch 
            value={this.state.lineDashPhase} 
            onValueChange={(value) => this.setState({ lineDashPhase: value })}
          />
        </TestCase> */}
        <TestCase itShould="lineDashPattern: 虚线设置~非大地曲线生效">
          <Switch 
            value={this.state.lineDashPattern} 
            onValueChange={(value) => this.setState({ lineDashPattern: value })}
          />
        </TestCase>
        <TestCase itShould="tappable: 允许点击">
          <Switch 
            value={this.state.tappable} 
            onValueChange={(value) => this.setState({ tappable: value })}
          />
        </TestCase>
      </TestSuite>
    );
    
    const polylineProps = {};
    Object.keys(this.state).forEach((key) => {
      this.setPolylineProps(polylineProps, key);
    });

    return (
      <>
        <View style={styles.container}>
          <MapView style={styles.map} initialRegion={REGION}>
            <Polyline
              coordinates={POLYLINE} // yes 线的路径，必填属性
              {...polylineProps}
              onPress={() => {
                Alert.alert('click polyline');
              }}
            />
            <Polyline
              coordinates={POLYLINE2}
              strokeWidth={10}
              strokeColors={["rgba(0,255,0, 1)", "rgba(0,0,255, 1)"]}
            />
            <Polyline
              coordinates={[
                { latitude: 0, longitude: 0 },
                { latitude: LATITUDE, longitude: LONGITUDE }
              ]}
              strokeWidth={20}
              strokeColor={"rgba(0,255,0, 1)"}
              geodesic={true}
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