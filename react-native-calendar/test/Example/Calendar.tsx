import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

import { CalendarExample } from './test1/CalendarExample1'
import { CalendarExample2 } from './test1/CalendarExample2'
import { CalendarExample3 } from './test1/CalendarExample3'
import { CalendarExample4 } from './test1/CalendarExample4'
import { CalendarExample5 } from './test1/CalendarExample5'
import { CalendarExample6 } from './test1/CalendarExample6'
import { CalendarExample7 } from './test1/CalendarExample7'
import { CalendarExample8 } from './test1/CalendarExample8'
import { CalendarExample9 } from './test1/CalendarExample9'

import { NavigationContainer, Page } from '../components/Navigation';


function Calendar() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <SafeAreaView>
        <NavigationContainer>


          <Page name="测试 Calendar1组件">
              <CalendarExample></CalendarExample>
            </Page>
          <Page name="测试 Calendar2组件">
            <CalendarExample2></CalendarExample2>
          </Page>
          <Page name="测试 Calendar3组件">
            <CalendarExample3></CalendarExample3>
          </Page>
          <Page name="测试 Calendar4组件">
            <CalendarExample4></CalendarExample4>
          </Page>
          <Page name="测试 Calendar5组件">
            <CalendarExample5></CalendarExample5>
          </Page>
          <Page name="测试 Calendar6组件">
            <CalendarExample6></CalendarExample6>
          </Page>
          <Page name="测试 Calendar7组件">
            <CalendarExample7></CalendarExample7>
          </Page>
          <Page name="测试 Calendar8组件">
            <CalendarExample8></CalendarExample8>
          </Page>
          <Page name="测试 Calendar9组件">
            <CalendarExample9></CalendarExample9>
          </Page>
  
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default Calendar;
