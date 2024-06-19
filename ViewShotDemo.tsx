import React from "react";
import { View, Text, Button, TextInput, Image } from "react-native";
import ViewShot, { captureRef, captureScreen, CaptureOptions } from "react-native-view-shot";

export function ViewShotExample() {
  const view = React.useRef<View>(null);
  const ref = React.useRef(null);
  const onCapture = (uri: any) => {
    console.info("onCapture callback");
    setTxt(JSON.stringify(uri));
  };
  const onCaptureFailure = (err: any) => {
    console.info("onCaptureFailure " + JSON.stringify(err));
    setTxt(JSON.stringify(err));
  };
  const [txt, setTxt] = React.useState<string>("");
  const options: CaptureOptions = {
    result: 'base64'
  }
  return (
    <View>
      <Image source={{ uri: txt }} style={{ width: 500, height: 100,marginBottom:50 }}></Image>
      <View
        ref={view}
        collapsable={false}
        style={{ backgroundColor: "#bfa", width: 500, height: 100 }}
      >
        <Text style={{ color: "#000", marginBottom: 30 }}>
          Hello OpenHarmony
        </Text>

        <ViewShot
          ref={ref}
          style={{ backgroundColor: "#ffffff" }}
          onCapture={onCapture}
          onCaptureFailure={onCaptureFailure}
        >
          <Text style={{ color: "#000", marginBottom: 30 }}>Hello World</Text>
        </ViewShot>
      </View>
      <Button
        title="captureRef"
        onPress={() => {
          captureRef(view, options).then((res) => {
            console.info(`captureRef success: ${JSON.stringify(res)}`);
            setTxt(res);
          });
        }}
      />
      <Button
        title="ViewShot capture"
        onPress={() => {
          captureRef(ref).then((uri) => {
            console.info(`ViewShot capture success: ${uri}`);
          });
        }}
      />
      <Button
        title="captureScreen"
        onPress={() => {
          captureScreen().then((res: string) => {
            console.info(`captureScreen success`, res);
            setTxt(res);
          });
        }}
      />
    </View>
  );
}