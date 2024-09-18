import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";

import styles from "./styles";
import type { KeyboardAvoidingViewProps } from "react-native";


type Behavior = KeyboardAvoidingViewProps["behavior"];
const behaviors: Behavior[] = ["padding", "height", "position"];

export  function KeyboardAvoidingViewExample() {
  const [behavior, setBehavior] = useState<Behavior>(behaviors[0]);
  const [isPackageImplementation, setPackageImplementation] = useState(true);

  const Container = isPackageImplementation
    ? KeyboardAvoidingView
    : RNKeyboardAvoidingView;

  return (
    <Container
      behavior={behavior}
      contentContainerStyle={styles.container}
      keyboardVerticalOffset={100}
      style={styles.content}
    >
      <View style={styles.inner}>
        <Text style={styles.heading}>Header</Text>
        <View>
          <TextInput
            placeholder="Username"
            placeholderTextColor="#7C7C7C"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#7C7C7C"
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
