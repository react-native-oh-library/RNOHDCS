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

const line2 = [
  { latitude: 75.757904, longitude: 38.118117 },
  { latitude: 117.375719, longitude: 24.598057 },
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
        minZoom={3}
        maxZoom={18}
        trafficEnabled={false}
        labelsEnabled={false}
        buildingsEnabled={false}
        zoomControlsEnabled={false}
        scaleControlsEnabled={false}
        initialCameraPosition={{
          target: {
            latitude: 50.906901, longitude: 160.397972
          },
          zoom:3
        }}
        
      >
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
        <Polyline width={200} color="rgba(0, 255, 0, 0.5)" points={line1}  onPress={() => { Alert.alert("onPress polyline") }} />
        <Polyline width={300} color="rgba(0, 255, 0, 0.5)" points={line3}  zIndex={1}/>

        <Marker
          draggable={true}
          flat={false}
          zIndex={2}
          position={{ latitude: 39.906901, longitude: 116.397972 }}
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