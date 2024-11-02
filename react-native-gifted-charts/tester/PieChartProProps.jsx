import { useState } from 'react';
import { PieChartPro } from "react-native-gifted-charts";
import { TestCase, Tester } from "@rnoh/testerino";
import { Button, ScrollView, View, useAnimatedValue } from "react-native";

export default function () {

  const pieData = [
    { value: 54, color: '#177AD5', text: '54%', onPress: () => console.log('ddddd') },
    { value: 30, color: '#79D2DE', text: '30%', onPress: () => setOnPressText('onPress被触发 text:30%') },
    { value: 26, color: '#ED6665', text: '26%', onPress: () => setOnPressText('onPress被触发 text:26%') },
  ];
  const pieChartProProps = [
    { curvedStartEdges: true, donut: true, innerRadius: 30 },
    { curvedStartEdges: false, donut: true, innerRadius: 20 },
    { curvedEndEdges: true, donut: true, innerRadius: 30 },
    { curvedEndEdges: false, donut: true, innerRadius: 20 },
    { ring: true }, { ring: false },
    { strokeWidth: 5 }, { strokeWidth: 10 },
    { strokeWidth: 5, strokeColor: 'red' }, { strokeWidth: 10, strokeColor: 'blue' },
    { strokeWidth: 5, strokeDashArray: [2, 4] }, { strokeWidth: 10, strokeDashArray: [2, 8] },
    { edgesRadius: 10, donut: true }, { edgesRadius: 50, donut: true },
    { semiCircle: true }, { semiCircle: false },
    { textSize: 12 }, { textSize: 18 }, { textSize: 20 },
    { textColor: 'red' }, { textColor: 'black' }, { textColor: 'yellow' },
    { font: 'Arial' }, { font: 'Cursive' },
    { fontWeight: 'bold', }, { fontWeight: 'bolder' }, { fontWeight: 'lighter' }, { fontWeight: '100' }, { fontWeight: '200' },
    { fontStyle: 'normal' }, { fontStyle: 'italic', }, { fontStyle: 'oblique' },
  ]

  const [isAnimated, setIsAnimated] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(500)
  const [isShow, setIsShow] = useState(true)
  const initParams = () => {
    setIsShow(false)
    setIsAnimated(false)
    setAnimationDuration(500)
  }
  return (
    <Tester>
      <ScrollView>
        <TestCase itShould={'isAnimated,animationDuration'} tags={['C_API']}>
          <View style={{ flex: 1, gap: 10 }}>
            <Button title='isAnimated:false' onPress={() => {
              initParams()
              const t = setTimeout(() => {
                clearTimeout(t)
                setIsAnimated(false)
                setIsShow(true)
              }, 500)
            }}></Button>
            <Button title='isAnimated:true' onPress={() => {
              initParams()
              const t = setTimeout(() => {
                clearTimeout(t)
                setIsAnimated(true)
                setIsShow(true)
              }, 500)
            }}></Button>
            <Button title='isAnimated:true,animationDuration:1000' onPress={() => {
              initParams()
              const t = setTimeout(() => {
                clearTimeout(t)
                setIsAnimated(true)
                setAnimationDuration(1000)
                setIsShow(true)
              }, 500)
            }}></Button>
            <Button title='isAnimated:true,animationDuration:2000' onPress={() => {
              initParams()
              const t = setTimeout(() => {
                clearTimeout(t)
                setIsAnimated(true)
                setAnimationDuration(2000)
                setIsShow(true)
              }, 500)
            }}></Button>
          </View>
          <View style={{ height: 246 }}>{isShow ? <PieChartPro data={pieData}
            isAnimated={isAnimated}
            animationDuration={animationDuration}
            curvedStartEdges={true}
            innerRadius={30}
          ></PieChartPro> : null}</View>
        </TestCase>
        {
          pieChartProProps.map((item, index) => {
            return (
              <TestCase itShould={JSON.stringify(item)} key={index + '_' + JSON.stringify(item)} tags={['C_API']}>
                <PieChartPro data={pieData} {...item}></PieChartPro>
              </TestCase>
            )
          })
        }
      </ScrollView>
    </Tester>
  )
}