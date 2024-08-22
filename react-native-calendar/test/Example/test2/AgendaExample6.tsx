import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda, CalendarProvider, AgendaList } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import testIDs from '../testIDs';

export function AgendaExample6() {
    const [daySelected, setDaySelected] = useState('');
    const [onDaySelected, setOnDaySelected] = useState('');

    return <ScrollView style={styles.container}>
 


        <Tester>
            <TestSuite name='renderKnob'>
                <TestCase
                    itShould="test Agenda renderKnob function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {
                        return <Agenda
                            renderKnob={() => {
                                return <View><Text>Button</Text></View>;
                            }}
                        />
                    }}
                >
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='renderEmptyData'>
                <TestCase
                    itShould="test Agenda renderEmptyData function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {
                        return <Agenda
                            renderEmptyData={() => {
                                return <View />;

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

