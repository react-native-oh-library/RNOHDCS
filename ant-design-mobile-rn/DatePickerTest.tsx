
import React, { useState } from 'react';
import { DatePicker, List } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const now = new Date();
  const [value, setValue] = useState<Date>(now);
  const [value1, setValue1] = useState<Date>(now);
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
        return data + '年'
      case 'month':
        return data + '月'
      case 'day':
        return data + '日'
      case 'hour':
        return data + '时'
      case 'minute':
        return data + '分'
      case 'second':
        return data + '秒'
      default:
        return data
    }
  }

  return (
    <TestSuite name="DatePickerTest">
      <TestCase itShould="render a DatePicker precision='month'" tags={['C_API']}>
        <List>
          <DatePicker precision='month'>
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>
        </List>
      </TestCase>
      <TestCase itShould="render a DatePicker value={now}" tags={['C_API']}>
        <List>
          <DatePicker value={now}>
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>
        </List>
      </TestCase>
      <TestCase itShould="render a DatePicker defaultValue={now}" tags={['C_API']}>
        <List>
          <DatePicker defaultValue={now}>
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
      <TestCase itShould="render a DatePicker onChange()" tags={['C_API']}>
        <List>
          <DatePicker value={value} onChange={(value: any) => { setValue(value) }}>
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>
        </List>
      </TestCase>
      <TestCase itShould="render a DatePicker onValueChange()" tags={['C_API']}>
        <List>
          <DatePicker value={value1} onValueChange={(value: any) => { setValue1(value) }}>
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>
        </List>
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