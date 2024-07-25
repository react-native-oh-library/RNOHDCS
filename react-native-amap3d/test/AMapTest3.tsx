import React from 'react';
import type * as ReactNative from "react-native";
import { TestCase, TestSuite, Tester } from '@rnoh/testerino';
import { StyleSheet, Alert } from 'react-native';
import { MapView, Circle, Polygon, Polyline, Marker, MapPoi, voidEvent, CameraPosition, LatLng } from 'react-native-amap3d';

export function AMap3dTest() {
    const points = [
        {
            latitude: 39.806901,
            longitude: 116.397972,
        },
        {
            latitude: 39.806901,
            longitude: 116.297972,
        },
        {
            latitude: 39.906901,
            longitude: 116.397972,
        },
    ];

    const points2 = [
        {
            latitude: 39.836901,
            longitude: 116.497972,
        },
        {
            latitude: 39.836901,
            longitude: 116.397972,
        },
        {
            latitude: 39.936901,
            longitude: 116.497972,
        },
    ];

    const line1 = [
        { latitude: 40.006901, longitude: 116.097972 },
        { latitude: 40.006901, longitude: 116.597972 },
    ];
    const line3 = [
        { latitude: 39.806901, longitude: 116.097972 },
        { latitude: 39.806901, longitude: 116.257972 },
        { latitude: 39.806901, longitude: 116.457972 },
        { latitude: 39.806901, longitude: 116.597972 },
    ];

    return (
        <Tester>
            <TestSuite name="PlatformColor">
                <TestCase itShould="MapView initialPage props">
                    <MapView
                        mapType={3}
                        myLocationEnabled={true}
                        tiltGesturesEnabled={true}
                        rotateGesturesEnabled={true}
                        scrollGesturesEnabled={true}
                        zoomGesturesEnabled={true}
                        minZoom={3}
                        maxZoom={18}
                        trafficEnabled={true}
                        labelsEnabled={true}
                        scaleControlsEnabled={true}
                        zoomControlsEnabled={true}
                        compassEnabled={true}
                        myLocationButtonEnabled={true}
                        initialCameraPosition={{
                            target: {
                                latitude: 39.91095,
                                longitude: 116.37296,
                            },
                            zoom: 3,
                        }}
                            > 
                        <Circle
                            strokeWidth={5}
                            strokeColor="rgba(0, 128, 255, 0.5)"
                            fillColor="rgba(255, 0, 128, 0.5)"
                            radius={2000}
                            zIndex = {1}
                            center={{ latitude: 39.906901, longitude: 116.397972 }}
                        />
                        <Circle
                            strokeWidth={10}
                            strokeColor="rgba(128, 69, 55, 0.5)"
                            fillColor="rgba(36, 21, 128, 0.5)"
                            radius={1000}
                            center={{ latitude: 39.966901, longitude: 116.397972 }}
                        />
                        
                        <Polygon
                            strokeWidth={5}
                            strokeColor="rgba(0, 0, 255, 0.5)"
                            fillColor="rgba(255, 0, 128, 0.5)"
                            points={points}
                            zIndex = {1}
                        />
                        <Polyline width={100}  color="rgba(0, 255, 255, 0.5)" points={line1}  />
                        <Polyline
                            width={100}
                            colors={["#741236", "#4caf50", "#123654"]}
                            points={line3}
                            zIndex = {1}
                            gradient = { true}
                        />
                        <Marker
                            draggable={ true }
                            flat = { false}
                            position={{ latitude: 40.806901, longitude: 116.397972 }}
                            zIndex = {1}
                        />
                    </MapView>
                </TestCase>
            </TestSuite >
        </Tester>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 24,
    }
});