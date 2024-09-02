import {useState, useRef} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Center, Button, AlertDialog} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export function AlertDialogTest() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  const cancelRef = useRef(null);
  const initialFocusRef = useRef(null);
  const finalFocusRef = useRef(null);
  console.log(cancelRef, 'cancelRef')
  console.log(initialFocusRef, 'initialFocusRef')
  console.log(finalFocusRef, 'finalFocusRef')
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
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen(!isOpen)}>
                      Delete Customer
                    </Button>
                    <AlertDialog
                      leastDestructiveRef={cancelRef}
                      initialFocusRef={initialFocusRef}
                      finalFocusRef={finalFocusRef}
                      size={30}
                      isOpen={isOpen}
                      closeOnOverlayClick
                      isKeyboardDismissable
                      overlayVisible={true}
                      backdropVisible={false}
                      useRNModal={true}
                      onClose={onClose}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>Delete Customer</AlertDialog.Header>
                        <AlertDialog.Body>
                          This will remove all data relating to Alex. This
                          action cannot be reversed. Deleted data can not be
                          recovered.
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={onClose}
                              ref={cancelRef}>
                              Cancel
                            </Button>
                            <Button colorScheme="danger" onPress={onClose}>
                              Delete
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                  </Center>
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
