import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Chip, withTheme } from '@rneui/themed';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

type ChipsComponentProps = {};

const Chips: React.FunctionComponent<ChipsComponentProps> = () => {
  return (
    <Tester style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.contentView}>
          <TestSuite name='Chips'>
            <View style={{ alignItems: 'center' }}>
              <TestCase itShould='Solid Chip' tags={['C_API']}>
                <Chip title="Solid Chip" containerStyle={{ marginVertical: 15 }} />
              </TestCase>
              <TestCase itShould='Disabled Chip' tags={['C_API']}>
                <Chip
                  title="Disabled Chip"
                  disabled
                  containerStyle={{ marginVertical: 15 }}
                />
              </TestCase>
              <TestCase itShould='Outlined Chip' tags={['C_API']}>
                <Chip
                  title="Outlined Chip"
                  type="outline"
                  containerStyle={{ marginVertical: 15 }}
                />
              </TestCase>
              <TestCase itShould="Outlined & Disabled" tags={['C_API']}>
                <Chip
                  title="Outlined & Disabled"
                  type="outline"
                  disabled
                  containerStyle={{ marginVertical: 15 }}
                />
              </TestCase>
              <TestCase itShould="Left Icon Chip" tags={['C_API']}>
                <Chip
                  title="Left Icon Chip"
                  icon={{
                    name: 'bluetooth',
                    type: 'font-awesome',
                    size: 20,
                    color: 'white',
                  }}
                  containerStyle={{ marginVertical: 15 }}
                />
              </TestCase>
              <TestCase itShould="Right Icon Chip" tags={['C_API']}>
                <Chip
                  title="Right Icon Chip"
                  icon={{
                    name: 'close',
                    type: 'font-awesome',
                    size: 20,
                    color: 'white',
                  }}
                  iconRight
                  containerStyle={{ marginVertical: 15 }}
                />
              </TestCase>
              <TestCase itShould="Pressable Icon Chip Left" tags={['C_API']}>
                <Chip
                  title="Pressable Icon Chip"
                  icon={{
                    name: 'bluetooth',
                    type: 'font-awesome',
                    size: 20,
                    color: '#6296f9',
                  }}
                  onPress={() => console.log('Icon chip was pressed!')}
                  type="outline"
                  containerStyle={{ marginVertical: 15 }}
                />
              </TestCase>
              <TestCase itShould="Pressable Icon Chip Right" tags={['C_API']}>
                <Chip
                  title="Pressable Icon Chip"
                  icon={{
                    name: 'close',
                    type: 'font-awesome',
                    size: 20,
                    color: '#6296f9',
                  }}
                  onPress={() => console.log('Icon chip was pressed!')}
                  iconRight
                  type="outline"
                  containerStyle={{ marginVertical: 15 }}
                />
              </TestCase>
            </View>
          </TestSuite>
        </View>
      </ScrollView>
    </Tester>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    marginTop: 20,
  },
});

export default withTheme(Chips, '');
