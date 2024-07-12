import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { MapApp, Location, BaiduMapManager, MapView, Overlay } from 'react-native-baidu-map';


function App({ }): JSX.Element {

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


    function _TestTurboModule() {
        console.log('baidumap _TestTurboModule');
        BaiduMapManager.initSDK('test');
        BaiduMapManager.hasLocationPermission().then((hasPermission: boolean) => {
            console.log('baidumap hasLocationPermission:' + hasPermission);
        })
        MapApp.openDrivingRoute({ latitude: 38.914935, longitude: 115.403119, name: "" }, { latitude: 39.914935, longitude: 116.403119, name: "" });
        MapApp.openTransitRoute({ latitude: 36.914935, longitude: 113.403119, name: "" }, { latitude: 37.914935, longitude: 114.403119, name: "" });
        MapApp.openWalkNavi({ latitude: 34.914935, longitude: 111.403119, name: "" }, { latitude: 35.914935, longitude: 112.403119, name: "" });
    }
    return (
        <View >
            <View style={[styles.button, { marginLeft: 100, marginTop: 40 }]}
                onTouchEnd={() => {
                    _TestTurboModule();
                }
                }>
                <Text style={styles.buttonText}>_TestTurboModule</Text>
            </View>
            <MapView
                center={{ latitude: 38.914935, longitude: 115.403119 }}
                zoom={12.0}
                mapType={1}
                trafficEnabled={true}
                zoomGesturesEnabled={true}
                scrollGesturesEnabled={true}
                zoomControlsVisible={true}
                showsUserLocation={true}
                locationData={{ latitude: 38.914935, longitude: 115.403119 }}
                onMapClick={_onMapClick}
                onMapLoaded={_onMapLoaded}
                onMapDoubleClick={_onMapDoubleClick}
                style={{ width: '100%', height: '90%' }}
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
        </View>

    )
}

const styles = StyleSheet.create({
    button: {
        width: 160,
        height: 36,
        backgroundColor: 'hsl(190, 50%, 70%)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    buttonText: {
        width: '100%',
        height: '100%',
        fontWeight: 'bold',
    },
});

export default App;