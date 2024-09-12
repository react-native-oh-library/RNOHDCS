import BarChartDemo from './barChartComponent';
import LineChartDemo from './lineChartComponent'
import HorizontalBarChartDemo from './horizontalBarChart';
import BubbleChartDemo from './bubbleChartComponet';
import CandleChartDemo from './candleStickChartComponent';
import PieChartDemo from './pieChartComponent';
import RadarChartDemo from './radarChartComponent'
import ScatterChartDemo from './scatterChartComponent'
import CombinedChartDemo from './combinedChartComponent';
import { NavigationContainer, Page } from './navitagiton';
import BarChartScreen from './baseDemo/barChart'
import LineChartScreen from './baseDemo/lineChart';
import BubbleChartScreen from './baseDemo/bubbleChart'
import CandleChartScreen from './baseDemo/candleStickChart';
import PieChartScreen from './baseDemo/pieChart';
import { View } from 'react-native';
import RadarChartScreen from './baseDemo/radarChart';
import ScatterChartScreen from './baseDemo/scatterChart';
import HorizontalBarChartScreen from './baseDemo/horizontalBarChart';
import CombinedChartScreen from './baseDemo/combinedChart';
const ChartsWrapperDemo = () => {
  return (
    <>
    <View style={{height:30}}>
    </View>
    <NavigationContainer>
       <Page name="BaseBarChart">
        <BarChartScreen></BarChartScreen>
      </Page>
      <Page name="BarChart">
        <BarChartDemo></BarChartDemo>
      </Page>
      <Page name="BaseLineChart">
        <LineChartScreen></LineChartScreen>
      </Page>
      <Page name="LineChart">
        <LineChartDemo></LineChartDemo>
      </Page>
      <Page name='BaseHorizontalBarChart'>
        <HorizontalBarChartScreen></HorizontalBarChartScreen>
      </Page>
      <Page name='HorizontalBarChart'>
        <HorizontalBarChartDemo></HorizontalBarChartDemo>
      </Page>
      <Page name='BaseBubbleChart'>
        <BubbleChartScreen></BubbleChartScreen>
      </Page>
      <Page name='BubbleChart'>
        <BubbleChartDemo></BubbleChartDemo>
      </Page>
      <Page name='BaseCandleStickChart'>
        <CandleChartScreen></CandleChartScreen>
      </Page>
      <Page name='CandleStickChart'>
        <CandleChartDemo></CandleChartDemo>
      </Page>
      <Page name='BasePieChart'>
        <PieChartScreen></PieChartScreen>
      </Page>
      <Page name='PieChart'>
        <PieChartDemo></PieChartDemo>
      </Page>
      <Page name='BaseRadarChart'>
        <RadarChartScreen></RadarChartScreen>
      </Page>
      <Page name='RadarChart'>
        <RadarChartDemo></RadarChartDemo>
      </Page>
      <Page name='BaseScatterChart'>
        <ScatterChartScreen></ScatterChartScreen>
      </Page>
      <Page name='ScatterChart'>
        <ScatterChartDemo></ScatterChartDemo>
      </Page>
      <Page name='BaseCombineChart'>
        <CombinedChartScreen></CombinedChartScreen>
      </Page>
      <Page name='CombineChart'>
        <CombinedChartDemo></CombinedChartDemo>
      </Page>
    </NavigationContainer>
    </>
  );
};

export default ChartsWrapperDemo;
