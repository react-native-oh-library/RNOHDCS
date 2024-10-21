import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { GestureHandlerRootView } from '@react-native-oh-tpl/react-native-gesture-handler';
const BottomSheetViewOverDemo = () => {
 // hooks
  const sheetRef = useRef<BottomSheet>(null);

  const [overDragResistanceFactor, setOverDragResistanceFactor] = useState(2.5);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  
  const handleOverDragResistanceFactor = useCallback((index) => {
    setOverDragResistanceFactor(index)
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const handleOpenPress = useCallback(() => {
    sheetRef.current?.expand()
  }, []);


  // renders
  return (
    <Tester>
    <TestSuite name='BottomSheetViewDemo'>
      <TestCase itShould="BottomSheet style:overDragResistanceFactor={overDragResistanceFactor}">

     <GestureHandlerRootView>
      <View style={styles.container}>
        <Button title="overDragResistanceFactor is 10" onPress={() => handleOverDragResistanceFactor(10)} />
        <View style={{height:10}}></View>
        {/* <Button title="overDragResistanceFactor is 7.5" onPress={() => handleOverDragResistanceFactor(7.5)} />
        <View style={{height:10}}></View>
        <Button title="overDragResistanceFactor is 5" onPress={() => handleOverDragResistanceFactor(5)} />
        <View style={{height:10}}></View> */}
        <Button title="overDragResistanceFactor is 2.5" onPress={() => handleOverDragResistanceFactor(2.5)} />
        <View style={{height:10}}></View>
        <Button title="Close" onPress={() => handleClosePress()} />
        <View style={{height:10}}></View>
        <Button title="Open" onPress={() => handleOpenPress()} />
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          overDragResistanceFactor={overDragResistanceFactor}
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
    height:'85%',
    backgroundColor: 'grey',
  },
});
export default BottomSheetViewOverDemo;