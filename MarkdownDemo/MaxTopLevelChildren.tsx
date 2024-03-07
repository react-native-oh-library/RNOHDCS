import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';

import Markdown from 'react-native-markdown-display';

const copy = `  
# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
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
            maxTopLevelChildren = {4}
            topLevelMaxExceededItem = {<Text key="dotdotdot">...</Text>}
          >
            {copy}
          </Markdown>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;