import { View, StyleSheet, ScrollView, Text,} from 'react-native';
import React from 'react';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import {materialColors} from 'react-native-typography';

export function MaterialColorsExample() {
  return (
    <Tester>
      <ScrollView>
      <TestSuite name="react-native-typography materialColors">
            {Object.entries(materialColors).map((data: any,index) => {
              const itemStyle = StyleSheet.create(data[1]);
              return ( !data[0].includes('Object') &&
                <TestCase key={index} itShould={JSON.stringify(itemStyle)}>
                  <View style={{backgroundColor:data[0].includes('white') ?'black':'white' }}>
                    <Text style={{color:itemStyle}}> {data[0]}</Text>
                  </View>
                </TestCase>
              );
            })}
          </TestSuite>
      </ScrollView>
    </Tester>
  );
}