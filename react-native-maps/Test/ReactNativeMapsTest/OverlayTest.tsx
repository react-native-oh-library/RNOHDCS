import React from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView, Alert, Switch } from "react-native";
import MapView, { Overlay } from "@react-native-oh-tpl/react-native-maps";
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";

// @ts-ignore
import overlayImg from './assets/overlay.png';

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

export class OverlayTest extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      bearing: false,
      opacity: false,
      tappable: false,
    };
  }

  setOverlayProps(overlayProps: { [key: string]: any}, key: string) {
    switch (key) {
      case 'bearing':
        overlayProps[key] = this.state[key] ? 120 : 0;
        break;
      case 'opacity':
        overlayProps[key] = this.state[key] ? 0.6 : 1.0;
        break;
      case 'tappable':
        overlayProps[key] = this.state[key] ? true : false;
        break;
      default:
        break;
    }
  }

  render() {
    const propList = (
      <TestSuite name="属性">
        <TestCase itShould="image: 图片--必需属性，以下可选属性都需要该属性配合使用，图中显示已设置该属性值">
          <View></View>
        </TestCase>
        <TestCase itShould="bounds: 图片显示范围--必需属性，以下可选属性都需要该属性配合使用，图中显示已设置该属性值">
          <View></View>
        </TestCase>
        <TestCase itShould="bearing: 旋转角度">
          <Switch 
            value={this.state.bearing} 
            onValueChange={(value) => this.setState({ bearing: value })}
          />
        </TestCase>
        <TestCase itShould="opacity: 不透明度">
          <Switch 
            value={this.state.opacity} 
            onValueChange={(value) => this.setState({ opacity: value })}
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

    const overlayProps = {};
    Object.keys(this.state).forEach((key) => {
      this.setOverlayProps(overlayProps, key);
    });

    return (
      <>
        <View style={styles.container}>
          <MapView style={styles.map} region={REGION}>
            <Overlay
              image={overlayImg} // 图片，必填属性
              bounds={[[LATITUDE + SPACE, LONGITUDE + SPACE * 2], [LATITUDE - SPACE, LONGITUDE - SPACE * 2]]} // 图片显示范围，必填属性
              {...overlayProps}
              onPress={() => {
                Alert.alert('Overlay click.');
              }}
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