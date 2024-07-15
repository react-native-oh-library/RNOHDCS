import React,{useState,useRef} from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Button} from 'react-native';
import { InputDialog,BaseComponent } from 'react-native-pickers';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {tester_change, tester_back_string} from './utilCompant';

export class InputDialogExample extends BaseComponent {
  
  constructor(props) {
    super(props);
    this.state = {
      title: '我要举报',
      titleSize: 16,
      titleColor: '#333333',
      cancelText: '返回',
      cancelSize: 14,
      cancelColor: '#333333',
      btnText: '提交',
      btnTextSize: 12,
      btnTextColor: '#ffffff',
      btnBgColor: '#1097D5',
      placeholder: '请尽量说明问题，我们将尽快处理...',
      onSubmit:'',
      onSubmit: null
    };
  }

  render(){
   return <>
    <Tester>
    <ScrollView>
      <TestSuite name=''>
      { tester_change("title 标题1",'title 标题1',()=>{ this.setState({...this.state,title:'标题1'});this.InputDialog.show() })}
      { tester_change("title 标题2",'title 标题2',()=>{ this.setState({...this.state,title:'标题2'});this.InputDialog.show() })}
      { tester_change("titleSize 32",'titleSize 32',()=>{ this.setState({...this.state,titleSize:32});this.InputDialog.show() })}
      { tester_change("titleSize 16",'titleSize 16',()=>{ this.setState({...this.state,titleSize:16});this.InputDialog.show() })}
      { tester_change("titleColor #333333",'titleColor #333333',()=>{ this.setState({...this.state,titleColor:'#333333'});this.InputDialog.show() })}
      { tester_change("titleColor #33ff33",'titleColor #33ff33',()=>{ this.setState({...this.state,titleColor:'#33ff33'});this.InputDialog.show() })}
      { tester_change("cancelText 返回",'cancelText 返回',()=>{ this.setState({...this.state,cancelText:'返回'});this.InputDialog.show() })}
      { tester_change("cancelText 返回11",'cancelText 返回11',()=>{ this.setState({...this.state,cancelText:'返回11'});this.InputDialog.show() })}
      { tester_change("cancelSize12",'cancelSize12',()=>{ this.setState({...this.state,cancelSize:12});this.InputDialog.show() })}
      { tester_change("cancelSize24",'cancelSize24',()=>{ this.setState({...this.state,cancelSize:24});this.InputDialog.show() })}
      { tester_change("btnTextColor #f00fff",'btnTextColor #f00fff',()=>{ this.setState({...this.state,btnTextColor:'#f00fff'});this.InputDialog.show() })}
      { tester_change("btnTextColor #fff00f",'btnTextColor #fff00f',()=>{ this.setState({...this.state,btnTextColor:'#fff00f'});this.InputDialog.show() })}
      { tester_change("btnBgColor #1097D5",'btnBgColor #1097D5',()=>{ this.setState({...this.state,btnBgColor:'#1097D5'});this.InputDialog.show() })}
      { tester_change("btnBgColor #1000D5",'btnBgColor #1000D5',()=>{ this.setState({...this.state,btnBgColor:'#1000D5'});this.InputDialog.show() })}
      { tester_change("placeholder",'placeholder placeholder',()=>{ this.setState({...this.state,placeholder:'placeholder'});this.InputDialog.show() })}
      { tester_change("placeholder",'placeholder placeholder-------',()=>{ this.setState({...this.state,placeholder:'placeholder-------'});this.InputDialog.show() })}
      
      {tester_back_string("onSubmit",this.state.onSubmit)}


      </TestSuite>
    </ScrollView>
    </Tester>

      <InputDialog
        title= {this.state.title}
        titleSize={this.state.titleSize}
        titleColor= {this.state.titleColor}
        cancelText= {this.state.cancelText}
        cancelSize= {this.state.cancelSize}
        cancelColor= {this.state.cancelColor}
        btnText= {this.state.btnText}
        btnTextColor= {this.state.btnTextColor}
        btnTextSize= {this.state.btnTextSize}
        btnBgColor= {this.state.btnBgColor}
        placeholder= {this.state.placeholder}

        onSubmit={(data) => { this.setState({...this.state,onSubmit:'pass input: '+data}) }} 
        ref={ref => this.InputDialog = ref} />
        
    </>
  };
};