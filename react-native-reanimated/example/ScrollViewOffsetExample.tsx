import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
  useAnimatedStyle,
} from '@react-native-oh-tpl/react-native-reanimated';

export default function ScrollViewOffsetExample() {
  const aref = useAnimatedRef<Animated.ScrollView>();
  const scrollHandler = useScrollViewOffset(aref);

  useAnimatedStyle(() => {
    console.log("ssssss--->" + scrollHandler.value);
    return {};
  });

  return (
    <>
      <View style={styles.positionView}>
        <Text>Test</Text>
      </View>
      <View style={styles.divider} />
      <Animated.ScrollView
        ref={aref}
        scrollViewOffset={scrollHandler}
        style={styles.scrollView}>
        {[...Array(100)].map((_, i) => (
          <Text key={i} style={styles.text}>
            {i}
          </Text>
        ))}
      </Animated.ScrollView>
    </>
  );
}


const styles = StyleSheet.create({
  positionView: {
    margin: 20,
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
    color: "white"
  },
  divider: {
    backgroundColor: 'black',
    height: 1,
  },
});
