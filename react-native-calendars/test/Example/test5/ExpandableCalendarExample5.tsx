import React, { useState, useRef,useCallback } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { ExpandableCalendar, CalendarProvider, Agenda } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import testIDs from '../testIDs';
import { agendaItems, getMarkedDates } from '../mocks/agendaItems';
import { getTheme, themeColor } from '../mocks/theme';

const INITIAL_DATE = '2022-07-07';

const leftArrowIcon = require('../img/previous.png');
const rightArrowIcon = require('../img/next.png');

export function ExpandableCalendarExample5() {
    const theme = useRef(getTheme());
    const [daySelected, setDaySelected] = useState('');
    const [selectedDate, setSelectedDate] = useState(INITIAL_DATE);
    const marked = useRef(getMarkedDates());

    const onDayPress = useCallback((day) => {
        setSelectedDate(day.dateString);
      }, [selectedDate]);
    
    return <ScrollView style={styles.container}>
        
        <Tester>
            <TestSuite name='closeThreshold'>
                <TestCase itShould="test ExpandableCalendar closeThreshold property with the vlaue 10">
                    <CalendarProvider date={'2012-5-8'}>
                        <ExpandableCalendar
                            closeThreshold={10}
                        />
                    </CalendarProvider>
                </TestCase>
            </TestSuite>
        </Tester>


        <Tester>
            <TestSuite name='onCalendarToggled'>
                <TestCase
                    itShould="test Agenda onCalendarToggled function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {

                        return <Agenda
                            onCalendarToggled={calendarOpened => {
                                console.log(calendarOpened);
                                setState(true)

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
        color: 'white',
        fontSize: 12,
    },
    calendar: {
        paddingLeft: 20,
        paddingRight: 20
    },
})

