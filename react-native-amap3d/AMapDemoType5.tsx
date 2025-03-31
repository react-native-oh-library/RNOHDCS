import React from 'react';
import { ScrollView, Text, View, StyleSheet, Alert ,} from 'react-native';
import { MapView, Circle, Polygon, Polyline, Marker, LatLng,  voidEvent ,MapPoi} from 'react-native-amap3d';
import  { Svg, Path } from 'react-native-svg';

import type * as ReactNative from "react-native";

const points = [
  {
    latitude: 39.906901,
    longitude: 116.397972
  },
  {
    latitude: 39.806901,
    longitude: 116.297972,
  },
  {
    latitude: 39.906901,
    longitude: 116.397972,
  },
];

const points2 = [
  {
    latitude: 39.836901,
    longitude: 116.497972,
  },
  {
    latitude: 39.836901,
    longitude: 116.397972,
  },
  {
    latitude: 39.936901,
    longitude: 116.497972,
  },
];

const line1 = [
  { latitude: 40.006901, longitude: 116.097972 },
  { latitude: 40.006901, longitude: 116.597972 },
];
const line3 = [
  { latitude: 39.806901, longitude: 116.097972 },
  { latitude: 39.806901, longitude: 116.257972 },
  { latitude: 39.806901, longitude: 116.457972 },
  { latitude: 39.806901, longitude: 116.597972 },
  { latitude: 39.906901, longitude: 116.697972 },
];

function AMapDemo5() {
  return (
    <View style={styles.container}>
      <MapView
	    style={{ width: '100%', height: '100%' }}
        mapType={2}
        tiltGesturesEnabled={false}
        rotateGesturesEnabled={false}
        scrollGesturesEnabled={true}
        zoomGesturesEnabled={true}
        minZoom={5}
        maxZoom={15}
        trafficEnabled={false}
        labelsEnabled={false}
        buildingsEnabled={false}
        zoomControlsEnabled={false}
        scaleControlsEnabled={false}
        initialCameraPosition={{
          target: {
            latitude: 39.906901, longitude: 115.397972
          },
          zoom:5
        }}
		>
        <Marker
          draggable={true}
          flat={false}
          position={{ latitude: 40.806901, longitude: 117.397972 }}
        >
          <Svg width="100" height="100">
            <Path
              d="M50 10 L90 90 L10 90 Z" // 路径指令
              fill="blue"                // 填充颜色
              stroke="black"             // 边框颜色
              strokeWidth="2"            // 边框粗细
            />
          </Svg>
        </Marker>
        <Marker
          draggable={true}
          flat={false}
          position={{ latitude: 45.806901, longitude: 117.397972 }}
        >
          <Text
            style={{
              color: "#fff",
              backgroundColor: "#ff6977",
              opacity: 0.5,
              margin:5,
              width:"15%",
            }}
          >
          {"1234321"}
          </Text>
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 24,
  }
});
export default AMapDemo5;