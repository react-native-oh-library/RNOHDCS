import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { GestureHandlerRootView } from '@react-native-oh-tpl/react-native-gesture-handler';
const BottomSheetViewIndexDemo = () => {
 // hooks
  const sheetRef = useRef<BottomSheet>(null);

  const [index, setIndex] = useState(0);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    setIndex(index)
  }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const handleIndexPress = useCallback((index) => {
    setIndex(index)
  }, []);

  
  // renders
  return (
    <Tester>
    <TestSuite name='BottomSheetViewIndexDemo'>
      <TestCase itShould="BottomSheetView style: index={index}">
     <GestureHandlerRootView>
      <View style={styles.container}>
        <Button title="index is 2" onPress={() => handleIndexPress(2)} />
        <View style={{height:10}}></View>
        <Button title="index is 1" onPress={() => handleIndexPress(1)} />
        <View style={{height:10}}></View>
        <Button title="index is 0" onPress={() => handleIndexPress(0)} />
        <View style={{height:10}}></View>
        <Button title="Close" onPress={() => handleClosePress()} />
        <BottomSheet
          ref={sheetRef}
          index={index}
          snapPoints={snapPoints}
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
export default BottomSheetViewIndexDemo;