/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Progress from 'react-native-progress';


const ProgressExample = () => {
  const [progress, setProgress] = React.useState(0);
  const [indeterminate, setIndeterminate] = React.useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timer = setTimeout(() => {
      setIndeterminate(false);
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 1) {
            return 0
          }
          return Math.min(1, prevProgress + Math.random() / 5)
        });
      }, 500);
    }, 1500);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);


  return (
    <View >
      <Text style={styles.welcome}>Progress Example</Text>
      <Progress.Bar
        style={styles.progress}
        progress={progress}
        indeterminate={indeterminate}
      />
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          indeterminate={indeterminate}
        />
        <Progress.Pie
          style={styles.progress}
          progress={progress}
          indeterminate={indeterminate}
        />
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          indeterminate={indeterminate}
          direction="counter-clockwise"
        />
      </View>
      <View style={styles.circles}>
        <Progress.CircleSnail style={styles.progress} />
        <Progress.CircleSnail
          style={styles.progress}
          color={['#F44336', '#2196F3', '#009688']}
          direction="counter-clockwise"
        />
        <Progress.CircleSnail
          style={styles.progress}
          color={['#F44336', '#2196F3', '#009688']}
          direction="clockwise"
        />
      </View>
    </View >
  );
}
export default ProgressExample;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circles: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  progress: {
    margin: 10,
  },
});


