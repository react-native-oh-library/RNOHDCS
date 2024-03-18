import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDynamicList } from 'ahooks';

const DynamicInputs = ({
  value = [],
  onChange,
}: {
  value?: string[];
  onChange?: (value: string[]) => void;
}) => {
  const { list, remove, getKey, insert, replace, resetList } = useDynamicList(value);

  useEffect(() => {
    // If value change manual, reset list
    if (value !== list) {
      resetList(value);
    }
  }, [value]);

  useEffect(() => {
    onChange?.(list);
  }, [list]);

  const Row = (index: number, item: string | undefined) => (
    <View key={getKey(index)} style={{ marginBottom: 16, flexDirection: 'row' }}>
      <TextInput
        style={{ width: 300, borderWidth: 1, borderColor: 'gray', padding: 5 }}
        placeholder="Please enter name"
        onChangeText={(text) => replace(index, text)}
        value={item}
      />

      {list.length > 1 && (
        <AntDesign
          name="minuscircleo"
          size={24}
          color="black"
          style={{ marginLeft: 8 }}
          onPress={() => {
            remove(index);
          }}
        />
      )}
      <AntDesign
        name="pluscircleo"
        size={24}
        color="black"
        style={{ marginLeft: 8 }}
        onPress={() => {
          insert(index + 1, '');
        }}
      />
    </View>
  );

  return <>{list.map((ele, index) => Row(index, ele))}</>;
};

export function DynamicList2() {
  const [result, setResult] = useState(['David', 'Jack']);

  return (
    <>
      <DynamicInputs value={result} onChange={(value) => setResult(value)} />

      <Button
        title="Submit"
        onPress={() => {
          setResult(result); // This line is not necessary in React Native
        }}
      />
      <Button title="Reset" onPress={() => setResult(['David', 'Jack'])} />

      <Text>{JSON.stringify(result)}</Text>
    </>
  );
};