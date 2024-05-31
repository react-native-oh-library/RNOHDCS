import React from 'react';
import MapView, {Geojson} from 'react-native-maps';
import {StyleSheet,Dimensions} from 'react-native';

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

const myPlace: any = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [116.4, 39.9],
      },
    },
    {
      type: 'Feature',
      properties: {
        'stroke': '#00ff00',

        'stroke-opacity': '0.8',
        'stroke-width': 5,
      },
      geometry: {
        type: 'LineString',
        coordinates: [[116.40114271198406, 39.87050495147992], [116.39061106586493, 39.85270315146096], [116.38054013185855, 39.86001319323932]],
      },
    },
    {
      type: 'Feature',
      properties: {
        'fill': '#ff00ff',
        'stroke': '#0000ff',

        'fill-opacity': '1',
        'stroke-opacity': '1',
        'stroke-width': 5,
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[116.403821, 39.906956], [116.403821, 39.906956], [116.41802164024656, 39.89954850110802], [116.40787248082822, 39.8876178892764]], 
                      [[116.413825, 39.916976], [116.413821, 39.916956], [116.41803164024656, 39.89954950110802], [116.40787348082822, 39.8876188892764]]],
        holes: [[116.403821, 39.906956], [116.403821, 39.906956], [116.41802164024656, 39.89954850110802], [116.40787248082822, 39.8876178892764]],
      },
    },
    
  ],
};

const GeojsonMap = () => (
  <MapView initialRegion={state.region} style={{...StyleSheet.absoluteFillObject}}>
    <Geojson geojson={myPlace} />
  </MapView>
);

export default GeojsonMap;
