import {useState, useRef} from 'react';
import {View, StyleSheet, ScrollView,Text,StatusBar} from 'react-native';
import {
  Select,
  Center,
  Box,
  FormControl,
  CheckIcon,
  WarningOutlineIcon
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';


export function SelectTest() {
  const [service, setService] = useState('');
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
                        mt={1}
                        >
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
