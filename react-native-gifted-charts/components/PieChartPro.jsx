import { PieChartPro } from "react-native-gifted-charts";
import { TestCase, Tester, TestSuite } from "@rnoh/testerino";
import { Button, ScrollView, Text, View } from "react-native";
import { useState } from "react";

export default function () {
  const [onPressText, setOnPressText] = useState('');
  const [onLabelPressText, setOnLabelPressText] = useState('');
  const [isAnimate, setIsAnimate] = useState(false);
  const [onPressPropsText, setOnPressPropsText] = useState('');
  const [onLablePressPropsText, setOnLablePressPropsText] = useState('');

  const [piehartProps, setPiehartProps] = useState({})

  const pieData = [
    { value: 54, color: '#177AD5', text: '54%', onPress: () => setOnPressText('onPress被触发 text:54%') },
    { value: 30, color: '#79D2DE', text: '30%', onPress: () => setOnPressText('onPress被触发 text:30%') },
    { value: 26, color: '#ED6665', text: '26%', onPress: () => setOnPressText('onPress被触发 text:26%') },
  ];
  const pieData1 = [
    { value: 54, color: '#177AD5', text: '54%', onLabelPress: () => setOnLabelPressText('onLabelPress被触发 text:54%') },
    { value: 30, color: '#79D2DE', text: '30%', onLabelPress: () => setOnLabelPressText('onLabelPress被触发 text:30%') },
    { value: 26, color: '#ED6665', text: '26%', onLabelPress: () => setOnLabelPressText('onLabelPress被触发 text:26%') },
  ];
  const pieChartProDataPro = [
    {
      data: [
        { value: 54, },
        { value: 30 },
        { value: 26 }
      ]
    },
    {
      data: [
        { value: 54, text: '54%' },
        { value: 30, text: '30%' },
        { value: 26, text: '26%' }
      ]
    },
    {
      data: [
        { value: 54, text: '54%', color: 'red' },
        { value: 30, text: '30%', color: 'green' },
        { value: 26, text: '26%', color: 'black' }
      ]
    },
    {
      data: [
        { value: 54, text: '54%', color: 'red', labelPosition: 'outward' },
        { value: 30, text: '30%', color: 'green', labelPosition: 'onBorder' },
        { value: 26, text: '26%', color: 'black', labelPosition: 'inward' },
        { value: 10, text: '10%', color: 'pink', labelPosition: 'mid' }
      ]
    },
    {
      data: [
        { value: 60, text: '60', textColor: 'red', fontStyle: 'normal', textSize: 18, fontWeight: 'bold', font: 'Arial' },
        { value: 70, text: '70', textColor: 'blue', fontStyle: 'italic', textSize: 20, fontWeight: 'bolder', font: 'Cursive' },
        { value: 40, text: '40', textColor: 'black', fontStyle: 'oblique', textSize: 24, fontWeight: 'lighter', font: 'Comic Sans MS' },
        { value: 30, text: '30', textColor: 'black', fontStyle: 'italic', textSize: 26, fontWeight: '100', font: 'Comic Sans MS' },
        { value: 20, text: '20', textColor: 'black', fontStyle: 'oblique', textSize: 28, fontWeight: '200', font: 'Comic Sans MS' },
      ],
    },
    {
      showGradient: true,
      data: [
        { value: 54, text: '54%', color: 'red', gradientCenterColor: 'pink' },
        { value: 30, text: '30%', color: 'green', gradientCenterColor: 'yellow' },
        { value: 26, text: '26%', color: 'black', gradientCenterColor: 'blue' }]
    },
    {
      data: [
        { value: 54, text: '54%', color: 'red', shiftTextX: 10, shiftTextY: 20 },
        { value: 30, text: '30%', color: 'green', shiftTextX: -10, shiftTextY: -20 },
        { value: 26, text: '26%', color: 'black', shiftTextX: 30, shiftTextY: 30 }
      ]
    },
    {
      data: [
        { value: 54, text: '54%', color: 'red', shiftTextX: 10, shiftTextY: 20, textSize: 30, },
        { value: 30, text: '30%', color: 'green', shiftTextX: -10, shiftTextY: -20, textSize: 30, },
        { value: 26, text: '26%', color: 'black', shiftTextX: 30, shiftTextY: 30, textSize: 30, }
      ]
    },
    {
      data: [
        { value: 54, text: '54%', color: 'red', strokeWidth: 5 },
        { value: 30, text: '30%', color: 'green', strokeWidth: 10 },
        { value: 26, text: '26%', color: 'yellow', strokeWidth: 25 }
      ]
    },
    {
      data: [
        { value: 54, text: '54%', color: 'red', strokeWidth: 5, strokeColor: 'black' },
        { value: 30, text: '30%', color: 'green', strokeWidth: 10, strokeColor: 'gray' },
        { value: 26, text: '26%', color: 'yellow', strokeWidth: 25, strokeColor: 'pink' }
      ]
    },
    {
      data: [
        { value: 54, text: '54%', color: 'red', strokeWidth: 5, strokeColor: 'black', strokeDashArray: [2, 4] },
        { value: 30, text: '30%', color: 'green', strokeWidth: 10, strokeColor: 'black', strokeDashArray: [3, 6] },
        { value: 26, text: '26%', color: 'yellow', strokeWidth: 15, strokeColor: 'black', strokeDashArray: [2, 8] }
      ]
    },
    {
      donut: true,
      data: [
        { value: 54, text: '54%', color: 'red', isStartEdgeCurved: true },
        { value: 30, text: '30%', color: 'green' },
        { value: 26, text: '26%', color: 'black' }
      ]
    },
    {
      donut: true,
      data: [
        { value: 54, text: '54%', color: 'red', startEdgeRadius: 5 },
        { value: 30, text: '30%', color: 'green' },
        { value: 26, text: '26%', color: 'black' }
      ]
    },
    {
      donut: true,
      data: [
        { value: 54, text: '54%', color: 'red', startEdgeRadius: 40 },
        { value: 30, text: '30%', color: 'green' },
        { value: 26, text: '26%', color: 'black' }
      ]
    },
    {
      donut: true,
      data: [
        { value: 54, text: '54%', color: 'red' },
        { value: 30, text: '30%', color: 'green' },
        { value: 26, text: '26%', color: 'black', isEndEdgeCurved: true }
      ]
    },
    {
      donut: true,
      data: [
        { value: 54, text: '54%', color: 'red' },
        { value: 30, text: '30%', color: 'green' },
        { value: 26, text: '26%', color: 'black', endEdgeRadius: 5 }
      ]
    },
    {
      donut: true,
      data: [
        { value: 54, text: '54%', color: 'red' },
        { value: 30, text: '30%', color: 'green' },
        { value: 26, text: '26%', color: 'black', endEdgeRadius: 40 }
      ]
    },
  ]

  const pieProData = [
    { value: 54, color: '#177AD5', text: '54%' },
    { value: 30, color: '#79D2DE', text: '30%' },
    { value: 26, color: '#ED6665', text: '26%' },
  ];
  const pieChartProProps = [
    { curvedStartEdges: true, donut: true, innerRadius: 30 }, { curvedStartEdges: false, donut: true, innerRadius: 20 },
    { curvedEndEdges: true, donut: true, innerRadius: 30 }, { curvedEndEdges: false, donut: true, innerRadius: 20 },
    { ring: true }, { ring: false },
    { strokeWidth: 5 }, { strokeWidth: 10 },
    { strokeWidth: 5, strokeColor: 'red' }, { strokeWidth: 10, strokeColor: 'blue' },
    { strokeWidth: 5, strokeDashArray: [2, 4] }, { strokeWidth: 10, strokeDashArray: [2, 8] },
    { edgesRadius: 20, donut: true }, { edgesRadius: 30, donut: true },
    { semiCircle: true }, { semiCircle: false },
    { textSize: 12 }, { textSize: 18 }, { textSize: 20 },
    { textColor: 'red' }, { textColor: 'black' }, { textColor: 'yellow' },
    { font: 'Arial' }, { font: 'Cursive' },
    { fontWeight: 'bold', }, { fontWeight: 'bolder' }, { fontWeight: 'lighter' }, { fontWeight: '100' }, { fontWeight: '200' },
    { fontStyle: 'normal' }, { fontStyle: 'italic', }, { fontStyle: 'oblique' },
  ]

  const [isVisible, setIsVisible] = useState(true);

  const changeProps = (props) => {
    setIsVisible(false);
    let t = setTimeout(() => {
      clearTimeout(t);
      setPiehartProps(props)
      setIsVisible(true);
    }, 300)
  }

  return (
    <Tester>
      <TestCase itShould={'base'} tags={['C_API']}>
        <View style={{ minHeight: 250 }}>
          {isVisible ? <PieChartPro data={pieData} {...piehartProps}></PieChartPro> : null}
        </View>
      </TestCase>
      <ScrollView style={{ marginBottom: 330 }}>
        {
          pieChartProDataPro.map((item, index) => {
            return (
              <TestCase itShould={JSON.stringify(item)} key={index + '_' + JSON.stringify(item)} tags={['C_API']}>
                <Button title='点击按钮并观察饼图变化' onPress={() => {
                  changeProps(item);
                }}></Button>
              </TestCase>
            )
          })
        }
        <TestCase itShould="请点击饼图子项，触发onPress方法" tags={['C_API']}>
          <Text>{onPressText}</Text>
          <Button title='点击按钮并观察饼图变化' onPress={() => {
            setPiehartProps({ ...pieData })
          }}></Button>
        </TestCase>

        <TestCase itShould="请点击饼图子项文字，触发onLabelPress方法" tags={['C_API']}>
          <Text>{onLabelPressText}</Text>
          <Button title='点击按钮并观察饼图变化' onPress={() => {
            setPiehartProps({ ...pieData1 })
          }}></Button>
        </TestCase>
        {
          pieChartProProps.map((item, index) => {
            return (
              <TestCase itShould={JSON.stringify(item)} key={index + '_' + JSON.stringify(item)} tags={['C_API']}>
                <Button title='点击按钮并观察饼图变化' onPress={() => {
                  changeProps({ isAnimated: true, ...item });
                }}></Button>
              </TestCase>
            )
          })
        }
      </ScrollView>
    </Tester>
  )
}