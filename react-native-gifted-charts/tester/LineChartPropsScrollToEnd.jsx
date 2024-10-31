import { useRef, useState } from 'react';
import { Button, ScrollView, View, Text } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { TestCase, Tester } from "@rnoh/testerino";

export default function () {
  const scrollref = useRef();
  const scrollref1 = useRef();
  const [scrollToIndex, setScrollToIndex] = useState(1)
  const [isShow, setIsShow] = useState(true)
  const [scrollToEnd, setScrollToEnd] = useState(false)
  const [isShowScrollToEnd, setIsShowScrollToEnd] = useState(true)
  const [scrollAnimation,setScrollAnimation] = useState(true)
  return (
    <Tester  style={{paddingBottom:30}}>
      <ScrollView>
        <TestCase itShould='点击按钮设置scrollToIndex'>
          <View style={{ flex: 1, gap: 20 }}>
            <Button title='scrollToIndex:10' onPress={() => {
              setScrollToIndex(10)
              setIsShow(false)
              const t = setTimeout(() => {
                setIsShow(true)
              }, 500)
            }}></Button>
            <Button title='scrollToIndex:1' onPress={() => {
              setScrollToIndex(1)
              setIsShow(false)
              const t = setTimeout(() => {
                setIsShow(true)
              }, 500)
            }}></Button>
          </View>
          <View style={{ height: 246 }}>{isShow ?
            <LineChart
              scrollRef={scrollref1}
              data={[{ value: 50, label: '50' },
              { value: 80, label: '80' },
              { value: 90, label: '90' },
              { value: 70, label: '70' },
              { value: 40, label: '40' },
              { value: 30, label: '30' },
              { value: 20, label: '20' },
              { value: 10, label: '10' }]}
              scrollToIndex={scrollToIndex}></LineChart>
            : null}</View>
        </TestCase>

        <TestCase itShould='点击按钮设置scrollToEnd,scrollAnimation'>
          <View style={{ flex: 1, gap: 20 }}>
            <Button title='scrollToEnd:false' onPress={() => {
              setScrollToEnd(false)
              setIsShowScrollToEnd(false)
              const t = setTimeout(() => {
                setIsShowScrollToEnd(true)
              }, 500)
            }}></Button>
            <Button title='scrollToEnd:true,scrollAnimation: true' onPress={() => {
              setScrollToEnd(true)
              setScrollAnimation(true)
              setIsShowScrollToEnd(false)
              const t = setTimeout(() => {
                setIsShowScrollToEnd(true)
              }, 500)
            }}></Button>
             <Button title='scrollToEnd:true,scrollAnimation: false' onPress={() => {
              setScrollToEnd(true)
              setScrollAnimation(false)
              setIsShowScrollToEnd(false)
              const t = setTimeout(() => {
                setIsShowScrollToEnd(true)
              }, 500)
            }}></Button>
          </View>
          <View style={{ height: 246 }}>{isShowScrollToEnd ?
            <LineChart
              scrollRef={scrollref}
              data={[{ value: 50, label: '50' },
              { value: 80, label: '80' },
              { value: 90, label: '90' },
              { value: 70, label: '70' },
              { value: 40, label: '40' },
              { value: 30, label: '30' },
              { value: 20, label: '20' },
              { value: 10, label: '10' }]}
              scrollToEnd={scrollToEnd}
              scrollAnimation={scrollAnimation}></LineChart>
            : null}</View>
        </TestCase>
      </ScrollView>
    </Tester>
  )
}