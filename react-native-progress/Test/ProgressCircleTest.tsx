import React, { useState, useRef, useEffect } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Tester, TestSuite, TestCase as _TestCase } from "@rnoh/testerino";
import { SmartManualTestCaseProps } from "@rnoh/testerino/src/react-native/ManualTestCase";

// @ts-ignore
import * as Progress from "@react-native-oh-tpl/react-native-progress";

export default function ProgressCircleTest() {
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
  const [endAngle, setEndAngle] = React.useState(0);
  const [endAngle_, setEndAngle_] = React.useState(1);
  const [endAngle__, setEndAngle__] = React.useState(20);
  const [thickness, setThickness] = React.useState(20);
  const [showsText, setThowsText] = React.useState(true);
  const [showsText_, setThowsText_] = React.useState(false);
  const [textStyle, setTextStyle] = React.useState({
    color: "red", fontSize: 40
  });
  const [allowFontScaling, setallowFontScaling] = React.useState(true);
  const [allowFontScaling_, setallowFontScaling_] = React.useState(false);
  const [direction, setDirection] = React.useState("clockwise");
  const [direction_, setDirection_] = React.useState("counter-clockwise");
  const [strokeCap, setStrokeCap] = React.useState("butt");
  const [strokeCap_, setStrokeCap_] = React.useState("square");
  const [strokeCap__, setStrokeCap__] = React.useState("round");
  const [fill, setFill] = React.useState("red");


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
        <TestSuite name="ProgressCircle">

          <TestCase
            itShould="fill = red"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Circle
                    style={styles.progress}
                    progress={progress}
                    showsText={showsText}
                    fill={fill}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="strokeCap = butt"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Circle
                    style={styles.progress}
                    progress={progress}
                    showsText={showsText}
                    strokeCap={strokeCap}
                    borderWidth = {10}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="strokeCap = square"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Circle
                    style={styles.progress}
                    progress={progress}
                    showsText={showsText}
                    strokeCap={strokeCap_}
                    borderWidth = {10}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="strokeCap = round"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Circle
                    style={styles.progress}
                    progress={progress}
                    showsText={showsText}
                    strokeCap={strokeCap__}
                    borderWidth = {10}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="direction = clockwise"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Circle
                    style={styles.progress}
                    progress={progress}
                    showsText={showsText}
                    direction={direction}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="direction = counter-clockwise"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Circle
                    style={styles.progress}
                    progress={progress}
                    showsText={showsText}
                    direction={direction_}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="allowFontScaling = true"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Circle
                    style={styles.progress}
                    progress={progress}
                    showsText={showsText}
                    allowFontScaling={allowFontScaling}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="allowFontScaling = false"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Circle
                    style={styles.progress}
                    progress={progress}
                    showsText={showsText}
                    allowFontScaling={allowFontScaling_}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="textStyle = {  color: 'red', fontSize: 40 }"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Circle
                    style={styles.progress}
                    progress={progress}
                    showsText={showsText}
                    textStyle={textStyle}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="formatText"
            initialState={undefined as any}
            arrange={({ setState }) => {
              const [value, setValue] = useState('')
              return (
                <View>
                  <Progress.Circle
                    style={styles.progress}
                    progress={progress}
                    showsText={showsText}
                    formatText={(value: string = '') => {
                      setValue(value)
                    }}
                  />
                  <Text>{value}</Text>
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="showsText = true"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Circle
                    style={styles.progress}
                    progress={progress}
                    showsText={showsText}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="showsText = false"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Circle
                    style={styles.progress}
                    progress={progress}
                    showsText={showsText_}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="thickness = 20"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Circle
                    style={styles.progress}
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
            itShould="endAngle = 0"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Circle
                    style={styles.progress}
                    progress={progress}
                    endAngle={endAngle}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="endAngle = 1"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Circle
                    style={styles.progress}
                    progress={progress}
                    endAngle={endAngle_}
                  />
                </View>
              );
            }}
            assert={() => {
            }}
          />

          <TestCase
            itShould="endAngle = 20"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Progress.Circle
                    style={styles.progress}
                    progress={progress}
                    endAngle={endAngle__}
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
                  <Progress.Circle
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
                  <Progress.Circle
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
                  <Progress.Circle
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
                  <Progress.Circle
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
                  <Progress.Circle
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
                  <Progress.Circle
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
                  <Progress.Circle
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
                  <Progress.Circle
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
                  <Progress.Circle
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
                  <Progress.Circle
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
                  <Progress.Circle
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
                  <Progress.Circle
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
                  <Progress.Circle
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
                  <Progress.Circle
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
                  <Progress.Circle
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


