import {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {
  Badge,
  Box,
  VStack,
  HStack,
  Button,
  Center,
  CloseIcon,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Example() {
  return (
    <Box alignItems="center">
      <VStack>
        {/* 鸿蒙上单独写zIndex属性不生效可以用position+zIndex实现效果 */}
        <Badge // bg="red.400"
          colorScheme="danger"
          rounded="full"
          mb={-4}
          mr={-4}
          zIndex={1}
          variant="solid"
          position={'absolute'}
          right={0}
          top={-5}
          alignSelf="flex-end"
          _text={{
            fontSize: 12,
          }}>
          2
        </Badge>
        <Button
          zIndex={0}
          mx={{
            base: 'auto',
            md: 0,
          }}
          p="2"
          bg="cyan.500"
          _text={{
            fontSize: 14,
          }}>
          Notifications
        </Button>
      </VStack>
    </Box>
  );
}

export function BadgeTest() {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="Basic">
            <TestCase itShould="Basic" tags={['dev']}>
              <View style={styles.section}>
                <Text>Basic</Text>
                <View style={styles.subSection}>
                  <HStack
                    space={{
                      base: 2,
                      sm: 4,
                    }}
                    mx={{
                      base: 'auto',
                      md: 0,
                    }}>
                    <Badge
                      colorScheme="success"
                      startIcon={<MaterialIcons name="mic" size={20} />}>
                      SUCCESS
                    </Badge>
                    <Badge
                      colorScheme="danger"
                      endIcon={<MaterialIcons name="mic" size={20} />}>
                      DANGER
                    </Badge>
                    <Badge colorScheme="info">INFO</Badge>
                    <Badge colorScheme="coolGray">DARK</Badge>
                  </HStack>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Variants">
            <TestCase itShould="Variants" tags={['dev']}>
              <View style={styles.section}>
                <Text>Variants</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <HStack
                      space={4}
                      mx={{
                        base: 'auto',
                        md: '0',
                      }}>
                      {['solid', 'outline', 'subtle'].map(key => (
                        <VStack key={key} space={4}>
                          <Badge
                            variant={key}
                            alignSelf="center"
                            rightIcon={<MaterialIcons name="mic" size={20} />}>
                            DEFAULT
                          </Badge>
                          <Badge
                            colorScheme="success"
                            alignSelf="center"
                            _text={{bg: 'amber.400'}}
                            variant={key}>
                            SUCCESS
                          </Badge>
                          <Badge
                            leftIcon={<MaterialIcons name="mic" size={20} />}
                            colorScheme="error"
                            alignSelf="center"
                            _icon={{
                              as: {MaterialIcons},
                              size: 100,
                              color: 'amber.900',
                            }}
                            variant={key}>
                            ERROR
                          </Badge>
                          <Badge
                            colorScheme="info"
                            alignSelf="center"
                            variant={key}>
                            INFO
                          </Badge>
                          <Badge
                            colorScheme="warning"
                            alignSelf="center"
                            variant={key}>
                            WARNING
                          </Badge>
                        </VStack>
                      ))}
                    </HStack>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Composition">
            <TestCase itShould="Composition" tags={['dev']}>
              <View style={styles.section}>
                <Text>Composition</Text>
                <View style={styles.subSection}>
                  <Center flex={1} px="3">
                    <Example />
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
