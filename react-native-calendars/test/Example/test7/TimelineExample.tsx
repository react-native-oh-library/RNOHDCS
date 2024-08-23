import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Dimensions, Alert } from 'react-native';
import {
    Timeline,
    TimelineList,
    CalendarProvider,
    ExpandableCalendar,
    TimelineEventProps,
    CalendarUtils,
    TimelineProps
} from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';


import groupBy from 'lodash/groupBy';
import filter from 'lodash/filter';
import find from 'lodash/find';


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

export function TimelineExample() {

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



    const timelineProps1: Partial<TimelineProps> = {
        start: 9,
        end: 18,
        overlapEventsSpacing: 8,
        rightEdgeSpacing: 24,
    };

   

    return <ScrollView style={{ flex: 1 }}>
        <Tester>
            <TestSuite name='start and end'>
                <TestCase itShould="test TimelineList start property with start value 9 ,end value 18 ">
                    <View style={{ borderWidth: 1, borderColor: 'red', width: '100%', height: 500 }}>
                        <CalendarProvider date={getDate()} >
                            <ExpandableCalendar
                                firstDay={1}
                                leftArrowImageSource={require('../img/previous.png')}
                                rightArrowImageSource={require('../img/next.png')}
                                markedDates={marked}
                            ></ExpandableCalendar>
                            <TimelineList events={eventsByDate} timelineProps={timelineProps1} initialTime={INITIAL_TIME}></TimelineList>
                        </CalendarProvider>
                    </View>
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

