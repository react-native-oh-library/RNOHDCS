import React, { Component } from "react";
import {StyleSheet, TouchableWithoutFeedback, Image } from "react-native";
import Modal from 'react-native-translucent-modal';

export default class App extends Component {

  render() {
    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={() => {
          }}
        >
            <TouchableWithoutFeedback style={styles.wrapper}>
              <Image source={{ uri: 'https://hbimg.huabanimg.com/ed258f740ab675e3b3a0b6e7abc44eb7bd832c523396b-cJL1G9_fw658' }} style={styles.imageBackground} />
            </TouchableWithoutFeedback>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
});