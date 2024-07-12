/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

 import * as React from 'react';
 import { Text, View } from 'react-native';
 import {ProgressBar} from '@react-native-community/progress-bar-android';

 const App: React.ComponentType<{}> = () => {
   return (
    <View style={{width:'100%',height:'100%',paddingTop:50}}>

    <ProgressBar styleAttr="Horizontal" indeterminate={false} style={{width:200,height:100}}/>
    <ProgressBar styleAttr="Horizontal" indeterminate={false} animating={false} />
    <ProgressBar styleAttr="Horizontal" indeterminate={false} animating={true} />
    <ProgressBar styleAttr="Horizontal" indeterminate={false} animating={true} progress={0.5} />
    <ProgressBar styleAttr="Horizontal" indeterminate={true} animating={true}  />
    <ProgressBar styleAttr="Horizontal" color="black" />
    <ProgressBar styleAttr="Horizontal" indeterminate={true} color="blue" />

    <ProgressBar styleAttr="Small"  />
  <ProgressBar styleAttr="SmallInverse"/>
  <ProgressBar styleAttr="Normal"/>
  <ProgressBar styleAttr="Large" />

  <ProgressBar styleAttr="Small"  style={{width:100,height:100}}/>
  <ProgressBar  indeterminate={true}/>
  <ProgressBar  indeterminate={true} animating={true}/>
  <ProgressBar  indeterminate={true} animating={true} progress={0.5}/>
  <ProgressBar  indeterminate={true} animating={true} progress={0.5} color="black"/>
  <ProgressBar  indeterminate={false} animating={true} progress={0} color="black"/>
</View>
   );
 };
 
 export default App;
 