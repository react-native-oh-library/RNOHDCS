import React from 'react';
import { ScrollView, View,Button} from 'react-native';
import { ToastComponent,BaseComponent } from 'react-native-pickers';
import {Tester, TestSuite} from '@rnoh/testerino';
import {tester_change} from './utilCompant';

export class ToastComponentExample extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      duration: 1000,
      textColor: '#ffffff',
      fontSize: 14,
      lineHeight: 20,
      paddingH: 10,
      paddingV: 30,
      borderRadius: 5,
      backgroundColor: 0x00000099,
    };
  }

  render(){
    return <View >
    <Tester>
    <ScrollView>
      <TestSuite name='ToastComponent'> 
      { tester_change("text 测试字符1111",'text 测试字符1111',()=>{ this.setState({...this.state,duration:3000});this.ToastComponent.show('测试字符1111') })}
      { tester_change("text 测试字符2222",'text 测试字符2222',()=>{ this.setState({...this.state,duration:3000});this.ToastComponent.show('测试字符2222') })}
      { tester_change("duration 6000",'duration 6000',()=>{ this.setState({...this.state,duration:3000});this.ToastComponent.show('测试字符1111') })}
      { tester_change("duration 1000",'duration 1000',()=>{ this.setState({...this.state,duration:1000});this.ToastComponent.show('测试字符1111') })}
      { tester_change("textColor #ff00ff",'textColor #ff00ff',()=>{ this.setState({...this.state,textColor:'#ff00ff'});this.ToastComponent.show('测试字符1111') })}
      { tester_change("textColor #ffffff",'textColor #ffffff',()=>{ this.setState({...this.state,textColor:'#ffffff'});this.ToastComponent.show('测试字符1111') })}
      { tester_change("fontSize 28",'fontSize 28',()=>{ this.setState({...this.state,fontSize:28});this.ToastComponent.show('测试字符1111') })}
      { tester_change("fontSize 14",'fontSize 14',()=>{ this.setState({...this.state,fontSize:14});this.ToastComponent.show('测试字符1111') })}
      { tester_change("lineHeight 40",'lineHeight 40',()=>{ this.setState({...this.state,lineHeight:40});this.ToastComponent.show('测试字符1111') })}
      { tester_change("lineHeight 20",'lineHeight 20',()=>{ this.setState({...this.state,lineHeight:20});this.ToastComponent.show('测试字符1111') })}
      { tester_change("paddingH 10",'paddingH 10',()=>{ this.setState({...this.state,paddingH:10});this.ToastComponent.show('测试字符1111') })}
      { tester_change("paddingH 20",'paddingH 20',()=>{ this.setState({...this.state,paddingH:20});this.ToastComponent.show('测试字符1111') })}
      { tester_change("paddingV 30",'paddingV 30',()=>{ this.setState({...this.state,paddingV:30});this.ToastComponent.show('测试字符1111') })}
      { tester_change("paddingV 20",'paddingV 20',()=>{ this.setState({...this.state,paddingV:20});this.ToastComponent.show('测试字符1111') })}
      { tester_change("borderRadius 5",'borderRadius 5',()=>{ this.setState({...this.state,borderRadius:5});this.ToastComponent.show('测试字符1111') })}
      { tester_change("borderRadius 10",'borderRadius 10',()=>{ this.setState({...this.state,borderRadius:10});this.ToastComponent.show('测试字符1111') })}
      { tester_change("backgroundColor 0x00000099",'backgroundColor 0x00000099',()=>{ this.setState({...this.state,backgroundColor:0x00000099});this.ToastComponent.show('测试字符1111') })}
      { tester_change("backgroundColor 0x33fff3ff",'backgroundColor 0x33fff3ff',()=>{ this.setState({...this.state,backgroundColor:0x33fff3ff});this.ToastComponent.show('测试字符1111') })}
      </TestSuite>
      <View style={{height:100}}></View>
    </ScrollView>
    </Tester>
    
    <ToastComponent
        duration= {this.state.duration}
        textColor={this.state.textColor}
        fontSize= {this.state.fontSize}
        lineHeight= {this.state.lineHeight}
        paddingH= {this.state.paddingH}
        paddingV= {this.state.paddingV}
        borderRadius= {this.state.borderRadius}
        backgroundColor= {this.state.backgroundColor}
        ref={ref => this.ToastComponent = ref} />
    </View>
  };
};