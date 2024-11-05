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
  const focusprops = [
    { focusedDataPointIndex: 1, }, { focusedDataPointIndex: 2, },
    { focusedDataPointIndex: 1, focusedDataPointShape: 'circular' },
    { focusedDataPointIndex: 2, focusedDataPointShape: 'rectangular' },
    { focusedDataPointIndex: 1, focusedDataPointWidth: 20, focusedDataPointHeight: 20, focusedDataPointColor: 'red', focusedDataPointRadius: 20, },
    { focusedDataPointIndex: 2, focusedDataPointShape: 'rectangular', focusedDataPointWidth: 20, focusedDataPointHeight: 20, focusedDataPointColor: 'blue', },
    { showDataPointOnFocus: true, areaChart: true, focusEnabled: true, },
    { showDataPointOnFocus: false, areaChart: true, focusEnabled: false, },
    { showStripOnFocus: true, showDataPointOnFocus: true, areaChart: true, focusEnabled: true, },
    { showStripOnFocus: false, showDataPointOnFocus: true, areaChart: true, focusEnabled: true, },
    { showTextOnFocus: true, showDataPointOnFocus: true, areaChart: true, focusEnabled: true, showValuesAsDataPointsText: true },
    { showTextOnFocus: false, showDataPointOnFocus: true, areaChart: true, focusEnabled: true, showValuesAsDataPointsText: true },
    { stripHeight: 20, stripWidth: 30, stripColor: 'red', stripOpacity: 0.9, showStripOnFocus: true, areaChart: true, focusEnabled: true },
    { stripHeight: 60, stripWidth: 40, stripColor: 'green', stripOpacity: 0.5, showStripOnFocus: true, areaChart: true, focusEnabled: true },
  ]

  const [pressText, setPressText] = useState('');

  return (
    <Tester>
      <ScrollView>
        {
          focusprops.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                <LineChart scrollRef={scrollref} data={lineData} {...item}></LineChart>
              </TestCase>
            )
          })
        }
        <TestCase itShould="{
              focusEnabled:true,
              unFocusOnPressOut: true,
              onFocus: () => {
                setPressText('onFocus被触发');
              }
            }">
          <Text>请点击图形上显示的数据点触发onFocus，{pressText}</Text>
          <LineChart scrollRef={scrollref} data={lineData} {...{
            focusEnabled: true,
            unFocusOnPressOut: true,
            onFocus: () => {
              setPressText('onFocus被触发');
            }
          }}></LineChart>
        </TestCase>
      </ScrollView>
    </Tester>
  )
}