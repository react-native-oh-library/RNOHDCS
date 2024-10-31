import {useState, useRef} from 'react';
import {View, StyleSheet, ScrollView,TextInput} from 'react-native';
import {Select, Center, Box, Button} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

const SelectTest = () => {
  const [service3, setService3] = useState('');

  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
        <TestSuite name="placeholderTextColor">
            <TestCase itShould="placeholderTextColor" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <TextInput  placeholder='TextInput' placeholderTextColor="#ff0000" ></TextInput>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="placeholderTextColor">
            <TestCase itShould="placeholderTextColor" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service3}
                        minWidth="200"
                        isFocused
                        isFocusVisible
                        accessibilityLabel="accessibilityLabel"
                        placeholder="Choose Service"
                        placeholderTextColor={'text.400'}
                        _selectedItem={{
                          bg: 'teal.600',
                        }}
                        variant="rounded"
                        onValueChange={itemValue => {
                          setService3(itemValue);
                        }}
                        mt={1}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="Button">
            <TestCase itShould="Button" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                     <Button isFocused>Button</Button>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>
        </ScrollView>
      </Tester>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
  },
  section: {
    backgroundColor: '#f2f2f2',
  },
  subSection: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
    width: '100%',
    padding: 10,
  },
});

export default SelectTest;
