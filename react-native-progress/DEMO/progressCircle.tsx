/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';
import * as Progress from 'react-native-progress';


const RNProgressCircle = () => {
  const [progress, setProgress] = React.useState(0);
  const [progressCircle, setProgressCircle] = React.useState(0);
  const progressCircleCounter = () => {
    setProgressCircle(count => {
      if (count >= 1) {
        return 0;
      }
      return count + 0.1
    });
  };
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

  const [size, setSize] = React.useState(10);
  const sizePressCounter = () => {
    setSize(count => {
      if (count >= 150) {
        return 10;
      }
      return count + 10
    });
  };
  const [endAngle, setEndAngle] = React.useState(0.1);
  const endAnglePressCounter = () => {
    setEndAngle(count => {
      if (count >= 1) {
        return 0.1;
      }
      return count + 0.1
    });
  };
  const [thickness, setThickness] = React.useState(1);
  const thicknessPressCounter = () => {
    setThickness(count => {
      if (count >= 20) {
        return 1;
      }
      return count + 1
    });
  };
  const [showsText, setShowsText] = React.useState(true);
  const showsTextPressCounter = () => {
    setShowsText(count => {
      if (count) {
        return false;
      }
      return true
    });
  };
  const [formatText, setFormatText] = React.useState(0);
  const formatTextPressCounter = () => {
    setFormatText(count => {
      if (count >= 0.9999) {
        return 0;
      }
      return count + 0.1
    });
  };
  const [fill, setFill] = React.useState('red');
  const fillPressCounter = () => {
    setFill(count => {
      if (count == '#F44336') {
        return '#2196F3';
      }
      if (count == '#2196F3') {
        return '#009688';
      }
      if (count == '#009688') {
        return '#F44336';
      }
      return '#F44336'
    });
  };

  return (
    <ScrollView>

      <Text style={styles.welcome}>Progress Circle animated</Text>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          progress={progress}
        />
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          animated={true}
        />
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          animated={false}
        />
      </View>
      <Text style={styles.welcome}>Progress Circle indeterminate</Text>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          progress={progress}
        />
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          indeterminate={false}
        />
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          indeterminate={true}
        />
      </View>
      <Text style={styles.welcome}>Progress Circle indeterminateAnimationDuration</Text>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          indeterminate={true}
        />
        <Progress.Circle
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
      <Text style={styles.welcome}>Progress Circle progress</Text>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          progress={progress}
        />
        <Progress.Circle
          style={styles.progress}
          progress={progressCircle}
        />
        <Button
          title="Press me!"
          onPress={progressCircleCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress Circle color</Text>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          borderWidth={5}
        />
        <Progress.Circle
          style={styles.progress}
          borderWidth={5}
          color={color}
        />
        <Button
          title="Press me!"
          onPress={colorCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress Circle unfilledColor</Text>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          progress={0.5}
          borderWidth={5}
        />
        <Progress.Circle
          style={styles.progress}
          progress={0.5}
          unfilledColor={unfilledColor}
        />
        <Button
          title="Press me!"
          onPress={unfilledColorCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress Circle borderWidth</Text>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          progress={0.5}
        />
        <Progress.Circle
          style={styles.progress}
          progress={0.5}
          borderWidth={borderWidth}
        />
        <Button
          title="Press me!"
          onPress={borderWidthCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress Circle borderColor</Text>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          progress={0.5}
          borderWidth={5}
        />
        <Progress.Circle
          style={styles.progress}
          progress={0.5}
          borderWidth={5}
          borderColor={borderColor}
        />
        <Button
          title="Press me!"
          onPress={borderColorCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress Circle size</Text>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
        />
        <Progress.Circle
          style={styles.progress}
          size={size}
        />
        <Button
          title="Press me!"
          onPress={sizePressCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress Circle endAngle</Text>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          size={40}
        />
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          size={40}
          endAngle={endAngle}
        />
        <Button
          title="Press me!"
          onPress={endAnglePressCounter}
        />
      </View>


      <Text style={styles.welcome}>Progress Circle thickness</Text>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          progress={0.5}
          size={100}
        />
        <Progress.Circle
          style={styles.progress}
          size={100}
          progress={0.5}
          thickness={thickness}
        />
        <Button
          title="Press me!"
          onPress={thicknessPressCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress Circle showsText</Text>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          size={100}
        />
        <Progress.Circle
          style={styles.progress}
          size={100}
          showsText={showsText}
        />
        <Button
          title="Press me!"
          onPress={showsTextPressCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress Circle formatText</Text>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          showsText={true}
          formatText={(a: any) => {
            console.info('---------------' + a)
          }}
        />
        <Button
          title="Press me!"
          onPress={formatTextPressCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress Circle textStyle</Text>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          showsText={true}
          size={100}
        />
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          showsText={true}
          size={100}
          textStyle={{ color: 'red', fontSize: 40 }}
        />
      </View>
      <Text style={styles.welcome}>Progress Circle allowFontScaling</Text>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          showsText={true}
        />
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          showsText={true}
          allowFontScaling={true}
        />
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          showsText={true}
          allowFontScaling={false}
        />
      </View>
      <Text style={styles.welcome}>Progress Circle direction</Text>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          progress={progress}
        />
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          direction={'clockwise'}
        />
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          direction={'counter-clockwise'}
        />

      </View>
      <Text style={styles.welcome}>Progress Circle strokeCap</Text>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          progress={0.5}
          size={80}
          thickness={15}
          endAngle={0.99}
          strokeCap={'butt'}
        />
        <Progress.Circle
          style={styles.progress}
          progress={0.5}
          size={80}
          thickness={15}
          endAngle={0.99}
          strokeCap={'square'}
        />
        <Progress.Circle
          style={styles.progress}
          progress={0.5}
          size={80}
          thickness={15}
          endAngle={0.99}
          strokeCap={'round'}
        />
      </View>
      <Text style={styles.welcome}>Progress Circle fill</Text>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          size={80}
          progress={0.5}
          borderWidth={5}
        />
        <Progress.Circle
          style={styles.progress}
          size={80}
          progress={0.5}
          borderWidth={5}
          fill={fill}
        />
        <Button
          title="Press me!"
          onPress={fillPressCounter}
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

export default RNProgressCircle;
