import React, { useState, useRef, useEffect } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Tester, TestSuite, TestCase as _TestCase } from "@rnoh/testerino";
import { SmartManualTestCaseProps } from "@rnoh/testerino/src/react-native/ManualTestCase";

// @ts-ignore
import * as Progress from "@react-native-oh-tpl/react-native-progress";

export default function ProgressPieTest() {
  const [progress, setProgress] = React.useState(0);
  const [progressZero, setProgressZero] = React.useState(0);
  const [progressOne, setProgressOne] = React.useState(1);
  const [animated, setAnimated] = React.useState(true);
  const [animated_, setAnimated_] = React.useState(false);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [indeterminate_, setIndeterminate_] = React.useState(false);
  const [indeterminateAnimationDuration, setIndeterminateAnimationDuration] = React.useState(0);
  const [indeterminateAnimationDuration_, setIndeterminateAnimationDuration_] = React.useState(1000);
  const [color, setColor] = React.useState("green");
  const [unfilledColor, setUnfilledColor] = React.useState("red");
  const [borderWidth, setBorderWidth] = React.useState(0);
  const [borderWidth_, setBorderWidth_] = React.useState(10);
  const [borderColor, setBorderColor] = React.useState("red");
  const [size, setSize] = React.useState(20);


  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timer = setTimeout(() => {
      setIndeterminate(false);
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 1) {
            return 0;
          }
          return Math.min(1, prevProgress + Math.random() / 5);
        });
      }, 500);
    }, 1500);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <ScrollView style={{ flex: 1, height: "100%" }}>
      <Tester>
        <TestSuite name="ProgressPie">
          <TestCase
            itShould="size = 20"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Pie
                    style={styles.progress}
                    progress={progress}
                    size={size}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="progress = 0 - 1"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Pie
                    style={styles.progress}
                    progress={progress}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="progress = 0 "
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Pie
                    style={styles.progress}
                    progress={progressZero}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="progress = 1"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Pie
                    style={styles.progress}
                    progress={progressOne}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="animated = false"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Pie
                    style={styles.progress}
                    progress={progress}
                    animated={animated_}
                    indeterminate={indeterminate_}
                    indeterminateAnimationDuration={indeterminateAnimationDuration}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="animated = true"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Pie
                    style={styles.progress}
                    progress={progress}
                    animated={true}
                    indeterminate={true}
                    indeterminateAnimationDuration={1000}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="indeterminate = true"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Pie
                    style={styles.progress}
                    progress={progress}
                    animated={true}
                    indeterminate={true}
                    indeterminateAnimationDuration={1000}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="indeterminate = false"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Pie
                    style={styles.progress}
                    progress={progress}
                    animated={animated_}
                    indeterminate={indeterminate_}
                    indeterminateAnimationDuration={indeterminateAnimationDuration}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="indeterminateAnimationDuration = 0"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Pie
                    style={styles.progress}
                    progress={progress}
                    animated={animated_}
                    indeterminate={indeterminate_}
                    indeterminateAnimationDuration={indeterminateAnimationDuration}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="indeterminateAnimationDuration = 1000"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Pie
                    style={styles.progress}
                    progress={progress}
                    animated={true}
                    indeterminate={true}
                    indeterminateAnimationDuration={1000}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="color = green"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Pie
                    style={styles.progress}
                    progress={progress}
                    color={color}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="unfilledColor = red"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Pie
                    style={styles.progress}
                    progress={progress}
                    unfilledColor={unfilledColor}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="borderWidth = 0"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Pie
                    style={styles.progress}
                    progress={progress}
                    borderWidth={borderWidth}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="borderWidth = 10"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Pie
                    style={styles.progress}
                    progress={progress}
                    borderWidth={borderWidth_}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="borderColor = red"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Pie
                    style={styles.progress}
                    progress={progress}
                    borderColor={borderColor}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  bar: {
    flexDirection: "row",
    justifyContent: "center"
  },
  circles: {
    flexDirection: "row",
    justifyContent: "center"
  },
  progress: {
    margin: 10
  }
});

function TestCase<TState = undefined>({
                                        itShould,
                                        modal,
                                        initialState,
                                        arrange,
                                        assert
                                      }: {
  itShould: string;
  modal?: boolean;
  initialState: TState;
  arrange: SmartManualTestCaseProps<TState>["arrange"];
  assert: SmartManualTestCaseProps<TState>["assert"];
}) {
  return (
    <_TestCase
      itShould={itShould}
      modal={modal}
      initialState={initialState}
      arrange={arrange}
      assert={assert}
    />
  );
}


