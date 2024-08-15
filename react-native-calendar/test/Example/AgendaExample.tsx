import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda, CalendarProvider, AgendaList } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

export function AgendaExample() {
    const [daySelected, setDaySelected] = useState('');
    const [onDaySelected, setOnDaySelected] = useState('');

    return <ScrollView style={styles.container}>

        <Tester>
            <TestSuite name='items'>
                <TestCase itShould="test Agenda items properties">
                    <Agenda
                        items={{
                            '2024-08-10': [
                                { name: 'item1', height: 11, day: '2024-08-22' },
                            ],
                        }}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='selected'>
                <TestCase itShould="test Agenda selected properties with the value 2012-05-16">
                    <Agenda
                        selected={'2012-05-16'}
                    />

                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='hideKnob'>
                <TestCase itShould="test Agenda hideKnob properties with the value true">
                    <Agenda
                        hideKnob={true}
                    />
                </TestCase>
                <TestCase itShould="test Agenda hideKnob properties with the value false">
                    <Agenda
                        hideKnob={false}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='showClosingKnob'>
                <TestCase itShould="test Agenda showClosingKnob properties with the value true">
                    <Agenda
                        showClosingKnob={true}
                        markedDates={{
                            '2012-05-16': {selected: true, marked: true},
                            '2012-05-17': {marked: true},
                            '2012-05-18': {disabled: true}
                          }}
                    />
                </TestCase>
                <TestCase itShould="test Agenda showClosingKnob properties with the value false">
                    <Agenda
                        showClosingKnob={false}
                        markedDates={{
                            '2012-05-16': {selected: true, marked: true},
                            '2012-05-17': {marked: true},
                            '2012-05-18': {disabled: true}
                          }}
                    />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name="showOnlySelectedDayItems">
                <TestCase itShould="test Agenda showOnlySelectedDayItems properties with the value true">
                    <Agenda
                        items={{
                            '2024-08-10': [
                                { name: 'item1', height: 11, day: '2024-08-22' },
                            ],
                            '2024-08-11': [
                                { name: 'item1', height: 11, day: '2024-08-22' },
                            ],
                        }}
                        showOnlySelectedDayItems={true} />
                </TestCase>
                <TestCase itShould="test Agenda showOnlySelectedDayItems properties with the value false">
                    <Agenda
                        items={{
                            '2024-08-10': [
                                { name: 'item1', height: 11, day: '2024-08-22' },
                            ],
                            '2024-08-11': [
                                { name: 'item1', height: 11, day: '2024-08-22' },
                            ],
                        }}
                        showOnlySelectedDayItems={false} />
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name="loadItemsForMonth">
                <TestCase
                    itShould="test Agenda loadItemsForMonth function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {
                        return (
                            <Agenda

                            items={{
                                '2024-08-15': [
                                    { name: 'item1', height: 11, day: '2024-08-22' },
                                ],
                            }}
                                loadItemsForMonth={month => {                                    
                                    setState(true);
                                }}
                               
                            />
                        );
                    }}></TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='onDayChange'>
                <TestCase
                    itShould="test Agenda onDayChange function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {

                        return <Agenda
                            onDayChange={day => {
                                console.log('day changed');
                                setState(true)
                            }}
                            markedDates={{
                                [onDaySelected]: { selected: true, disableTouchEvent: true, selectedColor: 'red' }
                            }}
                        />

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

        <Tester>
            <TestSuite name='renderKnob'>
                <TestCase
                    itShould="test Agenda renderKnob function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {
                        return <Agenda
                            renderKnob={() => {
                                return <View />;

                            }}
                        />
                    }}
                >
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='renderEmptyData'>
                <TestCase
                    itShould="test Agenda renderEmptyData function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {
                        return <Agenda
                            renderEmptyData={() => {
                                return <View />;

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

