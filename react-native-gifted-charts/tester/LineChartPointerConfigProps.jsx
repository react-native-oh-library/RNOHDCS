import { useState, useRef } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { Path, Stop, LinearGradient } from 'react-native-svg';
import { LineChart } from 'react-native-gifted-charts';
import { CurveType } from 'gifted-charts-core'
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";
import { axesProps, commonPointerProps } from "../commonProps";

export default function () {
  const scrollref = useRef();
  const [lineData, setLineData] = useState([{ value: 50, label: '50' }, { value: 80, label: '80' }, { value: 90, label: '90' }, { value: 70, label: '70' }]);
  
  const data1 = [  {value: 10}, {value: 20}, {value: 40}, {value: 60}, ];
  const data2 = [  {value: 50}, {value: 80}, {value: 90}, {value: 70}, ];
  const pointerConfigProps = [
    ...commonPointerProps,
    { pointerConfig: { pointer1Color: 'green' }, }, { pointerConfig: { pointer1Color: 'gray' }, },
    {
      pointerConfig: {
        pointer1Color: 'yellow',
        pointer2Color: 'green',
        pointer3Color: 'blue',
        pointer4Color: 'gray',
        pointer5Color: 'black'
      },
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data1: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
    {
      pointerConfig: {
        hidePointer1: true,
      },
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
    },
    {
      pointerConfig: {
        hidePointer2: true,
      },
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
    },
    {
      pointerConfig: {
        hidePointer3: true,
      },
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
    },
    {
      pointerConfig: {
        hidePointer4: true,
      },
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
    },
    {
      pointerConfig: {
        hidePointer5: true,
      },
      data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    },
  ]
  const aa ={      
    pointerConfig: {
      pointerColorsForDataSet: ['green', 'yellow', 'blue', 'blue', 'black'],
    },
    dataSet:[
        {data : [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 },] },
        {data : [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }] }
    ],
}

  return (
    <Tester>
      <ScrollView>
        {
          pointerConfigProps.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                <Text>请点击图形上显示的数据点，观察效果</Text>
                <LineChart scrollRef={scrollref} data={lineData} {...item}></LineChart>
              </TestCase>
            )
          })
        }
        <TestCase itShould={`pointerConfig= { {pointerColorsForDataSet: ['green', 'yellow', 'blue', 'blue', 'black']}}
            dataSet = {[
              {data : [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 },] },
              {data : [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }] }
            ]}`} tags={['C_API']}>
          <Text>请点击第一个顶点上显示的数据点，观察效果</Text>
          <LineChart pointerConfig= { {pointerColorsForDataSet: ['green', 'yellow', 'blue', 'blue', 'black']}}
            dataSet = {[
              {data : [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 },] },
              {data : [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }] }
            ]}
          ></LineChart>
        </TestCase>
        

        <TestCase itShould={`data={${JSON.stringify(data1)}} secondaryData={${JSON.stringify(data2)}} pointerConfig= { {secondaryPointerColor: 'gray'} }`} tags={['C_API']}>
          <Text>请点击图形上显示的数据点，观察效果</Text>
          <LineChart scrollRef={scrollref} data={data1} secondaryData={data2} pointerConfig= { {secondaryPointerColor: 'gray'} } ></LineChart>
        </TestCase>
        <TestCase itShould={`data={${JSON.stringify(data1)}} secondaryData={${JSON.stringify(data2)}} pointerConfig= { {secondaryPointerColor: 'green'} }`} tags={['C_API']}>
          <Text>请点击图形上显示的数据点，观察效果</Text>
          <LineChart scrollRef={scrollref} data={data1} secondaryData={data2} pointerConfig= { {secondaryPointerColor: 'green'} } ></LineChart>
        </TestCase>
        <TestCase itShould={`data={${JSON.stringify(data1)}} secondaryData={${JSON.stringify(data2)}} pointerConfig= { {hideSecondaryPointer: true} }`} tags={['C_API']}>
          <Text>请点击图形上显示的数据点，观察效果</Text>
          <LineChart scrollRef={scrollref} data={data1} secondaryData={data2} pointerConfig= { {hideSecondaryPointer: true} } ></LineChart>
        </TestCase>
        <TestCase itShould={`data={${JSON.stringify(data1)}} secondaryData={${JSON.stringify(data2)}} pointerConfig= { {hideSecondaryPointer: false} }`} tags={['C_API']}>
          <Text>请点击图形上显示的数据点，观察效果</Text>
          <LineChart scrollRef={scrollref} data={data1} secondaryData={data2} pointerConfig= { {hideSecondaryPointer: false} } ></LineChart>
        </TestCase>

        <TestCase itShould="{
              pointerConfig: {
                pointerComponent: (items) => {
                  return (
                    <Text style={{ width: 30, height: 15, backgroundColor: '#000000', color: '#ffffff', borderRadius: 5 }}>pointerComponent</Text>
                  )
                }
              }
            }">
          <Text>请点击图形上显示的数据点，观察效果</Text>
          <LineChart scrollRef={scrollref} data={lineData} {...{
            pointerConfig: {
              pointerComponent: (items) => {
                return (
                  <Text style={{ width: 30, height: 15, backgroundColor: '#000000', color: '#ffffff', borderRadius: 5 }}>pointerComponent</Text>
                )
              }
            }
          }}></LineChart>
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
          <Text>请点击图形上显示的数据点，观察效果</Text>
          <LineChart scrollRef={scrollref} data={lineData} {...{
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
          }}></LineChart>

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
          <Text>请点击图形上显示的数据点，观察效果</Text>

          <LineChart scrollRef={scrollref} data={lineData} {...{
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
          }}></LineChart>

        </TestCase>
      </ScrollView>
    </Tester>
  )
}