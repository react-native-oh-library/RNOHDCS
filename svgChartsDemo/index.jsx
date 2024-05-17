import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import AreaChartExample from './areaCharts/AreaChartExample';
import GridMinMaxExample from './areaCharts/GridMinMaxExample';
import GradientExample from './areaCharts/GradientExample';
import PartialAreaChartExample from './areaCharts/PartialAreaChartExample';
import LayeredChartsExample from './areaCharts/LayeredChartsExample';
import XAxisScaleTimeExample from './areaCharts/XAxisScaleTimeExample';

import GroupedBarChartExample from './barChart/GroupedBarChartExample';
import GradientBarExample from './barChart/GradientBarExample';
import ColorBarExample from './barChart/ColorBarExample';
import BarChartExample from './barChart/BarChartExample';
import HorizontaBarChartWithYAxis from './barChart/HorizontaBarChartWithYAxis';
import BarChartHorizontalWithLabels from './barChart/BarChartHorizontalWithLabels';
import BarChartVerticalWithLabels from './barChart/BarChartVerticalWithLabels';
import XAxisExample from './barChart/XAxisExample';

import LineChartExample from './lineChart/LineChartExample';
import GradientLineExample from './lineChart/GradientLineExample';
import PartialLineChartExample from './lineChart/PartialLineChartExample';
import CustomGridExample from './lineChart/CustomGridExample';
import ExtrasExample from './lineChart/ExtrasExample';
import AxesExample from './lineChart/AxesExample';
import DecoratorExample from './lineChart/DecoratorExample';
import LineChartDoubleLineExample from './lineChart/LineChartDoubleLineExample';

import AreaStackWithAxisExample from './stackedAreaChart/AreaStackWithAxisExample';

import ProgressCircleExample from './progressCircle/ProgressCircleExample';

import PieChartWithLabelExample from './pieChart/PieChartWithLabelExample';
import PieChartWithDifferentArcs from './pieChart/PieChartWithDifferentArcs';
import PieChartWithCenteredLabels from './pieChart/PieChartWithCenteredLabels';
import PieChartWithCenteredLabels1 from './pieChart/PieChartWithCenteredLabels1';
import PieChartWithDynamicSlices from './pieChart/PieChartWithDynamicSlices';

import InteractiveChart from './interactiveChart/InteractiveChart';

const SvgChartsExample = () => {
  return (
    <ScrollView>
      <View>
        <Text>AreaChart</Text>
        <AreaChartExample />
        <GridMinMaxExample />
        <GradientExample />
        <PartialAreaChartExample />
        <LayeredChartsExample />
        <XAxisScaleTimeExample />

        <Text>BarChart</Text>
        <GroupedBarChartExample />
        <GradientBarExample />
        <ColorBarExample />
        <BarChartExample />
        <HorizontaBarChartWithYAxis />
        <BarChartHorizontalWithLabels />
        <BarChartVerticalWithLabels />
        <XAxisExample />

        <Text>LineChart</Text>
        <LineChartExample />
        <GradientLineExample />
        <PartialLineChartExample />
        <CustomGridExample />
        <ExtrasExample />
        <AxesExample />
        <DecoratorExample />
        <LineChartDoubleLineExample />

        <Text>StackedAreaChart</Text>
        <AreaStackWithAxisExample />

        <Text>progressCircle</Text>
        <ProgressCircleExample />

        <Text>PieChart</Text>
        <PieChartWithLabelExample />
        <PieChartWithDifferentArcs />
        <PieChartWithCenteredLabels />
        <PieChartWithCenteredLabels1 />
        <PieChartWithDynamicSlices />

        <Text>InteractiveChart</Text>
        <InteractiveChart />
      </View>
    </ScrollView>
  );
};

export default SvgChartsExample;
