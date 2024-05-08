import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import Markdown, {
  MarkdownIt,
  tokensToAST,
  stringToTokens,
} from "react-native-markdown-display";

const markdownItInstance = MarkdownIt({ typographer: true });

const copy = `
# Hello this is a title

This is some text with **BOLD!**
`;

const ast = tokensToAST(stringToTokens(copy, markdownItInstance));

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{ height: "100%" }}
        >
          <Text style={{ marginHorizontal: 30, borderBottomWidth: 1 }}>
            原文：
            {copy}
          </Text>
          <Text style={{ margin: 30 }}>markdown 后：</Text>
          <View style={{ marginHorizontal: 30 }}>
            <Markdown>{ast}</Markdown>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
