import React, { useState } from 'react';
import { useRequest } from 'ahooks';
import { Button, TextInput, View, Alert } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function changeUsername(username: string): Promise<{ success: boolean }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}

export function IndexManual() {
  const [state, setState] = useState('');

  const { loading, run } = useRequest(changeUsername, {
    manual: true,
    onSuccess: (result, params) => {
      if (result.success) {
        setState('');
        Alert.alert(`The username was changed to "${params[0]}" !`);
      }
    },
  });

  return (
    <View>
      <TextInput
        onChangeText={(text) => setState(text)}
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, marginRight: 16, borderWidth: 1, fontSize: 16 }}
      />
      <Button disabled={loading} title="button" onPress={() => run(state)} />
    </View>
  );
};