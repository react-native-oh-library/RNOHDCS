
import React, { useState } from 'react';
import { View } from 'react-native';
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
      <TestCase itShould="Radio defaultChecked" tags={['C_API']}>
        <List renderHeader="基本用法">
          <List.Item thumb={<Radio defaultChecked={true}>Radio</Radio>} />
        </List>
      </TestCase>
      <TestCase itShould="Radio checked" tags={['C_API']}>
        <List>
          <List.Item thumb={<Radio checked={true}>Radio</Radio>} />
        </List>
      </TestCase>
      <TestCase itShould="Radio disabled" tags={['C_API']}>
        <List>
          <List.Item thumb={<Radio disabled={true}>Radio</Radio>} />
        </List>
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
      <TestCase itShould="Radio.Group disabled" tags={['C_API']}>
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
      <TestCase itShould="Radio.Group onChange()" tags={['C_API']}>
        <List>
          <Radio.Group
            value={part2Value}
            onChange={(e: any) => { setPart2Value(e.target.value) }}
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
      <TestCase itShould="Radio.Group 垂直" tags={['C_API']} initialState={undefined}
        arrange={({ setState }: any) =>
          <List
            renderHeader={'Radio.Group 垂直\n垂直的 Radio.Group，配合更多输入框选项'}>
            <Radio.Group
              onChange={(e: any) => {
                onGroupChange3(e);
                setState(100);
              }}
              value={part3Value}>
              <RadioItem value={1}>Option A</RadioItem>
              <RadioItem value={2}>Option B</RadioItem>
              <RadioItem value={3}>Option C</RadioItem>
              <RadioItem value={4} left>
                More...
              </RadioItem>
            </Radio.Group>
          </List>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(100);
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
    console.log('radio1 checked', e.target.value)
    this.setState({
      value1: e.target.value,
    })
  }

  onChange2 = (e: EventRadioGroup) => {
    console.log('radio2 checked', e.target.value)
    this.setState({
      value2: e.target.value,
    })
  }

  onChange3 = (e: EventRadioGroup) => {
    console.log('radio3 checked', e.target.value)
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
