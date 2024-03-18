/**
 * title: Basic usage
 * desc: Use ref to set area that needs monitoring. The focus can be switched by click the outside with the mouse, or using keys such as `tab` on the keyboard.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 使用 ref 设置需要监听的区域。可以通过鼠标点击外部区域，或者使用键盘的 `tab` 等按键来切换焦点。
 */

import React, { useRef } from 'react';
import { useFocusWithin } from 'ahooks';
import { message } from 'antd';
import { View, Text, TextInput } from 'react-native';

export function FullscreenFocusWithin() {
  const ref = useRef(null);
  const isFocusWithin = useFocusWithin(ref, {
    onFocus: () => {
      message.info('focus');
    },
    onBlur: () => {
      message.info('blur');
    },
  });
  return (

    <View>
      <View
        ref={ref}
        style={{
          padding: 16,
          backgroundColor: isFocusWithin ? 'red' : 'transparent',
          borderWidth: 1,
          borderColor: 'gray',
        }}
      >
        <View style={{ display: 'flex', flexWrap: 'nowrap' }}>
          <Text>First Name:</Text>
          <TextInput style={{ height: 10, backgroundColor: isFocusWithin ? 'white' : 'transparent', borderWidth: 1 }} />
        </View>

        <View style={{ display: 'flex', flexWrap: 'nowrap' }}>
          <Text>Last Name:</Text>
          <TextInput style={{ height: 10, backgroundColor: isFocusWithin ? 'white' : 'transparent', borderWidth: 1 }} />
        </View>

      </View>
      <Text>isFocusWithin: {JSON.stringify(isFocusWithin)}</Text>
    </View>
  );

};
