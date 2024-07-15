import * as shape from 'd3-shape';

import { genCommonProps, cursProp, yAxisMin, yAxisMax } from '../../genUtil';
import { GenMain, TestItem } from '../../gen';

import LineChartExample from './LineChartExample';
import GradientLineExample from './GradientLineExample';
import PartialLineChartExample from './PartialLineChartExample';
import CustomGridExample from './CustomGridExample';
import ExtrasExample from './ExtrasExample';
import AxesExample from './AxesExample';
import DecoratorExample from './DecoratorExample';
import LineChartDoubleLineExample from './LineChartDoubleLineExample';

const lineProps = [
]

const allCases = [
  ...genCommonProps(),
  ...lineProps,
]

const basicProps = {
  data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
  svg: { stroke: 'rgb(134, 65, 244)', fillOpacity: 0 },
  curve: shape.curveNatural,
}

export default function () {
  return <GenMain
    cases={allCases}
    basicProps={basicProps}
    comName='LineChart'
  >
    {
      cursProp.map(item => {
        return <TestItem key={item.label} desc={item.label}>
          <LineChartExample curve={shape[item.value]}></LineChartExample>
        </TestItem>
      })
    }
    <TestItem desc="children:Grid,children:Shadow">
      <LineChartExample></LineChartExample>
    </TestItem>
    <TestItem desc="svg:{ stroke: 'url(#gradient)', fillOpacity: 0 }">
      <GradientLineExample></GradientLineExample>
    </TestItem>
    <TestItem desc="children:ClipPath,children:DashedLine">
      <PartialLineChartExample></PartialLineChartExample>
    </TestItem>
    <TestItem desc="children:CustomGrid">
      <CustomGridExample></CustomGridExample>
    </TestItem>
    <TestItem desc="children:Grid,children:HorizontalLine,children:Tooltip">
      <ExtrasExample></ExtrasExample>
    </TestItem>
    <TestItem desc="XAxis,YAxis">
      <AxesExample></AxesExample>
    </TestItem>
    {
      yAxisMin.map(item => {
        return (
          <TestItem desc={item.label} key={item.label}>
            <AxesExample min={item.value}></AxesExample>
          </TestItem>
        )
      })
    }
    {
      yAxisMax.map(item => {
        return (
          <TestItem desc={item.label} key={item.label}>
            <AxesExample max={item.value}></AxesExample>
          </TestItem>
        )
      })
    }
    <TestItem desc="children:Grid,children:Decorator">
      <DecoratorExample></DecoratorExample>
    </TestItem>
    <TestItem desc="style={{ height: 200 }}
        data={data}
        contentInset={{ top: 20, bottom: 20 }}">
      <LineChartDoubleLineExample></LineChartDoubleLineExample>
    </TestItem>
    <TestItem desc="style={{ height: 200 }}
        data={data}
        contentInset={{ top: 20, bottom: 20 }},grid-belowChart:false">
      <LineChartDoubleLineExample belowChart={false}></LineChartDoubleLineExample>
    </TestItem>
  </GenMain>
};