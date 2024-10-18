import React from "react";
import { StyleSheet, View, Dimensions, ScrollView, Text, TouchableOpacity, Switch } from "react-native";
import MapView, { MapMarker } from "@react-native-oh-tpl/react-native-maps";
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 34.21;
const LONGITUDE = 108.84;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

const DEFAULT_REGION = {
  latitude: LATITUDE + SPACE,
  longitude: LONGITUDE + SPACE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};
const DEFAULT_CAMERA = {
  center: { latitude: LATITUDE, longitude: LONGITUDE },
  heading: 1,
  pitch: 0
};
const MARKER_KEY = 'mk-key';

export class MapViewTest extends React.Component<any, any> {
  private map: MapView | null = null;

  constructor(props: any) {
    super(props);

    this.state = {
      reload: true, // 重载地图，这个不是mapview属性
      apiCallbackText: 'api 回显展示',

      provider: false,
      region: false,
      initialRegion: false,
      camera: false,
      initialCamera: false,
      mapPadding: false,
      paddingAdjustmentBehavior: false,
      liteMode: false,
      mapType: false, // 支持 'none', 'standard', 'terrain'
      customMapStyle: false,
      userInterfaceStyle: false,
      showsUserLocation: false,
      userLocationPriority: false,
      userLocationUpdateInterval: false,
      userLocationFastestInterval: false,
      userLocationAnnotationTitle: false,
      followsUserLocation: false,
      userLocationCalloutEnabled: false,
      showsMyLocationButton: false,
      showsPointsOfInterest: false,
      showsCompass: false,
      showsScale: false,
      showsBuildings: false,
      showsTraffic: false,
      showsIndoors: false,
      showsIndoorLevelPicker: false,
      zoomEnabled: false,
      zoomTapEnabled: false,
      zoomControlEnabled: false,
      minZoomLevel: false,
      maxZoomLevel: false,
      rotateEnabled: false, 
      scrollEnabled: false,
      scrollDuringRotateOrZoomEnabled: false,
      pitchEnabled: false,
      toolbarEnabled: false,
      cacheEnabled: false,
      loadingEnabled: false,
      loadingIndicatorColor: false,
      loadingBackgroundColor: false,
      tintColor: false,
      moveOnMarkerPress: false,
      legalLabelInsets: false,
      kmlSrc: false,
      compassOffset: false,
      isAccessibilityElement: false,
      cameraZoomRange: false,
    };
  }

