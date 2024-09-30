import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'


import { CalendarProviderExample } from './test4/CalendarProviderExample'
import { CalendarProviderExample2 } from './test4/CalendarProviderExample2'
import { CalendarProviderExample3 } from './test4/CalendarProviderExample3'
import { CalendarProviderExample4 } from './test4/CalendarProviderExample4'
import { CalendarProviderExample5 } from './test4/CalendarProviderExample5'

import { NavigationContainer, Page } from '../components/Navigation';


function CalendarProvider() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <SafeAreaView>
        <NavigationContainer>


          <Page name="测试 CalendarProvider1组件">
            <CalendarProviderExample></CalendarProviderExample>
          </Page>
          <Page name="测试 CalendarProvider2组件">
            <CalendarProviderExample2></CalendarProviderExample2>
          </Page>
          <Page name="测试 CalendarProvider3组件">
            <CalendarProviderExample3></CalendarProviderExample3>
          </Page>
          <Page name="测试 CalendarProvider4组件">
            <CalendarProviderExample4></CalendarProviderExample4>
          </Page>
          <Page name="测试 CalendarProvider5组件">
            <CalendarProviderExample5></CalendarProviderExample5>
          </Page>



        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default CalendarProvider;
