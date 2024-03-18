/**
 * title: Default usage
 * desc: Load js file, such as [test-external-script.js](/useExternal/test-external-script.js)
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 加载 js 文件，例如引入 [test-external-script.js](/useExternal/test-external-script.js)
 */

import React from 'react';
import { useExternal } from 'ahooks';
import { View, Text } from 'react-native';

export function FoundationExternal() {
  const status = useExternal('./test-external-script.js', {
    js: {
      async: true,
    },
  });

  return (
    <View>
      <Text>
        Status: <Text>{status}</Text>
      </Text>
      <Text>
        Response: <Text>{status === 'ready' ? window.TEST_SCRIPT?.start() : '-'}</Text>
      </Text>
    </View>
  );
};
