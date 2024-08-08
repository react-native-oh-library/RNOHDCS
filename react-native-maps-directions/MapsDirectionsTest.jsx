import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { Marker } from "@react-native-oh-tpl/react-native-maps";
import {TestSuite} from '@rnoh/testerino';
import {TestCase} from '../components';

const apikey = 'xxx';
const coordinates=[
  { latitude: 37.3317876, longitude: -122.0054812 },
  { latitude: 37.771707, longitude: -122.4053769 },
];

export function MapsDirectionsTest() {
  return (
    <TestSuite name="mapTest">
      <TestCase.Example modal itShould="origin and destination" >
        <DirectionsMapExample
          coordinates={coordinates}
          mapViewDirectionsProps={{
            origin: coordinates[0] ,
            destination: coordinates[1] ,
            apikey: apikey,
        }}
        />
      </TestCase.Example>
      <TestCase.Example modal itShould="strokeWidth test" >
        <DirectionsMapExample
          coordinates={coordinates}
          mapViewDirectionsProps={{
            origin: coordinates[0] ,
            destination: coordinates[1] ,
            apikey: apikey,
            strokeWidth: 6,
        }}
        />
      </TestCase.Example>
      <TestCase.Example modal itShould="strokeColor test" >
        <DirectionsMapExample
          coordinates={coordinates}
          mapViewDirectionsProps={{
            origin: coordinates[0] ,
            destination: coordinates[1] ,
            apikey: apikey,
            strokeColor:"#0000FF",
        }}
        />
      </TestCase.Example>
      <TestCase.Example modal itShould="mode test" >
        <DirectionsMapExample
          coordinates={coordinates}
          mapViewDirectionsProps={{
            origin: coordinates[0] ,
            destination: coordinates[1] ,
            apikey: apikey,
            mode:'BICYCLING',
        }}
        />
      </TestCase.Example>
      <TestCase.Example modal itShould="resetOnChange test" >
        <DirectionsMapExample
          coordinates={coordinates}
          mapViewDirectionsProps={{
            origin: coordinates[0] ,
            destination: coordinates[1] ,
            apikey: apikey,
            resetOnChange:true
        }}
        />
      </TestCase.Example>
      <TestCase.Example modal itShould="directionsServiceBaseUrl test" >
        <DirectionsMapExample
          coordinates={coordinates}
          mapViewDirectionsProps={{
            origin: coordinates[0] ,
            destination: coordinates[1] ,
            apikey: apikey,
            directionsServiceBaseUrl:"ccdd"
        }}
        />
      </TestCase.Example>
      <TestCase.Example modal itShould="onStart test" >
        <DirectionsMapExample
          coordinates={coordinates}
          mapViewDirectionsProps={{
            origin: coordinates[0] ,
            destination: coordinates[1] ,
            apikey: apikey,
            onStart:(params) => {
              console.log(`Started routing between ${JSON.stringify(params.origin)} and ${JSON.stringify(params.destination)}`);
            },
        }}
        />
      </TestCase.Example>
      <TestCase.Example modal itShould="onReady test" >
        <DirectionsMapExample
          coordinates={coordinates}
          mapViewDirectionsProps={{
            origin: coordinates[0] ,
            destination: coordinates[1] ,
            apikey: apikey,
            onReady:(result) => {
              console.log(`result Distance: ${result.distance} km`)
              console.log(`result Duration: ${result.duration} min.`)
            }
        }}
        />
      </TestCase.Example>
      <TestCase.Example modal itShould="onError test" >
        <DirectionsMapExample
          coordinates={coordinates}
          mapViewDirectionsProps={{
            origin: coordinates[0] ,
            destination: coordinates[1] ,
            apikey: "cc",
            onError:(errorMessage) => {
              console.log(`GOT AN ERROR ${JSON.stringify(errorMessage)} `);
            }
        }}
        />
      </TestCase.Example>
    </TestSuite>
  );
}

const DirectionsMapExample = ({ coordinates, mapViewDirectionsProps }) => {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={StyleSheet.absoluteFillObject}      
      >
        {coordinates.map((coordinate, index) => (
          <Marker key={`marker_${index}`} coordinate={coordinate} />
        ))}
        {coordinates.length >= 2 && (
          <MapViewDirections
            {...mapViewDirectionsProps}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    height: 300,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
