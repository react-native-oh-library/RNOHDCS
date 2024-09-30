import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { GestureHandlerRootView } from '@react-native-oh-tpl/react-native-gesture-handler';
const BottomSheetBackdropDemo = () => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
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

  const renderBackdrop = useCallback(
		(props) => (
			<BottomSheetBackdrop
				{...props}
				disappearsOnIndex={1}
				appearsOnIndex={2}
			/>
		),
		[]
	);

  // renders
  return (
    <Tester>
     <TestSuite name='BottomSheetViewDemo'>
       <TestCase itShould="BottomSheetView compoents:Backdrop">
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
              backdropComponent={renderBackdrop}
            >
              <BottomSheetView>
                <Text>Awesome 🔥</Text>
              </BottomSheetView>
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
});

export default BottomSheetBackdropDemo;