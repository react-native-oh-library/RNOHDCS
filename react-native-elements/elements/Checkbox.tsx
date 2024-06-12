import React, { useState } from 'react';
import { Switch as S, View } from 'react-native';
import { CheckBox, Icon, Switch, Text } from '@rneui/themed';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

type CheckboxComponentProps = {};

const CheckboxComponent: React.FunctionComponent<
  CheckboxComponentProps
> = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);

  return (
    <Tester>
      <TestSuite name='CheckBox'>
        <TestCase itShould='Default CheckBox' tags={['C_API']}>
          <CheckBox
            center
            title="Click Here"
            checked={check1}
            onPress={() => setCheck1(!check1)}
          />
        </TestCase>
        <TestCase itShould='Icon CheckBox' tags={['C_API']}>
          <CheckBox
            center
            title="Click Here"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={check2}
            onPress={() => setCheck2(!check2)}
          />
        </TestCase>
        <TestCase itShould='Dou Icon CheckBox' tags={['C_API']}>
          <CheckBox
            center
            title={`Click Here to ${check3 ? 'Remove' : 'Add'} This Item`}
            iconRight
            iconType="font-awesome"
            checkedIcon="remove"
            uncheckedIcon="plus"
            checkedColor="red"
            checked={check3}
            onPress={() => setCheck3(!check3)}
          />
        </TestCase>
        <TestCase itShould='Color Icon CheckBox' tags={['C_API']}>
          <CheckBox
            center
            checkedIcon={
              <Icon
                name="dot-circle-o"
                type="font-awesome"
                color="green"
                size={25}
                iconStyle={{ marginRight: 10 }}
              />
            }
            uncheckedIcon={
              <Icon
                name="circle-o"
                type="font-awesome"
                color="grey"
                size={25}
                iconStyle={{ marginRight: 10 }}
              />
            }
            checked={check4}
            onPress={() => setCheck4(!check4)}
          />
        </TestCase>
      </TestSuite>
      <TestSuite name='Switch'>
        <View style={{ alignItems: 'center' }}>
          <TestCase itShould='Switch' tags={['C_API']}>
            <Switch value={check5} onValueChange={setCheck5} />
            <Switch disabled value={check5} onValueChange={setCheck5} />
            <S value={check5} onValueChange={setCheck5} />
          </TestCase>
        </View>
      </TestSuite>
    </Tester>
  );
};

export default CheckboxComponent;
