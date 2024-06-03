import React from "react";

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Animated,
  Image,
  Button,
} from "react-native";
import { Tester, TestSuite } from "@rnoh/testerino";
import { TestCase } from "../../components/TestCase";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

const AnimatedView = Animated.createAnimatedComponent(View);

CustomLabel.defaultProps = {
  leftDiff: 0,
};

const width = 50;
const pointerWidth = width * 0.47;

function LabelBase(props: any) {
  const { position, value, leftDiff, pressed } = props;
  const scaleValue = React.useRef(new Animated.Value(0.1)); // Behaves oddly if set to 0
  const cachedPressed = React.useRef(pressed);

  React.useEffect(() => {
    Animated.timing(scaleValue.current, {
      toValue: pressed ? 1 : 0.1,
      duration: 200,
      delay: pressed ? 0 : 2000,
      useNativeDriver: false,
    }).start();
    cachedPressed.current = pressed;
  }, [pressed]);

  return (
    Number.isFinite(position) &&
    Number.isFinite(value) && (
      <AnimatedView
        style={[
          labelStyles.sliderLabel,
          {
            left: position - width / 2,
            transform: [
              { translateY: width },
              { scale: scaleValue.current },
              { translateY: -width },
            ],
          },
        ]}
      >
        <View style={labelStyles.pointer} />
        <Text style={labelStyles.sliderLabelText}>{value}</Text>
      </AnimatedView>
    )
  );
}

function CustomLabel(props: any) {
  const {
    leftDiff,
    oneMarkerValue,
    twoMarkerValue,
    oneMarkerLeftPosition,
    twoMarkerLeftPosition,
    oneMarkerPressed,
    twoMarkerPressed,
  } = props;

  return (
    <View style={labelStyles.parentView}>
      <LabelBase
        position={oneMarkerLeftPosition}
        value={oneMarkerValue}
        leftDiff={leftDiff}
        pressed={oneMarkerPressed}
      />
      <LabelBase
        position={twoMarkerLeftPosition}
        value={twoMarkerValue}
        leftDiff={leftDiff}
        pressed={twoMarkerPressed}
      />
    </View>
  );
}

class CustomMarker extends React.Component<any> {
  render() {
    return (
      <View>
        <Text style={markerStyles.text}>
          {this.props.valuePrefix}
          {this.props.currentValue}
        </Text>
        <Image
          style={markerStyles.image}
          source={
            this.props.pressed
              ? require("./ruby.png")
              : require("./diamond.png")
          }
          resizeMode="contain"
        />
        <Text style={markerStyles.text}>
          {this.props.valuePrefix}
          {this.props.currentValue}
          {this.props.valueSuffix}
        </Text>
      </View>
    );
  }
}

