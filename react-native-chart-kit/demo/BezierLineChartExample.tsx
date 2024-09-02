import React, {useState} from 'react';
import {Dimensions, Text} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Rect, Text as SvgText, G} from 'react-native-svg';

export function BezierLineChartExample() {
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
    labels: ['一', '二', '三', '四', '五', '六'],
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
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={data}
        width={screenWidth} // from react-native
        height={220}
        yAxisLabel="￥"
        xAxisLabel="月"
        yAxisSuffix="元"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        onDataPointClick={handlePointClick}
        decorator={doDecorator(tooltipPos)}
        formatXLabel={label => label.toUpperCase()}
      />
    </>
  );
}
