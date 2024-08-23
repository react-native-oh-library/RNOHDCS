import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Dimensions, Alert } from 'react-native';
import {
  Timeline,
  TimelineList,
  CalendarProvider,
  ExpandableCalendar,
  TimelineEventProps,
  CalendarUtils,
  TimelineProps,
  Calendar
} from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';


import groupBy from 'lodash/groupBy';
import filter from 'lodash/filter';
import find from 'lodash/find';
const [daySelected, setDaySelected] = useState('');

const EVENT_COLOR = '#e6add8';
const today = new Date();

const INITIAL_TIME = { hour: 9, minutes: 0 };

const getDate = (offset = 0) => CalendarUtils.getCalendarDateString(new Date().setDate(today.getDate() + offset));

const timelineEvents: TimelineEventProps[] = [
  {
    start: `${getDate(-1)} 09:20:00`,
    end: `${getDate(-1)} 12:00:00`,
    title: 'Merge Request to React Native Calendars',
    summary: 'Merge Timeline Calendar to React Native Calendars'
  },
  {
    start: `${getDate()} 01:15:00`,
    end: `${getDate()} 02:30:00`,
    title: 'Meeting A',
    summary: 'Summary for meeting A',
    color: EVENT_COLOR
  },
  {
    start: `${getDate()} 01:30:00`,
    end: `${getDate()} 02:30:00`,
    title: 'Meeting B',
    summary: 'Summary for meeting B',
    color: EVENT_COLOR
  }

];
interface PackedEvent {
  date: string; // 日期字符串，可能是ISO格式或其他  
  title: string; // 事件标题  
  // 可能还有其他属性，如颜色、时间等  
}

const renderEvent = ({ event }: { event: PackedEvent }) => {
  // 这里可以根据event对象中的信息来定制你的渲染逻辑  
  return (
    <View style={styles.eventBlock}>
      <Text style={styles.eventTitle}>{event.title}</Text>
      {/* 如果需要，可以在这里添加更多元素，如日期、时间、图标等 */}
    </View>
  );
};

export function TimelineExample6() {

  const [currentDate, setCurrentDate] = useState(getDate())
  const [events, setEvents] = useState(timelineEvents)
  const [eventsByDate, setEventsByDate] = useState(groupBy(timelineEvents, (e: any) => CalendarUtils.getCalendarDateString(e.start)))
  const marked = {
    [`${getDate(-1)}`]: { marked: true },
    [`${getDate()}`]: { marked: true },
    [`${getDate(1)}`]: { marked: true },
    [`${getDate(2)}`]: { marked: true },
    [`${getDate(4)}`]: { marked: true }
  };

  const createNewEvent: TimelineProps['onBackgroundLongPress'] = (timeString, timeObject) => {

    console.log('1111************************************************')
    console.log('timeString:', timeString)
    console.log('timeObject:', timeObject)
    console.log('22222************************************************')
  };

  const approveNewEvent: TimelineProps['onBackgroundLongPressOut'] = (_timeString, timeObject) => {

    console.log('333333************************************************')
    console.log('timeString:', _timeString)
    console.log('timeObject:', timeObject)
    console.log('4444444************************************************')
  };

  const onEventPress = (event: any) => {
    console.log('55555++++++++++++++++++++++++++++++++++++++++++++++++')
    console.log(event)
    console.log('666666++++++++++++++++++++++++++++++++++++++++++++++++')
  }


  const timelineProps: Partial<TimelineProps> = {
    format24h: true,
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
  };

  const timelineProps1: Partial<TimelineProps> = {
    start: 9,
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
  };

  const timelineProps11: Partial<TimelineProps> = {
    end: 18,
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
  };
  const timelineProps2: Partial<TimelineProps> = {
    scrollToFirst: false,
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
  };

  const timelineProps3: Partial<TimelineProps> = {
    scrollToFirst: true,
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
  };

  const timelineProps4: Partial<TimelineProps> = {
    format24h: true,
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
  };

  const timelineProps5: Partial<TimelineProps> = {
    format24h: false,
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
  };
  const timelineProps6: Partial<TimelineProps> = {
    format24h: false,
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
    theme: { calendarBackground: 'yellow' }
  };



  return <ScrollView style={{ flex: 1 }}>

    <Tester>
      <TestSuite name='style'>
        <TestCase itShould="test TimelineList style property">
          <View style={{ borderWidth: 2, borderColor: 'blue', width: '100%', height: 800 }}>
            <CalendarProvider date={getDate()}>
              <ExpandableCalendar></ExpandableCalendar>
              <TimelineList
                events={eventsByDate}
                initialTime={INITIAL_TIME}
                timelineProps={timelineProps}

              ></TimelineList>
            </CalendarProvider>
          </View>
        </TestCase>
      </TestSuite>
    </Tester>

    <Tester>
      <TestSuite name='style'>
        <TestCase itShould="test TimelineList style property">
          <View style={{ borderWidth: 5, borderColor: 'green', width: '90%', height: 800 }}>
            <CalendarProvider date={getDate()}>
              <ExpandableCalendar></ExpandableCalendar>
              <TimelineList
                events={eventsByDate}
                initialTime={INITIAL_TIME}
                timelineProps={timelineProps}

              ></TimelineList>
            </CalendarProvider>
          </View>
        </TestCase>
      </TestSuite>
    </Tester>

    <Tester>
            <TestSuite name='renderEvent'>
                <TestCase
                    itShould="test TimelineList renderEvent function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {

                        return <Calendar
                            onDayPress={day => {
                                setDaySelected(day.dateString);
                                setState(true)
                                

                            }}
                           
                            renderEvent={renderEvent}
                        />

                    }}
                >
                </TestCase>
            </TestSuite>
        </Tester>

   


  </ScrollView>
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  item: {
    width: '100%',
    marginBottom: 20,
    borderColor: 'blue',
    borderWidth: 1,
  },
  itemText: {
    color: 'white',
    fontSize: 12,
  },
  calendar: {
    paddingLeft: 20,
    paddingRight: 20
  },
  eventBlock: {
    backgroundColor: 'red', // 或者其他颜色  
    padding: 10,
    margin:8,
    borderRadius: 5,
  },
  eventTitle: {
    color: 'pink', // 确保文本颜色与背景色对比鲜明  
    fontSize: 20,
    fontWeight: 'bold',
  },
})

