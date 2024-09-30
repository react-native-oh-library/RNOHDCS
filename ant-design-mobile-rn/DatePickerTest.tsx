
import React, { useState } from 'react';
import { DatePicker, List } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const now = new Date();
  const [value, setValue] = useState<Date>(now);
  const [value1, setValue1] = useState<Date>(now);
  const [value2, setValue2] = useState<any>('2024-06');
  const [value3, setValue3] = useState<Date>(now);
  const [value4, setValue4] = useState<Date>(now);
  const onChange = (value: any) => {
    setValue(value);
  }

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

  return (
    <TestSuite name="DatePickerTest">
      <TestCase itShould="render a DatePicker precision='month'" tags={['C_API']}>
        <List>
          <DatePicker precision='month' value={value2} onChange={(val) => { setValue2(val) }} format={'YYYY-MM'}>
            <List.Item arrow="horizontal">Select Month</List.Item>
          </DatePicker>
        </List>
      </TestCase>
      <TestCase itShould="render a DatePicker value={now}" tags={['C_API']}>
        <List>
          <DatePicker value={value3} onChange={(val) => { setValue3(val) }}>
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>
        </List>
      </TestCase>
      <TestCase itShould="render a DatePicker defaultValue={now}" tags={['C_API']}>
        <List>
          <DatePicker defaultValue={now} value={value4} onChange={(val) => { setValue4(val) }}>
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>
        </List>
      </TestCase>
      <TestCase itShould="render a DatePicker minDate={new Date(2015, 7, 6)}" tags={['C_API']}>
        <List>
          <DatePicker minDate={new Date(2015, 7, 6)}>
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>
        </List>
      </TestCase>
      <TestCase itShould="render a DatePicker maxDate={new Date(2026, 11, 3)}" tags={['C_API']}>
        <List>
          <DatePicker maxDate={new Date(2026, 11, 3)}>
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>
        </List>
      </TestCase>
      <TestCase itShould="render a DatePicker onChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <List>
            <DatePicker value={value} onChange={(value: any) => { setValue(value); setState(true); }}>
              <List.Item arrow="horizontal">Select Date</List.Item>
            </DatePicker>
          </List>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a DatePicker onValueChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <List>
            <DatePicker value={value1} onValueChange={(value: any) => { console.log(value); setValue1(value); setState(true); }}>
              <List.Item arrow="horizontal">Select Date</List.Item>
            </DatePicker>
          </List>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a DatePicker renderLabel" tags={['C_API']}>
        <List>
          <DatePicker
            value={value}
            defaultValue={new Date()}
            minDate={new Date(2015, 7, 6)}
            maxDate={new Date(2026, 11, 3)}
            renderLabel={labelRenderer}
            format="YYYY-MM-DD">
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>
        </List>
      </TestCase>
      <TestCase itShould="render a DatePicker locale={{ okText: 'Yes', dismissText: 'No' }}" tags={['C_API']}>
        <List>
          <DatePicker
            value={value}
            locale={{ okText: 'Yes', dismissText: 'No' }}
            defaultValue={new Date()}
            minDate={new Date(2015, 7, 6)}
            maxDate={new Date(2026, 11, 3)}
            renderLabel={labelRenderer}
            format="YYYY-MM-DD">
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>
        </List>
      </TestCase>
      <TestCase itShould="render a DatePicker filter" tags={['C_API']}>
        <List>
          <DatePicker
            value={value}
            precision="hour"
            renderLabel={labelRenderer}
            onChange={onChange}
            filter={dateFilter}
            format="YYYY-MM-DD">
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>
        </List>
      </TestCase>
    </TestSuite>
  );
};