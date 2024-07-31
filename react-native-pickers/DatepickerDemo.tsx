import React,{useState,useRef} from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Button} from 'react-native';
import { DatePicker,BaseComponent } from 'react-native-pickers';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import { tester_change,tester_back_string} from './utilCompant';

export class DatePickerExample extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      unit: ['年', '月', '日'],
      HH:false,
      mm:false,
      ss:false,
      startYear:1990,
      endYear:2027,
      itemHeight:60,
      itemTextColor:0x333333ff,
      itemSelectedColor:0x1097D5ff,
      confirmText:"确认",
      confirmTextSize:5,
      confirmTextColor:'#333333',
      cancelText:'取消',
      cancelTextSize:14,
      cancelTextColor:'#333333',
      onPickerConfirm:'',
      onPickerCancel:'',
      selectedValue:[new Date().getFullYear() + '年', new Date().getMonth() + 1 + '月', new Date().getDate() + '日'],
    };
  }

  render(){
    return <>
    <Tester>
    <ScrollView>
      <TestSuite name='DatePicker'>
        
      { tester_change('时间单位 unit:["年", "月", "日"]','["年", "月", "日"]',()=>{ this.setState({...this.state,unit:['年', '月', '日']});this.dataPicker.show() })}
      { tester_change("时间单位 unit:['year', 'month', 'day']",'["year", "month", "day"]',()=>{ this.setState({...this.state,unit:['year', 'month', 'day']});this.dataPicker.show() })}


      { tester_change('小时选项显示 HH:true','HH:true',()=>{ this.setState({...this.state,HH:true});this.dataPicker.show() })}
      { tester_change('小时选项显示 HH:false','HH:false',()=>{ this.setState({...this.state,HH:false});this.dataPicker.show() })}
      { tester_change('分钟选项显示 mm:true','mm:true',()=>{ this.setState({...this.state,mm:true});this.dataPicker.show() })}
      { tester_change('分钟选项显示 mm:false','mm:false',()=>{ this.setState({...this.state,mm:false});this.dataPicker.show() })}
      { tester_change('秒选项显示 ss:true','ss:true',()=>{ this.setState({...this.state,ss:true});this.dataPicker.show() })}
      { tester_change('秒选项显示 ss:false','ss:false',()=>{ this.setState({...this.state,ss:false});this.dataPicker.show() })}
      { tester_change('开始年份 startYear 1990','startYear 1990',()=>{ this.setState({...this.state,startYear:1990});this.dataPicker.show() })}
      { tester_change('开始年份 startYear 1994','startYear 1994',()=>{ this.setState({...this.state,startYear:1994});this.dataPicker.show() })}
      { tester_change('结束年份 endYear 2027','endYear 2027',()=>{ this.setState({...this.state,endYear:2027});this.dataPicker.show() })}
      { tester_change('结束年份 endYear 2025','endYear 2025',()=>{ this.setState({...this.state,endYear:2025});this.dataPicker.show() })}
      { tester_change('选项高度 itemHeight 30','itemHeight 30',()=>{ this.setState({...this.state,itemHeight:30});this.dataPicker.show() })}
      { tester_change('选项高度 itemHeight 90','itemHeight 90',()=>{ this.setState({...this.state,itemHeight:90});this.dataPicker.show() })}
      { tester_change('选项正常颜色 itemTextColor 0x333333ff','itemTextColor 0x333333ff',()=>{ this.setState({...this.state,itemTextColor:0x333333ff});this.dataPicker.show() })}
      { tester_change('选项正常颜色 itemTextColor 0x333ff3ff','itemTextColor 0x333ff3ff',()=>{ this.setState({...this.state,itemTextColor:0x333ff3ff});this.dataPicker.show() })}
      { tester_change('选项被选颜色 itemSelectedColor 0x1097D5ff','itemSelectedColor 0x1097D5ff',()=>{ this.setState({...this.state,itemSelectedColor:0x1097D5ff});this.dataPicker.show() })}
      { tester_change('选项被选颜色 itemSelectedColor 0x1000D5ff','itemSelectedColor 0x1000D5ff',()=>{ this.setState({...this.state,itemSelectedColor:0x1000D5ff});this.dataPicker.show() })}
      { tester_change('确认文字 confirmText 确认','confirmText 确认',()=>{ this.setState({...this.state,confirmText:"确认"});this.dataPicker.show() })}
      { tester_change('确认文字 confirmText ok','confirmText ok',()=>{ this.setState({...this.state,confirmText:"ok"});this.dataPicker.show() })}
      { tester_change('确认文字大小 confirmTextSize 30' ,'confirmTextSize 30',()=>{ this.setState({...this.state,confirmTextSize:30});this.dataPicker1.show() })}
      { tester_change('确认文字大小 confirmTextSize 5','confirmTextSize 5',()=>{ this.setState({...this.state,confirmTextSize:5});this.dataPicker.show() })}
      { tester_change('确认文字颜色 confirmTextColor #333333','confirmTextColor #333333',()=>{ this.setState({...this.state,confirmTextColor:'#333333'});this.dataPicker.show() })}
      { tester_change('确认文字颜色 confirmTextColor #3ff333','confirmTextColor #3ff333',()=>{ this.setState({...this.state,confirmTextColor:'#3ff333'});this.dataPicker.show() })}
      { tester_change('取消文字 cancelText 取消','cancelText 取消',()=>{ this.setState({...this.state,cancelText:'取消'});this.dataPicker.show() })}
      { tester_change('取消文字 cancelText cancel','cancelText cancel',()=>{ this.setState({...this.state,cancelText:'cancel'});this.dataPicker.show() })}
      { tester_change('取消文字大小 cancelTextSize 30','cancelTextSize 30' ,()=>{ this.setState({...this.state,cancelTextSize:30});this.dataPicker2.show() })}
      { tester_change('取消文字大小 cancelTextSize 6','cancelTextSize 6',()=>{ this.setState({...this.state,cancelTextSize:6});this.dataPicker.show() })}
      { tester_change('取消文字颜色 cancelTextColor #333333','cancelTextColor #333333',()=>{ this.setState({...this.state,cancelTextColor:'#333333'});this.dataPicker.show() })}
      { tester_change('取消文字颜色 cancelTextColor #33ff33','cancelTextColor #33ff33',()=>{ this.setState({...this.state,cancelTextColor:'#33ff33'});this.dataPicker.show() })}
      { tester_change('初始选项 selectedValue '+[new Date().getFullYear() + '年', new Date().getMonth() + 1 + '月', new Date().getDate() + '日'],'selectedValue '+[new Date().getFullYear() + '年', new Date().getMonth() + 1 + '月', new Date().getDate() + '日'],()=>{ this.setState({...this.state,selectedValue:[new Date().getFullYear() + '年', new Date().getMonth() + 1 + '月', new Date().getDate() + '日']});this.dataPicker.show() })}
      { tester_change('初始选项 selectedValue '+[new Date().getFullYear() + '年', new Date().getMonth() + 2 + '月', new Date().getDate() + '日'],'selectedValue '+[new Date().getFullYear() + '年', new Date().getMonth() + 2 + '月', new Date().getDate() + '日'],()=>{ this.setState({...this.state,selectedValue:[new Date().getFullYear() + '年', new Date().getMonth() + 2 + '月', new Date().getDate() + '日']});this.dataPicker.show() })}

      {tester_back_string("onPickerConfirm",this.state.onPickerConfirm)}
      {tester_back_string("onPickerCancel",this.state.onPickerCancel)}


      </TestSuite>
    </ScrollView>
    </Tester>
      {/* <View style={{flex:1}}> */}
        <DatePicker
            HH={this.state.HH}
            mm={this.state.mm}
            ss={this.state.ss}
            unit={this.state.unit}
            itemHeight = {this.state.itemHeight}
            startYear={this.state.startYear}
            endYear={this.state.endYear}
            onPickerConfirm={(value:any) => { this.state.onPickerConfirm = 'pass return：'+value }}
            onPickerCancel={() => { this.state.onPickerCancel = 'pass' }}

            itemTextColor= {this.state.itemTextColor}
            itemSelectedColor= {this.state.itemSelectedColor}
            selectedValue= {this.state.selectedValue}

            confirmText= {this.state.confirmText}
            confirmTextSize= {this.state.confirmTextSize}
            confirmTextColor= {this.state.confirmTextColor}

            cancelText= {this.state.cancelText}
            cancelTextSize= {this.state.cancelTextSize}
            cancelTextColor= {this.state.cancelTextColor}
            ref={ref => this.dataPicker = ref}
          />
          <DatePicker
            confirmTextSize= {30}
            HH={false}
            mm={false}
            ss={false}
            ref={ref => this.dataPicker1 = ref}
          />
          <DatePicker
            cancelTextSize= {30}
            HH={false}
            mm={false}
            ss={false}
            ref={ref => this.dataPicker2 = ref}
          />

      {/* </View> */}
    </>
  };
};