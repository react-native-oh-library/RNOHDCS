import { View, StyleSheet, ScrollView, Text,} from 'react-native';
import React from 'react';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import {humanDense} from 'react-native-typography';

export function HumanDenseExample() {
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="react-native-typography humanDense">
          {Object.entries(humanDense).map((data: any) => {
            const itemStyle = StyleSheet.create(data[1]);
            return ( !data[0].includes('Object') &&
              <TestCase itShould={JSON.stringify(itemStyle)}>
                <View style={{backgroundColor:data[0].includes('White') ?'black':'white' }}>
                  <Text style={itemStyle}> {data[0]}</Text>
                </View>
              </TestCase>
            );
          })}
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}