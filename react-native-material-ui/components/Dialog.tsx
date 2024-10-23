import { View, StyleSheet, Text, ScrollView } from 'react-native';
import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import { Dialog, DialogDefaultActions } from 'react-native-material-ui';
import Container from './Container';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
import { backgroundColor } from '@shopify/restyle';

const DialogDemo = () => {
  const [dialog,setDialog] = useState('')
  return (
    <Tester>
      <ScrollView style={{marginBottom:100}}>

      
      <TestSuite name='Dialog(对话框：是一个整体，props需要同时设置才生效)'>
        <TestCase itShould='props:涉及到的属性为：actions 显示到dialog按钮的文字 options:给该按钮设置disabled为true使其禁用，onActionPress：点击卡片触发的回调显示文本为dialog'>
          <View style={styles.container}>
          <Text>{dialog}</Text>
            <Dialog >
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
                  onActionPress={() => {setDialog('dialog') }}
                />
              </Dialog.Actions>
            </Dialog>
          </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Dialog style(样式)'>
        <TestCase itShould='props:style marginLeft:15,marginTop:50,backgroundColor:"red"'>
          <View style={styles.container}>
          <Text>{dialog}</Text>
            <Dialog style={{container:{marginLeft:15,marginTop:50,backgroundColor:"red"}}}>
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