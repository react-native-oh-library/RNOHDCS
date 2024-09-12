import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, Animated } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { GestureHandlerRootView } from '@react-native-oh-tpl/react-native-gesture-handler';
const BottomSheetViewGestureDemo = () => {

  const [text, setText] = useState('');

 // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    setText('handleSheetChange ==='+index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);
  const activeOffsetX = 20; // 示例值  
  const activeOffsetY = 20; // 示例值  
  const failOffsetX = 100; // 示例值  
  const failOffsetY = 100; // 示例值

  const [translationX] = useState(new Animated.Value(0));  
  const [translationY] = useState(new Animated.Value(0));  


  // 同时处理的手势数组（如果有的话）  
  const simultaneousHandlers = ['someOtherHandlerRef']; // 假设的引用数组  
  
  // 等待的其他手势处理器（在这个例子中为空）  
  const waitFor = [];  

  // renders
  return (
    <Tester>
    <TestSuite name='BottomSheetViewDemo'>
      <TestCase itShould="BottomSheetView Gesture:waitFor =[] simultaneousHandlers=[] const activeOffsetX = 20 const activeOffsetY = 20 const failOffsetX = 100 const failOffsetY = 100">

     <GestureHandlerRootView>
      <View style={styles.container}>
        <View style = {styles.inputArea}>
          <Text style={styles.baseText}>
            {text}
          </Text>
        </View>
        <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
        <View style={{height:10}}></View>
        <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
        <View style={{height:10}}></View>
        <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
        <View style={{height:10}}></View>
        <Button title="Close" onPress={() => handleClosePress()} />
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChange}
          waitFor = {waitFor}
          activeOffsetX = {activeOffsetX}
          activeOffsetY = {activeOffsetY}
          failOffsetX = {failOffsetX}
          failOffsetY = {failOffsetY}
        >
          <BottomSheetView>
            <Text>Enable dynamic sizing for content view and scrollable content size. 🔥</Text>
          </BottomSheetView>
        </BottomSheet>
      </View>
  </GestureHandlerRootView>  
   </TestCase>
  </TestSuite>
  </Tester>   
  );
};

const styles = StyleSheet.create({
  container: {
    height:'80%',
    backgroundColor: 'grey',
  },
  baseText: {
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:16
  },
  inputArea: {
    width:'100%',
    height:'10%',
    borderWidth:2,
    borderColor:'#000000',
    marginTop:8,
    marginBottom:10,
    justifyContent:'center',
    alignItems:'center',
  },
});
export default BottomSheetViewGestureDemo;