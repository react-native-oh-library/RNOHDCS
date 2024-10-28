import React, { useState } from "react";
import { Switch } from "react-native-switch";
import { TestSuite, Tester, TestCase } from "@rnoh/testerino";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function SwitchDemo() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = (val: boolean) => {
    setIsEnabled(val);
  };

  return (
    <ScrollView>
      <Tester>
        <TestSuite name="SwitchDemo">
          <View style={styles.container}>
            <TestCase
              itShould="activeText:开 inActiveText:关"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) => (
                <Switch
                  value={isEnabled}
                  onValueChange={(val) => {
                    setState(true), toggleSwitch(val);
                  }}
                  disabled={false}
                  activeText={"开"}
                  inActiveText={"关"}
                  circleSize={30}
                  barHeight={30}
                  circleBorderWidth={3}
                  backgroundActive={"green"}
                  backgroundInactive={"gray"}
                  circleActiveColor={"#30a566"}
                  circleInActiveColor={"#fff"}
                  renderInsideCircle={() => ""}
                  changeValueImmediately={true}
                  innerCircleStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  outerCircleStyle={{}}
                  renderActiveText={true}
                  renderInActiveText={true}
                  switchLeftPx={2}
                  switchRightPx={2}
                  switchWidthMultiplier={3}
                  switchBorderRadius={50}
                />
              )}
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase
              itShould="circleSize:20 barHeight:20"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) => (
                <Switch
                  value={isEnabled}
                  onValueChange={(val) => {
                    setState(true), toggleSwitch(val);
                  }}
                  disabled={false}
                  activeText={"On"}
                  inActiveText={"Off"}
                  circleSize={20}
                  barHeight={20}
                  circleBorderWidth={3}
                  backgroundActive={"green"}
                  backgroundInactive={"gray"}
                  circleActiveColor={"#30a566"}
                  circleInActiveColor={"#fff"}
                  renderInsideCircle={() => ""}
                  changeValueImmediately={true}
                  innerCircleStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  outerCircleStyle={{}}
                  renderActiveText={true}
                  renderInActiveText={true}
                  switchLeftPx={2}
                  switchRightPx={2}
                  switchWidthMultiplier={3}
                  switchBorderRadius={50}
                />
              )}
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase
              itShould="backgroundActive:'#000' backgroundInactive:'#999fff'"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) => (
                <Switch
                  value={isEnabled}
                  onValueChange={(val) => {
                    setState(true), toggleSwitch(val);
                  }}
                  disabled={false}
                  activeText={"On"}
                  inActiveText={"Off"}
                  circleSize={30}
                  barHeight={30}
                  circleBorderWidth={3}
                  backgroundActive={"#000"}
                  backgroundInactive={"#999fff"}
                  circleActiveColor={"#30a566"}
                  circleInActiveColor={"#fff"}
                  renderInsideCircle={() => ""}
                  changeValueImmediately={true}
                  innerCircleStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  outerCircleStyle={{}}
                  renderActiveText={true}
                  renderInActiveText={true}
                  switchLeftPx={2}
                  switchRightPx={2}
                  switchWidthMultiplier={3}
                  switchBorderRadius={50}
                />
              )}
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase
              itShould="circleActiveColor:'#3ef' circleInActiveColor:'#9fe'"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) => (
                <Switch
                  value={isEnabled}
                  onValueChange={(val) => {
                    setState(true), toggleSwitch(val);
                  }}
                  disabled={false}
                  activeText={"On"}
                  inActiveText={"Off"}
                  circleSize={30}
                  barHeight={30}
                  circleBorderWidth={3}
                  backgroundActive={"green"}
                  backgroundInactive={"gray"}
                  circleActiveColor={"#3ef"}
                  circleInActiveColor={"#9fe"}
                  renderInsideCircle={() => ""}
                  changeValueImmediately={true}
                  innerCircleStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  outerCircleStyle={{}}
                  renderActiveText={true}
                  renderInActiveText={true}
                  switchLeftPx={2}
                  switchRightPx={2}
                  switchWidthMultiplier={3}
                  switchBorderRadius={50}
                />
              )}
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase
              itShould="renderInsideCircle:<Text>t</Text>"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) => (
                <Switch
                  value={isEnabled}
                  onValueChange={(val) => {
                    setState(true), toggleSwitch(val);
                  }}
                  disabled={false}
                  activeText={"On"}
                  inActiveText={"Off"}
                  circleSize={30}
                  barHeight={30}
                  circleBorderWidth={3}
                  backgroundActive={"green"}
                  backgroundInactive={"gray"}
                  circleActiveColor={"#30a566"}
                  circleInActiveColor={"#fff"}
                  renderInsideCircle={() => <Text>t</Text>}
                  changeValueImmediately={true}
                  innerCircleStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  outerCircleStyle={{}}
                  renderActiveText={true}
                  renderInActiveText={true}
                  switchLeftPx={2}
                  switchRightPx={2}
                  switchWidthMultiplier={3}
                  switchBorderRadius={50}
                />
              )}
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase
              itShould="innerCircleStyle borderColor:red   outerCircleStyle backgroundColor:yellow"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) => (
                <Switch
                  value={isEnabled}
                  onValueChange={(val) => {
                    setState(true), toggleSwitch(val);
                  }}
                  disabled={false}
                  activeText={"yes"}
                  inActiveText={"no"}
                  circleSize={30}
                  barHeight={30}
                  circleBorderWidth={3}
                  backgroundActive={"green"}
                  backgroundInactive={"gray"}
                  circleActiveColor={"#30a566"}
                  circleInActiveColor={"#fff"}
                  renderInsideCircle={() => ""}
                  changeValueImmediately={false}
                  innerCircleStyle={{ borderColor: "red" }}
                  outerCircleStyle={{
                    backgroundColor: "yellow",
                    borderRadius: 10,
                    width: "auto",
                  }}
                  renderActiveText={false}
                  renderInActiveText={true}
                  switchLeftPx={2}
                  switchRightPx={2}
                  switchWidthMultiplier={3}
                  switchBorderRadius={50}
                />
              )}
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase
              itShould="renderActiveText:false"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) => (
                <Switch
                  value={isEnabled}
                  onValueChange={(val) => {
                    setState(true), toggleSwitch(val);
                  }}
                  disabled={false}
                  activeText={"On"}
                  inActiveText={"Off"}
                  circleSize={30}
                  barHeight={30}
                  circleBorderWidth={3}
                  backgroundActive={"green"}
                  backgroundInactive={"gray"}
                  circleActiveColor={"#30a566"}
                  circleInActiveColor={"#fff"}
                  renderInsideCircle={() => ""}
                  changeValueImmediately={true}
                  innerCircleStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  outerCircleStyle={{}}
                  renderActiveText={false}
                  renderInActiveText={true}
                  switchLeftPx={2}
                  switchRightPx={2}
                  switchWidthMultiplier={3}
                  switchBorderRadius={50}
                />
              )}
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase
              itShould="renderActiveText:true"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) => (
                <Switch
                  value={isEnabled}
                  onValueChange={(val) => {
                    setState(true), toggleSwitch(val);
                  }}
                  disabled={false}
                  activeText={"On"}
                  inActiveText={"Off"}
                  circleSize={30}
                  barHeight={30}
                  circleBorderWidth={3}
                  backgroundActive={"green"}
                  backgroundInactive={"gray"}
                  circleActiveColor={"#30a566"}
                  circleInActiveColor={"#fff"}
                  renderInsideCircle={() => ""}
                  changeValueImmediately={true}
                  innerCircleStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  outerCircleStyle={{}}
                  renderActiveText={true}
                  renderInActiveText={true}
                  switchLeftPx={2}
                  switchRightPx={2}
                  switchWidthMultiplier={3}
                  switchBorderRadius={50}
                />
              )}
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase
              itShould="renderInActiveText:false"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) => (
                <Switch
                  value={isEnabled}
                  onValueChange={(val) => {
                    setState(true), toggleSwitch(val);
                  }}
                  disabled={false}
                  activeText={"On"}
                  inActiveText={"Off"}
                  circleSize={30}
                  barHeight={30}
                  circleBorderWidth={3}
                  backgroundActive={"green"}
                  backgroundInactive={"gray"}
                  circleActiveColor={"#30a566"}
                  circleInActiveColor={"#fff"}
                  renderInsideCircle={() => ""}
                  changeValueImmediately={true}
                  innerCircleStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  outerCircleStyle={{}}
                  renderActiveText={true}
                  renderInActiveText={false}
                  switchLeftPx={2}
                  switchRightPx={2}
                  switchWidthMultiplier={3}
                  switchBorderRadius={50}
                />
              )}
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase
              itShould="renderInActiveText:true"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) => (
                <Switch
                  value={isEnabled}
                  onValueChange={(val) => {
                    setState(true), toggleSwitch(val);
                  }}
                  disabled={false}
                  activeText={"On"}
                  inActiveText={"Off"}
                  circleSize={30}
                  barHeight={30}
                  circleBorderWidth={3}
                  backgroundActive={"green"}
                  backgroundInactive={"gray"}
                  circleActiveColor={"#30a566"}
                  circleInActiveColor={"#fff"}
                  renderInsideCircle={() => ""}
                  changeValueImmediately={true}
                  innerCircleStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  outerCircleStyle={{}}
                  renderActiveText={true}
                  renderInActiveText={true}
                  switchLeftPx={2}
                  switchRightPx={2}
                  switchWidthMultiplier={3}
                  switchBorderRadius={50}
                />
              )}
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase
              itShould="switchLeftPx:1,switchRightPx:1"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) => (
                <Switch
                  value={isEnabled}
                  onValueChange={(val) => {
                    setState(true), toggleSwitch(val);
                  }}
                  disabled={false}
                  activeText={"On"}
                  inActiveText={"Off"}
                  circleSize={30}
                  barHeight={30}
                  circleBorderWidth={3}
                  backgroundActive={"green"}
                  backgroundInactive={"gray"}
                  circleActiveColor={"#30a566"}
                  circleInActiveColor={"#fff"}
                  renderInsideCircle={() => ""}
                  changeValueImmediately={true}
                  innerCircleStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  outerCircleStyle={{}}
                  renderActiveText={true}
                  renderInActiveText={true}
                  switchLeftPx={1}
                  switchRightPx={1}
                  switchWidthMultiplier={3}
                  switchBorderRadius={50}
                />
              )}
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase
              itShould="switchWidthMultiplier:5"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) => (
                <Switch
                  value={isEnabled}
                  onValueChange={(val) => {
                    setState(true), toggleSwitch(val);
                  }}
                  disabled={false}
                  activeText={"On"}
                  inActiveText={"Off"}
                  circleSize={30}
                  barHeight={30}
                  circleBorderWidth={3}
                  backgroundActive={"green"}
                  backgroundInactive={"gray"}
                  circleActiveColor={"#30a566"}
                  circleInActiveColor={"#fff"}
                  renderInsideCircle={() => ""}
                  changeValueImmediately={true}
                  innerCircleStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  outerCircleStyle={{}}
                  renderActiveText={true}
                  renderInActiveText={true}
                  switchLeftPx={1}
                  switchRightPx={1}
                  switchWidthMultiplier={4}
                  switchBorderRadius={50}
                />
              )}
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />

            <TestCase
              itShould="switchBorderRadius:10"
              tags={["dev"]}
              initialState={false}
              arrange={({ setState }) => (
                <Switch
                  value={isEnabled}
                  onValueChange={(val) => {
                    setState(true), toggleSwitch(val);
                  }}
                  disabled={false}
                  activeText={"On"}
                  inActiveText={"Off"}
                  circleSize={30}
                  barHeight={30}
                  circleBorderWidth={3}
                  backgroundActive={"green"}
                  backgroundInactive={"gray"}
                  circleActiveColor={"#30a566"}
                  circleInActiveColor={"#fff"}
                  renderInsideCircle={() => ""}
                  changeValueImmediately={true}
                  innerCircleStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  outerCircleStyle={{}}
                  renderActiveText={true}
                  renderInActiveText={true}
                  switchLeftPx={2}
                  switchRightPx={2}
                  switchWidthMultiplier={3}
                  switchBorderRadius={10}
                />
              )}
              assert={({ expect, state }) => {
                expect(state).to.be.eq(true);
              }}
            />
          </View>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
