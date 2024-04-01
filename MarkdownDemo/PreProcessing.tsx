import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';

import Markdown, { MarkdownIt, tokensToAST, stringToTokens } from 'react-native-markdown-display';

const markdownItInstance = MarkdownIt({typographer: true});

const copy = `
# Hello this is a title

This is some text with **BOLD!**
`;

const ast = tokensToAST(stringToTokens(copy, markdownItInstance))

const App: () => React$Node = () => {
  return (
    <>
      
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '100%'}}
        >
            <Markdown
            >
              {ast}
            </Markdown>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;