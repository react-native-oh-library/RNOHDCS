import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import {NavigationContainer, Page} from './Navigation';
import {PortalProvider} from '@gorhom/portal';
import { 
  MapViewTest,
  MarkerTest,
  PolygonTest,
  PolylineTest,
  CircleTest,
  GeojsonTest,
  OverlayTest,
  UrlWMSTileTest,
  CalloutTest,
  HeatmapTest,
} from "./ReactNativeMapsTest";

function App() {
  return (
    <View style={{backgroundColor: 'black'}}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <NavigationContainer>
          <PortalProvider>
            <Page name="EXAMPLE: MapViewTest">
              <MapViewTest />
            </Page>
            <Page name="EXAMPLE: MarkerTest">
              <MarkerTest />
            </Page>
            <Page name="EXAMPLE: PolylineTest">
              <PolylineTest />
            </Page>
            <Page name="EXAMPLE: PolygonTest">
              <PolygonTest />
            </Page>
            <Page name="EXAMPLE: CircleTest">
              <CircleTest />
            </Page>
            <Page name="EXAMPLE: GeojsonTest">
              <GeojsonTest />
            </Page>
            <Page name="EXAMPLE: OverlayTest">
              <OverlayTest />
            </Page>
            {/* <Page name="EXAMPLE: UrlTile & WMSTile Test 不支持">
              <UrlWMSTileTest />
            </Page>
            <Page name="EXAMPLE: CalloutTest 不支持">
              <CalloutTest />
            </Page>
            <Page name="EXAMPLE: HeatmapTest 不支持">
              <HeatmapTest />
            </Page> */}
          </PortalProvider>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};

export default App;
