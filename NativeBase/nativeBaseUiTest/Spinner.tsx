import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Spinner, HStack, Heading, useToast} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export function SpinnerTest() {
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
                  <HStack space={2} justifyContent="center">
                    <Spinner accessibilityLabel="Loading posts" />
                    <Heading color="primary.500" fontSize="md">
                      Loading
                    </Heading>
                  </HStack>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="颜色">
            <TestCase itShould="color" tags={['dev']}>
              <View style={styles.section}>
                <Text>位置</Text>
                <View style={styles.subSection}>
                  <HStack space={8} justifyContent="center">
                    <Spinner color="emerald.500" />
                    <Spinner color="warning.500" />
                    <Spinner color="indigo.500" />
                    <Spinner color="cyan.500" />
                  </HStack>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="大小">
            <TestCase itShould="Sizes" tags={['dev']}>
              <View style={styles.section}>
                <Text>大小</Text>
                <View style={styles.subSection}>
                  <HStack space={8} justifyContent="center" alignItems="center">
                    <Spinner size="sm" />
                    <Spinner size="lg" />
                  </HStack>
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