export default function MultiSliderDemoTester() {
  let testRef = React.useRef<View>(null);

  // 滑动指标配置
  const touchDimensionsConfig = {
    height: 60,
    width: 60,
    borderRadius: 10,
    slipDisplacement: 200,
  };

  return (
    <Tester>
      <ScrollView>
        <TestSuite name="react-native-multi-slider">
          <View style={styles.container}>
            <View style={styles.sliders}>
              <TestCase.Example
                tags={["C_API"]}
                itShould="values（设置values，1和6）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider values={[1, 6]} />
                </View>
              </TestCase.Example>

              <TestCase.Manual
                itShould="onValuesChangeStart（值开始变化触发回调）"
                tags={["C_API"]}
                initialState={false}
                arrange={({ setState }) => {
                  return (
                    <View style={styles.sliderSmall}>
                      <MultiSlider
                        onValuesChangeStart={() => {
                          setState(true);
                        }}
                      />
                    </View>
                  );
                }}
                assert={async ({ expect, state }) => {
                  expect(state).to.be.true;
                }}
              />

              <TestCase.Manual
                itShould="onValuesChange（值改变时回调触发回调）"
                tags={["C_API"]}
                initialState={false}
                arrange={({ setState }) => {
                  return (
                    <View style={styles.sliderSmall}>
                      <MultiSlider
                        onValuesChange={() => {
                          setState(true);
                        }}
                      />
                    </View>
                  );
                }}
                assert={async ({ expect, state }) => {
                  expect(state).to.be.true;
                }}
              />

              <TestCase.Manual
                itShould="onValuesChangeFinish（当值停止变化时回调）"
                tags={["C_API"]}
                initialState={false}
                arrange={({ setState }) => {
                  return (
                    <View style={styles.sliderSmall}>
                      <MultiSlider
                        onValuesChangeFinish={() => {
                          setState(true);
                        }}
                      />
                    </View>
                  );
                }}
                assert={async ({ expect, state }) => {
                  expect(state).to.be.true;
                }}
              />

              <TestCase.Example
                tags={["C_API"]}
                itShould="sliderLength（滑块长度100）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider sliderLength={100} />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="sliderLength（滑动指标borderRadius 50）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider touchDimensions={touchDimensionsConfig} />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="enableLabel（开启自定义标签）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider enableLabel customLabel={CustomLabel} />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="customMarker（自定义光标）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider customMarker={CustomMarker} />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="customMarkerLeft/Right（自定义左右光标：默认未启用）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider
                    values={[0, 10]}
                    customMarkerLeft={() => <CustomMarker />}
                    customMarkerRight={() => <CustomMarker pressed />}
                  />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="isMarkersSeparated（自定义左右光标：启用）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider
                    values={[0, 10]}
                    isMarkersSeparated={true}
                    customMarkerLeft={() => <CustomMarker />}
                    customMarkerRight={() => <CustomMarker pressed />}
                  />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="min（滑块可用最小值3）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider values={[3]} enableLabel min={3} />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="max（滑块可用最大值8）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider enableLabel max={8} />
                </View>
              </TestCase.Example>

              <TestCase.Example tags={["C_API"]} itShould="step（滑块步长5）">
                <View style={styles.sliderSmall}>
                  <MultiSlider enableLabel step={5} />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="optionsArray（节点标记2，6，9）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider enableLabel optionsArray={[2, 6, 9]} />
                </View>
              </TestCase.Example>

              <TestCase.Example tags={["C_API"]} itShould="style（滑块样式）">
                <View style={styles.sliderSmall}>
                  <MultiSlider
                    containerStyle={{
                      backgroundColor: "lightblue",
                      padding: 10,
                    }}
                    trackStyle={{ backgroundColor: "gray", height: 5 }}
                    selectedStyle={{ backgroundColor: "blue" }}
                    unselectedStyle={{ backgroundColor: "lightgray" }}
                    markerContainerStyle={{
                      backgroundColor: "transparent",
                      borderColor: "blue",
                      borderWidth: 2,
                    }}
                    markerStyle={{
                      backgroundColor: "blue",
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                    }}
                    pressedMarkerStyle={{ backgroundColor: "darkblue" }}
                  />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="valuePrefix（值的前缀 b）"
              >
                <View style={styles.sliderMiddle}>
                  <MultiSlider
                    values={[0, 10]}
                    customMarker={CustomMarker}
                    valuePrefix="b"
                  />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="valueSuffix（值的后缀 a）"
              >
                <View style={styles.sliderMiddle}>
                  <MultiSlider
                    values={[0, 10]}
                    customMarker={CustomMarker}
                    valueSuffix="a"
                  />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="enabledOne（禁用第一个光标）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider values={[0, 10]} enabledOne={false} />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="enabledTwo（禁用第二个光标）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider values={[0, 10]} enabledTwo={false} />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="stepsAs（自定义步骤标签，默认展示）"
              >
                <View style={styles.sliderMiddle}>
                  <MultiSlider
                    values={[0, 10]}
                    step={2}
                    showSteps
                    stepsAs={[
                      { index: 1, stepLabel: "t1", prefix: "a1", suffix: "b1" },
                      { index: 2, stepLabel: "t2", prefix: "a2", suffix: "b2" },
                    ]}
                  />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="showStepLabels（隐藏/显示自定义步骤标签，这里隐藏）"
              >
                <View style={styles.sliderMiddle}>
                  <MultiSlider
                    values={[0, 10]}
                    step={2}
                    showSteps
                    showStepLabels={false}
                    stepsAs={[
                      { index: 1, stepLabel: "t", prefix: "a", suffix: "b" },
                      { index: 2, stepLabel: "t", prefix: "a", suffix: "b" },
                    ]}
                  />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="showStepMarkers（显示步骤对应的刻度点）"
              >
                <View style={styles.sliderMiddle}>
                  <MultiSlider
                    values={[0, 10]}
                    step={2}
                    showSteps
                    showStepMarkers
                  />
                </View>
              </TestCase.Example>

              <TestCase.Manual
                itShould="onToggleOne（点击第一个光标回调）"
                tags={["C_API"]}
                initialState={false}
                arrange={({ setState }) => {
                  return (
                    <View style={styles.sliderSmall}>
                      <MultiSlider
                        values={[0, 10]}
                        onToggleOne={() => setState(true)}
                      />
                    </View>
                  );
                }}
                assert={async ({ expect, state }) => {
                  expect(state).to.be.true;
                }}
              />

              <TestCase.Manual
                itShould="onToggleTwo（点击第二个光标回调）"
                tags={["C_API"]}
                initialState={false}
                arrange={({ setState }) => {
                  return (
                    <View style={styles.sliderSmall}>
                      <MultiSlider
                        values={[0, 10]}
                        onToggleTwo={() => setState(true)}
                      />
                    </View>
                  );
                }}
                assert={async ({ expect, state }) => {
                  expect(state).to.be.true;
                }}
              />

              <TestCase.Example
                tags={["C_API"]}
                itShould="allowOverlap（允许/禁止光标重叠，默认禁止，这里允许）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider values={[0, 10]} allowOverlap={true} />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="snapped（步进式移动光标）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider sliderLength={300} step={3} snapped />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="smoothSnapped（跳转最近节点）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider smoothSnapped sliderLength={300} step={3} />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="vertical（垂直方向）"
              >
                <View style={{ marginTop: 120, marginBottom: 180 }}>
                  <MultiSlider vertical />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="markerOffsetX（横向偏移20）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider markerOffsetX={20} />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="markerOffsetY（纵向偏移20）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider markerOffsetY={20} />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="markerSize（光标与边缘的距离）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider markerSize={50} />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="minMarkerOverlapDistance（避免大光标重叠，间隔100）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider
                    values={[0, 10]}
                    minMarkerOverlapDistance={100}
                  />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="minMarkerOverlapStepDistance（避免大光标重叠，间隔2步）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider
                    values={[0, 300]}
                    step={3}
                    allowOverlap={false}
                    smoothSnapped
                    minMarkerOverlapStepDistance={2}
                  />
                </View>
              </TestCase.Example>

              <TestCase.Example
                tags={["C_API"]}
                itShould="imageBackgroundSource（背景图片）"
              >
                <View style={styles.sliderSmall}>
                  <MultiSlider
                    imageBackgroundSource={require("./logo-og.png")}
                  />
                </View>
              </TestCase.Example>

              <TestCase.Manual
                itShould="testID（设置testID）"
                tags={["C_API"]}
                initialState={"1"}
                arrange={({ setState }) => {
                  return (
                    <View style={{ ...styles.sliderSmall, marginBottom: 20 }}>
                      <MultiSlider
                        values={[0, 6]}
                        testID={"666"}
                        ref={testRef}
                      />
                      <Button
                        title="获取testID"
                        onPress={() => {
                          const testId = testRef.current?.props.testID || "";
                          setState(testId);
                        }}
                      />
                    </View>
                  );
                }}
                assert={async ({ expect, state }) => {
                  expect(state).equal("666");
                }}
              />
            </View>
          </View>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}

const labelStyles = StyleSheet.create({
  parentView: {
    position: "relative",
  },
  sliderLabel: {
    position: "absolute",
    justifyContent: "center",
    bottom: "100%",
    width: width,
    height: width,
  },
  sliderLabelText: {
    textAlign: "center",
    lineHeight: width,
    borderRadius: width / 2,
    borderWidth: 2,
    borderColor: "#999",
    backgroundColor: "#fff",
    flex: 1,
    fontSize: 18,
    color: "#aaa",
  },
  pointer: {
    position: "absolute",
    bottom: -pointerWidth / 4,
    left: (width - pointerWidth) / 2,
    transform: [{ rotate: "45deg" }],
    width: pointerWidth,
    height: pointerWidth,
    backgroundColor: "#999",
  },
});

const markerStyles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
  },
  text: {
    alignSelf: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  sliders: {
    margin: 20,
    // width: 280,
  },
  text: {
    alignSelf: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
  },
  sliderOne: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  sliderMiddle: {
    height: 80,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  sliderSmall: {
    marginLeft: 20,
    marginRight: 20,
  },
});
