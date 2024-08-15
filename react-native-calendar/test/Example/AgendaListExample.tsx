import React, {useCallback} from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Button, Alert }from 'react-native';
import { Calendar, CalendarList, Agenda, ExpandableCalendar, CalendarProvider ,AgendaList} from 'react-native-calendars';
import { TestSuite, Tester, TestCase} from '@rnoh/testerino';
import isEmpty from 'lodash/isEmpty';

const agendaItems = [
    {
      title: '2023-5-9',
      data: [{hour: '12am', duration: '1h', title: 'First Yoga'}]
    },
   
      {
        title: '2024-8-15',
        data: [
          {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
          {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
          {hour: '3pm', duration: '1h', title: 'Private Yoga'}
        ]
      }
  ];

  


export function AgendaListExample () {

    const renderItem = useCallback(({item}: any) => {

        const buttonPressed = useCallback(() => {
            Alert.alert('Show me more');
          }, []);
        
          const itemPressed = useCallback(() => {
            Alert.alert(item.title);
          }, []);
        
          if (isEmpty(item)) {
            return (
              <View style={styles.emptyItem}>
                <Text style={styles.emptyItemText}>No Events Planned Today</Text>
              </View>
            );
          }

        return <TouchableOpacity onPress={itemPressed} style={styles.item} testID={'jjjhhjj65465656'}>
                <View>
                    <Text style={styles.itemHourText}>{item.hour}</Text>
                    <Text style={styles.itemDurationText}>{item.duration}</Text>
                </View>
                <Text style={styles.itemTitleText}>{item.title}</Text>
                <View style={styles.itemButtonContainer}>
                    <Button color={'grey'} title={'Info'} onPress={buttonPressed}/>
                </View>
            </TouchableOpacity>;
      }, []);

    return <ScrollView style={styles.container}>
        <Tester>
            <TestSuite name='theme'>
                <TestCase itShould="test AgendaListTest theme property">
                    <CalendarProvider date={'2023-5-8'}>
                        <ExpandableCalendar />
                        <AgendaList
                            sections={agendaItems}
                            theme={{ backgroundColor: '#ffffff',
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
                                textDayHeaderFontSize: 16,
                            }}
                            renderItem={renderItem}
                            sectionStyle={styles.section}
                        >
                        </AgendaList>
                    </CalendarProvider>
                </TestCase>
                <TestCase itShould="测试dayFormat值为yyyy-MM-dd">
                    <CalendarProvider date={'2023-5-8'}>
                        <ExpandableCalendar />
                        <AgendaList
                            sections={agendaItems}
                            renderItem={renderItem}
                            dayFormat={'yyyy-MM-dd'} // 日期格式  
                            sectionStyle={styles.section}
                        >
                        </AgendaList>
                    </CalendarProvider>
                </TestCase>

                <TestCase itShould="测试dayFormatter 日期前加上Day">
                    <CalendarProvider date={'2023-5-8'}>
                        <ExpandableCalendar />
                        <AgendaList
                            sections={agendaItems}
                            renderItem={renderItem}
                            dayFormatter={(day) => `Day: ${day}`} // 自定义日期格式化函数 
                            sectionStyle={styles.section}
                        >
                        </AgendaList>
                    </CalendarProvider>
                </TestCase>

                <TestCase itShould="测试useMoment值为true">
                    <CalendarProvider date={'2023-5-8'}>
                        <ExpandableCalendar />
                        <AgendaList
                            sections={agendaItems}
                            renderItem={renderItem}
                            useMoment={true} // 是否使用moment.js（如果不需要，设为false） 
                            sectionStyle={styles.section}
                        >
                        </AgendaList>
                    </CalendarProvider>
                </TestCase>

                <TestCase itShould="测试useMoment值为false">
                    <CalendarProvider date={'2023-5-8'}>
                        <ExpandableCalendar />
                        <AgendaList
                            sections={agendaItems}
                            renderItem={renderItem}
                            useMoment={false} // 是否使用moment.js（如果不需要，设为false） 
                            sectionStyle={styles.section}
                        >
                        </AgendaList>
                    </CalendarProvider>
                </TestCase>

                <TestCase itShould="测试markToday值为true">
                    <CalendarProvider date={'2024-8-16'}>
                        <ExpandableCalendar />
                        <AgendaList
                            sections={agendaItems}
                            renderItem={renderItem}
                            markToday={true} // 是否标记今天  
                            sectionStyle={styles.section}
                        >
                        </AgendaList>
                    </CalendarProvider>
                </TestCase>

                <TestCase itShould="测试markToday值为false">
                    <CalendarProvider date={'2024-8-16'}>
                        <ExpandableCalendar />
                        <AgendaList
                            sections={agendaItems}
                            renderItem={renderItem}
                            markToday={false} // 是否标记今天  
                            sectionStyle={styles.section}
                        >
                        </AgendaList>
                    </CalendarProvider>
                </TestCase>

                <TestCase itShould="测试avoidDateUpdates值为true">
                    <CalendarProvider date={'2023-5-8'}>
                        <ExpandableCalendar />
                        <AgendaList
                            sections={agendaItems}
                            renderItem={renderItem}
                            avoidDateUpdates={true} // 是否阻止滚动时更改日期   
                            sectionStyle={styles.section}
                        >
                        </AgendaList>
                    </CalendarProvider>
                </TestCase>

                <TestCase itShould="测试avoidDateUpdates值为false">
                    <CalendarProvider date={'2023-5-8'}>
                        <ExpandableCalendar />
                        <AgendaList
                            sections={agendaItems}
                            renderItem={renderItem}
                            avoidDateUpdates={false} // 是否阻止滚动时更改日期   
                            sectionStyle={styles.section}
                        >
                        </AgendaList>
                    </CalendarProvider>
                </TestCase>

                <TestCase itShould="测试scrollToNextEvent值为true">
                    <CalendarProvider date={'2023-5-8'}>
                        <ExpandableCalendar />
                        <AgendaList
                            sections={agendaItems}
                            renderItem={renderItem}
                            scrollToNextEvent={true} // 是否在按下无内容的日期时滚动到下一个有内容的日期   
                            sectionStyle={styles.section}
                        >
                        </AgendaList>
                    </CalendarProvider>
                </TestCase>

                <TestCase itShould="测试scrollToNextEvent值为false">
                    <CalendarProvider date={'2023-5-8'}>
                        <ExpandableCalendar />
                        <AgendaList
                            sections={agendaItems}
                            renderItem={renderItem}
                            scrollToNextEvent={false} // 是否在按下无内容的日期时滚动到下一个有内容的日期   
                            sectionStyle={styles.section}
                        >
                        </AgendaList>
                    </CalendarProvider>
                </TestCase>

                <TestCase itShould="测试viewOffset值为200">
                    <CalendarProvider date={'2023-5-8'}>
                        <ExpandableCalendar />
                        <AgendaList
                            sections={agendaItems}
                            renderItem={renderItem}
                            viewOffset={200} // 滚动偏移量  
                            sectionStyle={styles.section} 
                        >
                        </AgendaList>
                    </CalendarProvider>
                </TestCase>

                <TestCase itShould="测试sectionStyle">
                    <CalendarProvider date={'2023-5-8'}>
                        <ExpandableCalendar />
                        <AgendaList
                            sections={agendaItems}
                            renderItem={renderItem}
                            sectionStyle={{ backgroundColor: 'lightgray' }} // 自定义部分视图的样式    
                        >
                        </AgendaList>
                    </CalendarProvider>
                </TestCase>

            </TestSuite>
        </Tester>
    </ScrollView>
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    itemText: {
        color: 'blue',
        fontSize: 12,
    },
    section: {
        backgroundColor: 'yellow',
        color: 'grey',
        textTransform: 'capitalize'
      },
      item: {
        padding: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        flexDirection: 'row'
      },
      itemHourText: {
        color: 'black'
      },
      itemDurationText: {
        color: 'grey',
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4
      },
      itemTitleText: {
        color: 'black',
        marginLeft: 16,
        fontWeight: 'bold',
        fontSize: 16
      },
      itemButtonContainer: {
        flex: 1,
        alignItems: 'flex-end'
      },
      emptyItem: {
        paddingLeft: 20,
        height: 52,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
      },
      emptyItemText: {
        color: 'lightgrey',
        fontSize: 14
      }
})