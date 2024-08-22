import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda, CalendarProvider, AgendaList } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const leftArrowIcon = require('./img/previous.png');

export function CalendarExample8() {
    const [daySelected, setDaySelected] = useState('');
    const [dayLongSelected, setDayLongSelected] = useState('');
    const [monthSelected, setMonthSelected] = useState('');
    const [day, setDay] = useState('');
    const [day1, setDay1] = useState('');


    return <ScrollView style={styles.container}>
        
    
        <Tester>
            <TestSuite name='headerStyle'>
                <TestCase itShould="test Calendar headerStyle properties with the value green">
                    <Calendar
                        headerStyle={{
                            borderWidth: 2,
                            borderColor: 'green',

                        }}
                    />
                </TestCase>
                <TestCase itShould="test Calendar headerStyle properties with the value pink">
                    <Calendar
                        headerStyle={{
                            borderWidth: 2,
                            borderColor: 'pink',

                        }}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='markedDates'>
                <TestCase itShould="test Calendar markedDates properties">
                    <Calendar
                        initialDate={'2012-05-01'}
                        markedDates={{
                            '2012-05-16': { selected: true, marked: true, selectedColor: 'blue' },
                            '2012-05-17': { marked: true },
                            '2012-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
                            '2012-05-19': { disabled: true, disableTouchEvent: true }
                        }}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='theme'>
                <TestCase itShould="test Calendar with custom theme">
                    <Calendar
                        style={{
                            borderWidth: 1,
                            borderColor: 'gray',
                            height: 350
                        }}
                        theme={{
                            backgroundColor: '#ffffff',
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: '#b6c1cd',
                            textSectionTitleDisabledColor: '#d9e1e8',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#00adf5',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#00adf5',
                            selectedDotColor: '#ffffff',
                            arrowColor: 'orange',
                            disabledArrowColor: '#d9e1e8',
                            monthTextColor: 'blue',
                            indicatorColor: 'blue',
                            textDayFontFamily: 'monospace',
                            textMonthFontFamily: 'monospace',
                            textDayHeaderFontFamily: 'monospace',
                            textDayFontWeight: '300',
                            textMonthFontWeight: 'bold',
                            textDayHeaderFontWeight: '300',
                            textDayFontSize: 16,
                            textMonthFontSize: 16,
                            textDayHeaderFontSize: 16
                        }}
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

