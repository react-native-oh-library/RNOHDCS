import { Button, ScrollView, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { Tester, TestCase } from "@rnoh/testerino";
import { useState } from "react";

export default function () {
  const [pressProText, setPressProText] = useState('');
  const [scrollAnimation, setScrollAnimation] = useState(false)
  const [scrollToEnd, setScrollToEnd] = useState(true)
  const [scrollEventThrottle, setScrollEventThrottle] = useState(0)
  const [isShow, setIsShow] = useState(true)
  const [endTime, setEndTime] = useState([])
  const [scrollToIndex, setScrollToIndex] = useState(0)


  const data = [
    { value: 50, label: '50', },
    { value: 60, label: '60', },
    { value: 70, label: '70', },
    { value: 80, label: '80', },
    { value: 90, label: '90', },
    { value: 100, label: '100' },
    { value: 110, label: '110' },
    { value: 120, label: '120' },
    { value: 130, label: '130' }];

  const barChartProps = [
    { disableScroll: true }, { disableScroll: false },
    { showScrollIndicator: true, indicatorColor: 'white' }, { showScrollIndicator: false },
    { showScrollIndicator: true, indicatorColor: 'black' },
    { showScrollIndicator: true, indicatorColor: 'default' },
    { autoShiftLabels: true, data: [{ value: -5, label: 5 }, { value: 10, label: 20 }, { value: 15, label: 15 }] }, 
    { autoShiftLabels: false, data: [{ value: -5, label: 5 }, { value: 10, label: 20 }, { value: 15, label: 15 }]},
  ]

  const initParams = () => {
    setIsShow(false)
    setScrollAnimation(false)
    setScrollToEnd(false)
    setScrollEventThrottle(0)
    setScrollToIndex(0)
    setEndTime([])
  }

  return (
    <Tester>
      <ScrollView>
        <TestCase itShould="scrollAnimation scrollToEnd">
          <View style={{ flex: 1, gap: 10 }}>
            <Button title="scrollAnimation:true,scrollToEnd:true" onPress={() => {
              initParams()
              const t = setTimeout(() => {
                clearTimeout(t)
                setScrollAnimation(true)
                setScrollToEnd(true)
                setIsShow(true)
              }, 500)
            }}></Button>
            <Button title="scrollAnimation:false,scrollToEnd:true" onPress={() => {
              initParams()
              const t = setTimeout(() => {
                clearTimeout(t)
                setScrollAnimation(false)
                setScrollToEnd(true)
                setIsShow(true)
              }, 500)
            }}></Button>
            <Button title="scrollToEnd:false" onPress={() => {
              initParams()
              const t = setTimeout(() => {
                clearTimeout(t)
                setScrollToEnd(false)
                setIsShow(true)
              }, 500)
            }}></Button>
            <Button title="scrollEventThrottle:2000" onPress={() => {
              initParams()
              const t = setTimeout(() => {
                clearTimeout(t)
                setScrollEventThrottle(1000)
                setIsShow(true)
              }, 500)
            }}></Button>
            <Button title="scrollEventThrottle:300" onPress={() => {
              initParams()
              const t = setTimeout(() => {
                clearTimeout(t)
                setScrollEventThrottle(300)
                setIsShow(true)
              }, 500)
            }}></Button>

            <Button title="scrollAnimation:true,scrollToIndex:1" onPress={() => {
              initParams()
              const t = setTimeout(() => {
                clearTimeout(t)
                setScrollToIndex(1)
                setScrollAnimation(true)
                setIsShow(true)
              }, 500)
            }}></Button>
            <Button title="scrollAnimation:true,scrollToIndex:7" onPress={() => {
              initParams()
              const t = setTimeout(() => {
                clearTimeout(t)
                setScrollToIndex(7)
                setScrollAnimation(true)
                setIsShow(true)
              }, 500)
            }}></Button>
            <Text style={{ color: 'gray' }}>当点击scrollEventThrottle按钮时,请左右滑动图触发onScroll事件,根据显示时间戳来查看事件是否延迟</Text>
            {scrollEventThrottle ? <View><Text>滚动事件时间戳:{endTime.join(',')}</Text></View> : null}
          </View>
          <View style={{ height: 246 }}>
            {isShow ?
              <BarChart
                data={data}
                scrollAnimation={scrollAnimation}
                scrollToEnd={scrollToEnd}
                scrollEventThrottle={scrollEventThrottle}
                scrollToIndex={scrollToIndex}
                onScroll={(e) => {
                  let t = [...endTime]
                  t.push(new Date().getTime().toString())
                  setEndTime(t)
                }}
              ></BarChart>
              : null}
          </View>
        </TestCase>
        {
          barChartProps.map((item, index) => {
            return (<TestCase itShould={JSON.stringify(item)} key={JSON.stringify(item)} tags={['C_API']}>
              {item.disableScroll ? <Text>请左右滑动图，为true,不允左右滚动</Text> : null}
              {item.showScrollIndicator ? <Text>请左右滑动图，为true,底部会出现滚动条</Text> : null}
              <BarChart data={data}  {...item}></BarChart>
            </TestCase>)
          })
        }
        <TestCase itShould={'请左右滚动条形图触发onScroll方法'} tags={['C_API']}>
          <Text>{pressProText}</Text>
          <BarChart data={data}  {...{
            onScroll: () => {
              setPressProText('触发onScroll方法');
            }
          }}></BarChart>
        </TestCase>
        <TestCase itShould={'请左右滚动条形图触发onMomentumScrollEnd方法'} tags={['C_API']}>
          <Text>{pressProText}</Text>
          <BarChart data={data}  {...{
            onMomentumScrollEnd: () => {
              setPressProText('触发onMomentumScrollEnd方法');
            }
          }}></BarChart>
        </TestCase>
      </ScrollView>
    </Tester >

  )
}