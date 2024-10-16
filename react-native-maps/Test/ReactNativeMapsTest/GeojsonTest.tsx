import React from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView, Alert, Switch } from "react-native";
import MapView, { Geojson, Polygon } from "@react-native-oh-tpl/react-native-maps";
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";
import { FeatureCollection, GeoJsonProperties, Geometry } from "geojson";

// @ts-ignore
import flagImg from './assets/flag-blue.png';

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 34.88;
const LONGITUDE = 108.41;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

const REGION = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};
const GEOJSON_DATA: FeatureCollection<Geometry, GeoJsonProperties> = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [108.38, 34.90],
      },
    },
    {
      type: 'Feature',
      properties: {
        'stroke': '#00ff00',
        'stroke-opacity': '0.8',
        'stroke-width': 5,
      },
      geometry: {
        type: 'LineString',
        coordinates: [[108.40114271198406, 34.87050495147992], [108.39061106586493, 34.85270315146096], [108.38054013185855, 34.86001319323932]],
      },
    },
    {
      type: 'Feature',
      properties: {
        'fill': '#ff00ff',
        'stroke': '#0000ff',
        'fill-opacity': '1',
        'stroke-opacity': '1',
        'stroke-width': 5,
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[108.403821, 34.906956], [108.403821, 34.906956], [108.41802164024656, 34.89954850110802], [108.40787248082822, 34.8876178892764]]],
      },
    },
  ],
};

let geojsonKey = 1;

export class GeojsonTest extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      strokeColor: false,
      fillColor: false,
      strokeWidth: false,
      color: false,
      lineDashPhase: false,
      lineDashPattern: false,
      lineJoin: false,
      miterLimit: false,
      zIndex: false,
      onPress: false,
      markerComponent: false,
      title: false,
      tracksViewChanges: false,
      image: false,
      tappable: false,
    };
  }

  setGeojsonProps(polylineProps: { [key: string]: any}, key: string) {
    switch (key) {
      case 'strokeColor':
        polylineProps[key] = this.state[key] ? 'rgba(255,0,0, 1)' : '#000';
        break;
      case 'fillColor':
        polylineProps[key] = this.state[key] ? "rgba(0,255,0, 1)" : '#000';
        break;
      case 'strokeWidth':
        polylineProps[key] = this.state[key] ? 30 : 1;
        break;
      case 'color':
        polylineProps[key] = this.state[key] ? '#0000ff' : undefined;
        break;
      case 'lineDashPhase':
        polylineProps[key] = this.state[key] ? 10 : 0;
        break;
      case 'lineDashPattern':
        polylineProps[key] = this.state[key] ? [30,15,30,15] : undefined;
        break;
      case 'lineCap':
        polylineProps[key] = this.state[key] ? 'square' : undefined;
        break;
      case 'lineJoin':
        polylineProps[key] = this.state[key] ? 'miter' : 'round';
        break;
      case 'miterLimit':
        polylineProps[key] = this.state[key] ? 30 : 0;
        break;
      case 'zIndex':
        polylineProps[key] = this.state[key] ? 5 : 1;
        break;
      case 'onPress':
        polylineProps[key] = this.state[key] ? () => Alert.alert('Geojson') : undefined;
        break;
      case 'markerComponent':
        polylineProps[key] = this.state[key] ? <View><Text>M</Text></View> : null;
        break;
      case 'title':
        polylineProps[key] = this.state[key] ? '这是哪？' : '';
        break;
      case 'tracksViewChanges':
        polylineProps[key] = this.state[key] ? true : false;
        break;
      case 'image':
        polylineProps[key] = this.state[key] ? flagImg : null;
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
        <TestCase itShould="geojson: geojson数据--必需属性，以下可选属性都需要该属性配合使用，图中显示已设置该属性值">
          <View></View>
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
        <TestCase itShould="strokeWidth: 线宽度">
          <Switch 
            value={this.state.strokeWidth} 
            onValueChange={(value) => this.setState({ strokeWidth: value })}
          />
        </TestCase>
        {/* <TestCase itShould="color: 标记的颜色~不支持">
          <Switch 
            value={this.state.color} 
            onValueChange={(value) => this.setState({ color: value })}
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
        <TestCase itShould="zIndex: 显示层级">
          <Switch 
            value={this.state.zIndex} 
            onValueChange={(value) => this.setState({ zIndex: value })}
          />
        </TestCase>
        <TestCase itShould="onPress: 触摸事件">
          <Switch 
            value={this.state.onPress} 
            onValueChange={(value) => this.setState({ onPress: value })}
          />
        </TestCase>
        {/* <TestCase itShould="markerComponent: 标记组件~不支持">
          <Switch 
            value={this.state.markerComponent} 
            onValueChange={(value) => this.setState({ markerComponent: value })}
          />
        </TestCase> */}
        <TestCase itShould="title: 标记的标题">
          <Switch 
            value={this.state.title} 
            onValueChange={(value) => this.setState({ title: value })}
          />
        </TestCase>
        {/* <TestCase itShould="tracksViewChanges: 跟踪视图更改~不支持">
          <Switch 
            value={this.state.tracksViewChanges} 
            onValueChange={(value) => this.setState({ tracksViewChanges: value })}
          />
        </TestCase> */}
        <TestCase itShould="image: 自定义标记图标">
          <Switch 
            value={this.state.image} 
            onValueChange={(value) => this.setState({ image: value })}
          />
        </TestCase>
        <TestCase itShould="tappable: 允许点击，多段线和多边形">
          <Switch 
            value={this.state.tappable} 
            onValueChange={(value) => this.setState({ tappable: value })}
          />
        </TestCase>
      </TestSuite>
    );
    
    const geojsonProps = {};
    Object.keys(this.state).forEach((key) => {
      this.setGeojsonProps(geojsonProps, key);
    });

    return (
      <>
        <View style={styles.container}>
          <MapView style={styles.map} initialRegion={REGION}>
            <Geojson
              key={geojsonKey++}
              geojson={GEOJSON_DATA} // yes geojson数据，必填属性
              {...geojsonProps}
            />
            <Polygon
              coordinates={[
                { latitude: 34.896956, longitude: 108.433821 }, 
                { latitude: 34.896956, longitude: 108.433821 - 0.1 }, 
                { latitude: 34.896956 - 0.05 , longitude: 108.433821 - 0.1 }, 
                { latitude: 34.896956 - 0.05, longitude: 108.433821 },
              ]}
              fillColor="rgba(0,255,0, 0.2)"
              zIndex={3}
            ></Polygon>
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
