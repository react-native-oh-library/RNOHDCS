import React, { useState, useRef, useCallback, useMemo } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda, LocaleConfig, ExpandableCalendar, CalendarProvider } from 'react-native-calendars';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import { getTheme, themeColor, } from './mocks/theme';
import { agendaItems, getMarkedDates } from './mocks/agendaItems';
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
        </Tester>


        <Tester>
            <TestSuite name='theme'>
                <TestCase itShould="test CalendarProvider theme property">
                    <CalendarProvider date={'2022-07-07'}>
                        <ExpandableCalendar
                            theme={todayBtnTheme.current}
                        />
                    </CalendarProvider>
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='style'>
                <TestCase itShould="test CalendarProvider style property">
                    <CalendarProvider date={'2023-10-10'}>
                        <ExpandableCalendar
                            style={styless.calendar}
                        />
                    </CalendarProvider>
                </TestCase>
            </TestSuite>
        </Tester>


        <Tester>
            <TestSuite name='date'>
                <TestCase itShould="test CalendarProvider date property ">
                    <CalendarProvider
                    //  date={INITIAL_DATE_ONE}
                    date={ITEMS[1]?.title}
                     >
                        <ExpandableCalendar markedDates={marked} />
                    </CalendarProvider>
                </TestCase>
            </TestSuite>
        </Tester>

        <Tester>
            <TestSuite name='onDateChanged'>
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
            <TestSuite name='onMonthChange'>
                <TestCase itShould="test Calendar onMonthChange function"
                    assert={({ expect, state }) => {
                        expect(state).to.be.true;
                    }}
                    initialState={false}
                    tags={['C_API']}
                    arrange={({ setState }) => {
                        return <CalendarProvider
                            date={INITIAL_DATE_THREE}
                            onMonthChange={(month: any, updateSource: any) => {
                                setSelectedDate(month)
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
        <TestSuite name=" showTodayButton ">
          <TestCase itShould="test CalendarProvider showTodayButton properties with the value false ">
          <View style={{height:200}}>
            <CalendarProvider
              date={ITEMS[1]?.title}
              showTodayButton={false}
              theme={todayBtnTheme.current}
              >
              </CalendarProvider>
              </View>
          </TestCase>
        </TestSuite>      
        </Tester>
        

        <Tester>
        <TestSuite name=" showTodayButton,todayButtonStyle,disabledOpacity and todayBottomMargin ">
          <TestCase itShould="test CalendarProvider disabledOpacity properties with the value 1">
          <View style={{height:200}}>
            <CalendarProvider
              date={ITEMS[1]?.title}
              showTodayButton={true}
              theme={todayBtnTheme.current}
              todayButtonStyle ={styles.calendar}
              todayBottomMargin={10}
              disabledOpacity={1}></CalendarProvider>
              </View>
          </TestCase>
        </TestSuite>      
        </Tester>

  
        <Tester>
        <TestSuite name=" showTodayButton,todayButtonStyle,disabledOpacity and todayBottomMargin ">
          <TestCase itShould="test CalendarProvider disabledOpacity properties with the value 0">
          <View style={{height:200}}>
            <CalendarProvider
              date={ITEMS[1]?.title}
              showTodayButton={true}
              theme={todayBtnTheme.current}
              todayButtonStyle ={styles.calendar}
              todayBottomMargin={10}
              disabledOpacity={0}></CalendarProvider>
              </View>
          </TestCase>
        </TestSuite>      
        </Tester>

        
        <Tester>
        <TestSuite name=" showTodayButton,todayButtonStyle,disabledOpacity and todayBottomMargin ">
          <TestCase itShould="test CalendarProvider todayButtonStyle properties">
          <View style={{height:200}}>
            <CalendarProvider
              date={ITEMS[1]?.title}
              showTodayButton={true}
              theme={todayBtnTheme.current}
              todayButtonStyle ={styles.item}
              todayBottomMargin={10}
              disabledOpacity={0}></CalendarProvider>
              </View>
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
