import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Divider, Box, Heading, Flex} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export function DividerTest() {
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
                    <Box w="140">
                      <Heading mx="3" alignItems="center" flexDirection="row">
                        Chrome
                      </Heading>
                      <Divider
                        my="2"
                        _light={{
                          bg: 'muted.800',
                        }}
                        _dark={{
                          bg: 'muted.50',
                        }}
                      />
                      <Heading mx="3" alignItems="center" flexDirection="row">
                        Firefox
                      </Heading>
                    </Box>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="Divider Orientation">
            <TestCase itShould="Divider Orientation" tags={['dev']}>
              <View style={styles.section}>
                <Text>Divider Orientation</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <Box w="160">
                      <Heading mx="auto">Shoes</Heading>
                      <Divider
                        my="2"
                        _light={{
                          bg: 'muted.800',
                        }}
                        _dark={{
                          bg: 'muted.50',
                        }}
                      />
                      <Flex
                        mx="3"
                        direction="row"
                        justify="space-evenly"
                        h="60">
                        <Heading py="2">Girls</Heading>
                        <Divider
                          orientation="vertical"
                          mx="3"
                          _light={{
                            bg: 'muted.800',
                          }}
                          _dark={{
                            bg: 'muted.50',
                          }}
                        />
                        <Heading py="2">Boys</Heading>
                      </Flex>
                    </Box>
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
                  <Box alignItems="center">
                    <Flex direction="row" h="58" p="4">
                      <Text>Simple</Text>
                      <Divider
                        bg="emerald.500"
                        thickness="2"
                        mx="2"
                        orientation="vertical"
                      />
                      <Text>Easy</Text>
                      <Divider
                        bg="indigo.500"
                        thickness="5"
                        mx="2"
                        orientation="vertical"
                      />
                      <Text>Beautiful</Text>
                    </Flex>
                  </Box>
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
