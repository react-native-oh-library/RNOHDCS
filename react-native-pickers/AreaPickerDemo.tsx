import React,{useState,useRef} from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Button} from 'react-native';
import { AreaPicker,BaseComponent } from 'react-native-pickers';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {tester_change, tester_back_string} from './utilCompant';

import AreaJson from './util/Area.json';
import AreaJson1 from './util/Area1.json';

export class AreaPickerExample extends BaseComponent {
  
  constructor(props: any) {
    super(props);
    this.state = {
      confirmText:"确认",
      confirmTextSize:14,
      confirmTextColor:'#333333',
      cancelText:'取消',
      cancelTextSize:14,
      cancelTextColor:'#333333',
      itemHeight:60,
      itemTextColor:0x333333ff,
      itemSelectedColor:0x1097D5ff,
      selectedValue: ['香港', '香港', '中西區'],
      areaJson:AreaJson,
      onPickerCancel:'',
      onPickerConfirm:'',
    }
  
  }

  render (){
    return <>
    <Tester>
      <ScrollView>
      <TestSuite name=''>
      { tester_change('确认文字 confirmText 确认','confirmText 确认',()=>{ this.setState({...this.state,confirmText:"确认"});this.AreaPicker.show() })}
      { tester_change('确认文字 confirmText ok','confirmText ok',()=>{ this.setState({...this.state,confirmText:"ok"});this.AreaPicker.show() })}
      { tester_change('确认文字大小 confirmTextSize 14','confirmTextSize 14',()=>{ this.setState({...this.state,confirmTextSize:14});this.AreaPicker.show() })}
      { tester_change('确认文字大小 confirmTextSize 5','confirmTextSize 5',()=>{ this.setState({...this.state,confirmTextSize:5});this.AreaPicker.show() })}
      { tester_change('确认文字颜色 confirmTextColor #333333','confirmTextColor #333333',()=>{ this.setState({...this.state,confirmTextColor:'#333333'});this.AreaPicker.show() })}
      { tester_change('确认文字颜色 confirmTextColor #3ff333','confirmTextColor #3ff333',()=>{ this.setState({...this.state,confirmTextColor:'#3ff333'});this.AreaPicker.show() })}
      { tester_change('取消文字 cancelText 取消','cancelText 取消',()=>{ this.setState({...this.state,cancelText:'取消'});this.AreaPicker.show() })}
      { tester_change('取消文字 cancelText cancel','cancelText cancel',()=>{ this.setState({...this.state,cancelText:'cancel'});this.AreaPicker.show() })}
      { tester_change('取消文字大小 cancelTextSize 14','cancelTextSize 14',()=>{ this.setState({...this.state,cancelTextSize:14});this.AreaPicker.show() })}
      { tester_change('取消文字大小 cancelTextSize 6','cancelTextSize 6',()=>{ this.setState({...this.state,cancelTextSize:6});this.AreaPicker.show() })}
      { tester_change('取消文字颜色 cancelTextColor #333333','cancelTextColor #333333',()=>{ this.setState({...this.state,cancelTextColor:'#333333'});this.AreaPicker.show() })}
      { tester_change('取消文字颜色 cancelTextColor #33ff33','cancelTextColor #33ff33',()=>{ this.setState({...this.state,cancelTextColor:'#33ff33'});this.AreaPicker.show() })}
      { tester_change('选项高度 itemHeight 30','itemHeight 30',()=>{ this.setState({...this.state,itemHeight:30});this.AreaPicker.show() })}
      { tester_change('选项高度 itemHeight 90','itemHeight 90',()=>{ this.setState({...this.state,itemHeight:90});this.AreaPicker.show() })}
      { tester_change('选项正常颜色（滑动后才会更新） itemTextColor 0x333333ff','itemTextColor 0x333333ff',()=>{ this.setState({...this.state,itemTextColor:0x333333ff});this.AreaPicker.show() })}
      { tester_change('选项正常颜色（滑动后才会更新） itemTextColor 0x33fff3ff','itemTextColor 0x33fff3ff',()=>{ this.setState({...this.state,itemTextColor:0x33fff3ff});this.AreaPicker.show() })}
      { tester_change('选项被选颜色（滑动后才会更新） itemSelectedColor 0x1097D5ff','itemSelectedColor 0x1097D5ff',()=>{ this.setState({...this.state,itemSelectedColor:0x1097D5ff});this.AreaPicker.show() })}
      { tester_change('选项被选颜色（滑动后才会更新） itemSelectedColor 0x1000D5ff','itemSelectedColor 0x1000D5ff',()=>{ this.setState({...this.state,itemSelectedColor:0x1000D5ff});this.AreaPicker.show() })}  
      { tester_change('初始选项 selectedValue ["香港", "香港", "北區"]','selectedValue ["香港", "香港", "北區"]',()=>{ this.setState({...this.state,selectedValue:['香港', '香港', '北區']});this.AreaPicker.show() })}
      { tester_change('初始选项 selectedValue ["香港", "香港", "大埔區"]','selectedValue ["香港", "香港", "大埔區"]',()=>{ this.setState({...this.state,selectedValue:['香港', '香港', '大埔區']});this.AreaPicker.show() })}
      { tester_change("areaJson（滑动后才会更新）",'areaJson AreaJson',()=>{ this.setState({...this.state,areaJson:AreaJson});this.AreaPicker.show() })}
      { tester_change("areaJson（滑动后才会更新）",'areaJson AreaJson1',()=>{ this.setState({...this.state,areaJson:AreaJson1});this.AreaPicker.show() })}
      
      {tester_back_string("onPickerConfirm",this.state.onPickerConfirm)}
      {tester_back_string("onPickerCancel",this.state.onPickerCancel)}

      </TestSuite>
      </ScrollView>
    </Tester>

      <AreaPicker
        areaJson= {this.state.areaJson}
        
        confirmText= {this.state.confirmText}
        confirmTextSize= {this.state.confirmTextSize}
        confirmTextColor= {this.state.confirmTextColor}

        cancelText= {this.state.cancelText}
        cancelTextSize= {this.state.cancelTextSize}
        cancelTextColor= {this.state.cancelTextColor}
        itemTextColor= {this.state.itemTextColor}
        itemSelectedColor= {this.state.itemSelectedColor}
        selectedValue= {this.state.selectedValue}
        itemHeight = {this.state.itemHeight}

        onPickerCancel={() => { this.setState({...this.state,onPickerCancel:'pass'}) }}
        onPickerConfirm={(value:any) => { this.setState({...this.state,onPickerConfirm:'pass'+value}) }}
        ref={ref => this.AreaPicker = ref} />
        
    </>
  };
};