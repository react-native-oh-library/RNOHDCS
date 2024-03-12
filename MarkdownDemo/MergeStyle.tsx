import React,{useState} from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Button } from 'react-native';

import Markdown from 'react-native-markdown-display';

const styles = StyleSheet.create({
  heading1: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
  },
  heading2: {
    fontSize: 24,
  },
  heading3: {
    fontSize: 18,
  },
  heading4: {
    fontSize: 16,
  },
  heading5: {
    fontSize: 13,
  },
  heading6: {
    fontSize: 11,
  }
});

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
  const [flag, setFlag] = useState(false);
  const pressFN = () =>{
    flag ? setFlag(false) : setFlag(true)
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '100%'}}
        >
            <Button
              title={`mergeStyle is ${flag}`}
              onPress={pressFN}
              />
            <Markdown
              style={styles}
              mergeStyle = {flag}
            >
              {copy}
            </Markdown>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;