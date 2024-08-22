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
const ChartsWrapperDemo = () => {
  return (
    <NavigationContainer>
      <Page name="BarChart">
        <BarChartDemo></BarChartDemo>
      </Page>
      <Page name="LineChart">
        <LineChartDemo></LineChartDemo>
      </Page>
      <Page name='HorizontalBarChart'>
        <HorizontalBarChartDemo></HorizontalBarChartDemo>
      </Page>
      <Page name='BubbleChart'>
        <BubbleChartDemo></BubbleChartDemo>
      </Page>
      <Page name='CandleStickChart'>
        <CandleChartDemo></CandleChartDemo>
      </Page>
      <Page name='PieChart'>
        <PieChartDemo></PieChartDemo>
      </Page>
      <Page name='RadarChart'>
        <RadarChartDemo></RadarChartDemo>
      </Page>
      <Page name='ScatterChart'>
        <ScatterChartDemo></ScatterChartDemo>
      </Page>
      <Page name='CombineChart'>
        <CombinedChartDemo></CombinedChartDemo>
      </Page>
    </NavigationContainer>
  );
};

export default ChartsWrapperDemo;
