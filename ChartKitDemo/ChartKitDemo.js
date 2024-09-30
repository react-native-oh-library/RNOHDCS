    import React from 'react';
    import { ScrollView, View, Text, Dimensions, StyleSheet } from 'react-native';
    import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from 'react-native-chart-kit';
    import { Tester, TestSuite } from '@rnoh/testerino'; // 假设你有这个库来组织测试
    import { TestCase } from './TestCase'; // 自定义的测试用例组件
    
    const screenWidth = Dimensions.get('window').width;
    const chartWidth = screenWidth - 32; // 留出一些边距
    
    const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: '#08130D',
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false, // optional
    };
    
    const TestPage = () => {
      return (
        <ScrollView>
          <Tester>
            <TestSuite name="Charts">
              <TestCase.Example itShould="render Line Chart">
                <LineChartExample />
              </TestCase.Example>
              <TestCase.Example itShould="render Bar Chart">
                <BarChartExample />
              </TestCase.Example>
              <TestCase.Example itShould="render Pie Chart">
                <PieChartExample />
              </TestCase.Example>
              <TestCase.Example itShould="render Progress Chart">
                <ProgressChartExample />
              </TestCase.Example>
              <TestCase.Example itShould="render Contribution Graph">
                <ContributionGraphExample />
              </TestCase.Example>
              <TestCase.Example itShould="render Stacked Bar Chart">
                <StackedBarChartExample />
              </TestCase.Example>
            </TestSuite>
          </Tester>
        </ScrollView>
      );
    };
    
    const LineChartExample = () => (
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Line Chart</Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          }}
          width={chartWidth}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chartStyle}
        />
      </View>
    );
    
    const BarChartExample = () => (
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Bar Chart</Text>
        <BarChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          }}
          width={chartWidth}
          height={220}
          chartConfig={chartConfig}
          style={styles.chartStyle}
        />
      </View>
    );
    
    const PieChartExample = () => (
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Pie Chart</Text>
        <PieChart
          data={[
            {
              name: 'Seoul',
              population: 21500000,
              color: 'rgba(131, 167, 234, 1)',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'Toronto',
              population: 2800000,
              color: '#F00',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'Beijing',
              population: 527612,
              color: 'red',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'New York',
              population: 8538000,
              color: '#ffffff',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'Moscow',
              population: 11920000,
              color: 'rgb(0, 0, 255)',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
          ]}
          width={chartWidth}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
          style={styles.chartStyle}
        />
      </View>
    );
    
    const ProgressChartExample = () => (
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Progress Chart</Text>
        <ProgressChart
          data={{
            labels: ['Swim', 'Bike', 'Run'], // optional
            data: [0.4, 0.6, 0.8],
          }}
          width={chartWidth}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
          style={styles.chartStyle}
        />
      </View>
    );
    
    const ContributionGraphExample = () => (
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Contribution Graph</Text>
        <ContributionGraph
          values={[
            { date: '2017-01-02', count: 1 },
            { date: '2017-01-03', count: 2 },
            { date: '2017-01-04', count: 3 },
            { date: '2017-01-05', count: 4 },
            { date: '2017-01-06', count: 5 },
            { date: '2017-01-30', count: 2 },
            { date: '2017-01-31', count: 3 },
            { date: '2017-03-01', count: 2 },
            { date: '2017-04-02', count: 4 },
            { date: '2017-03-05', count: 2 },
            { date: '2017-02-30', count: 4 },
          ]}
          endDate={new Date('2017-04-01')}
          numDays={105}
          width={chartWidth}
          height={220}
          chartConfig={chartConfig}
          style={styles.chartStyle}
        />
      </View>
    );
    
    const StackedBarChartExample = () => (
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Stacked Bar Chart</Text>
        <StackedBarChart
          data={{
            labels: ['Test1', 'Test2'],
            legend: ['L1', 'L2', 'L3'],
            data: [
              [60, 60, 60],
              [30, 30, 60],
            ],
            barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
          }}
          width={chartWidth}
          height={220}
          chartConfig={chartConfig}
          style={styles.chartStyle}
        />
      </View>
    );
    
    const styles = StyleSheet.create({
      chartContainer: {
        marginVertical: 8,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 16,
        overflow: 'hidden',
        alignItems: 'flex-start', 
        width: chartWidth + 32, 
      },
      chartTitle: {
        fontSize: 18,
        marginBottom: 8,
        textAlign: 'left', 
        width: '100%',
      },
      chartStyle: {
        marginLeft: 0, 
      },
    });
    
    export default TestPage;
    