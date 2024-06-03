/**utton
 * title: Updating with callback
 * desc: When using the callback to update, the previous state can be received, and the return value will be automatically merged.
 *
 * title.zh-CN: 使用回调更新
 * desc.zh-CN: 通过回调进行更新，可以获取上一次的状态，并且也会自动合并返回的对象。
 */

import React from 'react';
import { useSetState } from 'ahooks';
import { Text,View ,Button} from 'react-native';

interface State {
  hello: string;
  count: number;
}

export function SetState2(){
  const [state, setState] = useSetState<State>({
    hello: 'world',
    count: 0,
  });

  return (
    <View>
      <Text>{JSON.stringify(state, null, 2)}</Text>
      <Text>
        <Button title="count + 1" onPress={() => setState((prev) => ({ count: prev.count + 1 }))}/>
      </Text>
    </View>
  );
};