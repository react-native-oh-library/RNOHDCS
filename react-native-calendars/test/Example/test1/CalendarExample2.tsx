import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda, CalendarProvider, AgendaList } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const leftArrowIcon = require('./img/previous.png');

export function CalendarExample2() {
    const [daySelected, setDaySelected] = useState('');
    const [dayLongSelected, setDayLongSelected] = useState('');
    const [monthSelected, setMonthSelected] = useState('');
    const [day, setDay] = useState('');
    const [day1, setDay1] = useState('');


    return <ScrollView style={styles.container}>
        
        <Tester>
            <TestSuite name='showSixWeeks'>
                <TestCase itShould="test Calendar showSixWeeks property with value true">
                    <Calendar
                        showSixWeeks={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar showSixWeeks property with value false">
                    <Calendar
                        showSixWeeks={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='displayLoadingIndicator'>
                <TestCase itShould="test Calendar displayLoadingIndicator property with value true">
                    <Calendar
                        displayLoadingIndicator={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar displayLoadingIndicator property with value false">
                    <Calendar
                        displayLoadingIndicator={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='current'>
                <TestCase itShould="test Calendar current property with value 2012-03-05">
                    <Calendar
                        current={'2012-03-05'}
                        markedDates={{
                            '2012-03-05': { selected: true, marked: true, selectedColor: 'blue' }
                        }}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='disableArrowLeft'>
                <TestCase itShould="test Calendar disableArrowLeft property with value true">
                    <Calendar
                        disableArrowLeft={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar disableArrowLeft property with value false">
                    <Calendar
                        disableArrowLeft={false}
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

