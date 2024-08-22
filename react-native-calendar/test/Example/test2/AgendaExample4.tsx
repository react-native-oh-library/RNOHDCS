import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda, CalendarProvider, AgendaList } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import testIDs from '../testIDs';

export function AgendaExample4() {
    const [daySelected, setDaySelected] = useState('');
    const [onDaySelected, setOnDaySelected] = useState('');

    return <ScrollView style={styles.container}>


        <Tester>
            <TestSuite name='hideKnob'>
                <TestCase itShould="test Agenda hideKnob properties with the value true">
                    <Agenda
                        hideKnob={true}
                    />
                </TestCase>
                <TestCase itShould="test Agenda hideKnob properties with the value false">
                    <Agenda
                        hideKnob={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name="loadItemsForMonth">
                <TestCase
                    itShould="test Agenda loadItemsForMonth function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {
                        return (
                            <Agenda

                            items={{
                                '2024-08-15': [
                                    { name: 'item1', height: 11, day: '2024-08-22' },
                                ],
                            }}
                                loadItemsForMonth={month => {                                    
                                    setState(true);
                                }}
                               
                            />
                        );
                    }}></TestCase>
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

