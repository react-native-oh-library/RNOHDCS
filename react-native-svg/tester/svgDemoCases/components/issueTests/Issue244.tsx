import * as React from 'react';
import {View} from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Text as SvgText,
} from 'react-native-svg';

export default function Issue244() {
  return (
    <View style={{padding: 20}}>
      <Svg height={200} width={330} style={{backgroundColor: 'blue'}}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop stopColor="yellow" offset="24.67%" stopOpacity={1} />
            <Stop stopColor="red" offset="77.8%" stopOpacity={1} />
          </LinearGradient>
        </Defs>
        <SvgText
          fill="url(#grad)"
          fontSize={'42'}
          x="50%"
          y="60%"
          textAnchor="middle"
          alignmentBaseline="middle">
          {'6xX'}
        </SvgText>
      </Svg>
    </View>
  );
}
