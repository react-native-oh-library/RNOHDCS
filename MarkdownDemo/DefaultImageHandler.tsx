import React,{useState} from 'react';
import { SafeAreaView, ScrollView, StatusBar, Button,Text } from 'react-native';

import Markdown from 'react-native-markdown-display';
// import img from './img/img.png'
const img = require('./img/img.png')
const copy = `  
![Minion](${img})
`;

const App: () => React$Node = () => {
  const [empty, setEmpty] = useState('asset://')
  const setNullfn = () =>{
    setEmpty(null)
  }
  return (
    <>
      
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '100%'}}
        >
          <Button 
            title = 'set null'
            onPress = {setNullfn}
            />
          <Markdown
            defaultImageHandler = {empty}
            style = {{
              image:{
                width:200,
                height:200,
                backgroundColor: '#ccc'
              }
            }}
          >
            {copy}
          </Markdown>
          <Text>defaultImageHandler is : { empty || 'null'}</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;