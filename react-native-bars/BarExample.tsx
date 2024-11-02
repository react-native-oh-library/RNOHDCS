import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import * as React from 'react';
import { Switch, Text, Button, View } from 'react-native';
import { StatusBar } from "react-native-bars";

export function BarExample() {

  const [isEnabled, setIsEnabled] = React.useState(false);
  const [comp, setIsComp] = React.useState(false);
  const [staticFunc, setIsStaticFunc] = React.useState(false);
  const [btn, setIsBtn] = React.useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const e: any = {
    barStyle: "light-content"
  }
  const e1: any = {
    barStyle: "dark-content"
  }
  return (
    <Tester>

      {btn && <>
        <View style={{ marginTop: 20 }}>
          <Button title='StatusBar组件' onPress={() => {
            setIsComp(true);
            setIsStaticFunc(false);
            setIsBtn(false)
          }} />
        </View>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Button title='staticFunc' onPress={() => {
            setIsComp(false);
            setIsStaticFunc(true);
            setIsBtn(false)
          }} />
        </View>

      </>}
      {comp && <TestSuite name='BarTesteDemo'>
        <Button title='返回' onPress={() => {
          setIsComp(false);
          setIsStaticFunc(false);
          setIsBtn(true)
        }} />
        <TestCase itShould='statusBar' tags={['C_API']}>
          <StatusBar
            barStyle={isEnabled ? "light-content" : "dark-content"}
          />
          <Text style={{ color: "black" }}>关 dark-content/ 开 light-content</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </TestCase>
      </TestSuite>}
      {staticFunc && <TestSuite name='BarTesteDemo'>
        <Button title='返回' onPress={() => {
          setIsComp(false);
          setIsStaticFunc(false);
          setIsBtn(true)
        }} />
        <TestCase itShould='pushStackEntry' tags={['C_API']}>
          <Button title='pushStackEntry' onPress={() => {
            StatusBar.pushStackEntry(e)
          }} />
        </TestCase>
        <TestCase itShould='pushStackEntry1' tags={['C_API']}>
          <Button title='pushStackEntry1' onPress={() => {
            StatusBar.pushStackEntry(e1)
          }} />
        </TestCase>
        <TestCase
          itShould="popStackEntry"
          tags={['C_API']}
          initialState={false}
          arrange={({ setState }) => {
            return (
              <Button title='popStackEntry' onPress={
                () => {
                  try {
                    StatusBar.popStackEntry(e);
                    setState(true)
                  } catch (error) {
                    setState(false)
                  }
                }} />
            );
          }}
          assert={({ state, expect }) => {
            expect(state).to.be.true;
          }}
        />
        <TestCase
          itShould="replaceStackEntry"
          tags={['C_API']}
          initialState={false}
          arrange={({ setState }) => {
            return (
              <Button title='replaceStackEntry' onPress={
                () => {
                  try {
                    StatusBar.replaceStackEntry(e, e1);
                    setState(true)
                  } catch (error) {
                    setState(false)
                  }
                }} />
            );
          }}
          assert={({ state, expect }) => {
            expect(state).to.be.true;
          }}
        />
      </TestSuite>}
    </Tester>


  );
}