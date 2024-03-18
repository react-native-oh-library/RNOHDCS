import React from 'react';
import { useReactive } from 'ahooks';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

export function ArrayOperationReactive() {
  const state = useReactive({
    bug: '',
    bugs: ['feat', 'fix', 'chore'],
    addBug(bug: any) {
      this.bugs.push(bug);
    },
    get bugsCount() {
      return this.bugs.length;
    },
  });

  return (
    <View>
      <Text>state.bugsCount: {state.bugsCount}</Text>

      <View>
        <TextInput
          value={state.bug}
          onChangeText={(text) => (state.bug = text)}
        />
        <Button
          title="Add"
          onPress={() => {
            state.addBug(state.bug);
            state.bug = '';
          }}
        />
        <Button
          title="Delete"
          onPress={() => state.bugs.pop()}
        />
      </View>

      <ScrollView>
        {state.bugs.map((bug, index) => (
          <Text key={index}>{bug}</Text>
        ))}
      </ScrollView>
    </View>
  );
};