import React from 'react';
import { View, Text } from 'react-native';
import { FAB } from '@rneui/themed';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

export default () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <Tester>
      <TestSuite name='FAB'>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 5,
            flexGrow: 1,
            height: '80%'
          }}
        >
          <TestCase itShould='Small Size' tags={['C_API']}>
            <FAB
              loading
              visible={visible}
              icon={{ name: 'plus', type: 'font-awesome', color: 'white' }}
              size="small"
            />
          </TestCase>
          <TestCase itShould='Large Size' tags={['C_API']}>
            <FAB
              visible={visible}
              icon={{ name: 'heartbeat', type: 'font-awesome', color: 'white' }}
              color="green"
            />
          </TestCase>
          <TestCase itShould='Primary Color' tags={['C_API']}>
            <FAB
              visible={visible}
              title="Navigate"
              icon={{ name: 'map-marker', type: 'font-awesome', color: 'white' }}
              size="small"
            />
          </TestCase>
          <TestCase itShould='Disabled' tags={['C_API']}>
            <FAB
              visible={visible}
              disabled
              title="Extended"
              icon={{
                name: 'map-marker',
                type: 'font-awesome',
                color: 'white',
              }}
            />
          </TestCase>
          <TestCase itShould='Visible' tags={['C_API']}>
            <View style={{height:80}}></View>
            <FAB
              visible={visible}
              onPress={() => setVisible(!visible)}
              placement="right"
              title="Hide"
              icon={{ name: 'remove', type: 'font-awesome', color: 'white' }}
              color="red"
            />
            <FAB
              visible={!visible}
              onPress={() => setVisible(!visible)}
              placement="left"
              title="Show"
              icon={{ name: 'pencil', type: 'font-awesome', color: 'white' }}
              color="green"
            />
          </TestCase>
        </View>
      </TestSuite>
    </Tester>
  );
};
