import React from 'react';
import { Text, View } from 'react-native';
import SplashScreen from '@react-native-oh-tpl/react-native-splash-screen/src/RNSplashScreenModule';

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Hello, world!</Text>
      </View>
    )
  }
}

export default App;