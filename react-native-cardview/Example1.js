import React, { Component} from 'react';  
import {  
  PanResponder,  
  StyleSheet,  
  Text,  
  View, 
  TouchableOpacity, 
  SafeAreaView,  
} from 'react-native';  
import CardView from 'react-native-cardview';

export default class Example1 extends CardView {  
  constructor() {  
    super();  
  
    this.state = {  
      value: 1, 
      data: [
        { id: 1, addr: 'Hello' },
        { id: 2, addr: 'Hi, Nice to meet you' },
        { id: 3, addr: 'Hello, Nice to meet you too.' },
        { id: 4, addr: 'How are you?' }
      ] 
    };  
  
    this.sliderWidth = 300;  
    this.maxValue = 30;  
    this.minValue = 0;  
  
    this._panResponder = PanResponder.create({  
      onStartShouldSetPanResponder: (evt, gestureState) => true,  
      onMoveShouldSetPanResponder: (evt, gestureState) => true,  
      onPanResponderGrant: (evt, gestureState) => {  
        this._initialValue = Math.round(this.state.value);  
      },  
      onPanResponderMove: (evt, gestureState) => {  
        const range = this.maxValue - this.minValue;  
        const position = gestureState.dx + this._initialValue * this.sliderWidth / range;  
        const newValue = Math.round(position * range / this.sliderWidth);  
  
        newValue >= this.minValue && newValue <= this.maxValue && this.setState({ value: newValue });  
      },  
    });  
  }  
  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value)
      };
    });
  }
    deleteData(id) {
    let filteredData = this.state.data.filter(item => {
      return item.id !== id;
    });
    this.setState({
      data: filteredData
    });
  }
    renderData(data) {
    if (data.length === 0) {
      return (
        <Text style={{ textAlign: 'center', padding: 10 }}>Data Empty</Text>
      );
    }
    return data.map(item => {
      return (
        <View
          key={item.id}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between'
          }}
        >
          <Text>{item.addr}</Text>
          <TouchableOpacity
            style={{ justifyContent: 'center' }}
            onPress={() => this.deleteData(item.id)}
          >
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      );
    });
  }
  
   render() {  
    const { data ,value} = this.state;
	 
    const innerStyle = {  
      width: ((value - this.minValue) / (this.maxValue - this.minValue)) * this.sliderWidth,  
    };  
  
    return (  
      <SafeAreaView style={styles.container}>  
       <View style={styles.container}>
          <CardView
            style={{
              backgroundColor: 'white'
            }}
            cardElevation={value}
            cardMaxElevation={value}
            cornerRadius={0}
          > 
            <View style={styles.child}>
              <View style={styles.titleView}>
                <Text style={styles.title}>User Information</Text>
              </View>
              <View>{this.renderData(data)}</View>
            </View>
          </CardView> 

          <View style={styles.outer} {...this._panResponder.panHandlers}>  
          <View style={[styles.inner, innerStyle]} />  
        </View>  

          <Text>{`cardElevation = ${value}`}</Text>
          <Text>{`cardMaxElevation = ${value}`}</Text>
        </View>   
      </SafeAreaView>  
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
  },  
  outer: {  
    backgroundColor: '#ddd',  
    width: 300,  
    height: 10,  
    borderRadius: 25,  
    overflow: 'hidden', 
    marginTop: 30,   
  },  
  inner: {  
    backgroundColor: 'blue',  
    height: '100%',  
  }, 
    safeAreaView: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  child: {
    width: 300
  },
  titleView: {
    padding: 10,
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1
  },
  title: {
    fontSize: 16,
    color: 'black'
  },
  sliderStyle: {
    width: 300,
    marginTop: 40
  } 
});