import { Text, TextInput, View, FlatList } from 'react-native';
import { useDebounceEffect } from 'ahooks';
import React, { useState } from 'react';

export function UseDebounceEffect() {
  const [value, setValue] = useState('hello');
  const [records, setRecords] = useState<string[]>([]);
  useDebounceEffect(
    () => {
      setRecords((val) => [...val, value]);
    },
    [value],
    {
      wait: 1000,
    },
  );
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder="Typed value"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <Text style={{ marginTop: 16 }}>
        <FlatList
          data={records}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </Text>
    </View>
  );
};
