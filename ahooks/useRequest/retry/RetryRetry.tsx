import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRequest } from 'ahooks';

function editUsername(username: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Failed to modify username'));
    }, 1000);
  });
}

export function RetryRetry() {
  const [state, setState] = useState('');
  const { loading, run } = useRequest(editUsername, {
    retryCount: 3,
    manual: true,
    onError: (error) => {
      Alert.alert('Error', error.message);
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setState}
        value={state}
        placeholder="Please enter username"
      />
      <Button
        title={loading ? 'Loading' : 'Edit'}
        onPress={() => run(state)}
        disabled={loading}
        color="#007bff" // Example button color
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: 240,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 10,
  },
});
