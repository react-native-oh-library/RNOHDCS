import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button, SectionList } from "react-native";
import BottomSheet, { BottomSheetSectionList } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "@react-native-oh-tpl/react-native-gesture-handler";
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";

const BottomSheetSectionListDemo = () => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const sections = useMemo(
    () =>
      Array(10)
        .fill(0)
        .map((_, index) => ({
          title: `Section ${index}`,
          data: Array(10)
            .fill(0)
            .map((_, index) => `Item ${index}`),
        })),
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
  const renderSectionHeader = useCallback(
    ({ section }) => (
      <View style={styles.sectionHeaderContainer}>
        <Text>{section.title}</Text>
      </View>
    ),
    []
  );
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
        <TestCase itShould="BottomSheet components: SectionList">
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
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChange}
          >
          <BottomSheetSectionList
            sections={sections}
            keyExtractor={(i) => i}
            renderSectionHeader={renderSectionHeader}
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
  sectionHeaderContainer: {
    backgroundColor: "white",
    padding: 6,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
});

export default BottomSheetSectionListDemo;