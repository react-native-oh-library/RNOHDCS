import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';

import Markdown, { MarkdownIt } from 'react-native-markdown-display';

const copy = `
# This heading will show with formatting

[but this link will just](be displayed as this text)
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
              markdownit={
                MarkdownIt({typographer: true}).disable([ 'link', 'image' ])
              }
            >
              {copy}
            </Markdown>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;