/**
 * title: Edit username
 *
 * title.zh-CN: 修改用户名
 */

import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useRequest } from 'ahooks'; // 请注意，React Native 中可能需要寻找或替代 ahooks 的等效实现
import Mock from 'mockjs';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}



export function BasicMutate(){
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
  const lastRef = useRef<string>();

  const [state, setState] = useState('');

  const { data: username, mutate } = useRequest(getUsername);

  const { run: edit } = useRequest(editUsername, {
    manual: true,
    onSuccess: (result: any, params: any[]) => {
      setState('');
      Alert.alert("Success", `The username was changed to "${params[0]}" !`);
    },
    onError: (error: { message: string | undefined; }) => {
      Alert.alert("Error", error.message);
      mutate(lastRef.current); // 注意检查 mutate 方法在你选择的请求库中的可用性和行为
    },
  });

  const onChange = () => {
    lastRef.current = username;
    mutate(state);
    edit(state);
  };

  return (
    <View>
      <Text>Username: {username}</Text>
      <TextInput
        onChangeText={setState}
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, fontSize: 16 }}
      />
      <Button onPress={onChange} title="Edit" />
      <Button
          onPress={()=>setFlag(!flag)}
          title={String(flag)}
        />
    </View>
  );
};