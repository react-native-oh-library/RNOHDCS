/**
 * title: Translate user text selection
 * desc: Use Antd.Popover to translate user text selection
 *
 * title.zh-CN: 划词翻译
 * desc.zh-CN: 配合 Popover 做划词翻译
 */

import { useRequest, useTextSelection } from 'ahooks';
import { Popover, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';

const getResult = (keyword: string): Promise<string> => {
  const trimedText = keyword.trim() !== '';
  if (!trimedText) {
    return Promise.resolve('');
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(`[translate result] ${keyword}`), 2000);
  });
};

export function TextSelection2(){
  const {
    text = '',
    left = 0,
    top = 0,
    height = 0,
    width = 0,
  } = useTextSelection(() => document.querySelector('#translate-dom'));

  const [open, setOpen] = useState<boolean>(false);

  const { data, run, loading } = useRequest(getResult, {
    manual: true,
  });

  useEffect(() => {
    if (text.trim() === '') {
      setOpen(false);
      return;
    }
    setOpen(true);
    run(text);
  }, [text]);

  return (
    <View>
      <Text id="translate-dom" style={{ padding: 20, borderWidth:1,borderStyle:"solid"}}>
        Translation of this paragraph;Translation of this paragraph;Translation of this paragraph;
      </Text>
      <Popover
        content={<Spin spinning={loading}>{loading ? 'Translating……' : data}</Spin>}
        open={open}
      >
      </Popover>
    </View>
  );
};