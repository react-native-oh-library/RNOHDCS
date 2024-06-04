import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Keyboard } from 'react-native';
import { useHistoryTravel } from 'ahooks';

export function HistoryTravel2(){
  const {
    value = [],
    setValue,
    backLength,
    forwardLength,
    back,
    forward,
    go,
    reset,
  } = useHistoryTravel(['do homework']);

  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState('0');

  const onAdd = () => {
    setValue([...value, inputValue]);
    setInputValue('');
    Keyboard.dismiss(); // 关闭键盘
  };

  const onGo = () => {
    go(Number(step));
    setStep('0');
  };

  const onReset = () => {
    reset();
    setStep('0');
    setInputValue('');
  };

  const renderItem = ({ item }:{item:any}) => <Text style={styles.item}>{item}</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.title}>TODO List</Text>
        <FlatList data={value} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Please enter TODO name"
          style={styles.input}
        />
        <Button title="Add TODO" onPress={onAdd} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Undo" onPress={back} disabled={backLength <= 0} />
        <Button title="Redo" onPress={forward} disabled={forwardLength <= 0} />
        <Button title="Reset" onPress={onReset} disabled={!backLength && !forwardLength} />
      </View>
      <View style={styles.goContainer}>
        <TextInput
          value={step}
          onChangeText={setStep}
          keyboardType="numeric"
          style={styles.stepInput}
        />
        <Button title="Go" onPress={onGo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  listContainer: {
    marginBottom: 16,
    borderColor: '#ebedf1',
    borderWidth: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ebedf1',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 10,
    height: 40,
    fontSize: 16 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  goContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepInput: {
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 10,
    height: 40,
    width: 60,
    fontSize: 16 
  },
});