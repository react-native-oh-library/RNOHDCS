import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useRequest } from 'ahooks';



export function BasicCancel() {
  function editUsername(username: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (flag) {
          resolve();
        } else {
          reject(new Error('Failed to modify username'));
        }
      }, 1000);
    });
  }
  const [flag,setFlag] = useState(true)
  const [state, setState] = useState('');

  const { loading, run, cancel } = useRequest(editUsername, {
    manual: true,
    onSuccess: (result, params) => {
      setState('');
      Alert.alert("Success", `The username was changed to "${params[0]}" !`);
    },
    onError: (error) => {
      Alert.alert("Error", error.message);
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={text => setState(text)}
        value={state}
        placeholder="Please enter username"
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => run(state)}
          title={loading ? 'Loading...' : 'Edit'}
          disabled={loading}
        />
        <View style={styles.spacing} />
        <Button
          onPress={cancel}
          title="Cancel"
        />
        <Button
          onPress={()=>setFlag(!flag)}
          title={flag}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 240,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spacing: {
    width: 16,
  },
});