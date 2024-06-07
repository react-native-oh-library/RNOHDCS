/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useRef, useState} from 'react';
import {
  Animated,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TestCase, TestSuite, Tester} from '@rnoh/testerino';
import { FlashList } from "@shopify/flash-list";

const generateArray = (size: number) => {
    const arr = new Array(size);
    for (let i = 0; i < size; i++) {
      arr[i] = i;
    }
    return arr;
  };

//   const list = useRef<FlashList<number> | null>(null);

//   const removeItem = (item: number) => {
//     setData(
//       data.filter((dataItem) => {
//         return dataItem !== item;
//       })
//     );
//     list.current?.prepareForLayoutAnimationRender();
//   };

  const overrideItemLayout = (
    layout: { span?: number; size?: number },
    item: number,
    index: number,
    maxColumns: number,
    extraData?: any
  ) => {
    // 返回项布局的样式对象
    layout.size = 100;
    layout.span = index === 0 ? 2 : 1;
  };

  const renderItem = ({ item }: { item: number }) => {
    const backgroundColor = item % 2 === 0 ? "#00a1f1" : "#ffbb00";
    return (
      <View
        style={{
          backgroundColor: item > 17 ? "red" : backgroundColor,
          height: item % 2 === 0 ? 100 : 100,
          width:100
        }}
      >
        <Text style = {{
          height: item % 2 === 0 ? 100 : 100,
          width:100
        }}> Cell Id: {item}</Text>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View style={{ backgroundColor: 'lightblue' }}>
        <Text style={{ width: 100, height: 100}}>List Header</Text>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={{ backgroundColor: 'lightblue' }}>
        <Text style={{ width: 100, height: 100  }}>List Footer</Text>
      </View>
    );
  };

  const Empty = () => {
    const title = "List empty!"
    const subTitle = "Press the 'EmptyListEnabled' button to set whether the list is empty";
    return (
      <View style={styles.emptyComponent}>
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
    );
  };

  const Divider = () => {
    return <View style={styles.divider}/>;
  }



