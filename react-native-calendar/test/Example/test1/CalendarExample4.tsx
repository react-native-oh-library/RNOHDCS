import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarUtils } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const leftArrowIcon = require('./img/previous.png');
const INITIAL_DATE = '2022-07-06';
const getDate = (count: number) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };


export function CalendarExample4(){
    const [daySelected, setDaySelected] = useState('');
    const [dayLongSelected, setDayLongSelected] = useState('');
    const [monthSelected, setMonthSelected] = useState('');
    const [day, setDay] = useState('');
    const [day1, setDay1] = useState('');


    return <ScrollView style={styles.container}>
      
        <Tester>
            <TestSuite name='arrowsHitSlop'>
                <TestCase itShould="test Calendar arrowsHitSlop property ">
                    <Calendar
                        arrowsHitSlop={35}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='disabledDaysIndexes'>
                <TestCase itShould="test Calendar disabledDaysIndexes property with value 0-6">
                    <Calendar
                        // theme={{
                        //     textSectionTitleDisabledColor: '#d9e1e8'
                        // }}
                        // disabledDaysIndexes={[6]}

                        current={INITIAL_DATE}
                        minDate={getDate(-14)}
                        markingType={'period'}
                        markedDates={{
                          [INITIAL_DATE]: {marked: true, dotColor: '#50cebb'},
                          [getDate(4)]: {marked: true, dotColor: '#50cebb'},
                          [getDate(9)]: {startingDay: true, color: '#50cebb', textColor: 'white'},
                          [getDate(10)]: {
                            color: '#70d7c7',
                            customTextStyle: {
                              color: '#FFFAAA',
                              fontWeight: '700'
                            }
                          },
                          [getDate(11)]: {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
                          [getDate(12)]: {color: '#70d7c7', inactive: true},
                          [getDate(13)]: {
                            endingDay: true,
                            color: '#50cebb',
                            textColor: 'white',
                            customContainerStyle: {
                              borderTopRightRadius: 5,
                              borderBottomRightRadius: 5,
                              backgroundColor: "green"
                            }
                          },
                          [getDate(25)]: {inactive: true, disableTouchEvent: true}
                        }}
                        disabledDaysIndexes={[0, 6]}
                        theme={{
                          textInactiveColor: '#a68a9f',
                          textSectionTitleDisabledColor: 'grey',
                          textSectionTitleColor: '#319e8e',
                          arrowColor: '#319e8e'
                        }}
                        onDayPress={(day) => console.warn(`${day.dateString} pressed`)}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='monthFormat'>
                <TestCase itShould="test Calendar monthFormat property with value yyyy MM">
                    <Calendar
                        monthFormat={'yyyy MM'}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='hideDayNames'>
                <TestCase itShould="test Calendar hideDayNames property with value true">
                    <Calendar
                        hideDayNames={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar hideDayNames property with value false">
                    <Calendar
                        hideDayNames={false}
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

