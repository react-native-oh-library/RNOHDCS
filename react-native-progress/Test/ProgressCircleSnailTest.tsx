import React, { useState, useRef, useEffect } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Tester, TestSuite, TestCase as _TestCase } from "@rnoh/testerino";
import { SmartManualTestCaseProps } from "@rnoh/testerino/src/react-native/ManualTestCase";

// @ts-ignore
import * as Progress from "@react-native-oh-tpl/react-native-progress";

export default function ProgressCircleSnailTest() {
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
  const [animating, setAnimating] = React.useState(true);
  const [animating_, setAnimating_] = React.useState(false);
  const [hidesWhenStopped, setHidesWhenStopped] = React.useState(true);
  const [hidesWhenStopped_, setHidesWhenStopped_] = React.useState(false);
  const [color_, setColor_] = React.useState(["#F44336", "#2196F3", "#009688"]);
  const [thickness, setThickness] = React.useState(10);
  const [duration, setDuration] = React.useState(10);
  const [spinDuration, setSpinDuration] = React.useState(10);
  const [strokeCap, setStrokeCap] = React.useState('butt');
  const [strokeCap_, setStrokeCap_] = React.useState('square');
  const [strokeCap__, setStrokeCap__] = React.useState('round');
  const [direction, setDirection] = React.useState('clockwise');
  const [direction_, setDirection_] = React.useState('counter-clockwise');


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
        <TestSuite name="ProgressCircleSnail">
          <TestCase
            itShould='direction = clockwise'
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.CircleSnail
                    style={styles.circles}
                    progress={progress}
                    direction={strokeCap}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould='direction = counter-clockwise'
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.CircleSnail
                    style={styles.circles}
                    progress={progress}
                    direction={direction_}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould='strokeCap = butt'
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.CircleSnail
                    style={styles.circles}
                    progress={progress}
                    strokeCap={strokeCap}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould='strokeCap = square'
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.CircleSnail
                    style={styles.circles}
                    progress={progress}
                    strokeCap={strokeCap_}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould='strokeCap = round'
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.CircleSnail
                    style={styles.circles}
                    progress={progress}
                    strokeCap={strokeCap__}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />


          <TestCase
            itShould='spinDuration = 10'
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.CircleSnail
                    style={styles.circles}
                    progress={progress}
                    spinDuration={spinDuration}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould='duration = 10'
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.CircleSnail
                    style={styles.circles}
                    progress={progress}
                    duration={duration}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould='thickness = 10'
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.CircleSnail
                    style={styles.circles}
                    progress={progress}
                    thickness={thickness}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould='color = ["#F44336", "#2196F3", "#009688"]'
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.CircleSnail
                    style={styles.circles}
                    progress={progress}
                    color={color_}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="hidesWhenStopped = true"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.CircleSnail
                    style={styles.circles}
                    progress={progress}
                    hidesWhenStopped={hidesWhenStopped}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="hidesWhenStopped = false"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.CircleSnail
                    style={styles.circles}
                    progress={progress}
                    hidesWhenStopped={hidesWhenStopped_}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="animating = true"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.CircleSnail
                    style={styles.circles}
                    progress={progress}
                    animating={animating}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="animating = false"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.CircleSnail
                    style={styles.circles}
                    progress={progress}
                    animating={animating_}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="size = 20"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.CircleSnail
                    style={styles.circles}
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
                  <Progress.CircleSnail
                    style={styles.circles}
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
                  <Progress.CircleSnail
                    style={styles.circles}
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
                  <Progress.CircleSnail
                    style={styles.circles}
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
                  <Progress.CircleSnail
                    style={styles.circles}
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
                  <Progress.CircleSnail
                    style={styles.circles}
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
                  <Progress.CircleSnail
                    style={styles.circles}
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
                  <Progress.CircleSnail
                    style={styles.circles}
                    progress={progress}
                    animated={indeterminate_}
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
                  <Progress.CircleSnail
                    style={styles.circles}
                    progress={progress}
                    animated={indeterminate_}
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
                  <Progress.CircleSnail
                    style={styles.circles}
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
                  <Progress.CircleSnail
                    style={styles.circles}
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
                  <Progress.CircleSnail
                    style={styles.circles}
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
                  <Progress.CircleSnail
                    style={styles.circles}
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
                  <Progress.CircleSnail
                    style={styles.circles}
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
                  <Progress.CircleSnail
                    style={styles.circles}
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


