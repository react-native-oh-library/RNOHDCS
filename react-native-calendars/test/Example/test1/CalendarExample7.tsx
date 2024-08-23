import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda, CalendarProvider, AgendaList } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const leftArrowIcon = require('./img/previous.png');

export function CalendarExample7() {
    const [daySelected, setDaySelected] = useState('');
    const [dayLongSelected, setDayLongSelected] = useState('');
    const [monthSelected, setMonthSelected] = useState('');
    const [day, setDay] = useState('');
    const [day1, setDay1] = useState('');


    return <ScrollView style={styles.container}>
    

        <Tester>
            <TestSuite name='showWeekNumbers'>
                <TestCase itShould="test Calendar showWeekNumbers property with value true">
                    <Calendar
                        showWeekNumbers={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar showWeekNumbers property with value false">
                    <Calendar
                        showWeekNumbers={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='enableSwipeMonths'>
                <TestCase itShould="test Calendar enableSwipeMonths property with value true">
                    <Calendar
                        enableSwipeMonths={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar enableSwipeMonths property with value false">
                    <Calendar
                        enableSwipeMonths={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='allowSelectionOutOfRange'>
                    <TestCase itShould="test Calendar allowSelectionOutOfRange property with value true">
                        <Text>{day}</Text>
                        <Calendar
                            minDate={'2024-08-10'}
                            allowSelectionOutOfRange={true}
                            maxDate={'2024-08-25'}
                            onDayPress={days => {
                                setDay(JSON.stringify(days));
                                console.log('selected day', days);
                            }}
                        />
                    </TestCase>
                    <TestCase itShould="test Calendar allowSelectionOutOfRange property with value false">
                        <Text>{day1}</Text>
                        <Calendar
                            minDate={'2024-08-10'}
                            allowSelectionOutOfRange={false}
                            maxDate={'2024-08-25'}
                            onDayPress={days => {
                                setDay1(JSON.stringify(days));
                                console.log('selected day', days);
                            }}
                        />
                    </TestCase>
                </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='disabledByDefault'>
                <TestCase itShould="test Calendar disabledByDefault property with value true">
                    <Calendar
                        disabledByDefault={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar disabledByDefault property with value false">
                    <Calendar
                        disabledByDefault={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='minDate and maxDate'>
                <TestCase itShould="test Calendar minDate and maxDate properties with value '2012-05-10' and '2012-05-25'">
                    <Calendar
                        initialDate={'2012-05-01'}
                        minDate={'2012-05-10'}
                        maxDate={'2012-05-25'}
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

