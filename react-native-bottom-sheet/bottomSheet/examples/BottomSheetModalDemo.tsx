import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetHandleProps,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from '@react-native-oh-tpl/react-native-gesture-handler'
import { TestCase, TestSuite, Tester } from '@rnoh/testerino';
import { HeaderHandle } from '../componets/headerHandle';

const BottomSheetModalDemo = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const [stackBehavior, setStackBehavior] = useState<
    'push' | 'replace'
  >('push');

  const [name, setName] = useState<'A' | 'B'>('A');

  const [text, setText] = useState('');
  
  const [enableDismissOnClose, setEnableDismissOnClose] = useState<boolean>(true);

  const handleStackBehavior = useCallback(() => {
    setStackBehavior(state => {
      switch (state) {
        case 'push':
          return 'replace';
        case 'replace':
          return 'push';
      }
    });
  }, []);

  const handlerName = useCallback(() => {
    setName(state => {
      switch (state) {
        case 'A':
          return 'B';
        case 'B':
          return 'A';
      }
    });
  }, []);

  const handlerDismissOnClose = useCallback(() => {
    setEnableDismissOnClose(state => {
      return !state
    });
  }, []);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderHeaderHandle = useCallback(
    (title: string) => (props: BottomSheetHandleProps) =>
      <HeaderHandle {...props} children={title} />,
    []
  );

  const renderBottomSheetContent = useCallback(
    (onPress: () => void) => (
      <Text>Awesome 🎉</Text>
    ),
    []
  );

  const handleExpandPress = useCallback(() => {
    if (bottomSheetModalRef.current) {
      bottomSheetModalRef.current.present();
    }
  }, []);

  const handleClosePress = useCallback(() => {
    if (bottomSheetModalRef.current) {
      bottomSheetModalRef.current.close();
    }
  }, []);

  const handleDismiss = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('on dismiss');
    setText('on dismiss')
  }, []);

  // renders
  return (
    <Tester>
    <TestSuite name='BottomSheetModal'>
      <TestCase itShould="BottomSheetModal style:name = {name}  stackBehavior={stackBehavior} enableDismissOnClose = {enableDismissOnClose}  onDismiss={handleDismiss}">
      <View style={styles.container}>
       <GestureHandlerRootView style={{flex:1}}>
        <BottomSheetModalProvider>
        <View style={styles.container}>
        <View style = {styles.inputArea}>
          <Text style={styles.baseText}>
            {text}
          </Text>
        </View>
          <Button
            title={`Toggle name: ${name}`}
            onPress={handlerName}
          />
          <View style={{height:10}}></View>
          <Button
            title={`Toggle stackBehavior: ${stackBehavior}`}
            onPress={handleStackBehavior}
          />
          <View style={{height:10}}></View>
          <Button
            title={`Toggle enableDismissOnClose: ${enableDismissOnClose}`}
            onPress={handlerDismissOnClose}
          />
          <View style={{height:10}}></View>
          <Button title="Expand" onPress={handleExpandPress} />
          <View style={{height:10}}></View>
          <Button title="Close" onPress={() => handleClosePress()} />
          <BottomSheetModal
            name='A'
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            stackBehavior={stackBehavior}
            enableDismissOnClose = {enableDismissOnClose}
            onDismiss={handleDismiss}
            onChange={handleSheetChanges}
            handleComponent={renderHeaderHandle(`Modal ${name}`)}
            children={renderBottomSheetContent(handlePresentModalPress)}
          >
          </BottomSheetModal>
        </View>
       </BottomSheetModalProvider>
      </GestureHandlerRootView>
      </View>
     </TestCase>
    </TestSuite>
  </Tester>    
  );
};

const styles = StyleSheet.create({
  container: {
    height:'80%',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  baseText: {
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:16
  },
  inputArea: {
    width:'100%',
    height:'10%',
    borderWidth:2,
    borderColor:'#000000',
    marginTop:8,
    marginBottom:10,
    justifyContent:'center',
    alignItems:'center',
  },
});

export default BottomSheetModalDemo;