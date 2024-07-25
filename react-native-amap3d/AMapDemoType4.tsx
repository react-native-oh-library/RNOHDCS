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
        tiltGesturesEnabled = { false}
        rotateGesturesEnabled = { false}
        scrollGesturesEnabled = { false}
        zoomGesturesEnabled = { false}
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
          zoom: 11,
        }
      }
      > 
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