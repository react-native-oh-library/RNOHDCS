import React from 'react';
import { Subscribe } from 'react-subscribe';
import { TextInput, Text, View,Button} from 'react-native'


export class ReactSubscribeSubscribeTest extends React.Component {
  state = {
    listening : true
  }

  eventName='test1';
  message = '';
  eventType = 1;

  test1Message;
  test2Message;
  test3Message;


  onChangeText(eventName){
    this.eventName = eventName;
  }

  onChangeMessage(message){
    this.message = message;
  }

  eventNameEvent = (ev) => {
    this.setState({
      listening : true
    })
    this.test1Message = ev.message;
  };

  otherEvent = (ev) => {
    this.setState({
      listening : true
    })
    this.test2Message = ev.message;
  };

  sendMessage(){
    if(this.eventName === 'test1'){
      this.props.eventEmitter1.emit(this.eventName, { message: this.message});
    }else{
      this.props.eventEmitter2.emit(this.eventName, { message: this.message});
    }
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="请输入内容eventName（只有test1和test2输入其他无效）"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.onChangeText(text)}
          value={111}
        />
        <TextInput
          placeholder="请输入内容发送内容"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.onChangeMessage(text)}
          value={111}
        />
        <Button title='点击发送' onPress={() => this.sendMessage()}>点击</Button>
        <Text>'1.监听test1'</Text>
        <Subscribe target={this.props.eventEmitter1} eventName="test1" listener={this.eventNameEvent} />
        {this.test1Message !== null && <Text>test1监听数据:{this.test1Message}</Text>}
        <Text>'2.监听test2'</Text>
        <Subscribe target={this.props.eventEmitter2} eventName="test2" listener={this.otherEvent} >
          <Text>test2监听数据:{this.test2Message}</Text>
        </Subscribe>
      </View>
    );
  }
}