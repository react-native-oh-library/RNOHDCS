/**
 * title: Default usage
 * desc: Store the state into url query. By set the value to `undefined`, the attribute can be removed from the url query.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 将状态同步到 url query 中。通过设置值为 `undefined`, 可以从 url query 上彻底删除某个属性，从而使用默认值。
 */

import React from 'react';
import useUrlState from '@ahooksjs/use-url-state';
import { View, Button } from 'react-native';

export function UseUrlState1() {
  const [state, setState] = useUrlState({ count: '1' });

  return (
    <View>
      <View style={{ marginRight: 8 }}>
        <Button
          title="add"
          onPress={() => setState({ count: Number(state.count || 0) + 1 })}
        />
      </View>
      <Button title="clear" onPress={() => setState({ count: undefined })} />
      <View>state: {state?.count}</View>
    </View>
  );
};