/**
 * title: Default usage
 * desc: render 100,000 items in a list.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 渲染大量数据
 */

import React, { useMemo, useRef } from 'react';
import { useVirtualList } from 'ahooks';
import { View } from 'react-native';

export function VirtualList1(){
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  const originalList = useMemo(() => Array.from(Array(99999).keys()), []);

  const [list] = useVirtualList(originalList, {
    containerTarget: containerRef,
    wrapperTarget: wrapperRef,
    itemHeight: 60,
    overscan: 10,
  });
  return (
    <>
      <View  style={{  borderWidth:1,borderStyle:"solid" }} ref={containerRef}>
        <View ref={wrapperRef}>
          {list.map((ele) => (
            <View
              style={{
                height: 52,
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
              Row: {ele.data}
            </View>
          ))}
        </View>
      </View>
    </>
  );
};