import { Easing } from "react-native";

import { TransitionConfig } from "./types";

export function fromRight(duration: number = 500): TransitionConfig {
  return {
    transitionSpec: {
      animation: "timing",
      config: {
        duration,
        easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
        useNativeDriver: true,
      },
    },
    screenInterpolator: ({ layout, position, scene }) => {
      const { index } = scene;
      const { initWidth } = layout;

      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [initWidth, 0, initWidth * -0.2],
      });

      const shadow = {
        shadowColor: "#000000",
        shadowOffset: {
          width: -2,
          height: 0,
        },
        shadowOpacity: position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.02, 0.25, 0.25],
        }),
        shadowRadius: 5,
      };
      return {
        transform: [{ translateX }],
        ...shadow,
      };
    },
  };
}
