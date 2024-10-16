import React from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableOpacity, Switch, Alert } from "react-native";
import MapView, { MapMarker } from "@react-native-oh-tpl/react-native-maps";
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";

// @ts-ignore
import flagImg from './assets/flag-blue.png';

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 34.21;
const LONGITUDE = 108.84;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

const DEFAULT_REGION = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

export class MarkerTest extends React.Component<any, any> {
  marker: MapMarker | null = null;

  constructor(props: any) {
    super(props);

    this.state = {
      title: false,
      description: false,
      image: false,
      icon: false,
      pinColor: false,
      centerOffset: false,
      calloutOffset: false,
      anchor: false,
      calloutAnchor: false,
      flat: false,
      identifier: false,
      rotation: false,
      draggable: false,
      tappable: false,
      tracksViewChanges: false,
      tracksInfoWindowChanges: false,
      stopPropagation: false,
      opacity: false,
      isPreselected: false,
      key: false,
    };
  }

  setMarkerProps(markerProps: { [key: string]: any}, key: string) {
    switch (key) {
      case 'title':
        markerProps[key] = this.state[key] ? '标题' : '';
        break;
      case 'description':
        markerProps[key] = this.state[key] ? '描述信息' : '';
        break;
      case 'image':
      case 'icon':
        markerProps[key] = this.state[key] ? flagImg : 0;
        break;
      case 'pinColor':
        markerProps[key] = this.state[key] ? '#00ff00' : '';
        break;
      case 'centerOffset':
        markerProps[key] = this.state[key] ? { x: 20, y: 30 } : { x: 0, y: 0 };
        break;
      case 'calloutOffset':
        markerProps[key] = this.state[key] ? { x: 20, y: -30 } : { x: 0, y: 0 };
        break;
      case 'anchor':
        markerProps[key] = this.state[key] ? { x: 1, y: 0.5 } : { x: 0, y: 0 };
        break;
      case 'calloutAnchor':
        markerProps[key] = this.state[key] ? { x: 1, y: 0.5 } : { x: 0.5, y: 0 };
        break;
      case 'identifier':
        markerProps[key] = this.state[key] ? 'identifier' : '';
        break;
      case 'rotation':
        markerProps[key] = this.state[key] ? 30 : 0;
        break;
      case 'opacity':
        markerProps[key] = this.state[key] ? 0.6 : 1.0;
        break;
      case 'key':
        markerProps[key] = this.state[key] ? 'marker-key' : '';
        break;
      // 其他为boolean值属性
      default:
        markerProps[key] = this.state[key];
        break;
    }
  }

  showCallout() {
    this.marker?.showCallout();
  }

  hideCallout() {
    this.marker?.hideCallout();
  }

  redrawCallout() {
    this.marker?.redrawCallout();
  }

  animateMarkerToCoordinate() {
    this.marker?.animateMarkerToCoordinate({
      latitude: LATITUDE,
      longitude: LONGITUDE,
    }, 500);
  }

  redraw() {
    this.marker?.redraw();
  }

