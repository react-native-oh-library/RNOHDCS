import { Tester } from '@rnoh/testerino';
import React from 'react';
import { Location, MapView } from 'react-native-baidu-map';


export function BaiduMapPropTest() {
  const _onMapClick = (location: Location) => {
    console.log('baidumap _onMapClick location latitude:' + location.latitude);
    console.log('baidumap _onMapClick location longitude:' + location.longitude);
  }

  const _onMapDoubleClick = () => {
    console.log('baidumap _onMapDoubleClick');
  }

  const _onMapLoaded = () => {
    console.log('baidumap _onMapLoaded');
  }


  return (
    <Tester>
        <MapView
          center={{ latitude: 38.914935, longitude: 115.403119 }}
          zoom={12.0}
          mapType={1}
          trafficEnabled={false}
          zoomGesturesEnabled={false}
          scrollGesturesEnabled={false}
          zoomControlsVisible={false}
          showsUserLocation={false}
          locationData={{ latitude: 38.914935, longitude: 115.403119 }}
          onMapClick={_onMapClick}
          onMapLoaded={_onMapLoaded}
          onMapDoubleClick={_onMapDoubleClick}
          style={{ width: '100%', height: "100%" }}
        >
        </MapView>
    </Tester>
  );
}

