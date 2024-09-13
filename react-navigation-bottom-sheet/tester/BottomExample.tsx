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
  const props1 = {
    props: {
      noSnapTo: false,
      snapPoints: ['60%', '80%'],
      enableContentPanningGesture: false
    }
  }
  const props2 = {
    props: {
      noSnapTo: false,
      snapPoints: ['60%', '80%'],
      enableContentPanningGesture: true
    }
  }
  const props3 = {
    props: {
      noSnapTo: false,
      snapPoints: ['60%', '80%'],
      enableHandlePanningGesture: false
    }
  }
  const props4 = {
    props: {
      noSnapTo: false,
      snapPoints: ['60%', '80%'],
      enableHandlePanningGesture: true
    }
  }
  const props5 = {
    props: {
      noSnapTo: false,
      snapPoints: ['60%', '80%'],
      enableOverDrag: false
    }
  }
  const props6 = {
    props: {
      noSnapTo: false,
      snapPoints: ['60%', '80%'],
      enableOverDrag: true
    }
  }
  const props7 = {
    props: {
      noSnapTo: false,
      snapPoints: ['60%', '80%'],
      overDragResistanceFactor: 2
    }
  }
  const props8 = {
    props: {
      noSnapTo: false,
      snapPoints: ['60%', '80%'],
      overDragResistanceFactor: 20
    }
  }
  const props9 = {
    props: {
      noSnapTo: false,
      snapPoints: ['60%', '80%'],
      enablePanDownToClose: false
    }
  }
  const props10 = {
    props: {
      noSnapTo: false,
      snapPoints: ['60%', '80%'],
      enablePanDownToClose: true
    }
  }
  const [show, setShow] = React.useState<any>({});
  const { show0, show1, show2, show3, show4, show5, show6, show7, show8, show9, show10 } = show;
  const flag1 = (show1 || show2 || show3 || show4 || show5 || show6 || show7 || show8 || show9 || show10)
  const dealShow = (index: number) => {
    const result: any = {};
    Array.from({ length: 11 }).map((item, idx) => {
      result[`show${idx}`] = index == idx;
    })
    setShow(result);
  }

  return (
    <>

      <>
        {!(show0 || flag1) && <ScrollView>
          <View style={styles.spacer0} />
          {!show0 && <Button title='all other props' onPress={() => {
            dealShow(0)
          }} />}
          <View style={styles.spacer} />
          {!show1 && <Button title='enableContentPanningGesture1' onPress={() => {
            dealShow(1)
          }} />}
          <View style={styles.spacer} />
          {!show2 && <Button title='enableContentPanningGesture2' onPress={() => {
            dealShow(2)
          }} />}
          <View style={styles.spacer} />
          {!show3 && <Button title='enableHandlePanningGesture1' onPress={() => {
            dealShow(3)
          }} />}
          <View style={styles.spacer} />
          {!show4 && <Button title='enableHandlePanningGesture2' onPress={() => {
            dealShow(4)
          }} />}
          <View style={styles.spacer} />
          {!show5 && <Button title='enableOverDrag1' onPress={() => {
            dealShow(5)
          }} />}
          <View style={styles.spacer} />
          {!show6 && <Button title='enableOverDrag2' onPress={() => {
            dealShow(6)
          }} />}
          <View style={styles.spacer} />
          {!show7 && <Button title='overDragResistanceFactor1' onPress={() => {
            dealShow(7)
          }} />}
          <View style={styles.spacer} />
          {!show8 && <Button title='overDragResistanceFactor2' onPress={() => {
            dealShow(8)
          }} />}
          <View style={styles.spacer} />
          {!show9 && <Button title='enablePanDownToClose1' onPress={() => {
            dealShow(9)
          }} />}
          <View style={styles.spacer} />
          {!show10 && <Button title='enablePanDownToClose2' onPress={() => {
            dealShow(10)
          }} />}
        </ScrollView>}
        {flag1 && <Tester>
          <TestSuite name='BottomSheetTesteDemo1'>
            {show1 && <TestCase itShould={JSON.stringify(props1.props)} tags={['C_API']} key={-1}>
              {<View style={styles.app}>
                <GestureHandlerRootView style={styles.container}>
                  <SimpleExample {...props1.props} />
                </GestureHandlerRootView>
                <Button title='返回' onPress={() => setShow({ ...show, show1: false })} />
              </View>}
            </TestCase>}
            {show2 && <TestCase itShould={JSON.stringify(props2.props)} tags={['C_API']} key={-2}>
              {<View style={styles.app}>
                <GestureHandlerRootView style={styles.container}>
                  <SimpleExample {...props2.props} />
                </GestureHandlerRootView>
                <Button title='返回' onPress={() => setShow({ ...show, show2: false })} />
              </View>}
            </TestCase>}
            {show3 && <TestCase itShould={JSON.stringify(props3.props)} tags={['C_API']} key={-3}>
              {<View style={styles.app}>
                <GestureHandlerRootView style={styles.container}>
                  <SimpleExample {...props3.props} />
                </GestureHandlerRootView>
                <Button title='返回' onPress={() => setShow({ ...show, show3: false })} />
              </View>}
            </TestCase>}
            {show4 && <TestCase itShould={JSON.stringify(props4.props)} tags={['C_API']} key={-4}>
              {<View style={styles.app}>
                <GestureHandlerRootView style={styles.container}>
                  <SimpleExample {...props4.props} />
                </GestureHandlerRootView>
                <Button title='返回' onPress={() => setShow({ ...show, show4: false })} />
              </View>}
            </TestCase>}
            {show5 && <TestCase itShould={JSON.stringify(props5.props)} tags={['C_API']} key={-5}>
              {<View style={styles.app}>
                <GestureHandlerRootView style={styles.container}>
                  <SimpleExample {...props5.props} />
                </GestureHandlerRootView>
                <Button title='返回' onPress={() => setShow({ ...show, show5: false })} />
              </View>}
            </TestCase>}
            {show6 && <TestCase itShould={JSON.stringify(props6.props)} tags={['C_API']} key={-6}>
              {<View style={styles.app}>
                <GestureHandlerRootView style={styles.container}>
                  <SimpleExample {...props6.props} />
                </GestureHandlerRootView>
                <Button title='返回' onPress={() => setShow({ ...show, show6: false })} />
              </View>}
            </TestCase>}
            {show7 && <TestCase itShould={JSON.stringify(props7.props)} tags={['C_API']} key={-7}>
              {<View style={styles.app}>
                <GestureHandlerRootView style={styles.container}>
                  <SimpleExample {...props7.props} />
                </GestureHandlerRootView>
                <Button title='返回' onPress={() => setShow({ ...show, show7: false })} />
              </View>}
            </TestCase>}
            {show8 && <TestCase itShould={JSON.stringify(props8.props)} tags={['C_API']} key={-8}>
              {<View style={styles.app}>
                <GestureHandlerRootView style={styles.container}>
                  <SimpleExample {...props9.props} />
                </GestureHandlerRootView>
                <Button title='返回' onPress={() => setShow({ ...show, show8: false })} />
              </View>}
            </TestCase>}
            {show9 && <TestCase itShould={JSON.stringify(props9.props)} tags={['C_API']} key={-9}>
              {<View style={styles.app}>
                <GestureHandlerRootView style={styles.container}>
                  <SimpleExample {...props9.props} />
                </GestureHandlerRootView>
                <Button title='返回' onPress={() => setShow({ ...show, show9: false })} />
              </View>}
            </TestCase>}
            {show10 && <TestCase itShould={JSON.stringify(props10.props)} tags={['C_API']} key={-10}>
              {<View style={styles.app}>
                <GestureHandlerRootView style={styles.container}>
                  <SimpleExample {...props10.props} />
                </GestureHandlerRootView>
                <Button title='返回' onPress={() => setShow({ ...show, show10: false })} />
              </View>}
            </TestCase>}
          </TestSuite>
        </Tester>}
      </>
      {show0 && <ScrollView>
        <View style={styles.spacer0} />
        <Button title='返回' onPress={() => setShow({ ...show, show0: false })} />
        <Tester>
          <TestSuite name='BottomSheetTesteDemo2'>
            {!show1 && propsArr.map((item, index) => (
              <TestCase itShould={JSON.stringify(item.props)} tags={['C_API']} key={index}>
                <View style={styles.app}>
                  <GestureHandlerRootView style={styles.container}>
                    <SimpleExample {...item.props} />
                  </GestureHandlerRootView>
                </View>
              </TestCase>
            ))}
          </TestSuite>
        </Tester>
      </ScrollView>}
    </>
  );
}


const styles = StyleSheet.create({
  spacer0: {
    margin: 20
  },
  spacer: {
    margin: 10
  },
  app: {
    height: height - 100
  },
  container: {
    flex: 1,
  },
});
