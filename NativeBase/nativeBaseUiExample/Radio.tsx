import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {AddIcon, DeleteIcon, HStack, Radio} from 'native-base';
export function RadioExample() {
  const [value, setValue] = React.useState('one');
  return (
    <>
      <ScrollView style={styles.content}>
        <Radio.Group
          name="myRadioGroup"
          accessibilityLabel="favorite number"
          value={value}
          onChange={nextValue => {
            setValue(nextValue);
          }}>
          <Radio value="one" my={1}>
            One
          </Radio>
          <Radio value="two" my={1}>
            Two
          </Radio>
        </Radio.Group>

        <Radio.Group
          name="exampleGroup"
          defaultValue="1"
          accessibilityLabel="colorScheme">
          <HStack space={4}>
            <Radio value="one" colorScheme="red.600" my={1}>
              One
            </Radio>
            <Radio value="two" colorScheme="default" my={1}>
              Two
            </Radio>
            <Radio value="three" colorScheme="blue.600" my={1}>
              three
            </Radio>
            <Radio colorScheme="emerald" value="1" my={1}>
              emerald
            </Radio>
            <Radio colorScheme="secondary" value="2" my={1}>
              secondary
            </Radio>
            <Radio colorScheme="warning" value="3" my={1}>
              warning
            </Radio>
          </HStack>
        </Radio.Group>

        <Radio.Group
          name="exampleGroup"
          defaultValue="1"
          accessibilityLabel="isDisabled">
          <HStack space={4}>
            <Radio value="1" my={1} isDisabled>
              First
            </Radio>
            <Radio value="2" my={1}>
              Second
            </Radio>
          </HStack>
        </Radio.Group>

        <Radio.Group
          name="exampleGroup"
          defaultValue="1"
          accessibilityLabel="isHovered">
          <HStack space={4}>
            <Radio isHovered value="1" my={1}>
              isHovered true
            </Radio>
            <Radio isHovered={false} value="2" my={1}>
              isHovered false
            </Radio>
          </HStack>
        </Radio.Group>

        <Radio.Group
          name="exampleGroup"
          defaultValue="1"
          accessibilityLabel="isPressed">
          <HStack space={4}>
            <Radio isPressed value="1" my={1}>
              isPressed true
            </Radio>
            <Radio isPressed={false} value="2" my={1}>
              isPressed false
            </Radio>
          </HStack>
        </Radio.Group>

        <Radio.Group
          name="exampleGroup"
          defaultValue="1"
          accessibilityLabel="isFocused">
          <HStack space={4}>
            <Radio isFocused value="1" my={1}>
              isFocused true
            </Radio>
            <Radio isFocused={false} value="2" my={1}>
              isFocused false
            </Radio>
          </HStack>
        </Radio.Group>

        <Radio.Group
          name="exampleGroup"
          defaultValue="1"
          accessibilityLabel="isFocusVisible">
          <HStack space={4}>
            <Radio isFocusVisible value="1" my={1}>
              isFocusVisible true
            </Radio>
            <Radio isFocusVisible={false} value="2" my={1}>
              isFocusVisible false
            </Radio>
          </HStack>
        </Radio.Group>

        <Radio.Group
          name="exampleGroup"
          defaultValue="1"
          accessibilityLabel="isInvalid">
          <HStack space={4}>
            <Radio isInvalid value="1" my={1}>
              isInvalid true
            </Radio>
            <Radio isInvalid={false} value="2" my={1}>
              isInvalid false
            </Radio>
          </HStack>
        </Radio.Group>

        <Radio.Group
          name="exampleGroup"
          defaultValue="1"
          accessibilityLabel="pick a size">
          <HStack space={4} w="75%" maxW="300px">
            <Radio value="1" colorScheme="red" size="sm" my={1}>
              Small
            </Radio>
            <Radio value="2" colorScheme="green" size="md" my={1}>
              Medium
            </Radio>
            <Radio value="3" colorScheme="yellow" size="lg" my={1}>
              Large
            </Radio>
          </HStack>
        </Radio.Group>

        <Radio.Group
          name="exampleGroup"
          defaultValue="1"
          accessibilityLabel="pick a icon">
          <HStack space={4} w="75%" maxW="300px">
            <Radio
              _text={{
                mx: 2,
              }}
              colorScheme="green"
              value="1"
              icon={<AddIcon />}
              my={1}>
              AddIcon
            </Radio>
            <Radio
              _text={{
                mx: 2,
              }}
              colorScheme="red"
              value="2"
              icon={<DeleteIcon />}
              my={1}>
              DeleteIcon
            </Radio>
          </HStack>
        </Radio.Group>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: 60,
    height: 60,
    aspectRatio: 1,
  },
  content: {
    width: '100%',
    height: '100%',
  },
  section: {
    backgroundColor: '#f2f2f2',
  },
  box: {
    height: 100,
    width: 200,
  },
  tipText: {
    fontSize: 12,
    color: '#999',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    color: '#fff',
  },
  colText: {
    padding: 5,
  },
  col: {
    backgroundColor: '#FFB6C1',
  },
  row: {
    backgroundColor: '#00BFFF',
  },
});
