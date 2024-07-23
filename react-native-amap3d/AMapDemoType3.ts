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
        mapType={ 3 }
        tiltGesturesEnabled = { true}
        rotateGesturesEnabled = { true}
        scrollGesturesEnabled = { true}
        zoomGesturesEnabled = { true}
        minZoom = { 5}
        maxZoom = { 18}
        trafficEnabled = { false}
        labelsEnabled = { false}
        buildingsEnabled = { false}
        scaleControlsEnabled = { true}
        zoomControlsEnabled = { true}
        initialCameraPosition = {{
          target: {
            latitude: 38.91095,
            longitude: 115.37296,
          },
          zoom: 15,
        }
      }
      > 
      <Circle
        strokeWidth={ 5 }
        strokeColor = "rgba(0, 255, 0, 0.5)"
        fillColor = "rgba(255, 0, 0, 0.5)"
        radius = { 1500}
        center = {{ latitude: 39.306901, longitude: 116.507972 }}
        zIndex = { 1}
      />
      <Polygon
        strokeWidth={ 10 }
        strokeColor = "rgba(95, 36, 51, 0.5)"
        fillColor = "rgba(25, 15, 123, 0.5)"
        zIndex = { 2}
        points = { points2 }
      />
      <Polyline width={ 300 } color = "rgba(0, 255, 255, 0.5)" points = { line1 } dotted = {false}  />
    
      <Marker
        draggable={ true }
        flat = { true}
        zIndex = { 2}
        position = {{ latitude: 39.556901, longitude: 116.307972 }}
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