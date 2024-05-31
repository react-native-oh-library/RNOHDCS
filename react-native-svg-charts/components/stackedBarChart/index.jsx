import * as d3 from 'd3-shape';
import { genCommonProps, ordersProp, offsetsProp, stackedDatas, stackesKeys } from '../../genUtil';
import { GenMain, TestItem } from '../../gen';

import StackedBarChartExample from './StackedBarChartExample1';

const stackedBarChartProps = [
  {
    type: 'horizontal',
    key: 'horizontal',
    values: [{ horizontal: false }, { horizontal: true }],
    title: 'horizontal',
  },
];

const allCases = [
  ...genCommonProps(),
  ...stackedBarChartProps,
];

const basicProps = {
  data: [...stackedDatas],
  colors: ['#7b4173', '#a55194', '#ce6dbd', '#de9ed6'],
  keys: [...stackesKeys],
};

export default function () {
  return <GenMain
    cases={allCases}
    basicProps={basicProps}
    comName='StackedBarChart'
  >
    <TestItem desc='children:Grid'>
      <StackedBarChartExample></StackedBarChartExample>
    </TestItem>
    {
      ordersProp.map((item) => {
        return <TestItem key={item.lable} desc={item.lable}>
          <StackedBarChartExample order={d3[item.value]}></StackedBarChartExample>
        </TestItem>
      })
    }
    {
      offsetsProp.map((item) => {
        return <TestItem key={item.lable} desc={item.lable}>
          <StackedBarChartExample offset={d3[item.value]}></StackedBarChartExample>
        </TestItem>
      })
    }
  </GenMain>
};