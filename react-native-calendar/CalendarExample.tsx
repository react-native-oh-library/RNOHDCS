import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

export function CalendarExample() {
    const [daySelected, setDaySelected] = useState('');
    const [dayLongSelected, setDayLongSelected] = useState('');
    const [monthSelected, setMonthSelected] = useState('');

    return <ScrollView style={styles.container}>
        <Tester>
            <TestSuite name='onDayPress'>
                <TestCase
                    itShould="test Calendar onDayPress function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {

                        return <Calendar
                            onDayPress={day => {
                                setDaySelected(day.dateString);
                                setState(true)

                            }}
                            markedDates={{
                                [daySelected]: { selected: true, disableTouchEvent: true }
                            }}
                        />

                    }}
                >
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='onDayLongPress'>
                <TestCase itShould="test Calendar onDayLongPress function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {
                        return <Calendar
                            onDayLongPress={day => {
                                setDayLongSelected(day.dateString);
                                setState(true)
                            }}
                            markedDates={{
                                [dayLongSelected]: { selected: true, disableTouchEvent: true }
                            }}
                        />
                    }}
                >
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='onMonthChange'>
                <TestCase itShould="test Calendar onMonthChange function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {
                        return <Calendar
                            onMonthChange={day => {
                                setMonthSelected(day.dateString);
                                setState(true)
                            }}
                            markedDates={{
                                [monthSelected]: { selected: true, disableTouchEvent: true }
                            }}
                        />
                    }}
                >
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='onVisibleMonthsChange'>
                <TestCase itShould="test Calendar onVisibleMonthsChange function"
                assert={({ expect, state }) => {
                    expect(state).to.be.true;
                }}
                initialState={false}
                tags={['C_API']}
                 arrange={({ setState }) => {
                    return  <CalendarList
                        onVisibleMonthsChange={(months) => { 
                            console.log('now these months are visible', months);
                            setState(true) 
                        }}
                        pastScrollRange={3}
                        futureScrollRange={3}
                        scrollEnabled={true}
                        showScrollIndicator={true}
                        
                    />
                }}
                >                  
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='hideArrows'>
                <TestCase itShould="test Calendar hideArrows property with value true">
                    <Calendar
                        hideArrows={true}
                    />
                </TestCase>

                <TestCase itShould="test Calendar hideArrows property with value false">
                    <Calendar
                        hideArrows={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='showSixWeeks'>
                <TestCase itShould="test Calendar showSixWeeks property with value true">
                    <Calendar
                        showSixWeeks={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar showSixWeeks property with value false">
                    <Calendar
                        showSixWeeks={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='displayLoadingIndicator'>
                <TestCase itShould="test Calendar displayLoadingIndicator property with value true">
                    <Calendar
                        displayLoadingIndicator={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar displayLoadingIndicator property with value false">
                    <Calendar
                        displayLoadingIndicator={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='current'>
                <TestCase itShould="test Calendar current property with value 2012-11">
                    <Calendar
                        current={'2012-11'}
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
            <TestSuite name='monthFormat'>
                <TestCase itShould="test Calendar monthFormat property with value 'yyyy MM'">
                    <Calendar
                        monthFormat={'yyyy MM'}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='hideExtraDays'>
                <TestCase itShould="test Calendar hideExtraDays property with value true">
                    <Calendar
                        hideExtraDays={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar hideExtraDays property with value false">
                    <Calendar
                        hideExtraDays={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

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
            <TestSuite name='disableByDefault'>
                <TestCase itShould="test Calendar disableByDefault property with value true">
                    <Calendar
                        disableByDefault={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar disableByDefault property with value false">
                    <Calendar
                        disableByDefault={false}
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

        <Tester>
            <TestSuite name='showWeekNumbers'>
                <TestCase itShould="test Calendar showWeekNumbers property with value true">
                    <Calendar
                        showWeekNumbers={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar showWeekNumbers property with value false">
                    <Calendar
                        showWeekNumbers={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='disableArrowLeft'>
                <TestCase itShould="test Calendar disableArrowLeft property with value true">
                    <Calendar
                        disableArrowLeft={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar disableArrowLeft property with value false">
                    <Calendar
                        disableArrowLeft={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

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
            <TestSuite name='disableAllTouchEventsForDisabledDays'>
                <TestCase itShould="test Calendar disableAllTouchEventsForDisabledDays property with value true">
                    <Calendar
                        disableAllTouchEventsForDisabledDays={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar disableAllTouchEventsForDisabledDays property with value false">
                    <Calendar
                        disableAllTouchEventsForDisabledDays={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='enableSwipeMonths'>
                <TestCase itShould="test Calendar enableSwipeMonths property with value true">
                    <Calendar
                        enableSwipeMonths={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar enableSwipeMonths property with value false">
                    <Calendar
                        enableSwipeMonths={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='allowSelectionOutOfRange'>
                <TestCase itShould="test Calendar allowSelectionOutOfRange property with value true">
                    <Calendar
                        allowSelectionOutOfRange={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar allowSelectionOutOfRange property with value false">
                    <Calendar
                        allowSelectionOutOfRange={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='disabledByDefault'>
                <TestCase itShould="test Calendar disabledByDefault property with value true">
                    <Calendar
                        disabledByDefault={true}
                    />
                </TestCase>
                <TestCase itShould="test Calendar disabledByDefault property with value false">
                    <Calendar
                        disabledByDefault={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='minDate and maxDate'>
                <TestCase itShould="test Calendar minDate and maxDate properties with value '2012-05-10' and '2012-05-25'">
                    <Calendar
                        initialDate={'2012-05-01'}
                        minDate={'2012-05-10'}
                        maxDate={'2012-05-25'}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='headStyle'>
                <TestCase itShould="test Calendar headStyle properties">
                    <Calendar
                        headStyle={{
                            borderWidth: 2,
                            borderColor: 'green',
                            height: 20
                        }}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='markedDates'>
                <TestCase itShould="test Calendar markedDates properties">
                    <Calendar
                        initialDate={'2012-05-01'}
                        markedDates={{
                            '2012-05-16': { selected: true, marked: true, selectedColor: 'blue' },
                            '2012-05-17': { marked: true },
                            '2012-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
                            '2012-05-19': { disabled: true, disableTouchEvent: true }
                        }}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='theme'>
                <TestCase itShould="test Calendar with custom theme">
                    <Calendar
                        style={{
                            borderWidth: 1,
                            borderColor: 'gray',
                            height: 350
                        }}
                        theme={{
                            backgroundColor: '#ffffff',
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
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='customHeader'>
                <TestCase itShould="test Calendar customHeader properties">
                    <Calendar
                        headStyle={styles}
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
        color: 'white',
        fontSize: 12,
    }
})

