import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Center, Box, VStack, useToast, Button} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export function ToastTest() {
  const toast = useToast();
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

          <TestSuite name="位置">
            <TestCase itShould="Position" tags={['dev']}>
              <View style={styles.section}>
                <Text>位置</Text>
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

          <TestSuite name="自定义">
            <TestCase itShould="Custom component" tags={['dev']}>
              <View style={styles.section}>
                <Text>自定义</Text>
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
