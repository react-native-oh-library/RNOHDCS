import { View, StyleSheet, Text, ScrollView } from 'react-native';
import React, { Component, useState } from 'react';
import { Checkbox } from 'react-native-material-ui';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
import { COLOR, getTheme, ThemeContext } from 'react-native-material-ui';
const CheckboxDemo = () => {
  const [state, setState] = useState({ checked: true })
  const [state1, setState1] = useState({ checked: true })
  const [state2, setState2] = useState({ checked: true })
  const [state3, setState3] = useState({ checked: true })
  const [state4, setState4] = useState({ checked: true })
  return (
    <Tester>
      <ScrollView style={{marginBottom:70}}>
      <TestSuite name='Checkbox'>
      <TestCase itShould='props:label(标签) 在复选框图标后面的文字 文字为：checked'>
          <View style={styles.container}>
            <Checkbox
              label="checked"
              checked={state.checked}
              value="false"
              onCheck={checked => setState({ checked })}
            />
          </View>
        </TestCase>
        <TestCase itShould='props:value(onCheck 触发时将返回的值) value设置值为false，在oncheck时作为其返回值将状态设为false，这样就实现了点击勾选点击取消的重复操作 需配合onCheck使用'>
          <View style={styles.container}>
            <Checkbox
              label="checked"
              checked={state1.checked}
              value="false"
              onCheck={checked =>{console.log(checked),setState1({ checked })} }
            />
          </View>
        </TestCase>
        <TestCase itShould='props:checked(设置true为勾选，设置false为取消勾选) 这里由状态state控制 onCheck回调会改变状态state值'>
          <View style={styles.container}>
            <Checkbox
              label="checked"
              checked={state2.checked}
              value="false"
              onCheck={checked => setState2({ checked })}
            />
          </View>
        </TestCase>
        <TestCase itShould='props:icon(复选框使用图标) uncheckedIcon取消勾选所展示的图标star checkedIcon勾选所展示的图标star-border '>
          <View style={styles.container}>
            <Checkbox
              label="Custom icon"
              checked={state3.checked}
              uncheckedIcon="star"
              checkedIcon="star-border"
              value="false"
              onCheck={checked => setState3({ checked })}
            />
          </View>
        </TestCase>
        <TestCase itShould='props:disabled 禁用'>
          <View style={styles.container}>
            <Checkbox label="Disabled unchecked" disabled value="Value" />
          </View>
        </TestCase>
        <TestCase itShould='props:style(样式) 样式为背景红色'>
          <View style={styles.container}>
          <Checkbox
              label="Custom icon"
              checked={state4.checked}
              uncheckedIcon="star"
              checkedIcon="star-border"
              value="Value"
              onCheck={checked => setState4({ checked })}
              style={{container:{backgroundColor:'red'}}}
            />
          </View>
        </TestCase>
      </TestSuite>
      </ScrollView>
    </Tester>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    marginTop: 20,
    paddingHorizontal: 4,
  },
});
export default CheckboxDemo