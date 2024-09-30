import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {NavigationContainer, Page} from '../components';

import {ChartConfigTest1} from './ChartConfigTest1';
import {ChartConfigTest2} from './ChartConfigTest2';
import {ChartConfigTest3} from './ChartConfigTest3';

export function ChartConfigTest() {
  return (
    <View>
      <SafeAreaView>
        <NavigationContainer>
          <Page name={'测试 ChartConfigTest1'}>
            <ChartConfigTest1 />
          </Page>
          <Page name={'测试 ChartConfigTest2'}>
            <ChartConfigTest2 />
          </Page>
          <Page name={'测试 ChartConfigTest3'}>
            <ChartConfigTest3 />
          </Page>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}