function App({}): JSX.Element | null {
  const [isTesterVisible, setIsTesterVisible] = useState(true);

  if (!isTesterVisible) return null;

  return (
    <SafeAreaView>
      <Button
        title="Reload"
        onPress={() => {
          setIsTesterVisible(false);
          setTimeout(() => {
            setIsTesterVisible(true);
          }, 1000);
        }}
      />
        <ScrollView style={[styles.container]}>
          <Tester>
            <TestSuite name="@shopify/flash-list">
              <TestCase itShould="Render header, footer and item separator. When enable empty list, should clear all items">
                <HeaderSeparaterFooterEmptylistExample/>
              </TestCase>
              {/* </TestSuite> */}
              {/* <TestSuite name="@shopify/flash-list"> */}
              <TestCase itShould="Set 'Inverted' and 'Horizontal'">
                <InvertedHorizontalExample/>
              </TestCase>
              
              <TestCase itShould="Test performance">
                <RenderTimeExample/>
              </TestCase>        
            </TestSuite>
              {/* <TestCase itShould="change color to green when panning">
                <Example
                  createGesture={setBackgroundColor => {
                    return Gesture.Pan()
                      .onStart(() => {
                        setBackgroundColor('green');
                      })
                      .onEnd(() => {
                        setBackgroundColor('red');
                      });
                  }}
                />
              </TestCase>
              <TestCase itShould="support TouchableOpacity">
                <StateKeeper<string>
                  renderContent={(value, setValue) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setValue(prev =>
                            prev === 'Pressed' ? 'Pressed x' : 'Pressed',
                          );
                        }}>
                        <Text
                          style={{
                            width: 256,
                            height: 32,
                            borderWidth: 1,
                            fontSize: 12,
                          }}>
                          {value ?? 'Press me'}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </TestCase>
              <TestCase itShould="support TouchableWithoutFeedback">
                <StateKeeper<string>
                  renderContent={(value, setValue) => {
                    return (
                      <TouchableWithoutFeedback
                        onPress={() => {
                          setValue(prev =>
                            prev === 'Pressed' ? 'Pressed x' : 'Pressed',
                          );
                        }}>
                        <Text
                          style={{
                            width: 256,
                            height: 32,
                            borderWidth: 1,
                            fontSize: 12,
                          }}>
                          {value ?? 'Press me'}
                        </Text>
                      </TouchableWithoutFeedback>
                    );
                  }}
                />
              </TestCase>
            </TestSuite>
            <TestSuite name="old API">
              <TestCase itShould="toggle color on double tap">
                <TapExample />
              </TestCase>
              <TestCase itShould="change color to green when panning after 50 px in X direction (panning + activeOffsetX)">
                <PanningExample />
              </TestCase>
              <TestCase itShould="display event received by onGestureEvent when dragging over blue rectangle">
                <ObjectDisplayer
                  renderContent={setObject => {
                    return (
                      <PanGestureHandler
                        onGestureEvent={e => {
                          setObject({
                            absoluteX: e.nativeEvent.absoluteX,
                            absoluteY: e.nativeEvent.absoluteY,
                            handlerTag: e.nativeEvent.handlerTag,
                            numberOfPointers: e.nativeEvent.numberOfPointers,
                            state: e.nativeEvent.state,
                            translationX: e.nativeEvent.translationX,
                            translationY: e.nativeEvent.translationY,
                            velocityX: e.nativeEvent.velocityX,
                            velocityY: e.nativeEvent.velocityY,
                            x: e.nativeEvent.x,
                            y: e.nativeEvent.y,
                          });
                        }}>
                        <View
                          style={{
                            width: 100,
                            height: 32,
                            backgroundColor: 'blue',
                          }}
                        />
                      </PanGestureHandler>
                    );
                  }}
                />
              </TestCase>
              <TestCase itShould="display event received by onHandlerStateChange when dragging over blue rectangle">
                <ObjectDisplayer
                  renderContent={setObject => {
                    return (
                      <PanGestureHandler
                        onHandlerStateChange={e => {
                          setObject({
                            oldState: e.nativeEvent.oldState,
                            state: e.nativeEvent.state,
                            absoluteX: e.nativeEvent.absoluteX,
                            absoluteY: e.nativeEvent.absoluteY,
                            handlerTag: e.nativeEvent.handlerTag,
                            numberOfPointers: e.nativeEvent.numberOfPointers,
                            translationX: e.nativeEvent.translationX,
                            translationY: e.nativeEvent.translationY,
                            velocityX: e.nativeEvent.velocityX,
                            velocityY: e.nativeEvent.velocityY,
                            x: e.nativeEvent.x,
                            y: e.nativeEvent.y,
                          });
                        }}>
                        <View
                          style={{
                            width: 100,
                            height: 32,
                            backgroundColor: 'blue',
                          }}
                        />
                      </PanGestureHandler>
                    );
                  }}
                />
              </TestCase>
              <TestCase
                itShould="export State object"
                fn={({expect}) => {
                  expect(State).to.be.not.undefined;
                }}
              />
              <TestCase itShould="change text when panning on green rect (hit slop)">
                <StateKeeper<string>
                  renderContent={(value, setValue) => {
                    return (
                      <PanGestureHandler
                        hitSlop={{right: -64}}
                        onActivated={() =>
                          setValue(prev =>
                            prev === 'Panned' ? 'Panned again' : 'Panned',
                          )
                        }>
                        <View
                          style={{
                            backgroundColor: 'red',
                            width: 128,
                          }}>
                          <Text
                            style={{
                              width: 64,
                              height: 32,
                              borderWidth: 1,
                              fontSize: 12,
                              backgroundColor: 'green',
                            }}>
                            {value ?? 'Pan me'}
                          </Text>
                        </View>
                      </PanGestureHandler>
                    );
                  }}
                />
              </TestCase>
              <TestCase itShould="change color when panning left rect but not right">
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <StateKeeper<string>
                    renderContent={(value, setValue) => {
                      return (
                        <PanGestureHandler
                          onActivated={() => setValue('green')}
                          onEnded={() => {
                            setValue('red');
                          }}>
                          <View
                            style={{
                              backgroundColor: value ?? 'red',
                              width: 128,
                              height: 64,
                            }}
                          />
                        </PanGestureHandler>
                      );
                    }}
                  />
                  <StateKeeper<string>
                    renderContent={(value, setValue) => {
                      return (
                        <PanGestureHandler
                          enabled={false}
                          onActivated={() => setValue('green')}
                          onEnded={() => {
                            setValue('red');
                          }}>
                          <View
                            style={{
                              backgroundColor: value ?? 'red',
                              width: 128,
                              height: 64,
                            }}
                          />
                        </PanGestureHandler>
                      );
                    }}
                  />
                </View>
              </TestCase>
              <TestCase itShould="change color on tap as long as finger didn't move more than 100px horizontally (maxDeltaX)">
                <StateKeeper<string>
                  renderContent={(value, setValue) => {
                    return (
                      <TapGestureHandler
                        maxDeltaX={100}
                        onActivated={() =>
                          setValue(prev => (prev === 'red' ? 'green' : 'red'))
                        }>
                        <View
                          style={{
                            backgroundColor: 'gray',
                            width: 128,
                            height: 64,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <View
                            style={{
                              backgroundColor: value ?? 'red',
                              width: 100,
                              height: 64,
                            }}
                          />
                        </View>
                      </TapGestureHandler>
                    );
                  }}
                />
              </TestCase>
              <TestCase itShould="scale vertically when dragged horizontally (NativeAnimatedEvent)">
                <NativeAnimatedEventExample />
              </TestCase> */}
            {/* </TestSuite> */}
          </Tester>
        </ScrollView>
    </SafeAreaView>
  );
}

