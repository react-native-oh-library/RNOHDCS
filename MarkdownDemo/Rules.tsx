import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';

import Markdown from 'react-native-markdown-display';

const rules = {
    heading1: (node, children, parent, styles) =>
      <Text key={node.key} style={[styles.heading, styles.heading1]}>
        >> H1 TEXT HERE >> "{children}"
      </Text>,
    heading2: (node, children, parent, styles) =>
      <Text key={node.key} style={[styles.heading, styles.heading2]}>
        >> H2 TEXT HERE >> "{children}"
      </Text>,
    heading3: (node, children, parent, styles) =>
      <Text key={node.key} style={[styles.heading, styles.heading3]}>
        >> H3 TEXT HERE >> "{children}"
      </Text>,
};

const copy = `
# h1 Heading 8-)
## h2 Heading 8-)
### h3 Heading 8-)

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
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
              rules={rules}
            >
              {copy}
            </Markdown>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;