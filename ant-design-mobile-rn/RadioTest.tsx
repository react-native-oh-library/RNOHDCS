
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { List, Radio } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

const RadioItem = Radio.RadioItem;

type RadioValue = string | number;
interface EventRadioGroup {
  target: { value: RadioValue }
};

interface EventRadioItem {
  target: { checked: boolean }
};

export default () => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState<any>();
  const [part1Value, setPart1Value] = useState(1);
  const [part2Value, setPart2Value] = useState<any>(1);
  const [part3Value, setpart3Value] = useState<any>(1);

  const onChange = (part1Value: any, e: EventRadioItem) => {
    if (e.target.checked) {
      setPart1Value(part1Value)
    }
  }

  const onGroupChange3 = (e: EventRadioGroup) => {
    setpart3Value(e.target.value)
  }

  return (
    <TestSuite name="RadioTest">
      <TestCase itShould="Radio defaultChecked={true}, defaultChecked={false}" tags={['C_API']}>
        <List renderHeader="基本用法">
          <List.Item thumb={<Radio defaultChecked={true}>Radio</Radio>} />
          <List.Item thumb={<Radio defaultChecked={false}>Radio</Radio>} />
        </List>
      </TestCase>
      <TestCase itShould="Radio checked={true}, checked={false}" tags={['C_API']}>
        <List>
          <List.Item thumb={<Radio checked={true}>Radio</Radio>} />
          <List.Item thumb={<Radio checked={false}>Radio</Radio>} />
        </List>
      </TestCase>
      <TestCase itShould="Radio disabled={true}, disabled={false}" tags={['C_API']}>
        <List>
          <List.Item thumb={<Radio disabled={true}>Radio</Radio>} />
          <List.Item thumb={<Radio disabled={false}>Radio</Radio>} />
        </List>
      </TestCase>
      <TestCase itShould="Radio value" tags={['C_API']}>
        <List>
          <Radio.Group
            defaultValue={2}
            onChange={(e: any) => { setValue(e.target.value) }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 6,
            }}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
          </Radio.Group>
        </List>
        <Text>value:{value}</Text>
      </TestCase>
      <TestCase itShould="Radio onChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <List>
            <List.Item thumb={<Radio checked={checked} onChange={(e: any) => { setChecked(e.target.value); setState(true); }}>Radio</Radio>} />
          </List>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="Radio.Item" tags={['C_API']}>
        <View>
          <List renderHeader="RadioItem">
            <RadioItem
              checked={part1Value === 1}
              onChange={onChange.bind(this, 1)}>
              Use Ant Design Component
            </RadioItem>
            <RadioItem
              checked={part1Value === 2}
              onChange={onChange.bind(this, 2)}>
              Use Ant Design Component
            </RadioItem>
          </List>
        </View>
      </TestCase>
      <TestCase itShould="Radio.Group defaultValue={B}" tags={['C_API']}>
        <List>
          <Radio.Group
            defaultValue={2}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 6,
            }}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
          </Radio.Group>
        </List>
      </TestCase>
      <TestCase itShould="Radio.Group disabled={true}, disabled={false}" tags={['C_API']}>
        <List>
          <Radio.Group
            disabled
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 6,
            }}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
          </Radio.Group>
        </List>
        <List>
          <Radio.Group
            disabled={false}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 6,
            }}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
          </Radio.Group>
        </List>
      </TestCase>
      <TestCase itShould="Radio.Group value={A}" tags={['C_API']}>
        <List>
          <Radio.Group
            value={part1Value}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 6,
            }}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
          </Radio.Group>
        </List>
      </TestCase>
      <TestCase itShould="Radio.Group onChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <List>
            <Radio.Group
              value={part2Value}
              onChange={(e: any) => { setPart2Value(e.target.value); setState(true); }}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingVertical: 6,
              }}>
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
            </Radio.Group>
          </List>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="Radio.Group 组合 - 配置方式\n可通过配置 options 参数来渲染单选框" tags={['C_API']}>
        <View>
          <List>
            <RadioGroupExample />
          </List>
        </View>
      </TestCase>
    </TestSuite>
  );
};

const plainOptions = ['Apple', 'Pear', 'Orange']
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
]
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
]

class RadioGroupExample extends React.Component {
  state = {
    value1: 'Apple',
    value2: 'Apple',
    value3: 'Apple',
  }

  onChange1 = (e: EventRadioGroup) => {
    this.setState({
      value1: e.target.value,
    })
  }

  onChange2 = (e: EventRadioGroup) => {
    this.setState({
      value2: e.target.value,
    })
  }

  onChange3 = (e: EventRadioGroup) => {
    this.setState({
      value3: e.target.value,
    })
  }

  render() {
    const { value1, value2, value3 } = this.state
    return (
      <>
        <List renderHeader="PlainOptions">
          <Radio.Group
            options={plainOptions}
            onChange={(e: any) => this.onChange1(e)}
            value={value1}
          />
        </List>
        <List renderHeader="Options">
          <Radio.Group
            options={options}
            onChange={(e: any) => this.onChange2(e)}
            value={value2}
          />
        </List>
        <List renderHeader="OptionsWithDisabled">
          <Radio.Group
            options={optionsWithDisabled}
            onChange={(e: any) => this.onChange3(e)}
            value={value3}
          />
        </List>
      </>
    )
  }
}
