import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

import Markdown from 'react-native-markdown-display';

const copy = `
This is some text which is red because of the body style, which is also really small!

\`\`\`
//This is a code block woooo

const cool = () => {
  console.log('????');
};
\`\`\`

and some more small text

# This is a h1
## this is a h2
### this is a h3
`;

const App: () => React$Node = () => {
  return (
    <>
      
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '100%'}}
        >
            <Markdown
              style={{
                body: {color: 'red', fontSize: 10},
                heading1: {color: 'purple'},
                code_block: {color: 'black', fontSize: 14}
              }}
            >
              {copy}
            </Markdown>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;