import {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Popover, Box, Button, VStack, Select, CheckIcon} from 'native-base';

export function PopoverExample() {
  const [position, setPosition] = useState('auto');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text>Basic</Text>
          <View style={styles.subSection}>
            <Box w="100%" alignItems="center">
              <Popover
                trapFocus={false}
                trigger={triggerProps => {
                  return (
                    <Button {...triggerProps} colorScheme="danger">
                      Delete Customer
                    </Button>
                  );
                }}>
                <Popover.Content accessibilityLabel="Delete Customerd" w="56">
                  <Popover.Arrow />
                  <Popover.CloseButton />
                  <Popover.Header>Delete Customer</Popover.Header>
                  <Popover.Body>
                    This will remove all data relating to Alex. This action
                    cannot be reversed. Deleted data can not be recovered.
                  </Popover.Body>
                  <Popover.Footer justifyContent="flex-end">
                    <Button.Group space={2}>
                      <Button colorScheme="coolGray" variant="ghost">
                        Cancel
                      </Button>
                      <Button colorScheme="danger">Delete</Button>
                    </Button.Group>
                  </Popover.Footer>
                </Popover.Content>
              </Popover>
            </Box>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Positions</Text>
          <View style={styles.subSection}>
            <Box w="100%" alignItems="center">
              <VStack space={6} alignSelf="flex-start" w="100%">
                <Popover // @ts-ignore
                  placement={position === 'auto' ? undefined : position}
                  trigger={triggerProps => {
                    return (
                      <Button
                        colorScheme="danger"
                        alignSelf="center"
                        {...triggerProps}
                        onPress={() => setIsOpen(true)}>
                        Delete Customer
                      </Button>
                    );
                  }}
                  crossOffset={50}
                  isOpen={isOpen}
                  isKeyboardDismissable
                  useRNModal
                  shouldOverlapWithTrigger
                  shouldFlip
                  onClose={() => setIsOpen(!isOpen)}>
                  <Popover.Content w="56">
                    <Popover.Arrow />
                    <Popover.CloseButton onPress={() => setIsOpen(false)} />
                    <Popover.Header>Delete Customer</Popover.Header>
                    <Popover.Body>
                      This will remove all data relating to Alex. This action
                      cannot be reversed. Deleted data can not be recovered.
                      <View>
                        <Text>Text test</Text>
                      </View>
                    </Popover.Body>
                    <Popover.Footer justifyContent="flex-end">
                      <Button.Group space={2}>
                        <Button
                          colorScheme="coolGray"
                          variant="ghost"
                          onPress={() => setIsOpen(false)}>
                          Cancel
                        </Button>
                        <Button
                          colorScheme="danger"
                          onPress={() => setIsOpen(false)}>
                          Delete
                        </Button>
                      </Button.Group>
                    </Popover.Footer>
                  </Popover.Content>
                </Popover>

                <Select
                  selectedValue={position}
                  mx={{
                    base: 0,
                    md: 'auto',
                  }}
                  accessibilityLabel="Select a position for Popover"
                  onValueChange={nextValue => setPosition(nextValue)}
                  _selectedItem={{
                    bg: 'cyan.600',
                    endIcon: <CheckIcon size={4} />,
                  }}>
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
            </Box>
          </View>
        </View>
      </ScrollView>
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
