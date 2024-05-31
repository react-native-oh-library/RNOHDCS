import { GenMain, TestItem } from '../../gen';

import PieChartWithLabelExample from './PieChartWithLabelExample';
import PieChartWithDifferentArcs from './PieChartWithDifferentArcs';
import PieChartWithCenteredLabels from './PieChartWithCenteredLabels';
import PieChartWithCenteredLabels1 from './PieChartWithCenteredLabels1';
import PieChartWithDynamicSlices from './PieChartWithDynamicSlices';

const pieProps = [
  {
    type: 'outerRadius',
    key: 'outerRadius',
    values: [{ outerRadius: '10%' }, { outerRadius: '20%' }, { outerRadius: '95%' }],
    title: 'outerRadius',
  },
  {
    type: 'innerRadius',
    key: 'innerRadius',
    values: [{ innerRadius: '10%' }, { innerRadius: '50%' }, { innerRadius: '95%' }],
    title: 'innerRadius',
  },
  {
    type: 'padAngle',
    key: 'padAngle',
    values: [{ padAngle: 0.01 }, { padAngle: 0.03 }, { padAngle: 0.05 }],
    title: 'padAngle',
  },
  {
    type: 'startAngle',
    key: 'startAngle',
    values: [{ startAngle: Math.PI/4 }, { startAngle: Math.PI/2 }, { startAngle: Math.PI/1 }],
    title: 'startAngle',
  },
  {
    type: 'endAngle',
    key: 'endAngle',
    values: [{ endAngle: Math.PI * 2 }, { endAngle: Math.PI }],
    title: 'endAngle',
  }
]

const allCases = [
  ...pieProps,
]

const basicProps = {
  data: [
    {
      key: 1,
      amount: 50,
      svg: { fill: '#600080' },
    },
    {
      key: 2,
      amount: 50,
      svg: { fill: '#9900cc' }
    },
    {
      key: 3,
      amount: 40,
      svg: { fill: '#c61aff' }
    },
    {
      key: 4,
      amount: 95,
      svg: { fill: '#d966ff' }
    },
    {
      key: 5,
      amount: 35,
      svg: { fill: '#ecb3ff' }
    }
  ],
  valueAccessor:({ item }) => item.amount,

}


export default function () {
  return <GenMain
    cases={allCases}
    basicProps={basicProps}
    comName='PieChart'         
  >
    <TestItem desc="PieChartWithLabelExample">
      <PieChartWithLabelExample></PieChartWithLabelExample>
    </TestItem>
    <TestItem desc="PieChartWithDifferentArcs">
      <PieChartWithDifferentArcs></PieChartWithDifferentArcs>
    </TestItem>
    <TestItem desc="PieChartWithCenteredLabels">
      <PieChartWithCenteredLabels></PieChartWithCenteredLabels>
    </TestItem>
    <TestItem desc="PieChartWithCenteredLabels1">
      <PieChartWithCenteredLabels1></PieChartWithCenteredLabels1>
    </TestItem>
    <TestItem desc="PieChartWithDynamicSlices">
      <PieChartWithDynamicSlices></PieChartWithDynamicSlices>
    </TestItem>
  </GenMain>
}