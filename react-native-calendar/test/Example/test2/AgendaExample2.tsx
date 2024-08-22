import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda, CalendarProvider, AgendaList } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

export function AgendaExample2() {
    const [daySelected, setDaySelected] = useState('');
    const [onDaySelected, setOnDaySelected] = useState('');

    return <ScrollView style={styles.container}>

        

        <Tester>
            <TestSuite name='showClosingKnob'>
                <TestCase itShould="test Agenda showClosingKnob properties with the value true">
                    <Agenda
                        showClosingKnob={true}
                        markedDates={{
                            '2012-05-16': {selected: true, marked: true},
                            '2012-05-17': {marked: true},
                            '2012-05-18': {disabled: true}
                          }}
                    />
                </TestCase>
                <TestCase itShould="test Agenda showClosingKnob properties with the value false">
                    <Agenda
                        showClosingKnob={false}
                        markedDates={{
                            '2012-05-16': {selected: true, marked: true},
                            '2012-05-17': {marked: true},
                            '2012-05-18': {disabled: true}
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

