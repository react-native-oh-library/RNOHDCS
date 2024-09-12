import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { GestureHandlerRootView } from '@react-native-oh-tpl/react-native-gesture-handler';
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
const BottomSheetFlatListDemo = () => {
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
  // render
  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );

  // renders
  return (
    <Tester>
     <TestSuite name='BottomSheetFlatListDemo'>
       <TestCase itShould="BottomSheetView conponets:FlatList">
        <View style={styles.container}>
        <GestureHandlerRootView style={{flex:1}}>
            <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
            <View style={{height:10}}></View>
            <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
            <View style={{height:10}}></View>
            <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
            <View style={{height:10}}></View>
            <Button title="Close" onPress={() => handleClosePress()} />  
            <BottomSheet
              ref={sheetRef}
              snapPoints={snapPoints}
              onChange={handleSheetChange}
            >
              <BottomSheetFlatList
                data={data}
                keyExtractor={(i) => i}
                renderItem={renderItem}
                contentContainerStyle={styles.contentContainer}
              />
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
    backgroundColor: "red",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "red",
  },

});

export default BottomSheetFlatListDemo;