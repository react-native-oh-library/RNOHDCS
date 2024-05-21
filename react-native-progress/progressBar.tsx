/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';
import * as Progress from 'react-native-progress';


const RNProgressBar = () => {
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
        }
        );
      }, 500);
    }, 1500);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);
  const [progressBar, setProgressBar] = React.useState(0);
  const progressBarCounter = () => {
    setProgressBar(count => {
      if (count >= 1) {
        return 0;
      }
      return count + 0.1
    });
  };
  const [width, setWidth] = React.useState(0);
  const widthPressCounter = () => {
    setWidth(count => {
      if (count >= 200) {
        return 50;
      }
      return count + 10
    });
  };

  const [color, setColor] = React.useState('red');
  const colorCounter = () => {
    setColor(count => {
      if (count == 'red') {
        return 'green';
      }
      if (count == 'green') {
        return 'blue';
      }
      if (count == 'blue') {
        return 'yellow';
      }
      if (count == 'yellow') {
        return 'red';
      }
      return 'red'
    });
  };
  const [indeterminateAnimationDuration, setIndeterminateAnimationDuration] = React.useState(1000);
  const indeterminateAnimationDurationCounter = () => {
    setIndeterminateAnimationDuration(count => {
      if (count >= 5000) {
        return 1000;
      }
      return count + 1000
    });
  };

  const [unfilledColor, setUnfilledColor] = React.useState('red');
  const unfilledColorCounter = () => {
    setUnfilledColor(count => {
      if (count == 'red') {
        return 'green';
      }
      if (count == 'green') {
        return 'blue';
      }
      if (count == 'blue') {
        return 'yellow';
      }
      if (count == 'yellow') {
        return 'red';
      }
      return 'red'
    });
  };
  const [borderWidth, setBorderWidth] = React.useState(1);
  const borderWidthCounter = () => {
    setBorderWidth(count => {
      if (count >= 5) {
        return 0;
      }
      return count + 1
    });
  };

  const [borderColor, setBorderColor] = React.useState('red');
  const borderColorCounter = () => {
    setBorderColor(count => {
      if (count == 'red') {
        return 'green';
      }
      if (count == 'green') {
        return 'blue';
      }
      if (count == 'blue') {
        return 'yellow';
      }
      if (count == 'yellow') {
        return 'red';
      }
      return 'red'
    });
  };

  const [height, setHeight] = React.useState(0);
  const heightPressCounter = () => {
    setHeight(count => {
      if (count >= 30) {
        return 1;
      }
      return count + 1
    });
  };

  const [borderRadius, setBorderRadius] = React.useState(0);
  const borderRadiusPressCounter = () => {
    setBorderRadius(count => {
      if (count >= 15) {
        return 0;
      }
      return count + 1
    });
  };

  return (
    <ScrollView>
      <Text style={styles.welcome}>Progress bar animated</Text>
      <Progress.Bar
        style={styles.progress}
        progress={progress}
      />
      <Progress.Bar
        style={styles.progress}
        progress={progress}
        animated={true}
      />
      <Progress.Bar
        style={styles.progress}
        progress={progress}
        animated={false}
      />
      <Text style={styles.welcome}>Progress bar indeterminate</Text>
      <Progress.Bar
        style={styles.progress}
        progress={progress}
      />
      <Progress.Bar
        style={styles.progress}
        progress={progress}
        indeterminate={false}
      />
      <Progress.Bar
        style={styles.progress}
        progress={progress}
        indeterminate={true}
      />

      <Text style={styles.welcome}>Progress bar indeterminateAnimationDuration</Text>
      <Progress.Bar
        style={styles.progress}
        progress={progress}
        indeterminate={true}
      />
      <Progress.Bar
        style={styles.progress}
        progress={progress}
        indeterminate={true}
        indeterminateAnimationDuration={indeterminateAnimationDuration}
      />
      <Button
        title="Press me!"
        onPress={indeterminateAnimationDurationCounter}
      />
      <Text style={styles.welcome}>Progress bar progress</Text>
      <Progress.Bar
        style={styles.progress}
        progress={progress}
      />
      <Progress.Bar
        style={styles.progress}
        progress={progressBar}
      />
      <Button
        title="Press me!"
        onPress={progressBarCounter}
      />
      <Text style={styles.welcome}>Progress bar color</Text>
      <Progress.Bar
        style={styles.progress}
        progress={progress}
      />
      <Progress.Bar
        style={styles.progress}
        progress={progress}
        color={color}
      />
      <Button
        title="Press me!"
        onPress={colorCounter}
      />
      <Text style={styles.welcome}>Progress bar unfilledColor</Text>
      <Progress.Bar
        style={styles.progress}
        progress={progress}
      />
      <Progress.Bar
        style={styles.progress}
        progress={progress}
        unfilledColor={unfilledColor}
      />
      <Button
        title="Press me!"
        onPress={unfilledColorCounter}
      />
      <Text style={styles.welcome}>Progress bar borderWidth</Text>
      <Progress.Bar
        style={styles.progress}
        progress={progress}
      />
      <Progress.Bar
        style={styles.progress}
        progress={progress}
        borderWidth={borderWidth}
      />
      <Button
        title="Press me!"
        onPress={borderWidthCounter}
      />
      <Text style={styles.welcome}>Progress bar borderColor</Text>
      <Progress.Bar
        style={styles.progress}
        progress={progress}
      />
      <Progress.Bar
        style={styles.progress}
        progress={progress}
        borderColor={borderColor}
      />
      <Button
        title="Press me!"
        onPress={borderColorCounter}
      />
      <Text style={styles.welcome}>Progress bar width</Text>
      <Progress.Bar
        style={styles.progress}
      />
      <Progress.Bar
        style={styles.progress}
        width={width}
      />
      <Button
        title="Press me!"
        onPress={widthPressCounter}
      />
      <Text style={styles.welcome}>Progress bar height</Text>
      <Progress.Bar
        style={styles.progress}
      />
      <Progress.Bar
        style={styles.progress}
        height={height}
      />
      <Button
        title="Press me!"
        onPress={heightPressCounter}
      />
      <Text style={styles.welcome}>Progress bar borderRadius</Text>
      <Progress.Bar
        style={styles.progress}
        height={20}
      />
      <Progress.Bar
        style={styles.progress}
        height={20}
        borderRadius={borderRadius}
      />
      <Button
        title="Press me!"
        onPress={borderRadiusPressCounter}
      />
      <Text style={styles.welcome}>Progress bar useNativeDriver</Text>
      <Progress.Bar
        style={styles.progress}
      />
      <Progress.Bar
        style={styles.progress}
        useNativeDriver={false}
      />
      <Progress.Bar
        style={styles.progress}
        useNativeDriver={true}
      />
      <Text style={styles.welcome}>Progress bar animationConfig</Text>
      <Progress.Bar
        style={styles.progress}
        animated={false}
      />
      <Progress.Bar
        style={styles.progress}
        animated={true}
        progress={progress}
        animationConfig={{ bounciness: 0 }}
      />
      <Progress.Bar
        style={styles.progress}
        animated={true}
        progress={progress}
        animationConfig={{ bounciness: 5 }}
      />
      <Progress.Bar
        style={styles.progress}
        animated={true}
        progress={progress}
        animationConfig={{ bounciness: 10 }}
      />
      <Text style={styles.welcome}>Progress bar animationType</Text>
      <Progress.Bar
        style={styles.progress}
        height={20}
        animationType={'decay'}
      />
      <Progress.Bar
        style={styles.progress}
        progress={progress}
        height={20}
        animationType={'timing'}
      />
      <Progress.Bar
        style={styles.progress}
        progress={progress}
        height={20}
        animationType={'spring'}
      />
    </ScrollView>
  );
}

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

export default RNProgressBar;