function HeaderSeparaterFooterEmptylistExample() {
    const [data, setData] = useState(generateArray(10));
    const [emptyListEnabled, setEmptyListEnabled] = useState(false);
    // const list = useRef<FlashList<number> | null>(null);
    return (
      <View style={{width: 256, height: 400}}>
        <View
          style={styles.button}
          onTouchEnd={() =>setEmptyListEnabled(!emptyListEnabled)}
        >
          <Text style={styles.buttonText}>EmptyListEnabled: {emptyListEnabled ? 'true': 'false'}</Text>
        </View>
        <FlashList
            // ref={list}
            renderItem={renderItem}
            ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter}
            ListEmptyComponent={Empty()}
            ItemSeparatorComponent={Divider}
            data={emptyListEnabled ? [] : data}
            estimatedItemSize={10}
            nestedScrollEnabled={true}
            renderScrollComponent={props=>{return (<ScrollView nestedScrollEnabled {...props}/>)}}
        />
      </View>
    );
  }

  function InvertedHorizontalExample() {
    const [data, setData] = useState(generateArray(10));
    const [horizontal, setHorizontal] = useState(false);
    const [inverted, setInverted] = useState(false);
    return (
      <View style={{width: 256, height: 400}}>
        <View
          style={styles.button}
          onTouchEnd={() =>setHorizontal(!horizontal)}
        >
          <Text style={styles.buttonText}>Horizontal: {horizontal ? 'true': 'false'}</Text>
        </View>
        <View
          style={styles.button}
          onTouchEnd={() =>setInverted(!inverted)}
        >
          <Text style={styles.buttonText}>Inverted: {inverted ? 'true': 'false'}</Text>
        </View>
        <FlashList
            renderItem={renderItem}
            data={data}
            inverted={inverted}
            horizontal={horizontal}
            renderScrollComponent={props=>{return (<ScrollView nestedScrollEnabled {...props}/>)}}
        />
      </View>
    );
  }

  function RenderTimeExample() {
    const [data, setData] = useState(generateArray(100));
    const [estimatedItemSize, setEstimatedItemSize] = useState(10);
    const [estimatedListSize, setEstimatedListSize] = useState({height: 0, width: 0});
    const [emptyListEnabled, setEmptyListEnabled] = useState(false);
    const [loadTime, setLoadTime] = useState(-1);
    const onLoadListener = useCallback(({ elapsedTimeInMs }) => {
        setLoadTime(elapsedTimeInMs)
    }, []);
    return (
      <View style={{width: 256, height: 400}}>
        <Text style={styles.infoText}>List load time: {loadTime};  </Text>
        <View
          style={styles.button}
          onTouchEnd={() =>setEmptyListEnabled(!emptyListEnabled)}
        >
          <Text style={styles.buttonText}>EmptyListEnabled: {emptyListEnabled ? 'true': 'false'}</Text>
        </View>
        <View
          style={styles.button}
          onTouchEnd={() =>{
            if(estimatedItemSize === 10) {
                setEstimatedItemSize(100)
          } else setEstimatedItemSize(10)
        }}
        >
          <Text style={styles.buttonText}>estimatedItemSize: {estimatedItemSize}</Text>
        </View>
        <View
          style={styles.button}
          onTouchEnd={() =>setEstimatedListSize({height: 400, width: 200})}
        >
          <Text style={styles.buttonText}>estimatedListSize:  height: {estimatedListSize.height}, width: {estimatedListSize.width}</Text>
        </View>
        <FlashList
            renderItem={renderItem}
            ListEmptyComponent={Empty()}
            data={emptyListEnabled ? [] : data}
            onLoad={onLoadListener}
            renderScrollComponent={props=>{return (<ScrollView nestedScrollEnabled {...props}/>)}}
            estimatedItemSize={estimatedItemSize}
            estimatedListSize={estimatedListSize}
        />
      </View>
    );
  }

