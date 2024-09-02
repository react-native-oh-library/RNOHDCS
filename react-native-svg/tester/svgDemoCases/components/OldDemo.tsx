import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Svg, { Path, Rect, Image, Circle, Polygon, LinearGradient, Stop, Defs } from 'react-native-svg';
const SVGDemo = () => {

  return (
    <ScrollView style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
      <View style={{ height: 20 }}>
      </View>
      <View>
        <Text>Path</Text>
        <Svg height="100" width="100">
          <Path
            d="M25 10 L98 65 L70 25 L16 77 L11 30 L0 4 L90 50 L50 10 L11 22 L77 95 L20 25"
            fill="none"
            stroke="red"
            strokeWidth="1"
          />
        </Svg>
      </View>

      <View>
        <Text>多Path</Text>
        <Svg height="100" width="100">
          <Path d="M50 0 L15 100 L85 100 Z" />
          <Path
            fill="red"
            d="M38.459,1.66A0.884,0.884,0,0,1,39,2.5a0.7,0.7,0,0,1-.3.575L23.235,16.092,27.58,26.1a1.4,1.4,0,0,1,.148.3,1.3,1.3,0,0,1,0,.377,1.266,1.266,0,0,1-2.078.991L15.526,20.6l-7.58,4.35a1.255,1.255,0,0,1-.485,0,1.267,1.267,0,0,1-1.277-1.258q0-.01,0-0.02a1.429,1.429,0,0,1,0-.446C7.243,20.253,8.6,16.369,8.6,16.29L3.433,13.545A0.743,0.743,0,0,1,2.9,12.822a0.822,0.822,0,0,1,.623-0.773l8.164-2.972,3.018-8.5A0.822,0.822,0,0,1,15.427,0a0.752,0.752,0,0,1,.752.555l2.563,6.936S37.65,1.727,37.792,1.685A1.15,1.15,0,0,1,38.459,1.66Z"
          />
          <Path
            fill="blue"
            d="M6.5 1C7.9 1 9 2.1 9 3.5c0 .8-.4 1.6-1.1 2.1-.4.2-.9.4-1.4.4s-1-.2-1.4-.4C4.4 5.1 4 4.3 4 3.5 4 2.1       5.1 1 6.5 1m0-1C4.6 0 3 1.6 3 3.5c0 1.2.6 2.2 1.5 2.9.6.4 1.3.6 2 .6s1.4-.2 2-.6c.9-.7 1.5-1.7 1.5-2.9C10 1.6 8.4 0 6.5 0zm3.6 8.9c.6.8.9 1.7.9 2.6v.5H2v-.5c0-1 .3-1.9.9-2.6 1 .7 2.3 1.1 3.6 1.1s2.6-.4 3.6-1.1m.2-1.4C9.3 8.4 8 9 6.5 9s-2.8-.6-3.8-1.5c-1.1 1-1.7 2.4-1.7 4 0 .5.1 1.5.2 1.5h10.6c.1 0 .2-1 .2-1.5 0-1.6-.7-3-1.7-4z"
          />
        </Svg>
      </View>

      <View>
        <Text>Rect和viewBox、preserveAspectRatio属性</Text>
        <Svg width="200" height="60" viewBox='0 0 200 200' preserveAspectRatio="none">
          <Rect
            x="25"
            y="5"
            width="150"
            height="50"
            fill="rgb(0,0,255)"
            strokeWidth="3"
            stroke="rgb(0,0,0)"
          />
        </Svg>
        <Svg width="200" height="60" viewBox='-100 0 300 300'>
          <Rect
            x="25"
            y="5"
            width="150"
            height="50"
            fill="rgb(0,0,255)"
            strokeWidth="3"
            stroke="rgb(0,0,0)"
          />
        </Svg>
      </View>

      <View>
        <Text>多Rect</Text>
        <Svg width="100" height="100" viewBox="0 0 56 56" color="red">
          <Rect width="20" height="20" rx="4" fill="currentColor" opacity={0.2} />
          <Rect x="0" y="25" width="20" height="20" rx="4" fill="red" opacity={0.2} />
          <Rect x="25" y="0" width="20" height="20" rx="4" fill="red" />
          <Rect x="25" y="25" width="20" height="20" rx="4" fill="blue" fillOpacity="0.2" />
        </Svg>
      </View>

      <View>
        <Text>Circle</Text>
        <Svg height="100" width="140">
          <Circle cx="50" cy="50" r="40" fill="pink" />
        </Svg>
      </View>

      <View>
        <Text>多Circle</Text>
        <Svg height="100" width="100">
          <Circle cx="50" cy="50" r="40" fill="red" />
          <Circle
            cx="60"
            cy="60"
            r="20"
            fill="#0074d9"
          />
        </Svg>
      </View>

      <View>
        <Text>Polygon</Text>
        <Svg height="100" width="100">
          <Polygon
            points="40,5 70,80 25,95"
            fill="lime"
            stroke="purple"
            strokeWidth="1"
          />
        </Svg>
      </View>

      <View>
        <Text>多Circle</Text>
        <Svg height="100" width="100">
          <Polygon
            points="40,5 70,80 25,95"
            fill="lime"
            stroke="purple"
            strokeWidth="1"
          />
          <Polygon
            points="70 5 90  75 45 90 25 80"
            fill="red"
            stroke="purple"
            strokeWidth="1"
          />
        </Svg>
      </View>

      {/* <View>
        <Text>Image</Text>
        <Svg height="100" width="100">
          <Image
            x="5%"
            y="5%"
            width="90%"
            height="90%"
            href={require('../assets/expo.png')}
          />
        </Svg>
      </View> */}

      {/* <View>
        <Text>多Image</Text>
        <Svg height="50" width="110">
          <Image
            width="50"
            height="50"
            opacity="0.6"
            href={require('../assets/expo.png')}
          />
          <Image
            x="60"
            y="0"
            width="50"
            height="50"
            opacity="0.6"
            href={require('../assets/expo.png')}
          />
        </Svg>
      </View> */}

      <View>
        <Text>LinearGradient Path</Text>
        <Svg height="100" width="100">
          <Defs>
            <LinearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0" stopColor="#FFD080" stopOpacity="1" />
              <Stop offset="1" stopColor="red" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Path
            d="M25 10 L98 65 L70 25 L16 77 L11 30 L0 4 L90 50 L50 10 L11 22 L77 95 L20 25"
            fill="url(#grad1)"
          />
        </Svg>
      </View>

      <View>
        <Text>LinearGradient Rect</Text>
        <Svg height="100" width="100">
          <Defs>
            <LinearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#FFD080" stopOpacity="1" />
              <Stop offset="1" stopColor="red" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Rect width="100" height="100" fill="url(#grad2)" />
        </Svg>
      </View>

      <View>
        <Text>LinearGradient Circle</Text>
        <Svg height="100" width="100">
          <Defs>
            <LinearGradient id="grad3" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0" stopColor="#FFD080" stopOpacity="1" />
              <Stop offset="1" stopColor="red" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Circle cx="50" cy="50" r="40" fill="url(#grad3)" />
        </Svg>
      </View>
    </ScrollView>
  );
};

export default SVGDemo;