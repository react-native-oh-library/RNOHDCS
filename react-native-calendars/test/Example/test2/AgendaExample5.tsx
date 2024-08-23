import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda, CalendarProvider, AgendaList } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

export function AgendaExample5() {
    const [daySelected, setDaySelected] = useState('');
    const [onDaySelected, setOnDaySelected] = useState('');

    return <ScrollView style={styles.container}>

        <Tester>
            <TestSuite name="showOnlySelectedDayItems">
                <TestCase itShould="test Agenda showOnlySelectedDayItems properties with the value true">
                    <Agenda
                        items={{
                            '2024-08-10': [
                                { name: 'item1', height: 11, day: '2024-08-22' },
                            ],
                            '2024-08-11': [
                                { name: 'item1', height: 11, day: '2024-08-22' },
                            ],
                        }}
                        showOnlySelectedDayItems={true} />
                </TestCase>
                <TestCase itShould="test Agenda showOnlySelectedDayItems properties with the value false">
                    <Agenda
                        items={{
                            '2024-08-10': [
                                { name: 'item1', height: 11, day: '2024-08-22' },
                            ],
                            '2024-08-11': [
                                { name: 'item1', height: 11, day: '2024-08-22' },
                            ],
                        }}
                        showOnlySelectedDayItems={false} />
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

