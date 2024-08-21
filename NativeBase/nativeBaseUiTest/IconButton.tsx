import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {
  IconButton,
  Icon,
  Box,
  Center,
  VStack,
} from 'native-base';

import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export function IconButtonTest() {
  // 官网给给的文档就是通过组件写样式做成了卡片的样子
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="Basic">
            <TestCase itShould="Basic" tags={['dev']}>
              <View style={styles.section}>
                <Text>Basic</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <IconButton
                      colorScheme="danger"
                      icon={<Icon name="emoji-happy" />}
                      borderRadius="full"
                      _icon={{
                        color: 'orange.500',
                        size: 'md',
                      }}
                      _hover={{
                        bg: 'orange.600:alpha.20',
                      }}
                      _pressed={{
                        bg: 'orange.600:alpha.20',
                        _icon: {
                          name: 'emoji-flirt',
                        },
                        _ios: {
                          _icon: {
                            size: '2xl',
                          },
                        },
                      }}
                      _ios={{
                        _icon: {
                          size: '2xl',
                        },
                      }}
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Sizes">
            <TestCase itShould="Sizes" tags={['dev']}>
              <View style={styles.section}>
                <Text>Sizes</Text>
                <View style={styles.subSection}>
                  <Center>
                    <VStack space={4} alignItems="center">
                      {['xs', 'sm', 'md', 'lg'].map(size => (
                        <IconButton
                          size={size}
                          variant="solid"
                          _icon={{
                            // as: MaterialIcons,
                            name: 'menu',
                          }}
                        />
                      ))}
                    </VStack>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Playground">
            <TestCase itShould="Playground" tags={['dev']}>
              <View style={styles.section}>
                <Text>Playground</Text>
                <View style={styles.subSection}>
                  <Center>
                    <VStack space={4} alignItems="center">
                      {['outline', 'solid', 'ghost'].map(variant => (
                        <IconButton
                          colorScheme="indigo"
                          key={variant}
                          variant={variant}
                          _icon={{
                            // as: AntDesign,
                            name: 'search1',
                          }}
                        />
                      ))}
                    </VStack>
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
