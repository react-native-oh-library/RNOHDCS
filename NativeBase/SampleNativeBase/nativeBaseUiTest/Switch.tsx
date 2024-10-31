import {useState, useRef} from 'react';
import {View, StyleSheet, ScrollView, Text, Alert} from 'react-native';
import {Switch, VStack, FormControl} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

const SwitchTest = () => {
  const Switchref = useRef(null);
  const [isChecked, setIsChecked] = useState(false);
  const handleSwitchChange = (value: any) => {
    Alert.alert(`Switch with name 'mySwitch' is now ${value}`);
  };

  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="测试name">
            <TestCase itShould="测试name-可以配合表单取值" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试name-可以配合表单取值</Text>
                <View style={styles.subSection}>
                  <Switch name="SwitchId" onValueChange={handleSwitchChange} />
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试size">
            <TestCase itShould="测试size" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试size</Text>
                <View style={styles.subSection}>
                  <Switch size="sm" isChecked />
                  <Switch
                    size="md"
                    onToggle={e => {
                      console.log(e);
                    }}
                  />
                  <Switch size="lg" />
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试isChecked">
            <TestCase itShould=" 测试isChecked" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试isChecked</Text>
                <View style={styles.subSection}>
                  <Switch isChecked={false} />
                  <Switch isChecked={true} />
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试defaultIsChecked">
            <TestCase itShould=" 测试defaultIsChecked" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试defaultIsChecked-true</Text>
                <View style={styles.subSection}>
                  <VStack space={4} alignItems="center">
                    <Switch defaultIsChecked colorScheme="primary" />
                  </VStack>
                </View>
              </View>
              <View style={styles.section}>
                <Text>测试defaultIsChecked-false</Text>
                <View style={styles.subSection}>
                  <VStack space={4} alignItems="center">
                    <Switch defaultIsChecked={false} colorScheme="primary" />
                  </VStack>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试isDisabled">
            <TestCase itShould=" 测试isDisabled" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试isDisabled</Text>
                <View style={styles.subSection}>
                  <Switch defaultIsChecked colorScheme="primary" isDisabled />
                  <Switch defaultIsChecked colorScheme="secondary" />
                  <Switch defaultIsChecked colorScheme="emerald" />
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试colorScheme">
            <TestCase itShould=" 测试colorScheme" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试colorScheme</Text>
                <View style={styles.subSection}>
                  <Switch defaultIsChecked colorScheme="primary" />
                  <Switch defaultIsChecked colorScheme="secondary" />
                  <Switch defaultIsChecked colorScheme="emerald" />
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试isInvalid">
            <TestCase itShould=" 测试isInvalid" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试isInvalid</Text>
                <View style={styles.subSection}>
                  <Switch
                    isInvalid
                    onToggle={e => {
                      console.log(e);
                    }}
                  />
                  <Switch />
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试onToggle">
            <TestCase itShould="测试onToggle" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试onToggle</Text>
                <View style={styles.subSection}>
                  <Switch
                    isChecked={isChecked}
                    onToggle={e => {
                      Alert.alert('执行了onToggle')
                      setIsChecked(e);
                    }}
                  />
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试offTrackColor">
            <TestCase itShould="测试offTrackColor" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试offTrackColor</Text>
                <View style={styles.subSection}>
                  <Switch offTrackColor="orange.100" />
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="测试onTrackColor">
            <TestCase itShould="测试onTrackColor" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试onTrackColor</Text>
                <View style={styles.subSection}>
                  <Switch onTrackColor="orange.200" />
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试onThumbColor">
            <TestCase itShould="测试onThumbColor" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试onThumbColor</Text>
                <View style={styles.subSection}>
                  <Switch onThumbColor="orange.500" />
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试offThumbColor">
            <TestCase itShould="测试offThumbColor" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试offThumbColor</Text>
                <View style={styles.subSection}>
                  <Switch offThumbColor="orange.50" />
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

export default SwitchTest;
