import React, {useState, useMemo, useCallback} from 'react';
import {StyleSheet, Text, View, TextStyle} from 'react-native';
import {CalendarList, DateData} from 'react-native-calendars';
import testIDs from '../testIDs';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const RANGE = 24;
const initialDate = '2022-07-05';
const nextWeekDate = '2022-07-14';
const nextMonthDate = '2022-08-05';

interface Props {
  horizontalView?: boolean;
}

const CalendarListScreen2 = (props: Props) => {
  const {horizontalView} = props;
  const [selected, setSelected] = useState(initialDate);
  const marked = useMemo(() => {
    return {
      [nextWeekDate]: {
        selected: selected === nextWeekDate,
        selectedTextColor: '#DC143C',
        marked: true
      },
      [nextMonthDate]: {
        selected: selected === nextMonthDate,
        selectedTextColor: '#DC143C',
        marked: true
      },
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: '#DC143C',
        selectedTextColor: 'white'
      }
    };
  }, [selected]);

  const onDayPress = useCallback((day: DateData) => {
    setSelected(day.dateString);
  }, []);

  return (
    <Tester>
     <TestSuite name='calendarList '>
     <TestCase itShould="test properties: pastScrollRange,futureScrollRange,calendarStyle,calendarHeight:250,calendarWidth:300,staticHeader：false,showScrollIndicator:false">
    <CalendarList
      testID={testIDs.calendarList.CONTAINER}
      current={initialDate}
      pastScrollRange={RANGE}
      futureScrollRange={RANGE}
      onDayPress={onDayPress}
      markedDates={marked}
      renderHeader={!horizontalView ? renderCustomHeader : undefined}
      calendarHeight={!horizontalView ? 250 : undefined}
      calendarWidth={!horizontalView ? 300 : undefined}
      theme={!horizontalView ? theme : undefined}
      horizontal={horizontalView}
      pagingEnabled={horizontalView}
      staticHeader={false}
      showScrollIndicator={false}
    
    />
     </TestCase>
    </TestSuite>
    </Tester>
   
  );
};

const theme = {
  stylesheet: {
    calendar: {
      header: {
        dayHeader: {
          fontWeight: '600',
          color: '#48BFE3'
        }
      }
    }
  },
  'stylesheet.day.basic': {
    today: {
      borderColor: '#48BFE3',
      borderWidth: 0.8
    },
    todayText: {
      color: '#FFB6C1',
      fontWeight: '800'
    }
  }
};

const theme1 = {
  stylesheet: {
    calendar: {
      header: {
        dayHeader: {
          fontWeight: '700',
          color:Colors.pink
        }
      }
    }
  },
  'stylesheet.day.basic': {
    today: {
      borderColor: '#48BFE3',
      borderWidth: 0.9
    },
    todayText: {
      color: '#FFB6C1',
      fontWeight: '900'
    }
  }
};

function renderCustomHeader(date: any) {
  const header = date.toString('MMMM yyyy');
  const [month, year] = header.split(' ');
  const textStyle: TextStyle = {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    color: '#5E60CE',
    paddingRight: 5
  };

  return (
    <View style={calendarStyle.header}>
      <Text style={[calendarStyle.month, textStyle]}>{`${month}`}</Text>
      <Text style={[calendarStyle.year, textStyle]}>{year}</Text>
    </View>
  );
}

export default CalendarListScreen2;

const calendarStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom:5
  },
  month: {
    marginLeft: 10
  },
  year: {
    marginRight: 10
  }
});
