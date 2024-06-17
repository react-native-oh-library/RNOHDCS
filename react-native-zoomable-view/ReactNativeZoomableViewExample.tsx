import { View,Button,StyleSheet,Image,Animated, ScrollView} from 'react-native';
import React,{createRef, useState} from 'react'; 
import {TestSuite,Tester,TestCase} from '@rnoh/testerino';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

export function ReactNativeZoomableViewExample() {
    const zoomableViewRef = createRef<ReactNativeZoomableView>();
    const zoomAnimatedValue = React.useRef(new Animated.Value(1)).current;
    const scale = Animated.divide(1, zoomAnimatedValue);
    const [showMarkers, setShowMarkers] = React.useState(true);
   
    const [state,_setState] = useState({
        zoomEnabled:true,
        panEnabled:true,
        doubleTapDelay:true,
        doubleTapZoomToCenter:true,
        zoomStep:true,
        pinchToZoomInSensitivity:true,
        pinchToZoomOutSensitivity:true,
        movementSensibility:true,
        longPressDuration:true,
        visualTouchFeedbackEnabled:true,
    });

    return(
        <View style={styles.container}>
          <View style={styles.box}>
                <ReactNativeZoomableView
                    ref={zoomableViewRef}
                    maxZoom={30}
                    initialZoom={1.5}
                    contentWidth={300}
                    contentHeight={150}
                    panBoundaryPadding={500}
                    zoomEnabled =  {state.zoomEnabled}
                    panEnabled = {state.panEnabled}
                    doubleTapDelay={state.doubleTapDelay?300:10000}
                    doubleTapZoomToCenter = {state.doubleTapZoomToCenter}
                    zoomStep={state.zoomStep?0.5:4.0}
                    pinchToZoomInSensitivity={state.pinchToZoomInSensitivity?10:1}
                    pinchToZoomOutSensitivity={state.pinchToZoomOutSensitivity?1:10}
                    movementSensibility={state.movementSensibility?1.9:19}
                    longPressDuration={state.longPressDuration?700:6000}
                    visualTouchFeedbackEnabled = {state.visualTouchFeedbackEnabled}

                    style={{ padding: 10, backgroundColor: 'red' }}
                    onZoomEnd = {(event, zoomableViewEventObject) => {console.log('onZoomEnd')}}
                    onPanResponderTerminationRequest = {(event, zoomableViewEventObject) => {console.log('onPanResponderTerminationRequest');return false}}
                    onMoveShouldSetPanResponderCapture = {(event, gestureState) => {console.log('onMoveShouldSetPanResponderCapture');return true}}
                >

                    <View style={styles.contents}>
                        <Image style={styles.img} source={require('./placeholder2000x2000.jpg') } />

                        {showMarkers &&
                        [20, 40, 60, 80].map((left) =>
                            [20, 40, 60, 80].map((top) => (
                            <Animated.View
                                key={`${left}x${top}`}
                                style={[ styles.marker, { left: `${left}%`, top: `${top}%` }, { transform: [{ scale }] }, ]}
                            />
                            ))
                        )}
                    </View>

                </ReactNativeZoomableView>
          </View>
          
          
          <Button title={`${showMarkers ? 'Hide' : 'Show'} markers`} onPress={() => {setShowMarkers((value) => !value);}} /> 
          <ScrollView>
          <Tester>
          
            <TestSuite name='函数移动'>
              <TestCase itShould=''
              initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
              arrange={({setState}) => (
                <ScrollView horizontal={true} >

                <Button onPress={() => {zoomableViewRef.current!.moveBy(-30, 0);setState(true)}} title="⬅️" />
                <Button onPress={() => {zoomableViewRef.current!.moveBy(30, 0);setState(true)}} title="➡️" />
                <Button onPress={() => {zoomableViewRef.current!.moveBy(0, -30);setState(true)}} title="⬆️" />
                <Button onPress={() => {zoomableViewRef.current!.moveBy(0, 30);setState(true)}} title="⬇️" />
      
                </ScrollView>
              )}
              />
              <TestCase itShould='缩放等级'
              initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
              arrange={({setState}) => ( 
                <ScrollView horizontal={true} >
                <Button title={`缩放等级1`} onPress={() => {zoomableViewRef.current?.zoomTo(1);setState(true)}} /> 
                  <Button title={`缩放等级10`} onPress={() => {zoomableViewRef.current?.zoomTo(10);setState(true)}} /> 
                </ScrollView>
              )}
              />
              <TestCase itShould='缩放'
              initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
              arrange={({setState}) => ( <Button title={`${state.zoomEnabled ? '禁止' : '开启'} 缩放`} onPress={() => {_setState({...state,zoomEnabled:!state.zoomEnabled});setState(true)}} /> )}
              />
              <TestCase itShould='移动'
              initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
              arrange={({setState}) => ( <Button title={`${state.panEnabled ? '禁止' : '开启'} 移动`} onPress={() => {_setState({...state,panEnabled:!state.panEnabled});setState(true)}} /> )}
              />
              <TestCase itShould='双击延迟判定'
              initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
              arrange={({setState}) => ( <Button title={`${state.doubleTapDelay ? '300' : '10000'} 延迟双击`} onPress={() => {_setState({...state,doubleTapDelay:!state.doubleTapDelay});setState(true)}} /> )}
              />
              <TestCase itShould='缩放中心'
              initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
              arrange={({setState}) => ( <Button title={`${state.doubleTapZoomToCenter ? '以点击点为缩放中心' : '以中心为缩放中心'} `} onPress={() => {_setState({...state,doubleTapZoomToCenter:!state.doubleTapZoomToCenter});setState(true)}} /> )}
              />
              <TestCase itShould='双击缩放倍率'
              initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
              arrange={({setState}) => ( <Button title={`${state.zoomStep ? '0.5' : '4.0'} 双击缩放`} onPress={() => {_setState({...state,zoomStep:!state.zoomStep});setState(true)}} /> )}
              />
              <TestCase itShould='放大阻力设定'
              initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
              arrange={({setState}) => ( <Button title={`${state.pinchToZoomInSensitivity ? '10' : '1'} 放大阻力`} onPress={() => {_setState({...state,pinchToZoomInSensitivity:!state.pinchToZoomInSensitivity});setState(true)}} /> )}
              />
              <TestCase itShould='缩小阻力设定'
              initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
              arrange={({setState}) => ( <Button title={`${state.pinchToZoomOutSensitivity ? '1' : '10'} 缩小阻力`} onPress={() => {_setState({...state,pinchToZoomOutSensitivity:!state.pinchToZoomOutSensitivity});setState(true)}} /> )}
              />
              <TestCase itShould='移动阻力设定'
              initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
              arrange={({setState}) => ( <Button title={`${state.movementSensibility ? '1.9' : '19'} 移动阻力`} onPress={() => {_setState({...state,movementSensibility:!state.movementSensibility});setState(true)}} /> )}
              />
              <TestCase itShould='长按间隔时间设定'
              initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
              arrange={({setState}) => ( <Button title={`${state.longPressDuration ? '700' : '6000'} 长按间隔`} onPress={() => {_setState({...state,longPressDuration:!state.longPressDuration});setState(true)}} /> )}
              />
              <TestCase itShould='触碰反馈圈'
              initialState={false} assert={({expect, state}) => { expect(state).to.be.ok; }}
              arrange={({setState}) => ( <Button title={`${state.visualTouchFeedbackEnabled ? '取消' : ''} 触摸反馈圈`} onPress={() => {_setState({...state,visualTouchFeedbackEnabled:!state.visualTouchFeedbackEnabled});setState(true)}} /> )}
              />
              
            </TestSuite>
          </Tester>
          </ScrollView>
          
        </View>
            
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    contents: {
      flex: 1,
      alignSelf: 'stretch',
    },
    box: {
      borderWidth: 5,
      flexShrink: 1,
      height: 500,
      width: 310,
    },
    img: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    marker: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 20,
      height: 20,
      marginLeft: -10,
      marginTop: -10,
      borderRadius: 10,
      backgroundColor: 'white',
      borderWidth: 2,
    },
  });