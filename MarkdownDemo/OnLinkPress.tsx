import React from "react";
import { SafeAreaView, ScrollView,Linking } from "react-native";

import Markdown from "react-native-markdown-display";

const copy = `[This is a link!](https://github.com/iamacup/react-native-markdown-display/)`;

const onLinkPress = (url) => {
  if (url) {
    // some custom logic
    Linking.openURL(url);
    return false;
  }

  // return true to open with `Linking.openURL
  // return false to handle it yourself
  return true;
};

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={{ marginLeft: 30 }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{ height: "100%" }}
        >
          <Markdown onLinkPress={onLinkPress}>{copy}</Markdown>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
