import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';

const keyboardAvoidingViewPropsInput = () => {
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  return (
    <View style={styles.container}>
      <InputScrollView
        keyboardOffset={100}
        keyboardAvoidingViewProps={{
          onLayout: () => {
            setText1('pass')
          },
        }}>
        <View style={styles.placeholder} />
        <Text>onLayout</Text>
        <Text>{text1}</Text>
        <TextInput
          style={styles.input}
          value={text}
          multiline
          onChangeText={setText}
        />
      </InputScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  },
  placeholder: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#FFF',
  },
});

export default keyboardAvoidingViewPropsInput;
