import * as d3 from 'd3-shape';
import { genCommonProps, ordersProp, offsetsProp, stackedDatas, stackesKeys, cursProp } from '../../genUtil';
import { GenMain, TestItem } from '../../gen';

import AreaStackWithAxisExample from './AreaStackWithAxisExample';

const stackedAreaChartProps = [
];

const allCases = [
  ...genCommonProps(),
  ...stackedAreaChartProps,
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
    comName='StackedAreaChart'
  >
    <TestItem itShould="AreaStackWithAxisExample">
      <AreaStackWithAxisExample showGrid={true}></AreaStackWithAxisExample>
    </TestItem>

    {
      cursProp.map((item) => {
        return <TestItem key={item.lable} desc={item.label}>
          <AreaStackWithAxisExample curve={d3[item.value]} showGrid={false}></AreaStackWithAxisExample>
        </TestItem>
      })
    }

    {
      ordersProp.map((item) => {
        return <TestItem key={item.lable} desc={item.lable}>
          <AreaStackWithAxisExample order={d3[item.value]} showGrid={false}></AreaStackWithAxisExample>
        </TestItem>
      })
    }
    {
      offsetsProp.map((item) => {
        return <TestItem key={item.lable} desc={item.label}>
          <AreaStackWithAxisExample offset={d3[item.value]} showGrid={false}></AreaStackWithAxisExample>
        </TestItem>
      })
    }

    {
      [
        {
          label: '{yAxis-min:10}',
          value: 10,
        },
        {
          label: '{yAxis-min:2000}',
          value: 2000,
        },
      ].map((item) => {
        console.log(item)
        return <TestItem key={item.lable} desc={item.label}>
          <AreaStackWithAxisExample min={item.value} showGrid={true}></AreaStackWithAxisExample>
        </TestItem>
      })
    }
    {
      [
        {
          label: '{yAxis-max:6000}',
          value: 6000,
        },
        {
          label: '{yAxis-max:9000}',
          value: 9000,
        },
      ].map((item) => {
        console.log(item)
        return <TestItem key={item.lable} desc={item.label}>
          <AreaStackWithAxisExample max={item.value} showGrid={true}></AreaStackWithAxisExample>
        </TestItem>
      })
    }
  </GenMain>
}