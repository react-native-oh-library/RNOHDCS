import { View, StyleSheet, Text } from 'react-native';
import React, { Component, useState } from 'react';
import { Checkbox } from 'react-native-material-ui';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
import { COLOR, getTheme, ThemeContext } from 'react-native-material-ui';
const CheckboxDemo = ()=>{
    const [state,setState] = useState({checked:true})
   
    return (
      <Tester>
        <TestSuite name='Checkbox'>
          <TestCase itShould='porps:label,checked,value,onCheck,uncheckedIcon,disabled'>
          <View style={styles.container}>
                    <Checkbox
                        label="Unchecked"
                        checked={state.checked}
                        value="Value"
                        onCheck={checked => setState({ checked })}
                    />
                   <Checkbox label="Checked by default" checked value="Value" />
                    <Checkbox
                        label="Custom icon"
                        checked
                        uncheckedIcon="star-border"
                        checkedIcon="star"
                        value="Value"
                        onCheck={checked => setState({ checked })}
                    />
                    <Checkbox label="Disabled unchecked" disabled value="Value" />
                    <Checkbox label="Disabled checked" checked disabled value="Value" />
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
    height: 200,
    marginTop: 20,
      paddingHorizontal: 4,
  },
});
export default CheckboxDemo