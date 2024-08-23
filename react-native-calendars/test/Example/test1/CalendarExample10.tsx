import React, { useState, Fragment, useCallback, useMemo, useRef } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Calendar, CalendarUtils } from 'react-native-calendars';
import testIDs from '../testIDs';
import { Tester, TestSuite } from '@rnoh/testerino';


const INITIAL_DATE = '2022-07-06';

const CalendarScreen = () => {
    const [selected, setSelected] = useState(INITIAL_DATE);
    const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE);


    const renderCalendarWithCustomHeaderTitle = () => {
        const [selectedValue, setSelectedValue] = useState(new Date());

        const getNewSelectedDate = useCallback(
            (date, shouldAdd) => {
                const newMonth = new Date(date).getMonth();
                const month = shouldAdd ? newMonth + 1 : newMonth - 1;
                const newDate = new Date(selectedValue.setMonth(month));
                const newSelected = new Date(newDate.setDate(1));
                return newSelected;
            },
            [selectedValue]
        );
        const onPressArrowLeft = useCallback(
            (subtract, month) => {
                const newDate = getNewSelectedDate(month, false);
                setSelectedValue(newDate);
                subtract();
            },
            [getNewSelectedDate]
        );

        const onPressArrowRight = useCallback(
            (add, month) => {
                const newDate = getNewSelectedDate(month, true);
                setSelectedValue(newDate);
                add();
            },
            [getNewSelectedDate]
        );

        const CustomHeaderTitle = (
            <TouchableOpacity style={styles.customTitleContainer} onPress={() => console.warn('Tapped!')}>
                <Text style={styles.customTitle}>{selectedValue.getMonth() + 1}-{selectedValue.getFullYear()}</Text>
            </TouchableOpacity>
        );

        return (
            <Fragment>
                <Tester>
                    <TestSuite name='customHeaderTitle'>
                        <Text style={styles.text}>Calendar with customHeaderTitle</Text>
                        <Calendar
                            style={styles.calendar}
                            customHeaderTitle={CustomHeaderTitle}
                            onPressArrowLeft={onPressArrowLeft}
                            onPressArrowRight={onPressArrowRight}
                        />
                    </TestSuite>
                </Tester>
            </Fragment>
        );
    };

    const customHeaderProps: any = useRef();

    const setCustomHeaderNewMonth = (next = false) => {
        const add = next ? 1 : -1;
        const month = new Date(customHeaderProps?.current?.month);
        const newMonth = new Date(month.setMonth(month.getMonth() + add));
        customHeaderProps?.current?.addMonth(add);
        setCurrentMonth(newMonth.toISOString().split('T')[0]);
    };
    const moveNext = () => {
        setCustomHeaderNewMonth(true);
    };
    const movePrevious = () => {
        setCustomHeaderNewMonth(false);
    };

    const renderCalendarWithCustomHeader = () => {
        const CustomHeader = React.forwardRef((props, ref) => {
            customHeaderProps.current = props;

            return (
                // @ts-expect-error
                <View ref={ref} {...props} style={styles.customHeader}>
                    <TouchableOpacity onPress={movePrevious}>
                        <Text>Previous</Text>
                    </TouchableOpacity>
                    <Text>Custom header!</Text>
                    <Text>{currentMonth}</Text>
                    <TouchableOpacity onPress={moveNext}>
                        <Text>Next</Text>
                    </TouchableOpacity>
                </View>
            );
        });

        return (
            <Fragment>
                <Text style={styles.text}>Calendar with custom header component</Text>
                <Calendar
                    initialDate={INITIAL_DATE}
                    testID={testIDs.calendars.LAST}
                    style={[styles.calendar, styles.customCalendar]}
                    customHeader={CustomHeader}
                />
            </Fragment>
        );
    };



    const renderExamples = () => {
        return (
            <Fragment>


                {renderCalendarWithCustomHeaderTitle()}
                {/* {renderCalendarWithCustomHeader()} */}

            </Fragment>
        );
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} testID={testIDs.calendars.CONTAINER}>
            {renderExamples()}
        </ScrollView>
    );
};

export default CalendarScreen;

const styles = StyleSheet.create({
    calendar: {
        marginBottom: 10
    },
    switchContainer: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    },
    switchText: {
        margin: 10,
        fontSize: 16
    },
    text: {
        textAlign: 'center',
        padding: 10,
        backgroundColor: 'lightgrey',
        fontSize: 16
    },
    disabledText: {
        color: 'grey'
    },
    defaultText: {
        color: 'purple'
    },
    customCalendar: {
        height: 250,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    customDay: {
        textAlign: 'center'
    },
    customHeader: {
        backgroundColor: '#FCC',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: -4,
        padding: 8
    },
    customTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    customTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00BBF2'
    }
});