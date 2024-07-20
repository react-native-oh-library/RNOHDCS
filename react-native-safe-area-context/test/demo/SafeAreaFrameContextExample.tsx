import { SafeAreaFrameContext, SafeAreaProvider, Metrics } from 'react-native-safe-area-context';
import * as React from 'react';
import { View, Text } from 'react-native';

export const Element = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaFrameContext.Consumer>
        {(frame) => <View style={{ paddingTop:50,width: frame?.width, height: frame?.height, backgroundColor: 'red' }} >
          <Text >frame.x:{frame?.x}</Text>
          <Text >frame.y:{frame?.y}</Text>
          <Text >frame.width:{frame?.width}</Text>
          <Text >frame.height:{frame?.height}</Text>
        </View>}
      </SafeAreaFrameContext.Consumer>
    </SafeAreaProvider>
  )
}