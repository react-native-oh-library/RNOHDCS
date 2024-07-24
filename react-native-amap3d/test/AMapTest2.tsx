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
   
    return (
        <Tester>
            <TestSuite name="PlatformColor">
                <TestCase itShould="MapView initialPage props">
                    <MapView
                        mapType={2}
                        myLocationEnabled={false}
                        tiltGesturesEnabled={true}
                        rotateGesturesEnabled={true}
                        scrollGesturesEnabled={true}
                        zoomGesturesEnabled={true}
                        minZoom={3}
                        maxZoom={18}
                        trafficEnabled={false}
                        labelsEnabled={false}
                        buildingsEnabled={false}
                        scaleControlsEnabled={false}
                        zoomControlsEnabled={false}
                        compassEnabled={false}
                        myLocationButtonEnabled={false}
                        initialCameraPosition={{
                            target: {
                                latitude: 39.51095,
                                longitude: 116.47296,
                            },
                            zoom: 15,
                        }}
                            > 
                        <Circle
                            strokeWidth={50}
                            strokeColor="rgba(0, 255, 0, 0.5)"
                            fillColor="rgba(255, 0, 0, 0.5)"
                            radius={1000}
                            zIndex = {1}
                            center={{ latitude: 39.906901, longitude: 116.397972 }}
                        />
                        <Polygon
                            strokeWidth={5}
                            strokeColor="rgba(0, 0, 255, 0.5)"
                            fillColor="rgba(255, 0, 0, 0.5)"
                            points={points}
                            zIndex = {2}
                        />
                        <Polygon
                            strokeWidth={10}
                            strokeColor="rgba(95, 36, 202, 0.5)"
                            fillColor="rgba(255, 235, 123, 0.5)"
                            points={points2}
                        />
                        <Polyline width={200}  color="rgba(0, 255, 0, 0.5)" points={line1} />
                        <Polyline
                            width={100}
                            colors={["#f44336", "#523140", "#951234"]}
                            points={line3}
                            zIndex = {1}
                            geodesic = { false}
                            gradient = { false}
                        />
                        <Marker
                            draggable={ false }
                            flat = { false}
                            position={{ latitude: 39.806901, longitude: 116.397972 }}
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