import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {NavigationContainer, Page} from '../components';

import {LineChartTest1} from './LineChartTest1';
import {LineChartTest2} from './LineChartTest2';
import {LineChartTest3} from './LineChartTest3';

export function LineChartTest() {
  return (
    <View>
      <SafeAreaView>
        <NavigationContainer>
          <Page name={'测试 LineChartTest1'}>
            <LineChartTest1 />
          </Page>
          <Page name={'测试 LineChartTest2'}>
            <LineChartTest2 />
          </Page>
          <Page name={'测试 LineChartTest3'}>
            <LineChartTest3 />
          </Page>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}
