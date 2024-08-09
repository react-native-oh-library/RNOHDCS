import { View, StyleSheet, Text } from 'react-native';
import React, { Component, useState } from 'react';
import { Checkbox } from 'react-native-material-ui';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
import { COLOR, getTheme, ThemeContext } from 'react-native-material-ui';
const CheckboxDemo = () => {
  const [state, setState] = useState({ checked: true })

  return (
    <Tester>
      <TestSuite name='Checkbox'>
        <TestCase itShould='props:label(标签),value(oncheck返回的数据),onCheck(状态改变的回调),checked(默认是否选中，true选中，false不选中) 需要同时设置才生效，是整体'>
          <View style={styles.container}>
            <Checkbox
              label="Unchecked"
              checked={state.checked}
              value="false"
              onCheck={checked => setState({ checked })}
            />
          </View>
        </TestCase>
        <TestCase itShould='props:icon(复选框使用图标)'>
          <View style={styles.container}>
            <Checkbox
              label="Custom icon"
              checked={state.checked}
              uncheckedIcon="star"
              checkedIcon="star-border"
              value="Value"
              onCheck={checked => setState({ checked })}
            />
          </View>
        </TestCase>
        <TestCase itShould='props:disabled 禁用'>
          <View style={styles.container}>
            <Checkbox label="Disabled unchecked" disabled value="Value" />
          </View>
        </TestCase>
        <TestCase itShould='props:style(样式)'>
          <View style={styles.container}>
          <Checkbox
              label="Custom icon"
              checked={state.checked}
              uncheckedIcon="star"
              checkedIcon="star-border"
              value="Value"
              onCheck={checked => setState({ checked })}
              style={{container:{backgroundColor:'red'}}}
            />
          </View>
        </TestCase>
      </TestSuite>
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