import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

export function AgendaExample() {
    const [daySelected, setDaySelected] = useState('');
    const [onDaySelected, setOnDaySelected] = useState('');

    return <ScrollView style={styles.container}>

        <Tester>
            <TestSuite name='items'>
                <TestCase itShould="test Agenda items properties">
                    <Agenda
                        items={{
                            '2024-08-10': [
                                { name: 'item1', height: 11, day: '2024-08-22' },
                            ],
                        }}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='selected'>
                <TestCase itShould="test Agenda selected properties with the value 2012-05-16">
                    <Agenda
                        selected={'2012-05-16'}
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

