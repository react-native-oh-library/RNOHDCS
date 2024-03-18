/**
 * title: Used in antd Form
 * desc: Pay attention to the use of sortList. The data of antd Form is not sorted correctly. sortList can be used to calibrate the sorting.
 *
 * title.zh-CN: 在 antd Form 中使用的另一种写法
 * desc.zh-CN: 注意 sortList 的使用，antd Form 获取的数据排序不对，通过 sortList 可以校准排序。
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDynamicList } from 'ahooks';

export function DynamicList3() {
  const { list, remove, getKey, insert, resetList, sortList } = useDynamicList(['David', 'Jack']);
  const [result, setResult] = useState('');

  const Row = (index: number, item: string | undefined) => (
    <View style={{ flexDirection: 'row' }} key={getKey(index)}>
      <View>
        <TextInput
          placeholder="Please enter your name"
          value={item}
          onChangeText={(text) => list[index] = text}
          style={{ width: 300, borderWidth: 1, borderColor: 'gray', padding: 5 }}
        />
      </View>
      <View style={{ marginTop: 4 }}>
        {list.length > 1 && (
          <AntDesign
            name="minuscircleo"
            size={24}
            color="black"
            style={{ marginLeft: 8 }}
            onPress={() => remove(index)}
          />
        )}
        <AntDesign
          name="pluscircleo"
          size={24}
          color="black"
          style={{ marginLeft: 8 }}
          onPress={() => insert(index + 1, '')}
        />
      </View>
    </View>
  );

  return (
    <>
      {list.map((ele, index) => Row(index, ele))}
      <Button
        title="Submit"
        onPress={() => {
          const names = list.map(item => item);
          const sortedResult = sortList(names);
          setResult(JSON.stringify(sortedResult, null, 2));
        }}
      />
      <Button title="Reset" onPress={() => resetList(['David', 'Jack'])} />

      <Text>{result}</Text>
    </>
  );
};