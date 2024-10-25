import React from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView, Alert, Switch } from "react-native";
import MapView, { Circle, Polygon, Polyline, Marker, LatLng } from "@react-native-oh-tpl/react-native-maps";
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
const POLYGON = [
  {
    latitude: LATITUDE + 3 * SPACE,
    longitude: LONGITUDE + 3 * SPACE,
  },
  {
    latitude: LATITUDE - 3 * SPACE,
    longitude: LONGITUDE - 3 * SPACE,
  },
  {
    latitude: LATITUDE - 3 * SPACE,
    longitude: LONGITUDE + 3 * SPACE,
  },
];
const HOLES = [
  {
    latitude: LATITUDE,
    longitude: LONGITUDE + SPACE,
  },
  {
    latitude: LATITUDE - SPACE,
    longitude: LONGITUDE,
  },
  {
    latitude: LATITUDE - 2 * SPACE,
    longitude: LONGITUDE + 2 * SPACE,
  },
];
const POLYGON1 = [
  {
    latitude: LATITUDE + 3 * SPACE,
    longitude: LONGITUDE + 5 * SPACE,
  },
  {
    latitude: LATITUDE + 1 * SPACE,
    longitude: LONGITUDE + 1 * SPACE,
  },
  {
    latitude: LATITUDE - 1 * SPACE,
    longitude: LONGITUDE + 4 * SPACE,
  },
];

export class PolygonTest extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      holes: false,
      strokeWidth: false,
      strokeColor: false,
      fillColor: false,
      lineCap: false,
      lineJoin: false,
      miterLimit: false,
      geodesic: false,
      lineDashPhase: false,
      lineDashPattern: false,
      tappable: false,
      zIndex: false,
    };
  }

  setPolygonProps(polygonProps: { [key: string]: any}, key: string) {
    switch (key) {
      case 'holes':
        polygonProps[key] = this.state[key] ? [HOLES] : undefined;
        break;
      case 'strokeWidth':
        polygonProps[key] = this.state[key] ? 30 : 1;
        break;
      case 'strokeColor':
        polygonProps[key] = this.state[key] ? 'rgba(255,0,0, 1)' : '#000';
        break;
      case 'fillColor':
        polygonProps[key] = this.state[key] ? 'rgba(0,255,0, 1)' : '#000';
        break;
      case 'lineCap':
        polygonProps[key] = this.state[key] ? 'butt' : 'round';
        break;
      case 'lineJoin':
        polygonProps[key] = this.state[key] ? 'miter' : 'round';
        break;
      case 'miterLimit':
        polygonProps[key] = this.state[key] ? 30 : 0;
        break;
      case 'geodesic':
        polygonProps[key] = this.state[key] ? true : false;
        break;
      case 'lineDashPhase':
        polygonProps[key] = this.state[key] ? 10 : 0;
        break;
      case 'lineDashPattern':
        polygonProps[key] = this.state[key] ? [20, 5, 10, 5] : undefined;
        break;
      case 'tappable':
        polygonProps[key] = this.state[key] ? true : false;
        break;
      case 'zIndex':
        polygonProps[key] = this.state[key] ? 5 : 1;
        break;
      default:
        break;
    }
  }

  render() {
    const propList = (
      <TestSuite name="属性">
        <TestCase itShould="coordinates: 多边形的点集合--必需属性，以下可选属性都需要该属性配合使用，图中显示已设置该属性值">
          <View></View>
        </TestCase>
        <TestCase itShould="holes: 打孔">
          <Switch 
            value={this.state.holes} 
            onValueChange={(value) => this.setState({ holes: value })}
          />
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
        {/* <TestCase itShould="lineCap: 线两端的样式~不支持">
          <Switch 
            value={this.state.lineCap} 
            onValueChange={(value) => this.setState({ lineCap: value })}
          />
        </TestCase> */}
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
        <TestCase itShould="geodesic: 是否为大地曲线，缩小地图查看最大的多边形">
          <View></View>
        </TestCase>
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
        <TestCase itShould="tappable: 允许点击">
          <Switch 
            value={this.state.tappable} 
            onValueChange={(value) => this.setState({ tappable: value })}
          />
        </TestCase>
        <TestCase itShould="zIndex: 显示的层级">
          <Switch 
            value={this.state.zIndex} 
            onValueChange={(value) => this.setState({ zIndex: value })}
          />
        </TestCase>
      </TestSuite>
    );
    
    const polygonProps = {};
    Object.keys(this.state).forEach((key) => {
      this.setPolygonProps(polygonProps, key);
    });

    return (
      <>
        <View style={styles.container}>
          <MapView style={styles.map} initialRegion={REGION}>
            <Polygon
              coordinates={POLYGON} // yes 多边形的画线点，必填属性
              {...polygonProps}
              onPress={() => {
                Alert.alert('click polygon');
              }}
            />
            <Polygon
              coordinates={POLYGON1}
              strokeWidth={5}
              strokeColor="rgba(0,0,255, 1)"
              fillColor="rgba(0,255,255, 1)"
              zIndex={2}
              tappable
            />
            <Polygon
              coordinates={[
                { latitude: 0, longitude: 0 },
                { latitude: LATITUDE, longitude: LONGITUDE },
                { latitude: -LATITUDE, longitude: LONGITUDE / 2 }
              ]}
              strokeWidth={20}
              strokeColor="rgba(0,0,255, 1)"
              fillColor="rgba(0,0,0, 0)"
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