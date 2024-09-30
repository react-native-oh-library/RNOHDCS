import { View, StyleSheet, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-material-ui';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"

const ButtonDemo = () => {
  const [textButton, useTextButton] = useState('');
  return (
    <Tester>
      <ScrollView style={{marginBottom:70}}>
      <TestSuite name='Flat buttons(平常的按钮'>
        <TestCase itShould='props:primary(默认主题的按钮),text(文本),onPress(按下触发的回调)'>
          <Text>{textButton}</Text>
          <View style={styles.button}>
            <Button primary text="Primary" onPress={() => useTextButton('TextButton,Primary')}  />
          </View>
        </TestCase>
        <TestCase itShould='props:upperCase(大写,默认为true,其他用例均覆盖情况,设为false为小写)'>
          <View style={styles.button}>
            <Button primary text="Primary" upperCase={false} />
          </View>
        </TestCase>
        <TestCase itShould='props:accent(强调重要的按钮)'>
          <View style={styles.button}>
            <Button accent text="Accent"  />
          </View>
        </TestCase>
        <TestCase itShould='props:Default(除了显示文字，什么都不设置，默认按钮)'>
          <View style={styles.button}>
            <Button text="Default" />
          </View>
        </TestCase>
        <TestCase itShould='props:Disabled(禁用)'>
          <View style={styles.button}>
            <Button disabled text="Disabled" />
          </View>
        </TestCase>
        <TestCase itShould='props:raised(填充之后的按钮)'>
          <View style={styles.button}>
            <Button raised  primary text="primary" />
          </View>
        </TestCase>
        <TestCase itShould='props:icon(带有图标的按钮)'>
          <View style={styles.button}>
          <Button primary text="Accept" icon="done" />
          </View>
        </TestCase>
      </TestSuite>
      </ScrollView>
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