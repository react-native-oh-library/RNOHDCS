/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  Animated,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from 'react-native';
import {TestCase, TestSuite, Tester} from '@rnoh/testerino';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  GestureType,
  PanGestureHandler,
  State,
  TapGestureHandler,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import { TabView, TabBar, SceneMap, NavigationState, SceneRendererProps } from 'react-native-tab-view';


const FirstRoute = () => (
  // <SafeAreaView>
  <View>
      <GestureHandlerRootView>
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
                
    </GestureHandlerRootView>
    <View style={{width:500, height:500, backgroundColor: '#713ab7' }} />
    </View>
    
  // <View style={{ flex: 1, backgroundColor: '#713ab7' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute
});

function App({}): JSX.Element | null {
  // const [isTesterVisible, setIsTesterVisible] = useState(true);
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    { key: 'third', title: 'Third' },
  ]);
  // if (!isTesterVisible) return null;


  return (
    // <GestureHandlerRootView>
    <TabView
      style={{
        // flex: 1,
        // width: 350,
        // height: 200,
        // margin: 10,
        backgroundColor: '#6D8585',
      }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
    // {/* </GestureHandlerRootView> */}
  );
}

function Example(props: {
  createGesture: (
    setColor: React.Dispatch<React.SetStateAction<string>>,
  ) => GestureType;
  rightHitSlop?: number;
}) {
  const [backgroundColor, setBackgroundColor] = useState('red');

  const gesture = React.useMemo(() => {
    return props.createGesture(setBackgroundColor);
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <View style={{width: 100, height: 32, backgroundColor}} />
    </GestureDetector>
  );
}

function TapExample() {
  const [backgroundColor, setBackgroundColor] = useState('red');

  return (
    <TapGestureHandler
      numberOfTaps={2}
      onActivated={() => {
        setBackgroundColor(prev => (prev === 'red' ? 'green' : 'red'));
      }}>
      <View style={{width: 100, height: 32, backgroundColor}} />
    </TapGestureHandler>
  );
}

function PanningExample() {
  const [backgroundColor, setBackgroundColor] = useState('red');

  return (
    <PanGestureHandler
      activeOffsetX={[-50, 50]}
      onActivated={() => {
        setBackgroundColor('green');
      }}
      onEnded={() => setBackgroundColor('red')}>
      <View style={{width: 100, height: 32, backgroundColor}} />
    </PanGestureHandler>
  );
}

const NativeAnimatedEventExample = () => {
  const animatedValue = useRef(new Animated.Value(100)).current;

  return (
    <PanGestureHandler
      onGestureEvent={Animated.event(
        [{nativeEvent: {absoluteX: animatedValue}}],
        {useNativeDriver: true},
      )}>
      <Animated.View
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
          alignSelf: 'center',
          transform: [{scaleY: Animated.divide(animatedValue, 100)}],
        }}
      />
    </PanGestureHandler>
  );
};

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
});

export default App;