import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Button
} from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';

// showsVerticalScrollIndicator 默认值: true 决定是否显示垂直滚动条
const ScrollViewPropsInput = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <InputScrollView
        keyboardOffset={100}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.placeholder} />
        <Text>showsVerticalScrollIndicator</Text>
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

export default ScrollViewPropsInput;
