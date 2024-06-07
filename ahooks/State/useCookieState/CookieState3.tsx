/**
 * title: Use the option property to configure Cookie
 * desc: 'Available options: defaultValue、expires、path、domain、secure、sameSite etc.'
 *
 * title.zh-CN: 使用 option 配置 Cookie
 * desc.zh-CN: 可配置属性：默认值、有效时间、路径、域名、协议、跨域等，详见 Options 文档。
 */

import React from 'react';
import { useCookieState } from 'ahooks';
import { Text, View } from 'react-native';
import { Button } from 'react-native';

export function CookieState3() {
  const [value, setValue]: any = useCookieState('useCookieStateOptions', {
    defaultValue: '0',
  });
  return (
    <View>
      <Text>{value}</Text>
      <View style={{ marginRight: 16 }}>
        <Button
          title="inc + (10s expires)"
          onPress={() =>
            setValue((v: any) => String(Number(v) + 1), {
              expires: (() => new Date(+new Date() + 10000))(),
            })
          }
        />
      </View>
      <View style={{ marginRight: 16 }}>
      <Button
        title="dec - (10s expires)"
        onPress={() =>
          setValue((v: any) => String(Number(v) - 1), {
            expires: (() => new Date(+new Date() + 10000))(),
          })
        }
      />
      </View>
      <Button title="reset" onPress={() => setValue('0')}/>
    </View>
  );
}