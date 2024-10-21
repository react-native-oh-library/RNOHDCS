import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import { DeckSwiperExampleTestDemo } from './tests/DeckSwiperExampleTest'

//该文件为测试demo的主入口，这里会展示8个文件，请在本地创建一个tests/DeckSwiperExampleTest目录
//然后将DeckSwiperExampleTest1-8用例和index，navigation放在该目录下tests/DeckSwiperExampleTest.
function App() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <StatusBar barStyle="light-content" />
        <DeckSwiperExampleTestDemo />
    </View>
  );
}

export default App;
