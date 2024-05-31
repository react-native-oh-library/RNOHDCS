import React from 'react';
import { View, Button } from 'react-native';
import SafeModule from 'react-native-safe-module';

const App = () => {
  const NativeLottieView = SafeModule.component({
    viewName: 'LottieAnimationView',
    mockComponent: View,
  });
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <NativeLottieView
        style={{ backgroundColor: 'red', width: 100, height: 100 }}
        source={undefined}
        sourceName={undefined}
        sourceJson={undefined}
      />
    </View>
  );
};

export default App;