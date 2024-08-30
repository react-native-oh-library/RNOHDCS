import React from 'react';
import {ScrollView, View, SafeAreaView} from 'react-native';
import {NavigationContainer, Page} from './test/components';

import {LineChartExample} from './demo/LineChartExample';
import {BezierLineChartExample} from './demo/BezierLineChartExample';
import {ProgressChartExample} from './demo/ProgressChartExample';
import {BarChartExample} from './demo/BarChartExample';
import {StackedBarChartExample} from './demo/StackedBarChartExample';
import {PieChartExample} from './demo/PieChartExample';
import {ContributionGraphExample} from './demo/ContributionGraphExample';

import {LineChartTest} from './test/linechart/LineChartTest';
import {ProgressChartTest} from './test/ProgressChartTest';
import {BarChartTest} from './test/BarChartTest';
import {StackedBarChartTest} from './test/StackedBarChartTest';
import {PieChartTest} from './test/PieChartTest';
import {ContributionGraphTest} from './test/ContributionGraphTest';
import {ChartConfigTest} from './test/chartconfig/ChartConfigTest';

const Testers = () => {
  return (
    <View>
      <SafeAreaView>
        <NavigationContainer>
          <Page name={'测试 Line Chart 组件'}>
            <LineChartTest />
          </Page>
          <Page name={'测试 Progress Ring 组件'}>
            <ProgressChartTest />
          </Page>
          <Page name={'测试 Bar Chart 组件'}>
            <BarChartTest />
          </Page>
          <Page name={'测试 StackedBar Chart 组件'}>
            <StackedBarChartTest />
          </Page>
          <Page name={'测试 Pie Chart 组件'}>
            <PieChartTest />
          </Page>
          <Page name={'测试 Contribution Graph 组件'}>
            <ContributionGraphTest />
          </Page>
          <Page name={'测试 ChartConfig 样式属性'}>
            <ChartConfigTest />
          </Page>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};

const Examples = () => {
  return (
    <ScrollView>
      <LineChartExample />
      <BezierLineChartExample />
      <ProgressChartExample />
      <BarChartExample />
      <StackedBarChartExample />
      <PieChartExample />
      <ContributionGraphExample />
    </ScrollView>
  );
};

const App = () => {
  return (
    <>
      <View>
        <SafeAreaView>
          <NavigationContainer>
            <Page name={'样例 Examples'}>
              <Examples />
            </Page>
            <Page name={'测试用例 Testers'}>
              <Testers />
            </Page>
          </NavigationContainer>
        </SafeAreaView>
      </View>
    </>
  );
};

export default App;
