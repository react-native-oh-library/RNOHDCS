import { View, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-material-ui';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"

const ButtonDemo = () => {
  const [textButton, useTextButton] = useState('');
  return (
    <Tester>
      <TestSuite name='Flat buttons'>
        <TestCase itShould='props:primary,accent,disabled,onPress,upperCase'>
          <Text>{textButton}</Text>
          <View style={styles.rowContainer}>
            <View style={styles.button}>
              <Button primary text="Primary" onPress={() => useTextButton('TextButton,Primary')} upperCase={false} />
            </View>
            <View style={styles.button}>
              <Button accent text="Accent" onLongPress={() => useTextButton('onLongPress TextButton,Accent')} />
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.button}>
              <Button text="Default" />
            </View>
            <View style={styles.button}>
              <Button disabled text="Disabled" />
            </View>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Raised buttons'>
        <TestCase itShould='props:raised '>
          <View style={styles.rowContainer}>
            <View style={styles.button}>
              <Button raised primary text="Primary" />
            </View>
            <View style={styles.button}>
              <Button raised accent text="Accent" />
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.button}>
              <Button raised text="Default" />
            </View>
            <View style={styles.button}>
              <Button raised disabled text="Disabled" />
            </View>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='With icons buttons'>
        <TestCase itShould='props:icon '>
          <View style={styles.rowContainer}>
            <View style={styles.button}>
              <Button primary text="Accept" icon="done" />
            </View>
            <View style={styles.button}>
              <Button accent text="Dismiss" icon="clear" />
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.button}>
              <Button raised primary text="Done" icon="done" />
            </View>
            <View style={styles.button}>
              <Button raised accent text="Clear" icon="clear" />
            </View>
          </View>
        </TestCase>
      </TestSuite>

    </Tester>

  )
}


const styles = StyleSheet.create({
  rowContainer: {
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 8,
  },
});


export default ButtonDemo