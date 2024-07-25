import React from 'react';
import { ScrollView, Text, View, StyleSheet, Alert } from 'react-native';
import { MapView, Circle, Polygon, Polyline, Marker, LatLng, CameraPosition, voidEvent,MapPoi } from 'react-native-amap3d';

import type * as ReactNative from "react-native";

const points = [
  {
    latitude: 39.806901,
    longitude: 116.397972,
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

function AMapDemo() {
  return (
    <View style= { styles.container } >
      <MapView 
        mapType={ 2 }
        tiltGesturesEnabled = { true}
        rotateGesturesEnabled = { true}
        scrollGesturesEnabled = { true}
        zoomGesturesEnabled = { true}
        minZoom = { 5}
        maxZoom = { 15}
        trafficEnabled = { false}
        labelsEnabled = { false}
        buildingsEnabled = { false}
        scaleControlsEnabled = { false}
        zoomControlsEnabled = { false}
        initialCameraPosition = {{
          target: {
            latitude: 38.91095,
            longitude: 115.37296,
          },
          zoom: 7,
        }
      }
      > 
      <Circle
        strokeWidth={ 10 }
        strokeColor = "rgba(0, 255, 0, 0.5)"
        fillColor = "rgba(255, 0, 0, 0.5)"
        radius = { 2000}
        center = {{ latitude: 39.906901, longitude: 116.397972 }}
        zIndex = { 1}
      />
      <Polygon
        strokeWidth={ 10 }
        strokeColor = "rgba(95, 36, 51, 0.5)"
        fillColor = "rgba(255, 15, 123, 0.5)"
        zIndex = { 1}
        points = { points2 }
      />
      <Polyline width={ 200 } color = "rgba(0, 255, 0, 0.5)" points = { line1 } dotted = {true}  />
    
      <Marker
        draggable={ false }
        flat = { false}
        zIndex = { 1}
        position = {{ latitude: 39.856901, longitude: 116.407972 }}
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