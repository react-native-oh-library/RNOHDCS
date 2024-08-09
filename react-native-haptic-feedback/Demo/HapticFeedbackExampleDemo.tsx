import React from "react"
import { SafeAreaView, ScrollView, Button } from "react-native"
import ReactNativeHapticFeedback from "react-native-haptic-feedback"
const options = {
  enableVibrateFallback: false,
  ignoreAndroidSystemSettings: false,
}

const methods = [
  "impactLight",
  "impactMedium",
  "impactHeavy",
  "notificationSuccess",
  "notificationWarning",
  "notificationError",
  "rigid",
  "soft",
  "selection",
  "clockTick",
  "contextClick",
  "keyboardPress",
  "keyboardRelease",
  "keyboardTap",
  "longPress",
  "textHandleMove",
  "virtualKey",
  "virtualKeyRelease",
  "effectClick",
  "effectDoubleClick",
  "effectHeavyClick",
  "effectTick",
]

export const HapticFeedbackExample = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {methods.map((item) => {
          return (
            <Button
              title={item}
              onPress={() => ReactNativeHapticFeedback.trigger(item, options)}
              key={item}
            ></Button>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}