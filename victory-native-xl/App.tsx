import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { NavigationContainer, Page } from './Navigation';

import LineChartPage from './test/app/line-chart'
import AreaChartPage from './test/app/area-chart'
import BarChartPage from './test/app/bar-chart'
import BarGroupPage from './test/app/bar-group'
import ScatterPage from './test/app/scatter'
import PieChart from './test/app/pie-chart'
import AxisConfiguration from './test/app/axis-configuration'

import { LineChartExample } from './demo/LineChartExample';
import { BarChartExample } from './demo/BarChartExample';
import { PieChartExample } from './demo/PieChartExample';
import { BarGroupChartExample } from './demo/BarGroupChartExample';
import { AreaChartExample } from './demo/AreaChartExample';
import { ScatterChartExample } from './demo/ScatterChartExample';
import { DonutChartExample } from './demo/DonutChartExample'


const Testers = () => {
  return (
    <View>
      <NavigationContainer>
        <Page name={'测试 Line Chart 组件'}>
          <LineChartPage />
        </Page>
        <Page name={'测试 Area Chart 组件'}>
          <AreaChartPage />
        </Page>
        <Page name={'测试 Bar Chart 组件'}>
          <BarChartPage />
        </Page>
        <Page name={'测试 BarGroup Chart 组件'}>
          <BarGroupPage />
        </Page>
        <Page name={'测试 Scatter Chart 组件'}>
          <ScatterPage />
        </Page>
        <Page name={'测试 Pie Chart 组件'}>
          <PieChart />
        </Page>
        <Page name={'测试 Axis 组件'}>
          <AxisConfiguration />
        </Page>
      </NavigationContainer>
    </View>
  );
};

const Examples = () => {
  return (
    <ScrollView>
      <LineChartExample />
      <AreaChartExample />
      <BarChartExample />
      <BarGroupChartExample />
      <PieChartExample />
      <DonutChartExample />
      <ScatterChartExample />
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

export default App