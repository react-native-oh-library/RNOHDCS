import React from 'react';
import { View,Text,Button } from 'react-native';
import { Fetch } from 'react-subscribe';
import axios from 'axios';

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
          {this.state.listening && <Fetch doFetch={customRequest} url={this.props.url} type={this.props.type} options={this.fetch_option}>
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