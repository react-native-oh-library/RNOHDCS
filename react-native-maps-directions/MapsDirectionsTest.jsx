import React, { useState } from 'react';
import { Alert, StyleSheet, View, Button } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { Marker } from "@react-native-oh-tpl/react-native-maps";
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

const apikey = 'DQEDALFUpDsdvCkITGvmMIyKAS%2BBH7Xd4WHr6BaKl1vrx%2BIDryOgdjfB%2FC7McfCzO3BNsL3wPvkJlQdddIoX7Ym6tGlE03h0uGe4yA%3D%3D';
const coordinates = [
  { latitude: 37.3317876, longitude: -122.0054812 },
  { latitude: 37.771707, longitude: -122.4053769 },
];

export function MapsDirectionsTest() {

  const [coordinates, setCoordinates] = useState([
    { latitude: 37.3317876, longitude: -122.0054812 },
    { latitude: 37.771707, longitude: -122.4053769 },
  ]);

  const newCoordinatesExample = () => {
    setCoordinates([
      { latitude: 37.3317876, longitude: -122.1054812 },
      { latitude: 37.771707, longitude: -122.4053769 },
    ])
  };

  const oldCoordinatesExample = () => {
    setCoordinates([
      { latitude: 37.3317876, longitude: -122.0054812 },
      { latitude: 37.771707, longitude: -122.4053769 },
    ])
  };

  return (
    <Tester>
      <TestSuite name="mapTest">
        <TestCase modal itShould="origin and destination" >
          <DirectionsMapExample
            coordinates={coordinates}
            mapViewDirectionsProps={{
              origin: coordinates[0],
              destination: coordinates[1],
              apikey: apikey,
              strokeWidth: 4,
            }}
          />
        </TestCase>
        <TestCase modal itShould="strokeWidth test" >
          <DirectionsMapExample
            coordinates={coordinates}
            mapViewDirectionsProps={{
              origin: coordinates[0],
              destination: coordinates[1],
              apikey: apikey,
              strokeWidth: 10,
            }}
          />
        </TestCase>
        <TestCase modal itShould="strokeColor test" >
          <DirectionsMapExample
            coordinates={coordinates}
            mapViewDirectionsProps={{
              origin: coordinates[0],
              destination: coordinates[1],
              apikey: apikey,
              strokeWidth: 4,
              strokeColor: "#DA3736",
            }}
          />
        </TestCase>
        <TestCase modal itShould="mode:BICYCLING" >
          <DirectionsMapExample
            coordinates={coordinates}
            mapViewDirectionsProps={{
              origin: coordinates[0],
              destination: coordinates[1],
              apikey: apikey,
              strokeWidth: 4,
              mode: 'BICYCLING',
            }}
          />
        </TestCase>

        <TestCase modal itShould="mode:WALKING" >
          <DirectionsMapExample
            coordinates={coordinates}
            mapViewDirectionsProps={{
              origin: coordinates[0],
              destination: coordinates[1],
              apikey: apikey,
              strokeWidth: 4,
              mode: 'WALKING',
            }}
          />
        </TestCase>

        <TestCase modal itShould="resetOnChange true" >
          <View >
            <Button
              title="newCoordinatesExample"
              color="#9a73ef"
              onPress={() => {
                newCoordinatesExample()
              }}
            />
          </View>
          <DirectionsMapExample
            coordinates={coordinates}
            mapViewDirectionsProps={{
              origin: coordinates[0],
              destination: coordinates[1],
              apikey: apikey,
              strokeWidth: 4,
              resetOnChange: true
            }}
          />
        </TestCase>

        <TestCase modal itShould="resetOnChange false" >
        <View >
            <Button
              title="oldCoordinatesExample"
              color="#9a73ef"
              onPress={() => {
                oldCoordinatesExample()
              }}
            />
          </View>
          <DirectionsMapExample
            coordinates={coordinates}
            mapViewDirectionsProps={{
              origin: coordinates[0],
              destination: coordinates[1],
              apikey: apikey,
              strokeWidth: 4,
              resetOnChange: false
            }}
          />
        </TestCase>
        <TestCase modal itShould="directionsServiceBaseUrl test" >
          <DirectionsMapExample
            coordinates={coordinates}
            mapViewDirectionsProps={{
              origin: coordinates[0],
              destination: coordinates[1],
              apikey: apikey,
              directionsServiceBaseUrl: "ccdd"
            }}
          />
        </TestCase>
        <TestCase modal itShould="onStart test" >
          <DirectionsMapExample
            coordinates={coordinates}
            mapViewDirectionsProps={{
              origin: coordinates[0],
              destination: coordinates[1],
              apikey: apikey,
              onStart: (params) => {
                console.log(`Started routing between ${JSON.stringify(params.origin)} and ${JSON.stringify(params.destination)}`);
                Alert.alert(`Started routing between ${JSON.stringify(params.origin)} and ${JSON.stringify(params.destination)}`)
              },
            }}
          />
        </TestCase>
        <TestCase modal itShould="onReady test" >
          <DirectionsMapExample
            coordinates={coordinates}
            mapViewDirectionsProps={{
              origin: coordinates[0],
              destination: coordinates[1],
              apikey: apikey,
              onReady: (result) => {
                console.log(`result Distance: ${result.distance} km`)
                console.log(`result Duration: ${result.duration} min.`)
                Alert.alert(`result Distance: ${result.distance} km`)
              }
            }}
          />
        </TestCase>
        <TestCase modal itShould="onError test" >
          <DirectionsMapExample
            coordinates={coordinates}
            mapViewDirectionsProps={{
              origin: coordinates[0],
              destination: coordinates[1],
              apikey: "cc",
              onError: (errorMessage) => {
                console.log(`GOT AN ERROR ${JSON.stringify(errorMessage)} `);
                Alert.alert(`GOT AN ERROR ${JSON.stringify(errorMessage)} `)
              }
            }}
          />
        </TestCase>
      </TestSuite>
    </Tester>
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
  }
});
