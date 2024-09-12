import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Chip, withTheme} from '@rneui/themed';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

type ChipsComponentProps = {};

const Chips: React.FunctionComponent<ChipsComponentProps> = () => {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <View style={styles.contentView}>
          <TestSuite name="Chips 属性type的枚举验证">
            <View style={{alignItems: 'center'}}>
              <TestCase itShould="type" tags={['C_API']}>
                <Chip
                  title="outline Chip"
                  type="outline"
                  containerStyle={{marginVertical: 15}}
                  activeOpacity={0.1}
                  onPress={()=>{}}
                />
                <Chip
                  title="Solid Chip"
                  type="solid"
                  containerStyle={{marginVertical: 15}}
                  activeOpacity={0.1}
                  onPress={()=>{}}
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
