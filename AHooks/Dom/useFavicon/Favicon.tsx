/**
 * title: Basic usage
 * desc: Set favicon
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 设置 favicon
 */

import React, { useState } from 'react';
import { useFavicon } from 'ahooks';
import { View, Text, Button } from 'react-native';

export const DEFAULT_FAVICON_URL = 'https://ahooks.js.org/simple-logo.svg';

export const GOOGLE_FAVICON_URL = 'https://www.google.com/favicon.ico';

export function Favicon() {
  const [url, setUrl] = useState<string>(DEFAULT_FAVICON_URL);

  useFavicon(url);

  return (
    <View>
      <Text>Current Favicon: {url}</Text>
      <Button
        title="Change To Google Favicon"
        onPress={() => setUrl(GOOGLE_FAVICON_URL)}
      />
      <Button
        title="Back To AHooks Favicon"
        onPress={() => setUrl(DEFAULT_FAVICON_URL)}
      />
    </View>
  );
};
