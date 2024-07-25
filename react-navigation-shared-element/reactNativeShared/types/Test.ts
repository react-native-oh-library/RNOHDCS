import * as React from "react";
import {
  SharedElementAnimation,
  SharedElementResize,
  SharedElementAlign,
} from "react-native-shared-element";

export type Position =
  | "default"
  | "left"
  | "top"
  | "right"
  | "bottom"
  | "center";
export type Size = "default" | "small" | "regular" | "large" | "max";
export type ResizeMode = "cover" | "contain" | "stretch" | "center";

export type SharedElementNode = {
  ref: any;
  nodeHandle: number;
  isParent: boolean;
  parentInstance: any;
};

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

export interface Test {
  name: string;
  description?: string;
  start: React.ReactNode;
  end: React.ReactNode;
  animation?: SharedElementAnimation;
  resize?: SharedElementResize;
  align?: SharedElementAlign;
  onMeasure?: (event: SharedElementOnMeasureEvent) => void;
  multi?: boolean;
}

export interface TestGroup {
  name: string;
  tests: (Test | TestGroup)[];
  description?: string;
}

export function getTest(test: Test | TestGroup): Test | undefined {
  // @ts-ignore
  return test.tests ? undefined : test;
}

export function getTestGroup(test: Test | TestGroup): TestGroup | undefined {
  // @ts-ignore
  return test.tests ? test : undefined;
}
