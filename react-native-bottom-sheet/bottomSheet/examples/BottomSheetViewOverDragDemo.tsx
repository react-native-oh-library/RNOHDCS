import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { GestureHandlerRootView } from '@react-native-oh-tpl/react-native-gesture-handler';
const BottomSheetViewOverDragDemo = () => {
 // hooks
  const sheetRef = useRef<BottomSheet>(null);
  const [enableOverDrag, setEnableOverDrag] = useState(true);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  const handleEnableOverDrag1 = useCallback(() => {
    setEnableOverDrag(true);
 }, []);

 const handleEnableOverDrag2 = useCallback(() => {
  setEnableOverDrag(false);
}, []);

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
      <TestCase itShould="BottomSheetView style:enableOverDrag = {enable}">
     <GestureHandlerRootView>
      <View style={styles.container}>
        <Button title="enableOverDrag is true" onPress={() => handleEnableOverDrag1()} />
        <View style={{height:10}}></View>
        <Button title="enableOverDrag is false" onPress={() => handleEnableOverDrag2()} />
        <View style={{height:10}}></View>
        <Button title="Open" onPress={() => handleSnapPress(1)} />
        <View style={{height:10}}></View>
        <Button title="Close" onPress={() => handleClosePress()} /> 
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enableOverDrag={enableOverDrag}
          onChange={handleSheetChange}
        >
          <BottomSheetView>
            <Text>Awesome 🔥</Text>
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
    height:'88%',
    backgroundColor: 'grey',
  },
});
export default BottomSheetViewOverDragDemo;