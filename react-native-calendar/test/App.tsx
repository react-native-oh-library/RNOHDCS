import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

import { AgendaExample } from './Example/AgendaExample'
import { CalendarExample } from './Example/CalendarExample'
import { CalendarListExample } from './Example/CalendarListExample'
import { CalendarProviderExample } from './Example/CalendarProviderExample'
import { AgendaListExample } from './Example/AgendaListExample'
import { ExpandableCalendarExample } from './Example/ExpandableCalendarExample'
import { TimelineExample } from './Example/TimelineExample'
import { WeekCalendarExample } from './Example/WeekCalendarExample'
import { NavigationContainer, Page } from './components/Navigation';


function App() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <SafeAreaView>
        <NavigationContainer>

          <Page name="测试 Calendar组件">
            <CalendarExample></CalendarExample>
          </Page>
          <Page name="测试 Agenda组件">
            <AgendaExample></AgendaExample>
          </Page>
          <Page name="测试 CalendarList组件">
            <CalendarListExample></CalendarListExample>
          </Page>
          <Page name="测试 WeekCalendar组件">
            <WeekCalendarExample></WeekCalendarExample>
          </Page>
          <Page name="测试 CalendarProvider组件">
            <CalendarProviderExample></CalendarProviderExample>
          </Page>
          <Page name="测试 AgendaList组件">
            <AgendaListExample></AgendaListExample>
          </Page>
          <Page name="测试 ExpandableCalendar组件">
            <ExpandableCalendarExample></ExpandableCalendarExample>
          </Page>
          <Page name="测试 TimelineExample组件">
            <TimelineExample></TimelineExample>
          </Page>



        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default App;
