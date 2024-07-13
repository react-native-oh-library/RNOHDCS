import { genCommonProps } from '../../genUtil';
import { GenMain, TestItem } from '../../gen';

import BarChartExample from './BarChartExample';
import GroupedBarChartExample from './GroupedBarChartExample';
import BarChartHorizontalWithLabels from './BarChartHorizontalWithLabels';
import BarChartVerticalWithLabels from './BarChartVerticalWithLabels';
import ColorBarExample from './ColorBarExample';
import GradientBarExample from './GradientBarExample';
import HorizontaBarChartWithYAxis from './HorizontaBarChartWithYAxis';
import XAxisExample from './XAxisExample';

const barProps = [
  {
    type: 'fill',
    key: 'fill',
    values: [{ svg: { fill: 'rgba(134, 65, 244, 0.2)' } }, { svg: { fill: 'rgb(134, 65, 244)' } }],
    title: 'fill',
  },
  {
    type: 'horizontal',
    key: 'horizontal',
    values: [{ horizontal: false }, { horizontal: true }],
    title: 'horizontal',
  },
  {
    type: 'spacingInner',
    key: 'spacingInner',
    values: [{ spacingInner: 0.05 }, { spacingInner: 0.5 }],
    title: 'spacingInner',
  },
  {
    type: 'spacingOuter',
    key: 'spacingOuter',
    values: [{ spacingOuter: 0.05 }, { spacingOuter: 1 }],
    title: 'spacingOuter',
  },
]

const allCases = [
  ...genCommonProps(),
  ...barProps,
]


const basicProps = {
  data: [50, 10, 40, 95, -4, -24, 85, 0, 35, 53, -53, 24, 50, -20, -80],
  svg: { fill: 'rgba(134, 65, 244, 0.2)' },
}

export default function () {
  return <GenMain
    cases={allCases}
    basicProps={basicProps}
    comName='BarChart'
  >
    <TestItem desc='doubel data,yAccessor={({ item }) => item.value}'>
      <GroupedBarChartExample></GroupedBarChartExample>
    </TestItem>
    <TestItem desc='svg={strokeWidth: 2,fill: "url(#gradient)"}'>
      <GradientBarExample></GradientBarExample>
    </TestItem>
    <TestItem desc='[{"value":50},{"value":10,"svg":{"fill":"rgba(134, 65, 244, 0.5)"}},{"value":40,"svg":{"stroke":"purple","strokeWidth":2,"fill":"white","strokeDasharray":[4,2]}},{"value":95,"svg":{"fill":"url(#gradient)"}},{"value":85,"svg":{"fill":"green"}}]'>
      <ColorBarExample></ColorBarExample>
    </TestItem>
    <TestItem desc='YAxis'>
      <HorizontaBarChartWithYAxis></HorizontaBarChartWithYAxis>
    </TestItem>
    <TestItem desc='Grid:direction={Grid.Direction.VERTICAL}'>
      <BarChartHorizontalWithLabels></BarChartHorizontalWithLabels>
    </TestItem>
    <TestItem desc='Grid:direction={Grid.Direction.HORIZONTAL},child:bandwidth'>
      <BarChartVerticalWithLabels></BarChartVerticalWithLabels>
    </TestItem>
    <TestItem desc='XAxis'>
      <XAxisExample></XAxisExample>
    </TestItem>
    <TestItem desc="style={{ flex: 1, marginLeft: 8 }}
                    data={[ 50, 10, 40, 95, 85 ]}
                    horizontal={true}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)', }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacingInner={0.2}
                    gridMin={0}">
      <BarChartExample></BarChartExample>
    </TestItem>
    <TestItem desc="style={{ flex: 1, marginLeft: 8 }}
                    data={[ 50, 10, 40, 95, 85 ]}
                    horizontal={true}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)', }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacingInner={0.2}
                    gridMin={0}
                    belowChart={false}">
      <BarChartExample belowChart={false}></BarChartExample>
    </TestItem>
  </GenMain >
}