import React, {useState} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {ContributionGraph} from 'react-native-chart-kit';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

export function ContributionGraphTest() {
  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  const values = [
    {date: '2017-01-02', count: 1, test: 9},
    {date: '2017-01-03', count: 2, test: 9},
    {date: '2017-01-04', count: 3, test: 9},
    {date: '2017-01-05', count: 4, test: 9},
    {date: '2017-01-06', count: 5, test: 9},
    {date: '2017-01-30', count: 2, test: 9},
    {date: '2017-01-31', count: 3, test: 9},
    {date: '2017-03-01', count: 2, test: 9},
    {date: '2017-04-02', count: 4, test: 9},
    {date: '2017-03-05', count: 2, test: 9},
    {date: '2017-02-30', count: 4, test: 9},
  ];

  const handleMonthLabel1 = () => (index: number) => 'aaa' + index;
  const handleMonthLabel2 = () => (index: number) => index.toString();

  const handleToolTip: any = {};
  const [gutterValue, setGutterValue] = useState(2);
  const [squareValue, setSquareValue] = useState(22);
  const [chartState, setChartState] = useState(false);
  const [accessorVal, setAccessorVal] = useState<string>('count');
  const [monthLable, setMonthLable] = useState(handleMonthLabel2);
  const [monthLableState, setMonthLableState] = useState(false);

  return (
    <ScrollView>
      <Tester>
        <TestSuite name="onDayPress and gutterSize">
          <TestCase
            itShould="test Contribution Graph onDayPress function and gutterSize property with value is 2 or 4"
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            initialState={false}
            tags={['C_API']}
            arrange={({setState}) => {
              return (
                <ContributionGraph
                  values={values}
                  endDate={new Date('2017-05-01')}
                  numDays={105}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
                  tooltipDataAttrs={() => handleToolTip}
                  gutterSize={gutterValue}
                  onDayPress={() => {
                    setState(true);
                    if (gutterValue === 2) {
                      setGutterValue(4);
                    } else {
                      setGutterValue(2);
                    }
                  }}
                />
              );
            }}
          />
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="squareSize">
          <TestCase itShould="test Contribution Graph squareSize property with value is 11 or 22">
            <ContributionGraph
              values={values}
              endDate={new Date('2017-05-01')}
              numDays={105}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              tooltipDataAttrs={() => handleToolTip}
              squareSize={squareValue}
              onDayPress={() => {
                if (squareValue === 22) {
                  setSquareValue(11);
                } else {
                  setSquareValue(22);
                }
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="horizontal">
          <TestCase itShould="test Contribution Graph horizontal property with value is true or false">
            <ContributionGraph
              values={values}
              endDate={new Date('2017-05-01')}
              numDays={105}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              tooltipDataAttrs={() => handleToolTip}
              horizontal={!chartState}
              onDayPress={() => {
                setChartState(!chartState);
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="showMonthLabels">
          <TestCase itShould="test Contribution Graph showMonthLabels property with value is true or false">
            <ContributionGraph
              values={values}
              endDate={new Date('2017-05-01')}
              numDays={105}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              tooltipDataAttrs={() => handleToolTip}
              showMonthLabels={!chartState}
              onDayPress={() => {
                setChartState(!chartState);
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="showOutOfRangeDays">
          <TestCase itShould="test Contribution Graph showOutOfRangeDays property with value is true or false">
            <ContributionGraph
              values={values}
              endDate={new Date('2017-05-01')}
              numDays={105}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              tooltipDataAttrs={() => handleToolTip}
              showOutOfRangeDays={chartState}
              onDayPress={() => {
                setChartState(!chartState);
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="accessor">
          <TestCase itShould="test Contribution Graph accessor property with value is count or test">
            <ContributionGraph
              values={values}
              endDate={new Date('2017-05-01')}
              numDays={105}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              tooltipDataAttrs={() => handleToolTip}
              accessor={accessorVal}
              onDayPress={() => {
                if (accessorVal === 'count') {
                  setAccessorVal('test');
                } else {
                  setAccessorVal('count');
                }
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="getMonthLabel">
          <TestCase
            itShould="test Contribution Graph getMonthLabel function to add aaa"
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            initialState={false}
            tags={['C_API']}
            arrange={({setState}) => {
              return (
                <ContributionGraph
                  values={values}
                  endDate={new Date('2017-05-01')}
                  numDays={105}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
                  tooltipDataAttrs={() => handleToolTip}
                  getMonthLabel={monthLable}
                  onDayPress={() => {
                    setState(true);
                    if (!monthLableState) {
                      setMonthLable(handleMonthLabel1);
                      setMonthLableState(true);
                    } else {
                      setMonthLable(handleMonthLabel2);
                      setMonthLableState(false);
                    }
                  }}
                />
              );
            }}
          />
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}
