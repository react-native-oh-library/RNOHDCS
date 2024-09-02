import React, { useState, useRef, useCallback, useMemo } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda, LocaleConfig, ExpandableCalendar, CalendarProvider } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import { getTheme, themeColor, } from '../mocks/theme';
import { agendaItems, getMarkedDates } from '../mocks/agendaItems';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function CalendarProviderExample3() {
    const ITEMS: any[] = agendaItems;
    const INITIAL_DATE_ONE = '2022-07-07';
    const INITIAL_DATE_TWO = '2022-07-08';
    const INITIAL_DATE_THREE = '2022-07-09';
    const theme = useRef(getTheme());
    const todayBtnTheme = useRef({
        todayButtonTextColor: themeColor
    });

    const [selectedDate, setSelectedDate] = useState(INITIAL_DATE_ONE);

    const marked = useMemo(() => {
        return {
            [selectedDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: '#5E60CE',
                selectedTextColor: 'white'
            }
        };
    }, [selectedDate]);


    return <ScrollView style={styles.calendar}>

        <Tester>
            <TestSuite name='showTodayButton'>
                <TestCase itShould="test CalendarProvider showTodayButton property with the  disabledOpacity:0.5 ">
                    <CalendarProvider

                        date={ITEMS[1]?.title}
                        showTodayButton
                        // disabledOpacity={0.5}
                        theme={todayBtnTheme.current}
                    >
                        <ExpandableCalendar markedDates={marked} />
                    </CalendarProvider>
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='disabledOpacity'>
                <TestCase itShould="test CalendarProvider disabledOpacity property with the  disabledOpacity:1  ">
                    <CalendarProvider
                       
                        date={ITEMS[1]?.title}
                        showTodayButton
                        disabledOpacity={1}
                        theme={todayBtnTheme.current}
                    >
                        <ExpandableCalendar markedDates={marked} />
                    </CalendarProvider>
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='todayBottomMargin'>
                <TestCase itShould="test CalendarProvider todayBottomMargin property  ">
                    <CalendarProvider

                        date={ITEMS[1]?.title}
                        showTodayButton
                        disabledOpacity={0.1}
                        todayBottomMargin={5}
                        theme={todayBtnTheme.current}
                    >
                        <ExpandableCalendar markedDates={marked} />
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
        borderWidth: 1,
        borderColor: '#b6c1cd'

    }
})



const styless = StyleSheet.create({
    calendar: {
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        backgroundColor: 'lightgrey'
    },
    section: {
        backgroundColor: Colors.lightThemeColor,
        color: 'grey',
        textTransform: 'capitalize'
    }
});
