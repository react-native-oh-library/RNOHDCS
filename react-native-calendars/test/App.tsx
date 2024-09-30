import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

import  Calendar  from './Example/Calendar'
import CalendarProvider  from './Example/CalendarProvider'
import  AgendaList  from './Example/AgendaList'
import ExpandableCalendar from './Example/ExpandableCalendar'
import { WeekCalendarExample } from './Example/WeekCalendarExample'
import CalendarList from './Example/CalendarList'
import Timeline from './Example/timeLine'
import Agenda from './Example/Agenda'


import { NavigationContainer, Page } from './components/Navigation';



function App() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <SafeAreaView>
        <NavigationContainer>


          <Page name="测试 Calendar组件">
            <Calendar></Calendar>
          </Page>
          <Page name="测试 WeekCalendar组件">
            <WeekCalendarExample></WeekCalendarExample>
          </Page>
          <Page name="测试 CalendarProvider组件">
            <CalendarProvider></CalendarProvider>
          </Page>
          <Page name="测试 AgendaList组件">
            <AgendaList></AgendaList>
          </Page>
          <Page name="测试 ExpandableCalendar组件">
            <ExpandableCalendar></ExpandableCalendar>
          </Page>
          <Page name="测试 CalendarList组件">
            <CalendarList></CalendarList>
          </Page>
          <Page name="测试 Agenda组件">
            <Agenda></Agenda>
          </Page>
          <Page name="测试 Timeline组件">
            <Timeline></Timeline>
          </Page>
          


        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default App;
