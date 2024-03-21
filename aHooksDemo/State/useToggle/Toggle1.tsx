/**
 * title: Basic usage
 * desc: Default value is boolean，alike useBoolean.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 默认为 boolean 切换，基础用法与 useBoolean 一致。
 */

import React from 'react';
import { useToggle } from 'ahooks';
import { Button,View,Text } from 'react-native';

export function Toggle1(){
  const [state, { toggle, setLeft, setRight }] = useToggle();

  return (
    <View>
      <Text>Effects：{`${state}`}</Text>
      <Text>
        <Button title="Toggle" onPress={toggle}/>
        <View style={{ marginHorizontal: 8, marginVertical: 0 }}>
        <Button title="Toggle False" onPress={setLeft} />
        </View>
        <Button title="Toggle True" onPress={setRight}/>
      </Text>
    </View>
  );
};