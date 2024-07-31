import React from 'react';
import { ScrollView, Text, View, StyleSheet, Alert } from 'react-native';
import { MapView, Circle, Polygon, Polyline, Marker, LatLng,  voidEvent ,MapPoi} from 'react-native-amap3d';

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

function AMapDemo() {
  return (
    <View style={styles.container}>
      <MapView
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
		<Circle
          strokeWidth={5}
          strokeColor="rgba(0, 0, 255, 0.5)"
          fillColor="rgba(255, 0, 0, 0.5)"
          radius={1000}
          center={{ latitude: 39.906901, longitude: 116.397972 }}
          zIndex={2}
        />

        <Polygon
          strokeWidth={5}
          strokeColor="rgba(0, 128, 128, 0.5)"
          fillColor="rgba(0, 255, 0, 0.5)"
          points={points}
          zIndex={1}
        />

        <Polygon
          strokeWidth={10}
          strokeColor="rgba(0, 128, 128, 0.5)"
          fillColor="rgba(0, 255, 0, 0.5)"
          points={points2}
          zIndex={2}
        />
        <Polyline width={200} color="rgba(0, 255, 0, 0.5)" points={line1} dotted={false}  />
        <Polyline
          width={100}
          gradient={true}
          colors={["#000ff0", "#0fff00", "#0f0f00"]}
          points={line3}
        />
        <Marker
          draggable={true}
          flat={false}
          position={{ latitude: 40.806901, longitude: 117.397972 }}
          onPress={() => Alert.alert("onPress")}
          onDragStart={({ nativeEvent }) =>
            console.log("Maker Drag Start")}
          onDrag={({ nativeEvent }) =>
            console.log("Maker Drag Move")}
          onDragEnd={({ nativeEvent }) =>
            Alert.alert(`onDragEnd: ${nativeEvent.latitude}, ${nativeEvent.longitude}`)}
        />
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
export default AMapDemo;