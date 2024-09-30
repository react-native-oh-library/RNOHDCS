
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Checkbox, Flex, List, WingBlank } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

const AgreeItem = Checkbox.AgreeItem;
const CheckboxItem = Checkbox.CheckboxItem;

export default () => {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [checkboxItem1, setCheckboxItem1] = useState(true);
  const onChange = (e: { target: { checked: boolean } }) => {
    setChecked1(e.target.checked);
  }

  const toggleChecked = () => {
    setChecked(!checked);
  }

  const toggleDisable = () => {
    setDisabled(!disabled);
  }

  const onChange2 = (e: { target: { checked: boolean } }) => {
    setChecked(e.target.checked);
  }
  const label = `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`

  return (
    <TestSuite name="CheckboxTest">
      <TestCase itShould="render a Checkbox defaultChecked={true}， defaultChecked={false}" tags={['C_API']}>
        <List>
          <List.Item thumb={<Checkbox defaultChecked={true}>{'默认选中'}</Checkbox>} />
          <List.Item thumb={<Checkbox defaultChecked={false}>{'默认不选中'}</Checkbox>} />
        </List>
      </TestCase>
      <TestCase itShould="render a Checkbox onChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <List>
            <List.Item
              thumb={<Checkbox checked={checked1} onChange={(e: { target: { checked: boolean } }) => {
                onChange(e);
                setState(true);
              }}>Checkbox</Checkbox>}
            />
          </List>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="受控的Checkbox" tags={['C_API']}>
        <View>
          <List
            renderHeader="受控的Checkbox"
            renderFooter={
              <Flex>
                <Flex.Item style={{ margin: 10 }}>
                  <Button
                    type="primary"
                    size="small"
                    onPress={toggleChecked}>
                    {!checked ? 'Check' : 'Uncheck'}
                  </Button>
                </Flex.Item>
                <Flex.Item style={{ margin: 10 }}>
                  <Button
                    type="primary"
                    size="small"
                    onPress={toggleDisable}>
                    {!disabled ? 'Disable' : 'Enable'}
                  </Button>
                </Flex.Item>
              </Flex>
            }>
            <List.Item
              thumb={
                <Checkbox
                  checked={checked}
                  disabled={disabled}
                  onChange={onChange2}>
                  {label}
                </Checkbox>
              }
            />
          </List>
        </View>
      </TestCase>
      <TestCase itShould="AgreeItem" tags={['C_API']}>
        <View>
          <List renderHeader="AgreeItem">
            <AgreeItem>
              Agree agreement agreement agreement agreement
            </AgreeItem>
          </List>
        </View>
      </TestCase>
      <TestCase itShould="CheckboxItem" tags={['C_API']}>
        <View>
          <List renderHeader="CheckboxItem">
            <CheckboxItem
              checked={checkboxItem1}
              onChange={(event) => {
                setCheckboxItem1(event.target.checked);
              }}>
              Option 1
            </CheckboxItem>
            <CheckboxItem>Option 2</CheckboxItem>
            <CheckboxItem>Option 3</CheckboxItem>
            <CheckboxItem checked right>
              自动已被选择，无法取消的选项
            </CheckboxItem>
          </List>
        </View>
      </TestCase>
      <TestCase itShould="'全选\n在实现全选效果时 indeterminate 属性" tags={['C_API']}>
        <View>
          <List
            renderHeader={
              '全选\n在实现全选效果时，你可能会用到 indeterminate 属性。'
            }>
            <CheckboxGroup />
          </List>
        </View>
      </TestCase>
    </TestSuite>
  );
};

const plainOptions = ['Apple', 'Pear', 'Orange']
const defaultCheckedList = ['Apple', 'Orange']

const CheckboxGroup = () => {
  const [checkedList, setCheckedList] = React.useState(
    new Set(defaultCheckedList),
  )
  const [indeterminate, setIndeterminate] = React.useState(true)
  const [checkAll, setCheckAll] = React.useState(false)

  const onChange = (value: any, e: { target: { checked: boolean } }) => {
    if (e.target.checked) {
      checkedList.add(value)
    } else {
      checkedList.delete(value)
    }

    setCheckedList(new Set(checkedList))
    setIndeterminate(
      !!checkedList.size && checkedList.size < plainOptions.length,
    )
    setCheckAll(checkedList.size === plainOptions.length)
  }

  const onCheckAllChange = (e: { target: { checked: boolean } }) => {
    setCheckedList(e.target.checked ? new Set(plainOptions) : new Set())
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }

  return (
    <>
      <CheckboxItem
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}>
        Check all
      </CheckboxItem>
      <WingBlank>
        {plainOptions.map((a) => (
          <CheckboxItem
            key={a}
            onChange={onChange.bind(this, a)}
            checked={checkedList.has(a)}>
            {a}
          </CheckboxItem>
        ))}
      </WingBlank>
    </>
  )
}

