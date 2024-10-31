import { useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { Path } from 'react-native-svg';
import { PieChart } from 'react-native-gifted-charts';
import { TestCase, Tester } from "@rnoh/testerino";

const pieData = [{ value: 50 }, { value: 20 }, { value: 40 }];

export default function () {

  const pieChartProps = [
    { radius: 30 }, { radius: 55 }, { radius: 80 },
    { initialAngle: 20 }, { initialAngle: 40 },
    { isThreeD: true }, { isThreeD: false },
    { showGradient: true, }, { showGradient: false },
    { focusOnPress: true, }, { focusOnPress: false },
    { focusOnPress: true, toggleFocusOnPress: true, }, { focusOnPress: true, toggleFocusOnPress: false },
    { focusOnPress: true, extraRadius: 10 }, { focusOnPress: true, extraRadius: 28 },
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
  return (
    <Tester>
      <ScrollView >
        {
          pieChartProps.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                <PieChart data={pieData} {...item}></PieChart>
              </TestCase>
            )
          })
        }
        <TestCase itShould='{ centerLabelComponent: () => <Text>centerLabelComponent</Text> }'>
          <PieChart data={pieData} {...{ centerLabelComponent: () => <Text>centerLabelComponent</Text> }}></PieChart>
        </TestCase>
        <TestCase itShould='{
              pieInnerComponent: () =>
                <Path strokeLinecap="round" stroke="red" strokeWidth="8" d="M5 8 l20 0" />,
              labelsPosition: "onBorder", showValuesAsLabels: true, showText: true
            }'>
          <PieChart data={pieData} {...{
            pieInnerComponent: () =>
              <Path strokeLinecap="round" stroke="red" strokeWidth="8" d="M5 8 l20 0" />,
            labelsPosition: 'onBorder', showValuesAsLabels: true, showText: true
          }}></PieChart>

        </TestCase>
        <TestCase itShould='{
              pieInnerComponent: () => <Path strokeLinecap="round" stroke="red" strokeWidth="8" d="M5 8 l20 0" />,
              labelsPosition: "inward",
              showValuesAsLabels: true,
              showText: true
            }'>
          <PieChart data={pieData} {...{
            pieInnerComponent: () => <Path strokeLinecap="round" stroke="red" strokeWidth="8" d="M5 8 l20 0" />,
            labelsPosition: 'inward',
            showValuesAsLabels: true,
            showText: true
          }}></PieChart>
        </TestCase>
        <TestCase itShould='{
              pieInnerComponent: () => <Path strokeLinecap="round" stroke="red" strokeWidth="8" d="M5 8 l20 0" />,
              labelsPosition: "mid,
              showValuesAsLabels:true,
              showText: true
            }'>
          <PieChart data={pieData} {...{
            pieInnerComponent: () => <Path strokeLinecap="round" stroke="red" strokeWidth="8" d="M5 8 l20 0" />,
            labelsPosition: 'mid',
            showValuesAsLabels: true,
            showText: true
          }}></PieChart>

        </TestCase>
        <TestCase itShould='{
              pieInnerComponent: () => <Path strokeLinecap="round" stroke="red" strokeWidth="8" d="M5 8 l20 0" />,
              labelsPosition: "outward"
              showValuesAsLabels: true,
              showText: true
            }'>
          <PieChart data={pieData} {...{
            pieInnerComponent: () => <Path strokeLinecap="round" stroke="red" strokeWidth="8" d="M5 8 l20 0" />,
            labelsPosition: 'outward',
            showValuesAsLabels: true,
            showText: true
          }}></PieChart>

        </TestCase>
      </ScrollView>
    </Tester>
  )
}