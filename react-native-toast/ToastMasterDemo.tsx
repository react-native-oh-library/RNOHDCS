import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Toast from 'react-native-toast';

function ToastMasterDemo() {
  return (
    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tosat !</Text>
      <Button
        title={'show toast'}
        onPress={() => {
          Toast.show('This is a toast.');
        }}
      />
      <Button
        title={'short top toast'}
        onPress={() => {
          Toast.showShortTop('This is a top toast.');
        }}
      />
      <Button
        title={'short center toast'}
        onPress={() => {
          Toast.showShortCenter('This is a center toast.');
        }}
      />
      <Button
        title={'short bottom toast'}
        onPress={() => {
          Toast.showShortBottom('This is a bottom toast.');
        }}
      />
      <Button
        title={'long top toast'}
        onPress={() => {
          Toast.showLongTop('This is a long top toast.');
        }}
      />
      <Button
        title={'long center toast'}
        onPress={() => {
          Toast.showLongCenter('This is a long center toast.');
        }}
      />
      <Button
        title={'long bottom toast'}
        onPress={() => {
          Toast.showLongBottom('This is a long bottom toast.');
        }}
      />
      <Button
        title={'hide'}
        onPress={() => {
          Toast.hide();
        }}
      />
    </View>
  );
}

export default ToastMasterDemo;