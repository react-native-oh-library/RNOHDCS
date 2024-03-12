import * as React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Markdown,{AstRenderer} from 'react-native-markdown-display';


const copy = `

- top level list item
  - nested list item


# Heading 8-)
`;
const AstRendererInstance = new AstRenderer;
const render = AstRendererInstance.render((nodes)=> <View style={{heading1:{background:"#666"}}}>{nodes}</View>)

const App = () => {
  return (
      <SafeAreaView >
           <Markdown 
            renderer= {render}
           >
            {copy}
           </Markdown>    
      </SafeAreaView>
  );
};


export default App;
