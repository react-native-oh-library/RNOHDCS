import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { GestureHandlerRootView } from '@react-native-oh-tpl/react-native-gesture-handler';
import { CustomBackground } from '../componets/customBackground/customBackground';
const BottomSheetViewBackgroundComponentDemo = () => {
 // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => [150, 450], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
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
      <TestCase itShould="BottomSheetViewDemo Components:backgroundComponent ={CustomBackground}">
     <GestureHandlerRootView>
      <View style={styles.container}>
        <Button title="Snap To 450%" onPress={() => handleSnapPress(1)} />
        <View style={{height:10}}></View>
        <Button title="Snap To 150%" onPress={() => handleSnapPress(0)} />
        <View style={{height:10}}></View>
        <Button title="Close" onPress={() => handleClosePress()} />
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
      
          onChange={handleSheetChange}
          backgroundComponent={CustomBackground}
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
});
export default BottomSheetViewBackgroundComponentDemo;