import { View,Button,StyleSheet,Image,Animated, ScrollView,Text} from 'react-native';
import React,{createRef, useRef, useState} from 'react'; 
import {TestSuite,Tester,TestCase} from '@rnoh/testerino';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

export function ReactNativeZoomableViewExample() {
    const zoomableViewRef = createRef<ReactNativeZoomableView>();
   
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
        initialZoom:1,
        initialOffsetX: 1,
        initialOffsetY: 1,
        maxZoom:5,
        minZoom:1,
        contentWidth:300,
        contentHeight:150,
        panBoundaryPadding:0,
        bindToBorders:true,
        disablePanOnInitialZoom : false
    });

     const stateString = useRef({
      onTransform:'',
      onSingleTap:'',
      onDoubleTapBefore:'',
      onDoubleTapAfter:'',
      onShiftingEnd:'',
      onPanResponderTerminate:'',
      onZoomBefore:'',
      onZoomAfter:'',
      onZoomEnd:'',
      onLongPress:'',
      onPanResponderGrant:'',
      onPanResponderEnd:'',
      onPanResponderMove:'',
      onShouldBlockNativeResponder:'',
      onStartShouldSetPanResponderCapture:'',
      onStartShouldSetPanResponder:'',
      onPanResponderTerminationRequest :'',
      onMoveShouldSetPanResponderCapture :'',
      onShiftingBefore:'',
      onShiftingAfter:'',
    });

  function tester_change(title:string,buttonTitle:string,pressEvent:Function){
      return(          
        <TestCase
          itShould = {title} initialState={false}  assert={({expect, state}) => { expect(state).to.be.true; }}
          arrange={({setState}) => ( <Button title={buttonTitle} onPress={() => { pressEvent();setState(true);
            
           }}></Button> )} >
        </TestCase>
      )
  }
  
  function tester_back_string(title:string,string:any){
    return(  <TestCase itShould={title}> <Text>{string}</Text> </TestCase> )
  }

    return(
      <View style={styles.container}>
        <View style={styles.box}>
          <ReactNativeZoomableView
              ref={zoomableViewRef}
              style={{ padding: 10, backgroundColor: 'red' }}
              initialZoom={state.initialZoom}
              initialOffsetX= {state.initialOffsetX}
              initialOffsetY= {state.initialOffsetY}
              maxZoom={state.maxZoom}
              minZoom={state.minZoom}
              contentWidth={state.contentWidth}
              contentHeight={state.contentHeight}
              panBoundaryPadding={state.panBoundaryPadding}
              bindToBorders={state.bindToBorders}
              disablePanOnInitialZoom = {state.disablePanOnInitialZoom}
              zoomEnabled =  {state.zoomEnabled}
              panEnabled = {state.panEnabled}
              doubleTapDelay={state.doubleTapDelay?300:10000}
              doubleTapZoomToCenter = {state.doubleTapZoomToCenter}
              zoomStep={state.zoomStep?0.1:4.0}
              pinchToZoomInSensitivity={state.pinchToZoomInSensitivity?1:10}
              pinchToZoomOutSensitivity={state.pinchToZoomOutSensitivity?1:10}
              movementSensibility={state.movementSensibility?1:19}
              longPressDuration={state.longPressDuration?700:6000}
              visualTouchFeedbackEnabled = {state.visualTouchFeedbackEnabled}
              
              onTransform= {(zoomableViewEventObject) => {stateString.current.onTransform = 'pass'}}
              onSingleTap= {(event, zoomableViewEventObject) => {stateString.current.onSingleTap = 'pass'}}
              onDoubleTapBefore= {(event, zoomableViewEventObject) => {stateString.current.onDoubleTapBefore = 'pass'}}
              onDoubleTapAfter= {(event, zoomableViewEventObject) => {stateString.current.onDoubleTapAfter = 'pass'}}
              onShiftingEnd= {(event, gestureState, zoomableViewEventObject) => {stateString.current.onShiftingEnd = 'pass'}}
              onZoomBefore= {(event, gestureState, zoomableViewEventObject) => { stateString.current.onZoomBefore = 'pass';}}
              onZoomAfter= {(event, gestureState, zoomableViewEventObject) => {stateString.current.onZoomAfter = 'pass'}}
              onZoomEnd= {(event, gestureState, zoomableViewEventObject) => {stateString.current.onZoomEnd = 'pass'}}
              onLongPress= {(event, gestureState, zoomableViewEventObject) => {stateString.current.onLongPress = 'pass'}}
             >

              <View style={styles.contents}>
                  <Image style={styles.img} source={require('./placeholder2000x2000.jpg') } />
              </View>

          </ReactNativeZoomableView>
        </View>
        <Tester>
          <ScrollView>
            <TestSuite name='react-native-zoomable-view'>
              {tester_change("移动 moveBy(-30, 0)",'←',()=>{ ;zoomableViewRef.current!.moveBy(-30, 0) })}
              {tester_change("移动 moveBy(30, 0)",'→',()=>{ zoomableViewRef.current!.moveBy(30, 0) })}
              {tester_change("设置缩放等级 zoomTo(1)",'1',()=>{ zoomableViewRef.current!.zoomTo(1);})}
              {tester_change("设置缩放等级 zoomTo(5)",'5',()=>{ zoomableViewRef.current!.zoomTo(5);})}
              {tester_change("设置缩放等级 zoomBy(1.1)",'1.1',()=>{ zoomableViewRef.current!.zoomBy(1.1);})}
              {tester_change("设置缩放等级 zoomBy(5)",'5',()=>{ zoomableViewRef.current!.zoomBy(5);})}
              {tester_change("开启手势缩放 zoomEnabled : true",'true',()=>{ _setState({...state,zoomEnabled:true}) })}
              {tester_change("关闭手势缩放 zoomEnabled : false",'false',()=>{ _setState({...state,zoomEnabled:false}) })}
              {tester_change("开启手势移动 panEnabled : true",'true',()=>{ _setState({...state,panEnabled:true}) })}
              {tester_change("关闭手势移动 panEnabled : false",'false',()=>{ _setState({...state,panEnabled:false}) })}
              {tester_change("双击判定间隔最大时间 doubleTapDelay : 300",'300',()=>{ _setState({...state,doubleTapDelay:true}) })}
              {tester_change("双击判定间隔最大时间 doubleTapDelay : 10000",'10000',()=>{ _setState({...state,panEnabled:false}) })}
              {tester_change("缩放中心 以点击点为缩放中心 doubleTapZoomToCenter : true",'true',()=>{ _setState({...state,doubleTapZoomToCenter:true}) })}
              {tester_change("缩放中心 以中心为缩放中心 doubleTapZoomToCenter : false",'false',()=>{ _setState({...state,doubleTapZoomToCenter:false}) })}
              {tester_change("双击缩放倍率 zoomStep : 0.1",'0.1',()=>{ _setState({...state,zoomStep:true}) })}
              {tester_change("双击缩放倍率 zoomStep : 4.0",'4.0',()=>{ _setState({...state,zoomStep:false}) })}
              {tester_change("放大阻力设定 pinchToZoomInSensitivity : 1",'1',()=>{ _setState({...state,pinchToZoomInSensitivity:true}) })}
              {tester_change("放大阻力设定 pinchToZoomInSensitivity : 10",'10',()=>{ _setState({...state,pinchToZoomInSensitivity:false}) })}
              {tester_change("缩小阻力设定 pinchToZoomOutSensitivity : 1",'1',()=>{ _setState({...state,pinchToZoomOutSensitivity:true}) })}
              {tester_change("缩小阻力设定 pinchToZoomOutSensitivity : 10",'10',()=>{ _setState({...state,pinchToZoomOutSensitivity:false}) })}
              {tester_change("移动阻力设定 movementSensibility : 1",'1',()=>{ _setState({...state,movementSensibility:true}) })}
              {tester_change("移动阻力设定 movementSensibility : 19",'19',()=>{ _setState({...state,movementSensibility:false}) })}
              {tester_change("长按间隔时间设定 longPressDuration : 700",'700',()=>{ _setState({...state,longPressDuration:true}) })}
              {tester_change("长按间隔时间设定 longPressDuration : 6000",'6000',()=>{ _setState({...state,longPressDuration:false}) })}
              {tester_change("触碰反馈圈 visualTouchFeedbackEnabled : true",'true',()=>{ _setState({...state,visualTouchFeedbackEnabled:true}) })}
              {tester_change("触碰反馈圈 visualTouchFeedbackEnabled : false",'false',()=>{ _setState({...state,visualTouchFeedbackEnabled:false}) })}
              {tester_change("初始缩放值 initialZoom:1.5",'1.5',()=>{ _setState({...state,initialZoom:1.5});zoomableViewRef.current!.zoomTo(1.5) })}
              {tester_change("初始缩放值 initialZoom:10.5",'10.5',()=>{ _setState({...state,initialZoom:10.5});zoomableViewRef.current!.zoomTo(10.5) })}
              {tester_change("初始x轴偏移 initialOffsetX:1",'1',()=>{ _setState({...state,initialOffsetX:1});zoomableViewRef.current!.moveTo(1, 0) })}
              {tester_change("初始x轴偏移 initialOffsetX:100",'100',()=>{ _setState({...state,initialOffsetX:100});zoomableViewRef.current!.moveTo(100, 0) })}
              {tester_change("初始y轴偏移 initialOffsetY:1",'1',()=>{ _setState({...state,initialOffsetY:1});zoomableViewRef.current!.moveTo(0, 1) })}
              {tester_change("初始y轴偏移 initialOffsetY:100",'100',()=>{ _setState({...state,initialOffsetY:100});zoomableViewRef.current!.moveTo(0, 100) })}
              {tester_change("最大缩放 maxZoom:30",'30',()=>{ _setState({...state,maxZoom:30});zoomableViewRef.current!.zoomTo(30);zoomableViewRef.current!.moveTo(0,0) })}
              {tester_change("最大缩放 maxZoom:5",'5',()=>{ _setState({...state,maxZoom:5});zoomableViewRef.current!.zoomTo(5);zoomableViewRef.current!.moveTo(0,0) })}
              {tester_change("最小缩放 minZoom:1",'1',()=>{ _setState({...state,minZoom:1});zoomableViewRef.current!.zoomTo(1);zoomableViewRef.current!.moveTo(0,0) })}
              {tester_change("最小缩放 minZoom:10",'10',()=>{ _setState({...state,minZoom:10});zoomableViewRef.current!.zoomTo(10);zoomableViewRef.current!.moveTo(0,0) })}
              {tester_change("内容宽度 contentWidth:300",'300',()=>{ _setState({...state,contentWidth:300}) })}
              {tester_change("内容宽度 contentWidth:500",'500',()=>{ _setState({...state,contentWidth:500}) })}
              {tester_change("内容高度 contentHeight:150",'150',()=>{ _setState({...state,contentHeight:150}) })}
              {tester_change("内容高度 contentHeight:300",'300',()=>{ _setState({...state,contentHeight:300}) })}
              {tester_change("内容距边框padding panBoundaryPadding:500",'500',()=>{ _setState({...state,panBoundaryPadding:500}) })}
              {tester_change("内容距边框padding panBoundaryPadding:0",'0',()=>{ _setState({...state,panBoundaryPadding:0}) })}
              {tester_change("内容绑定在视图中 bindToBorders:true",'true',()=>{ _setState({...state,bindToBorders:true}) })}
              {tester_change("内容绑定在视图中 bindToBorders:false",'false',()=>{ _setState({...state,bindToBorders:false}) })}
              {tester_change("缩放等于初始缩放时不平移 disablePanOnInitialZoom:true",'true',()=>{ _setState({...state,disablePanOnInitialZoom:true}) })}
              {tester_change("缩放等于初始缩放时不平移 disablePanOnInitialZoom:false",'false',()=>{ _setState({...state,disablePanOnInitialZoom:false}) })}

              {tester_back_string("onTransform",stateString.current.onTransform)}
              {tester_back_string("onSingleTap",stateString.current.onSingleTap)}
              {tester_back_string("onDoubleTapBefore",stateString.current.onDoubleTapBefore)}
              {tester_back_string("onDoubleTapAfter",stateString.current.onDoubleTapAfter)}
              {tester_back_string("onShiftingEnd",stateString.current.onShiftingEnd)}
              {tester_back_string("onZoomBefore",stateString.current.onZoomBefore)}
              {tester_back_string("onZoomAfter",stateString.current.onZoomAfter)}
              {tester_back_string("onZoomEnd",stateString.current.onZoomEnd)}
              {tester_back_string("onLongPress",stateString.current.onLongPress)}
              <View style={{height:300}}></View>
            </TestSuite>
          </ScrollView>
        </Tester>
      </View>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    contents: {
      flex: 1,
      alignSelf: 'stretch',
    },
    box: {
      borderWidth: 5,
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