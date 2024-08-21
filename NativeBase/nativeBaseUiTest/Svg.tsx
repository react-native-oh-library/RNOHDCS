import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import Svg, {Path} from 'react-native-svg';

export function SvgTest() {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="Svg">
            <TestCase itShould="Svg" tags={['dev']}>
              <View style={styles.section}>
                <Text>Svg</Text>
                <View style={styles.subSection}>
                  <Svg width="100" height="100">
                    <Path d="M90 0 L0 180 L180 180 Z" fill="red" />
                  </Svg>
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
