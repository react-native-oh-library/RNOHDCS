import React from 'react';
import { ScrollView, View } from 'react-native';
import Svg, { Path, Rect, Mask,Circle } from 'react-native-svg';

const SVGMaskDemo = () => {

  return (
    <ScrollView style={{width:'100%', height:'100%'}}>
      <View style={{ height:20 }}>
      </View>
      <View style={{height: 100}}>
        <Svg>
          <Mask id="mask" x='0' y='0' width='100' height='100'>
            <Path
              d='M0,0 L50,100 L100,0 Z'
              fill='white'
            />
          </Mask>
          <Rect
            width='100'
            height='100'
            fill='blue'
            mask='url(#mask)'
          />
        </Svg>
      </View>
      <View style={{height: 100}}>
        <Svg>
          <Mask id="mask1" x='0' y='0' width='100' height='100'>
            <Rect
              width='100'
              height='50'
              fill='white'
            />
          </Mask>
          <Rect
            width='100'
            height='100'
            fill='blue'
            mask='url(#mask1)'
          />
        </Svg>
      </View>
      <View style={{height: 100}}>
        <Svg>
          <Mask id="mask2" x='0' y='0' width='100' height='100'>
            <Circle
              cx='50'
              cy='50'
              r='50'
              fill='white'
            />
          </Mask>
          <Rect
            width='100'
            height='100'
            fill='blue'
            mask='url(#mask2)'
          />
        </Svg>
      </View>
      <View style={{height: 100}}>
        <Svg>
          <Mask id="mask3" x='0' y='0' width='100' height='100'>
            <Path d="M50 0 L15 100 L85 100 Z" fill='white' />
          </Mask>
          <Circle cx='50' cy='50' r='50' fill='blue' mask='url(#mask3)' />
        </Svg>
      </View>
      <View style={{height: 100}}>
        <Svg>
          <Mask id="mask4" x='0' y='0' width='100' height='100'>
            <Rect width='100' height='50' fill='white' />
          </Mask>
          <Circle cx='50' cy='50' r='50' fill='blue' mask='url(#mask4)' />
        </Svg>
      </View>
      <View style={{height: 100}}>
        <Svg>
          <Mask id="mask5" x='0' y='0' width='100' height='100'>
          <Circle cx='50' cy='50' r='30' fill='white' />
          </Mask>
          <Circle cx='50' cy='50' r='50' fill='blue' mask='url(#mask5)' />
        </Svg>
      </View>
      <View style={{ height:100 }}>
          <Svg width='100' height='100'>
            <Mask id="mask6" x='0' y='0' width='100' height='100'>
              <Circle cx={50} cy={50} r={50} fill="white" />
            </Mask>
            <Path d="M50 0 L15 100 L85 100 Z" fill='blue' mask="url(#mask6)" />
          </Svg>
      </View>
      <View style={{ height:100 }}>
        <Svg>
          <Mask id="mask7" x='0' y='0' width='100' height='100'>
            <Path
              d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
              fill="white"
            />
          </Mask>
          <Path d="M50 0 L15 100 L85 100 Z" fill='blue' mask="url(#mask7)"/>
        </Svg>
      </View>
      <View style={{ height:100 }}>
        <Svg>
          <Mask id="mask8" x='0' y='0' width='100' height='100'>
              <Rect x={0} y={0} width={60} height={100} fill="white" />
          </Mask>
          <Path d="M50 0 L15 100 L85 100 Z" fill='blue' mask="url(#mask8)"/>
        </Svg>
      </View>
      <View style={{ height:20 }}>
      </View>
    </ScrollView>
  );
};

export default SVGMaskDemo;
