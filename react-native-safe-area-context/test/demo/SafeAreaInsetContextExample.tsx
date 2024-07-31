import { SafeAreaInsetsContext,SafeAreaProvider,Metrics } from 'react-native-safe-area-context';
import * as React from 'react';
import { View, Text } from 'react-native';

export const Element = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaInsetsContext.Consumer>
        {(insets) => <View style={{ paddingTop: insets?.top ,backgroundColor: 'red'}} >
            <Text >insets,top:{insets?.top}</Text>
            </View>}
      </SafeAreaInsetsContext.Consumer>
      </SafeAreaProvider>
  )
}