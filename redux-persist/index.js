/**
 * @format
 */

import {AppRegistry, View, Text, SafeAreaView, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import store, {persistRootStore} from './store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

AppRegistry.setWrapperComponentProvider(appParams => {
  return ({children, ...otherProps}) => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistRootStore}>
        <SafeAreaView
          style={{width: '100%', height: '100%', backgroundColor: 'white'}}
          {...otherProps}>
          <View style={{width: '100%', height: 24, borderBottomWidth: 1}}>
            <Text
              style={{
                width: '100%',
                height: '100%',
                fontSize: 10,
              }}>
              {JSON.stringify({...appParams, Platform: Platform.OS})}
            </Text>
          </View>
          {children}
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
});

AppRegistry.registerComponent(appName, () => App);
