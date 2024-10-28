import React, {useEffect} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
  } from 'react-native';
  import {NavigationContainer, Page} from '../components/Navigation';
  import ParseExample from './ParseExample';
  import MoreExample from './MoreExample';

  function App() {
    return (
      <View style={{backgroundColor: 'black'}}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <NavigationContainer>
              <Page name="ParseExample">
                <ParseExample />
              </Page>
              <Page name="MoreExample">
                <MoreExample />
              </Page>
          </NavigationContainer>
        </SafeAreaView>
      </View>
    );
  }
  
  export default App;