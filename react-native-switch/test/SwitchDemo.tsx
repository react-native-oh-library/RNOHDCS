import React, { useState } from "react";
import { Switch } from "react-native-switch";
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


export default function SwitchDemo() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = (val: boolean) => { setIsEnabled(val) };

    return (
        <ScrollView>
            <Tester>
                <TestSuite name='SensitiveInfoDemo'>
                    <View style={styles.container}>
                        <TestCase
                            itShould="activeText：开 inActiveText：关"
                            tags={["dev"]}
                            initialState={false}
                            arrange={({ setState }) =>
                                <Switch
                                    value={isEnabled}
                                    onValueChange={(val) => { setState(true), toggleSwitch(val) }}
                                    disabled={false}
                                    activeText={'开'}
                                    inActiveText={'关'}
                                    circleSize={30}
                                    barHeight={30}
                                    circleBorderWidth={3}
                                    backgroundActive={'green'}
                                    backgroundInactive={'gray'}
                                    circleActiveColor={'#30a566'}
                                    circleInActiveColor={'#fff'}
                                    renderInsideCircle={() => ''} // custom component to render inside the Switch circle (Text, Image, etc.)
                                    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                                    outerCircleStyle={{}} // style for outer animated circle
                                    renderActiveText={true}
                                    renderInActiveText={true}
                                    switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                    switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                    switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
                                    switchBorderRadius={50} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                                />
                            }
                            assert={({ expect, state }) => {
                                expect(state).to.be.eq(true);
                            }}
                        />

                        <TestCase
                            itShould="circleSize:20 barHeight:20"
                            tags={["dev"]}
                            initialState={false}
                            arrange={({ setState }) =>
                                <Switch
                                    value={isEnabled}
                                    onValueChange={(val) => { setState(true), toggleSwitch(val) }}
                                    disabled={false}
                                    activeText={'On'}
                                    inActiveText={'Off'}
                                    circleSize={20}
                                    barHeight={20}
                                    circleBorderWidth={3}
                                    backgroundActive={'green'}
                                    backgroundInactive={'gray'}
                                    circleActiveColor={'#30a566'}
                                    circleInActiveColor={'#fff'}
                                    renderInsideCircle={() => ''} // custom component to render inside the Switch circle (Text, Image, etc.)
                                    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                                    outerCircleStyle={{}} // style for outer animated circle
                                    renderActiveText={true}
                                    renderInActiveText={true}
                                    switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                    switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                    switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
                                    switchBorderRadius={50} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                                />
                            }
                            assert={({ expect, state }) => {
                                expect(state).to.be.eq(true);
                            }}
                        />

                        <TestCase
                            itShould="backgroundActive:'#000' backgroundInactive:'#999fff'"
                            tags={["dev"]}
                            initialState={false}
                            arrange={({ setState }) =>
                                <Switch
                                    value={isEnabled}
                                    onValueChange={(val) => { setState(true), toggleSwitch(val) }}
                                    disabled={false}
                                    activeText={'On'}
                                    inActiveText={'Off'}
                                    circleSize={30}
                                    barHeight={30}
                                    circleBorderWidth={3}
                                    backgroundActive={'#000'}
                                    backgroundInactive={'#999fff'}
                                    circleActiveColor={'#30a566'}
                                    circleInActiveColor={'#fff'}
                                    renderInsideCircle={() => ''} // custom component to render inside the Switch circle (Text, Image, etc.)
                                    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                                    outerCircleStyle={{}} // style for outer animated circle
                                    renderActiveText={true}
                                    renderInActiveText={true}
                                    switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                    switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                    switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
                                    switchBorderRadius={50} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                                />
                            }
                            assert={({ expect, state }) => {
                                expect(state).to.be.eq(true);
                            }}
                        />

                        <TestCase
                            itShould="circleActiveColor:'#3ef' circleInActiveColor:'#9fe'"
                            tags={["dev"]}
                            initialState={false}
                            arrange={({ setState }) =>
                                <Switch
                                    value={isEnabled}
                                    onValueChange={(val) => { setState(true), toggleSwitch(val) }}
                                    disabled={false}
                                    activeText={'On'}
                                    inActiveText={'Off'}
                                    circleSize={30}
                                    barHeight={30}
                                    circleBorderWidth={3}
                                    backgroundActive={'green'}
                                    backgroundInactive={'gray'}
                                    circleActiveColor={'#3ef'}
                                    circleInActiveColor={'#9fe'}
                                    renderInsideCircle={() => ''} // custom component to render inside the Switch circle (Text, Image, etc.)
                                    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                                    outerCircleStyle={{}} // style for outer animated circle
                                    renderActiveText={true}
                                    renderInActiveText={true}
                                    switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                    switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                    switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
                                    switchBorderRadius={50} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                                />
                            }
                            assert={({ expect, state }) => {
                                expect(state).to.be.eq(true);
                            }}
                        />

                        <TestCase
                            itShould="renderInsideCircle:<Text>t</Text>"
                            tags={["dev"]}
                            initialState={false}
                            arrange={({ setState }) =>
                                <Switch
                                    value={isEnabled}
                                    onValueChange={(val) => { setState(true), toggleSwitch(val) }}
                                    disabled={false}
                                    activeText={'On'}
                                    inActiveText={'Off'}
                                    circleSize={30}
                                    barHeight={30}
                                    circleBorderWidth={3}
                                    backgroundActive={'green'}
                                    backgroundInactive={'gray'}
                                    circleActiveColor={'#30a566'}
                                    circleInActiveColor={'#fff'}
                                    renderInsideCircle={() => <Text>t</Text>} // custom component to render inside the Switch circle (Text, Image, etc.)
                                    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                                    outerCircleStyle={{}} // style for outer animated circle
                                    renderActiveText={true}
                                    renderInActiveText={true}
                                    switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                    switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                    switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
                                    switchBorderRadius={50} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                                />
                            }
                            assert={({ expect, state }) => {
                                expect(state).to.be.eq(true);
                            }}
                        />

                        <TestCase
                            itShould="innerCircleStyle borderColor:red   outerCircleStyle backgroundColor:yellow"
                            tags={["dev"]}
                            initialState={false}
                            arrange={({ setState }) =>
                                <Switch
                                    value={isEnabled}
                                    onValueChange={(val) => { setState(true), toggleSwitch(val) }}
                                    disabled={false}
                                    activeText={'yes'}
                                    inActiveText={'no'}
                                    circleSize={30}
                                    barHeight={30}
                                    circleBorderWidth={3}
                                    backgroundActive={'green'}
                                    backgroundInactive={'gray'}
                                    circleActiveColor={'#30a566'}
                                    circleInActiveColor={'#fff'}
                                    renderInsideCircle={() => ''} // custom component to render inside the Switch circle (Text, Image, etc.)
                                    changeValueImmediately={false} // if rendering inside circle, change state immediately or wait for animation to complete
                                    innerCircleStyle={{ borderColor: 'red' }} // style for inner animated circle for what you (may) be rendering inside the circle
                                    outerCircleStyle={{ backgroundColor: 'yellow',borderRadius:10,width:"auto"}} // style for outer animated circle
                                    renderActiveText={false}
                                    renderInActiveText={true}
                                    switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                    switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                    switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
                                    switchBorderRadius={50} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                                />
                            }
                            assert={({ expect, state }) => {
                                expect(state).to.be.eq(true);
                            }}
                        />

                        <TestCase
                            itShould="renderActiveText:false"
                            tags={["dev"]}
                            initialState={false}
                            arrange={({ setState }) =>
                                <Switch
                                    value={isEnabled}
                                    onValueChange={(val) => { setState(true), toggleSwitch(val) }}
                                    disabled={false}
                                    activeText={'On'}
                                    inActiveText={'Off'}
                                    circleSize={30}
                                    barHeight={30}
                                    circleBorderWidth={3}
                                    backgroundActive={'green'}
                                    backgroundInactive={'gray'}
                                    circleActiveColor={'#30a566'}
                                    circleInActiveColor={'#fff'}
                                    renderInsideCircle={() => ''} // custom component to render inside the Switch circle (Text, Image, etc.)
                                    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                                    outerCircleStyle={{}} // style for outer animated circle
                                    renderActiveText={false}
                                    renderInActiveText={true}
                                    switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                    switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                    switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
                                    switchBorderRadius={50} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                                />
                            }
                            assert={({ expect, state }) => {
                                expect(state).to.be.eq(true);
                            }}
                        />

                        <TestCase
                            itShould="renderInActiveText:false"
                            tags={["dev"]}
                            initialState={false}
                            arrange={({ setState }) =>
                                <Switch
                                    value={isEnabled}
                                    onValueChange={(val) => { setState(true), toggleSwitch(val) }}
                                    disabled={false}
                                    activeText={'On'}
                                    inActiveText={'Off'}
                                    circleSize={30}
                                    barHeight={30}
                                    circleBorderWidth={3}
                                    backgroundActive={'green'}
                                    backgroundInactive={'gray'}
                                    circleActiveColor={'#30a566'}
                                    circleInActiveColor={'#fff'}
                                    renderInsideCircle={() => ''} // custom component to render inside the Switch circle (Text, Image, etc.)
                                    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                                    outerCircleStyle={{}} // style for outer animated circle
                                    renderActiveText={true}
                                    renderInActiveText={true}
                                    switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                    switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                    switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
                                    switchBorderRadius={50} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                                />
                            }
                            assert={({ expect, state }) => {
                                expect(state).to.be.eq(true);
                            }}
                        />

                        <TestCase
                            itShould="switchLeftPx:1,switchRightPx:1"
                            tags={["dev"]}
                            initialState={false}
                            arrange={({ setState }) =>
                                <Switch
                                    value={isEnabled}
                                    onValueChange={(val) => { setState(true), toggleSwitch(val) }}
                                    disabled={false}
                                    activeText={'On'}
                                    inActiveText={'Off'}
                                    circleSize={30}
                                    barHeight={30}
                                    circleBorderWidth={3}
                                    backgroundActive={'green'}
                                    backgroundInactive={'gray'}
                                    circleActiveColor={'#30a566'}
                                    circleInActiveColor={'#fff'}
                                    renderInsideCircle={() => ''} // custom component to render inside the Switch circle (Text, Image, etc.)
                                    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                                    outerCircleStyle={{}} // style for outer animated circle
                                    renderActiveText={true}
                                    renderInActiveText={true}
                                    switchLeftPx={1} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                    switchRightPx={1} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                    switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
                                    switchBorderRadius={50} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                                />
                            }
                            assert={({ expect, state }) => {
                                expect(state).to.be.eq(true);
                            }}
                        />

                        <TestCase
                            itShould="switchWidthMultiplier:5"
                            tags={["dev"]}
                            initialState={false}
                            arrange={({ setState }) =>
                                <Switch
                                    value={isEnabled}
                                    onValueChange={(val) => { setState(true), toggleSwitch(val) }}
                                    disabled={false}
                                    activeText={'On'}
                                    inActiveText={'Off'}
                                    circleSize={30}
                                    barHeight={30}
                                    circleBorderWidth={3}
                                    backgroundActive={'green'}
                                    backgroundInactive={'gray'}
                                    circleActiveColor={'#30a566'}
                                    circleInActiveColor={'#fff'}
                                    renderInsideCircle={() => ''} // custom component to render inside the Switch circle (Text, Image, etc.)
                                    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                                    outerCircleStyle={{}} // style for outer animated circle
                                    renderActiveText={true}
                                    renderInActiveText={true}
                                    switchLeftPx={1} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                    switchRightPx={1} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                    switchWidthMultiplier={4} // multiplied by the `circleSize` prop to calculate total width of the Switch
                                    switchBorderRadius={50} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                                />
                            }
                            assert={({ expect, state }) => {
                                expect(state).to.be.eq(true);
                            }}
                        />

                        <TestCase
                            itShould="switchBorderRadius:10"
                            tags={["dev"]}
                            initialState={false}
                            arrange={({ setState }) =>
                                <Switch
                                    value={isEnabled}
                                    onValueChange={(val) => { setState(true), toggleSwitch(val) }}
                                    disabled={false}
                                    activeText={'On'}
                                    inActiveText={'Off'}
                                    circleSize={30}
                                    barHeight={30}
                                    circleBorderWidth={3}
                                    backgroundActive={'green'}
                                    backgroundInactive={'gray'}
                                    circleActiveColor={'#30a566'}
                                    circleInActiveColor={'#fff'}
                                    renderInsideCircle={() => ''} // custom component to render inside the Switch circle (Text, Image, etc.)
                                    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                                    outerCircleStyle={{}} // style for outer animated circle
                                    renderActiveText={true}
                                    renderInActiveText={true}
                                    switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                    switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                    switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
                                    switchBorderRadius={10} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                                />
                            }
                            assert={({ expect, state }) => {
                                expect(state).to.be.eq(true);
                            }}
                        />
                    </View>
                </TestSuite>
            </Tester>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",

    }
});