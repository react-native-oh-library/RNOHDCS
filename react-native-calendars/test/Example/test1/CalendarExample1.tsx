import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda, CalendarProvider, AgendaList } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const leftArrowIcon = require('./img/previous.png');

export function CalendarExample() {
    const [daySelected, setDaySelected] = useState('');
    const [dayLongSelected, setDayLongSelected] = useState('');
    const [monthSelected, setMonthSelected] = useState('');
    const [day, setDay] = useState('');
    const [day1, setDay1] = useState('');


    return <ScrollView style={styles.container}>
        <Tester>
            <TestSuite name='onDayPress'>
                <TestCase
                    itShould="test Calendar onDayPress function"
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
                            markedDates={{
                                [daySelected]: { selected: true, disableTouchEvent: true }
                            }}
                        />

                    }}
                >
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='onDayLongPress'>
                <TestCase itShould="test Calendar onDayLongPress function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {
                        return <Calendar
                            onDayLongPress={day => {
                                setDayLongSelected(day.dateString);
                                setState(true)
                            }}
                            markedDates={{
                                [dayLongSelected]: { selected: true, disableTouchEvent: true }
                            }}
                        />
                    }}
                >
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='onMonthChange'>
                <TestCase itShould="test Calendar onMonthChange function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {
                        return <Calendar
                            onMonthChange={day => {
                                setMonthSelected(day.dateString);
                                setState(true)
                            }}
                            markedDates={{
                                [monthSelected]: { selected: true, disableTouchEvent: true }
                            }}
                        />
                    }}
                >
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='onVisibleMonthsChange'>
                <TestCase itShould="test Calendar onVisibleMonthsChange function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {
                        return <Calendar
                            onVisibleMonthsChange={(months) => {
                                setState(true)
                            }}
                            pastScrollRange={2}
                            futureScrollRange={2}
                            scrollEnabled={true}
                            showScrollIndicator={true}
                            style={{
                                borderWidth: 1,
                                borderColor: 'gray',
                                width: 350
                            }}

                        />
                    }}
                >
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