  render() {
    const propList = (
      <TestSuite name="属性">
        <TestCase itShould="coordinate: 经纬度坐标--必需属性，以下可选属性都需要该属性配合使用，图中显示已设置该属性值">
          <View></View>
        </TestCase>
        <TestCase itShould="title: 标题, 需要开启tappable,点击呈现">
          <Switch 
            value={this.state.title} 
            onValueChange={(value) => this.setState({ title: value })}
          />
        </TestCase>
        <TestCase itShould="description: 描述, 需要开启tappable,点击呈现">
          <Switch 
            value={this.state.description} 
            onValueChange={(value) => this.setState({ description: value })}
          />
        </TestCase>
        <TestCase itShould="image: 自定义图像。只允许使用本地图片资源">
          <Switch 
            value={this.state.image} 
            onValueChange={(value) => this.setState({ image: value })}
          />
        </TestCase>
        {/* <TestCase itShould="icon: 要呈现的标记图标。只允许使用本地图片资源~">
          <Switch 
            value={this.state.icon} 
            onValueChange={(value) => this.setState({ icon: value })}
          />
        </TestCase> */}
        {/* <TestCase itShould="pinColor: 标记颜色~不支持">
          <Switch 
            value={this.state.pinColor} 
            onValueChange={(value) => this.setState({ pinColor: value })}
          />
        </TestCase> */}
        {/* <TestCase itShould="centerOffset: 显示视图的偏移~不支持">
          <Switch 
            value={this.state.centerOffset} 
            onValueChange={(value) => this.setState({ centerOffset: value })}
          />
        </TestCase> */}
        {/* <TestCase itShould="calloutOffset: 放置详图索引编号的偏移~不支持">
          <Switch 
            value={this.state.calloutOffset} 
            onValueChange={(value) => this.setState({ calloutOffset: value })}
          />
        </TestCase> */}
        <TestCase itShould="anchor: 设置标记的锚点">
          <Switch 
            value={this.state.anchor} 
            onValueChange={(value) => this.setState({ anchor: value })}
          />
        </TestCase>
        <TestCase itShould="calloutAnchor: 显示详图索引时锚定的点">
          <Switch 
            value={this.state.calloutAnchor} 
            onValueChange={(value) => this.setState({ calloutAnchor: value })}
          />
        </TestCase>
        <TestCase itShould="flat: 平视于地面">
          <Switch 
            value={this.state.flat} 
            onValueChange={(value) => this.setState({ flat: value })}
          />
        </TestCase>
        {/* <TestCase itShould="identifier: 用于在以后引用此标记的标识符~不支持">
          <Switch 
            value={this.state.identifier} 
            onValueChange={(value) => this.setState({ identifier: value })}
          />
        </TestCase> */}
        <TestCase itShould="rotation: 设置旋转度">
          <Switch 
            value={this.state.rotation} 
            onValueChange={(value) => this.setState({ rotation: value })}
          />
        </TestCase>
        <TestCase itShould="draggable: 允许拖动">
          <Switch 
            value={this.state.draggable} 
            onValueChange={(value) => this.setState({ draggable: value })}
          />
        </TestCase>
        <TestCase itShould="tappable: 允许点击">
          <Switch 
            value={this.state.tappable} 
            onValueChange={(value) => this.setState({ tappable: value })}
          />
        </TestCase>
        {/* <TestCase itShould="tracksViewChanges: 是否应跟踪对子视图的更改~不支持">
          <Switch 
            value={this.state.tracksViewChanges} 
            onValueChange={(value) => this.setState({ tracksViewChanges: value })}
          />
        </TestCase> */}
        {/* <TestCase itShould="tracksInfoWindowChanges: 是否应跟踪信息窗口中的视图更改~不支持">
          <Switch 
            value={this.state.tracksInfoWindowChanges} 
            onValueChange={(value) => this.setState({ tracksInfoWindowChanges: value })}
          />
        </TestCase> */}
        {/* <TestCase itShould="stopPropagation: 是否应传播`onPress`事件~不支持">
          <Switch 
            value={this.state.stopPropagation} 
            onValueChange={(value) => this.setState({ stopPropagation: value })}
          />
        </TestCase> */}
        <TestCase itShould="opacity: 透明度">
          <Switch 
            value={this.state.opacity} 
            onValueChange={(value) => this.setState({ opacity: value })}
          />
        </TestCase>
        {/* <TestCase itShould="isPreselected: 预选~不支持">
          <Switch 
            value={this.state.isPreselected} 
            onValueChange={(value) => this.setState({ isPreselected: value })}
          />
        </TestCase> */}
        {/* <TestCase itShould="key: 如果没有指定key或者指定了非唯一的`key`,`<Marker/>`就会被重用~不支持">
          <Switch 
            value={this.state.key} 
            onValueChange={(value) => this.setState({ key: value })}
          />
        </TestCase> */}
      </TestSuite>
    );
    const apiList = (
      <TestSuite name="API">
        <TouchButton name="showCallout" callback={() => this.showCallout()}></TouchButton>
        <TouchButton name="hideCallout" callback={() => this.hideCallout()}></TouchButton>
        {/* <TouchButton name="redrawCallout 不支持" callback={() => this.redrawCallout()}></TouchButton> */}
        <TouchButton name="animateMarkerToCoordinate" callback={() => this.animateMarkerToCoordinate()}></TouchButton>
        <TouchButton name="redraw" callback={() => this.redraw()}></TouchButton>
      </TestSuite>
    );

    const markerProps = {
      coordinate: {
        latitude: LATITUDE,
        longitude: LONGITUDE - SPACE * 2,
      }
    };
    Object.keys(this.state).forEach((key) => {
      this.setMarkerProps(markerProps, key);
    });

    return (
      <>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={DEFAULT_REGION}
            onPress={() => {
              Alert.alert('Test Marker onPress 传递');
            }}
          >
            <MapMarker 
              {...markerProps}
              onPress={() => {
                Alert.alert('click Marker 1');
              }}
            />
            <MapMarker
              ref={r => this.marker = r}
              coordinate={{
                latitude: LATITUDE - SPACE,
                longitude: LONGITUDE + SPACE * 2,
              }}
              title="测试Api"
              description="测试 API 的标记"
              onPress={() => {
                Alert.alert('click Marker 2');
              }}
            />
          </MapView>
        </View>
        {/* @ts-ignore */}
        <ScrollView style={{ flex: 1, height: "calc(100% - 200px)" }}>
          <Tester>
            {propList}
            {apiList}
          </Tester>
        </ScrollView>
      </>
    );
  }
}

const TouchButton = ({ name, callback }: { name: string, callback: Function }) => {
  return (
    <TestCase itShould={name}>
      <TouchableOpacity onPress={() => callback()} style={styles.buttonBubble}>
        <Text>{name}</Text>
      </TouchableOpacity>
    </TestCase>
  );
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
  buttonBubble: {
    backgroundColor: '#999999',
    alignItems: 'center',
    padding: 12,
    borderRadius: 20,
  },
});
