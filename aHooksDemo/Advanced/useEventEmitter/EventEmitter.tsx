/**
 * title: Parent component shares a event
 * desc: The parent component creates a `focus$` event emitter, and passes it to its children. When calling `focus$.emit` in MessageBox, InputBox will get notified.
 *
 * title.zh-CN: 父组件向子组件共享事件
 * desc.zh-CN: 父组件创建了一个 `focus$` 事件，并且将它传递给了两个子组件。在 MessageBox 中调用 `focus$.emit` ，InputBox 组件就可以收到通知。
 */

import React, { useRef } from 'react';
import { useEventEmitter } from 'ahooks';
import { View, Text, Button, TextInput } from 'react-native';

const MessageBox = ({ focus$ }: { focus$: any }) => {
  return (
    <View style={{ paddingBottom: 24 }}>
      <Text>You received a message</Text>
      <Button
        title="Reply"
        onPress={() => {
          focus$.emit();
        }}
      />
    </View>
  );
};

const InputBox = ({ focus$ }: { focus$: any }) => {
  const inputRef: any = useRef(null);
  focus$.useSubscription(() => {
    inputRef.current.focus();
  });
  return <TextInput ref={inputRef} placeholder="Enter reply" style={{ width: '100%', padding: 4 }} />;
};

export function EventEmitter() {
  const focus$ = useEventEmitter();
  return (
    <View>
      <MessageBox focus$={focus$} />
      <InputBox focus$={focus$} />
    </View>
  );
}
