/**
 * title: Basic usage
 * desc: Dynamic list management
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 管理动态列表
 */

import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useDynamicList } from 'ahooks';
import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native';

export function DynamicList1(){
  const { list, remove, getKey, insert, replace } = useDynamicList(['David', 'Jack']);

  const Row = (index: number, item: any) => (
    <View key={getKey(index)} style={{ marginBottom: 16 }}>
      <TextInput
        style={{ width: 300 }}
        placeholder="Please enter name"
        onChangeText={(text: string) => replace(index, text)}
        value={item}
      />

      {list.length > 1 && (
        <MinusCircleOutlined
          style={{ marginLeft: 8 }}
          onClick={() => {
            remove(index);
          }}
        />
      )}
      <PlusCircleOutlined
        style={{ marginLeft: 8 }}
        onClick={() => {
          insert(index + 1, '');
        }}
      />
    </View>
  );

  return (
    <View>
      {list.map((ele, index) => Row(index, ele))}

      <View>{JSON.stringify([list])}</View>
    </View>
  );
};