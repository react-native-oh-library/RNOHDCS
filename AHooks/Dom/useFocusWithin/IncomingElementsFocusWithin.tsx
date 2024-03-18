/**
 * title: Pass in DOM element
 * desc: Pass in a function that returns the DOM element.
 *
 * title.zh-CN: 传入 DOM 元素
 * desc.zh-CN: 传入 function 并返回一个 dom 元素。
 */

import React, { useState, useRef, useEffect } from 'react';
import { useFocusWithin } from 'ahooks';
import { StyleSheet, Text, View } from 'react-native';

export function IncomingElementsFocusWithin() {
  const focusAreaRef = useRef(null);
  const [isFocusWithin, setIsFocusWithin] = useState(false);

  useFocusWithin(focusAreaRef, (visible) => {
    setIsFocusWithin(visible);
  });

  return (
    <View>
      <View
        ref={focusAreaRef}
        style={{
          padding: 16,
          backgroundColor: isFocusWithin ? 'red' : '',
        }}
      >
        <Text>
          First Name: <input />
        </Text>
        <Text >
          Last Name: <input />
        </Text>
      </View>
      <p>isFocusWithin: {JSON.stringify(isFocusWithin)}</p>
    </View>
  );
};

