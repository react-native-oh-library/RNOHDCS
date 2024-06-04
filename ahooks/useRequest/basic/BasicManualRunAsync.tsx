/**
 * title: Edit username
 * desc: In this example, we use `runAsync(username)` to edit the user name. At this time, we must catch the exception through catch.
 *
 * title.zh-CN: 修改用户名
 * desc.zh-CN: 在这个例子中，我们通过 `runAsync(username)` 来修改用户名，此时必须通过 catch 来自行处理异常。
 */
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import { useRequest } from 'ahooks';



export function BasicManualRunAsync() {
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

  const { loading, runAsync } = useRequest(editUsername, {
    manual: true,
  });

  const onClick = async () => {
    try {
      await runAsync(state);
      setState('');
      Alert.alert("Success", `The username was changed to "${state}" !`);
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={text => setState(text)}
        value={state}
        placeholder="Please enter username"
        style={styles.input}
      />
      <Button
          onPress={()=>setFlag(!flag)}
          title={flag}
        />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Edit" onPress={onClick} />
      )}
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
    fontSize: 16
  },
});

