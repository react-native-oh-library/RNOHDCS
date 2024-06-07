import React, {useState} from 'react';
import {ScrollView, Text, TextInput, TurboModuleRegistry, View, Image, HostComponent, NativeMethods, Dimensions, PixelRatio, StyleSheet} from 'react-native';

import { Button } from '../../components';

import RTNCenteredText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';

import MapView, {MapViewProps, Marker, Circle, Polygon, Polyline} from 'react-native-maps';
import { Commands, MapViewNativeComponentType } from 'react-native-maps/lib/MapViewNativeComponent';
import { NativeProps } from 'react-native-maps/lib/MapView';



export function StaticMap() {


  
  

  const {width, height} = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE = 39.9;
  const LONGITUDE = 116.4;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const SPACE = 0.01;

  const state = {
    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  };

  return (
    <View style={styles.container}>
        <ScrollView
          style={StyleSheet.absoluteFill}
          contentContainerStyle={styles.scrollview}>
          <Text>Clicking</Text>
          <Text>and</Text>
          <Text>dragging</Text>
          <Text>the</Text>
          <Text>map</Text>
          <Text>will</Text>
          <Text>cause</Text>
          <Text>the</Text>
          <MapView
            style={styles.map}
            scrollEnabled={false}
            zoomEnabled={false}
            pitchEnabled={false}
            rotateEnabled={false}
            initialRegion={state.region}>
            <Marker
              title="This is a title"
              description="This is a description"
              coordinate={state.region}
            />
          </MapView>
          <Text>parent</Text>
          <Text>ScrollView</Text>
          <Text>to</Text>
          <Text>scroll.</Text>
          <Text>When</Text>
          <Text>using</Text>
          <Text>a Google</Text>
          <Text>Map</Text>
          <Text>this only</Text>
          <Text>works</Text>
          <Text>if you</Text>
          <Text>disable:</Text>
          <Text>scroll,</Text>
          <Text>zoom,</Text>
          <Text>pitch,</Text>
          <Text>rotate.</Text>
          <Text>...</Text>
          <Text>It</Text>
          <Text>would</Text>
          <Text>be</Text>
          <Text>nice</Text>
          <Text>to</Text>
          <Text>have</Text>
          <Text>an</Text>
          <Text>option</Text>
          <Text>that</Text>
          <Text>still</Text>
          <Text>allows</Text>
          <Text>zooming.</Text>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  scrollview: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  map: {
    width: 250,
    height: 250,
  },
});

export default StaticMap;