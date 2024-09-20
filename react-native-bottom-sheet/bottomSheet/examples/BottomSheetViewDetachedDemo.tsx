import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { GestureHandlerRootView } from '@react-native-oh-tpl/react-native-gesture-handler';
const BottomSheetViewDemo = () => {
 // hooks
  const sheetRef = useRef<BottomSheet>(null);

  const [detached, setDetached] = useState(false);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleDetached1 = useCallback(() => {
     setDetached(true);
  }, []);

  const handleDetached2 = useCallback(() => {
    setDetached(false);
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
      <TestCase itShould="BottomSheetView style:detached = {detached}">
     <GestureHandlerRootView>
      <View style={styles.container}>
        <Button title="detached is true" onPress={() => handleDetached1()} />
        <View style={{height:10}}></View>
        <Button title="detached is false" onPress={() => handleDetached2()} />
        <View style={{height:10}}></View>
        <Button title="Open" onPress={() => handleSnapPress(1)} />
        <View style={{height:10}}></View>
        <Button title="Close" onPress={() => handleClosePress()} />
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          detached = {detached}
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
    height:'90%',
    backgroundColor: 'grey',
  },
});
export default BottomSheetViewDemo;