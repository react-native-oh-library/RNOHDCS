import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Skeleton, Text } from '@rneui/themed';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

const Avatars = () => {
  return (
    <Tester>
      <TestSuite name='Skeleton'>
        <ScrollView>

          <View style={styles.container}>
            <TestCase itShould='Normal Skeleyon(No Animation)' tags={['C_API']}>
              <View style={styles.rowCenter}>
                <Skeleton circle width={40} />
                <View style={[{ marginLeft: 8, flexGrow: 1 }]}>
                  <Skeleton style={{ marginBottom: 5 }} />
                  <View
                    style={[styles.rowCenter, { justifyContent: 'space-between' }]}
                  >
                    <Skeleton height={8} width={90} />
                    <Skeleton height={8} width={90} />
                  </View>
                </View>
              </View>
            </TestCase>
            <TestCase itShould='Wave (With Linear Gradient)' tags={['C_API']}>
              <View>
                <Skeleton
                  animation="wave"
                  height={200}
                />
              </View>
            </TestCase>
            <TestCase itShould='Pulse Animation' tags={['C_API']}>
              <View>
                <Skeleton height={200} animation="pulse" />
              </View>
            </TestCase>
          </View>
        </ScrollView>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  }
});

export default Avatars;
