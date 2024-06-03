import React, {useState} from 'react';
import {ScrollView, Text, TextInput, TurboModuleRegistry, View, Image, HostComponent, NativeMethods, Dimensions, PixelRatio, StyleSheet} from 'react-native';

import { Button } from '../../components';

import RTNCenteredText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';

import MapView, {MapViewProps, Marker, Circle, Polygon, Polyline} from 'react-native-maps';
import { Commands, MapViewNativeComponentType } from 'react-native-maps/lib/MapViewNativeComponent';
import { NativeProps } from 'react-native-maps/lib/MapView';



export function ThemeMap() {
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
        <ScrollView contentContainerStyle={styles.scrollview}>
          <Text>MAPKIT ONLY{'\n'}</Text>
          <Text>System</Text>
          <MapView
            provider={undefined}
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

          <Text>{'\n'}Light</Text>
          <MapView
            provider={undefined}
            style={styles.map}
            scrollEnabled={false}
            zoomEnabled={false}
            pitchEnabled={false}
            rotateEnabled={false}
            initialRegion={state.region}
            userInterfaceStyle="light">
            <Marker
              title="This is a title"
              description="This is a description"
              coordinate={state.region}
            />
          </MapView>
          <Text>{'\n'}Dark</Text>
          <MapView
            provider={undefined}
            style={styles.map}
            scrollEnabled={false}
            zoomEnabled={false}
            pitchEnabled={false}
            rotateEnabled={false}
            initialRegion={state.region}
            userInterfaceStyle="dark">
            <Marker
              title="This is a title"
              description="This is a description"
              coordinate={state.region}
            />
          </MapView>
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
    paddingVertical: 70,
  },
  map: {
    width: 200,
    height: 200,
  },
});

export default ThemeMap;