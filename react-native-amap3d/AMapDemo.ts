import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
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
const line3 = [
  { latitude: 39.806901, longitude: 116.097972 },
  { latitude: 39.806901, longitude: 116.257972 },
  { latitude: 39.806901, longitude: 116.457972 },
  { latitude: 39.806901, longitude: 116.597972 },
];

function AMapDemo() {
  return (
    <View style= { styles.container } >
      <MapView 
        mapType={ 1 }
        myLocationEnabled = { true}
        tiltGesturesEnabled = { true}
        rotateGesturesEnabled = { true}
        scrollGesturesEnabled = { true}
        zoomGesturesEnabled = { true}
        minZoom = { 3}
        maxZoom = { 18}
        trafficEnabled = { true}
        labelsEnabled = { true}
        buildingsEnabled = { true}
        scaleControlsEnabled = { true}
        zoomControlsEnabled = { true}
        compassEnabled = { true}
        myLocationButtonEnabled = { true}
        initialCameraPosition = {{
            target: {
              latitude: 39.91095,
                longitude: 116.37296,
            },
            zoom: 8,
          }
        }
      onPress = {(event: ReactNative.NativeSyntheticEvent<LatLng>)=> {
        console.info("AMapViewEventType map3d demo " + event.nativeEvent.latitude + "===" + event.nativeEvent.longitude)
      }}
      onLongPress = {(event: ReactNative.NativeSyntheticEvent<LatLng>)=> {
        console.info("AMapViewEventType map3d demo longevent===" + event.nativeEvent.latitude + "===" + event.nativeEvent.longitude)
      }}
      onPressPoi = {(event: ReactNative.NativeSyntheticEvent<MapPoi>)=> {
        console.info("AMapViewEventType map3d demo " + event.nativeEvent.position?.latitude + "===" + event.nativeEvent.position?.longitude)
      }}
      onLoad = {(event: ReactNative.NativeSyntheticEvent<voidEvent>) => {
        Alert.alert("onLoad successful")
      }}
      > 
      <Circle
        strokeWidth={ 5 }
        strokeColor = "rgba(0, 0, 255, 0.5)"
        fillColor = "rgba(255, 0, 0, 0.5)"
        radius = { 1000}
        center = {{ latitude: 39.906901, longitude: 116.397972 }}
        zIndex = { 1}
      />
      <Circle
        strokeWidth={ 10 }
        strokeColor = "rgba(22, 69, 55, 0.5)"
        fillColor = "rgba(36, 21, 36, 0.5)"
        radius = { 1000}
        center = {{ latitude: 39.966901, longitude: 116.397972 }}
        zIndex = { 1}
      />
      <Polygon
        strokeWidth={ 5 }
        strokeColor = "rgba(0, 0, 255, 0.5)"
        fillColor = "rgba(255, 0, 0, 0.5)"
        points = { points }
        zIndex = { 1}
      />
      <Polygon
        strokeWidth={ 10 }
        strokeColor = "rgba(95, 36, 202, 0.5)"
        fillColor = "rgba(255, 235, 123, 0.5)"
        zIndex = { 1}
        points = { points2 }
      />
      <Polyline width={ 100 } color = "rgba(0, 255, 0, 0.5)" points = { line1 } dotted = {true} onPress = {() => { console.info("AMapViewEventType map3d polyline onPress width 200") }} />
      < Polyline
        width = { 100}
        colors = { ["#f44336", "#4caf50", "#00ff23"]}
        points = { line3 }
        zIndex = { 1}
        geodesic = { true}
        gradient = { true}
      />
      <Marker
        draggable={ true }
        flat = { true}
        centerOffset = { 0.5, 1}
        anchor = { 0.5, 1}
        zIndex = { 1}
        position = {{ latitude: 39.806901, longitude: 116.397972 }}
        onPress = {() => Alert.alert("onPress")}
        onDragStart = {() => { console.info("AMapViewEventType map3d Marker onDragStart") }}
        onDrag = {() => { console.info("AMapViewEventType map3d Marker onDrag") }}
        onDragEnd = {({ nativeEvent }) =>
        Alert.alert(`onDragEnd: ${nativeEvent.latitude}, ${nativeEvent.longitude}`)}
      />
      < /MapView>
    < /View>
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