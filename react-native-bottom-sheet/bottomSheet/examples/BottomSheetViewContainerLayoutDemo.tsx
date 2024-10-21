import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { GestureHandlerRootView } from '@react-native-oh-tpl/react-native-gesture-handler';
const BottomSheetViewContainerLayoutDemo = () => {
 // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  const [containerHeight, setContainerHeight] = useState(0);

  // callbacksh
  const handleHeightpres = useCallback((index) => {
    console.info("------------"+ index)
    setContainerHeight(index);
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
      <TestCase itShould="BottomSheetViewDemo Layout: containerHeight ={containerHeight}">
     <GestureHandlerRootView>
      <View style={styles.container}>
       <Button title="containerHeight is 0" onPress={() => handleHeightpres(0)} />
        <View style={{height:10}}></View>
        {/* <Button title="containerHeight is 10" onPress={() => handleHeightpres(10)} /> */}
        <View style={{height:10}}></View>
        <Button title="containerHeight is 20" onPress={() => handleHeightpres(20)} />
        <View style={{height:10}}></View>
        <Button title="Open" onPress={() => handleSnapPress(1)} />
        <View style={{height:10}}></View>
        <Button title="Close" onPress={() => handleClosePress()} /> 
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          containerHeight ={containerHeight}
          onChange={handleSheetChange}
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
export default BottomSheetViewContainerLayoutDemo;