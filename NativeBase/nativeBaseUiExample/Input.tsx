import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import {Stack, Input} from 'native-base';
export function InputExample() {
  return (
    <>
      <ScrollView style={styles.content}>
        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input size="xs" placeholder="xs Input" />
          <Input size="sm" placeholder="sm Input" />
          <Input size="md" placeholder="md Input" />
          <Input size="lg" placeholder="lg Input" />
          <Input size="xl" placeholder="xl Input" />
          <Input size="2xl" placeholder="2xl Input" />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input variant="outline" placeholder="Outline" />
          <Input variant="filled" placeholder="Filled" />
          <Input variant="underlined" placeholder="Underlined" />
          <Input variant="unstyled" placeholder="Unstyled" />
          <Input variant="rounded" placeholder="Round" />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input isDisabled placeholder="isDisabled true" />
          <Input isDisabled={false} placeholder="isDisabled:false" />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input isHovered={false} placeholder="isHovered false" />
          <Input isHovered placeholder="isHovered true" />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input isFocused={false} placeholder="isFocused false" />
          <Input isFocused placeholder="isFocused true" />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input isRequired={false} placeholder="isRequired false" />
          <Input isRequired placeholder="isRequired true" />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input isFullWidth={false} placeholder="isFullWidth false" />
          <Input isFullWidth placeholder="isFullWidth true" />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input isReadOnly={false} placeholder="isReadOnly false" />
          <Input isReadOnly placeholder="isReadOnly true" />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input
            InputLeftElement={<Text>InputLeftElement</Text>}
            placeholder="placeholder"
          />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input
            leftElement={<Text>leftElement</Text>}
            placeholder="placeholder"
          />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input
            InputRightElement={<Text>InputRightElement</Text>}
            placeholder="placeholder"
          />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input
            rightElement={<Text>rightElement</Text>}
            placeholder="placeholder"
          />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input type="text" placeholder="type:text" />
          <Input type="password" placeholder="type:password" />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input
            _hover={{fontSize: 20, color: 'amber.600'}}
            placeholder="_hover"
            value="_hover"
          />
          <Input
            isHovered
            _hover={{fontSize: 20, color: 'amber.600'}}
            placeholder="_hover"
            value="_hover"
          />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input
            _focus={{fontSize: 20, color: 'amber.600'}}
            placeholder="_focus"
            value="_focus"
          />
          <Input
            isFocused
            _focus={{fontSize: 20, color: 'amber.600'}}
            placeholder="_focus"
            value="_focus"
          />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input
            _disabled={{fontSize: 20, color: 'amber.600'}}
            placeholder="_disabled"
            value="_disabled"
          />
          <Input
            isDisabled
            _disabled={{fontSize: 20, color: 'amber.600'}}
            placeholder="_disabled"
            value="_disabled"
          />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input
            _readOnly={{fontSize: 20, color: 'amber.600'}}
            placeholder="_readOnly"
            value="_readOnly"
          />
          <Input
            isReadOnly
            _readOnly={{fontSize: 20, color: 'amber.600'}}
            placeholder="_readOnly"
            value="_readOnly"
          />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input
            _invalid={{fontSize: 20, color: 'amber.600'}}
            placeholder="_invalid"
            value="_invalid"
          />
          <Input
            isInvalid
            _invalid={{fontSize: 20, color: 'amber.600'}}
            placeholder="_invalid"
            value="_invalid"
          />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input
            _input={{fontSize: 10, color: 'amber.600'}}
            placeholder="_input"
            value="_input"
          />
          <Input
            _input={{fontSize: 20, color: 'amber.600'}}
            placeholder="_input"
            value="_input"
          />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input
            _stack={{fontSize: 10, color: 'amber.600'}}
            placeholder="_stack"
            value="_stack">
            <Text>_stack001</Text>
            <Text>_stack002</Text>
          </Input>
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input
            isFocused
            focusOutlineColor="red.500"
            placeholder="focusOutlineColor true"
          />
          <Input placeholder="focusOutlineColor fasle" />
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input
            isInvalid
            invalidOutlineColor="red.500"
            placeholder="invalidOutlineColor true"
          />
          <Input placeholder="invalidOutlineColor fasle" />
        </Stack>
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
