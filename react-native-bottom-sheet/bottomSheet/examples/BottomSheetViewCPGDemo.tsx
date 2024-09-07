import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { GestureHandlerRootView } from '@react-native-oh-tpl/react-native-gesture-handler';
const BottomSheetViewCPGDemo = () => {
 // hooks
  const sheetRef = useRef<BottomSheet>(null);
  const [enableContentPanningGesture, setEnableContentPanningGesture] = useState(true);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  const handleEnableContentPanningGesture1 = useCallback(() => {
    setEnableContentPanningGesture(true);
  }, []);

 const handleEnableContentPanningGesture2 = useCallback(() => {
  setEnableContentPanningGesture(false);
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
      <TestCase itShould="BottomSheetView style:enableContentPanningGesture = {enable}">
     <GestureHandlerRootView>
      <View style={styles.container}>
        <Button title="enableContentPanningGesture is true" onPress={() => handleEnableContentPanningGesture1()} />
        <View style={{height:10}}></View>
        <Button title="enableContentPanningGesture is false" onPress={() => handleEnableContentPanningGesture2()} />
        <View style={{height:10}}></View>
        <Button title="Open" onPress={() => handleSnapPress(1)} />
        <View style={{height:10}}></View>
        <Button title="Close" onPress={() => handleClosePress()} /> 
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enableContentPanningGesture={enableContentPanningGesture}
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
export default BottomSheetViewCPGDemo;