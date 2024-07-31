import { View, StyleSheet, Text, ScrollView } from 'react-native';
import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import { Dialog, DialogDefaultActions } from 'react-native-material-ui';
import Container from './Container';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"

const DialogDemo = () => {
  const [dialog,setDialog] = useState('')
  return (
    <Tester>
      <ScrollView style={{marginBottom:100}}>

      
      <TestSuite name='Dialog'>
        <TestCase itShould='props:actions,onActionPress,options,style'>
          <View style={styles.container}>
          <Text>{dialog}</Text>
            <Dialog style={{container:{marginLeft:15,marginTop:50}}}>
              <Dialog.Title><Text>Hello world</Text></Dialog.Title>
              <Dialog.Content>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </Text>
              </Dialog.Content>
              <Dialog.Actions>
                <DialogDefaultActions
                  actions={['Dismiss', 'Keep']}
                  options={{ Keep: { disabled: true } }}
                  onActionPress={() => {setDialog('diglog') }}
                />
              </Dialog.Actions>
            </Dialog>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Dialog'>
        <TestCase itShould='props:actions,onActionPress,options,style'>
          <View style={styles.container}>
          <Text>{dialog}</Text>
            <Dialog style={{container:{marginLeft:15,marginTop:50}}}>
              <Dialog.Title><Text>Hello world</Text></Dialog.Title>
              <Dialog.Content>
                <Text>
                   DiglogDiglogDiglogDiglogDiglogDiglog
                </Text>
              </Dialog.Content>
              <Dialog.Actions>
                <DialogDefaultActions
                  actions={['ok', 'cancel']}
                  options={{ cancel: { disabled: true } }}
                  onActionPress={() => {setDialog('diglog') }}
                />
              </Dialog.Actions>
            </Dialog>
          </View>
        </TestCase>
      </TestSuite>
      </ScrollView>
    </Tester>
  )
}
const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
    width: '100%',
    height: 500,
    marginTop: 20,
  },
});
export default DialogDemo