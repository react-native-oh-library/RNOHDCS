import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

import  CalendarListScreen  from './test6/calendarListScreen'
import  CalendarListScreen2  from './test6/calendarListScreen2'


import { NavigationContainer, Page } from '../components/Navigation';


function CalendarList() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <SafeAreaView>
        <NavigationContainer>


          <Page name="测试 CalendarList1组件">
              <CalendarListScreen></CalendarListScreen>
            </Page>
          <Page name="测试 CalendarList2组件">
            <CalendarListScreen2></CalendarListScreen2>
          </Page>
         
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default CalendarList;
