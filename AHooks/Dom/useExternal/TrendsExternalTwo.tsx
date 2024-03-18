/**
 * title: Load style dynamically
 * desc: Load css file, such as [bootstrap-badge.css](/useExternal/bootstrap-badge.css)
 *
 * title.zh-CN: 动态加载样式
 * desc.zh-CN: 加载 css 文件，例如引入 [bootstrap-badge.css](/useExternal/bootstrap-badge.css)
 */

import { useExternal } from 'ahooks';
import React, { useState } from 'react';
import { bootstrapBadge } from './bootstrap-badge';
import { View, Text, StyleSheet, Button } from 'react-native';


export function TrendsExternalTwo() {
  const [path, setPath] = useState('');
  const status = useExternal(path);

  const [path2, setPath2] = useState('');
  const status2 = useExternal(path2);

  return (
    <View>
      <View style={styles.badgeContainer}>
        <Text style={[bootstrapBadge.badge, bootstrapBadge.badgePill, bootstrapBadge.primary]}>Primary</Text>
        <Text style={[bootstrapBadge.badge, bootstrapBadge.badgePill, bootstrapBadge.secondary]}>Secondary</Text>
        <Text style={[bootstrapBadge.badge, bootstrapBadge.badgePill, bootstrapBadge.success]}>Success</Text>
        <Text style={[bootstrapBadge.badge, bootstrapBadge.badgePill, bootstrapBadge.danger]}>Danger</Text>
        <Text style={[bootstrapBadge.badge, bootstrapBadge.badgePill, bootstrapBadge.warning]}>Warning</Text>
        <Text style={[bootstrapBadge.badge, bootstrapBadge.badgePill, bootstrapBadge.info]}>Info</Text>
        <Text style={[bootstrapBadge.badge, bootstrapBadge.badgePill, bootstrapBadge.light]}>Light</Text>
        <Text style={[bootstrapBadge.badge, bootstrapBadge.badgePill, bootstrapBadge.dark]}>Dark</Text>
      </View>

      <Text>第一个</Text>
      <Text>Status: {status}</Text>
      <Button title="Unload" onPress={() => setPath('')} />
      <Button title="Load" onPress={() => setPath('./bootstrap-badge.js')} />

      <Text>第二个</Text>
      <Text>Status: {status2}</Text>
      <Button title="Unload" onPress={() => setPath2('')} />
      <Button title="Load" onPress={() => setPath2('./bootstrap-badge.js')} />
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
