import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Switch} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export function SwitchTest() {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="开关大小">
            <TestCase itShould="size" tags={['dev']}>
              <View style={styles.section}>
                <Text>开关大小</Text>
                <View style={styles.subSection}>
                  <Switch size="sm" isChecked />
                  <Switch
                    size="md"
                    onToggle={(e) => {
                      console.log(e);
                    }}
                  />
                  <Switch size="lg" />
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="开关主题">
            <TestCase itShould="Color Schemes" tags={['dev']}>
              <View style={styles.section}>
                <Text>开关主题</Text>
                <View style={styles.subSection}>
                  <Switch defaultIsChecked colorScheme="primary" />
                  <Switch defaultIsChecked colorScheme="secondary" />
                  <Switch defaultIsChecked colorScheme="emerald" />
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Track & Thumb Color">
            <TestCase itShould="size" tags={['dev']}>
              <View style={styles.section}>
                <Text>开关颜色</Text>
                <View style={styles.subSection}>
                  <Switch isDisabled />
                  <Switch
                    isHovered
                    offTrackColor="orange.100"
                    onTrackColor="orange.200"
                    onThumbColor="orange.500"
                    offThumbColor="orange.50"
                  />
                  <Switch
                    offTrackColor="indigo.100"
                    onTrackColor="indigo.200"
                    onThumbColor="indigo.500"
                    offThumbColor="indigo.50"
                  />
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
