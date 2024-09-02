import { useCallback, useState, cloneElement } from "react";
import { StyleSheet, View } from "react-native";

import {
  NavBar,
  Colors,
  Button,
  Text,
  Router,
  SegmentedControl,
} from "../components";
import {
  fadeIn,
  fromRight,
  scaleCenter,
  TransitionConfig,
} from "../transitions";
import { Test, SharedElementsConfig } from "../types";

export type SharedElementNodeType =
  | "startNode"
  | "endNode"
  | "startAncestor"
  | "endAncestor";

export type SharedElementContentType =
  | "none"
  | "snapshotView"
  | "snapshotImage"
  | "image";


export type SharedElementMeasureData = {
  node: SharedElementNodeType;
  layout: {
    x: number;
    y: number;
    width: number;
    height: number;
    visibleX: number;
    visibleY: number;
    visibleWidth: number;
    visibleHeight: number;
    contentX: number;
    contentY: number;
    contentWidth: number;
    contentHeight: number;
  };
  contentType: SharedElementContentType;
  style: {
    borderRadius: number;
  };
};

export type SharedElementOnMeasureEvent = {
  nativeEvent: SharedElementMeasureData;
};

type Props = {
  test: Test;
  end?: boolean;
  description?: string;
  navigation?: any;
};

type TransitionValue = "slide" | "fade" | "scale";
type DurationValue = "fast" | "slow" | "debug";

const transitionValues: TransitionValue[] = ["slide", "fade", "scale"];
const durationValues: DurationValue[] = ["fast", "slow", "debug"];

let GLOBAL_TRANSITION_VALUE: TransitionValue = "slide";
let GLOBAL_DURATION_VALUE: DurationValue = "fast";

const onMeasureNode = (event: SharedElementOnMeasureEvent) => {
  const { nativeEvent } = event;
  const { onMeasure } = this.props;
  this.setState({
    [`${nativeEvent.node}`]: nativeEvent,
  });
  if (onMeasure) {
    onMeasure(event);
  }
};

function getSharedElements(test: Test): SharedElementsConfig {
  const props = {
    animation: test.animation,
    resize: test.resize,
    align: test.align,
  };
  return test.multi
    ? [
        { id: "testImage", ...props },
        { id: "testOverlay", ...props, animation: test.animation || "fade" },
        { id: "testLogo", ...props },
        { id: "testTitle", ...props, animation: test.animation || "fade" },
      ]
    : [{ id: "testContent", ...props }];
}

export function TestScreen(props: Props) {
  const { navigation } = props;
  const [transitionValue, setTransitionValue] = useState(
    GLOBAL_TRANSITION_VALUE
  );
  const [durationValue, setDurationValue] = useState(GLOBAL_DURATION_VALUE);
  const test = navigation?.getParam("test") ?? props.test;
  const description = navigation?.getParam("description") ?? props.description;
  const end = navigation?.getParam("end") ?? props.end;
  const onPressButton = useCallback(() => {
    let duration: number;
    let debug = false;
    let transitionConfig: TransitionConfig;

    switch (durationValue) {
      case "fast":
        duration = 500;
        break;
      case "slow":
        duration = 1500;
        break;
      case "debug":
        duration = 3000;
        debug = true;
        break;
    }
    switch (transitionValue) {
      case "slide":
        transitionConfig = fromRight(duration);
        break;
      case "fade":
        transitionConfig = fadeIn(duration);
        break;
      case "scale":
        transitionConfig = scaleCenter(duration);
    }
    transitionConfig.debug = debug;
    if(transitionConfig.debug){
      props.test.onMeasure = onMeasureNode
    } 

    const sharedElements = getSharedElements(test);
    if (end) {
      if (navigation) {
        navigation.goBack();
      } else {
        Router.pop({
          transitionConfig,
          sharedElements,
        });
      }
    } else {
      if (navigation) {
        navigation.push("Test", {
          test,
          description: description || "",
          end: true,
        });
      } else {
        Router.push(
          <TestScreen test={test} end description={description || ""} />,
          { transitionConfig, sharedElements }
        );
      }
    }
  }, [navigation, test, description, end]);

  return (
    <View style={styles.container}>
      {cloneElement(end ? test.end : test.start, {
        navigation,
      })}
      <View style={styles.bottomContainer}>
        <Text style={styles.tx}>{'下列按钮点击后请重新加载此页面（即返回上一个页面重新点进来）'}</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.segmentContainer}>
            <SegmentedControl
              style={styles.button}
              values={transitionValues}
              index={transitionValues.indexOf(transitionValue)}
              onChangeValue={(index) => {
                setTransitionValue(transitionValues[index]);
                GLOBAL_TRANSITION_VALUE = transitionValues[index];
              }}
            />
            <View style={styles.segmentSpacer} />
            <SegmentedControl
              style={styles.button}
              values={durationValues}
              index={durationValues.indexOf(durationValue)}
              onChangeValue={(index) => {
                setDurationValue(durationValues[index]);
                GLOBAL_DURATION_VALUE = durationValues[index];
              }}
            />
          </View>
          <Button
            style={styles.button}
            label="Animate"
            onPress={onPressButton}
          />
        </View>
        <Text style={styles.body}>{'当开启测量时onMeasure是否被调用：'+ !!(props.test.onMeasure)}</Text>
      </View>
    </View>
  );
}

TestScreen.sharedElements = (
  navigation: any,
  otherNavigation: any,
  showing: boolean
): SharedElementsConfig | void => {
  if (otherNavigation.state.routeName !== "Test") return;
  const test = navigation.getParam("test");
  return getSharedElements(test);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: Colors.empty,
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  segmentContainer: {
    flex: 2,
    flexDirection: "column",
  },
  segmentSpacer: {
    height: 4,
  },
  button: {
    flex: 1,
    marginRight: 10,
  },
  debugButton: {
    flex: 1,
  },
  body: {
    marginTop: 16,
  },
  tx: {
    marginBottom: 10, 
    fontSize: 14,
  },
});
