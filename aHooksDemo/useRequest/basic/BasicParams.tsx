import { useRequest } from 'ahooks';
import Mock from 'mockjs';
import React, { useState } from 'react';
import { Text,Button,View,TextInput } from 'react-native';

function getUsername(id: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

export function BasicParams(){
  const [state, setState] = useState('');

  // get username
  const {
    data: username,
    run,
    params,
  } = useRequest(getUsername, {
    defaultParams: ['1'],
  });

  const onChange = () => {
    run(state);
  };

  return (
    <View>
      <TextInput
        onChangeText={(text) => setState(text)}
        value={state}
        placeholder="Please enter userId"
        style={{ width: 240, marginRight: 16 }}
      />
      <Button title="GetUserName" onPress={onChange}/>
      <Text style={{ marginTop: 8 }}>UserId: {params[0]}</Text>
      <Text>Username: {username}</Text>
    </View>
  );
};
