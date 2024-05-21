import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Circle,
  Rect,
  Path,
  G,
  Mask,
  Use,
  Polygon,
} from 'react-native-svg';

const SvgComponentPlaceholderTestDemo = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Defs LinearGradient Stop Rect</Text>
        <Svg height="110" width="300">

          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0" stopColor="rgb(255,0,0)" stopOpacity="0.7" />
              <Stop offset="1" stopColor="rgb(0,0,255)" stopOpacity="0.7" />
            </LinearGradient>
          </Defs>

          <Rect x="10" y="10" width="200" height="100" fill="url(#grad)" />

        </Svg>

        <Text>Mask Circle</Text>
        <Svg height="300" width="300">

          <Mask id="mask" x="0" y="0" width="100%" height="100%">
            <Rect x="0" y="0" width="100%" height="100%" fill="white" />
            <Circle cx="100" cy="100" r="50" fill="black" />
          </Mask>

          <Circle cx="150" cy="150" r="75" fill="yellow" mask="url(#mask)" />

        </Svg>

        <Text>G Use</Text>
        <Svg height="300" width="300">

          <Defs>
            <Polygon
              id="star"
              points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
              fill="yellow"
            />
          </Defs>

          <G>
            <Use href="#star" x="50" y="50" fill="purple" />
            <Use href="#star" x="150" y="50" fill="orange" />
            <Use href="#star" x="50" y="150" fill="green" />
            <Use href="#star" x="150" y="150" fill="red" />
          </G>

        </Svg>

        <Text>Rect Path Polygon</Text>
        <Svg height="300" width="300">

          <Rect x="10" y="10" width="200" height="100" fill="red" />
          <Path d="M10 200 Q 95 250, 200 200" fill="none" stroke="blue" strokeWidth="5" />
          <Polygon
            points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
            fill="yellow"
          />
          
        </Svg>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 36
  }
})

export default SvgComponentPlaceholderTestDemo;
