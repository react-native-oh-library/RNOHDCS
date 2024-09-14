import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Text, View } from "react-native";
import {
  KeyboardAwareScrollView,
  KeyboardStickyView,
} from "react-native-keyboard-controller";
import TextInput from "../components/TextInput";

import { styles } from "./styles";

import type { LayoutChangeEvent } from "react-native";


const variants = ["v1", "v2", "v3"] as const;
type Variant = (typeof variants)[number];

export  function AwareScrollViewStickyFooter() {
  const  bottom = 0;
  const [footerHeight, setFooterHeight] = useState(0);
  const [variant, setVariant] = useState<Variant>("v1");

  const handleLayout = useCallback((evt: LayoutChangeEvent) => {
    setFooterHeight(evt.nativeEvent.layout.height);
  }, []);
  const offset = useMemo(
    () => ({ closed: 0, opened: variant === "v1" ? 0 : bottom }),
    [bottom, variant],
  );
  const offsetV3 = useMemo(
    () => ({ closed: -50, opened: bottom - 25 }),
    [bottom],
  );


  const v1v2 = variant === "v1" || variant === "v2";

  return (
    <View
      style={[
        styles.pageContainer,
        { paddingBottom: variant === "v1" ? 0 : bottom },
      ]}
    >
      <KeyboardAwareScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        bottomOffset={(v1v2 ? footerHeight : 0) + 50}
        keyboardShouldPersistTaps="handled"
      >
        {new Array(10).fill(0).map((_, i) => (
          <TextInput
            key={i}
            placeholder={`TextInput#${i}`}
            keyboardType={i % 2 === 0 ? "numeric" : "default"}
          />
        ))}
      </KeyboardAwareScrollView>
      {v1v2 && (
        <KeyboardStickyView offset={offset}>
          <View onLayout={handleLayout} style={styles.footer}>
            <Text style={styles.footerText}>A mocked sticky footer</Text>
            <TextInput style={styles.inputInFooter} placeholder="Amount" />
            <Button title="Click me" />
          </View>
        </KeyboardStickyView>
      )}
      {variant === "v3" && (
        <KeyboardStickyView offset={offsetV3}>
          <View style={styles.circle} />
        </KeyboardStickyView>
      )}
    </View>
  );
}
