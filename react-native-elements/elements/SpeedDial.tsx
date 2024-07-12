import React from 'react';
import { SpeedDial } from '@rneui/themed';
import { View } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

export default () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Tester>
      <TestSuite name='Speed Dial'>
        <TestCase itShould='Rounded Buttons' tags={['C_API']}>
          <View style={{ height: '90%', width: '100%' }}>
            <SpeedDial
              isOpen={open}
              labelPressable
              placement="right"
              overlayColor="transparent"
              icon={{ name: 'pencil', type: 'font-awesome', color: '#fff', style: { marginLeft: 5, marginBottom: 7 } }}
              openIcon={{ name: 'remove', type: 'font-awesome', color: '#fff', style: { marginLeft: 5, marginBottom: 7 } }}
              onOpen={() => setOpen(!open)}
              onClose={() => setOpen(!open)}
            >
              <SpeedDial.Action
                icon={{ name: 'plus', type: 'font-awesome', color: '#fff', style: { marginLeft: 5, marginBottom: 7 } }}
                title="Add"
                onPress={() => console.log('Added Event')}
              />
              <SpeedDial.Action
                icon={{ name: 'minus', type: 'font-awesome', color: '#fff', style: { marginLeft: 5, marginBottom: 7 } }}
                title="Delete"
                onPress={() => console.log('Delete Event')}
              />
            </SpeedDial>
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};