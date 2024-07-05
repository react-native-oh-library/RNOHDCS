import React from 'react';
import {View} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';
import ViewOverflow from 'react-native-view-overflow';

export function ViewOverflowDemo() {
  return (
    <Tester style={{flex: 1}}>
      <TestCase itShould="子组件溢出展示">

        <View style={{backgroundColor: 'white', padding: 10}}>
          <View style={{width: 200, height: 100, backgroundColor: 'red'}}>
            <ViewOverflow style={{width: 100, height: 50, backgroundColor: 'blue'}}>
                <ViewOverflow style={{width: 50, height: 25, backgroundColor: 'skyblue', left: 60, top: 30}}>
                  <View style={{backgroundColor: 'yellow', height: '100%', left: 20, top: 10}} />
                </ViewOverflow>
            </ViewOverflow>
          </View>
        </View>

      </TestCase>
    </Tester>
  );
}