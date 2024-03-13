import React from 'react';
import {NavigationContainer, Page} from '../components';
import {PortalProvider} from '@gorhom/portal';

import StaticMap from './maps/StaticMap';
import ThemeMap from './maps/ThemeMap';
import DisplayLatLng from './maps/DisplayLatLng';
import ViewsAsMarkers from './maps/ViewsAsMarkers';
import EventListener from './maps/EventListener';
import MarkerTypes from './maps/MarkerTypes';
import TestIdMarkers from './maps/TestIdMarkers';
import DraggableMarkers from './maps/DraggableMarkers';
import TakeSnapshot from './maps/TakeSnapshot';
import PolygonCreator from './maps/PolygonCreator';
import PolylineCreator from './maps/PolylineCreator';
import GradientPolylines from './maps/GradientPolylines';
import AnimatedMarkers from './maps/AnimatedMarkers';
import AnimatedViews from './maps/AnimatedViews';
import Callouts from './maps/Callouts';
import Overlays from './maps/Overlays';
import DefaultMarkers from './maps/DefaultMarkers';
import CustomMarkers from './maps/CustomMarkers';
import CachedMap from './maps/CachedMap';
import LoadingMap from './maps/LoadingMap';
import MapBoundaries from './maps/MapBoundaries';
import FocusOnMarkers from './maps/FitToSuppliedMarkers';
import FitToCoordinates from './maps/FitToCoordinates';
import LiteMapView from './maps/LiteMapView';
import CustomTiles from './maps/CustomTiles';
import WMSTiles from './maps/WMSTiles';
import ZIndexMarkers from './maps/ZIndexMarkers';
import MapStyle from './maps/MapStyle';
import LegalLabel from './maps/LegalLabel';
import SetNativePropsOverlays from './maps/SetNativePropsOverlays';
import CustomOverlay from './maps/CustomOverlay';
import MapKml from './maps/MapKml';
import BugMarkerWontUpdate from './maps/BugMarkerWontUpdate';
import ImageOverlayWithURL from './maps/ImageOverlayWithURL';
import ImageOverlayWithAssets from './maps/ImageOverlayWithAssets';
import AnimatedNavigation from './maps/AnimatedNavigation';
import ImageOverlayWithBearing from './maps/ImageOverlayWithBearing';
import GeojsonMap from './maps/Geojson';
import OnPoiClick from './maps/OnPoiClick';
import IndoorMap from './maps/IndoorMap';
import CameraControl from './maps/CameraControl';
import MassiveCustomMarkers from './maps/MassiveCustomMarkers';
import CacheURLTiles from './maps/CacheURLTiles';
import CacheWMSTiles from './maps/CacheWMSTiles';

export function MapsDemo() {
  return (
    <NavigationContainer>
      <PortalProvider>
        <Page name="StaticMap">
          <StaticMap />
        </Page>
        <Page name="ThemeMap 华为地图不支持">
          <ThemeMap />
        </Page>
        <Page name="Tracking Position">
          <DisplayLatLng />
        </Page>
        <Page name="Arbitrary Views as Markers 华为地图不支持">
          <ViewsAsMarkers />
        </Page>
        <Page name="Events">
          <EventListener />
        </Page>
        <Page name="Image Based Markers 华为地图不支持">
          <MarkerTypes />
        </Page>
        <Page name="Draggable Markers">
          <DraggableMarkers />
        </Page>
        <Page name="Polygon Creator">
          <PolygonCreator />
        </Page>
        <Page name="Polyline Creator">
          <PolylineCreator />
        </Page>
        <Page name="Gradient Polylines">
          <GradientPolylines />
        </Page>
        {/* <Page name="Animating with MapViews 原库demo报错 勿点">
          <AnimatedViews />
        </Page>
        <Page name="Animated Marker Position 原库demo报错 勿点">
          <AnimatedMarkers />
        </Page> */}
        <Page name="Custom Callouts 华为地图不支持">
          <Callouts />
        </Page>
        <Page name="Circles, Polygons, and Polylines">
          <Overlays />
        </Page>
        <Page name="Default Markers 华为地图不支持给marker设置颜色">
          <DefaultMarkers />
        </Page>
        <Page name="Custom Markers">
          <CustomMarkers />
        </Page>
        <Page name="Take Snapshot">
          <TakeSnapshot />
        </Page>
        {/* <Page name="Cached Map 原库无显示效果">
          <CachedMap />
        </Page> */}
        <Page name="Map with loading 华为地图不支持">
          <LoadingMap />
        </Page>
        <Page name="Get visible map boundaries 华为地图不支持">
          <MapBoundaries />
        </Page>
        {/* <Page name="Focus Map On Markers 原库无显示效果">
          <FocusOnMarkers />
        </Page> */}
        <Page name="Fit Map To Coordinates getMarkersFrames">
          <FitToCoordinates />
        </Page>
        <Page name="Android Lite MapView 华为地图不支持">
          <LiteMapView />
        </Page>
        <Page name="Custom Tiles 华为地图不支持">
          <CustomTiles />
        </Page>
        <Page name="WMS Tiles 华为地图不支持">
          <WMSTiles />
        </Page>
        <Page name="Position Markers with Z-index 华为地图不支持给 Marker 设置颜色">
          <ZIndexMarkers />
        </Page>
        <Page name="Customize the style of the map 华为地图不支持">
          <MapStyle />
        </Page>
        {/* <Page name="Reposition the legal label 与地图控件无关">
          <LegalLabel />
        </Page> */}
        <Page name="Update native props">
          <SetNativePropsOverlays />
        </Page>
        <Page name="Custom Overlay Component">
          <CustomOverlay />
        </Page>
        <Page name="Test ID for Automation">
          <TestIdMarkers />
        </Page>
        <Page name="Load Map with KML 华为地图不支持">
          <MapKml />
        </Page>
        {/* <Page name="BUG: Marker Won't Update (Android) 原库未实现，无实际意义">
          <BugMarkerWontUpdate />
        </Page> */}
        <Page name="Image Overlay Component with Assets 华为地图不支持">
          <ImageOverlayWithAssets />
        </Page>
        <Page name="Image Overlay Component with URL 华为地图不支持">
          <ImageOverlayWithURL />
        </Page>
        <Page name="Image Overlay with Bearing 华为地图不支持">
          <ImageOverlayWithBearing />
        </Page>
        <Page name="Animated Map Navigation">
          <AnimatedNavigation />
        </Page>
        <Page name="On Poi Click">
          <OnPoiClick />
        </Page>
        <Page name="Indoor Map 华为地图暂不支持">
          <IndoorMap />
        </Page>
        <Page name="CameraControl">
          <CameraControl />
        </Page>
        <Page name="MassiveCustomMarkers">
          <MassiveCustomMarkers />
        </Page>
        <Page name="Geojson">
          <GeojsonMap />
        </Page>
        <Page name="CacheURLTiles 华为地图不支持">
          <CacheURLTiles />
        </Page>
        <Page name="CacheWMSTiles 华为地图不支持">
          <CacheWMSTiles />
        </Page>
      </PortalProvider>
    </NavigationContainer>
  );
}