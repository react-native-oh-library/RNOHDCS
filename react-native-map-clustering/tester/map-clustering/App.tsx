import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Dimensions,
  Button,
  ScrollView
} from 'react-native';
import { NavigationContainer, Page } from './Navigation';
import { PortalProvider } from '@gorhom/portal';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';
const { width, height } = Dimensions.get('window');


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



const App = () => {
  const [onPressText, setOnPressText] = useState('');
  const [onRegionChangeCompleteText, setOnRegionChangeCompleteText] = useState('');
  const [onMarkerText, setOnMarkerText] = useState('');
  const [rrefText, setRrefText] = useState('');
  const rref = useRef(null);
  const comList = [
    {
      name: 'onClusterPress',
      prop: {
        onClusterPress: (cluster, markers) => {
          setOnPressText(`onClusterPress触发, cluster:${JSON.stringify(cluster)},markers:聚合数组长度${markers?.length}`);
        }
      },
      text: onPressText
    },
    {
      name: 'width: 200',
      prop: { width: 200 },
    },
    {
      name: 'width: 250',
      prop: { width: 250 },
    },
    {
      name: 'radius: 20',
      prop: { radius: 20 },
    },
    {
      name: 'radius: 200',
      prop: { radius: 200 },
    },
    {
      name: 'extent: 512',
      prop: { extent: 512 },
    },
    {
      name: 'extent: 112',
      prop: { extent: 112 },
    },
    {
      name: 'minZoom: 4',
      prop: { minZoom: 4 },
    },
    {
      name: 'minZoom: 1',
      prop: { minZoom: 1 },
    },
    {
      name: 'minPoints: 2',
      prop: { minPoints: 2 },
    },
    {
      name: 'minPoints: 4',
      prop: { minPoints: 4 },
    },
    {
      name: 'preserveClusterPressBehavior: false',
      prop: { preserveClusterPressBehavior: false },
    },
    {
      name: 'preserveClusterPressBehavior: true',
      prop: { preserveClusterPressBehavior: true },
    },
    {
      name: 'onRegionChangeComplete',
      prop: {
        onRegionChangeComplete: (region, markers) => {
          setOnRegionChangeCompleteText(`onRegionChangeComplete触发, region:${JSON.stringify(region)},markers:聚合数组长度${markers?.length}`);
        }
      },
      text: onRegionChangeCompleteText
    },
    {
      name: 'onMarkersChange',
      prop: {
        onMarkersChange: (markers) => {
          setOnMarkerText(`onMarkersChange触发, markers:聚合数组长度${markers?.length}`);
        }
      },
      text: onMarkerText
    },
    {
      name: 'superClusterRef',
      prop: { superClusterRef: rref },
      btn: () => {
        setRrefText(`superClusterRef触发, superClusterRef.current.options:${JSON.stringify(rref?.current.options)}`);
      },
      text: rrefText
    },
    {
      name: 'clusteringEnabled: false',
      prop: { clusteringEnabled: false },
    },
    {
      name: 'clusteringEnabled: true',
      prop: { clusteringEnabled: true },
    }
  ]
  return (
    <View style={{ backgroundColor: 'black' }}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <NavigationContainer>
          <PortalProvider>
            {comList.map((com: any) => {
              return (
                <Page
                  key={com.name}
                  name={`${com.name}`}>
                  <Tester>
                    <TestSuite name={'mapClusterDemo'}>
                      <TestCase itShould={com.name} tags={['C_API']} >
                        <View style={{ height: height - 200 }}>
                          <MapView
                            initialRegion={INITIAL_REGION}
                            style={{ flex: 1 }}
                            //@ts-ignore
                            clusterDistance={100}
                            {...com.prop}
                          >
                            {markers.map((marker, idx) => <Marker key={idx} coordinate={marker.coordinate} />)}
                          </MapView>
                          {com?.text && <Text>{com?.text}</Text>}
                          {com?.btn && <Button title={com.name} onPress={com?.btn} />}
                        </View>
                      </TestCase>
                    </TestSuite>
                  </Tester>
                </Page>
              );
            })}
          </PortalProvider>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}
export default App;