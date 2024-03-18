/**
 * title: Custom DOM
 * desc: By default, listen for events on the window. You can also pass in a DOM to set listen area. such as the common listening for input box events.
 *
 * title.zh-CN: 自定义 DOM
 * desc.zh-CN: |
 *  默认监听挂载在 window 上的事件，你也可以传入 DOM 指定监听区域。
 *
 *  如常见的监听输入框事件，支持多种 DOM 指定方式。
 */

import React, { useState, useRef } from 'react';
import { useKeyPress } from 'ahooks';
import { View, Text, TextInput } from 'react-native';

export function CustomInputKeyPress() {
  const inputRef = useRef(null);

  const [text, setText] = useState('');
  const [textRef, setTextRef] = useState('');
  const [textSync, setTextSync] = useState('');
  useKeyPress(
    'enter',
    (event: any) => {
      const { value } = event.target;
      setText(value);
    },
    {
      events: ['keyup'],
      target: inputRef,
    },
  );

  useKeyPress(
    'enter',
    (event: any) => {
      const { value } = event.target;
      setTextRef(value);
    },
    {
      target: inputRef,
    },
  );

  // Make sure the DOM exists
  useKeyPress(
    () => true,
    (event: any) => {
      const { value } = event.target;
      setTextSync(value);
    },
    {
      events: ['keyup'],
      target: inputRef,
    },
  );

  return (

    <View>
      <View>
        <Text>Input and pressing enter: {text}</Text>
        <TextInput style={{ width: 300, marginRight: 24 }} onKeyPress={(event) => setText(event.nativeEvent.key)} />
      </View>
      <View style={{ marginTop: 24 }}>
        <Text>Input and pressing enter: {textRef}</Text>
        <TextInput ref={inputRef} style={{ width: 300, marginRight: 24 }} onKeyPress={(event) => setTextRef(event.nativeEvent.key)} />
      </View>
      <View style={{ marginTop: 24 }}>
        <Text>Input after enter change: {textSync}</Text>
        <TextInput id="input2" style={{ width: 300, marginRight: 24 }} onKeyPress={(event) => setTextSync(event.nativeEvent.key)} />
      </View>
    </View>
  );
};
