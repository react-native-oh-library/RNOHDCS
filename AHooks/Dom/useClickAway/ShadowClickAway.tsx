/**
 * title: Support shadow DOM
 * desc: Add the addEventListener to shadow DOM root instead of the document
 *
 * title.zh-CN: 支持 shadow DOM
 * desc.zh-CN: 将 addEventListener 添加到 shadow DOM root 
 */

import React, { useState, useRef } from 'react';
import { useClickAway } from 'ahooks';
import root from 'react-shadow';
import { TouchableOpacity, Text, View } from 'react-native';


export function ShadowClickAway() {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);
  useClickAway(
    () => {
      setCounter((s) => s + 1);
    },
    ref,
    ['click', 'contextmenu'],
  );

  return (
    <root.div>
      <View>
      <TouchableOpacity ref={ref}>
        <Text>box</Text>
      </TouchableOpacity>
      <Text>counter: {counter}</Text>
    </View>
    </root.div>
  );
};
