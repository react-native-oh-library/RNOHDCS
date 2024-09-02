
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DatePickerView } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const now = new Date();
  const [value, setValue] = useState<Date>(now);

  const labelRenderer = (type: string, data: number) => {
    switch (type) {
      case 'year':
        return data + 'Y'
      case 'month':
        return data + 'M'
      case 'day':
        return data + 'D'
      case 'hour':
        return data + 'H'
      case 'minute':
        return data + 'Min'
      case 'second':
        return data + 'S'
      default:
        return data
    }
  }

  const weekdayLabelRenderer = (type: string, data: number) => {
    switch (type) {
      case 'year':
        return data + '年'
      case 'week':
        return data + '周'
      case 'week-day':
        return weekdayToZh(data)
      default:
        return data
    }
  };

  const weekdayToZh = (weekday: number) => {
    switch (weekday) {
      case 1:
        return '周一'
      case 2:
        return '周二'
      case 3:
        return '周三'
      case 4:
        return '周四'
      case 5:
        return '周五'
      case 6:
        return '周六'
      case 7:
        return '周日'
      default:
        return weekday
    }
  };

  const dateFilter = {
    day: (_val: any, { date }: any) => {
      // 去除所有周末
      if (date.getDay() > 5 || date.getDay() === 0) {
        return false
      }
      return true
    },
    hour: (val: number) => {
      // 只保留每天的14点到18点
      if (val < 14 || val > 18) {
        return false
      }
      return true
    },
  }

  return (
    <TestSuite name="DatePickerViewTest">
      <TestCase itShould="render a DatePickerView precision='month'" tags={['C_API']}>
        <DatePickerView precision='month' />
      </TestCase>
      <TestCase itShould="render a DatePickerView defaultValue={now}" tags={['C_API']}>
        <DatePickerView defaultValue={now} />
      </TestCase>
      <TestCase itShould="render a DatePickerView value={now}" tags={['C_API']}>
        <DatePickerView value={now} />
      </TestCase>
      <TestCase itShould="render a DatePickerView minDate={new Date(2022, 0, 1)}" tags={['C_API']}>
        <DatePickerView minDate={new Date(2022, 0, 1)} />
      </TestCase>
      <TestCase itShould="render a DatePickerView maxDate={new Date(2025, 12, 1)}" tags={['C_API']}>
        <DatePickerView maxDate={new Date(2025, 12, 1)} />
      </TestCase>
      <TestCase itShould="render a DatePickerView onChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <DatePickerView
            value={value}
            onChange={(val) => {
              setValue(val);
              setState(true);
            }}
          />
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a DatePickerView support renderLabel" tags={['C_API']}>
        <View>
          <Text>自定义每列的渲染内容</Text>
          <DatePickerView defaultValue={now} renderLabel={labelRenderer} />
        </View>
      </TestCase>
      <TestCase itShould="render a DatePickerView onValueChange()" initialState={false}
        arrange={({ setState }: any) =>
          <DatePickerView
            onValueChange={() => { setState(true) }}
            precision="week-day"
            defaultValue={now}
            renderLabel={weekdayLabelRenderer}
          />
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a DatePickerView filter" tags={['C_API']}>
        <View>
          <DatePickerView
            defaultValue={now}
            precision="hour"
            renderLabel={labelRenderer}
            filter={dateFilter}
          />
        </View>
      </TestCase>
    </TestSuite>
  );
};