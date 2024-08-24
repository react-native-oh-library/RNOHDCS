import React, { Component, Fragment } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Defs, Pattern, Rect } from 'react-native-svg';

const styles = StyleSheet.create({});

export default class Issue267 extends Component {

  render() {
    const data1 = [{ "height": 82.33333333333334, "marginBottom": 59.5, "marginRight": 20, "width": 30, zIndex: 7, "height1": 82.33333333333334, "width1": "100%" },
    { "height": 99, "marginBottom": 59.5, "marginRight": 20, "width": 30, zIndex: 6, "height1": 99, "width1": "100%" },
    { "height": 115.66666666666667, "marginBottom": 59.5, "marginRight": 20, "width": 30, zIndex: 5, "height1": 115.66666666666667, "width1": "100%" },
    { "height": 132.33333333333334, "marginBottom": 59.5, "marginRight": 20, "width": 30, zIndex: 4, "height1": 132.33333333333334, "width1": "100%" },
    { "height": 149, "marginBottom": 59.5, "marginRight": 20, "width": 30, zIndex: 3, "height1": 149, "width1": "100%" },
    { "height": 165.66666666666669, "marginBottom": 59.5, "marginRight": 20, "width": 30, zIndex: 2, "height1": 165.66666666666669, "width1": "100%" },
    { "height": 182.33333333333334, "marginBottom": 59.5, "marginRight": 20, "width": 30, zIndex: 1, "height1": 182.33333333333334, "width1": "100%" }]
    const data = [
      { value: 50, label: '50', },
      { value: 60, label: '60', },
      { value: 70, label: '70', },
      { value: 80, label: '80', },
      { value: 90, label: '90', },
      { value: 100, label: '100' },
      { value: 110, label: '110' }]

    return (
      <View>
        <View style={{
          "height": 270, "marginBottom": -37, "marginTop": 0, "width": "100%"
        }}>
          <ScrollView style={{ "bottom": 1, "marginLeft": 36, "position": "absolute" }}
            scrollEnabled={true}
            contentContainerStyle={{ "flexDirection": 'row', "alignItems": "flex-end", "height": 270, "paddingBottom": 0, "paddingLeft": 20, "width": 390 }}>
            <Fragment>
              {
                data1.map((item, index) => {
                  return (
                    <TouchableOpacity key={'a_' + index} style={{ ...item }}>
                      <View
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          width: '100%',
                          overflow: 'hidden',
                          height: 165.66666666666669,
                          left: 10,
                        }}>
                        <View
                          style={{ "width": item.width1, "height": item.height1 }}>
                          <Svg>
                            <Defs>
                              <Pattern
                                id="myPattern"
                                patternUnits="userSpaceOnUse"
                                width="30"
                                height="6">
                                <Rect
                                  x={0}
                                  y={0}
                                  height={4}
                                  width={30}
                                  rx={2}
                                  ry={2}
                                  fill={'#D38600'}
                                />
                              </Pattern>
                            </Defs>
                            <Rect
                              stroke="transparent"
                              x="1"
                              y="1"
                              width="100%"
                              height="100%"
                              fill={`url(#myPattern)`}
                            />
                          </Svg>
                        </View>
                      </View>
                    </TouchableOpacity>)
                })
              }
            </Fragment>
          </ScrollView>
        </View>
      </View>
    );
  }
}