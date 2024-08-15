import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, CalendarProvider, WeekCalendar, ExpandableCalendar } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';


export function WeekCalendarExample() {
    return <ScrollView style={styles.container}>
        <Tester>
            <TestSuite name='allowShadow'>
                <TestCase itShould="test ExpandableCalendar allowShadow property with the vlaue true">
                    <CalendarProvider date={'2012-5-8'}>
                        <ExpandableCalendar
                            allowShadow={true}
                        />
                    </CalendarProvider>
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='allowShadow'>
                <TestCase itShould="test ExpandableCalendar allowShadow property with the vlaue false">
                    <CalendarProvider date={'2012-5-8'}>
                        <ExpandableCalendar
                        
                            allowShadow={false}
                        />
                    </CalendarProvider>
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='hideDayNames'>
                <TestCase itShould="test ExpandableCalendar hideDayNames property with the vlaue true">               
                    <CalendarProvider date={'2012-5-8'}>
                        <ExpandableCalendar
                            hideDayNames={true}
                        />
                    </CalendarProvider>                  
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='hideDayNames'>
                <TestCase itShould="test ExpandableCalendar hideDayNames property with the vlaue false">              
                    <CalendarProvider date={'2012-5-8'}>              
                        <ExpandableCalendar
                            hideDayNames={false}
                        />
                    </CalendarProvider>                  
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

