// App.js
import React from 'react'
import { View, Text, Keyboard, Platform, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import { KeyboardAwareTabBarComponent } from 'react-native-keyboard-accessory';



export default function KeyboardAwareTabBarTest() {
  const [textInputValue, setTextInputValue] = React.useState('');
  const TabBar = () => {
  return (
    <View style={{ backgroundColor: 'lightblue', padding: 10 }}>
      <Text>这是一个TabBar哦~</Text>
    </View>
  );
};
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={textInputValue}
        onChangeText={setTextInputValue}
        placeholder="Type here..."
      />
      <KeyboardAwareTabBarComponent TabBarComponent={TabBar} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textInput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
});
export {KeyboardAwareTabBarTest}