import React,{useState,useRef} from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Button} from 'react-native';
import { BaseDialog,BaseComponent } from 'react-native-pickers';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {tester_change, tester_back_string} from './utilCompant';
import BaseDialog_ from './util/BaseDialog_';

export class BaseDialogExample extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      removeSubviews: true,
      coverClickable: true,
      showAnimationType: 'spring',
      onCoverPress:'',
    }
  };

  render(){
    return <>
    <Tester>
    <ScrollView>
      <TestSuite name='BaseDialog'>
      { tester_change("是否回收前景控件 removeSubviews true",'removeSubviews true',()=>{ this.setState({...this.state,removeSubviews:true});this.BaseDialog.show() })}
      { tester_change("是否回收前景控件 removeSubviews false",'removeSubviews false',()=>{ this.setState({...this.state,removeSubviews:false});this.BaseDialog.show() })}
      { tester_change("背景点击隐藏 coverClickable true",'coverClickable true',()=>{ this.setState({...this.state,coverClickable:true});this.BaseDialog.show() })}
      { tester_change("背景点击隐藏 coverClickable false",'coverClickable false',()=>{ this.setState({...this.state,coverClickable:false});this.BaseDialog.show() })}
      { tester_change("入场动画方式 showAnimationType spring",'showAnimationType spring',()=>{ this.setState({...this.state,showAnimationType:'spring'});this.BaseDialog.show() })}
      { tester_change("入场动画方式 showAnimationType timing",'showAnimationType timing',()=>{ this.setState({...this.state,showAnimationType:'timing'});this.BaseDialog.show() })}
      
      {tester_back_string("onCoverPress",this.state.onCoverPress)}

      </TestSuite>
    </ScrollView>
    </Tester>

      <BaseDialog_  
        removeSubviews= {this.state.removeSubviews}
        coverClickable={this.state.coverClickable}
        showAnimationType= {this.state.showAnimationType}
        onCoverPress={() => { this.setState({...this.state,onCoverPress:'pass'}) }} 
        ref={ref => this.BaseDialog = ref} />
    </>
  };
};