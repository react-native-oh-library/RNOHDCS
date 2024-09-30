import React, { useCallback } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { ExpandableCalendar, AgendaList, CalendarProvider } from 'react-native-calendars';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';

// 直接定义从 10 月 1 号到 15 号的示例日程数据
const agendaItems = [
    { title: '2023-10-01', data: [{ name: 'Event on 2023-10-01' }] },
    { title: '2023-10-02', data: [{ name: 'Event on 2023-10-02' }] },
    { title: '2023-10-03', data: [{ name: 'Event on 2023-10-03' }] },
    { title: '2023-10-04', data: [{ name: 'Event on 2023-10-04' }] },
    { title: '2023-10-05', data: [{ name: 'Event on 2023-10-05' }] },
    { title: '2023-10-06', data: [{ name: 'Event on 2023-10-06' }] },
    { title: '2023-10-07', data: [{ name: 'Event on 2023-10-07' }] },
    { title: '2023-10-08', data: [{ name: 'Event on 2023-10-08' }] },
    { title: '2023-10-09', data: [{ name: 'Event on 2023-10-09' }] },
    { title: '2023-10-10', data: [{ name: 'Event on 2023-10-10' }] },
    { title: '2023-10-11', data: [{ name: 'Event on 2023-10-11' }] },
    { title: '2023-10-12', data: [{ name: 'Event on 2023-10-12' }] },
    { title: '2023-10-13', data: [{ name: 'Event on 2023-10-13' }] },
    { title: '2023-10-14', data: [{ name: 'Event on 2023-10-14' }] },
    { title: '2023-10-15', data: [{ name: 'Event on 2023-10-15' }] },
];

// 标记从 10 月 1 号到 15 号的日期
const markedDates = {
    '2023-10-01': { marked: true },
    '2023-10-02': { marked: true },
    '2023-10-03': { marked: true },
    '2023-10-04': { marked: true },
    '2023-10-05': { marked: true },
    '2023-10-06': { marked: true },
    '2023-10-07': { marked: true },
    '2023-10-08': { marked: true },
    '2023-10-09': { marked: true },
    '2023-10-10': { marked: true },
    '2023-10-11': { marked: true },
    '2023-10-12': { marked: true },
    '2023-10-13': { marked: true },
    '2023-10-14': { marked: true },
    '2023-10-15': { marked: true },
};

// 简单的日程项展示组件
const AgendaItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
    </View>
);

const ExpandableCalendarScreen = () => {
    const renderItem = useCallback(({ item }) => {
        return <AgendaItem item={item} />;
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Tester>
                <TestSuite name='avoidDateUpdates'>
                    <TestCase itShould="测试avoidDateUpdates with the value true">
                        <View style={{ width: '100%', height: 500 }}>
                            <CalendarProvider date={agendaItems[0].title} showTodayButton>
                                <ExpandableCalendar firstDay={1}
                                    markedDates={markedDates} />
                                <AgendaList
                                    sections={agendaItems}
                                    renderItem={renderItem}
                                    avoidDateUpdates={true} // 使用 avoidDateUpdates 属性
                                    sectionStyle={styles.section}
                                />
                            </CalendarProvider>
                        </View>
                    </TestCase>

                    <TestCase itShould="测试avoidDateUpdates with the value false">
                        <View style={{ width: '100%', height: 500 }}>
                            <CalendarProvider date={agendaItems[0].title} showTodayButton>
                                <ExpandableCalendar firstDay={1}
                                    markedDates={markedDates} />

                                <AgendaList
                                    sections={agendaItems}
                                    renderItem={renderItem}
                                    avoidDateUpdates={false} // 使用 avoidDateUpdates 属性
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

export default ExpandableCalendarScreen;

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