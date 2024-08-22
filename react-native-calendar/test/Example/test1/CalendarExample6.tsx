import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda, CalendarProvider, AgendaList } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const leftArrowIcon = require('./img/previous.png');

export function CalendarExample6() {
    const [daySelected, setDaySelected] = useState('');
    const [dayLongSelected, setDayLongSelected] = useState('');
    const [monthSelected, setMonthSelected] = useState('');
    const [day, setDay] = useState('');
    const [day1, setDay1] = useState('');


    return <ScrollView style={styles.container}>
       

  
        <Tester>
            <TestSuite name='disableMonthChange'>
                <TestCase itShould="test Calendar disableMonthChange property with value true">
                    <Calendar
                        disableMonthChange={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar disableMonthChange property with value false">
                    <Calendar
                        disableMonthChange={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='firstDay'>
                <TestCase itShould="test Calendar firstDay property with value 1">
                    <Calendar
                        firstDay={5}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='style'>
                <TestCase itShould="test Calendar style property with the value blue">
                    <Calendar
                        style={{
                            borderWidth: 5,
                            borderColor: 'blue',
                            //height: 300
                        }}
                    />
                </TestCase>
                <TestCase itShould="test Calendar style property with the value red">
                    <Calendar
                        style={{
                            borderWidth: 5,
                            borderColor: 'red',
                            //height: 300
                        }}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='dayComponent'>
                <TestCase itShould="test Calendar dayComponent property">
                    <Calendar
                        dayComponent={({ date, state }) => {
                            return (
                                <View>
                                    <Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black' }}></Text>
                                </View>
                            );
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

