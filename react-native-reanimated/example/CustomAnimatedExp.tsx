import Animated, {
  withTiming,
  withDelay,
  withSpring,
} from '@react-native-oh-tpl/react-native-reanimated';
import { Button, StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';

function CustomLayoutTransition(values: any) {
  'worklet';
  return {
    animations: {
      originX: withTiming(values.targetOriginX, { duration: 1000 }),
      originY: withDelay(
        1000,
        withTiming(values.targetOriginY, { duration: 1000 })
      ),
      width: withSpring(values.targetWidth),
      height: withSpring(values.targetHeight),
    },
    initialValues: {
      originX: values.currentOriginX,
      originY: values.currentOriginY,
      width: values.currentWidth,
      height: values.currentHeight,
    },
  };
}

function Box({ label, state }: { label: string, state: boolean }) {
  const ind = label.charCodeAt(0) - 'A'.charCodeAt(0);
  const delay = 300 * ind;
  return (
    <Animated.View
      layout={CustomLayoutTransition}
      style={[
        styles.box,
        {
          flexDirection: state ? 'row' : 'row-reverse',
          height: state ? 30 : 60,
        },
      ]}>
      <Text> {label} </Text>
    </Animated.View>
  );
}

export default function CustomLayoutTransitionExample() {
  const [state, setState] = useState(true);
  return (
    <View style={{ marginTop: 30 }}>
      <View style={{ height: 300 }}>
        <View style={{ flexDirection: state ? 'row' : 'column' }}>
          {state && <Box key="a" label="A" state={state} />}
          <Box key="b" label="B" state={state} />
          {!state && <Box key="a" label="A" state={state} />}
          <Box key="c" label="C" state={state} />
        </View>
      </View>

      <Button
        onPress={() => {
          setState(!state);
        }}
        title="toggle"
      />
    </View>
  );
}


const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: '#b58df1',
    borderRadius: 20,
  }
});
