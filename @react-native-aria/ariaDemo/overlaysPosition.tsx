import React from "react";
import {
  OverlayContainer,
  useOverlayPosition,
  OverlayProvider
} from "@react-native-aria/overlays";
import { useButton } from "@react-native-aria/button";
import {
  View,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useToggleState } from "@react-stately/toggle";

// Button to close overlay on outside click
function CloseButton(props) {
  return (
    <TouchableWithoutFeedback
      onPress={props.onClose}
      accessible={false}
      importantForAccessibility={"no-hide-descendants"}
    >
      <View style={StyleSheet.absoluteFill}></View>
    </TouchableWithoutFeedback>
  );
}

const positions = [
  "top",
  "left",
  "right",
  "bottom",
];

export function TriggerWrapper() {
  const [placement, setPlacement] = React.useState(-1);
  React.useEffect(() => {
    const id = setInterval(() => {
      setPlacement((prev) => (prev + 1) % positions.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return <Trigger placement={positions[placement]}></Trigger>;
}

const OverlayView = ({ targetRef, placement }) => {
  let overlayRef = React.useRef();

  const { overlayProps } = useOverlayPosition({
    placement,
    targetRef,
    overlayRef,
  });

  return (
    <View
      style={{
        position: "absolute",
        ...overlayProps.style,
      }}
      ref={overlayRef}
    >
      <View
        style={{
          backgroundColor: "lightgray",
          padding: 20,
        }}
      >
        <Text>Hello World</Text>
      </View>
    </View>
  );
};

export function Trigger({ placement }: any) {
  let ref = React.useRef();
  const toggleState = useToggleState();

  let { buttonProps } = useButton({ onPress: toggleState.toggle }, ref);

  return (
    <View
      style={{
        height: 600,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable
        {...buttonProps}
        ref={ref}
        accessibilityRole="button"
        accessibilityLabel="Click here to open an overlay"
      >
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        >
         
          <Text>Press me</Text>
        
        </View>
     
      </Pressable>
      {toggleState.isSelected && (
        <OverlayContainer>
          <CloseButton onClose={toggleState.toggle} />
          <OverlayView targetRef={ref} placement={placement} />
        </OverlayContainer>
      )}
    </View>
  );
}

export default function OverlaysPositionDemo () {
  return <OverlayProvider>
    <TriggerWrapper/>
    <View style={{height:'100'}}></View>
    </OverlayProvider>
}
