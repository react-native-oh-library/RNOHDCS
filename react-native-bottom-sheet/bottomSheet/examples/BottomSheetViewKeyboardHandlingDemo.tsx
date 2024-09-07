import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { GestureHandlerRootView } from '@react-native-oh-tpl/react-native-gesture-handler';

import {
  SearchHandle,
  SEARCH_HANDLE_HEIGHT,
} from '../componets/searchHandle';

const BottomSheetViewKeyboardHandlingDemo = () => {

    // state
  const [keyboardBehavior, setKeyboardBehavior] = useState<
    'extend' | 'fillParent' | 'interactive'
  >('interactive');
  const [keyboardBlurBehavior, setKeyboardBlurBehavior] = useState<
    'none' | 'restore'
  >('none');

 // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => [SEARCH_HANDLE_HEIGHT + 34, 450], []);

  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );

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

  const handleExpandPress = useCallback(() => {
    sheetRef.current?.expand();
  }, []);

   // render
  // render
  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );

  const handleToggleKeyboardBehavior = useCallback(() => {
    setKeyboardBehavior(state => {
      switch (state) {
        case 'interactive':
          return 'extend';
        case 'extend':
          return 'fillParent';
        case 'fillParent':
          return 'interactive';
      }
    });
  }, []);
  const handleToggleKeyboardBlurBehavior = useCallback(() => {
    setKeyboardBlurBehavior(state => {
      switch (state) {
        case 'none':
          return 'restore';
        case 'restore':
          return 'none';
      }
    });
  }, []);

  // renders
  return (
    <Tester>
    <TestSuite name='BottomSheetViewDemo'>
      <TestCase itShould="BottomSheetView ">
     <GestureHandlerRootView>
      <View style={styles.container}>
        <Button
          title={`Toggle Keyboard Behavior: ${keyboardBehavior}`}
          onPress={handleToggleKeyboardBehavior}
        />
        <View style={{height:10}}></View>
        <Button
          title={`Toggle Keyboard Blur Behavior: ${keyboardBlurBehavior}`}
          onPress={handleToggleKeyboardBlurBehavior}
        />
          <View style={{height:10}}></View>
        <Button title="Expand" onPress={handleExpandPress} />
        <View style={{height:10}}></View>
        <Button title="Close" onPress={() => handleClosePress()} />
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChange}
          keyboardBehavior={"extend"}
          keyboardBlurBehavior={keyboardBlurBehavior}
          handleComponent={SearchHandle}
          maxDynamicContentSize={90}
        >
          <BottomSheetView >
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
    height:'90%',
    backgroundColor: 'grey',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "red",
  },
});
export default BottomSheetViewKeyboardHandlingDemo;