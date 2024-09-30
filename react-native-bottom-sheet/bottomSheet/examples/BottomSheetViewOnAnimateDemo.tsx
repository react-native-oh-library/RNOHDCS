import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { GestureHandlerRootView } from '@react-native-oh-tpl/react-native-gesture-handler';
const BottomSheetViewOnAnimateDemo = () => {

  const [text, setText] = useState('');

 // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetAnimate = useCallback((fromIndex: number, toIndex: number) => {
    setText('fromIndex =='+fromIndex + " || " + 'toIndex =='+toIndex);
  }, []);


  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);


  // renders
  return (
    <Tester>
    <TestSuite name='BottomSheetViewDemo'>
      <TestCase itShould="BottomSheetView style:onAnimate = {handleSheetAnimate} ">

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
          onAnimate={handleSheetAnimate}
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
    height:'90%',
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
export default BottomSheetViewOnAnimateDemo;