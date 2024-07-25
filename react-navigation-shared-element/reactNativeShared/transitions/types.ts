import type { ViewStyle, Animated } from "react-native";

export declare type TransitionSpec =
  | {
      animation: "spring";
      config: Omit<Animated.SpringAnimationConfig, "toValue">;
    }
  | {
      animation: "timing";
      config: Omit<Animated.TimingAnimationConfig, "toValue">;
    };

export type ScreenInterpolatorProps = any; // TODO

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

export type ScreenInterpolator = (
  props: ScreenInterpolatorProps
) => Partial<ViewStyle>;


export type TransitionConfig = {
  transitionSpec: TransitionSpec;
  screenInterpolator: ScreenInterpolator;
  debug?: boolean;
  onMeasure?: (event: SharedElementOnMeasureEvent) => void;
};
