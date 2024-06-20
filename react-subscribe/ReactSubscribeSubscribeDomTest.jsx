import React from 'react';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';
import { SubscribeDOM } from 'react-subscribe';

export class ReactSubscribeSubscribeDomTest extends React.Component {

  eventEmitter = new EventEmitter()

    constructor(props){
        super(props);
        this.state = {
          listening : true,
        };
      }
      count1 = 0
      count2 = 0
    onBodyWheel = (ev) => {
      this.setState({
        listening : true,
      });
      if(ev.eventName == 'scroll1'){
        this.count1  = ev.count
      }else{
        this.count2  = ev.count
      }
    };
    onPress1 = () => {
      this.eventEmitter.emit('scroll1',{eventName:'scroll1',count:this.count1 + 1});
      
    };
    onPress2 = () => {
      this.eventEmitter.emit('scroll2',{eventName:'scroll2',count:this.count2 + 1});
    };
  render() {
    return (
      <View style={styles.container}>
        {/* Other body components */}
        <SubscribeDOM
          target={this.eventEmitter}
          eventName="scroll1"
          listener={this.onBodyWheel}
        />
        <SubscribeDOM
          target={this.eventEmitter}
          eventName="scroll2"
          listener={this.onBodyWheel}
        />
        <View>
          <TouchableHighlight onPress={this.onPress1}>
            <Text>Touch me1</Text>
          </TouchableHighlight>
          <Text>count1: {this.count1}</Text>
        </View>
        <View>
          <TouchableHighlight onPress={this.onPress2}>
              <Text>Touch me2</Text>
          </TouchableHighlight>
          <Text>count2: {this.count2}</Text>
        </View>
      </View>
    );
  }
}

class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  addEventListener(eventName, listener) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(listener);
  }

  removeEventListener(eventName, listener) {
    if (!this.listeners[eventName]) {
      return;
    }
    const index = this.listeners[eventName].indexOf(listener);
    if (index !== -1) {
      this.listeners[eventName].splice(index, 1);
    }
  }

  emit(eventName, ...args) {
    if (!this.listeners[eventName]) {
      return;
    }
    this.listeners[eventName].forEach(listener => {
      listener(...args);
    });
  }
}


const styles = StyleSheet.create({
    container:{
      display:'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });


  
