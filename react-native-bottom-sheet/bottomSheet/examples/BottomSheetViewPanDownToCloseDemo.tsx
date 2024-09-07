import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { GestureHandlerRootView } from '@react-native-oh-tpl/react-native-gesture-handler';
const BottomSheetViewPanDownToCloseDemo = () => {
 // hooks
  const sheetRef = useRef<BottomSheet>(null);
  const [enablePanDownToClose, setEnablePanDownToClose] = useState(false);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  const handleEnablePanDownToClose1 = useCallback(() => {
    setEnablePanDownToClose(true);
 }, []);

 const handleEnablePanDownToClose2 = useCallback(() => {
   setEnablePanDownToClose(false);
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
      <TestCase itShould="BottomSheetView style:enablePanDownToClose = {enable}">
     <GestureHandlerRootView>
      <View style={styles.container}>
        <Button title="enablePanDownToClose is true" onPress={() => handleEnablePanDownToClose1()} />
        <View style={{height:10}}></View>
        <Button title="enablePanDownToClose is false" onPress={() => handleEnablePanDownToClose2()} />
        <View style={{height:10}}></View>
        <Button title="Open" onPress={() => handleSnapPress(1)} />
        <View style={{height:10}}></View>
        <Button title="Close" onPress={() => handleClosePress()} /> 
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={enablePanDownToClose}
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
export default BottomSheetViewPanDownToCloseDemo;