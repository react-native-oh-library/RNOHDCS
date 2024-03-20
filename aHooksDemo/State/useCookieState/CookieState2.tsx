/**
 * title: SetState can receive function
 * desc: Function updater is also acceptable with useCookieState's setState，similar to how useState is used.
 *
 * title.zh-CN: setState 可以接收函数
 * desc.zh-CN: useCookieState 的 setState 可以接收 function updater，就像 useState 那样。
 */

import React from 'react';
import { useCookieState } from 'ahooks';
import { Button,View ,Text} from 'react-native';
import { StyleSheet } from 'react-native';

export function CookieState2() {
  const [value, setValue] = useCookieState('useCookieStateUpdater', {
    defaultValue: '0',
  });

  return (
    <View>
      <Text>{value}</Text>
      <View style={styles.container}>
      <Button title="inc +" onPress={() => setValue((v) => String(Number(v) + 1))} />
      </View>
      <View style={styles.container}>
      <Button title="dec -" onPress={() => setValue((v) => String(Number(v) - 1))} />
      </View>
      <Button title="reset" onPress={() => setValue('0')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
});