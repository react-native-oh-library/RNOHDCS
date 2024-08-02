import { useState, useRef } from 'react';
import { ScrollView, Text } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { TestCase, Tester } from "@rnoh/testerino";

export default function () {
  const scrollref = useRef();
  const [pressText, setPressText] = useState('')
  const [reachedText, setReachedText] = useState('');
  const [lineData, setLineData] = useState([{ value: 50, label: '50' }, { value: 80, label: '80' }, { value: 90, label: '90' }, { value: 70, label: '70' }]);
  const LineChartDataProps = [
    { data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }] },
    { data: [{ value: 50, label: '50' }, { value: 80, label: '80' }, { value: 90, label: '90' }, { value: 70, label: '70' }] },
    {
      data: [
        { value: 50, label: '50', labelTextStyle: { color: 'red', fontSize: 14 } },
        { value: 80, label: '80', labelTextStyle: { color: 'blue', fontSize: 16 } },
        { value: 90, label: '90', labelTextStyle: { color: 'blue', fontSize: 18 } },
        { value: 70, label: '70', labelTextStyle: { color: 'blue', fontSize: 20 } }]
    },
    {
      data: [
        { value: 50, yAxisLabelText: '50' },
        { value: 80, yAxisLabelText: '80' },
        { value: 90, yAxisLabelText: '90' },
        { value: 70, yAxisLabelText: '70' }]
    },
    {
      data: [
        { value: 50, dataPointText: '50' },
        { value: 80, dataPointText: '80' },
        { value: 90, dataPointText: '90' },
        { value: 70, dataPointText: '70' }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', textShiftX: 5 },
        { value: 80, dataPointText: '80', textShiftX: 10 },
        { value: 90, dataPointText: '90', textShiftX: 15 },
        { value: 70, dataPointText: '70', textShiftX: 20 }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', textShiftY: 5 },
        { value: 80, dataPointText: '80', textShiftY: 10 },
        { value: 90, dataPointText: '90', textShiftY: 15 },
        { value: 70, dataPointText: '70', textShiftY: 20 }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', textColor: 'red', textFontSize: 14 },
        { value: 80, dataPointText: '80', textColor: 'blue', textFontSize: 16 },
        { value: 90, dataPointText: '90', textColor: 'pink', textFontSize: 18 },
        { value: 70, dataPointText: '70', textColor: 'black', textFontSize: 20 }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', dataPointHeight: 10, dataPointWidth: 10, dataPointColor: 'red', dataPointShape: 'circular' },
        { value: 80, dataPointText: '80', dataPointHeight: 15, dataPointWidth: 15, dataPointColor: 'blue', dataPointShape: 'circular' },
        { value: 90, dataPointText: '90', dataPointHeight: 20, dataPointWidth: 20, dataPointColor: 'yellow', dataPointShape: 'circular' },
        { value: 70, dataPointText: '70', dataPointHeight: 25, dataPointWidth: 25, dataPointColor: 'black', dataPointShape: 'circular' }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', dataPointHeight: 10, dataPointWidth: 10, dataPointColor: 'red', dataPointShape: 'rectangular' },
        { value: 80, dataPointText: '80', dataPointHeight: 15, dataPointWidth: 15, dataPointColor: 'blue', dataPointShape: 'rectangular' },
        { value: 90, dataPointText: '90', dataPointHeight: 20, dataPointWidth: 20, dataPointColor: 'yellow', dataPointShape: 'rectangular' },
        { value: 70, dataPointText: '70', dataPointHeight: 25, dataPointWidth: 25, dataPointColor: 'black', dataPointShape: 'rectangular' }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', dataPointHeight: 10, dataPointWidth: 10, dataPointColor: 'red', dataPointShape: 'rectangular', hideDataPoint: true, },
        { value: 80, dataPointText: '80', dataPointHeight: 15, dataPointWidth: 15, dataPointColor: 'blue', dataPointShape: 'rectangular', hideDataPoint: false },
        { value: 90, dataPointText: '90', dataPointHeight: 20, dataPointWidth: 20, dataPointColor: 'yellow', dataPointShape: 'rectangular', hideDataPoint: true },
        { value: 70, dataPointText: '70', dataPointHeight: 25, dataPointWidth: 25, dataPointColor: 'black', dataPointShape: 'rectangular', hideDataPoint: false }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', showVerticalLine: true, },
        { value: 80, dataPointText: '80', showVerticalLine: false },
        { value: 90, dataPointText: '90', showVerticalLine: true },
        { value: 70, dataPointText: '70', showVerticalLine: false }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', showVerticalLine: true, verticalLineUptoDataPoint: true, },
        { value: 80, dataPointText: '80', showVerticalLine: true, verticalLineUptoDataPoint: true, },
        { value: 90, dataPointText: '90', showVerticalLine: true, verticalLineUptoDataPoint: true, },
        { value: 70, dataPointText: '70', showVerticalLine: true, verticalLineUptoDataPoint: true, }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', showVerticalLine: true, verticalLineUptoDataPoint: false, },
        { value: 80, dataPointText: '80', showVerticalLine: true, verticalLineUptoDataPoint: false, },
        { value: 90, dataPointText: '90', showVerticalLine: true, verticalLineUptoDataPoint: false, },
        { value: 70, dataPointText: '70', showVerticalLine: true, verticalLineUptoDataPoint: false, }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', showVerticalLine: true, verticalLineColor: 'red', },
        { value: 80, dataPointText: '80', showVerticalLine: true, verticalLineColor: 'blue', },
        { value: 90, dataPointText: '90', showVerticalLine: true, verticalLineColor: 'yellow', },
        { value: 70, dataPointText: '70', showVerticalLine: true, verticalLineColor: 'black', }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', showVerticalLine: true, verticalLineThickness: 5, },
        { value: 80, dataPointText: '80', showVerticalLine: true, verticalLineThickness: 10, },
        { value: 90, dataPointText: '90', showVerticalLine: true, verticalLineThickness: 15, },
        { value: 70, dataPointText: '70', showVerticalLine: true, verticalLineThickness: 20, }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', dataPointLabelWidth: 15, },
        { value: 80, dataPointText: '80', dataPointLabelWidth: 20, },
        { value: 90, dataPointText: '90', dataPointLabelWidth: 25, },
        { value: 70, dataPointText: '70', dataPointLabelWidth: 30, }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', dataPointLabelWidth: 15, showStrip: true, },
        { value: 80, dataPointText: '80', dataPointLabelWidth: 20, showStrip: false, },
        { value: 90, dataPointText: '90', dataPointLabelWidth: 25, showStrip: false, },
        { value: 70, dataPointText: '70', dataPointLabelWidth: 30, showStrip: true, }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', dataPointLabelWidth: 15, showStrip: true, stripHeight: 50, stripWidth: 5, stripColor: 'red' },
        { value: 80, dataPointText: '80', dataPointLabelWidth: 20, showStrip: true, stripHeight: 65, stripWidth: 8, stripColor: 'blue' },
        { value: 90, dataPointText: '90', dataPointLabelWidth: 25, showStrip: true, stripHeight: 80, stripWidth: 10, stripColor: 'yellow' },
        { value: 70, dataPointText: '70', dataPointLabelWidth: 30, showStrip: true, stripHeight: 105, stripWidth: 14, stripColor: 'black' }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', dataPointLabelWidth: 15, showStrip: true, stripHeight: 50, stripWidth: 5, stripColor: 'red', stripOpacity: 0.1 },
        { value: 80, dataPointText: '80', dataPointLabelWidth: 20, showStrip: true, stripHeight: 65, stripWidth: 8, stripColor: 'blue', stripOpacity: 0.5 },
        { value: 90, dataPointText: '90', dataPointLabelWidth: 25, showStrip: true, stripHeight: 80, stripWidth: 10, stripColor: 'yellow', stripOpacity: 0.8 },
        { value: 70, dataPointText: '70', dataPointLabelWidth: 30, showStrip: true, stripHeight: 105, stripWidth: 14, stripColor: 'black' }]
    },
    // pointerShiftX、pointerShiftY未生效，配置pointerConfig才生效
    {
      data: [
        { value: 50, dataPointText: '50', pointerShiftX: 10 },
        { value: 80, dataPointText: '80', pointerShiftX: 15 },
        { value: 90, dataPointText: '90', pointerShiftX: 20 },
        { value: 70, dataPointText: '70', pointerShiftX: 25 }]
    },
    {
      data: [
        { value: 50, dataPointText: '50', pointerShiftY: 10 },
        { value: 80, dataPointText: '80', pointerShiftY: 15 },
        { value: 90, dataPointText: '90', pointerShiftY: 20 },
        { value: 70, dataPointText: '70', pointerShiftY: 25 }]
    },
  ]

  return (
    <Tester>
      <ScrollView>
        {
          LineChartDataProps.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                <LineChart data={lineData} {...item}></LineChart>
              </TestCase>
            )
          })
        }
        <TestCase itShould="data: [{
                value: 50, label: '50', onPress: () => {
                  setPressText('onPress被触发 text:50')
                }
              }, {
                value: 80, label: '80', onPress: () => {
                  setPressText('onPress被触发 text:80')
                }
              }, {
                value: 90, label: '90', onPress: () => {
                  setPressText('onPress被触发 text:90')
                }
              }]">
          <Text>请点击这项图子项出发onPress方法，{pressText}</Text>
          <LineChart scrollref={scrollref} data={lineData} {...{
            data: [{
              value: 50, label: '50', onPress: () => {
                setPressText('onPress被触发 text:50')
              }
            }, {
              value: 80, label: '80', onPress: () => {
                setPressText('onPress被触发 text:80')
              }
            }, {
              value: 90, label: '90', onPress: () => {
                setPressText('onPress被触发 text:90')
              }
            }]
          }}></LineChart>
        </TestCase>
        <TestCase itShould="data: [{
                value: 50, label: '50', labelComponent: () => <Text style={{ color: 'red' }}>50</Text>
              }, {
                value: 80, label: '80', labelComponent: () => <Text style={{ color: 'green' }}>80</Text>
              }, {
                value: 90, label: '90', labelComponent: () => <Text style={{ color: 'yellow' }}>90</Text>
              }]">

          <LineChart data={lineData} {...{
            data: [{
              value: 50, label: '50', labelComponent: () => <Text style={{ color: 'red' }}>50</Text>
            }, {
              value: 80, label: '80', labelComponent: () => <Text style={{ color: 'green' }}>80</Text>
            }, {
              value: 90, label: '90', labelComponent: () => <Text style={{ color: 'yellow' }}>90</Text>
            }]
          }}></LineChart>
        </TestCase>
        <TestCase itShould="{
              data: [
                { value: 50, dataPointText: '50', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>50</Text>, dataPointLabelWidth: 10,  },
                { value: 80, dataPointText: '80', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>80</Text>, dataPointLabelWidth: 40,  },
                { value: 90, dataPointText: '90', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>90</Text>, dataPointLabelWidth: 25,  },
                { value: 70, dataPointText: '70', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>70</Text>, dataPointLabelWidth: 30,  }]
            }">

          <LineChart data={lineData} {...{
            data: [
              { value: 50, dataPointText: '50', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>50</Text>, dataPointLabelWidth: 10, },
              { value: 80, dataPointText: '80', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>80</Text>, dataPointLabelWidth: 40, },
              { value: 90, dataPointText: '90', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>90</Text>, dataPointLabelWidth: 25, },
              { value: 70, dataPointText: '70', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>70</Text>, dataPointLabelWidth: 30, }]
          }}></LineChart>
        </TestCase>
        <TestCase itShould="{
              data: [
                { value: 50, dataPointText: '50', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>50</Text>, dataPointLabelWidth: 10, dataPointLabelShiftX: 10, dataPointLabelShiftY: 10 },
                { value: 80, dataPointText: '80', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>80</Text>, dataPointLabelWidth: 40, dataPointLabelShiftX: 15, dataPointLabelShiftY: 15 },
                { value: 90, dataPointText: '90', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>90</Text>, dataPointLabelWidth: 25, dataPointLabelShiftX: 20, dataPointLabelShiftY: 20 },
                { value: 70, dataPointText: '70', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>70</Text>, dataPointLabelWidth: 30, dataPointLabelShiftX: 25, dataPointLabelShiftY: 25 }]
            }">

          <LineChart data={lineData} {...{
            data: [
              { value: 50, dataPointText: '50', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>50</Text>, dataPointLabelWidth: 10, dataPointLabelShiftX: 10, dataPointLabelShiftY: 10 },
              { value: 80, dataPointText: '80', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>80</Text>, dataPointLabelWidth: 40, dataPointLabelShiftX: 15, dataPointLabelShiftY: 15 },
              { value: 90, dataPointText: '90', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>90</Text>, dataPointLabelWidth: 25, dataPointLabelShiftX: 20, dataPointLabelShiftY: 20 },
              { value: 70, dataPointText: '70', dataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>70</Text>, dataPointLabelWidth: 30, dataPointLabelShiftX: 25, dataPointLabelShiftY: 25 }]
          }}></LineChart>

        </TestCase>
        <TestCase itShould="{
              focusEnabled: true,
              data: [
                { value: 50, dataPointText: '50', focusedDataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>50</Text>,},
                { value: 80, dataPointText: '80', focusedDataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>80</Text>,  },
                { value: 90, dataPointText: '90', focusedDataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>90</Text>,},
                { value: 70, dataPointText: '70', focusedDataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>70</Text>, }]
            }">
          <Text>请点击图形上显示的数据点，观察效果</Text>
          <LineChart scrollref={scrollref} data={lineData} {...{
            focusEnabled: true,
            data: [
              { value: 50, focusedDataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>50</Text>, },
              { value: 80, focusedDataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>80</Text>, },
              { value: 90, focusedDataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>90</Text>, },
              { value: 70, focusedDataPointLabelComponent: () => <Text style={{ backgroundColor: 'red' }}>70</Text>, }]
          }}></LineChart>
        </TestCase>
      </ScrollView>
    </Tester>
  )
}