/**
 * title: Support multiple DOM
 * desc: Support pass multiple DOM elements.
 *
 * title.zh-CN: 支持多个 DOM 对象
 * desc.zh-CN: 支持传入多个目标对象。
 */

import React, { useState, useRef } from 'react';
import { useClickAway } from 'ahooks';
import { TouchableOpacity, Text, View } from 'react-native';


export function MultipleClickAway() {
  const [counter, setCounter] = useState(0);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  useClickAway(() => {
    setCounter((s) => s + 1);
  }, [ref1, ref2]);

  return (

    <View>
      <TouchableOpacity ref={ref1}>
        <Text>box1</Text>
      </TouchableOpacity>
      <TouchableOpacity ref={ref2}>
        <Text>box2</Text>
      </TouchableOpacity>
      <Text>counter: {counter}</Text>
    </View>
  );
};
