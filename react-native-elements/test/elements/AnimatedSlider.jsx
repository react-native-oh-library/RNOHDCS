import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { Slider } from 'react-native-elements';

const AnimatedSlider = ({
    value,
    onChange,
    animationConfig = { duration: 500, useNativeDriver: true },
    animationType = 'timing',
    animateTransitions = true,
    ...otherProps
  }) => {
    const animatedValue = useRef(new Animated.Value(value)).current;
  
    useEffect(() => {
      if (animateTransitions) {
        Animated[animationType](
          animatedValue,
          {
            toValue: value,
            ...animationConfig,
          },
          () => {
            // Optional callback when animation finishes
          }
        ).start();
      } else {
        animatedValue.setValue(value);
      }
    }, [value, animateTransitions, animationType, animatedValue, animationConfig]);
  
    const handleOnValueChange = (val) => {
      animatedValue.setValue(val);
      onChange?.(val);
    };
  
    const handleOnSlidingComplete = (val) => {
      if (animateTransitions) {
        Animated[animationType](
          animatedValue,
          {
            toValue: val,
            ...animationConfig,
          },
          () => {
            // Optional callback when animation finishes
          }
        ).start();
      } else {
        animatedValue.setValue(val);
      }
    };
  
    return (
      <Animated.View style={styles.container}>
        <Slider
          {...otherProps}
          value={animatedValue}
          onValueChange={handleOnValueChange}
          onSlidingComplete={handleOnSlidingComplete}
          thumbStyle={styles.thumb}
          trackStyle={styles.track}
        />
      </Animated.View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    thumb: {
      backgroundColor: 'blue',
      width: 30,
      height: 30,
    },
    track: {
      height: 20,
      borderRadius: 10,
      backgroundColor: 'gray',
    },
  });
  export default AnimatedSlider