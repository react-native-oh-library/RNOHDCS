import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import CheckBox from "@react-native-oh-tpl/checkbox";
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

export function CheckboxTest() {
    const [checked, setChecked] = useState(true);
    const [checked1, setChecked1] = useState(true);
  return (
    <ScrollView>
      <View>
        <Tester>
          <TestSuite name={'checkboxTest'}>
            <TestCase itShould={'default checkbox'}>
              <CheckBox value={true} />;
            </TestCase>
            <TestCase itShould={'checkbox value=true'}>
              <CheckBox value={true} />;
            </TestCase>
            <TestCase itShould={'checkbox value=false'}>
              <CheckBox value={false} />;
            </TestCase>
            <TestCase itShould={'checkbox testID=test'}>
              <CheckBox testID='test' />;
            </TestCase>
            <TestCase itShould={'checkbox onCheckColor=red'}>
              <CheckBox value={true} onCheckColor={'red'}/>;
            </TestCase>
            <TestCase itShould={'checkbox tintColor=blue'}>
              <CheckBox value={false} tintColor={'blue'}/>;
            </TestCase>
            <TestCase itShould={'checkbox shape=0'}>
              <CheckBox value={true} shape={0} />;
            </TestCase>
            <TestCase itShould={'checkbox shape=1'}>
              <CheckBox value={true} shape={1} />;
            </TestCase>
            <TestCase itShould={'checkbox markSize=10'}>
              <CheckBox value={true} markSize={10} />;
            </TestCase>
            <TestCase itShould={'checkbox markSize=50'}>
              <CheckBox value={true} markSize={50} />;
            </TestCase>
            <TestCase itShould={'checkbox strokeWidth=5'}>
              <CheckBox value={true} strokeWidth={5} />;
            </TestCase>
            <TestCase itShould={'checkbox strokeWidth=10'}>
              <CheckBox value={true} strokeWidth={10} />;
            </TestCase>
            <TestCase itShould={'checkbox strokeColor=yellow'}>
              <CheckBox value={true} strokeColor={'yellow'} />;
            </TestCase>
            <TestCase itShould={'checkbox strokeColor=red'}>
              <CheckBox value={true} strokeColor={'red'} />;
            </TestCase>
            <TestCase
                itShould="Invoked on change with the native event."
                initialState={false}
                tags={['C_API']}
                arrange={({ setState, state }) => {
                    return (
                        <View>
                            <CheckBox
                                disabled={false}
                                value={checked}
                                onChange={(event) => {
                                    setChecked(event.nativeEvent.value);
                                    setState(true)
                                }}
                                />;
                        </View>
                    )
                }}
                assert={async ({ expect, state }) => {
                    expect(state).to.be.eq(true);
                }}
            />
            <TestCase
                itShould="Invoked with the new boolean value when it changes."
                initialState={false}
                tags={['C_API']}
                arrange={({ setState, state }) => {
                    return (
                        <View>
                            <CheckBox
                                disabled={false}
                                value={checked1}
                                onValueChange={(newValue) => {
                                    setChecked1(newValue);
                                    setState(true)
                                }}
                                />;
                        </View>
                    )
                }}
                assert={async ({ expect, state }) => {
                    expect(state).to.be.eq(true);
                }}
            />
          </TestSuite>
        </Tester>
      </View>
    </ScrollView>
  );
}
