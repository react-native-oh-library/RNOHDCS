import * as shape from 'd3-shape';
import dateFns from 'date-fns';
import { genCommonProps, cursProp, yScaleProp, xScaleProp } from '../../genUtil';
import { GenMain, TestItem } from '../../gen';
import AreaChartExample from './AreaChartExample';
import GradientExample from './GradientExample';
import GridMinMaxExample from './GridMinMaxExample';
import LayeredChartsExample from './LayeredChartsExample';
import PartialAreaChartExample from './PartialAreaChartExample';
import XAxisScaleTimeExample from './XAxisScaleTimeExample';
import XAxisScaleTimeExample1 from './XAxisScaleTimeExample1';


const areaProps = [
  {
    type: 'fill',
    key: 'fill',
    values: [{ svg: { fill: 'rgba(134, 65, 244, 0.2)' } }, { svg: { fill: 'rgb(134, 65, 244)' } }],
    title: 'fill',
  },
  {
    type: 'start',
    key: 'start',
    values: [{ start: 0 }, { start: 50 }, { start: 100 }],
    title: 'start',
  },
]

const allCases = [
  ...genCommonProps(),
  ...areaProps,
]

const basicProps = {
  data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
  curve: shape.curveNatural,
  svg: { fill: 'rgba(134, 65, 244, 0.2)' },
}

export default function () {
  return <GenMain
    cases={allCases}
    basicProps={basicProps}
    comName='AreaChart'
  >
    {
      cursProp.map(item => {
        return <TestItem key={item.label} desc={item.label}>
          <AreaChartExample curve={shape[item.value]}></AreaChartExample>
        </TestItem>
      })
    }
    <TestItem desc="contentInset={ top: 30, bottom: 30 },
        curve={shape.curveNatural},
        svg={ fill: 'rgba(134, 65, 244, 0.2)' }">
      <AreaChartExample></AreaChartExample>
    </TestItem>
    <TestItem desc="contentInset={ top: 20, bottom: 20 },
        svg={ fill: 'url(#gradient)' }">
      <GradientExample></GradientExample>
    </TestItem>
    <TestItem desc="svg={ fill: 'rgba(134, 65, 244, 0.2)' },
        curve={ shape.curveNatural },
        gridMax={ 500 },
        ridMin={ -500 }">
      <GridMinMaxExample></GridMinMaxExample>
    </TestItem>
    <TestItem desc="style={ StyleSheet.absoluteFill }">
      <LayeredChartsExample></LayeredChartsExample>
    </TestItem>
    <TestItem desc="style={ StyleSheet.absoluteFill }
        belowChart={false">
      <LayeredChartsExample belowChart={false}></LayeredChartsExample>
    </TestItem>
    <TestItem desc="contentInset={ top: 30, bottom: 30 },
        svg={fill: 'url(#gradient)',
        clipPath: 'url(#clip-path-1)'}">
      <PartialAreaChartExample></PartialAreaChartExample>
    </TestItem>
    <TestItem desc='{data:[{"value":50,"date":"2017-12-30T22:00:00.000Z"},{"value":10,"date":"2017-12-31T01:00:00.000Z"},{"value":150,"date":"2017-12-31T07:00:00.000Z"},{"value":10,"date":"2017-12-31T10:00:00.000Z"},{"value":100,"date":"2017-12-31T13:00:00.000Z"},{"value":20,"date":"2017-12-31T16:00:00.000Z"}]},xAccessor={ ({ item }) => item.date },{xScale:scale.scaleTime}'>
      <XAxisScaleTimeExample></XAxisScaleTimeExample>
    </TestItem>
    {
      yScaleProp.map(item => {
        return (<TestItem desc={item.label} key={item.label}>
          <XAxisScaleTimeExample1 scale={item.value}></XAxisScaleTimeExample1>
        </TestItem>)
      })
    }
    {
      xScaleProp.map(item => {
        return (<TestItem desc={item.label} key={item.label}>
          <XAxisScaleTimeExample1 scale={item.value}></XAxisScaleTimeExample1>
        </TestItem>)
      })
    }
  </GenMain >
}