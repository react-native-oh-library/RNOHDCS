/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';
import * as Progress from 'react-native-progress';


const RNProgressCircleSnail = () => {
  const [sizeCircleSnail, setSizeCircleSnail] = React.useState(40);
  const sizeCircleSnailCounter = () => {
    setSizeCircleSnail(count => {
      if (count >= 150) {
        return 20;
      }
      return count + 10;
    });
  };
  const [colorCircleSnail, setColorCircleSnail] = React.useState('red');
  const colorCircleSnailCounter = () => {
    setColorCircleSnail(count => {
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
      return 'yellow';
    });
  };
  const [thicknessCircleSnail, setThicknessCircleSnail] = React.useState(3);
  const thicknessCircleSnailCounter = () => {
    setThicknessCircleSnail(count => {
      if (count >= 15) {
        return 1;
      }
      return count + 1;
    });
  };
  const [durationCircleSnail, setDurationCircleSnail] = React.useState(500);
  const durationCircleSnailCounter = () => {
    setDurationCircleSnail(count => {
      if (count >= 5000) {
        return 500;
      }
      return count + 100;
    });
  };
  const [spinDurationCircleSnail, setSpinDurationCircleSnail] = React.useState(1000);
  const spinDurationCircleSnailCounter = () => {
    setSpinDurationCircleSnail(count => {
      if (count >= 9000) {
        return 1000;
      }
      return count + 1000;
    });
  };
  return (
    <ScrollView>
      <Text style={styles.welcome}>Progress CircleSnail animating</Text>
      <View style={styles.circles}>
        <Progress.CircleSnail
          style={styles.progress}
        />
        <Progress.CircleSnail
          style={styles.progress}
          animating={true}
        />
        <Progress.CircleSnail
          style={styles.progress}
          animating={false}
        />
      </View>

      <Text style={styles.welcome}>Progress CircleSnail hidesWhenStopped</Text>
      <View style={styles.circles}>
        <Progress.CircleSnail
          style={styles.progress}
          animating={true}
        />
        <Progress.CircleSnail
          style={styles.progress}
          animating={true}
          hidesWhenStopped={false}
        />
        <Progress.CircleSnail
          style={styles.progress}
          animating={true}
          hidesWhenStopped={true}
        />
        <Progress.CircleSnail
          style={styles.progress}
          animating={false}
        />
        <Progress.CircleSnail
          style={styles.progress}
          animating={false}
          hidesWhenStopped={false}
        />
        <Progress.CircleSnail
          style={styles.progress}
          animating={false}
          hidesWhenStopped={true}
        />
      </View>
      <Text style={styles.welcome}>Progress CircleSnail size</Text>
      <View style={styles.circles}>
        <Progress.CircleSnail
          style={styles.progress}
        />
        <Progress.CircleSnail
          style={styles.progress}
          size={sizeCircleSnail}
        />
        <Button
          title="Press me!"
          onPress={sizeCircleSnailCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress CircleSnail color</Text>
      <View style={styles.circles}>
        <Progress.CircleSnail
          style={styles.progress}
        />
        <Progress.CircleSnail
          style={styles.progress}
          color={['#F44336', '#2196F3', '#009688']}
        />
        <Progress.CircleSnail
          style={styles.progress}
          color={colorCircleSnail}
        />
        <Button
          title="Press me!"
          onPress={colorCircleSnailCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress CircleSnail thickness</Text>
      <View style={styles.circles}>
        <Progress.CircleSnail
          style={styles.progress}
          size={80}
        />
        <Progress.CircleSnail
          style={styles.progress}
          size={80}
          thickness={thicknessCircleSnail}
        />
        <Button
          title="Press me!"
          onPress={thicknessCircleSnailCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress CircleSnail duration</Text>
      <View style={styles.circles}>
        <Progress.CircleSnail
          style={styles.progress}
          size={80}
        />
        <Progress.CircleSnail
          style={styles.progress}
          size={80}
          duration={durationCircleSnail}
        />
        <Button
          title="Press me!"
          onPress={durationCircleSnailCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress CircleSnail spinDuration</Text>
      <View style={styles.circles}>
        <Progress.CircleSnail
          style={styles.progress}
          size={80}
        />
        <Progress.CircleSnail
          style={styles.progress}
          size={80}
          spinDuration={spinDurationCircleSnail}
        />
        <Button
          title="Press me!"
          onPress={spinDurationCircleSnailCounter}
        />
      </View>
      <Text style={styles.welcome}>Progress CircleSnail strokeCap</Text>
      <View style={styles.circles}>
        <Progress.CircleSnail
          style={styles.progress}
          size={120}
          thickness={20}
          strokeCap={'butt'}
        />
        <Progress.CircleSnail
          style={styles.progress}
          size={120}
          thickness={20}
          strokeCap={'square'}
        />
        <Progress.CircleSnail
          style={styles.progress}
          size={120}
          thickness={20}
          strokeCap={'round'}
        />
      </View>

      <Text style={styles.welcome}>Progress CircleSnail direction</Text>
      <View style={styles.circles}>
        <Progress.CircleSnail
          style={styles.progress}
          size={120}
        />
        <Progress.CircleSnail
          style={styles.progress}
          size={120}
          direction={'counter-clockwise'}
        />
        <Progress.CircleSnail
          style={styles.progress}
          size={120}
          direction={'clockwise'}
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

export default RNProgressCircleSnail;
