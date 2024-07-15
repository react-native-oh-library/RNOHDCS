
import React,{useState,useRef} from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Button} from 'react-native';
import { AlertDialog,BaseComponent } from 'react-native-pickers';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {tester_change, tester_back_string} from './utilCompant';

export class AlertDialogExample extends BaseComponent {
  AlertDialog: any;
  
  constructor(props) {
    super(props);
    this.state = {
      messageText: '测试弹框',
      messageTextColor: '#ff4444',
      messageTextSize: 20,
      negativeText: 'cancel',
      negativeColor: '#66ff66',
      negativeSize: 10,
      positiveText: 'ok',
      positiveColor: '#1000D5',
      positiveSize: 20,
      onPress:'',
    };
  }

  render(){
    return <>
    <Tester>
    <ScrollView>
      <TestSuite name='AlertDialog'>
      { tester_change('弹窗消息文本 messageText 测试弹框','messageText 测试弹框',()=>{ this.setState({...this.state,messageText:'测试弹框'});this.AlertDialog.show() })}
      { tester_change("弹窗消息文本 messageText 测试弹框111",'messageText 测试弹框111',()=>{ this.setState({...this.state,messageText:'测试弹框111'});this.AlertDialog.show() })}
      { tester_change("messageTextColo #ff0044",'messageTextColor #ff0044',()=>{ this.setState({...this.state,messageTextColor:'#ff0044'});this.AlertDialog.show() })}
      { tester_change("messageTextColor #ffff44",'messageTextColor #ffff44',()=>{ this.setState({...this.state,messageTextColor:'#ffff44'});this.AlertDialog.show() })}
      { tester_change("messageTextSize 20",'messageTextSize 20',()=>{ this.setState({...this.state,messageTextSize:20});this.AlertDialog.show() })}
      { tester_change("messageTextSize 10",'messageTextSize 10',()=>{ this.setState({...this.state,messageTextSize:10});this.AlertDialog.show() })}
      { tester_change("negativeText cancel",'negativeText cancel',()=>{ this.setState({...this.state,negativeText:'cancel'});this.AlertDialog.show() })}
      { tester_change("negativeText 取消",'negativeText 取消',()=>{ this.setState({...this.state,negativeText:'取消'});this.AlertDialog.show() })}
      { tester_change("negativeColor #660066",'negativeColor #660066',()=>{ this.setState({...this.state,negativeColor:'#660066'});this.AlertDialog.show() })}
      { tester_change("negativeColor #66ff66",'negativeColor #66ff66',()=>{ this.setState({...this.state,negativeColor:'#66ff66'});this.AlertDialog.show() })}
      { tester_change("negativeSize 10",'negativeSize 10',()=>{ this.setState({...this.state,negativeSize:10});this.AlertDialog.show() })}
      { tester_change("negativeSize 5",'negativeSize 5',()=>{ this.setState({...this.state,negativeSize:5});this.AlertDialog.show() })}
      { tester_change("positiveText ok",'positiveText ok',()=>{ this.setState({...this.state,positiveText:'ok'});this.AlertDialog.show() })}
      { tester_change("positiveText √",'positiveText √',()=>{ this.setState({...this.state,positiveText:'√'});this.AlertDialog.show() })}
      { tester_change("positiveColor #10ffD5",'positiveColor #10ffD5',()=>{ this.setState({...this.state,positiveColor:'#10ffD5'});this.AlertDialog.show() })}
      { tester_change("positiveColor '#1000D5'",'positiveColor：#1000D5',()=>{ this.setState({...this.state,positiveColor:'#1000D5'});this.AlertDialog.show() })}
      { tester_change("positiveSize 20",'positiveSize 20',()=>{ this.setState({...this.state,positiveSize:20});this.AlertDialog.show() })}
      { tester_change("positiveSize 10",'positiveSize 10',()=>{ this.setState({...this.state,positiveSize:10});this.AlertDialog.show() })}
      
      {tester_back_string("onPickerConfirm",this.state.onPress)}
      </TestSuite>
      </ScrollView>
    </Tester>

      <AlertDialog
        messageText= {this.state.messageText}
        messageTextColor= {this.state.messageTextColor}
        messageTextSize= {this.state.messageTextSize}
        negativeText= {this.state.negativeText}
        negativeColor= {this.state.negativeColor}
        negativeSize= {this.state.negativeSize}
        positiveText= {this.state.positiveText}
        positiveColor= {this.state.positiveColor}
        positiveSize= {this.state.positiveSize}
        onPress={(isOK) => { this.setState({...this.state,onPress:'pass 返回值:'+isOK}) }} 
        ref={ref => this.AlertDialog = ref} />
        
    </>
  };
};