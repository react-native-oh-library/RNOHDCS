import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Easing
} from 'react-native';
import TransitionGroup, { FadeInOutTransition } from 'react-native-transitiongroup';


export function TransitiongroupExample() {
  const [showText, setShowText] = useState(false);

  const handleToggle = () => {
    setShowText(!showText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.relativeContainer}>
        <TouchableOpacity onPress={handleToggle} style={styles.button}>
          <Text style={styles.buttonText}>{showText ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>

        <TransitionGroup style={styles.absoluteContainer}>
          {showText && (
            <FadeInOutTransition>
              <Text style={styles.text}>Hello, Transition Group!!</Text>
            </FadeInOutTransition>
          )}
        </TransitionGroup>

        <TransitionGroup style={styles.absoluteContainerTwo}>
          {showText && (
            <FadeInOutTransition inDuration={3000}>
              <Text style={styles.text}>I'm Later</Text>
            </FadeInOutTransition>
          )}
        </TransitionGroup>

        <TransitionGroup style={styles.absoluteContainerThree}>
          {showText && (
            <FadeInOutTransition
              inDuration={1000}
              outDuration={500}
              easing={Easing.ease} // 使用 ease 缓动函数
              inDelay={200}
              outDelay={0}
              pointerEvents="box-only"
              style={{ backgroundColor: "pink" }}>
              <Text style={styles.text}>I'm Pink</Text>
            </FadeInOutTransition>
          )}
        </TransitionGroup>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  relativeContainer: {
    position: 'relative',
  },
  button: {
    backgroundColor: '#3f51b5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  absoluteContainer: {
    position: 'absolute',
    bottom: -50,
    left: -100,
  },
  absoluteContainerTwo: {
    position: 'absolute',
    bottom: -150,
    left: -100,
  },
  absoluteContainerThree: {
    position: 'absolute',
    bottom: -250,
    left: -100,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
