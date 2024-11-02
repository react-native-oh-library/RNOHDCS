import React, { useState } from 'react';
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';

const INITIAL_REGION = {
  latitude: 52.5,
  longitude: 19.2,
  latitudeDelta: 8.5,
  longitudeDelta: 8.5,
};
const markers = [
  { coordinate: { latitude: 52.4, longitude: 18.7 } },
  { coordinate: { latitude: 52.1, longitude: 18.4 } },
  { coordinate: { latitude: 52.6, longitude: 18.3 } },
  { coordinate: { latitude: 51.6, longitude: 18.0 } },
  { coordinate: { latitude: 53.1, longitude: 18.8 } },
  { coordinate: { latitude: 52.9, longitude: 19.4 } },
  { coordinate: { latitude: 52.2, longitude: 21 } },
  { coordinate: { latitude: 52.4, longitude: 21 } },
  { coordinate: { latitude: 51.8, longitude: 20 } }
]

const MapClusteringExample = () => {
  const [onPressText, setOnPressText] = useState('');
  return <MapView
          initialRegion={INITIAL_REGION}
          style={{ flex: 1 }}
          clusterDistance={100}
          >
          {markers.map((marker, idx) => <Marker key={idx} coordinate={marker.coordinate} />)}
        </MapView>
};

export default MapClusteringExample;
