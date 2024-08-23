import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView,Image } from 'react-native';
import { Calendar, CalendarList, Agenda, CalendarProvider, AgendaList } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const leftArrowIcon = require('../img/previous.png');

export function CalendarExample3() {
    const [daySelected, setDaySelected] = useState('');
    const [dayLongSelected, setDayLongSelected] = useState('');
    const [monthSelected, setMonthSelected] = useState('');
    const [day, setDay] = useState('');
    const [day1, setDay1] = useState('');


    return <ScrollView style={styles.container}>
        
      
        <Tester>
            <TestSuite name='disableArrowRight'>
                <TestCase itShould="test Calendar disableArrowRight property with value true">
                    <Calendar
                        disableArrowRight={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar disableArrowRight property with value false">
                    <Calendar
                        disableArrowRight={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='initialDate'>
                <TestCase itShould="test Calendar initialDate property with value 2012-05-01">
                    <Calendar
                        initialDate={'2012-05-01'}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='onPressArrowLeft and onPressArrowRight'>
                <TestCase itShould="test Calendar arrow function ">
                    <Calendar
                        onPressArrowLeft={addMonth => addMonth()}
                        onPressArrowRight={subtractMonth => subtractMonth()}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='renderArrow'>
                <TestCase itShould="test Calendar renderArrow property for left arrow ">
                    <Calendar
                        renderArrow={direction => <View><Image source={leftArrowIcon} style={{width: 15, height: 15}}></Image></View>}
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

