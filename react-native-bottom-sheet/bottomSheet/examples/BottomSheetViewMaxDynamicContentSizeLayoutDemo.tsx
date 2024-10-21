import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { GestureHandlerRootView } from '@react-native-oh-tpl/react-native-gesture-handler';
const BottomSheetViewMaxDynamicContentSizeLayoutDemo = () => {
 // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  const [maxDynamicContentSize, setMaxDynamicContentSize] = useState(0);

  // callbacksh

  const handleMaxDynamicContentSize = useCallback((index) => {
    console.info("------------"+ index)
    setMaxDynamicContentSize(index);
  }, []);

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

    // callbacks
    const handleSheetChange = useCallback((index) => {
      console.log("handleSheetChange", index);
    }, []);
    

  // renders
  return (
    <Tester>
    <TestSuite name='BottomSheetViewDemo'>
      <TestCase itShould="BottomSheetViewDemo Layout: maxDynamicContentSize ={maxDynamicContentSize}">
     <GestureHandlerRootView >
      <View style={styles.container}>
       <Button title="maxDynamicContentSize is 10" onPress={() => handleMaxDynamicContentSize(100)} />
        <View style={{height:10}}></View>
        <Button title="maxDynamicContentSize is 20" onPress={() => handleMaxDynamicContentSize(200)} />
        <View style={{height:10}}></View>
        <Button title="Open" onPress={() => handleSnapPress(1)} />
        <View style={{height:10}}></View>
        <Button title="Close" onPress={() => handleClosePress()} /> 
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          maxDynamicContentSize ={maxDynamicContentSize}
          onChange={handleSheetChange}
          backgroundStyle={{backgroundColor:'red'}}
        >
          <BottomSheetView>
            <Text>Enable dynamic sizing for content view and scrollable content size. 🔥Enable dynamic sizing for content view and scrollable content size. 🔥Enable dynamic sizing for content view and scrollable content size. 🔥Enable dynamic sizing for content view and scrollable content size. 🔥Enable dynamic sizing for content view and scrollable content size. 🔥</Text>
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
});
export default BottomSheetViewMaxDynamicContentSizeLayoutDemo;