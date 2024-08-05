import React from 'react';
import { View, ScrollView } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import CheckboxExample from './Components/CheckboxGroup'
import RadioExample from './Components/RadioGroup'
import ControlledSwitch from './Components/Switch';
import ToggleButton from './Components/ToggleButton'
import OverlayContainerExample from './Components/OverlayContainer'
import TriggerWrapper from './Components/TriggerWrapper'

export const T_ReactNativeAira = () => {

    return (
        <Tester>
            <ScrollView>
                <TestSuite name="react-native-aria">
                    <TestCase
                        key={"useToggleButton"}
                        itShould={`使用useToggleButton钩子函数`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <ToggleButton setState={setState} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"useCheckbox&useCheckboxGroup"}
                        itShould={`使用useCheckbox和useCheckboxGroup钩子函数`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <CheckboxExample setState={setState} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"useRadioGroup"}
                        itShould={`使用useRadioGroup钩子函数`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <RadioExample setState={setState} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"useSwitch"}
                        itShould={`使用useSwitch钩子函数`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <ControlledSwitch setState={setState} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"OverlayContainer"}
                        itShould={`覆层容器OverlayContainer`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <OverlayContainerExample setState={setState} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"useOverlayPosition"}
                        itShould={`使用useOverlayPosition钩子`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <TriggerWrapper setState={setState} />
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>
            </ScrollView>
        </Tester>);
}

export default T_ReactNativeAira