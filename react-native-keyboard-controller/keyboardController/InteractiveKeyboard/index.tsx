import React, { useState, useEffect } from "react";
import { TextInput, View } from "react-native";
import { useKeyboardHandler,KeyboardGestureArea } from "react-native-keyboard-controller";
import Reanimated, {
  useAnimatedProps,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import Message from "../components/Message";
import { history } from "../components/Message/data";

import styles from "./styles";

const AnimatedTextInput = Reanimated.createAnimatedComponent(TextInput);

const useKeyboardAnimation = () => {
  const progress = useSharedValue(0);
  const height = useSharedValue(0);
  useKeyboardHandler({
    onMove: (e) => {
      "worklet";
     console.log('###useKeyboardHandler',e)
      progress.value = e.progress;
      height.value = e.height;
    },
    onInteractive: (e) => {
      "worklet";
      console.log('###useKeyboardHandler',e)
      progress.value = e.progress;
      height.value = e.height;
    },
  });

  return { height, progress };
};



export function InteractiveKeyboard(props: any) {
  const [interpolator, setInterpolator] = useState<"ios" | "linear">("linear");
  const { height } = useKeyboardAnimation();

  const scrollViewStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateY: -height.value }, ...styles.inverted.transform],
    }),
    [],
  );
  const textInputStyle = useAnimatedStyle(
    () => ({
      height: 50,
      width: "100%",
      backgroundColor: "#BCBCBC",
      transform: [{ translateY: -height.value }],
    }),
    [],
  );
  const fakeView = useAnimatedStyle(
    () => ({
      height: height.value,
    }),
    [],
  );

  return (
    <View style={styles.container}>
      <KeyboardGestureArea
        style={styles.content}
        testID="chat.gesture"
        interpolator={interpolator}
        showOnSwipeUp
      >
        <Reanimated.ScrollView
          testID="chat.scroll"
          showsVerticalScrollIndicator={false}
          style={scrollViewStyle}
        >
          <View style={styles.inverted}>
            <Reanimated.View style={fakeView} />
            {history.map((message, index) => (
              <Message key={index} {...message} />
            ))}
          </View>
        </Reanimated.ScrollView>
      </KeyboardGestureArea>
      <AnimatedTextInput testID="chat.input" style={textInputStyle} />
    </View>
  );
}

