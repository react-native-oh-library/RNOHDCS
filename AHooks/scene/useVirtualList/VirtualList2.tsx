/**
 * title: Dynamic item height
 * desc: Specify item height dynamically.
 *
 * title.zh-CN: 动态元素高度
 * desc.zh-CN: 动态指定每个元素的高度
 */

import React, { useMemo, useRef } from 'react';
import { useVirtualList } from 'ahooks';
import { TextInput, View } from 'react-native';
import { Button } from 'react-native';

export function VirtualList2(){
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  const originalList = useMemo(() => Array.from(Array(99999).keys()), []);

  const [value, onChange] = React.useState<number>(0);

  const [list, scrollTo] = useVirtualList(originalList, {
    containerTarget: containerRef,
    wrapperTarget: wrapperRef,
    itemHeight: (i) => (i % 2 === 0 ? 42 + 8 : 84 + 8),
    overscan: 10,
  });

  return (
    <View>
      <View style={{marginBottom: 16 }}>
        <TextInput
          style={{ width: 120 }}
          placeholder="line number"
          onChangeText={(text) => onChange(Number(text))}
          value={value}
        />
        <View style={{ marginLeft: 8 }}>
        <Button
          title="scroll to"
          onPress={() => {
            scrollTo(Number(value));
          }}
        />
        </View>
      </View>
      <View ref={containerRef} style={{ height: 300 }}>
        <View ref={wrapperRef}>
          {list.map((ele) => (
            <View
              style={{
                height: ele.index % 2 === 0 ? 42 : 84,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderBlockColor:'#e8e8e8',
                borderWidth:1,
                borderStyle:"solid",
                marginBottom: 8,
              }}
              key={ele.index}
            >
              Row: {ele.data} size: {ele.index % 2 === 0 ? 'small' : 'large'}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};