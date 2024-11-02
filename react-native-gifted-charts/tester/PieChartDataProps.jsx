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
        { shiftTextX: 10, shiftTextY: 20, value: 60, text: '60', focused: true, },
        { value: 70, text: '70', textColor: 'blue', },
        { value: 40, text: '40', textColor: 'black', }
      ],
    },
    {
      showText: true,
      showTextBackground: true,
      sectionAutoFocus: true,
      data: [
        { shiftTextX: 20, shiftTextY: 30, value: 60, text: '60', focused: true, },
        { value: 70, text: '70', textColor: 'blue', },
        { value: 40, text: '40', textColor: 'black', }
      ],
    },
    {
      showText: true,
      showTextBackground: true,
      data: [
        { value: 60, text: '60', textColor: 'red' },
        { value: 70, text: '70', textColor: 'blue' },
        { value: 40, text: '40', textColor: 'black' }
      ],
    },
    {
      showText: true,
      showTextBackground: true,
      data: [
        { value: 60, text: '60',  fontStyle: 'normal' },
        { value: 70, text: '70',  fontStyle: 'italic' },
        { value: 40, text: '40',  fontStyle: 'oblique' }
      ],
    },
    {
      showText: true,
      showTextBackground: true,
      data: [
        { value: 60, text: '60', fontWeight: 'bold' },
        { value: 70, text: '70', fontWeight: 'bolder'},
        { value: 40, text: '40', fontWeight: 'lighter' }
      ],
    },
    {
      showText: true,
      showTextBackground: true,
      data: [
        { value: 60, text: '60', font: 'Arial' },
        { value: 70, text: '70', font: 'Cursive' },
        { value: 40, text: '40', font: 'Comic Sans MS' }
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
      paddingHorizontal:100,
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

  return (
    <Tester>
      <ScrollView >
        {
          pieChartDataProps.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                <PieChart data={pieData} {...item}></PieChart>
              </TestCase>
            )
          })
        }
        <TestCase itShould="{
          showText: true,
          showTextBackground: true,
          data: [
            { value: 60, text: '60', textBackgroundColor: 'red', textBackgroundRadius: 10 },
            { value: 70, text: '70', textBackgroundColor: 'yellow', textBackgroundRadius: 20 },
            { value: 40, text: '40', textBackgroundColor: 'blue', textBackgroundRadius: 30  }
          ],
        }">
          <PieChart data={pieData} {...{
            showText: true,
            showTextBackground: true,
            data: [
              { value: 60, text: '60', textBackgroundColor: 'red', textBackgroundRadius: 10  },
              { value: 70, text: '70', textBackgroundColor: 'yellow', textBackgroundRadius: 20 },
              { value: 40, text: '40', textBackgroundColor: 'blue', textBackgroundRadius: 30 }
            ],
          }}></PieChart>
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
          <PieChart data={pieData} {...{
            showText: true,
            data: [
              { value: 60, text: '60', labelPosition: 'onBorder', onPress: () => { setOnPressText('pieDataItem onPress is trigger text:60') } },
              { value: 70, text: '70', labelPosition: 'outward', onPress: () => { setOnPressText('pieDataItem onPress is trigger text:70') } },
              { value: 40, text: '40', labelPosition: 'inward', onPress: () => { setOnPressText('pieDataItem onPress is trigger text:40') } },
              { value: 30, text: '30', labelPosition: 'mid', onPress: () => { setOnPressText('pieDataItem onPress is trigger text:30') } }
            ],
          }}></PieChart>

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

          <PieChart data={pieData} {...{
            showText: true,
            data: [
              { value: 60, text: '60', pieInnerComponent: () => { return (<Path strokeLinecap='round' stroke='red' strokeWidth='8' d='M5 8 l215 0' />) } },
              { value: 70, text: '70', pieInnerComponent: () => <Path strokeLinecap='round' stroke='black' strokeWidth='8' d='M5 8 l100 0' /> },
              { value: 40, text: '40' }
            ],
          }}></PieChart>
        </TestCase>
      </ScrollView>
    </Tester>
  )
}