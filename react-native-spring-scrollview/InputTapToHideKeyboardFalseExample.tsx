import React from 'react';
import {SpringScrollView} from 'react-native-spring-scrollview';
import {TextInput, StyleSheet, Text, ScrollView, View} from 'react-native';

export default class InputTapToHideKeyboardFalseExample extends React.Component {
  _topInput = React.createRef();
  _bottomInput = React.createRef();


  render() {
    return (
      <SpringScrollView
        style={styles.container}
        dragToHideKeyboard={false}
        inputToolBarHeight={30}
        pageSize={{width: 200, height: 200}}
        textInputRefs={[this._topInput, this._bottomInput]}
      >
        <TextInput
          ref={this._topInput}
          style={styles.input}
          placeholder="Keyboard Test Top"
        />
        <Text style={styles.text}>
          Keyboard will never cover the focused TextInput
        </Text>
        <TextInput
          ref={this._bottomInput}
          style={styles.input}
          placeholder="Keyboard Test Bottom"
        />
      </SpringScrollView>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    input: {
      marginHorizontal: 20,
      marginVertical: 20,
    },
    text: {
      marginHorizontal: 20,
      marginVertical: 300,
      fontSize: 30,
    },
  });