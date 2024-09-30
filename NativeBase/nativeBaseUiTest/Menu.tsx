import {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {
  Button,
  Box,
  Menu,
  Pressable,
  HamburgerIcon,
  Divider,
  VStack,
  Select,
  CheckIcon,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export function MenuTest() {
  const [shouldOverlapWithTrigger] = useState(false);
  const [position, setPosition] = useState('auto');
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="Basic">
            <TestCase itShould="Basic" tags={['dev']}>
              <View style={styles.section}>
                <Text>Basic</Text>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      w="190"
                      defaultIsOpen={false}
                      closeOnSelect={false}
                      crossOffset={400}
                      offset={50}
                      trigger={triggerProps => {
                        return (
                          <Pressable
                            accessibilityLabel="More options menu"
                            {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.Item _stack={{fontSize: 10, color: 'red'}}>
                        Arial
                      </Menu.Item>
                      <Menu.Item>Nunito Sans</Menu.Item>
                      <Menu.Item>Roboto</Menu.Item>
                      <Menu.Item>Poppins</Menu.Item>
                      <Menu.Item>SF Pro</Menu.Item>
                      <Menu.Item>Helvetica</Menu.Item>
                      <Menu.Item isDisabled>Sofia</Menu.Item>
                      <Menu.Item>Cookie</Menu.Item>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Group">
            <TestCase itShould="Group" tags={['dev']}>
              <View style={styles.section}>
                <Text>Group</Text>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.Group title="Free">
                        <Menu.Item>Arial</Menu.Item>
                        <Menu.Item>Nunito Sans</Menu.Item>
                        <Menu.Item>Roboto</Menu.Item>
                      </Menu.Group>
                      <Divider mt="3" w="100%" />
                      <Menu.Group title="Paid">
                        <Menu.Item>SF Pro</Menu.Item>
                        <Menu.Item>Helvetica</Menu.Item>
                      </Menu.Group>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="MenuOptionGroups">
            <TestCase itShould="MenuOptionGroups" tags={['dev']}>
              <View style={styles.section}>
                <Text>MenuOptionGroups</Text>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      closeOnSelect={false}
                      w="190"
                      onOpen={() => console.log('opened')}
                      onClose={() => console.log('closed')}
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        _stack={{fontSize: 20, color: 'red'}}
                        defaultValue="Arial"
                        title="free"
                        type="radio">
                        <Menu.ItemOption value="Arial">Arial</Menu.ItemOption>
                        <Menu.ItemOption value="Nunito Sans">
                          Nunito Sans
                        </Menu.ItemOption>
                        <Menu.ItemOption value="Roboto">Roboto</Menu.ItemOption>
                      </Menu.OptionGroup>
                      <Divider mt="3" w="100%" />
                      <Menu.OptionGroup title="paid" type="checkbox">
                        <Menu.ItemOption value="SF Pro">SF Pro</Menu.ItemOption>
                        <Menu.ItemOption value="Helvetica">
                          Helvetica
                        </Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Menu Placement">
            <TestCase itShould="Menu Placement" tags={['dev']}>
              <View style={styles.section}>
                <Text>Menu Placement</Text>
                <View style={styles.subSection}>
                  <VStack space={6} alignSelf="flex-start" w="100%">
                    <Menu
                      w="160"
                      shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
                      placement={position == 'auto' ? undefined : position}
                      trigger={triggerProps => {
                        return (
                          <Button
                          
                            alignSelf="center"
                            variant="solid"
                            {...triggerProps}>
                            Menu
                          </Button>
                        );
                      }}>
                      <Menu.Item >Arial</Menu.Item>
                      <Menu.Item>Nunito Sans</Menu.Item>
                      <Menu.Item>Roboto</Menu.Item>
                    </Menu>

                    <Select
                      selectedValue={position}
                      mx={{
                        base: 0,
                        md: 'auto',
                      }}
                      onValueChange={nextValue => setPosition(nextValue)}
                      _selectedItem={{
                        bg: 'cyan.600',
                        endIcon: <CheckIcon size={4} />,
                      }}
                      accessibilityLabel="Select a position for Menu">
                      <Select.Item label="auto" value="auto" />
                      <Select.Item label="Top Left" value="top left" />
                      <Select.Item label="Top" value="top" />
                      <Select.Item label="Top Right" value="top right" />
                      <Select.Item label="Right Top" value="right top" />
                      <Select.Item label="Right" value="right" />
                      <Select.Item label="Right Bottom" value="right bottom" />
                      <Select.Item label="Bottom Left" value="bottom left" />
                      <Select.Item label="Bottom" value="bottom" />
                      <Select.Item label="Bottom Right" value="bottom right" />
                      <Select.Item label="Left Top" value="left top" />
                      <Select.Item label="Left" value="left" />
                      <Select.Item label="Left Bottom" value="left bottom" />
                    </Select>
                  </VStack>
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
