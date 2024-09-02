import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda, CalendarProvider, AgendaList } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const leftArrowIcon = require('./img/previous.png');

export function CalendarExample9() {
    const [daySelected, setDaySelected] = useState('');
    const [dayLongSelected, setDayLongSelected] = useState('');
    const [monthSelected, setMonthSelected] = useState('');
    const [day, setDay] = useState('');
    const [day1, setDay1] = useState('');


    return <ScrollView style={styles.container}>
        
    
        <Tester>
            <TestSuite name='customHeader'>
                <TestCase itShould="test Calendar customHeader properties">
                    <Calendar
                        customHeader={() => <View><Text style={{color: 'blue'}}>It's calendar header title!</Text></View>}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='renderHeader'>
                <TestCase itShould="test Calendar renderHeader properties">
                    <Calendar
                        renderHeader={() => <View style={{backgroundColor: 'yellow'}}><Text style={{color: 'green'}}>It's calendar header!</Text></View>}
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

