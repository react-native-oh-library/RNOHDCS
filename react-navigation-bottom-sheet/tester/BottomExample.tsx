import * as React from 'react';
import { StyleSheet, Dimensions, View, ScrollView, Text, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  useBottomSheetSpringConfigs,
  useBottomSheetTimingConfigs
} from '@gorhom/bottom-sheet';
import { SimpleExample } from './SimpleExample';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
const { width, height } = Dimensions.get('window');

export function BottomExample() {

  // backgroundStyle:{backgroundColor: 'red'},//弹框背景色
  // index: 10, //index>0直接置顶ok
  // detached: false,/true置顶底部出现圆角ok
  // overDragResistanceFactor: 350,
  // enableOverDrag: false,//harmony暂时不支持手势
  // enablePanDownToClose: false,//harmony暂时不支持手势
  // enableDynamicSizing: true,//#高度缩小到底部ok
  // animateOnMount: false,//false置顶需要第二次点击生效
  // style:{backgroundColor:'yellow'},//弹框外矩形背景色
  // handleStyle:{backgroundColor:'blue'},//弹框顶部色
  // handleIndicatorStyle: {backgroundColor: 'green'},//弹框顶部中间图标色
  // handleHeight: 40,//#搭配handleComponent使用ok
  // contentHeight: 100,//#按钮向上偏移ok
  // topInset: 50,//数字越大弹框高度越矮ok
  // bottomInset: 10,//切除弹框底部高度
  // maxDynamicContentSize: 300,//ios和harmony都无效
  // keyboardBehavior: 'fillParent',//ios和harmony都无效
  // keyboardBlurBehavior: 'restore',//ios和harmony都无效
  // animationConfigs

  // handleComponent//和handleHeight配合可用ok
  // backdropComponent//整个背景ok
  // backgroundComponent//弹框的背景ok
  // footerComponent//置顶后底部可见ok

  const animationConfigs1 = useBottomSheetSpringConfigs({
    mass: 0.5
  });
  const animationConfigs2 = useBottomSheetSpringConfigs({
    mass: 0.1
  });

  const animationConfigs3 = useBottomSheetTimingConfigs({
    duration: 500,
  });
  const animationConfigs4 = useBottomSheetTimingConfigs({
    duration: 1000,
  });

  const propsArr = [
    {
      props: {
        noSnapTo: true,
        snapPoints: ['60%', '80%']
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%']
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['90%', '100%']
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        backgroundStyle: { backgroundColor: 'red' }
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        backgroundStyle: { backgroundColor: 'yellow' }
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        index: 0
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        index: 10
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        detached: false
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        detached: true
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        overDragResistanceFactor: 20
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        overDragResistanceFactor: 500
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        enableOverDrag: false
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        enableOverDrag: true
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        enableContentPanningGesture: false
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        enableContentPanningGesture: true
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        enableHandlePanningGesture: false
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        enableHandlePanningGesture: true
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        enablePanDownToClose: false
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        enablePanDownToClose: true
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        enableDynamicSizing: false
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        enableDynamicSizing: true
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        animateOnMount: false
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        animateOnMount: true
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        style: { backgroundColor: 'blue' }
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        style: { backgroundColor: 'red' }
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        handleStyle: { backgroundColor: 'blue' }
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        handleStyle: { backgroundColor: 'red' }
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        handleIndicatorStyle: { backgroundColor: 'red' }
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        handleIndicatorStyle: { backgroundColor: 'green' }
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        handleHeight: 40,
        handleComponent1: '<Text>handleComponent</Text>',
        handleComponent: () => {
          return <Text>handleComponent</Text>
        }
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        handleHeight: 100,
        handleComponent1: '<Text>handleComponent</Text>',
        handleComponent: () => {
          return <View style={{ height: 50, backgroundColor: 'red' }}><Text>handleComponent</Text></View>
        }
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        contentHeight: 0
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        contentHeight: 300
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        topInset: 0
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        topInset: 200
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        bottomInset: 0
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        bottomInset: 200
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        enableDynamicSizing: true,
        maxDynamicContentSize: 50
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        enableDynamicSizing: true,
        maxDynamicContentSize: 100
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        keyboardBehavior: 'extend'
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        keyboardBehavior: 'fillParent'
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        keyboardBehavior: 'interactive'
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        keyboardBlurBehavior: 'restore'
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        keyboardBlurBehavior: 'none'
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        animationConfigs: animationConfigs1
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        animationConfigs: animationConfigs2
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        animationConfigs: animationConfigs3
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        animationConfigs: animationConfigs4
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        backdropComponent1: '<Text>backdropComponent</Text>',
        backdropComponent: () => {
          return <View style={{ height: 500, backgroundColor: 'red' }}><Text>backdropComponent</Text></View>
        }
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        backdropComponent1: '<Button  title="backdropComponent"/>',
        backdropComponent: () => {
          return <View style={{ height: 500, backgroundColor: 'yellow' }}><Button title='backdropComponent' /></View>
        }
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        backgroundComponent1: '<Text>backgroundComponent</Text>',
        backgroundComponent: () => {
          return <View style={{ height: '100%', backgroundColor: 'red' }}><Text>backgroundComponent</Text></View>
        }
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        backgroundComponent1: '<Button  title="backgroundComponent"/>',
        backgroundComponent: () => {
          return <View style={{ height: '100%', backgroundColor: 'yellow' }}><Button title='backgroundComponent' /></View>
        }
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        footerComponent1: '<Text>footerComponent</Text>',
        footerComponent: () => {
          return <View style={{ height: 200, backgroundColor: 'red' }}><Text>footerComponent</Text></View>
        }
      }
    },
    {
      props: {
        noSnapTo: false,
        snapPoints: ['60%', '80%'],
        footerComponent1: '<Button  title="footerComponent"/>',
        footerComponent: () => {
          return <View style={{ height: 200, backgroundColor: 'red' }}><Button title='footerComponent' /></View>
        }
      }
    }

  ]
  return (
    <ScrollView>
      <Tester>
        <TestSuite name='BottomSheetTesteDemo'>
          {
            propsArr.map((item, index) => (
              <TestCase itShould={JSON.stringify(item.props)} tags={['C_API']} key={index}>
                <View style={styles.app}>
                  <GestureHandlerRootView style={styles.container}>
                    <SimpleExample {...item.props} />
                  </GestureHandlerRootView>
                </View>
              </TestCase>
            ))
          }
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  app: {
    height: height - 200
  },
  container: {
    flex: 1,
  },
});
