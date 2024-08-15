import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Dimensions, Alert } from 'react-native';
import { Timeline, 
    TimelineList, 
    CalendarProvider, 
    ExpandableCalendar, 
    TimelineEventProps, 
    CalendarUtils, 
    TimelineProps } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';


import groupBy from 'lodash/groupBy';
import filter from 'lodash/filter';
import find from 'lodash/find';


const EVENT_COLOR = '#e6add8';
const today = new Date();

const INITIAL_TIME = {hour: 9, minutes: 0};

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
    },
    {
      start: `${getDate()} 01:45:00`,
      end: `${getDate()} 02:45:00`,
      title: 'Meeting C',
      summary: 'Summary for meeting C',
      color: EVENT_COLOR
    },
    {
      start: `${getDate()} 02:40:00`,
      end: `${getDate()} 03:10:00`,
      title: 'Meeting D',
      summary: 'Summary for meeting D',
      color: EVENT_COLOR
    },
    {
      start: `${getDate()} 02:50:00`,
      end: `${getDate()} 03:20:00`,
      title: 'Meeting E',
      summary: 'Summary for meeting E',
      color: EVENT_COLOR
    },
    {
      start: `${getDate()} 04:30:00`,
      end: `${getDate()} 05:30:00`,
      title: 'Meeting F',
      summary: 'Summary for meeting F',
      color: EVENT_COLOR
    },
    {
      start: `${getDate(1)} 00:30:00`,
      end: `${getDate(1)} 01:30:00`,
      title: 'Visit Grand Mother',
      summary: 'Visit Grand Mother and bring some fruits.',
      color: 'lightblue'
    },
    {
      start: `${getDate(1)} 02:30:00`,
      end: `${getDate(1)} 03:20:00`,
      title: 'Meeting with Prof. Behjet Zuhaira',
      summary: 'Meeting with Prof. Behjet at 130 in her office.',
      color: EVENT_COLOR
    },
    {
      start: `${getDate(1)} 04:10:00`,
      end: `${getDate(1)} 04:40:00`,
      title: 'Tea Time with Dr. Hasan',
      summary: 'Tea Time with Dr. Hasan, Talk about Project'
    },
    {
      start: `${getDate(1)} 01:05:00`,
      end: `${getDate(1)} 01:35:00`,
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032'
    },
    {
      start: `${getDate(1)} 14:30:00`,
      end: `${getDate(1)} 16:30:00`,
      title: 'Meeting Some Friends in ARMED',
      summary: 'Arsalan, Hasnaat, Talha, Waleed, Bilal',
      color: 'pink'
    },
    {
      start: `${getDate(2)} 01:40:00`,
      end: `${getDate(2)} 02:25:00`,
      title: 'Meet Sir Khurram Iqbal',
      summary: 'Computer Science Dept. Comsats Islamabad',
      color: 'orange'
    },
    {
      start: `${getDate(2)} 04:10:00`,
      end: `${getDate(2)} 04:40:00`,
      title: 'Tea Time with Colleagues',
      summary: 'WeRplay'
    },
    {
      start: `${getDate(2)} 00:45:00`,
      end: `${getDate(2)} 01:45:00`,
      title: 'Lets Play Apex Legends',
      summary: 'with Boys at Work'
    },
    {
      start: `${getDate(2)} 11:30:00`,
      end: `${getDate(2)} 12:30:00`,
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032'
    },
    {
      start: `${getDate(4)} 12:10:00`,
      end: `${getDate(4)} 13:45:00`,
      title: 'Merge Request to React Native Calendars',
      summary: 'Merge Timeline Calendar to React Native Calendars'
    }
  ];

