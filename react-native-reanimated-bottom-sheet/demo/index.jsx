import React from "react";
import { View, Button, Text,Dimensions } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from "reanimated-bottom-sheet";


export default function () {
  const WINDOW_HEIGHT = Dimensions.get('window').height;
  const sheetRef = React.useRef(null);
  const renderContent = () => (
    <View
      style={{
        padding: 16,
      }}>
      <Text>this is content</Text>
    </View>
  );

  const renderHeader = () => (
    <View
      style={{
        padding: 16,
      }}>
      <Text>title</Text>
    </View>
  )

  return (
    <GestureHandlerRootView style={{ height:WINDOW_HEIGHT, }}>
      <View
        style={{
          height:WINDOW_HEIGHT,
          backgroundColor: 'papayawhip',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{ flex: 1, gap: 10, justifyContent: 'center' }}>
          <Button
            title="sheetRef?.current.snapTo(2)"
            onPress={() => sheetRef?.current.snapTo(2)}
          />
          <Button
            title="sheetRef?.current.snapTo(1)"
            onPress={() => sheetRef?.current.snapTo(1)}
          />
          <Button
            title="sheetRef?.current.snapTo(0)"
            onPress={() => sheetRef?.current.snapTo(0)}
          />
        </View>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[200, 100, 0]}
        initialSnap={0}
        renderHeader={renderHeader}
        renderContent={renderContent} />
    </GestureHandlerRootView>
  )
}