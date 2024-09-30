import React from 'react';
import { View } from 'react-native';
import GitHubExample from './GitHubExample';
// 在 ./src/screens/componentScreens/index.js 中导出的组件均为测试demo，没有导出则不是, 例如TextScreen、ViewScreen等
import { TextScreen, ViewScreen } from './src/screens/componentScreens';
// 在 ./src/screens/incubatorScreens/index.js 中导出的组件均为测试demo，没有导出则不是, 例如IncubatorToastScreen、IncubatorSliderScreen等
import { IncubatorToastScreen, IncubatorSliderScreen} from './src/screens/incubatorScreens';
// 在 ./src/screens/nativeComponentScreens/index.js 中导出的组件均为测试demo，没有导出则不是, 例如KeyboardTrackingViewScreen等
import { KeyboardTrackingViewScreen, KeyboardAccessoryViewScreen } from './src/screens/nativeComponentScreens';

const App = () => {
  // 入口文件，替换成不同的测试Demo组件
  // 如： 
  // return <TextScreen />
  return <GitHubExample />
}

export default App;
