import React, {useState} from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, Button,View } from 'react-native';

import Markdown, { MarkdownIt } from 'react-native-markdown-display';
import blockEmbedPlugin from 'markdown-it-block-embed';

const markdownItInstance = 
    MarkdownIt({typographer: true})
      .use(blockEmbedPlugin, {
        containerClassName: "video-embed"
      });

const copy = `
# Some header

@[youtube](lJIrF4YjHfQ)
`;
const rules = {
  video: (node, children, parent, styles) =>{
    // examine the node properties to see what video we need to render
    console.log(node); // expected output of this is in readme.md below this code snip

    return (<Text key={node.key} style={styles.video}>
      Return a video component instead of this text component!
    </Text>);
  }
   
}
const rules2 = {
  video: (node, children, parent, styles) =>{
    return (<View key={node.key} style={styles.video}>
    </View>);
  }
   
}

const App: () => React$Node = () => {
  const [state, setState] = useState(rules2);
  const changeState = () =>{
    setState(rules)
  }
  return (
    <>
      
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '100%'}}
        >
          <Button 
            title='change the rules'
            onPress = {changeState}
          />
            <Markdown
              debugPrintTree
              markdownit={markdownItInstance}
              style={{
                  video: {
                    color: 'red',
                  }
                }}
              rules={state}
            >
              {copy}
            </Markdown>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;