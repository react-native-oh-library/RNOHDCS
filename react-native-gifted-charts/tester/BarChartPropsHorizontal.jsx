import { Button, ScrollView, Easing, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { yAxisSides } from 'gifted-charts-core';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino";
import { G, Circle, Pattern, Rect } from "react-native-svg";
import { useRef, useState } from "react";
import { axesProps, commonPointerProps } from '../commonProps'

export default function () {

  const data = [
    { value: 50, label: '50', },
    { value: 60, label: '60', },
    { value: 70, label: '70', },
    { value: 80, label: '80', },
    { value: 90, label: '90', },
    { value: 100, label: '100' },
    { value: 110, label: '110' }];

  const barChartProps = [
    { horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { shiftX: -50, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { shiftX: 0, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { shiftX: 50, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { shiftY: -20, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { shiftY: 0, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { shiftY: 20, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { rtl: true, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { rotateYAxisTexts: 5, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { rotateYAxisTexts: 20, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { yAxisAtTop: true, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { yAxisAtTop: false, horizontal: true, data: [{ value: 50 }, { value: 60 }] },
    { intactTopLabel: true, horizontal: true, data: [{ value: 50 }, { value: 60 }], showValuesAsTopLabel: true },
    { intactTopLabel: false, horizontal: true, data: [{ value: 50 }, { value: 60 }], showValuesAsTopLabel: true },
  ]

  return (
    <Tester>
      <ScrollView>
        {
          barChartProps.map((item, index) => {
            return (<TestCase itShould={JSON.stringify(item)} key={JSON.stringify(item)} tags={['C_API']}>
              <BarChart data={data}  {...item}></BarChart>
            </TestCase>)
          })
        }
      </ScrollView>
    </Tester >

  )
}