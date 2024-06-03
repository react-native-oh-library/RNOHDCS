import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import MapView from 'react-native-maps';
import XMarksTheSpot from './CustomOverlayXMarksTheSpot';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 39.924139;
const LONGITUDE = 116.403386;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class CustomOverlay extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      coordinates: [
        {
          longitude: 116.396874,
          latitude: 39.928756,
        },
        {
          longitude: 116.409125,
          latitude: 39.929351,
        },
        {
          longitude: 116.397455,
          latitude: 39.919423,
        },
        {
          longitude: 116.409447,
          latitude: 39.920068,
        },
      ],
      center: {
        longitude: 116.403386,
        latitude: 39.924139,
      },
    };
  }

  render() {
    const {coordinates, center, region} = this.state;
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={region}>
          <XMarksTheSpot coordinates={coordinates} center={center} />
        </MapView>
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
});

export default CustomOverlay;
