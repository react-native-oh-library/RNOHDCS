/**
 * title: Custom query-string options
 * desc: The rules can be customized by passing in parseOptions and stringifyOptions.
 *
 * title.zh-CN: 自定义 query-string 配置
 * desc.zh-CN: 可以通过传入 parseOptions 和 stringifyOptions 自定义转换规则。
 */

import React from 'react';
import useUrlState from '@ahooksjs/use-url-state';
import { View } from 'react-native';
import { Button } from 'react-native';

export function UseUrlState3() {
  const [state, setState] = useUrlState(
    { ids: ['1', '2', '3'] },
    {
      parseOptions: {
        arrayFormat: 'comma',
      },
      stringifyOptions: {
        arrayFormat: 'comma',
      },
    },
  );

  return (
    <View>
      <Button
        title='变更数组state'
        onPress={() => {
          const arr = Array(3)
            .fill(1)
            .map(() => Math.floor(Math.random() * 10));
          setState({ ids: arr });
        }}
      />
      <View>ids: {JSON.stringify(state.ids)}</View>
    </View>
  );
};