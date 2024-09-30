import React from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView, Alert } from "react-native";
import MapView, { Callout, CalloutSubview, Marker } from "@react-native-oh-tpl/react-native-maps";
import { TestCase, Tester } from "@rnoh/testerino";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 34.21;
const LONGITUDE = 108.84;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export class CalloutTest extends React.Component<any, any> {
  marker2: any;

  constructor(props: any) {
    super(props);

    this.state = {
      cnt: 0,
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      marker: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
      },
    };
  }

  render() {
    const {region, marker} = this.state;
    return (
      <ScrollView style={{ flex: 1, height: "100%" }}>
        <Tester>
          <TestCase
            itShould="Callout"
          >
            <View style={styles.container}>
              <MapView
                style={styles.map}
                region={region}
              >
                <Marker
                  coordinate={marker} 
                  ref={ref => {
                    this.marker2 = ref;
                  }}
                >
                  <Callout 
                    alphaHitTest
                    tooltip
                    onPress={_ => {
                      Alert.alert('callout pressed');
                    }}>
                    <View style={[styles.container, this.props.style]}>
                      <View style={styles.bubble}>
                        <View style={styles.amount}>
                          <Text>{`This is a custom callout bubble view ${this.state.cnt}`}</Text>
                          <CalloutSubview
                            onPress={() => {
                              this.setState({cnt: this.state.cnt + 1}, () => {
                                this.marker2.redrawCallout();
                              });
                            }}
                            style={[styles.calloutButton]}>
                            <Text>Click me</Text>
                          </CalloutSubview>
                        </View>
                      </View>
                      <View style={styles.arrowBorder} />
                      <View style={styles.arrow} />
                    </View>
                  </Callout>
                </Marker>
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
  bubble: {
    width: 140,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#4da2ab',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    borderColor: '#007a87',
    borderWidth: 0.5,
  },
  amount: {
    flex: 1,
  },
  calloutButton: {
    width: 'auto',
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#4da2ab',
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    alignSelf: 'center',
    marginTop: -0.5,
  },
});