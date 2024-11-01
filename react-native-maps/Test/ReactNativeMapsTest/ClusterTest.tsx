import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import MapView, { MapCluster } from "@react-native-oh-tpl/react-native-maps";
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 34.21;
const LONGITUDE = 108.84;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

const DEFAULT_REGION = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const getClusterItems = (num: number) => {
  const items = [];
  for (let i = 0; i < num; i++) {
    const random1 = (Math.random() * num - num / 2);
    const random2 = (Math.random() * num - num / 2);
    items.push({ position: { latitude: LATITUDE + SPACE * random1, longitude: LONGITUDE + SPACE * random2 } });
  }
  return items;
}

export class ClusterTest extends React.Component<any, any> {
  render() {
    const propList = (
      <TestSuite name="属性">
        <TestCase itShould="distance: 聚合距离, 单位vp--必需属性，以下可选属性都需要该属性配合使用，图中显示已设置该属性值">
          <View></View>
        </TestCase>
        <TestCase itShould="clusterItems: 待聚合节点数组--必需属性，以下可选属性都需要该属性配合使用，图中显示已设置该属性值">
          <View></View>
        </TestCase>
      </TestSuite>
    );

    const clusterProps = {
      distance: 100,
      clusterItems: getClusterItems(100),
    };

    return (
      <>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={DEFAULT_REGION}
          >
            <MapCluster 
              {...clusterProps}
              onPress={(event) => {
                console.log('click cluster number is ', JSON.parse(event.nativeEvent.points)?.length);
              }}
            />
          </MapView>
        </View>
        {/* @ts-ignore */}
        <ScrollView style={{ flex: 1, height: "calc(100% - 200px)" }}>
          <Tester>
            {propList}
          </Tester>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
    position: 'relative',
    height: 200,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonBubble: {
    backgroundColor: '#999999',
    alignItems: 'center',
    padding: 12,
    borderRadius: 20,
  },
});