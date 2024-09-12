/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import * as Progress from 'react-native-progress';


const RNProgressPie = () => {
  const [progress, setProgress] = React.useState(0);
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

  const [indeterminate, setIndeterminate] = React.useState(true);
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
      if (count >= 10) {
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

  const [sizePie, setSizePie] = React.useState(40);
  const sizePieCounter = () => {
    setSizePie(count => {
      if (count >= 150) {
        return 20;
      }
      return count + 10;
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcome}>Progress Pie size</Text>
      <View style={styles.circles}>
        <Progress.Pie
          style={styles.progress}
        />
        <Progress.Pie
          style={styles.progress}
          size={sizePie}
        />
        <Button
          title="Press me!"
          onPress={sizePieCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress Pie animated</Text>
      <View style={styles.circles}>
        <Progress.Pie
          style={styles.progress}
          progress={progress}
        />
        <Progress.Pie
          style={styles.progress}
          progress={progress}
          animated={true}
        />
        <Progress.Pie
          style={styles.progress}
          progress={progress}
          animated={false}
        />
      </View>

      <Text style={styles.welcome}>Progress Pie indeterminate</Text>
      <View style={styles.circles}>
        <Progress.Pie
          style={styles.progress}
          progress={progress}
        />
        <Progress.Pie
          style={styles.progress}
          progress={progress}
          indeterminate={false}
        />
        <Progress.Pie
          style={styles.progress}
          progress={progress}
          indeterminate={true}
        />
      </View>
      <Text style={styles.welcome}>Progress Pie indeterminateAnimationDuration</Text>
      <View style={styles.circles}>
        <Progress.Pie
          style={styles.progress}
          progress={progress}
          indeterminate={true}
        />
        <Progress.Pie
          style={styles.progress}
          progress={progress}
          indeterminate={true}
          indeterminateAnimationDuration={indeterminateAnimationDuration}
        />
        <Button
          title="Press me!"
          onPress={indeterminateAnimationDurationCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress Pie progress</Text>
      <View style={styles.circles}>
        <Progress.Pie
          style={styles.progress}
          progress={progress}
        />
        <Progress.Pie
          style={styles.progress}
          progress={progressBar}
        />
        <Button
          title="Press me!"
          onPress={progressBarCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress Pie color</Text>
      <View style={styles.circles}>
        <Progress.Pie
          style={styles.progress}
          progress={0.6}
          size={80}
          borderWidth={5}
        />
        {/* <Progress.Pie
          style={styles.progress}
          progress={progress}
          size={80}
          borderWidth={5}
          color={'rgba(0, 122, 255, 1)'}
        /> */}
        <Progress.Pie
          style={styles.progress}
          progress={0.6}
          size={80}
          borderWidth={5}
          color={'red'}
        />
        <Progress.Pie
          style={styles.progress}
          progress={0.6}
          size={80}
          borderWidth={5}
          color={color}
        />
        <Button
          title="Press me!"
          onPress={colorCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress Pie unfilledColor</Text>
      <View style={styles.circles}>
        <Progress.Pie
          style={styles.progress}
          progress={progress}
        />
        <Progress.Pie
          style={styles.progress}
          progress={progress}
          unfilledColor={unfilledColor}
        />
        <Button
          title="Press me!"
          onPress={unfilledColorCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress Pie borderWidth</Text>
      <View style={styles.circles}>
        <Progress.Pie
          style={styles.progress}
          size={80}
        />
        <Progress.Pie
          style={styles.progress}
          size={80}
          borderWidth={borderWidth}
        />
        <Button
          title="Press me!"
          onPress={borderWidthCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress Pie borderColor</Text>
      <View style={styles.circles}>
        <Progress.Pie
          style={styles.progress}
          progress={progress}
        />
        <Progress.Pie
          style={styles.progress}
          progress={progress}
          borderWidth={5}
          borderColor={borderColor}
        />
        <Button
          title="Press me!"
          onPress={borderColorCounter}
        />
      </View>
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

export default RNProgressPie;