  setMapViewProps(mapViewProps: { [key: string]: any }, key: string) {
    switch (key) {
      case 'reload':
      case 'apiCallbackText':
        break; // 这2个不是mapview属性
      case 'provider':
        break;
      case 'region':
        if (this.state[key]) {
          mapViewProps[key] = DEFAULT_REGION;
        }
        break;
      case 'initialRegion':
        if (this.state[key]) {
          mapViewProps[key] = DEFAULT_REGION;
        }
        break;
      case 'camera':
        if (this.state[key]) {
          mapViewProps[key] = DEFAULT_CAMERA;
        }
        break;
      case 'initialCamera':
        if (this.state[key]) {
          mapViewProps[key] = DEFAULT_CAMERA;
        }
        break;
      case 'mapPadding':
        if (this.state[key]) {
          mapViewProps[key] = {
            top: 20,
            right: 20,
            bottom: 100,
            left: 100,
          };
        }
        break;
      case 'paddingAdjustmentBehavior':
        if (this.state[key]) {
          mapViewProps[key] = 'always';
        }
        break;
      case 'mapType':
        if (this.state[key]) {
          mapViewProps[key] = 'terrain';
        }
        break;
      case 'customMapStyle':
        if (this.state[key]) {
          mapViewProps[key] = [{
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ff00ff"
              }
            ]
          }];
        }
        break;
      case 'userInterfaceStyle':
        if (this.state[key]) {
          mapViewProps[key] = 'dark';
        }
        break;
      case 'userLocationPriority':
        if (this.state[key]) {
          mapViewProps[key] = 'high';
        }
        break;
      case 'userLocationUpdateInterval':
        if (this.state[key]) {
          mapViewProps[key] = 10000;
        }
        break;
      case 'userLocationFastestInterval':
        if (this.state[key]) {
          mapViewProps[key] = 10000;
        }
        break;
      case 'userLocationAnnotationTitle':
        if (this.state[key]) {
          mapViewProps[key] = 'My Location';
        }
        break;
      case 'minZoomLevel':
        if (this.state[key]) {
          mapViewProps[key] = 8;
        }
        break;
      case 'maxZoomLevel':
        if (this.state[key]) {
          mapViewProps[key] = 15;
        }
        break;
      case 'loadingIndicatorColor':
        if (this.state[key]) {
          mapViewProps[key] = '#ff0000';
        }
        break;
      case 'loadingBackgroundColor':
        if (this.state[key]) {
          mapViewProps[key] = '#00ff00';
        }
        break;
      case 'tintColor':
        if (this.state[key]) {
          mapViewProps[key] = '#0000ff';
        }
        break;
      case 'legalLabelInsets':
        if (this.state[key]) {
          mapViewProps[key] = { top: 20, right: 3, bottom: 20, left: 30 };
        }
        break;
      case 'kmlSrc':
        if (this.state[key]) {
          mapViewProps[key] = 'https://pastebin.com/raw/jAzGpq1F';
        }
        break;
      case 'compassOffset':
        if (this.state[key]) {
          mapViewProps[key] = { x: 20, y: 20 };
        }
        break;
      case 'cameraZoomRange':
        if (this.state[key]) {
          mapViewProps[key] = {
            minCenterCoordinateDistance: 3,
            maxCenterCoordinateDistance: 17,
            animated: true,
          };
        }
        break;
      // 其他为boolean值属性
      default:
        mapViewProps[key] = this.state[key];
        break;
    }
  }

  async getCamera() {
    const camera = await this.map?.getCamera(); // yes
    this.setState({ apiCallbackText: JSON.stringify(camera) });
  }

  animateCamera() {
    const newCamera = {
      center: { latitude: LATITUDE + 4 * SPACE, longitude: LONGITUDE - 3 * SPACE },
      heading: 0,
      pitch: 0,
    };
    this.map?.animateCamera(newCamera, { duration: 500 }); // yes
    this.setState({ apiCallbackText: 'animateCamera 执行成功' });
  }

  setCamera() {
    const newCamera = {
      center: { latitude: LATITUDE - 2 * SPACE, longitude: LONGITUDE +  2 * SPACE },
      heading: 0,
      pitch: 0,
    };
    this.map?.setCamera(newCamera); // yes
    this.setState({ apiCallbackText: 'setCamera 执行成功' });
  }

  animateToRegion() {
    const newRegion = {
      latitude: LATITUDE, 
      longitude: LONGITUDE,
      latitudeDelta: 0,
      longitudeDelta: 0,
    };
    this.map?.animateToRegion(newRegion, 500); // yes
    this.setState({ apiCallbackText: 'animateToRegion 执行成功' });
  }

  async getMapBoundaries() {
    const boundaries = await this.map?.getMapBoundaries(); // yes
    this.setState({ apiCallbackText: JSON.stringify(boundaries) });
  }

  setMapBoundaries() {
    const northEast = { latitude: LATITUDE + 0.3, longitude: LONGITUDE + 0.3 };
    const southWest = { latitude: LATITUDE - 0.3, longitude: LONGITUDE - 0.3 };
    this.map?.setMapBoundaries(northEast, southWest); // yes
    this.setState({ apiCallbackText: 'setMapBoundaries 执行成功' });
  }

  setIndoorActiveLevelIndex() {
    this.map?.setIndoorActiveLevelIndex(2); // no
  }

  fitToElements() {
    this.map?.fitToElements(); // no
  }

  fitToSuppliedMarkers() {
    this.map?.fitToSuppliedMarkers([MARKER_KEY]); // no
  }

  async fitToCoordinates() {
    await this.map?.fitToCoordinates(
      [{ latitude: LATITUDE, longitude: LONGITUDE }, { latitude: LATITUDE - 0.3, longitude: LONGITUDE - 0.5 }],
      { animated: true }
    ); // yes
    this.setState({ apiCallbackText: 'fitToCoordinates 执行成功' });
  }

  async addressForCoordinate() {
    const address = await this.map?.addressForCoordinate({ latitude: LATITUDE, longitude: LONGITUDE }); // yes
    this.setState({ apiCallbackText: JSON.stringify(address) });
  }

  async pointForCoordinate() {
    const point = await this.map?.pointForCoordinate({ latitude: LATITUDE, longitude: LONGITUDE }); // yes
    this.setState({ apiCallbackText: JSON.stringify(point) });
  }

  async coordinateForPoint() {
    const latLng = await this.map?.coordinateForPoint({ x: LATITUDE, y: LONGITUDE }); // yes
    this.setState({ apiCallbackText: JSON.stringify(latLng) });
  }

  async getMarkersFrames() {
    const frame = await this.map?.getMarkersFrames(); // no
    this.setState({ apiCallbackText: JSON.stringify(frame) });
  }

  async takeSnapshot(type: 'file' | 'base64' = 'file') {
    const sp = await this.map?.takeSnapshot({ // yes
      // width: 300,
      // height: 200,
      // region: DEFAULT_REGION,
      // format: 'png',
      // quality: 1,
      result: type,
    });
    this.setState({ apiCallbackText: sp?.slice(0, 100) });
  }

  reloadMap() {
    this.setState({ reload: true });
  }

  render() {
    const mapViewProps = {
      style: styles.map,
    };
    Object.keys(this.state).forEach((key) => {
      this.setMapViewProps(mapViewProps, key);
    });

    const mapView = this.state.reload ? (
      <MapView
        ref={r => this.map = r}
        {...mapViewProps}
      >
        <MapMarker
          coordinate={{
            latitude: LATITUDE,
            longitude: LONGITUDE - 0.05,
          }}
          key={MARKER_KEY}
        />
      </MapView>
    ) : <View></View>;

    const propList = (
      <TestSuite name="属性">
        {/* <TestCase itShould="provider: 地图框架~不支持">
          <Switch 
            value={this.state.provider} 
            onValueChange={(value) => this.setState({ provider: value, reload: false }, this.reloadMap)}
          />
        </TestCase> */}
        <TestCase itShould="region: 初始化定位地图中心(camera>initialCamera>region>initialRegion)">
          <Switch 
            value={this.state.region} 
            onValueChange={(value) => this.setState({ region: value, reload: false }, this.reloadMap)}
          />
        </TestCase>
        <TestCase itShould="initialRegion: 初始化定位地图中心(camera>initialCamera>region>initialRegion)">
          <Switch 
            value={this.state.initialRegion} 
            onValueChange={(value) => this.setState({ initialRegion: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        <TestCase itShould="camera: 初始化定位地图中心(camera>initialCamera>region>initialRegion)">
          <Switch 
            value={this.state.camera} 
            onValueChange={(value) => this.setState({ camera: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        <TestCase itShould="initialCamera: 初始化定位地图中心(camera>initialCamera>region>initialRegion)">
          <Switch 
            value={this.state.initialCamera} 
            onValueChange={(value) => this.setState({ initialCamera: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        <TestCase itShould="mapPadding: 内边距">
          <Switch 
            value={this.state.mapPadding} 
            onValueChange={(value) => this.setState({ mapPadding: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        {/* <TestCase itShould="paddingAdjustmentBehavior: 如何/何时使用安全区域插入影响填充~不支持">
          <Switch
            value={this.state.paddingAdjustmentBehavior} 
            onValueChange={(value) => this.setState({ paddingAdjustmentBehavior: value, reload: false }, this.reloadMap)}
          />
        </TestCase> */}
        {/* <TestCase itShould="liteMode: 精简模式~不支持">
          <Switch
            value={this.state.liteMode} 
            onValueChange={(value) => this.setState({ liteMode: value, reload: false }, this.reloadMap)}
          />
        </TestCase> */}
        <TestCase itShould="mapType: 地图类型">
          <Switch 
            value={this.state.mapType} 
            onValueChange={(value) => this.setState({ mapType: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        <TestCase itShould="customMapStyle: 自定义样式">
          <Switch 
            value={this.state.customMapStyle} 
            onValueChange={(value) => this.setState({ customMapStyle: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        <TestCase itShould="userInterfaceStyle: 地图样式">
          <Switch 
            value={this.state.userInterfaceStyle} 
            onValueChange={(value) => this.setState({ userInterfaceStyle: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        <TestCase itShould="showsUserLocation: 显示用户位置">
          <Switch 
            value={this.state.showsUserLocation} 
            onValueChange={(value) => this.setState({ showsUserLocation: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        {/* <TestCase itShould="userLocationPriority: 用户位置跟踪的功率优先级~不支持">
          <Switch 
            value={this.state.userLocationPriority} 
            onValueChange={(value) => this.setState({ userLocationPriority: value, reload: false }, this.reloadMap)} 
          />
        </TestCase> */}
        {/* <TestCase itShould="userLocationUpdateInterval: 用户位置更新间隔~不支持">
          <Switch 
            value={this.state.userLocationUpdateInterval} 
            onValueChange={(value) => this.setState({ userLocationUpdateInterval: value, reload: false }, this.reloadMap)} 
          />
        </TestCase> */}
        {/* <TestCase itShould="userLocationFastestInterval: 应用程序主动获取位置的最快时间间隔~不支持">
          <Switch 
            value={this.state.userLocationFastestInterval} 
            onValueChange={(value) => this.setState({ userLocationFastestInterval: value, reload: false }, this.reloadMap)} 
          />
        </TestCase> */}
        {/* <TestCase itShould="userLocationAnnotationTitle: 当前用户位置的注释的标题。这仅在`showsUserLocation`为真时有效~不支持">
          <Switch 
            value={this.state.userLocationAnnotationTitle} 
            onValueChange={(value) => this.setState({ userLocationAnnotationTitle: value, reload: false }, this.reloadMap)} 
          />
        </TestCase> */}
        <TestCase itShould="followsUserLocation: 聚焦于用户的位置。仅当`showsUserLocation`为true且用户已共享其位置时, 此操作才有效">
          <Switch 
            value={this.state.followsUserLocation} 
            onValueChange={(value) => this.setState({ followsUserLocation: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        {/* <TestCase itShould="userLocationCalloutEnabled: 单击用户位置将显示userLocation注释的默认标注~不支持">
          <Switch 
            value={this.state.userLocationCalloutEnabled} 
            onValueChange={(value) => this.setState({ userLocationCalloutEnabled: value, reload: false }, this.reloadMap)} 
          />
        </TestCase> */}
        <TestCase itShould="showsMyLocationButton: 显示用户位置按钮">
          <Switch 
            value={this.state.showsMyLocationButton} 
            onValueChange={(value) => this.setState({ showsMyLocationButton: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        {/* <TestCase itShould="showsPointsOfInterest: 显示兴趣点~不支持">
          <Switch 
            value={this.state.showsPointsOfInterest} 
            onValueChange={(value) => this.setState({ showsPointsOfInterest: value, reload: false }, this.reloadMap)} 
          />
        </TestCase> */}
        <TestCase itShould="showsCompass: 显示指南针">
          <Switch 
            value={this.state.showsCompass} 
            onValueChange={(value) => this.setState({ showsCompass: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        <TestCase itShould="showsScale: 显示比例尺">
          <Switch 
            value={this.state.showsScale} 
            onValueChange={(value) => this.setState({ showsScale: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        <TestCase itShould="showsBuildings: 显示拉伸的建筑信息">
          <Switch 
            value={this.state.showsBuildings} 
            onValueChange={(value) => this.setState({ showsBuildings: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        <TestCase itShould="showsTraffic: 显示交通信息">
          <Switch 
            value={this.state.showsTraffic} 
            onValueChange={(value) => this.setState({ showsTraffic: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        {/* <TestCase itShould="showsIndoors: 启用室内地图~不支持">
          <Switch 
            value={this.state.showsIndoors} 
            onValueChange={(value) => this.setState({ showsIndoors: value, reload: false }, this.reloadMap)} 
          />
        </TestCase> */}
        {/* <TestCase itShould="showsIndoorLevelPicker: 启用室内电平拾取器~不支持">
          <Switch 
            value={this.state.showsIndoorLevelPicker} 
            onValueChange={(value) => this.setState({ showsIndoorLevelPicker: value, reload: false }, this.reloadMap)} 
          />
        </TestCase> */}
        <TestCase itShould="zoomEnabled: 允许捏合/缩放地图">
          <Switch 
            value={this.state.zoomEnabled} 
            onValueChange={(value) => this.setState({ zoomEnabled: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        <TestCase itShould="zoomTapEnabled: 允许双击放大, 该属性其实由zoomEnabled控制了">
          <Switch 
            value={this.state.zoomTapEnabled} 
            onValueChange={(value) => this.setState({ zoomTapEnabled: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        <TestCase itShould="zoomControlEnabled: 显示缩放按钮">
          <Switch 
            value={this.state.zoomControlEnabled} 
            onValueChange={(value) => this.setState({ zoomControlEnabled: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        <TestCase itShould="minZoomLevel: 最小缩放级别">
          <Switch 
            value={this.state.minZoomLevel} 
            onValueChange={(value) => this.setState({ minZoomLevel: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        <TestCase itShould="maxZoomLevel: 最大缩放级别">
          <Switch 
            value={this.state.maxZoomLevel} 
            onValueChange={(value) => this.setState({ maxZoomLevel: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        <TestCase itShould="rotateEnabled: 允许旋转">
          <Switch 
            value={this.state.rotateEnabled} 
            onValueChange={(value) => this.setState({ rotateEnabled: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        <TestCase itShould="scrollEnabled: 允许拖动">
          <Switch 
            value={this.state.scrollEnabled} 
            onValueChange={(value) => this.setState({ scrollEnabled: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        {/* <TestCase itShould="scrollDuringRotateOrZoomEnabled: 是否在旋转或缩放时保持居中~不支持">
          <Switch 
            value={this.state.scrollDuringRotateOrZoomEnabled} 
            onValueChange={(value) => this.setState({ scrollDuringRotateOrZoomEnabled: value, reload: false }, this.reloadMap)} 
          />
        </TestCase> */}
        <TestCase itShould="pitchEnabled: 允许调整相机的俯仰角">
          <Switch 
            value={this.state.pitchEnabled} 
            onValueChange={(value) => this.setState({ pitchEnabled: value, reload: false }, this.reloadMap)} 
          />
        </TestCase>
        {/* <TestCase itShould="toolbarEnabled: 启用工具栏~不支持">
          <Switch 
            value={this.state.toolbarEnabled} 
            onValueChange={(value) => this.setState({ toolbarEnabled: value, reload: false }, this.reloadMap)} 
          />
        </TestCase> */}
        {/* <TestCase itShould="cacheEnabled: 缓存并显示为图片~不支持">
          <Switch
            value={this.state.cacheEnabled}
            onValueChange={(value) => this.setState({ cacheEnabled: value, reload: false }, this.reloadMap)}
          />
        </TestCase> */}
        <TestCase itShould="loadingEnabled: 地图加载时显示加载指示符">
          <Switch
            value={this.state.loadingEnabled}
            onValueChange={(value) => this.setState({ loadingEnabled: value, reload: false }, this.reloadMap)}
          />
        </TestCase>
        <TestCase itShould="loadingIndicatorColor: 加载指示灯颜色">
          <Switch
            value={this.state.loadingIndicatorColor}
            onValueChange={(value) => this.setState({ loadingIndicatorColor: value, reload: false }, this.reloadMap)}
          />
        </TestCase>
        <TestCase itShould="loadingBackgroundColor: 加载背景色">
          <Switch
            value={this.state.loadingBackgroundColor}
            onValueChange={(value) => this.setState({ loadingBackgroundColor: value, reload: false }, this.reloadMap)}
          />
        </TestCase>
        {/* <TestCase itShould="tintColor: 贴图的色调颜色~不支持">
          <Switch
            value={this.state.tintColor}
            onValueChange={(value) => this.setState({ tintColor: value, reload: false }, this.reloadMap)}
          />
        </TestCase> */}
        {/* <TestCase itShould="moveOnMarkerPress: 按下标记时地图移动~不支持">
          <Switch
            value={this.state.moveOnMarkerPress}
            onValueChange={(value) => this.setState({ moveOnMarkerPress: value, reload: false }, this.reloadMap)}
          />
        </TestCase> */}
        {/* <TestCase itShould="legalLabelInsets: ~不支持">
          <Switch
            value={this.state.legalLabelInsets}
            onValueChange={(value) => this.setState({ legalLabelInsets: value, reload: false }, this.reloadMap)}
          />
        </TestCase> */}
        {/* <TestCase itShould="kmlSrc: KML文件URL~不支持">
          <Switch
            value={this.state.kmlSrc} 
            onValueChange={(value) => this.setState({ kmlSrc: value, reload: false }, this.reloadMap)}
          />
        </TestCase> */}
        <TestCase itShould="compassOffset: 指南针的偏移量">
          <Switch 
            value={this.state.compassOffset} 
            onValueChange={(value) => this.setState({ compassOffset: value, reload: false }, this.reloadMap)}
          />
        </TestCase>
        {/* <TestCase itShould="isAccessibilityElement: 地图标记对VoiceOver不可见~不支持">
          <Switch />
        </TestCase> */}
        {/* <TestCase itShould="cameraZoomRange: 摄像机距离限制~不支持">
          <Switch
            value={this.state.cameraZoomRange}
            onValueChange={(value) => this.setState({ cameraZoomRange: value, reload: false }, this.reloadMap)}
          />
        </TestCase> */}
      </TestSuite>
    );

    const apiList = (
      <TestSuite name="API">
        <TouchButton name="getCamera" callback={() => this.getCamera()}></TouchButton>
        <TouchButton name="animateCamera" callback={() => this.animateCamera()}></TouchButton>
        <TouchButton name="setCamera" callback={() => this.setCamera()}></TouchButton>
        <TouchButton name="animateToRegion" callback={() => this.animateToRegion()}></TouchButton>
        <TouchButton name="getMapBoundaries" callback={() => this.getMapBoundaries()}></TouchButton>
        <TouchButton name="setMapBoundaries" callback={() => this.setMapBoundaries()}></TouchButton>
        {/* <TouchButton name="setIndoorActiveLevelIndex 不支持" callback={() => this.setIndoorActiveLevelIndex()}></TouchButton> */}
        {/* <TouchButton name="fitToElements 不支持" callback={() => this.fitToElements()}></TouchButton> */}
        {/* <TouchButton name="fitToSuppliedMarkers 不支持" callback={() => this.fitToSuppliedMarkers()}></TouchButton> */}
        <TouchButton name="fitToCoordinates" callback={() => this.fitToCoordinates()}></TouchButton>
        <TouchButton name="addressForCoordinate" callback={() => this.addressForCoordinate()}></TouchButton>
        <TouchButton name="pointForCoordinate" callback={() => this.pointForCoordinate()}></TouchButton>
        <TouchButton name="coordinateForPoint" callback={() => this.coordinateForPoint()}></TouchButton>
        {/* <TouchButton name="getMarkersFrames 不支持" callback={() => this.getMarkersFrames()}></TouchButton> */}
        <TouchButton name="takeSnapshot(file)" callback={() => this.takeSnapshot()}></TouchButton>
        <TouchButton name="takeSnapshot(base64)" callback={() => this.takeSnapshot('base64')}></TouchButton>
      </TestSuite>
    );

    return (
      <>
        <View style={styles.container}>
          {mapView}
        </View>
        <View style={{ minHeight: 50, backgroundColor: 'white' }}>
          <Text style={{ color: 'black' }}>{this.state.apiCallbackText}</Text>
        </View>
        {/* @ts-ignore */}
        <ScrollView style={{ flex: 1, height: "calc(100% - 250px)" }}>
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
