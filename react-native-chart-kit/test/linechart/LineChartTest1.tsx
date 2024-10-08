import React, {useState} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Rect, G, Text as SvgText} from 'react-native-svg';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

export function LineChartTest1() {
  const screenWidth = Dimensions.get('window').width - 40;

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ff9626',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      marginVertical: 8,
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [25.44, 76.23, 55.55, 13.2, 88.88, 46.78],
      },
    ],
    legend: ['Rainy Days'],
  };

  const [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    value: 0,
    visible: false,
  });

  const [chartState, setChartState] = useState(false);

  return (
    <ScrollView>
      <Tester>
        <TestSuite name="onDataPointClick and decorator">
          <TestCase
            itShould="test Line Chart onDataPointClick and decorator function"
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            initialState={false}
            tags={['C_API']}
            arrange={({setState}) => {
              return (
                <LineChart
                  data={data}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
                  onDataPointClick={data => {
                    setState(true);
                    const isSamePoint =
                      tooltipPos.x === data.x && tooltipPos.y === data.y;
                    isSamePoint
                      ? setTooltipPos(previousState => {
                          return {
                            ...previousState,
                            value: data.value,
                            visible: !previousState.visible,
                          };
                        })
                      : setTooltipPos({
                          x: data.x,
                          value: data.value,
                          y: data.y,
                          visible: true,
                        });
                  }}
                  decorator={() => {
                    if (tooltipPos === null) {
                      return null;
                    }
                    const {x, y, value, visible} = tooltipPos;
                    if (!visible) {
                      return null;
                    }
                    return (
                      <G>
                        <Rect
                          x={x - 15}
                          y={y + 10}
                          width="40"
                          height="30"
                          fill="white"
                        />
                        <SvgText
                          x={x + 5}
                          y={y + 30}
                          fill="black"
                          fontWeight="bold"
                          textAnchor="middle">
                          {value}
                        </SvgText>
                      </G>
                    );
                  }}
                />
              );
            }}
          />
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="getDotColor">
          <TestCase
            itShould="test Line Chart getDotColor function with dot color is gray or white"
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            initialState={false}
            tags={['C_API']}
            arrange={({setState}) => {
              return (
                <LineChart
                  data={data}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
                  getDotColor={() => {
                    if (chartState) {
                      return 'gray';
                    } else {
                      return 'white';
                    }
                  }}
                  onDataPointClick={() => {
                    setState(true);
                    setChartState(!chartState);
                  }}
                />
              );
            }}
          />
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="renderDotContent">
          <TestCase
            itShould="test Line Chart renderDotContent function with fill is black, fontSize is 12, fontWeight is normal, textAnchor is middle"
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            initialState={false}
            tags={['C_API']}
            arrange={({setState}) => {
              return (
                <LineChart
                  data={data}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
                  renderDotContent={({x, y, index}) => {
                    if (chartState) {
                      return (
                        <SvgText
                          key={index}
                          x={x}
                          y={y - 10}
                          fill="black"
                          fontSize="12"
                          fontWeight="normal"
                          textAnchor="middle">
                          {index}
                        </SvgText>
                      );
                    } else {
                      return null;
                    }
                  }}
                  onDataPointClick={() => {
                    setState(true);
                    setChartState(!chartState);
                  }}
                />
              );
            }}
          />
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="getDotProps">
          <TestCase
            itShould="test Line Chart getDotProps function with strokeWidth is 2, stroke is black, r is 6"
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
            initialState={false}
            tags={['C_API']}
            arrange={({setState}) => {
              return (
                <LineChart
                  data={data}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
                  getDotProps={() => {
                    if (chartState) {
                      return {
                        r: '6',
                        strokeWidth: '2',
                        stroke: 'black',
                      };
                    } else {
                      return {};
                    }
                  }}
                  onDataPointClick={() => {
                    setState(true);
                    setChartState(!chartState);
                  }}
                />
              );
            }}
          />
        </TestSuite>
      </Tester>

      <Tester>
        <TestSuite name="bezier">
          <TestCase itShould="test Line Chart bezier property with true or false">
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              bezier={chartState}
              onDataPointClick={() => {
                setChartState(!chartState);
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}
