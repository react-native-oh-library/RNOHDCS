import * as React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Markdown,{AstRenderer, renderRules} from 'react-native-markdown-display';

const styles = StyleSheet.create({
  heading1: {
    fontSize: 32,
    backgroundColor: '#ccc',
    color:'red',
    marginTop: 10
  },
  heading2: {
    fontSize: 20,
    color:'#000',
    marginTop: 10
  }
})
const MyRenderer = new AstRenderer(
  {
    ...renderRules,
    text: (node, children, parent, styles,inheritedStyles = {}) => (
      <Text key={node.key} style={[inheritedStyles, styles.text]}>
        here is test: 
        {node.content}
      </Text>
    ),
    heading1: (node, children, parent, styles) => (
      <View key={node.key} style={styles.heading1}>
        <Text>This is heading1 </Text>
        {children}
      </View>
    ),
    heading2: (node, children, parent, styles) => (
      <View key={node.key} style={styles.heading2}>
        <Text>This is heading2 </Text>
        {children}
      </View>
    )
  },
  styles);

const copy = `
# This is for renderer demo

## This is a demo

This is for renderer demo
`;

const App = () => {
  return (
      <SafeAreaView >
           <Markdown 
            renderer= {MyRenderer}
           >
            {copy}
           </Markdown>    
      </SafeAreaView>
  );
};


export default App;
