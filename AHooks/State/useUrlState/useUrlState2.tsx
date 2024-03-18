/**
 * title: Multi-state management
 * desc: useUrlState can manage multiple states at the same time
 *
 * title.zh-CN: 多状态管理
 * desc.zh-CN: useUrlState 可以同时管理多个状态
 */

import React from 'react';
import useUrlState from '@ahooksjs/use-url-state';
import { View, Button } from 'react-native';

export function UseUrlState2() {
  const [state, setState] = useUrlState({ page: '1', pageSize: '10' });

  return (
    <View>
      <View>
        page: {state.page}
        <View style={{ paddingLeft: 8 }}>
          <Button
            title='+'
            onPress={() => {
              setState((s) => ({ page: Number(s.page) + 1 }));
            }}
          />
          <View style={{ marginHorizontal: 8, marginVertical: 0 }}>
            <Button
              title='-'
              onPress={() => {
                setState((s) => ({ page: Number(s.page) - 1 }));
              }}
            />
          </View>
          <Button
            title='reset'
            onPress={() => {
              setState({ page: undefined });
            }}
          />
        </View>
      </View>
      <br />
      <View>
        pageSize: {state.pageSize}
        <View style={{ paddingLeft: 8 }}>
          <Button
            title='+'
            onPress={() => {
              setState((s) => ({ pageSize: Number(s.pageSize) + 1 }));
            }}
          />
          <View style={{ marginHorizontal: 8, marginVertical: 0 }}>
            <Button
              title='-'
              onPress={() => {
                setState((s) => ({ pageSize: Number(s.pageSize) - 1 }));
              }}
            />
          </View>
          <Button
            title='reset'
            onPress={() => {
              setState({ pageSize: undefined });
            }}
          />
        </View>
      </View>
    </View>
  );
};