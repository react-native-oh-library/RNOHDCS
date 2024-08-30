import React, {useState} from 'react';
import {Dimensions, Text} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Rect, G, Text as SvgText} from 'react-native-svg';

export function LineChartExample() {
  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
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
  };

  const [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    value: 0,
    visible: false,
  });

  const handlePointClick = (data: {x: number; y: number; value: any}) => {
    const isSamePoint = tooltipPos.x === data.x && tooltipPos.y === data.y;
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
  };

  const doDecorator = (tooltipPos: any) => () => {
    if (tooltipPos === null) {
      return null;
    }
    const {x, y, value, visible} = tooltipPos;
    if (!visible) {
      return null;
    }
    return (
      <G>
        <Rect x={x - 15} y={y + 10} width="40" height="30" fill="white" />
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
  };

  return (
    <>
      <Text>Line Chart</Text>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        withDots={true}
        withShadow={true}
        withInnerLines={true}
        withOuterLines={true}
        withVerticalLines={true}
        withHorizontalLines={true}
        withVerticalLabels={true}
        withHorizontalLabels={true}
        fromZero={true}
        yAxisLabel="$"
        xAxisLabel=""
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        onDataPointClick={handlePointClick}
        decorator={doDecorator(tooltipPos)}
        horizontalLabelRotation={15}
        verticalLabelRotation={15}
        formatXLabel={label => label.toUpperCase()}
        formatYLabel={label => label.toUpperCase()}
        getDotColor={dataPoint => {
          if (dataPoint > 70 || dataPoint < 35) {
            return 'gray';
          } else {
            return 'white';
          }
        }}
        renderDotContent={({x, y, index}) => {
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
        }}
        segments={8}
        getDotProps={() => {
          return {
            r: '6',
            strokeWidth: '2',
            stroke: 'black',
          };
        }}
      />
    </>
  );
}
