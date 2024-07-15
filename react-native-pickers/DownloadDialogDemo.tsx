import React from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Button} from 'react-native';
import { DownloadDialog,BaseComponent } from 'react-native-pickers';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {tester_change, tester_back_string} from './utilCompant';

export class DownloadDialogExample extends BaseComponent {


  startDownload() {
    let count = 0;
    this.setState({ active: false })
    this.interval = setInterval(() => {
        if (count > 50) {
            //下载完成
            this.setState({ active: true })
            clearInterval(this.interval);
            return;
        }
        this.DownloadDialog.setProcess(count / 50, '4.23MB');
        count++;
        count++;
    }, 100);
}
  constructor(props) {
    super(props);
    this.state = {
      title: '视频下载',
      titleColor: '#333333',
      titleSize: 14,
      active: true,
      actionText: '打开',
      onAction: null,
      totalTextColor: '#666666',
      onAction:'',
      totalTextSize: 12
    };
  }

  render(){
    return <>
    <Tester>
    <ScrollView>
      <TestSuite name='DownloadDialog'>
      { tester_change("title 视频下载",'title 视频下载',()=>{ this.setState({...this.state,title:'视频下载'});this.DownloadDialog.show() })}
      { tester_change("title 下载",'title 下载',()=>{ this.setState({...this.state,title:'下载'});this.DownloadDialog.show() })}
      { tester_change("titleColor #333333",'titleColor #333333',()=>{ this.setState({...this.state,titleColor:'#333333'});this.DownloadDialog.show() })}
      { tester_change("titleColor #666666",'titleColor #666666',()=>{ this.setState({...this.state,titleColor:'#666666'});this.DownloadDialog.show() })}
      { tester_change("titleSize 14",'titleSize 14',()=>{ this.setState({...this.state,titleSize:14});this.DownloadDialog.show() })}
      { tester_change("titleSize 24",'titleSize 24',()=>{ this.setState({...this.state,titleSize:24});this.DownloadDialog.show() })}
      { tester_change("确认按钮可被点击 active true",'active true',()=>{ this.setState({...this.state,active:true});this.DownloadDialog.show() })}
      { tester_change("确认按钮不可被点击 active false",'active false',()=>{ this.setState({...this.state,active:false});this.DownloadDialog.show();this.startDownload() })}
      { tester_change("actionText 打开",'actionText 打开',()=>{ this.setState({...this.state,actionText:'打开'});this.DownloadDialog.show() })}
      { tester_change("actionText 开启",'actionText 开启',()=>{ this.setState({...this.state,actionText:'开启'});this.DownloadDialog.show() })}
      { tester_change("totalTextColor #666666",'totalTextColor #666666',()=>{ this.setState({...this.state,totalTextColor:'#666666'});this.DownloadDialog.setProcess(12 / 50, '4.23MB');this.DownloadDialog.show() })}
      { tester_change("totalTextColor #660066",'totalTextColor #660066',()=>{ this.setState({...this.state,totalTextColor:'#660066'});this.DownloadDialog.setProcess(12 / 50, '4.23MB');this.DownloadDialog.show() })}
      { tester_change("totalTextSize 12",'totalTextSize 12',()=>{ this.setState({...this.state,totalTextSize:12});this.DownloadDialog.show() })}
      { tester_change("totalTextSize 24",'totalTextSize 24',()=>{ this.setState({...this.state,totalTextSize:24});this.DownloadDialog.show() })}
      
      {tester_back_string("onAction",this.state.onAction)}


      </TestSuite>
    </ScrollView>
    </Tester>

      <DownloadDialog
        title= {this.state.title}
        titleColor={this.state.titleColor}
        titleSize= {this.state.titleSize}
        active= {this.state.active}
        actionText= {this.state.actionText}
        totalTextColor= {this.state.totalTextColor}
        totalTextSize= {this.state.totalTextSize}

        onAction={() => { this.setState({...this.state,onAction:'pass'}) }} 
        ref={ref => this.DownloadDialog = ref} />
        
    </>
  };
};