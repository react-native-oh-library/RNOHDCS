import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Button } from 'react-native';
import Animated, {
  useAnimatedRef,
  Easing,
  useSharedValue,
  Keyframe,
} from '@react-native-oh-tpl/react-native-reanimated';

export default function KeyframeExp() {
  const [show, setShow] = useState(false);

  const enteringAnimation = new Keyframe({
    0: {
      originX: 50,
      transform: [{ rotate: '45deg' }],
    },
    30: {
      originX: 10,
      transform: [{ rotate: '-90deg' }],
    },
    100: {
      originX: 0,
      transform: [{ rotate: '0deg' }],
      easing: Easing.quad,
    },
  }).duration(2000);

  const exitingAnimation = new Keyframe({
    0: {
      opacity: 1,
      transform: [{ skewX: '0deg' }],
    },
    30: {
      opacity: 0.5,
      transform: [{ skewX: '40deg' }],
      easing: Easing.exp,
    },
    100: {
      opacity: 0,
      transform: [{ skewX: '-10deg' }],
    },
  }).duration(2000);

  return (
    <View style={{ flexDirection: 'column-reverse' }}>
      <Button
        title="animate"
        onPress={() => {
          setShow((last) => !last);
        }}
      />
      <View
        style={{ height: 400, alignItems: 'center', justifyContent: 'center' }}>
        {show && (
          <Animated.View
            entering={enteringAnimation}
            exiting={exitingAnimation}
            style={{
              height: 100,
              width: 200,
              backgroundColor: 'blue',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        )}
      </View>
    </View>
  );
}