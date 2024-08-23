import React, { useState ,useMemo} from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda, CalendarProvider, AgendaList,ExpandableCalendar } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import testIDs from '../testIDs';

export function AgendaExample3() {
    const [daySelected, setDaySelected] = useState('');
    const [onDaySelected, setOnDaySelected] = useState('');
    const INITIAL_DATE_ONE = '2022-07-07';
    const INITIAL_DATE_TWO = '2022-07-08';
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

    return <ScrollView style={styles.container}>


<Tester>
            <TestSuite name='onDateChange'>
                <TestCase itShould="test Calendar onDateChanged function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {
                        return <CalendarProvider
                            date={INITIAL_DATE_TWO}
                            onDateChanged={(date: string, source: string) => {
                                setSelectedDate(date)
                                setState(true)
                            }}
                        >
                            <ExpandableCalendar markedDates={marked} />
                        </CalendarProvider>
                    }}
                >
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
        color: 'blue',
        fontSize: 12,
    }
})

