import React, { useState, useRef,useCallback } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { ExpandableCalendar, CalendarProvider, Agenda } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import testIDs from '../testIDs';
import { agendaItems, getMarkedDates } from '../mocks/agendaItems';
import { getTheme, themeColor } from '../mocks/theme';

const INITIAL_DATE = '2022-07-07';

const leftArrowIcon = require('../img/previous.png');
const rightArrowIcon = require('../img/next.png');

export function ExpandableCalendarExample() {
    const theme = useRef(getTheme());
    const [daySelected, setDaySelected] = useState('');
    const [selectedDate, setSelectedDate] = useState(INITIAL_DATE);
    const marked = useRef(getMarkedDates());

    const onDayPress = useCallback((day) => {
        setSelectedDate(day.dateString);
      }, [selectedDate]);
    
    return <ScrollView style={styles.container}>
        <Tester>
            <TestSuite name='initialPosition'>
                <TestCase itShould="test ExpandableCalendar initialPosition property">
                    <CalendarProvider date={'2012-05-8'}>
                        <ExpandableCalendar
                            initialPosition={ExpandableCalendar.positions.OPEN}
                            markedDates={{
                                '2012-05-8': { selected: true, marked: true, selectedColor: 'red' }
                            }}
                        />
                    </CalendarProvider>
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='disablePan'>
                <TestCase itShould="test ExpandableCalendar disablePan property with the vlaue true">
                    <CalendarProvider date={'2012-5-8'}>
                        <ExpandableCalendar
                            horizontal={false}
                            disablePan={true}
                        />
                    </CalendarProvider>
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='disablePan'>
                <TestCase itShould="test ExpandableCalendar disablePan property with the vlaue false">
                    <CalendarProvider date={'2012-5-8'}>
                        <ExpandableCalendar
                            disablePan={false}
                        />
                    </CalendarProvider>
                </TestCase>
            </TestSuite>
        </Tester>

    </ScrollView >
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

