import {  } from 'react-native-safe-area-context';
import * as React from 'react';
import { withSafeAreaInsets, WithSafeAreaInsetsProps, SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';

class MyConmpoent extends React.Component<WithSafeAreaInsetsProps> {
    render() {
      const {insets} = this.props;
      return <View style={{ paddingTop: insets.top,backgroundColor:'red' }} />
    }
  }
  
  export const ClassComponentWithInsets = withSafeAreaInsets(MyConmpoent);

  export const Element = () => {
    return (
      <SafeAreaProvider>
      <ClassComponentWithInsets/>
      </SafeAreaProvider>
    )
}