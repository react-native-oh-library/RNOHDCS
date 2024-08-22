import React, { useState, useRef, useCallback, useMemo } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda, LocaleConfig, ExpandableCalendar, CalendarProvider } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import { getTheme, themeColor, } from '../mocks/theme';
import { agendaItems, getMarkedDates } from '../mocks/agendaItems';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function CalendarProviderExample() {
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
            <TestSuite name='theme'>
                <TestCase itShould="test CalendarProvider theme property">
                    <CalendarProvider date={'2022-07-07'}>
                        <ExpandableCalendar
                            theme={{
                                backgroundColor:Colors.yellow,
                                calendarBackground: '#ffffff',
                                textSectionTitleColor: '#b6c1cd',
                                textSectionTitleDisabledColor: '#d9e1e8',
                                selectedDayBackgroundColor: '#00adf5',
                                selectedDayTextColor: '#ffffff',
                                todayTextColor: '#00adf5',
                                dayTextColor: '#2d4150',
                                textDisabledColor: '#d9e1e8',
                                dotColor: '#00adf5',
                                selectedDotColor: '#ffffff',
                                arrowColor: 'orange',
                                disabledArrowColor: '#d9e1e8',
                                monthTextColor: 'blue',
                                indicatorColor: 'blue',
                                textDayFontFamily: 'monospace',
                                textMonthFontFamily: 'monospace',
                                textDayHeaderFontFamily: 'monospace',
                                textDayFontWeight: '300',
                                textMonthFontWeight: 'bold',
                                textDayHeaderFontWeight: '300',
                                textDayFontSize: 16,
                                textMonthFontSize: 16,
                                textDayHeaderFontSize: 16
                            }}
                        />
                    </CalendarProvider>
                </TestCase>
            </TestSuite>
            <TestSuite name='theme'>
                <TestCase itShould="test CalendarProvider theme property">
                    <CalendarProvider date={'2022-07-07'}>
                        <ExpandableCalendar
                            theme={{
                                backgroundColor:Colors.yellow,
                                calendarBackground: '#ffffff',
                                textSectionTitleColor: '#b6c1cd',
                                textSectionTitleDisabledColor: '#d9e1e8',
                                selectedDayBackgroundColor: '#00adf5',
                                selectedDayTextColor: '#ffffff',
                                todayTextColor: '#00adf5',
                                dayTextColor: '#2d4150',
                                textDisabledColor: '#d9e1e8',
                                dotColor: '#00adf5',
                                selectedDotColor: '#ffffff',
                                arrowColor: 'red',
                                disabledArrowColor: '#d9e1e8',
                                monthTextColor: 'red',
                                indicatorColor: 'pink',
                                textDayFontFamily: 'monospace',
                                textMonthFontFamily: 'monospace',
                                textDayHeaderFontFamily: 'monospace',
                                textDayFontWeight: '300',
                                textMonthFontWeight: 'bold',
                                textDayHeaderFontWeight: '300',
                                textDayFontSize: 16,
                                textMonthFontSize: 16,
                                textDayHeaderFontSize: 16
                            }}
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
