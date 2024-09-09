import React, { memo, useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  ScrollView as RNScrollView,
  ScrollViewProps as RNScrollViewProps,
} from 'react-native';
import BottomSheet,{ BottomSheetScrollView } from '@gorhom/bottom-sheet';

//import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
//import BottomSheetScrollView from '@gorhom/bottom-sheet';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { GestureHandlerRootView, ScrollView } from '@react-native-oh-tpl/react-native-gesture-handler';


const BottomSheetScrollViewDemo = () => {
 // hooks
  const sheetRef = useRef<BottomSheet>(null);
  
 // variables
 const data = useMemo(
   () =>
     Array(50)
       .fill(0)
       .map((_, index) => `index-${index}`),
   []
 );
 const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

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

 // render
 const renderItem = useCallback(
   (item) => (
     <View key={item} style={styles.itemContainer}>
       <Text>{item}</Text>
     </View>
   ),
   []
 );

  // renders
  return (
    <Tester>
     <TestSuite name='BottomSheetScrollViewDemo'>
       <TestCase itShould="BottomSheet componets:SectionList">
        <View style={styles.container}>
          <GestureHandlerRootView style={{flex:1}}>
          <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
          <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
          <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
          <Button title="Close" onPress={() => handleClosePress()} />
          <BottomSheet
            ref = {sheetRef}
            snapPoints={snapPoints}
            onChange={handleSheetChange}
          > 
          <BottomSheetScrollView  contentContainerStyle={styles.contentContainer}>
              {data.map(renderItem)}
          </BottomSheetScrollView>
         </BottomSheet>
          </GestureHandlerRootView>  
        </View>
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
  contentContainer: {
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "red",
  },

});

export default BottomSheetScrollViewDemo;