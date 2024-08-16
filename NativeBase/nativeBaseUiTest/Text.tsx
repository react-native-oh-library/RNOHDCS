import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export function TextTest() {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="size">
            <TestCase itShould="Svg" tags={['dev']}>
              <View style={styles.section}>
                <Text>Text</Text>
                <View style={styles.subSection}>
                  <Text fontSize="xs">xs</Text>
                  <Text fontSize="sm">sm</Text>
                  <Text fontSize="md">md</Text>
                  <Text fontSize="lg">lg</Text>
                  <Text fontSize="xl">xl</Text>
                  <Text fontSize="2xl">2xl</Text>
                  <Text fontSize="3xl">3xl</Text>
                  <Text fontSize="4xl">4xl</Text>
                  <Text fontSize="5xl">5xl</Text>
                  <Text fontSize="6xl">6xl</Text>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="size">
            <TestCase itShould="Svg" tags={['dev']}>
              <View style={styles.section}>
                <Text>Text</Text>
                <View style={styles.subSection}>
                  <Text isTruncated maxW="300" w="80%">
                    NativeBase gives you a contrasting color based on your
                    theme. You can also customise it using the
                    useAccessibleColors hook.
                  </Text>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="size">
            <TestCase itShould="Svg" tags={['dev']}>
              <View style={styles.section}>
                <Text>Text</Text>
                <View style={styles.subSection}>
                  <Text italic>
                    <Text bold>Taj Mahal</Text> is in Agra.
                  </Text>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="size">
            <TestCase itShould="Svg" tags={['dev']}>
              <View style={styles.section}>
                <Text>Text</Text>
                <View style={styles.subSection}>
                  <Text bold>Bold</Text>
                  <Text italic>Italic</Text>
                  <Text underline>Underline</Text>
                  <Text
                    highlight
                    _dark={{
                      color: 'coolgray.800',
                    }}>
                    Highlighted
                  </Text>
                  <Text>
                    H<Text sub>2</Text>O
                  </Text>
                  <Text underline>Underline</Text>
                  <Text strikeThrough>StrikeThrough</Text>
                  <Text bold italic underline>
                    Bold, Italic & Underline
                  </Text>
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
