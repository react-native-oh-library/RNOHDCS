import { Tester } from '@rnoh/testerino';
import React from 'react';
import { Location, MapView, Overlay } from 'react-native-baidu-map';


export function BaiduMapCombinationUseTest() {
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
                zoom={9.0}
                mapType={2}
                trafficEnabled={true}
                zoomGesturesEnabled={true}
                scrollGesturesEnabled={true}
                zoomControlsVisible={true}
                showsUserLocation={true}
                locationData={{ latitude: 38.914935, longitude: 115.403119 }}
                onMapClick={_onMapClick}
                onMapLoaded={_onMapLoaded}
                onMapDoubleClick={_onMapDoubleClick}
                style={{ width: '100%', height: 600 }}
            >
                <Overlay.Circle
                    radius={6000}
                    fillColor='0000FF'
                    stroke={{ width: 12, color: 'AAEEFF11' }}
                    center={{ latitude: 38.914935, longitude: 115.403119 }} />

                <Overlay.Marker
                    location={{ latitude: 39.844935, longitude: 115.603119 }} onClick={() => {
                        console.log("baidumap Marker CLICK1")
                    }} icon={{ uri: "https://maponline0.bdimg.com/sty/map_icons2x/MapRes/huochezhan.png?udt=20230227" }} />

                <Overlay.Marker
                    perspective = {true}
                    flat = {true}
                    rotate = {20}
                    animateType= {'drop'}
                    alpha={0.5}
                    location={{ latitude: 40.044935, longitude: 115.603119 }} onClick={() => {
                        console.log("baidumap Marker CLICK2")
                    }} icon={{ uri: "https://maponline0.bdimg.com/sty/map_icons2x/MapRes/huochezhan.png?udt=20230227" }} />


                <Overlay.Polyline
                    points={[{ latitude: 38.914935, longitude: 115.403119 }, { latitude: 39.014935, longitude: 115.603119 }, { latitude: 38.814935, longitude: 115.603119 }]}
                    stroke={{ width: 5, color: 'AA000000' }} />

                <Overlay.Polygon
                    points={[{ latitude: 38.914935, longitude: 115.403119 }, { latitude: 38.614935, longitude: 115.203119 }, { latitude: 39.414935, longitude: 115.403119 }]}
                    stroke={{ width: 5, color: 'AA000000' }}
                    fillColor='0000FF' />
                <Overlay.Text
                    location={{ latitude: 38.614935, longitude: 115.403119 }}
                    fontColor='0000FF'
                    fontSize={32}
                    bgColor='888888'
                    rotate={10}
                    text='overlay Text test' />
            </MapView>
    </Tester>
  );
}

