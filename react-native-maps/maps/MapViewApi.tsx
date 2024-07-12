import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Alert} from 'react-native';

import MapView, {Marker} from 'react-native-maps';

const LATITUDE = 39.9;
const LONGITUDE = 116.4;

class MapViewApi extends React.Component<any, any> {

  constructor(props: any) {
    super(props);

    this.state = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
    };
  }

  map: any;
  marker: any;
  
  pointForCoordinate() {
    const point = this.map.pointForCoordinate({latitude: LATITUDE, longitude: LONGITUDE});
    Alert.alert('Current point', JSON.stringify(point), 
    [{text: 'OK'}], 
    {cancelable: true,});
  }

  coordinateForPoint() {
    const coordinate = this.map.coordinateForPoint({x: 608, y: 1030});
    Alert.alert('Current coordinate', JSON.stringify(coordinate), 
    [{text: 'OK'}], 
    {cancelable: true,});
  }

  async getMapBoundaries() {
    const bounds = await this.map.getMapBoundaries();
    Alert.alert('Map bounds', JSON.stringify(bounds), 
    [{text: 'OK'}], 
    {cancelable: true,});
  }

  async redrawMarker() {
    this.marker.redraw();
    Alert.alert('Redraw marker sucess', '', 
    [{text: 'OK'}], 
    {cancelable: true,});
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          ref={ref => {
            this.map = ref;
          }}
          style={styles.map}
          initialCamera={{
            center: {
              latitude: LATITUDE,
              longitude: LONGITUDE,
            },
            pitch: 45,
            heading: 90,
            altitude: 1000,
            zoom: 10,
          }}
          onPress={e=>{
            console.log('liwang-----rnlog----->e=' + JSON.stringify(e.nativeEvent));
            this.setState({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            })
          }}
        >
          <Marker
              ref={ref => {
                this.marker = ref;
              }}
              coordinate={{latitude: this.state.latitude, longitude: this.state.longitude}}
            />
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.pointForCoordinate()}
            style={[styles.bubble, styles.button]}>
            <Text>Point for Coordinate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.coordinateForPoint()}
            style={[styles.bubble, styles.button]}>
            <Text>Coordinate for point</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.getMapBoundaries()}
            style={[styles.bubble, styles.button]}>
            <Text>Map Boundaries</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.redrawMarker()}
            style={[styles.bubble, styles.button]}>
            <Text>Redraw Marker</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  button: {
    marginTop: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default MapViewApi;
