import {useState, useRef} from 'react';
import {View, StyleSheet, ScrollView, Text, StatusBar} from 'react-native';
import {
  Select,
  Center,
  Box,
  FormControl,
  CheckIcon,
  WarningOutlineIcon,
  Icon,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function SelectTest() {
  const [service, setService] = useState('');
  const wrapperRef = useRef(null)
  console.log(wrapperRef)
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="Basic">
            <TestCase itShould="Basic" tags={['dev']}>
              <View style={styles.section}>
                <Text>Basic</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service}
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Choose Service"
                        _selectedItem={{
                          bg: 'teal.600',
                        }}
                        isDisabled
                        wrapperRef={wrapperRef}
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

          <TestSuite name="Basic">
            <TestCase itShould="Basic" tags={['dev']}>
              <View style={styles.section}>
                <Text>Basic</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Box maxW="300">
                      <Select
                        selectedValue={service}
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Choose Service"
                        isFocusVisible
                        isFocused
                        onValueChange={value => {
                          console.log(value, 'value');
                        }}
                        _selectedItem={{
                          bg: 'teal.600',
                        }}
                        _actionSheet={{
                          bgColor: 'teal.600',
                        }}
                        _actionSheetContent={{
                          bg: 'amber.300',
                        }}
                        _actionSheetBody={{
                          bg: 'amber.700',
                        }}
                        onClose={() => {
                          console.log('onClose');
                        }}
                        onOpen={() => {
                          console.log('open');
                        }}
                        dropdownIcon={
                          <Icon
                            as={MaterialCommunityIcons}
                            name="web"
                            color="coolGray.800"
                            _dark={{
                              color: 'warmGray.50',
                            }}
                          />
                        }
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

          <TestSuite name="FormControlled">
            <TestCase itShould="FormControlled" tags={['dev']}>
              <View style={styles.section}>
                <Text>FormControlled</Text>
                <View style={styles.subSection}>
                  <FormControl w="3/4" maxW="300" isRequired isInvalid>
                    <FormControl.Label>Choose service</FormControl.Label>
                    <Select
                      minWidth="200"
                      accessibilityLabel="Choose Service"
                      placeholder="Choose Service"
                      _selectedItem={{
                        bg: 'teal.600',
                        endIcon: <CheckIcon size={5} />,
                      }}
                      dropdownCloseIcon={
                        <Icon
                          as={MaterialIcons}
                          name="search"
                          color="coolGray.800"
                          _dark={{
                            color: 'warmGray.50',
                          }}
                        />
                      }
                      dropdownOpenIcon={<MaterialIcons name="mic" size={20} />}
                      mt="1">
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
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}>
                      Please make a selection!
                    </FormControl.ErrorMessage>
                  </FormControl>
                </View>
              </View>
            </TestCase>
          </TestSuite>
        </ScrollView>
      </Tester>
    </>
  );
}

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
