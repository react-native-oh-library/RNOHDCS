import { Tester } from '@rnoh/testerino';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MapApp, Location, BaiduMapManager, MapView } from 'react-native-baidu-map';


export function BaiduMapApiTest() {
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

    return (
      <Tester>
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
              style={{ width: '100%', height: '100%' }}
            >
            </MapView>
          </View>
      </Tester>
    );
  }

