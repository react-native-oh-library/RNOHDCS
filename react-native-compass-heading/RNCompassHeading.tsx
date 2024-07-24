import * as React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, ScrollView} from 'react-native';
import CompassHeading from 'react-native-compass-heading';
import {TestCase, TestSuite, Tester} from '@rnoh/testerino';

export function RNCompassHeading() {
  const [heading, setHeading] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  interface Data{
    heading:number,
    accuracy:number
  }

  useEffect(() => {
    const degree_update_rate = 3;
    CompassHeading.start(degree_update_rate, (data:Data )=> {
      setHeading(data.heading);
      setAccuracy(data.accuracy);
    });
    return () => {
      CompassHeading.stop();
    };
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          flex: 1,
        }}>
        <Tester>
          <TestSuite name="CompassHeading">
            <TestCase
              tags={['C_API']}
              itShould="start()(手机转动实现start()接口)">
              <View style={styles.container}>
                <Text>{'heading: ' + heading}</Text>
                <Text>{'headings: ' + accuracy}</Text>
              </View>
            </TestCase>
            <TestCase tags={['C_API']} itShould="stop()(点击按钮调stop()接口)">
              <View style={styles.container}>
                <Text>{'heading: ' + heading}</Text>
                <Text>{'headings: ' + accuracy}</Text>
                <Button
                  title="点击停止"
                  onPress={() => {
                    CompassHeading.stop();
                  }}
                />
              </View>
            </TestCase>
          </TestSuite>
        </Tester>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
