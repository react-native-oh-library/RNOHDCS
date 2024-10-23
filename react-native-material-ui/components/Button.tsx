import { View, StyleSheet, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-material-ui';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
import { backgroundColor } from '@shopify/restyle';

const ButtonDemo = () => {
  const [textButton, useTextButton] = useState('');
  return (
    <Tester>
      <ScrollView style={{marginBottom:70}}>
      <TestSuite name='Disabled (禁用的按钮)'>
        <TestCase itShould='props:Disabled(禁用) true'>
          <View style={styles.button}>
            <Button disabled={true} text="Disabled" />
          </View>
        </TestCase>
        <TestCase itShould='props:Disabled(禁用) false'>
          <View style={styles.button}>
            <Button disabled={false} text="Disabled" />
          </View>
        </TestCase>
      
      </TestSuite>
      <TestSuite name=' raised(填充的按钮）'>
        <TestCase itShould='props:raised(填充之后的按钮) true'>
          <View style={styles.button}>
            <Button raised={true}  primary text="primary" />
          </View>
        </TestCase>
        <TestCase itShould='props:raised(填充之后的按钮) false'>
          <View style={styles.button}>
            <Button raised={false}  primary text="primary" />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name=' primary(默认主题的按钮'>
        <TestCase itShould='props:primary(默认主题的按钮) true'>
          <View style={styles.button}>
            <Button primary={true} text="Primary" />
          </View>
        </TestCase>
        <TestCase itShould='props:primary(默认主题的按钮) false'>
          <View style={styles.button}>
            <Button primary={false} text="Primary" />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name='accent(带有强调色的按钮）'>
        <TestCase itShould='props:accent(强调重要的按钮) true'>
          <View style={styles.button}>
            <Button accent={true} text="Accent"  />
          </View>
        </TestCase>
        <TestCase itShould='props:accent(强调重要的按钮) false'>
          <View style={styles.button}>
            <Button accent={false} text="Accent"  />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name='Flat onPress(带有按下回调的按钮'>
        <TestCase itShould='props:onPress(按下触发的回调) 回调输出文字"TextButton,Primary"'>
          <Text>{textButton}</Text>
          <View style={styles.button}>
            <Button primary text="Primary" onPress={() => useTextButton('TextButton,Primary')}  />
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='text(平常的按钮)'>
        <TestCase itShould='props:text(文本) 文本为"Primary" '>
          <View style={styles.button}>
            <Button primary text="Primary"   />
          </View>
        </TestCase>
      
      </TestSuite>
      <TestSuite name='Flat upperCase(文字大写的按钮)'>
        <TestCase itShould='props:upperCase(按钮上面的文字大写)  true'>
          <View style={styles.button}>
            <Button primary text="Primary" upperCase={true} />
          </View>
        </TestCase>
        <TestCase itShould='props:upperCase(按钮上面的文字大写)  false'>
          <View style={styles.button}>
            <Button primary text="Primary" upperCase={false} />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name='icon(带有图标的按钮)'>
        <TestCase itShould='props:icon(带有图标的按钮) icon:done 图标为完成'>
          <View style={styles.button}>
          <Button primary text="Accept" icon="done" />
          </View>
        </TestCase>
        <TestCase itShould='props:icon(带有图标的按钮) icon:home 图标为家'>
          <View style={styles.button}>
          <Button primary text="Accept" icon="home" />
          </View>
        </TestCase>
      </TestSuite>
      <TestSuite name='Flat style(带有样式的按钮)'>
        <TestCase itShould="props:style(样式) 按钮组件容器样式背景为红色  container:{backgroundColor:'red'}">
          <View style={styles.button}>
            <Button text="Primary" style={{container:{backgroundColor:"red"}}} />
          </View>
        </TestCase>
        <TestCase itShould='props:style(样式) 按钮组件文字样式颜色为红色  text:{color:"red"}'>
          <View style={styles.button}>
            <Button text="Primary" style={{text:{color:"red"}}} />
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