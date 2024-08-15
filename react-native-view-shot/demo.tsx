import React from "react";
import { View, Text, Button } from "react-native";
import ViewShot, { captureRef, captureScreen, releaseCapture } from "react-native-view-shot";

export default function ViewShotNewDemo() {
  let [res, setRes] = React.useState('');
  const view = React.useRef<View>(null);
  const ref = React.useRef(null);
  const onCapture = (res) => {
    console.info("onCapture callback");
  };
  const onCaptureFailure = (err) => {
    console.info("onCaptureFailure " + JSON.stringify(err));
  };

  return (
    <View>
      <View
        ref={view}
        collapsable={false}
        style={{ backgroundColor: "#ffffff", height: 200 }}
      >
        <Text style={{ color: "#000", marginBottom: 30 }}>Hello HarmonyOS</Text>
        <Text style={{ color: "#000", marginBottom: 30 }}>
          Hello HarmonyOS Next.
        </Text>

        <ViewShot
          ref={ref}
          style={{ backgroundColor: "#ffffff" }}
          onCapture={onCapture}
          onCaptureFailure={onCaptureFailure}
          captureMode="mount"
          options={{ result: "tmpfile" }}
        >
          <Text style={{ color: "#000", marginBottom: 30 }}>Hello World</Text>
        </ViewShot>
      </View>
      <Button
        title="captureRef"
        onPress={() => {
          captureRef(view).then((res) => {
            console.info(`captureRef: ${JSON.stringify(res)}`);
            setRes(res)
          });
        }}
      />
      <Button
        title="ViewShot capture"
        onPress={() => {
          captureRef(ref, { result: 'data-uri' }).then((res) => {
            console.info(`captureRef: ${res}`);
            setRes(res)
          });
        }}
      />
      <Button
        title="captureScreen"
        onPress={() => {
          captureScreen().then((res) => {
            console.info(`captureScreen success: ${res}`);
            setRes(res);
          });
        }}
      />
      <Button
        title="releaseCapture"
        onPress={() => {
          releaseCapture(res);
        }}
      />
    </View>
  );
}