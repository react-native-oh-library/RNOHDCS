import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda, CalendarProvider, AgendaList } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const leftArrowIcon = require('./img/previous.png');

export function CalendarExample5() {
    const [daySelected, setDaySelected] = useState('');
    const [dayLongSelected, setDayLongSelected] = useState('');
    const [monthSelected, setMonthSelected] = useState('');
    const [day, setDay] = useState('');
    const [day1, setDay1] = useState('');


    return <ScrollView style={styles.container}>
       

        <Tester>
            <TestSuite name='hideArrows'>
                <TestCase itShould="test Calendar hideArrows property with value true">
                    <Calendar
                        hideArrows={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar hideArrows property with value false">
                    <Calendar
                        hideArrows={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='hideExtraDays'>
                <TestCase itShould="test Calendar hideExtraDays property with value true">
                    <Calendar
                        hideExtraDays={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar hideExtraDays property with value false">
                    <Calendar
                        hideExtraDays={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='disableAllTouchEventsForDisabledDays'>
                <TestCase itShould="test Calendar disableAllTouchEventsForDisabledDays property with value true">
                    <Calendar
                        disableAllTouchEventsForDisabledDays={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar disableAllTouchEventsForDisabledDays property with value false">
                    <Calendar
                        disableAllTouchEventsForDisabledDays={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='disableAllTouchEventsForInactiveDays'>
                <TestCase itShould="test Calendar disableAllTouchEventsForInactiveDays property with value true">
                    <Calendar
                        disableAllTouchEventsForInactiveDays={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar disableAllTouchEventsForInactiveDays property with value false">
                    <Calendar
                        disableAllTouchEventsForInactiveDays={false}
                    />
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
        color: 'blue',
        fontSize: 12,
    }
})

