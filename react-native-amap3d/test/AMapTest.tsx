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

    const _onPress = (event: ReactNative.NativeSyntheticEvent<LatLng>) => {
        console.info("AMapViewEventType map3d demo  ===" + event.nativeEvent.latitude + "===" + event.nativeEvent.longitude)
    }

    const _onLongPress = (event: ReactNative.NativeSyntheticEvent<LatLng>) => {
        console.info("AMapViewEventType map3d demo longevent===" + event.nativeEvent.latitude + "===" + event.nativeEvent.longitude)
    }
	
    const _onPressPoi = (event: ReactNative.NativeSyntheticEvent<MapPoi>) => {
        console.info("AMapViewEventType map3d demo onPressPoi")
    }

    const _onLoad = (event: ReactNative.NativeSyntheticEvent<voidEvent>) => {
        Alert.alert("onLoad successful")
    }

    const _onMarkerPress = () => {
        Alert.alert("onPress")
    }

    const _onMarkerDragStart = () => {
        console.info("AMapViewEventType map3d marker onDragStart")
    }

    const _onMarkerDrag = () => {
        console.info("AMapViewEventType map3d marker onDrag")
    }

    const _onMarkerDragEnd = () => {
        Alert.alert("onDragEnd")
    }

    const _onPolylinePress = () => {
        console.info("AMapViewEventType map3d polyline onPress width 200")
    }
    return (
        <Tester>
            <TestSuite name="PlatformColor">
                <TestCase itShould="MapView initialPage props">
                    <MapView
                        mapType={1}
                        myLocationEnabled={true}
                        onPress={_onPress}
                        onLongPress={_onLongPress}
                        onPressPoi={_onPressPoi}
                        onLoad={_onLoad}
                        tiltGesturesEnabled={true}
                        rotateGesturesEnabled={true}
                        scrollGesturesEnabled={true}
                        zoomGesturesEnabled={true}
                        minZoom={3}
                        maxZoom={18}
                        trafficEnabled={true}
                        labelsEnabled={true}
                        buildingsEnabled={true}
                        scaleControlsEnabled={true}
                        zoomControlsEnabled={true}
                        compassEnabled={true}
                        myLocationButtonEnabled={true}
                        initialCameraPosition={{
                            target: {
                                latitude: 39.91095,
                                longitude: 116.37296,
                            },
                            zoom: 8,
                        }
                            > 
                        <Circle
                            strokeWidth={5}
                            strokeColor="rgba(0, 0, 255, 0.5)"
                            fillColor="rgba(255, 0, 0, 0.5)"
                            radius={500}
                            zIndex = {1}
                            center={{ latitude: 39.906901, longitude: 116.397972 }}
                        />
                        <Circle
                            strokeWidth={10}
                            strokeColor="rgba(22, 69, 55, 0.5)"
                            fillColor="rgba(36, 21, 36, 0.5)"
                            radius={500}
                            center={{ latitude: 39.966901, longitude: 116.397972 }}
                        />
                        
                        <Polygon
                            strokeWidth={5}
                            strokeColor="rgba(0, 0, 255, 0.5)"
                            fillColor="rgba(255, 0, 0, 0.5)"
                            points={points}
                            zIndex = {1}
                        />
                        <Polygon
                            strokeWidth={10}
                            strokeColor="rgba(95, 36, 202, 0.5)"
                            fillColor="rgba(255, 235, 123, 0.5)"
                            points={points2}
                        />
                        <Polyline width={100}  color="rgba(0, 255, 0, 0.5)" points={line1} onPress={_onPolylinePress} />
                        <Polyline
                            width={100}
                            colors={["#f44336", "#4caf50", "#00ff23"]}
                            points={line3}
                            zIndex = {1}
                            geodesic = { true}
                            gradient = { true}
                        />
                        <Marker
                            draggable={ true }
                            flat = { true}
                            centerOffset = { 0.5, 1}
                            anchor = { 0.5, 1}
                            position={{ latitude: 39.806901, longitude: 116.397972 }}
                            onPress={_onMarkerPress}
                            onDragStart={_onMarkerDragStart}
                            onDrag={_onMarkerDrag}
                            onDragEnd={_onMarkerDragEnd}
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