export function TimelineExample() {

        const [currentDate, setCurrentDate] = useState(getDate())
        const [events, setEvents] = useState(timelineEvents)
        const [eventsByDate, setEventsByDate] = useState(groupBy(timelineEvents, (e:any) => CalendarUtils.getCalendarDateString(e.start)))
        const marked = {
            [`${getDate(-1)}`]: {marked: true},
            [`${getDate()}`]: {marked: true},
            [`${getDate(1)}`]: {marked: true},
            [`${getDate(2)}`]: {marked: true},
            [`${getDate(4)}`]: {marked: true}
          };

          const createNewEvent: TimelineProps['onBackgroundLongPress'] = (timeString, timeObject) => {

            console.log('1111************************************************')
            console.log('timeString:', timeString)
            console.log('timeObject:', timeObject)
            console.log('22222************************************************')
          };

          const  approveNewEvent: TimelineProps['onBackgroundLongPressOut'] = (_timeString, timeObject) => {

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
        //   const timelineProps7: Partial<TimelineProps> = {
        //     onBackgroundLongPress: createNewEvent,
        //     overlapEventsSpacing: 8,
        //     rightEdgeSpacing: 24,
        //   };
        //   const timelineProps8: Partial<TimelineProps> = {
        //     onBackgroundLongPressOut: approveNewEvent,
        //     overlapEventsSpacing: 8,
        //     rightEdgeSpacing: 24,
        //   };
        //   const timelineProps9: Partial<TimelineProps> = {
        //     onEventPress: onEventPress,
        //     overlapEventsSpacing: 8,
        //     rightEdgeSpacing: 24,
        //   };

          
        
        
        return <ScrollView style={{flex: 1}}>
            <Tester>
            <TestSuite name='initialPosition'>
                <TestCase itShould="test TimelineList events property">
                    <View style={{borderWidth: 1, borderColor: 'red', width: '100%', height: 500}}>
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
                <TestCase itShould="test TimelineList start property with value 9">
                    <View style={{borderWidth: 1, borderColor: 'red', width: '100%', height: 500}}>
                        <CalendarProvider date={getDate()} >
                            <ExpandableCalendar
                                firstDay={1}
                                leftArrowImageSource={require('./img/previous.png')}
                                rightArrowImageSource={require('./img/next.png')}
                                markedDates={marked}
                            ></ExpandableCalendar>
                            <TimelineList events={eventsByDate} timelineProps={timelineProps1} initialTime={INITIAL_TIME}></TimelineList>
                        </CalendarProvider>
                    </View>
                </TestCase>
                <TestCase itShould="test TimelineList end property with value 18">
                    <View style={{borderWidth: 1, borderColor: 'red', width: '100%', height: 500}}>
                        <CalendarProvider date={getDate()} >
                            <ExpandableCalendar
                                firstDay={1}
                                leftArrowImageSource={require('./img/previous.png')}
                                rightArrowImageSource={require('./img/next.png')}
                                markedDates={marked}
                            ></ExpandableCalendar>
                            <TimelineList events={eventsByDate} timelineProps={timelineProps11} initialTime={INITIAL_TIME}></TimelineList>
                        </CalendarProvider>
                    </View>
                </TestCase>
                <TestCase itShould="test TimelineList scrollToFirst property with value true">
                    <View style={{borderWidth: 1, borderColor: 'red', width: '100%', height: 500}}>
                        <CalendarProvider date={getDate()}>
                            <ExpandableCalendar
                                firstDay={1}
                                leftArrowImageSource={require('./img/previous.png')}
                                rightArrowImageSource={require('./img/next.png')}
                                markedDates={marked}
                            ></ExpandableCalendar>
                            <TimelineList events={eventsByDate} timelineProps={timelineProps3} initialTime={INITIAL_TIME}></TimelineList>
                        </CalendarProvider>
                    </View>
                </TestCase>
                <TestCase itShould="test TimelineList scrollToFirst property with value false">
                    <View style={{borderWidth: 1, borderColor: 'red', width: '100%', height: 500}}>
                        <CalendarProvider date={getDate()} >
                            <ExpandableCalendar
                                firstDay={1}
                                leftArrowImageSource={require('./img/previous.png')}
                                rightArrowImageSource={require('./img/next.png')}
                                markedDates={marked}
                            ></ExpandableCalendar>
                            <TimelineList events={eventsByDate} timelineProps={timelineProps2} initialTime={INITIAL_TIME}></TimelineList>
                        </CalendarProvider>
                    </View>
                </TestCase>
                <TestCase itShould="test TimelineList format24h property with value true">
                    <View style={{borderWidth: 1, borderColor: 'red', width: '100%', height: 500}}>
                        <CalendarProvider date={getDate()}>
                            <ExpandableCalendar
                                firstDay={1}
                                leftArrowImageSource={require('./img/previous.png')}
                                rightArrowImageSource={require('./img/next.png')}
                                markedDates={marked}
                            ></ExpandableCalendar>
                            <TimelineList events={eventsByDate} timelineProps={timelineProps4} initialTime={INITIAL_TIME}></TimelineList>
                        </CalendarProvider>
                    </View>
                </TestCase>
                <TestCase itShould="test TimelineList format24h property with value false">
                    <View style={{borderWidth: 1, borderColor: 'red', width: '100%', height: 500}}>
                        <CalendarProvider date={getDate()}>
                            <ExpandableCalendar
                                firstDay={1}
                                leftArrowImageSource={require('./img/previous.png')}
                                rightArrowImageSource={require('./img/next.png')}
                                markedDates={marked}
                            ></ExpandableCalendar>
                            <TimelineList events={eventsByDate} timelineProps={timelineProps5} initialTime={INITIAL_TIME}></TimelineList>
                        </CalendarProvider>
                    </View>
                </TestCase>
                <TestCase itShould="test TimelineList theme property with value calendarBackground yellow">
                    <View style={{borderWidth: 1, borderColor: 'red', width: '100%', height: 500}}>
                        <CalendarProvider date={getDate()}>
                            <ExpandableCalendar
                                firstDay={1}
                                leftArrowImageSource={require('./img/previous.png')}
                                rightArrowImageSource={require('./img/next.png')}
                                markedDates={marked}
                            ></ExpandableCalendar>
                            <TimelineList events={eventsByDate} timelineProps={timelineProps6} initialTime={INITIAL_TIME}></TimelineList>
                        </CalendarProvider>
                    </View>
                </TestCase>
                </TestSuite>
        </Tester>
        <Tester>
            <TestSuite name='onBackgroundLongPress'>
                <TestCase itShould="test Timeline onBackgroundLongPress function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {
                        return <View style={{borderWidth: 1, borderColor: 'red', width: '100%', height: 500}}>
                        <CalendarProvider date={getDate()}>
                            <ExpandableCalendar
                                firstDay={1}
                                leftArrowImageSource={require('./img/previous.png')}
                                rightArrowImageSource={require('./img/next.png')}
                                markedDates={marked}
                            ></ExpandableCalendar>
                            <TimelineList 
                                events={eventsByDate} 
                                timelineProps={{
                                    onBackgroundLongPress: () => {
                                        setState(true)
                                    }
                                }} 
                                initialTime={INITIAL_TIME}
                            ></TimelineList>
                        </CalendarProvider>
                    </View>
                    }}
                >
                </TestCase>
                </TestSuite>
        </Tester>
        <Tester>
            <TestSuite name='onBackgroundLongPressOut'>
                <TestCase itShould="test TimelineList onBackgroundLongPressOut function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {
                        return <View style={{borderWidth: 1, borderColor: 'red', width: '100%', height: 500}}>
                        <CalendarProvider date={getDate()}>
                            <ExpandableCalendar
                                firstDay={1}
                                leftArrowImageSource={require('./img/previous.png')}
                                rightArrowImageSource={require('./img/next.png')}
                                markedDates={marked}
                            ></ExpandableCalendar>
                            <TimelineList 
                                events={eventsByDate} 
                                timelineProps={{
                                    onBackgroundLongPressOut: () => {
                                        setState(true)
                                    }
                                }} 
                                initialTime={INITIAL_TIME}
                            ></TimelineList>
                        </CalendarProvider>
                    </View>
                    }}
                >
                </TestCase>
                </TestSuite>
        </Tester>
        <Tester>
            <TestSuite name='onEventPress'>
                <TestCase itShould="test TimelineList onEventPress function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {
                        return <View style={{borderWidth: 1, borderColor: 'red', width: '100%', height: 500}}>
                        <CalendarProvider date={getDate()}>
                            <ExpandableCalendar
                                firstDay={1}
                                leftArrowImageSource={require('./img/previous.png')}
                                rightArrowImageSource={require('./img/next.png')}
                                markedDates={marked}
                            ></ExpandableCalendar>
                            <TimelineList 
                                events={eventsByDate} 
                                timelineProps={{
                                    onEventPress: ()=>{setState(true)}
                                }}
                                initialTime={INITIAL_TIME}
                            ></TimelineList>
                        </CalendarProvider>
                    </View>
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
})

