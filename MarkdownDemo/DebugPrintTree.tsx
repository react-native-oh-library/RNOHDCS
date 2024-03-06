import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

import Markdown, { MarkdownIt } from 'react-native-markdown-display'; 
const blockEmbedPlugin  = require('markdown-it-block-embed')

const markdownItInstance = 
    MarkdownIt({typographer: true})
      .use(blockEmbedPlugin, {
        containerClassName: "video-embed"
      });

const copy = `
# Some header

@[youtube](lJIrF4YjHfQ)
`;

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '100%'}}
        >
            <Markdown
              debugPrintTree
              markdownit={markdownItInstance}
            >
              {copy}
            </Markdown>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
