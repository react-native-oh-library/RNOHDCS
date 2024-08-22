import React, { useCallback } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { ExpandableCalendar, AgendaList, CalendarProvider } from 'react-native-calendars';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';

const HEADER_HEIGHT = 100;

// 创建足够多的事件，确保列表可以滚动
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
const markedDates = agendaItems.reduce((acc, item) => {
    acc[item.title] = { marked: true };
    return acc;
}, {});

const AgendaItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
    </View>
);

const ExpandableCalendarScreen2 = () => {
    const renderItem = useCallback(({ item }) => {
        console.log('Rendering item:', item.name); // 输出当前渲染的项，帮助调试
        return <AgendaItem item={item} />;
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Tester>
                <TestSuite name='viewOffset'>
                    <TestCase itShould="测试viewOffset值为150">
                        <View style={{ flex: 1, width: '100%', height: 500 }}>
                            <View style={styles.header}>
                                <Text style={styles.headerText}>My Agenda</Text>
                            </View>

                            <CalendarProvider date={agendaItems[0].title} showTodayButton>
                                <ExpandableCalendar
                                    firstDay={1}
                                    markedDates={markedDates}
                                />
                                <AgendaList
                                    sections={agendaItems}
                                    renderItem={renderItem}
                                    scrollToNextEvent={true}
                                    viewOffset={150} // 设置一个非常大的偏移量，如果可能会造成异常效果
                                    sectionStyle={styles.section}
                                />
                            </CalendarProvider>
                        </View>
                    </TestCase>
                    <TestCase itShould="测试viewOffset值为100">
                        <View style={{ flex: 1, width: '100%', height: 500 }}>
                            <View style={styles.header}>
                                <Text style={styles.headerText}>My Agenda</Text>
                            </View>

                            <CalendarProvider date={agendaItems[0].title} showTodayButton>
                                <ExpandableCalendar
                                    firstDay={1}
                                    markedDates={markedDates}
                                />
                                <AgendaList
                                    sections={agendaItems}
                                    renderItem={renderItem}
                                    scrollToNextEvent={true}
                                    viewOffset={100} // 设置一个非常大的偏移量，如果可能会造成异常效果
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

export default ExpandableCalendarScreen2;

const styles = StyleSheet.create({
    header: {
        height: HEADER_HEIGHT,
        backgroundColor: '#6200ea',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
    },
    itemContainer: {
        height: 80, // 增大每个项目的高度，以便更容易观察到视图的滚动变化
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
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