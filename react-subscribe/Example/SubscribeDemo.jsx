import React from 'react';
import { Subscribe,Fetch,Timer } from 'react-subscribe';
import { TextInput, Text, View,Button,ScrollView} from 'react-native'
import axios from 'axios';
import { EventEmitter } from 'fbemitter';


export class SubscribeDemo extends React.Component {

  render() {
    return (
      <View style={{backgroundColor:"#FFF"}}>
        <ScrollView style={{flex: 1}}>
          <View>
            <ReactSubscribeFetchTest url={encodeURI('http://10.51.126.231:8888/student/getStuInfo?value=GET请求使用json处理返回数据')} method={"GET"} type={'json'} contentType={'application/json'}/>
          </View>
          <View>
            <ReactSubscribeTimerTest cd={10} interval={1000}/>
          </View>
          <View>
            <ReactSubscribeSubscribeTest eventEmitter1={new EventEmitter()} eventEmitter2={new EventEmitter()}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

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

export class ReactSubscribeFetchTest extends React.Component {

  state = {
    listening:false
  };

  timeClick = () => {
    this.setState({listening: true});
  };

  fetch_option = {
    timeout: 5000,
    method: this.props.method,
    headers: {
      'X-AccessToken': 'some_token',
      "Content-Type":this.props.contentType
    },
    body:this.props.body,
    credentials: 'include', // Default credentials is 'same-origin' in `Fetch`
  };
  
  render (){
    if(this.props.manners === 1){
      return(
        <View>
         <Button title='点击' onPress={() => this.timeClick()}>点击</Button>
          {this.state.listening && <Fetch doFetch={customRequest} url={this.props.url}>
          <SomeComponent2/>
        </Fetch>}
      </View>
      )
    }
    return(
      <View>
       <Button title='点击' onPress={() => this.timeClick()}>点击</Button>
        {this.state.listening && <Fetch url={this.props.url} type={this.props.type} options={this.fetch_option}>
        <SomeComponent/>
      </Fetch>}
    </View>
    )
  };
}

function SomeComponent({ data, loading, error, reload, statusCode }) {
  if (loading) {
    return <View><Text>loading...</Text></View>;
  }
  if (error) {
    return (
      <View>
        <Text>error:{error.message}</Text>
        <Button title='点击重新请求' onPress={() => reload()}>点击</Button>
      </View>
    );
  }

  return (
    <View>
      <Text>Status Code: {statusCode}</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}

async function customRequest(url) {
  return axios.get(url,{params:{
    value:'自定义组件请求',
  }});
}

function SomeComponent2({ data, loading, error, reload }) {
  if (loading) {
    return <View><Text>loading...</Text></View>;
  }
  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
        <Button title='点击重新请求' onPress={() => reload}>点击</Button>
      </View>
    );
  }
  return (
    <View>
      <Text>Status Code: {data.status}</Text>
      <Text>{JSON.stringify(data.data)}</Text>
    </View>
  );
}

export class ReactSubscribeTimerTest extends React.Component {
  state = {
    cd: this.props.cd,
    listening:false
  };
  onTimer = () => {
    this.setState({ cd: this.state.cd - this.props.interval/1000,listening:true });
  };
  timeClick = () => {
    this.setState({cd: this.props.cd,listening: true});
  };
  render() {
    if (this.state.cd <= 0) {
      return (
        <View>
          <Button title='点击' onPress={() => this.timeClick()}>点击</Button>
          <Text>Cooldown is over and onTimer will not be called again!</Text>
        </View>
      );
    }
    return (
      <View>
        <Button title='点击' onPress={() => this.timeClick()}>点击</Button>
        {this.state.listening && <Timer interval={this.props.interval} onTimer={this.onTimer}><Text>There is still {this.state.cd} seconds to go.</Text></Timer>}
        <Text>点击按钮启动倒计时</Text>
      </View>
    );
  }
}

