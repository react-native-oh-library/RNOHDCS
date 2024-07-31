import { useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { Path } from 'react-native-svg';
import { PieChart } from 'react-native-gifted-charts';
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";

const pieData = [{ value: 50 }, { value: 20 }, { value: 40 }];

export default function () {
  const [onPressText, setOnPressText] = useState('');
  const [onLablePressText, setOnLablePressText] = useState('');

  const pieChartDataProps = [
    {
      data: [
        { value: 60, shiftX: 20, shiftY: 20 },
        { value: 70, shiftX: 10, shiftY: 10 },
        { value: 40, shiftX: -5, shiftY: -5 }]
    },
    {
      showText: true,
      showTextBackground: true,
      sectionAutoFocus: true,
      data: [
        { shiftTextX: 10, shiftTextY: 20, value: 60, text: '60', textColor: 'red', focused: true, },
        { value: 70, text: '70', textColor: 'blue', },
        { value: 40, text: '40', textColor: 'black', }
      ],
    },
    {
      showText: true,
      showTextBackground: true,
      sectionAutoFocus: true,
      data: [
        { shiftTextX: 20, shiftTextY: 30, value: 60, text: '60', textColor: 'red', focused: true, },
        { value: 70, text: '70', textColor: 'blue', },
        { value: 40, text: '40', textColor: 'black', }
      ],
    },
    {
      showText: true,
      showTextBackground: true,
      data: [
        { value: 60, text: '60', textColor: 'red', fontStyle: 'normal', fontWeight: 'bold', font: 'Arial' },
        { value: 70, text: '70', textColor: 'blue', fontStyle: 'italic', fontWeight: 'bolder', font: 'Cursive' },
        { value: 40, text: '40', textColor: 'black', fontStyle: 'oblique', fontWeight: 'lighter', font: 'Comic Sans MS' }
      ],
    },
    {
      showText: true,
      showTextBackground: true,
      data: [
        { value: 60, text: '60', textSize: 12, textColor: 'pink', shiftTextBackgroundX: 0, shiftTextBackgroundY: 0, fontWeight: '100' },
        { value: 70, text: '70', textSize: 16, textColor: 'red', shiftTextBackgroundX: 20, shiftTextBackgroundY: 10, fontWeight: '200' },
        { value: 40, text: '40', textSize: 18, textColor: 'black', shiftTextBackgroundX: 10, shiftTextBackgroundY: -10, fontWeight: '300' }
      ],
    },
    {
      showText: true,
      data: [
        { value: 60, text: '60', strokeWidth: 5, strokeColor: 'red' },
        { value: 70, text: '70', strokeWidth: 10, strokeColor: 'yellow' },
        { value: 40, text: '40', strokeWidth: 15, strokeColor: 'pink' }
      ],
    },
    {
      showText: true,
      sectionAutoFocus: true,
      data: [
        { value: 60, text: '60', focused: true },
        { value: 70, text: '70' },
        { value: 40, text: '40' }
      ],
    },
  ]

  const pieChartProps = [
    { radius: 30 }, { radius: 55 }, { radius: 80 },
    { initialAngle: 20 }, { initialAngle: 40 },
    { isThreeD: true }, { isThreeD: false },
    { showGradient: true, }, { showGradient: false },
    { showGradient: true, gradientCenterColor: 'red' }, { showGradient: true, gradientCenterColor: 'pink' },
    { focusOnPress: true, }, { focusOnPress: false },
    { focusOnPress: true, toggleFocusOnPress: true, }, { focusOnPress: true, toggleFocusOnPress: false },
    { focusOnPress: true, extraRadiusForFocused: 10 }, { focusOnPress: true, extraRadiusForFocused: 28 },
    { sectionAutoFocus: true, data: [{ value: 50, focused: true }, { value: 20 }, { value: 40 }] }, { sectionAutoFocus: false },
    { tiltAngle: '80deg', isThreeD: true, }, { tiltAngle: '70deg', isThreeD: true, },
    { shadow: true, isThreeD: true, }, { shadow: false, isThreeD: true, },
    { shadowColor: 'red', shadow: true, isThreeD: true, }, { shadowColor: 'rgba(0,0,0,0.4)', shadow: true, isThreeD: true, },
    { shadowWidth: 10, shadow: true, isThreeD: true, }, { shadowWidth: 40, shadow: true, isThreeD: true, },
    { strokeWidth: 10 }, { strokeWidth: 20 },
    { strokeColor: 'red', strokeWidth: 10 }, { strokeColor: 'rgba(0,0,0,0.5)', strokeWidth: 20 },
    { backgroundColor: 'red' }, { backgroundColor: 'rgba(0,0,0,0.5)' },
    { showText: true, data: [{ value: 50, text: '50' }, { value: 20, text: '20' }, { value: 40, text: '40' }] },
    { textColor: 'black', showText: true, data: [{ value: 50, text: '50' }, { value: 20, text: '20' }, { value: 40, text: '40' }] },
    { textSize: 26, showText: true, data: [{ value: 50, text: '50' }, { value: 20, text: '20' }, { value: 40, text: '40' }] },
    { fontStyle: 'normal', showText: true, data: [{ value: 50, text: '50' }, { value: 20, text: '20' }, { value: 40, text: '40' }] },
    { fontStyle: 'italic', showText: true, data: [{ value: 50, text: '50' }, { value: 20, text: '20' }, { value: 40, text: '40' }] },
    { fontStyle: 'oblique', showText: true, data: [{ value: 50, text: '50' }, { value: 20, text: '20' }, { value: 40, text: '40' }] },
    { fontWeight: 'bold', showText: true, data: [{ value: 50, text: '50' }, { value: 20, text: '20' }, { value: 40, text: '40' }] },
    { fontWeight: 'bolder', showText: true, data: [{ value: 50, text: '50' }, { value: 20, text: '20' }, { value: 40, text: '40' }] },
    { fontWeight: 'lighter', showText: true, data: [{ value: 50, text: '50' }, { value: 20, text: '20' }, { value: 40, text: '40' }] },
    { fontWeight: '100', showText: true, data: [{ value: 50, text: '50' }, { value: 20, text: '20' }, { value: 40, text: '40' }] },
    { fontWeight: '200', showText: true, data: [{ value: 50, text: '50' }, { value: 20, text: '20' }, { value: 40, text: '40' }] },
    { font: 'Arial', showText: true, data: [{ value: 50, text: '50' }, { value: 20, text: '20' }, { value: 40, text: '40' }] },
    { font: 'Cursive', showText: true, data: [{ value: 50, text: '50' }, { value: 20, text: '20' }, { value: 40, text: '40' }] },
    { showTextBackground: true, showText: true, data: [{ value: 50, text: '50' }, { value: 20, text: '20' }, { value: 40, text: '40' }] },
    { textBackgroundColor: 'red', showTextBackground: true, showText: true, data: [{ value: 50, text: '50' }, { value: 20, text: '20' }, { value: 40, text: '40' }] },
    { textBackgroundRadius: 20, showTextBackground: true, showText: true, data: [{ value: 50, text: '50' }, { value: 20, text: '20' }, { value: 40, text: '40' }] },
    { textBackgroundRadius: 30, showTextBackground: true, showText: true, data: [{ value: 50, text: '50' }, { value: 20, text: '20' }, { value: 40, text: '40' }] },
    { showValuesAsLabels: true, showText: true }, { showValuesAsLabels: false, showText: true },
    { semiCircle: true }, { semiCircle: false },
    { labelsPosition: 'onBorder', showValuesAsLabels: true, showText: true },
    { labelsPosition: 'outward', showValuesAsLabels: true, showText: true },
    { labelsPosition: 'inward', showValuesAsLabels: true, showText: true },
    { labelsPosition: 'mid', showValuesAsLabels: true, showText: true },
    { paddingHorizontal: 100, labelsPosition: 'onBorder', backgroundColor: 'red', textBackgroundRadius: 10, showValuesAsLabels: true, showText: true },
    { paddingHorizontal: 400, labelsPosition: 'onBorder', backgroundColor: 'red', textBackgroundRadius: 30, showValuesAsLabels: true, showText: true },
    { paddingVertical: 100, labelsPosition: 'onBorder', backgroundColor: 'red', textBackgroundRadius: 10, showValuesAsLabels: true, showText: true },
    { paddingVertical: 400, labelsPosition: 'onBorder', backgroundColor: 'red', textBackgroundRadius: 30, showValuesAsLabels: true, showText: true },
  ]
  // 圆环图属性
  const donutChartprops = [
    { inwardExtraLengthForFocused: 10, focusOnPress: true, donut: true, }, { inwardExtraLengthForFocused: 98, focusOnPress: true, donut: true, },
    { donut: true, semiCircle: true },
    { innerRadius: 10, donut: true }, { innerRadius: 30, donut: true },
    { innerCircleColor: 'red', donut: true }, { innerCircleColor: 'blue', donut: true },
    { innerCircleBorderWidth: 5, donut: true }, { innerCircleBorderWidth: 10, donut: true },
    { innerCircleBorderColor: 'red', donut: true }, { innerCircleBorderColor: 'blue', donut: true },
    { shiftInnerCenterX: -10, donut: true, isThreeD: true }, { shiftInnerCenterX: 30, donut: true, isThreeD: true },
    { shiftInnerCenterY: -10, donut: true, isThreeD: true }, { shiftInnerCenterY: 30, donut: true, isThreeD: true },
  ]

  const [piehartProps, setPiehartProps] = useState({})
  const [isVisible, setIsVisible] = useState(true)

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
          {isVisible ? <PieChart data={pieData} {...piehartProps}></PieChart> : null}
        </View>
      </TestCase>
      <ScrollView style={{  marginBottom: 330  }}>
        {
          pieChartDataProps.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                <Button title='点击按钮并观察饼图变化' onPress={() => {
                  changeProps(item)
                }}></Button>
              </TestCase>
            )
          })
        }
        <TestCase itShould="{
              showText: true,
              showTextBackground: true,
              data: [
                { value: 60, text: '60', textBackgroundColor: 'red', textBackgroundRadius: 10, onLabelPress: () => { setOnLablePressText('pieDataItem onLabelPress is trigger text:60') } },
                { value: 70, text: '70', textBackgroundColor: 'yellow', textBackgroundRadius: 20, onLabelPress: () => { setOnLablePressText('pieDataItem onLabelPress is trigger text:70') } },
                { value: 40, text: '40', textBackgroundColor: 'blue', textBackgroundRadius: 30, onLabelPress: () => { setOnLablePressText('pieDataItem onLabelPress is trigger text:40') } }
              ],
            }">
          <Text>请点击饼图中的文字触发onLabelPress方法：{onLablePressText}</Text>
          <Button title='点击按钮并观察饼图变化' onPress={() => {
            setPiehartProps({
              showText: true,
              showTextBackground: true,
              data: [
                { value: 60, text: '60', textBackgroundColor: 'red', textBackgroundRadius: 10, onLabelPress: () => { setOnLablePressText('pieDataItem onLabelPress is trigger text:60') } },
                { value: 70, text: '70', textBackgroundColor: 'yellow', textBackgroundRadius: 20, onLabelPress: () => { setOnLablePressText('pieDataItem onLabelPress is trigger text:70') } },
                { value: 40, text: '40', textBackgroundColor: 'blue', textBackgroundRadius: 30, onLabelPress: () => { setOnLablePressText('pieDataItem onLabelPress is trigger text:40') } }
              ],
            },)
          }}></Button>
        </TestCase>
        <TestCase itShould="{
          showText: true,
          data: [
            { value: 60, text: '60', labelPosition: 'onBorder', onPress: () => { setOnPressText('pieDataItem onPress is trigger text:60') } },
            { value: 70, text: '70', labelPosition: 'outward', onPress: () => { setOnPressText('pieDataItem onPress is trigger text:70') } },
            { value: 40, text: '40', labelPosition: 'inward', onPress: () => { setOnPressText('pieDataItem onPress is trigger text:40') } },
            { value: 30, text: '30', labelPosition: 'mid', onPress: () => { setOnPressText('pieDataItem onPress is trigger text:30') } }
          ],
        },">
          <Text>请点击饼图触发onPress方法：{onPressText}</Text>
          <Button title='点击按钮并观察饼图变化' onPress={() => {
            setPiehartProps({
              showText: true,
              data: [
                { value: 60, text: '60', labelPosition: 'onBorder', onPress: () => { setOnPressText('pieDataItem onPress is trigger text:60') } },
                { value: 70, text: '70', labelPosition: 'outward', onPress: () => { setOnPressText('pieDataItem onPress is trigger text:70') } },
                { value: 40, text: '40', labelPosition: 'inward', onPress: () => { setOnPressText('pieDataItem onPress is trigger text:40') } },
                { value: 30, text: '30', labelPosition: 'mid', onPress: () => { setOnPressText('pieDataItem onPress is trigger text:30') } }
              ],
            },)
          }}></Button>
        </TestCase>
        <TestCase itShould="{
          showText: true,
          data: [
            { value: 60, text: '60', pieInnerComponent: () => { return (<Path strokeLinecap='round' stroke='red' strokeWidth='8' d='M5 8 l215 0' />) } },
            { value: 70, text: '70', pieInnerComponent: () => <Path strokeLinecap='round' stroke='black' strokeWidth='8' d='M5 8 l100 0' /> },
            { value: 40, text: '40' }
          ],
        },">

          <Text>pieInnerComponent方法：会在: </Text>
          <Text style={{ paddingTop: 5, paddingBottom: 5 }}>text:60上绘制出svg: Path strokeLinecap="round" stroke="red" strokeWidth="8" d="M5 8 l215 0"</Text>
          <Text>text:70 上绘制出svg: Path strokeLinecap="round" stroke="black" strokeWidth="8" d="M5 8 l100 0"</Text>
          <Button title='点击按钮并观察饼图变化' onPress={() => {
            setPiehartProps({
              showText: true,
              data: [
                { value: 60, text: '60', pieInnerComponent: () => { return (<Path strokeLinecap='round' stroke='red' strokeWidth='8' d='M5 8 l215 0' />) } },
                { value: 70, text: '70', pieInnerComponent: () => <Path strokeLinecap='round' stroke='black' strokeWidth='8' d='M5 8 l100 0' /> },
                { value: 40, text: '40' }
              ],
            },)
          }}></Button>
        </TestCase>
        {pieChartProps.map((item, index) => {
          return (
            <TestCase itShould={JSON.stringify(item)} key={JSON.stringify(item)} tags={['C_API']}>
              {item.focusOnPress ? <Text>focusOnPress:true，请点击饼图子项，被点击的子项会有放大的效果</Text> : null}
              {item.toggleFocusOnPress ? <Text>toggleFocusOnPress:true，点击饼图切换子项选中放大/还原效果</Text> : null}
              <Button title='点击按钮并观察饼图变化' onPress={() => {
                changeProps(item);
              }}></Button>
            </TestCase>
          )
        })
        }
        <TestCase itShould='{ centerLabelComponent: () => <Text>centerLabelComponent</Text> }'>
          <Button title='点击按钮并观察饼图变化' onPress={() => {
            setPiehartProps({ centerLabelComponent: () => <Text>centerLabelComponent</Text> })
          }}></Button>
        </TestCase>
        <TestCase itShould='{
              pieInnerComponent: () =>
                <Path strokeLinecap="round" stroke="red" strokeWidth="8" d="M5 8 l20 0" />,
              labelsPosition: "onBorder", showValuesAsLabels: true, showText: true
            }'>
          <Button title='点击按钮并观察饼图变化' onPress={() => {
            setPiehartProps({
              pieInnerComponent: () =>
                <Path strokeLinecap="round" stroke="red" strokeWidth="8" d="M5 8 l20 0" />,
              labelsPosition: 'onBorder', showValuesAsLabels: true, showText: true
            })
          }}></Button>
        </TestCase>
        <TestCase itShould='{
              pieInnerComponent: () => <Path strokeLinecap="round" stroke="red" strokeWidth="8" d="M5 8 l20 0" />,
              labelsPosition: "inward",
              showValuesAsLabels: true,
              showText: true
            }'>
          <Button title='点击按钮并观察饼图变化' onPress={() => {
            setPiehartProps({
              pieInnerComponent: () => <Path strokeLinecap="round" stroke="red" strokeWidth="8" d="M5 8 l20 0" />,
              labelsPosition: 'inward',
              showValuesAsLabels: true,
              showText: true
            })
          }}></Button>
        </TestCase>
        <TestCase itShould='{
              pieInnerComponent: () => <Path strokeLinecap="round" stroke="red" strokeWidth="8" d="M5 8 l20 0" />,
              labelsPosition: "mid,
              showValuesAsLabels:true,
              showText: true
            }'>
          <Button title='点击按钮并观察饼图变化' onPress={() => {
            setPiehartProps({
              pieInnerComponent: () => <Path strokeLinecap="round" stroke="red" strokeWidth="8" d="M5 8 l20 0" />,
              labelsPosition: 'mid',
              showValuesAsLabels: true,
              showText: true
            },)
          }}></Button>
        </TestCase>
        <TestCase itShould='{
              pieInnerComponent: () => <Path strokeLinecap="round" stroke="red" strokeWidth="8" d="M5 8 l20 0" />,
              labelsPosition: "outward"
              showValuesAsLabels: true,
              showText: true
            }'>
          <Button title='点击按钮并观察饼图变化' onPress={() => {
            setPiehartProps({
              pieInnerComponent: () => <Path strokeLinecap="round" stroke="red" strokeWidth="8" d="M5 8 l20 0" />,
              labelsPosition: 'outward',
              showValuesAsLabels: true,
              showText: true
            })

          }}></Button>
        </TestCase>
        {
          donutChartprops.map((item, index) => {
            return (
              <TestCase itShould={JSON.stringify(item)} tags={['C_API']}>
                {item.inwardExtraLengthForFocused ? <Text>inwardExtraLengthForFocused:{item.inwardExtraLengthForFocused},请点击圆环图子项，观察选中子项放大后扇形的圆角。</Text> : null}
                <Button title='点击按钮并观察饼图变化' onPress={() => {
                  changeProps(item);
                }}></Button>
              </TestCase>
            )
          })
        }
      </ScrollView>
    </Tester>
  )
}