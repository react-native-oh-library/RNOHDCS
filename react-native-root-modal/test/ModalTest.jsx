import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Animated } from 'react-native';
import Modal from 'react-native-root-modal';

export default class RootModal extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false,
    };
    this.stateAnimated = {
      visible: false,
      scale: new Animated.Value(1),
      x: new Animated.Value(0)
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <Tester>
        <TestSuite name="Root Modal">
          <TestCase itShould="Modal">
            <View style={ModalStyles.container}>
              <TouchableHighlight
                style={ModalStyles.button}
                underlayColor="#aaa"
                onPress={this.showModal}>
                <Text>Show Modal</Text>
              </TouchableHighlight>
              <Modal visible={this.state.visible} style={ModalStyles.modal}>
                <TouchableHighlight
                  style={[ModalStyles.button, ModalStyles.close]}
                  underlayColor="#aaa"
                  onPress={this.hideModal}>
                  <Text>Close</Text>
                </TouchableHighlight>
                <View style={ModalStyles.modalContainer}>
                  <Text style={ModalStyles.text}>Amazing!</Text>
                </View>
              </Modal>
            </View>
          </TestCase>
        </TestSuite>
      </Tester>
    );
  }
}

const ModalStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 700
  },
  button: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  close: {
    position: 'absolute',
    right: 50,
    top: 200,
    backgroundColor: 'red',
  },
  modalContainer: {
    height: 150,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    top: 300,
    left: 70,
  },
  text: {
    color: '#fff',
  },
  modal: {
    backgroundColor: '#b3b3b39c',
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
});