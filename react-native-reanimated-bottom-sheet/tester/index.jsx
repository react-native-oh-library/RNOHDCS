import React from "react";
import { View, Button, ScrollView, Text, SafeAreaView, StyleSheet } from "react-native";
import { Tester, TestCase } from "@rnoh/testerino";
import { GestureHandlerRootView, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import BottomSheet from "reanimated-bottom-sheet";


export default function () {
  const sheetRef = React.useRef(null);
  const panRef = React.useRef(null);
  const waitforRef = React.useRef(null);
  const tapRef = React.useRef(null);
  const simultaneousRef = React.useRef(null);
  const [bottomSheetProps, setBottomSheetPpros] = React.useState({});
  const [isShow, setIsShow] = React.useState(true)
  const [onOpenText, setOnOpenText] = React.useState('');
  const [onCloseText, setOnCloseText] = React.useState('');
  const [tapText, setTapText] = React.useState('');

  const opacity = useSharedValue(1);
  const headerPosition = useSharedValue(0);
  const contentPosition = useSharedValue(0);

  const showProps = (params) => {
    setIsShow(false);
    let t = setTimeout(() => {
      clearTimeout(t);
      setIsShow(true)
      setBottomSheetPpros({ ...params })
    }, 500)
  }

  const renderContent = () => (
    <View
      style={{
        padding: 16,
      }}>
      <Text>this is content</Text>
    </View>
  );

  const renderHeader = () => (
    <View
      style={{
        padding: 16,
      }}>
      <Text>title</Text>
    </View>
  )

  const Lorem = () => (
    <View style={{ height: 500, backgroundColor: 'green' }}>
      <Text>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque corrupti quos dolores et quas
        molestias excepturi sint occaecati cupiditate non provident, similique
        sunt in culpa qui officia deserunt mollitia animi, id est laborum et
        dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
        impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
        assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
        officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
        repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
        tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
        consequatur aut perferendis doloribus asperiores repellat. At vero eos et
        accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias
        excepturi sint occaecati cupiditate non provident, similique sunt in culpa
        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
        harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
        cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
        maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
        repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
        necessitatibus saepe eveniet ut et voluptates repudiandae sint et
        molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
        delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
        perferendis doloribus asperiores repellat.
      </Text>
    </View>
  )

  const renderHeader1 = name => (
    <View
      style={{
        width: '100%',
        backgroundColor: 'blue',
        height: 40,
        borderWidth: 2,
      }}
    >
      <Text>{name}</Text>
    </View>
  )
  const renderInner = () => (
    <View>
      <Animated.View>
        {renderHeader1('one')}
      </Animated.View>
      <Lorem></Lorem>
    </View>
  )

  const renderContent2 = () => {
    return (
      <TapGestureHandler ref={simultaneousRef} onHandlerStateChange={() => {
        setTapText('TapGestureHandler手势被触发')
      }}>
        <Animated.View style={styles.innerContainer}>
          <Text>尝试滑动我或点击我触发：TapGestureHandler手势{tapText}</Text>
        </Animated.View>
      </TapGestureHandler>
    )
  }

  return (
    <Tester style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <TestCase itShould="显示效果" tags={'CAPI'}>
        <GestureHandlerRootView style={{ height: 350 }}>
          <View
            style={{
              height: 350,
              backgroundColor: 'papayawhip',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{ flex: 1, gap: 10 }}>
              <Text>初始snapPoints=[200, 150, 80]</Text>
              <Text>点击按钮或手势滑动切换bottomSeet高度</Text>
              <Animated.View
                style={{
                  alignItems: 'center',
                  backgroundColor: 'red',
                  opacity: opacity,
                }}>
                <Text>属性设置callbackNode时，切换bottomSheet高度,此文本透明度会跟着改变。</Text>
              </Animated.View>
              <Button
                title="sheetRef?.current.snapTo(2)"
                onPress={() => sheetRef?.current.snapTo(2)}
              />
              <Button
                title="sheetRef?.current.snapTo(1)"
                onPress={() => sheetRef?.current.snapTo(1)}
              />
              <Button
                title="sheetRef?.current.snapTo(0)"
                onPress={() => sheetRef?.current.snapTo(0)}
              />
            </View>
          </View>
          {isShow ? <BottomSheet
            ref={sheetRef}
            snapPoints={[200, 150, 80]}
            initialSnap={0}
            {...bottomSheetProps} /> : null}
        </GestureHandlerRootView>
      </TestCase>
      <ScrollView style={{ flex: 1, paddingBottom: 400 }}>
        <TestCase itShould="snapPoints">
          <View style={{ flex: 1, gap: 10 }}>
            <Button title="snapPoints: ['50%', '30%', '10%']" onPress={() => {
              showProps({ snapPoints: ['50%', '30%', '10%'] })
            }}></Button>
            <Button title="snapPoints: ['70%', '50%', 0]" onPress={() => {
              showProps({ snapPoints: ['70%', '50%', 0] })
            }}></Button>
          </View>
        </TestCase>

        <TestCase itShould="initialSnap">
          <View style={{ flex: 1, gap: 10 }}>
            <Button title="initialSnap: 0" onPress={() => {
              showProps({ initialSnap: 0 })
            }}></Button>
            <Button title="initialSnap: 1" onPress={() => {
              showProps({ initialSnap: 1 })
            }}></Button>
            <Button title="initialSnap: 2" onPress={() => {
              showProps({ initialSnap: 2 })
            }}></Button>
          </View>
        </TestCase>

        <TestCase itShould="renderContent">
          <View style={{ flex: 1, gap: 10 }}>
            <Button title="显示文本：this is content" onPress={() => {
              showProps({
                renderContent: renderContent
              })
            }}></Button>
          </View>
        </TestCase>

        <TestCase itShould="renderHeader">
          <View style={{ flex: 1, gap: 10 }}>
            <Button title="显示文本：title" onPress={() => {
              showProps({
                renderHeader: renderHeader,
                renderContent: renderContent
              })
            }}></Button>
          </View>
        </TestCase>

        <TestCase itShould="enabledGestureInteraction:手势是否可用">
          <View style={{ flex: 1, gap: 10 }}>
            <Text>设置后请上下滑动手势是否生效</Text>
            <Button title="enabledGestureInteraction:false" onPress={() => {
              showProps({
                enabledGestureInteraction: false,
                renderHeader: renderHeader,
                renderContent: renderContent
              })
            }}></Button>
            <Button title="enabledGestureInteraction:true" onPress={() => {
              showProps({
                enabledGestureInteraction: true,
                renderHeader: renderHeader,
                renderContent: renderContent
              })
            }}></Button>
          </View>
        </TestCase>

        <TestCase itShould="enabledHeaderGestureInteraction:头部滑动手势是否可用">
          <View style={{ flex: 1, gap: 10 }}>
            <Text>设置后请上下滑动头部手势是否生效</Text>
            <Button title="enabledHeaderGestureInteraction:false" onPress={() => {
              showProps({
                enabledHeaderGestureInteraction: false,
                renderHeader: renderHeader,
              })
            }}></Button>
            <Button title="enabledHeaderGestureInteraction:true" onPress={() => {
              showProps({
                enabledHeaderGestureInteraction: true,
                renderHeader: renderHeader,
              })
            }}></Button>
          </View>
        </TestCase>

        <TestCase itShould="enabledContentGestureInteraction:内容滑动手势是否可用">
          <View style={{ flex: 1, gap: 10 }}>
            <Text>设置后请上下滑动内容手势是否生效</Text>
            <Button title="enabledContentGestureInteraction:false" onPress={() => {
              showProps({
                enabledContentGestureInteraction: false,
                renderContent: renderContent
              })
            }}></Button>
            <Button title="enabledContentGestureInteraction:true" onPress={() => {
              showProps({
                enabledContentGestureInteraction: true,
                renderContent: renderContent
              })
            }}></Button>
          </View>
        </TestCase>

        {/* enabledContentTapInteraction  不支持*/}
        {/*         
        <TestCase itShould="enabledContentTapInteraction:内容点击手势是否可用">
          <View style={{ flex: 1, gap: 10 }}>
            <Text>设置后请上下点击内容手势是否生效</Text>
            <Button title="enabledContentTapInteraction:false" onPress={() => {
              showProps({
                enabledContentTapInteraction: false,
                renderContent: renderContent
              })
            }}></Button>
            <Button title="enabledContentTapInteraction:true" onPress={() => {
              showProps({
                enabledContentTapInteraction: true,
                renderContent: renderContent
              })
            }}></Button>
          </View>
        </TestCase> */}

        <TestCase itShould="enabledBottomClamp:">
          <View style={{ flex: 1, gap: 10 }}>
            <Text>enabledBottomClamp为true sheet固定在最小值并且不能滑动</Text>
            <Button title="enabledBottomClamp:false" onPress={() => {
              showProps({
                enabledBottomClamp: false,
                renderHeader: renderHeader,
                renderContent: renderContent
              })
            }}></Button>
            <Button title="enabledBottomClamp:true" onPress={() => {
              showProps({
                enabledBottomClamp: true,
                renderHeader: renderHeader,
                renderContent: renderContent
              })
            }}></Button>
          </View>
        </TestCase>

        <TestCase itShould="enabledBottomInitialAnimation:sheet打开初始动画">
          <View style={{ flex: 1, gap: 10 }}>
            <Button title="enabledBottomInitialAnimation:false" onPress={() => {
              showProps({
                enabledBottomInitialAnimation: false,
                renderContent: renderContent
              })
            }}></Button>
            <Button title="enabledBottomInitialAnimation:true" onPress={() => {
              showProps({
                enabledBottomInitialAnimation: true,
                initialSnap: 0,
                springConfig: {
                  mass: 0.5,
                  damping: 10,
                  stiffness: 500
                },
                enabledInnerScrolling: false,
                renderContent: renderContent
              })
            }}></Button>
          </View>
        </TestCase>

        <TestCase itShould="enabledInnerScrolling:内容是否可滑动">
          <View style={{ flex: 1, gap: 10 }}>
            <Text>设置后请先将sheet滑到最大，再看看内容是否可滚动</Text>
            <Button title="enabledInnerScrolling:false" onPress={() => {
              showProps({
                enabledInnerScrolling: false,
                renderContent: renderInner
              })
            }}></Button>
            <Button title="enabledInnerScrolling:true" onPress={() => {
              showProps({
                enabledInnerScrolling: true,
                renderContent: renderInner
              })
            }}></Button>
          </View>
        </TestCase>

        <TestCase itShould="callbackNode">
          <View style={{ flex: 1, gap: 10 }}>
            <Text>切换bottomSheet观察背景为红色区域的透明度变化</Text>
            <Button title="callbackNode:opacity" onPress={() => {
              showProps({
                callbackNode: opacity,
              })
            }}></Button>
          </View>
        </TestCase>

        <TestCase itShould="contentPosition">
          <View style={{ flex: 1, gap: 10 }}>
            <Text>contentPosition的值会跟随内容滚动而变化。</Text>
            <Button title="contentPosition" onPress={() => {
              showProps({
                contentPosition: contentPosition,
                renderHeader: () => {
                  return (
                    <View >
                      <Text>显示contentPosition值：{contentPosition.value}</Text>
                    </View>
                  )
                },
                renderContent: renderInner
              })
            }}></Button>
          </View>
        </TestCase>
        {/* <TestCase itShould="headerPosition">
          <View style={{ flex: 1, gap: 10 }}>
            <Text>headerPosition的值会跟随sheet高度而变化</Text>
            <Button title="headerPosition" onPress={() => {
              showProps({
                headerPosition: headerPosition,
                renderHeader: () => {
                  return (
                    <View >
                      <Text>显示headerPosition值：{headerPosition.value}</Text>
                    </View>
                  )
                },
              })
            }}></Button>
          </View>
        </TestCase> */}

        <TestCase itShould="overdragResistanceFactor:过度拖拽时停止的力度">
          <View style={{ flex: 1, gap: 10 }}>
            <Text>sheet拖拽到最大或最小值,大于0的值继续拖拽会出现回弹的效果</Text>
            <Button title="overdragResistanceFactor: 0" onPress={() => {
              showProps({
                overdragResistanceFactor: 0,
                enabledInnerScrolling: false,
                renderHeader: renderHeader,
                renderContent: renderContent
              })
            }}></Button>
            <Button title="overdragResistanceFactor: 0.25" onPress={() => {
              showProps({
                overdragResistanceFactor: 0.25,
                enabledInnerScrolling: false,
                renderHeader: renderHeader,
                renderContent: renderContent
              })
            }}></Button>
          </View>
        </TestCase>

        <TestCase itShould="springConfig:sheet动画">
          <View style={{ flex: 1, gap: 10 }}>
            <Button title="springConfig: { mass: 1,damping: 20,stiffness: 200}" onPress={() => {
              showProps({
                springConfig: {
                  mass: 1,
                  damping: 20,
                  stiffness: 200
                },
                enabledInnerScrolling: false,
                renderContent: renderContent
              })
            }}></Button>
            <Button title="springConfig: { mass: 0.5,damping: 10,stiffness: 500}" onPress={() => {
              showProps({
                springConfig: {
                  mass: 0.5,
                  damping: 10,
                  stiffness: 500
                },
                enabledInnerScrolling: false,
                renderContent: renderContent
              })
            }}></Button>
          </View>
        </TestCase>

        {/* <TestCase itShould="innerGestureHandlerRefs">
          <View style={{ flex: 1, gap: 10 }}>
            <Button title="innerGestureHandlerRefs: [panRef, waitforRef, tapRef]" onPress={() => {
              showProps({
                innerGestureHandlerRefs: [panRef, waitforRef, tapRef],
                enabledInnerScrolling: false,
                renderContent: renderContent
              })
            }}></Button>
          </View>
        </TestCase> */}

        {/* <TestCase itShould="simultaneousHandlers">
          <View style={{ flex: 1, gap: 10 }}>
            <Text>{simultaneousRef?.current}</Text>
            <Button title="simultaneousHandlers" onPress={() => {
              showProps({
                simultaneousHandlers: simultaneousRef,
                renderContent: renderContent
              })
            }}></Button>
          </View>
        </TestCase> */}

        <TestCase itShould="onOpenStart、onOpenEnd:sheet页被打开">
          <View style={{ flex: 1, gap: 10 }}>
            <Text>点击按钮后，请向上滑动sheet页。</Text>
            <Text>方法：{onOpenText}</Text>
            <Button title="onOpenStart、onOpenEnd" onPress={() => {
              showProps({
                initialSnap: 2,
                onOpenStart: () => {
                  setOnCloseText('')
                  setOnOpenText('onOpenStart被触发')
                },
                onOpenEnd: () => {
                  setOnCloseText('')
                  setOnOpenText('onOpenEnd被触发')
                },
                enabledInnerScrolling: false,
                renderContent: renderContent
              })
            }}></Button>
          </View>
        </TestCase>

        <TestCase itShould="onCloseStart、onCloseEnd:sheet页被关闭">
          <View style={{ flex: 1, gap: 10 }}>
            <Text>点击按钮后，请向下滑动sheet页。</Text>
            <Text>方法：{onCloseText}</Text>
            <Button title="onCloseStart、onCloseEnd" onPress={() => {
              showProps({
                onCloseStart: () => {
                  setOnOpenText('')
                  setOnCloseText('onCloseStart被触发')
                },
                onCloseEnd: () => {
                  setOnOpenText('')
                  setOnCloseText('onCloseEnd被触发')
                },
                snapPoints: ['50%', '30%', 0],
                initialSnap: 0,
                enabledInnerScrolling: false,
                renderContent: renderContent
              })
            }}></Button>
          </View>
        </TestCase>

        <TestCase itShould="borderRadius:左上和右上圆角">
          <View style={{ flex: 1, gap: 10 }}>
            <Button title="borderRadius: 20" onPress={() => {
              showProps({
                borderRadius: 20,
                enabledInnerScrolling: false,
                renderContent: renderContent
              })
            }}></Button>
            <Button title="borderRadius: 40" onPress={() => {
              showProps({
                borderRadius: 40,
                enabledInnerScrolling: false,
                renderContent: renderContent
              })
            }}></Button>
          </View>
        </TestCase>
      </ScrollView>
    </Tester >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});  