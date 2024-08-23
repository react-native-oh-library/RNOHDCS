import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

import { ExpandableCalendarExample } from './test5/ExpandableCalendarExample'
import { ExpandableCalendarExample2 } from './test5/ExpandableCalendarExample2'
import { ExpandableCalendarExample3 } from './test5/ExpandableCalendarExample3'
import { ExpandableCalendarExample4 } from './test5/ExpandableCalendarExample4'
import { ExpandableCalendarExample5 } from './test5/ExpandableCalendarExample5'
import  CalendarWithOpenThreshold  from './test5/ExpandableCalendarExample6'


import { NavigationContainer, Page } from '../components/Navigation';


function ExpandableCalendar() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <SafeAreaView>
        <NavigationContainer>


          <Page name="测试 ExpandableCalendar1组件">
              <ExpandableCalendarExample></ExpandableCalendarExample>
            </Page>
          <Page name="测试 ExpandableCalendar2组件">
            <ExpandableCalendarExample2></ExpandableCalendarExample2>
          </Page>
          <Page name="测试 ExpandableCalendar3组件">
            <ExpandableCalendarExample3></ExpandableCalendarExample3>
          </Page>
          <Page name="测试 ExpandableCalendar4组件">
            <ExpandableCalendarExample4></ExpandableCalendarExample4>
          </Page>
          <Page name="测试 ExpandableCalendar5组件">
            <ExpandableCalendarExample5></ExpandableCalendarExample5>
          </Page>
          <Page name="测试 ExpandableCalendar6组件">
            <CalendarWithOpenThreshold></CalendarWithOpenThreshold>
          </Page>
          
         
  
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default ExpandableCalendar;
