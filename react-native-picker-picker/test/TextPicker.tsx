import * as React from "react";
import { Picker } from "@react-native-picker/picker";
import { TestCase, TestSuite, Tester } from '@rnoh/testerino';
import { ScrollView, Switch, Text, View, Button } from "react-native"

export const PickerExample = () => {

  return (
    <ScrollView>
      <Tester>
        <TestSuite name="Button">
          <TestCase itShould="render a Picker to test selectedValue">
            <SelectedValueTest />
          </TestCase>

          <TestCase itShould="render a Picker to test enabled">
            <EnabledTest />
          </TestCase>

          <TestCase itShould="render a Picker to test style">
            <StyleTest />
          </TestCase>

          <TestCase itShould="render a Picker to test testID -- 端到端测试中定位此视图,无实际ui效果">
            <TestIDTest />
          </TestCase>

          <TestCase itShould="render a Picker to test itemStyle">
            <ItemStyleTest />
          </TestCase>

          <TestCase itShould="render a Picker to test selectionColor">
            <SelectionColorTest />
          </TestCase>

          <TestCase itShould="render a Picker to test lable and value">
            <LableAndValueTest />
          </TestCase>

          <TestCase itShould="render a Picker to test onChange">
            <OnChangeTest />
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  )
}

const SelectedValueTest = () => {
  const [selected, setSelected] = React.useState('');

  return (
    <View>
      <Button
        title="click to change selectedValue of this Picker"
        onPress={() => {
          setSelected(selected === 'js' ? 'jave' : 'js')
        }}
      />
      <Picker
        selectedValue={selected}
        onValueChange={(itemValue, itemIndex) => {
          setSelected(itemValue)
        }}
        selectionColor={'red'}
        itemStyle={{ fontSize: 20, color: '#f0f0f0' }}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScrip" value="js" />
      </Picker>
    </View>
  )
}

const EnabledTest = () => {
  const [selected, setSelected] = React.useState('');
  const [enabled, setEnabled] = React.useState(true);

  return (
    <View>
      <Switch
        value={enabled}
        onChange={(event) => {
          setEnabled(!enabled)
        }}
      />
      <Picker
        selectedValue={selected}
        onValueChange={(itemValue) => {
          setSelected(itemValue)
        }}
        enabled={enabled}
        selectionColor={'red'}
        itemStyle={{ fontSize: 20, color: '#f0f0f0' }}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScrip" value="js" />
      </Picker>
    </View>
  )
}

const StyleTest = () => {
  const [selected, setSelected] = React.useState('blue');

  return (
    <View>
      <Picker
        selectedValue={selected}
        onValueChange={(itemValue) => {
          setSelected(itemValue)
        }}
        style={{ backgroundColor: selected }}
        selectionColor={'red'}
        itemStyle={{ fontSize: 20, color: '#f0f0f0' }}
      >
        <Picker.Item label="blue" value="blue" />
        <Picker.Item label="pink" value="pink" />
        <Picker.Item label="purple" value="purple" />
        <Picker.Item label="orange" value="orange" />
      </Picker>
    </View>
  )
}

const ItemStyleTest = () => {
  const [selected, setSelected] = React.useState('blue');

  return (
    <View>
      <Picker
        selectedValue={selected}
        onValueChange={(itemValue) => {
          setSelected(itemValue)
        }}
        selectionColor={'red'}
        itemStyle={{ fontSize: 20, color: selected, backgroundColor: '#f0e4c4' }}
      >
        <Picker.Item label="blue" value="blue" />
        <Picker.Item label="pink" value="pink" />
        <Picker.Item label="purple" value="purple" />
        <Picker.Item label="orange" value="orange" />
      </Picker>
    </View>
  )
}

const SelectionColorTest = () => {
  const [selected, setSelected] = React.useState('blue');

  return (
    <View>
      <Picker
        selectedValue={selected}
        onValueChange={(itemValue) => {
          setSelected(itemValue)
        }}
        selectionColor={selected}
        itemStyle={{ fontSize: 20, color: '#fff', backgroundColor: '#f0e4c4' }}
      >
        <Picker.Item label="blue" value="blue" />
        <Picker.Item label="pink" value="pink" />
        <Picker.Item label="purple" value="purple" />
        <Picker.Item label="orange" value="orange" />
      </Picker>
    </View>
  )
}

const LableAndValueTest = () => {
  const [selected, setSelected] = React.useState('blue');

  return (
    <View>
      <Text style={{ }}>
        selected value is {selected}
      </Text>
      <Picker
        selectedValue={selected}
        onValueChange={(itemValue) => {
          setSelected(itemValue)
        }}
        selectionColor={selected}
        itemStyle={{ fontSize: 20, color: '#fff', backgroundColor: '#f0e4c4' }}
      >
        <Picker.Item label="blue" value="blue" />
        <Picker.Item label="pink" value="pink" />
        <Picker.Item label="purple" value="purple" />
        <Picker.Item label="orange" value="orange" />
      </Picker>
    </View>
  )
}

const OnChangeTest = () => {
  const [selected, setSelected] = React.useState('blue');
  const [count, setCount] = React.useState(0);

  return (
    <View>
      <Text style={{ }}>
        onValueChange triggering count is {count}
      </Text>
      <Picker
        selectedValue={selected}
        onValueChange={(itemValue) => {
          setSelected(itemValue)
          setCount(count + 1)
        }}
        selectionColor={selected}
        itemStyle={{ fontSize: 20, color: '#fff', backgroundColor: '#f0e4c4' }}
      >
        <Picker.Item label="blue" value="blue" />
        <Picker.Item label="pink" value="pink" />
        <Picker.Item label="purple" value="purple" />
        <Picker.Item label="orange" value="orange" />
      </Picker>
    </View>
  )
}

const TestIDTest = () => {
  const [selected, setSelected] = React.useState('blue');

  return (
    <View>
      <Picker
        selectedValue={selected}
        onValueChange={(itemValue) => {
          setSelected(itemValue)
        }}
        testID={'123456789'}
      >
        <Picker.Item label="blue" value="blue" />
        <Picker.Item label="pink" value="pink" />
      </Picker>
    </View>
  )
}
