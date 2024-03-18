/**
 * title: Basic usage
 * desc: The drop area can accept files, uri, text or one of the boxes below.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 拖拽区域可以接受文件，链接，文字，和下方的 box 节点。
 */

import React, { useRef, useState } from 'react';
import { useDrop, useDrag } from 'ahooks';
import { View, Alert } from 'react-native';

const DragItem = ({ data }: any) => {
  const dragRef = useRef(null);

  const [dragging, setDragging] = useState(false);

  useDrag(data, dragRef, {
    onDragStart: () => {
      setDragging(true);
    },
    onDragEnd: () => {
      setDragging(false);
    },
  });

  return (
    <View
      ref={dragRef}
      style={{
        borderWidth: 1,
        borderColor: '#e8e8e8',
        padding: 16,
        width: 80,
        marginRight: 16,
      }}
    >
      {dragging ? 'dragging' : `box-${data}`}
    </View>
  );
};

export function FoundationDrop() {
  const [isHovering, setIsHovering] = useState(false);

  const dropRef = useRef(null);

  useDrop(dropRef, {
    onText: (text, e) => {
      console.log(e);
      Alert.alert(`'text: ${text}' dropped`);
    },
    onFiles: (files, e) => {
      console.log(e, files);
      Alert.alert(`${files.length} file dropped`);
    },
    onUri: (uri, e) => {
      console.log(e);
      Alert.alert(`uri: ${uri} dropped`);
    },
    onDom: (content: string, e) => {
      Alert.alert(`custom: ${content} dropped`);
    },
    onDragEnter: () => setIsHovering(true),
    onDragLeave: () => setIsHovering(false),
  });

  return (
    <View>
      <View ref={dropRef}
        style={{
          borderWidth: 1,
          borderColor: '#e8e8e8',
          padding: 16,
        }}>
        {isHovering ? 'release here' : 'drop here'}
      </View>

      <View style={{ display: 'flex', marginTop: 8 }}>
        {['1', '2', '3', '4', '5'].map((e) => (
          <DragItem key={e} data={e} />
        ))}
      </View>
    </View>
  );
};
