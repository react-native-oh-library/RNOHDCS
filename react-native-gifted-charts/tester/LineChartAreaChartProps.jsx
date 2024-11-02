import { useState, useRef } from 'react';
import { ScrollView } from 'react-native';
import {  Stop, LinearGradient } from 'react-native-svg';
import { LineChart } from 'react-native-gifted-charts';
import { TestCase, Tester } from "@rnoh/testerino";

export default function () {
  const scrollref = useRef();
  const [lineData, setLineData] = useState([{ value: 50, label: '50' }, { value: 80, label: '80' }, { value: 90, label: '90' }, { value: 70, label: '70' }]);
  const areaChartprops = [
    {
      areaChart: true,
      startFillColor: 'red',
      endFillColor: 'blue',
      startOpacity: 1,
      endOpacity: 0.5,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
    },
    // {
    //   areaChart1: true,
    //   startFillColor1: 'green',
    //   endFillColor1: 'blue',
    //   startOpacity1: 1,
    //   endOpacity1: 0.5,
    //   data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
    //   data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
    // },
    // {
    //   areaChart2: true,
    //   startFillColor2: 'gray',
    //   endFillColor2: 'blue',
    //   startOpacity2: 1,
    //   endOpacity1: 0.5,
    //   data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
    //   data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
    // },
    // {
    //   areaChart3: true,
    //   startFillColor3: 'gray',
    //   endFillColor3: 'blue',
    //   startOpacity3: 1,
    //   endOpacity3: 0.5,
    //   data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
    //   data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
    //   data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
    // },
    // {
    //   areaChart4: true,
    //   startFillColor4: 'gray',
    //   endFillColor4: 'blue',
    //   startOpacity4: 1,
    //   endOpacity4: 0.5,
    //   data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
    //   data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
    //   data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
    //   data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
    // },
    // {
    //   areaChart5: true,
    //   startFillColor5: 'gray',
    //   endFillColor5: 'blue',
    //   startOpacity5: 1,
    //   endOpacity5: 0.5,
    //   data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
    //   data2: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
    //   data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
    //   data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
    //   data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    // },
    { areaChart: true, gradientDirection: 'vertical', }, { areaChart: true, gradientDirection: 'horizontal', },
  ]
  return (
    <Tester>
      <ScrollView>
        {
          areaChartprops.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                <LineChart scrollRef={scrollref} data={lineData} {...item}></LineChart>
              </TestCase>
            )
          })
        }
        <TestCase itShould="{
              areaChart: true,
              areaGradientId: 'ggrd',
              areaGradientComponent: () => <LinearGradient
                id='ggrd' 
                x1='0'
                y1='0'
                x2={'0'}
                y2={'1'}>
                <Stop
                  offset='0'
                  stopColor={'blue'}
                />
                <Stop
                  offset='1'
                  stopColor={'yellow'}
                />
              </LinearGradient>
            }">
          <LineChart scrollRef={scrollref} data={lineData} {...{
            areaChart: true,
            areaGradientId: 'ggrd',
            areaGradientComponent: () => <LinearGradient
              id="ggrd"
              x1="0"
              y1="0"
              x2={'0'}
              y2={'1'}>
              <Stop
                offset="0"
                stopColor={'blue'}
              />
              <Stop
                offset="1"
                stopColor={'yellow'}
              />
            </LinearGradient>
          }}></LineChart>
        </TestCase>
      </ScrollView>
    </Tester>
  )
}