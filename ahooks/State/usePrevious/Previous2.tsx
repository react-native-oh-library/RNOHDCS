/**
 * title: Custom shouldUpdate function
 * desc: Previous value update only when the shouldUpdate function return true.
 *
 * title.zh-CN: 自定义 shouldUpdate 函数
 * desc.zh-CN: 只有 shouldUpdate function 返回 true 时，才会记录值的变化。
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { usePrevious } from 'ahooks';

interface Person {
  name: string;
  job: string;
}

const nameCompareFunction = (prev: Person | undefined, next: Person) => {
  if (!prev) {
    return true;
  }
  if (prev.name !== next.name) {
    return true;
  }
  return false;
};

const jobCompareFunction = (prev: Person | undefined, next: Person) => {
  if (!prev) {
    return true;
  }
  if (prev.job !== next.job) {
    return true;
  }
  return false;
};

export function Previous2(){
  const [state, setState] = useState({ name: 'Jack', job: 'student' });
  const [nameInput, setNameInput] = useState('');
  const [jobInput, setJobInput] = useState('');
  const previousName = usePrevious(state, nameCompareFunction);
  const previousJob = usePrevious(state, jobCompareFunction);

  return (
    <View>
      <View style={{ margin: 8, padding: 8 }}>
        <Text>current name: {state.name}</Text>
        <Text>current job: {state.job}</Text>
      </View>
      <Text>previous name: {(previousName || {}).name}</Text>
      <Text style={{ marginBottom: 8 }}>previous job: {(previousJob || {}).job}</Text>
      <View style={{ marginTop: 8 }}>
        <TextInput
          style={{ width: 220, borderWidth: 1, borderColor: '#e8e8e8', padding: 8, fontSize: 16 }}
          value={nameInput}
          onChangeText={(text) => setNameInput(text)}
          placeholder="new name"
        />
        <View style={{ marginLeft: 8 }}>
        <Button
          title="update"
          onPress={() => {
            setState((s) => ({ ...s, name: nameInput }));
          }}
        />
        </View >
      </View>
      <View style={{ marginTop: 8 }}>
        <TextInput
          style={{ width: 220, borderWidth: 1, borderColor: '#e8e8e8', padding: 8, fontSize: 16 }}
          value={jobInput}
          onChangeText={(text) => setJobInput(text)}
          placeholder="new job"
        />
        <View style={{ marginLeft: 8 }}>
        <Button
          title="update"
          onPress={() => {
            setState((s) => ({ ...s, job: jobInput }));
          }}
        />
        </View>
      </View>
    </View>
  );
};

