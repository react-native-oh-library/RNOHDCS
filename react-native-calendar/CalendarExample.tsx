import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { Tester, TestCase } from '@rnoh/testerino';

export function CalendarExample () {
    const [selected, setSelected] = useState('');

    return <ScrollView style={styles.container}>
        <Tester>
        <TestCase itShould="test Calendar onDayPress function">
            <Calendar
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: {selected: true, disableTouchEvent: true}
                }}
            />
        </TestCase>
        <TestCase itShould="test Calendar hideArrows and initialDate properties">
            <Calendar
                initialDate={'2012-05-01'}
                monthFormat={'yyyy MM'}
                hideArrows={true}
                hideExtraDays={true}
                disableMonthChange={true}
                firstDay={1}
                hideDayNames={true}
                showWeekNumbers={true}
                disableArrowLeft={true}
                disableArrowRight={true}
                disableAllTouchEventsForDisabledDays={true}
                enableSwipeMonths={true}
            />
        </TestCase>
        <TestCase itShould="test Calendar minDate and maxDate properties">
            <Calendar
                initialDate={'2012-05-01'}
                minDate={'2012-05-10'}
                maxDate={'2012-05-30'}
                monthFormat={'yyyy MM'}
                hideArrows={true}
                hideExtraDays={true}
                disableMonthChange={true}
                firstDay={1}
                hideDayNames={true}
                showWeekNumbers={true}
                onPressArrowLeft={subtractMonth => subtractMonth()}
                onPressArrowRight={addMonth => addMonth()}
                disableArrowLeft={true}
                disableArrowRight={true}
                disableAllTouchEventsForDisabledDays={true}
                enableSwipeMonths={true}
            />
        </TestCase>
        <TestCase itShould="test Calendar arrow function">
            <Calendar
                initialDate={'2012-05-01'}
                minDate={'2012-05-10'}
                maxDate={'2012-05-30'}
                monthFormat={'yyyy MM'}
                hideExtraDays={true}
                disableMonthChange={true}
                firstDay={1}
                hideDayNames={true}
                showWeekNumbers={true}
                onPressArrowLeft={subtractMonth => subtractMonth()}
                onPressArrowRight={addMonth => addMonth()}
                disableAllTouchEventsForDisabledDays={true}
                enableSwipeMonths={true}
            />
        </TestCase>
        <TestCase itShould="test Calendar markedDates properties">
            <Calendar
                initialDate={'2012-05-01'}
                markedDates={{
                    '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
                    '2012-05-17': {marked: true},
                    '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                    '2012-05-19': {disabled: true, disableTouchEvent: true}
                }}
            />
        </TestCase>
        <TestCase itShould="test Calendar markingType properties set value period">
            <Calendar
                initialDate={'2012-05-01'}
                markingType={'period'}
                markedDates={{
                    '2012-05-20': {textColor: 'green'},
                    '2012-05-22': {startingDay: true, color: 'green'},
                    '2012-05-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
                    '2012-05-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
                }}
            />
        </TestCase>
        <TestCase itShould="test Calendar markingType properties set value period">
            <Calendar
                initialDate={'2012-05-01'}
                markingType={'period'}
                markedDates={{
                    '2012-05-15': {marked: true, dotColor: '#50cebb'},
                    '2012-05-16': {marked: true, dotColor: '#50cebb'},
                    '2012-05-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
                    '2012-05-22': {color: '#70d7c7', textColor: 'white'},
                    '2012-05-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
                    '2012-05-24': {color: '#70d7c7', textColor: 'white'},
                    '2012-05-25': {endingDay: true, color: '#50cebb', textColor: 'white'}
                }}
            />
        </TestCase>
        <TestCase itShould="test Calendar markingType properties set value multi-period">
            <Calendar
                initialDate={'2017-12-01'}
                markingType="multi-period"
                markedDates={{
                    '2017-12-14': {
                    periods: [
                        {startingDay: false, endingDay: true, color: '#5f9ea0'},
                        {startingDay: false, endingDay: true, color: '#ffa500'},
                        {startingDay: true, endingDay: false, color: '#f0e68c'}
                    ]
                    },
                    '2017-12-15': {
                    periods: [
                        {startingDay: true, endingDay: false, color: '#ffa500'},
                        {color: 'transparent'},
                        {startingDay: false, endingDay: false, color: '#f0e68c'}
                    ]
                    }
                }}
            />
        </TestCase>
        <TestCase itShould="test Calendar markingType properties set value custom">
            <Calendar
                initialDate={'2018-03-01'}
                markingType={'custom'}
                markedDates={{
                    '2018-03-28': {
                    customStyles: {
                        container: {
                        backgroundColor: 'green'
                        },
                        text: {
                        color: 'black',
                        fontWeight: 'bold'
                        }
                    }
                    },
                    '2018-03-29': {
                    customStyles: {
                        container: {
                        backgroundColor: 'white',
                        elevation: 2
                        },
                        text: {
                        color: 'blue'
                        }
                    }
                    }
                }}
            />
        </TestCase>
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
        <TestCase itShould="test Calendar with custom day component">
            <Calendar
                style={[ {height: 300}]}
                dayComponent={({date, state}) => {
                    return (
                    <View>
                        <Text style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>{date.day}</Text>
                    </View>
                    );
                }}
            />
        </TestCase>
        <TestCase itShould="test CalendarList pastScrollRange and futureScrollRange properties with value 3">
            <CalendarList
                onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                pastScrollRange={3}
                futureScrollRange={3}
                scrollEnabled={true}
                showScrollIndicator={true}
            />
        </TestCase>
        <TestCase itShould="test CalendarList horizontal property and set calendarWidth with 460">
            <CalendarList
                horizontal={true}
                pagingEnabled={true}
                calendarWidth={460}
            />
        </TestCase>
        <TestCase itShould="test Agenda markedDates and theme properties">
            <Agenda
                items={{
                    '2012-05-22': [{name: 'item 1 - any js object'}],
                    '2012-05-23': [{name: 'item 2 - any js object', height: 80}],
                    '2012-05-24': [],
                    '2012-05-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
                }}
                loadItemsForMonth={month => {
                    console.log('trigger items loading');
                }}
                onCalendarToggled={calendarOpened => {
                    console.log(calendarOpened);
                }}
                onDayPress={day => {
                    console.log('day pressed');
                }}
                onDayChange={day => {
                    console.log('day changed');
                }}
                selected={'2012-05-16'}
                minDate={'2012-05-10'}
                maxDate={'2012-05-30'}
                pastScrollRange={50}
                futureScrollRange={50}
                renderItem={(item, firstItemInDay) => {
                    return <View />;
                }}
                renderDay={(day, item) => {
                    return <View />;
                }}
                renderEmptyDate={() => {
                    return <View />;
                }}
                renderKnob={() => {
                    return <View />;
                }}
                renderEmptyData={() => {
                    return <View />;
                }}
                rowHasChanged={(r1, r2) => {
                    return r1.text !== r2.text;
                }}
                hideKnob={true}
                showClosingKnob={false}
                markedDates={{
                    '2012-05-16': {selected: true, marked: true},
                    '2012-05-17': {marked: true},
                    '2012-05-18': {disabled: true}
                }}
                disabledByDefault={true}
                onRefresh={() => console.log('refreshing...')}
                refreshing={false}
                theme={{
                    agendaDayTextColor: 'yellow',
                    agendaDayNumColor: 'green',
                    agendaTodayColor: 'red',
                    agendaKnobColor: 'blue'
                }}
                style={{}}
            />
        </TestCase>
        </Tester>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    item: {
        width: '100%',
        marginBottom:20,
        borderColor: 'blue',
        borderWidth: 1,
    },
    itemText:{
        color: 'white',
        fontSize: 12,
    }
})