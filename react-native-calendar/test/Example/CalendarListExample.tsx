import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda, CalendarProvider, AgendaList } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

export function CalendarListExample() {

    return <ScrollView style={styles.container}>

        <Tester>
            <TestSuite name='calendarList'>
                <TestCase itShould="test CalendarList some properties">
                    <CalendarList
                        // Callback which gets executed when visible months change in scroll view. Default = undefined
                        onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                        // Max amount of months allowed to scroll to the past. Default = 50
                        pastScrollRange={50}
                        // Max amount of months allowed to scroll to the future. Default = 50
                        futureScrollRange={50}
                        // Enable or disable scrolling of calendar list
                        scrollEnabled={true}
                        // Enable or disable vertical scroll indicator. Default = false
                        showScrollIndicator={true}                                
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='calendarStyle'>
                <TestCase itShould="test CalendarList calendarStyle property">
                    <CalendarList
                        calendarStyle={{
                            height: 350,
                            width: 300,
                            borderRadius: 5,
                            margin: 2                      

                        }}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='calendarHeight'>
                <TestCase itShould="test CalendarList calendarHeight and calendarWidth  property with value 300 and 280 ">
                    <CalendarList
                        calendarHeight={300}
                        calendarWidth={280}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='staticHeader'>
                <TestCase itShould="test CalendarList staticHeader property with value true">
                    <CalendarList
                        staticHeader={true}
                    />
                </TestCase>
                <TestCase itShould="test CalendarList staticHeader property with value false">
                    <CalendarList
                        staticHeader={false}
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

