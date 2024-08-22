import React, { useCallback } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { ExpandableCalendar, AgendaList, CalendarProvider } from 'react-native-calendars';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';

// 示例日程数据，事件分散在不同的月份
const agendaItems = [
    { title: '2023-10-01', data: [{ name: 'Morning Yoga', time: '8:00 AM' }] },
    { title: '2023-10-15', data: [{ name: 'Lunch Meeting', time: '12:00 PM' }] },
    { title: '2023-11-03', data: [{ name: 'Dinner with Friends', time: '7:00 PM' }] },
    { title: '2023-11-10', data: [{ name: 'Conference Call', time: '3:00 PM' }] },
    { title: '2023-12-05', data: [{ name: 'Project Deadline', time: '11:59 PM' }] },
    { title: '2023-12-12', data: [{ name: 'Team Building Event', time: '4:00 PM' }] },
    { title: '2024-01-07', data: [{ name: 'Doctor Appointment', time: '10:00 AM' }] },
    { title: '2024-01-20', data: [{ name: 'Grocery Shopping', time: '5:00 PM' }] },
    { title: '2024-02-02', data: [{ name: 'Gym Session', time: '6:00 AM' }] },
    { title: '2024-02-14', data: [{ name: 'Office Hours', time: '9:00 AM' }] },
    { title: '2024-03-01', data: [{ name: 'Evening Jog', time: '6:00 PM' }] },
    { title: '2024-03-15', data: [{ name: 'Client Meeting', time: '2:00 PM' }] },
    { title: '2024-04-05', data: [{ name: 'Volunteer Work', time: '1:00 PM' }] },
    { title: '2024-04-18', data: [{ name: 'Cooking Class', time: '6:30 PM' }] },
    { title: '2024-05-02', data: [{ name: 'Weekend Getaway', time: '8:00 AM' }] },
];

// 标记日期
const markedDates = {
    '2023-10-01': { marked: true },
    '2023-10-15': { marked: true },
    '2023-11-03': { marked: true },
    '2023-11-10': { marked: true },
    '2023-12-05': { marked: true },
    '2023-12-12': { marked: true },
    '2024-01-07': { marked: true },
    '2024-01-20': { marked: true },
    '2024-02-02': { marked: true },
    '2024-02-14': { marked: true },
    '2024-03-01': { marked: true },
    '2024-03-15': { marked: true },
    '2024-04-05': { marked: true },
    '2024-04-18': { marked: true },
    '2024-05-02': { marked: true },
};

// 简单的日程项展示组件
const AgendaItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <Text>{item.name} - {item.time}</Text>
    </View>
);

const ExpandableCalendarScreen1 = () => {
    const renderItem = useCallback(({ item }) => {
        return <AgendaItem item={item} />;
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Tester>
                <TestSuite name='scrollToNextEvent'>
                    <TestCase itShould="测试scrollToNextEvent值为true">
                        <View style={{ width: '100%', height: 500 }}>
                            <CalendarProvider date={agendaItems[0].title} showTodayButton>
                                <ExpandableCalendar
                                    firstDay={1}
                                    markedDates={markedDates}
                                />
                                <AgendaList
                                    sections={agendaItems}
                                    renderItem={renderItem}
                                    scrollToNextEvent={true}  // 使用 scrollToNextEvent 属性
                                    sectionStyle={styles.section}
                                />
                            </CalendarProvider>
                        </View>
                    </TestCase>
                    <TestCase itShould="测试scrollToNextEvent值为false">
                        <View style={{ width: '100%', height: 500 }}>
                            <CalendarProvider date={agendaItems[0].title} showTodayButton>
                                <ExpandableCalendar
                                    firstDay={1}
                                    markedDates={markedDates}
                                />
                                <AgendaList
                                    sections={agendaItems}
                                    renderItem={renderItem}
                                    scrollToNextEvent={false}  // 使用 scrollToNextEvent 属性
                                    sectionStyle={styles.section}
                                />
                            </CalendarProvider>
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
};

export default ExpandableCalendarScreen1;

const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    section: {
        backgroundColor: '#e0e0e0',
        color: 'grey',
        textTransform: 'capitalize',
        padding: 5,
    },
    container: {
        width: '100%',
        height: '100%',
    },
});