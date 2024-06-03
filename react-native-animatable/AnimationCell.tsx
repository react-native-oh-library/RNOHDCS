import React, { memo, useCallback, useRef } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { Animation, View } from 'react-native-animatable';

import { TestCase } from '@rnoh/testerino';

const styles = StyleSheet.create({
  cell: {
    padding: 16,
  },
  name: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

interface AnimationCellProps {
  animationType: Animation;
  color: string;
  onPress: (view: View, animationType: Animation) => void;
  useNativeDriver: boolean;
}

export default memo(function AnimationCell({
  useNativeDriver,
  color,
  onPress,
  animationType,
}: AnimationCellProps) {
  const ref = useRef<View>(null);
  const handlePress = useCallback(() => {
    if (ref.current && onPress) {
      onPress(ref.current, animationType);
    }
  }, [ref, onPress, animationType]);

  return (
    <TestCase itShould={animationType} tags={['C_API']}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View
          ref={ref}
          style={[{ backgroundColor: color }, styles.cell]}
          useNativeDriver={useNativeDriver}>
          <Text style={styles.name}>{animationType}</Text>
        </View>
      </TouchableWithoutFeedback>
    </TestCase>
  );
});
