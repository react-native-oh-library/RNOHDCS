
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, Switch, Text, View,} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import TextInput from "../components/TextInput";
import { styles } from "./styles";

const snapToOffsets = [125, 225, 325, 425, 525, 625];

export  function AwareScrollView() {

  const [_, setText] = useState("");


  const [disableScrollOnKeyboardHide, setDisableScrollOnKeyboardHide] =
    useState(false);
  const [enabled, setEnabled] = useState(true);
  const [bottom, setBottom] = useState(50);
  const [snapToOffsetsEnabled, setSnapToOffsetsEnabled] = useState(false);

  return (
    <>
      <KeyboardAwareScrollView
        testID="aware_scroll_view_container"
        bottomOffset={bottom}
        enabled={enabled}
        snapToOffsets={snapToOffsetsEnabled ? snapToOffsets : undefined}
        disableScrollOnKeyboardHide={disableScrollOnKeyboardHide}
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        {snapToOffsetsEnabled && (
          <>
            {snapToOffsets.map((offset) => (
              <View
                key={offset}
                style={[
                  styles.snapToOffsetsAbsoluteContainer,
                  {
                    top: offset,
                  },
                ]}
              >
                <View style={styles.snapToOffsetsInnerContainer}>
                  <Text>{offset}</Text>
                  <View style={styles.snapToOffsetsLine} />
                </View>
              </View>
            ))}
          </>
        )}

        {new Array(10).fill(0).map((_, i) => (
          <TextInput
            key={i}
            placeholder={`TextInput#${i}`}
            keyboardType={i % 2 === 0 ? "numeric" : "default"}
            onChangeText={setText}
            contextMenuHidden={i === 4}
          />
        ))}
      </KeyboardAwareScrollView>
   
    </>
  );
}
