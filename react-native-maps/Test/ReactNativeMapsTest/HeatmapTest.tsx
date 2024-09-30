import React from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
import MapView, { Heatmap } from "@react-native-oh-tpl/react-native-maps";
import { TestCase, Tester } from "@rnoh/testerino";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 34.21;
const LONGITUDE = 108.84;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export class HeatmapTest extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, height: "100%" }}>
        <Tester>
          <TestCase
            itShould="Heatmap: points"
          >
            <View style={styles.container}>
              <MapView
                style={styles.map}
              >
                <Heatmap
                  points={[{ latitude: LATITUDE, longitude: LONGITUDE }]}
                  radius={40}
                  opacity={0.5}
                  gradient={{
                    colors: ['#336600', '#99aacc', '#ff0000'],
                    startPoints: [0, 0.3, 0.6],
                    colorMapSize: 128
                  }}
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