// function Example(props: {
//   createGesture: (
//     setColor: React.Dispatch<React.SetStateAction<string>>,
//   ) => GestureType;
//   rightHitSlop?: number;
// }) {
//   const [backgroundColor, setBackgroundColor] = useState('red');

//   const gesture = React.useMemo(() => {
//     return props.createGesture(setBackgroundColor);
//   }, []);

//   return (
//     <GestureDetector gesture={gesture}>
//       <View style={{width: 100, height: 32, backgroundColor}} />
//     </GestureDetector>
//   );
// }

// function TapExample() {
//   const [backgroundColor, setBackgroundColor] = useState('red');

//   return (
//     <TapGestureHandler
//       numberOfTaps={2}
//       onActivated={() => {
//         setBackgroundColor(prev => (prev === 'red' ? 'green' : 'red'));
//       }}>
//       <View style={{width: 100, height: 32, backgroundColor}} />
//     </TapGestureHandler>
//   );
// }

// function PanningExample() {
//   const [backgroundColor, setBackgroundColor] = useState('red');

//   return (
//     <PanGestureHandler
//       activeOffsetX={[-50, 50]}
//       onActivated={() => {
//         setBackgroundColor('green');
//       }}
//       onEnded={() => setBackgroundColor('red')}>
//       <View style={{width: 100, height: 32, backgroundColor}} />
//     </PanGestureHandler>
//   );
// }

// const NativeAnimatedEventExample = () => {
//   const animatedValue = useRef(new Animated.Value(100)).current;

//   return (
//     <PanGestureHandler
//       onGestureEvent={Animated.event(
//         [{nativeEvent: {absoluteX: animatedValue}}],
//         {useNativeDriver: true},
//       )}>
//       <Animated.View
//         style={{
//           backgroundColor: 'red',
//           width: 100,
//           height: 100,
//           alignSelf: 'center',
//           transform: [{scaleY: Animated.divide(animatedValue, 100)}],
//         }}
//       />
//     </PanGestureHandler>
//   );
// };

function ObjectDisplayer(props: {
  renderContent: (setObject: (obj: Object) => void) => any;
}) {
  const [object, setObject] = useState<Object>();

  return (
    <View style={{width: 256, height: 200}}>
      <Text
        style={{width: 256, height: 128, fontSize: 8, backgroundColor: '#EEE'}}>
        {object === undefined ? 'undefined' : JSON.stringify(object)}
      </Text>
      {props.renderContent(setObject)}
    </View>
  );
}

function StateKeeper<T>(props: {
  renderContent: (
    value: T | undefined,
    setValue: React.Dispatch<React.SetStateAction<T | undefined>>,
  ) => void;
}) {
  const [value, setValue] = useState<T>();

  return <>{props.renderContent(value, setValue)}</>;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  itemContainer: {
    padding: 10,
  },
  itemText: {
    fontSize: 16,
  },
  infoText: {
    fontSize:10,
  },
  button: {
    width: 180,
    height: 38,
    backgroundColor: 'hsl(190, 50%, 70%)',
    padding: 5,
    borderRadius: 8,
    margin: 5
  },
  buttonText: {
    width: '100%',
    height: '100%',
    // lineHeight: 28,
    textAlign: 'center'
  },
  emptyComponent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  divider: {
    width: "100%",
    height: 10,
    backgroundColor: "#DDD"
  },
});

export default App;
