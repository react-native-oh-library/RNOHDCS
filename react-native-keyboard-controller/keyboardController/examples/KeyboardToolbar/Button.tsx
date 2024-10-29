import React, { useMemo } from "react";
import {
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

import type { PropsWithChildren } from "react";
import type { ViewStyle } from "react-native";

type ButtonProps = {
  disabled?: boolean;
  onPress: () => void;
  accessibilityLabel: string;
  accessibilityHint: string;
  testID: string;
  rippleRadius?: number;
  style?: ViewStyle;
};

const ButtonHarmony = ({
  children,
  onPress,
  disabled,
  accessibilityLabel,
  accessibilityHint,
  testID,
  style,
}: PropsWithChildren<ButtonProps>) => {
  // immediately switch to plain view to avoid animation flickering
  // when fade out animation happens and view becomes disabled
  const Container = disabled
    ? (View as unknown as typeof TouchableOpacity)
    : TouchableOpacity;
  const accessibilityState = useMemo(() => ({ disabled }), [disabled]);

  return (
    <Container
      accessibilityState={accessibilityState}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      onPress={onPress}
      style={style}
      testID={testID}
    >
    <Text>button</Text>
    </Container>
  );
};


export default ButtonHarmony
