import { Button, ScrollView, Easing, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { yAxisSides } from 'gifted-charts-core';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino";
import { G, Circle, Pattern, Rect } from "react-native-svg";
import { useRef, useState } from "react";
import { axesProps, commonPointerProps } from '../commonProps'

const SvgCompont = () => {
  return (<G id="shape">
    <Circle cx="100" cy="100" r="50" stroke="black" />
  </G>)
}
const MyPattern = () => {
  return (
    <Pattern
      id="myPattern"
      patternUnits="userSpaceOnUse"
      width="30"
      height="6">
      <Rect
        x={0}
        y={0}
        height={4}
        width={30}
        rx={2}
        ry={2}
        fill={'#D38600'}
      />
    </Pattern>
  );
};

export default function () {

  const data = [
    { value: 50, label: '50', },
    { value: 60, label: '60', },
    { value: 70, label: '70', },
    { value: 80, label: '80', },
    { value: 90, label: '90', },
    { value: 100, label: '100' },
    { value: 110, label: '110' }];

  const pointerConfigProps = [
    ...commonPointerProps,
    { pointerConfig: { pointerEvents: 'box-none',barTouchable: true},},
    { pointerConfig: { pointerEvents: 'none' ,barTouchable: true} },
    { pointerConfig: { pointerEvents: 'box-only' ,barTouchable: true} },
    { pointerConfig: { pointerEvents: 'auto' ,barTouchable: true} },
    { pointerConfig: { barTouchable: true } },
    { pointerConfig: { barTouchable: false } }
  ]

  return (
    <Tester>
      {/* <TestCase itShould='box-none'>
      <Text>请点击条形图，观察效果</Text>
          <Text></Text>
          <BarChart data={data} {...{pointerEvents:'auto'}}></BarChart>
      </TestCase> */}
      <ScrollView>
        {
          pointerConfigProps.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                <Text>{item?.pointerConfig.activatePointersOnLongPress ? '长按' : '请点击'}条形图，观察效果</Text>
                <BarChart data={data}  {...item} onPress={()=>{item.pointerConfig.pointerEvents || item.pointerConfig.barTouchable?console.log(item):'';}}></BarChart>
              </TestCase>
            )
          })
        }
        <TestCase itShould="{
              pointerConfig: {
                pointerComponent: (items) => {
                  return (
                    <Text style={{ width: 30, height: 15, backgroundColor: '#000000', color: '#ffffff', borderRadius: 5 }}>pointerComponent</Text>
                  )
                }
              }
            }">
          <Text>请点击条形图，观察效果</Text>
          <BarChart data={data} {...{
            pointerConfig: {
              pointerComponent: (items) => {
                return (
                  <Text style={{ width: 30, height: 15, backgroundColor: '#000000', color: '#ffffff', borderRadius: 5 }}>pointerComponent</Text>
                )
              }
            }
          }}></BarChart>
        </TestCase>
        <TestCase itShould="{
              pointerConfig: {
                pointerLabelComponent: (items) => {
                  return (
                    <Text style={{
                      backgroundColor:'black',
                      color: 'white',
                      fontSize: 14,
                      marginBottom: 6,
                      textAlign: 'center',
                    }}>{items[0].value}</Text>
                  )
                }
              }
            }">
          <Text>请点击条形图，观察效果</Text>
          <BarChart data={data} {...{
            pointerConfig: {
              shiftPointerLabelX: 10,
              pointerLabelComponent: (items) => {
                return (
                  <Text style={{
                    backgroundColor: 'black',
                    color: 'white',
                    fontSize: 14,
                    marginBottom: 6,
                    textAlign: 'center',
                  }}>{items[0].value}</Text>
                )
              }
            }
          }}></BarChart>
        </TestCase>
        <TestCase itShould="{
              pointerConfig: {
                shiftPointerLabelX: 10,
                shiftPointerLabelY: 20,
                pointerLabelWidth: 40,
                pointerLabelHeight: 30,
                autoAdjustPointerLabelPosition:true,
                pointerLabelComponent: (items) => {
                  return (
                    <Text style={{
                      backgroundColor: 'black',
                      color: 'white',
                      fontSize: 14,
                      marginBottom: 6,
                      textAlign: 'center',
                    }}>{items[0].value}</Text>
                  )
                }
              }
            }">
          <Text>请点击条形图，观察效果</Text>
          <BarChart data={data} {...{
            pointerConfig: {
              shiftPointerLabelX: 10,
              shiftPointerLabelY: 20,
              pointerLabelWidth: 40,
              pointerLabelHeight: 30,
              autoAdjustPointerLabelPosition: true,
              pointerLabelComponent: (items) => {
                return (
                  <Text style={{
                    backgroundColor: 'black',
                    color: 'white',
                    fontSize: 14,
                    marginBottom: 6,
                    textAlign: 'center',
                  }}>{items[0].value}</Text>
                )
              }
            }
          }}></BarChart>
        </TestCase>
        <TestCase itShould="{
              pointerConfig: {
                shiftPointerLabelX: 10,
                shiftPointerLabelY: 20,
                pointerLabelWidth: 40,
                pointerLabelHeight: 30,
                autoAdjustPointerLabelPosition:false,
                pointerLabelComponent: (items) => {
                  return (
                    <Text style={{
                      backgroundColor: 'black',
                      color: 'white',
                      fontSize: 14,
                      marginBottom: 6,
                      textAlign: 'center',
                    }}>{items[0].value}</Text>
                  )
                }
              }
            }">
          <Text>请点击条形图，观察效果</Text>
          <BarChart data={data} {...{
            pointerConfig: {
              shiftPointerLabelX: 10,
              shiftPointerLabelY: 20,
              pointerLabelWidth: 40,
              pointerLabelHeight: 30,
              autoAdjustPointerLabelPosition: false,
              pointerLabelComponent: (items) => {
                return (
                  <Text style={{
                    backgroundColor: 'black',
                    color: 'white',
                    fontSize: 14,
                    marginBottom: 6,
                    textAlign: 'center',
                  }}>{items[0].value}</Text>
                )
              }
            }
          }}></BarChart>
        </TestCase>
      </ScrollView>
    </Tester >

  )
}