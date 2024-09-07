import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button, VirtualizedList } from "react-native";
import BottomSheet, { BottomSheetVirtualizedList } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView, ScrollView } from "@react-native-oh-tpl/react-native-gesture-handler";
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";

const BottomSheetVirtualizedListDemo = () => {
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
    ({ item }) => (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );
  return (
  <Tester>
    <TestSuite name='BottomSheetViewDemo'>
      <TestCase itShould="BottomSheetView compoents:VirtualizedList">  
      <View style={styles.container}>
        <GestureHandlerRootView style={{flex:1}}>
            <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
            <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
            <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
            <Button title="Close" onPress={() => handleClosePress()} />
            <BottomSheet
              ref={sheetRef}
              snapPoints={snapPoints}
              onChange={handleSheetChange}
            >
              <BottomSheetVirtualizedList
                data={data}
                keyExtractor={(i) => i}
                getItemCount={(data) => data.length}
                getItem={(data, index) => data[index]}
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
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
});

export default BottomSheetVirtualizedListDemo;