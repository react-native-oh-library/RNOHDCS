import React, {useState,useRef,} from 'react';
import {Pressable, 
  Text, 
  View,
  Animated,
  PanResponder,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

const AngleGradient = () => {
  const [angle, setAngle] = useState(135);
  var lastAngle = 135
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      
      onPanResponderMove: (evt, gestureState) => {
        if ((lastAngle + gestureState.dx) > 359){
          setAngle(359)
        }
        if ((lastAngle + gestureState.dx) >= 0 && (lastAngle + gestureState.dx) < 359) {
          setAngle(lastAngle + gestureState.dx);
        }
        
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (lastAngle + gestureState.dx < 0) {
          lastAngle = 0
        } else if (lastAngle + gestureState.dx > 359) {
          lastAngle = 359
        } else {
          lastAngle = lastAngle + gestureState.dx
        }
      },
    })
  ).current;

  return (
    
    <View style={styles.container}>
      <Pressable onPress={() => setAngle(Math.floor(Math.random() * 360))}>
        <LinearGradient
          angle={angle}
          useAngle={true}
          angleCenter={{x: 0.5, y: 0.5}}
          colors={['#d02828', '#832020', '#000000']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradient}>
        </LinearGradient>
        <LinearGradient
          angle={angle}
          useAngle={false}
          angleCenter={{x: 0.5, y: 0.5}}
          colors={['#d02828', '#832020', '#000000']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradient}>
        </LinearGradient>
      </Pressable>
      <View style={styles.rightContainer}>
      <Animated.View
        {...panResponder.panHandlers}>
        <View style={styles.rightContainer}>
          <Text>Slide to change the angle</Text>
          <Text>Angle: {angle}</Text>
        </View>
      </Animated.View>
      </View>
    </View>
  );
};

export default AngleGradient;