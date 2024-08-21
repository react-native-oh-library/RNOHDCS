import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {HStack, Checkbox, Box, Stack} from 'native-base';
export function CheckBoxExample() {
  const myRef = React.useRef();
  const [bg, setBg] = React.useState('#fa000050');
  const [groupValue, setGroupValue] = React.useState([
    'Photography',
    'Gardening',
  ]);
  useEffect(() => {
    const styleObj = {
      backgroundColor: bg,
    };
    // @ts-ignore
    myRef.current.setNativeProps({
      style: styleObj,
    });
  }, [myRef, bg]);
  return (
    <>
      <ScrollView style={styles.content}>
        <HStack space={6}>
          <Checkbox value="test" accessibilityLabel="This is a  checkbox" />
        </HStack>
        <HStack space={6}>
          <Checkbox
            name="test"
            value="test"
            accessibilityLabel="This is a  checkbox"
          />
        </HStack>
        <HStack space={6}>
          <Checkbox
            name="test"
            value="test"
            accessibilityLabel="This is a  checkbox"
          />
        </HStack>
        <Box alignItems="center">
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            space={3}
            alignItems="flex-start">
            <Checkbox value="danger" colorScheme="danger" defaultIsChecked>
              Danger
            </Checkbox>
            <Checkbox value="info" colorScheme="info" defaultIsChecked>
              Info
            </Checkbox>
            <Checkbox value="orange" colorScheme="orange" defaultIsChecked>
              Orange
            </Checkbox>
            <Checkbox value="purple" colorScheme="purple" defaultIsChecked>
              Purple
            </Checkbox>
          </Stack>
        </Box>
        ;
        <View style={styles.section}>
          <HStack space={6}>
            <Checkbox
              value="test 1"
              accessibilityLabel="defaultIsChecked false"
              defaultIsChecked={false}
            />
            <Checkbox
              value="test 2"
              accessibilityLabel="defaultIsChecked true"
              defaultIsChecked
            />
          </HStack>
        </View>
        <View style={styles.section}>
          <HStack space={6}>
            <Checkbox
              value="test 1"
              accessibilityLabel="isChecked:fasle"
              isChecked={false}
            />
            <Checkbox
              value="test 2"
              accessibilityLabel="isChecked:true"
              isChecked={true}
            />
          </HStack>
        </View>
        <View style={styles.section}>
          <HStack space={6}>
            <Checkbox
              value="test1"
              accessibilityLabel="isIndeterminate:false"
              isIndeterminate={false}
            />
            <Checkbox
              value="test2"
              accessibilityLabel="isIndeterminate:true"
              isIndeterminate={true}
            />
          </HStack>
        </View>
        <View style={styles.section}>
          <HStack space={6}>
            <Checkbox
              value="test1"
              accessibilityLabel="isDisabled:false"
              isDisabled={false}
            />
            <Checkbox
              value="test2"
              accessibilityLabel="isDisabled:true"
              isDisabled={true}
            />
          </HStack>
        </View>
        <View style={styles.section}>
          <HStack space={6}>
            <Checkbox
              value="test1"
              accessibilityLabel="isInvalid:false"
              isInvalid={false}
            />
            <Checkbox
              value="test2"
              accessibilityLabel="isInvalid:true"
              isInvalid={true}
            />
          </HStack>
        </View>
        <View style={styles.section}>
          <HStack space={6}>
            <Checkbox
              value="test1"
              accessibilityLabel="isReadOnly:false"
              isReadOnly={false}
            />
            <Checkbox
              value="test2"
              accessibilityLabel="isReadOnly:true"
              isReadOnly={true}
            />
          </HStack>
        </View>
        <View style={styles.section}>
          <HStack space={6}>
            <Checkbox
              value="test1"
              accessibilityLabel="isHovered:false"
              isHovered={false}
            />
            <Checkbox
              value="test2"
              accessibilityLabel="isHovered:true"
              isHovered={true}
            />
          </HStack>
        </View>
        <View style={styles.section}>
          <HStack space={6}>
            <Checkbox
              value="test1"
              accessibilityLabel="isPressed:false"
              isPressed={false}
            />
            <Checkbox
              value="test2"
              accessibilityLabel="isPressed:true"
              isPressed={true}
            />
          </HStack>
        </View>
        <View style={styles.section}>
          <HStack space={6}>
            <Checkbox
              isFocusVisible
              value="test1"
              accessibilityLabel="isFocused:false"
              isFocused={false}
            />
            <Checkbox
              isFocusVisible
              value="test2"
              accessibilityLabel="isFocused:true"
              isFocused={true}
            />
          </HStack>
        </View>
        <View style={styles.section}>
          <HStack space={6}>
            <Checkbox
              isFocusVisible={true}
              value="test1"
              accessibilityLabel="isFocusVisible:false"
            />
            <Checkbox
              isFocusVisible={false}
              value="test2"
              accessibilityLabel="isFocusVisible:true"
            />
          </HStack>
        </View>
        <View style={styles.section}>
          <HStack space={6}>
            <Checkbox size="lg" value="test1" accessibilityLabel="size:lg" />
            <Checkbox size="md" value="test2" accessibilityLabel="size:md" />
            <Checkbox size="sm" value="test2" accessibilityLabel="size:sm" />
          </HStack>
        </View>
        <View style={styles.section}>
          <HStack space={6}>
            <Checkbox
              _stack={{fontSize: 20, color: 'red'}}
              value="test2"
              accessibilityLabel="_stack"
            />
          </HStack>
        </View>
        <View style={styles.section}>
          <HStack space={6}>
            <Checkbox.Group
              colorScheme="green"
              defaultValue={groupValue}
              accessibilityLabel="pick an item in Group"
              onChange={values => {
                setGroupValue(values || []);
              }}>
              <Checkbox value="Photography" my="1">
                Photography
              </Checkbox>
              <Checkbox value="Writing" my="1">
                Writing
              </Checkbox>
              <Checkbox value="Gardening" my="1">
                Gardening
              </Checkbox>
              <Checkbox value="Cooking" my="1">
                Cooking
              </Checkbox>
            </Checkbox.Group>
          </HStack>
        </View>
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
