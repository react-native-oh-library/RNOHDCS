import React from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
import MapView, { UrlTile, WMSTile } from "@react-native-oh-tpl/react-native-maps";
import { TestCase, Tester } from "@rnoh/testerino";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 34.21;
const LONGITUDE = 108.84;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export class UrlWMSTileTest extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      marker1: true,
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    };
  }

  render() {
    const { region } = this.state;
    const Tile = true ? UrlTile : WMSTile; // 切换瓦片组件
    return (
      <ScrollView style={{ flex: 1, height: "100%" }}>
        <Tester>
          <TestCase
            itShould="UrlTile & WMSTile"
          >
            <View style={styles.container}>
              <MapView
                provider={this.props.provider}
                style={styles.map}
                initialRegion={region}
              >
                <Tile
                  urlTemplate="http://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  minimumZ={3}
                  maximumZ={16}
                  maximumNativeZ={13}
                  zIndex={0}
                  tileSize={128}
                  doubleTileSize
                  shouldReplaceMapContent
                  flipY
                  tileCachePath="/tmp/rn/maps/cache"
                  tileCacheMaxAge={1440}
                  offlineMode
                  opacity={0.7}
                />
              </MapView>
            </View>
          </TestCase>
        </Tester>
      </ScrollView>
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
});