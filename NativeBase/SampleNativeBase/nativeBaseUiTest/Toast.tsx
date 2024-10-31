import {View, StyleSheet, ScrollView, Text, Alert} from 'react-native';
import {Center, Box, VStack, Stack, useToast, Button, Input} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

const ToastTest = () => {
  const toast = useToast();
  const toastIdRef = React.useRef();

  function close() {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }

  function closeAll() {
    toast.closeAll();
  }

  function addToast() {
    toastIdRef.current = toast.show({
      title: 'Hi, Nice to see you',
    });
  }

  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="show">
            <TestCase itShould="show" tags={['dev']}>
              <View style={styles.section}>
                <Text>show</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      onPress={() =>
                        toast.show({
                          description: 'Hello world',
                          accessibilityAnnouncement:
                            'accessibilityAnnouncement',
                          onCloseComplete() {
                            console.log('1111111111');
                          },
                          avoidKeyboard: true,
                        })
                      }>
                      Show Toast
                    </Button>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="close">
            <TestCase itShould="close-一次关闭一个" tags={['dev']}>
              <View style={styles.section}>
                <Text>close</Text>
                <View style={styles.subSection}>
                  <Stack
                    direction={{
                      base: 'column',
                      md: 'row',
                    }}
                    space={2}>
                    <Button onPress={addToast}>Toast</Button>
                    <Button onPress={close} variant="outline">
                      Close toast-一次关闭一个
                    </Button>
                  </Stack>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="closeAll">
            <TestCase itShould="closeAll" tags={['dev']}>
              <View style={styles.section}>
                <Text>closeAll</Text>
                <View style={styles.subSection}>
                  <Stack
                    direction={{
                      base: 'column',
                      md: 'row',
                    }}
                    space={2}>
                    <Button onPress={addToast}>Toast</Button>
                    <Button onPress={closeAll} variant="outline">
                      Close all toasts 一次关闭所有
                    </Button>
                  </Stack>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="isActive">
            <TestCase itShould="isActive" tags={['dev']}>
              <View style={styles.section}>
                <Text>isActive</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      onPress={() => {
                        if (!toast.isActive('test-toast')) {
                          toast.show({
                            id: 'test-toast',
                            title: "Hey! You can't create a duplicate toast",
                          });
                        }
                      }}>
                      Click me!
                    </Button>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="消息体title">
            <TestCase itShould="消息体title" tags={['dev']}>
              <View style={styles.section}>
                <Text>消息体title</Text>
                <View style={styles.subSection}>
                  <Center>
                    <VStack space={2}>
                      <Button
                        onPress={() =>
                          toast.show({
                            title: '消息体title',
                            placement: 'bottom',
                          })
                        }>
                        Bottom
                      </Button>
                    </VStack>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="消息体_title">
            <TestCase itShould="消息体_title" tags={['dev']}>
              <View style={styles.section}>
                <Text>消息体_title</Text>
                <View style={styles.subSection}>
                  <Center>
                    <VStack space={2}>
                      <Button
                        onPress={() =>
                          toast.show({
                            title: '消息体title',
                            placement: 'bottom',
                            _title: {color: 'emerald.500'},
                          })
                        }>
                        Bottom
                      </Button>
                    </VStack>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="消息体placement">
            <TestCase itShould="消息体placement" tags={['dev']}>
              <View style={styles.section}>
                <Text>消息体placement</Text>
                <View style={styles.subSection}>
                  <Center>
                    <VStack space={2}>
                      <Button
                        onPress={() =>
                          toast.show({
                            title: 'Hello world',
                            placement: 'bottom',
                          })
                        }>
                        Bottom
                      </Button>
                      <Button
                        onPress={() =>
                          toast.show({
                            title: 'Hello world',
                            placement: 'top',
                          })
                        }>
                        Top
                      </Button>
                      <Button
                        onPress={() =>
                          toast.show({
                            title: 'Hello world',
                            placement: 'top-left',
                          })
                        }>
                        Top left
                      </Button>
                      <Button
                        onPress={() =>
                          toast.show({
                            title: 'Hello world',
                            placement: 'top-right',
                          })
                        }>
                        Top right
                      </Button>
                      <Button
                        onPress={() =>
                          toast.show({
                            title: 'Hello world',
                            placement: 'bottom-left',
                          })
                        }>
                        Bottom left
                      </Button>
                      <Button
                        onPress={() =>
                          toast.show({
                            title: 'Hello world',
                            placement: 'bottom-right',
                          })
                        }>
                        Bottom right
                      </Button>
                    </VStack>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="消息体description">
            <TestCase itShould="消息体description" tags={['dev']}>
              <View style={styles.section}>
                <Text>消息体description</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      onPress={() => {
                        toast.show({
                          title: '消息体title',
                          description: 'description',
                        });
                      }}>
                      Custom Toast
                    </Button>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="消息体_description">
            <TestCase itShould="消息体_description" tags={['dev']}>
              <View style={styles.section}>
                <Text>消息体description</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      onPress={() => {
                        toast.show({
                          title: '消息体title',
                          description: 'description',
                          _description: {color: 'emerald.500'},
                        });
                      }}>
                      Custom Toast
                    </Button>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="消息体duration">
            <TestCase itShould="消息体duration-值3000" tags={['dev']}>
              <View style={styles.section}>
                <Text>消息体duration</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      onPress={() => {
                        toast.show({
                          title: '消息体title',
                          description: 'description',
                          duration: 3000,
                        });
                      }}>
                      Custom Toast
                    </Button>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="消息体id">
            <TestCase itShould="消息体id-无明显效果" tags={['dev']}>
              <View style={styles.section}>
                <Text>消息体id</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      onPress={() => {
                        toast.show({
                          id: 'toast_id',
                          title: '消息体title',
                          description: 'description',
                        });
                      }}>
                      Custom Toast
                    </Button>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="消息体onCloseComplete">
            <TestCase itShould="消息体onCloseComplete" tags={['dev']}>
              <View style={styles.section}>
                <Text>消息体onCloseComplete</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      onPress={() => {
                        toast.show({
                          title: '消息体title',
                          description: 'description',
                          onCloseComplete: () => {
                            Alert.alert('onCloseComplete事件');
                          },
                        });
                      }}>
                      Custom Toast
                    </Button>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="消息体render">
            <TestCase itShould="消息体render" tags={['dev']}>
              <View style={styles.section}>
                <Text>消息体render</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      onPress={() => {
                        toast.show({
                          render: () => {
                            return (
                              <Box
                                bg="emerald.500"
                                px="2"
                                py="1"
                                rounded="sm"
                                mb={5}>
                                Hello! Have a nice day
                              </Box>
                            );
                          },
                        });
                      }}>
                      Custom Toast
                    </Button>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="消息体avoidKeyboard">
            <TestCase itShould="消息体avoidKeyboard-不生效demo问题打开弹框都不能上移" tags={['dev']}>
              <View style={styles.section}>
                <Text>消息体avoidKeyboard</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      onPress={() => {
                        toast.show({
                          avoidKeyboard: true,
                          title: '消息体title',
                          description: 'description',
                          render: () => {
                            return (
                              <Box
                                bg="emerald.500"
                                px="2"
                                py="1"
                                rounded="sm"
                                mb={5}>
                                Hello! Have a nice day
                                <Input
                                  width={200}
                                  placeholder="123123"
                                  placeholderTextColor=""></Input>
                              </Box>
                            );
                          },
                        });
                      }}>
                      Custom Toast
                    </Button>
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

export default ToastTest;
