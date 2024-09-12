import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetFooter, BottomSheetView } from '@gorhom/bottom-sheet';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { GestureHandlerRootView } from '@react-native-oh-tpl/react-native-gesture-handler';
import { HeaderHandle } from '../componets/headerHandle';
const BottomSheetViewFooterComponentDemo = () => {

  const [backdropPressBehavior, setBackdropPressBehavior] = useState<
  'none' | 'close' | 'collapse'
>('collapse');

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

  const renderFooter = useCallback(
    props => (
      <BottomSheetFooter {...props} bottomInset={24}>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Footer</Text>
        </View>
      </BottomSheetFooter>
    ),
    []
  );
  
  // renders
  return (
    <Tester>
    <TestSuite name='BottomSheetViewDemo'>
      <TestCase itShould="BottomSheetView Components:backdropComponent={renderBackdrop}">
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
          footerComponent={renderFooter}
        >
          <BottomSheetView>
          <Text>Awesome 🎉</Text>
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
  footerContainer: {
    padding: 12,
    margin: 12,
    borderRadius: 12,
    backgroundColor: '#80f',
  },
  footerText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '800',
  },
});
export default BottomSheetViewFooterComponentDemo;