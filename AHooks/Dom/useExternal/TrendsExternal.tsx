/**
 * title: Load style dynamically
 * desc: Load css file, such as [bootstrap-badge.css](/useExternal/bootstrap-badge.css)
 *
 * title.zh-CN: 动态加载样式
 * desc.zh-CN: 加载 css 文件，例如引入 [bootstrap-badge.css](/useExternal/bootstrap-badge.css)
 */

import { useExternal } from 'ahooks';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { bootstrapBadge } from './bootstrap-badge'

export function TrendsExternal() {
  const [path, setPath] = useState('./bootstrap-badge.js');

  const status = useExternal(path);

  return (
    <View>
      <Text>
        Status: <Text>{status}</Text>
      </Text>
      <View style={styles.badgeContainer}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Text style={[bootstrapBadge.badge, bootstrapBadge.badgePill, bootstrapBadge.primary]}>Primary</Text>
          <Text style={[bootstrapBadge.badge, bootstrapBadge.badgePill, bootstrapBadge.secondary]}>Secondary</Text>
          <Text style={[bootstrapBadge.badge, bootstrapBadge.badgePill, bootstrapBadge.success]}>Success</Text>
          <Text style={[bootstrapBadge.badge, bootstrapBadge.badgePill, bootstrapBadge.danger]}>Danger</Text>
          <Text style={[bootstrapBadge.badge, bootstrapBadge.badgePill, bootstrapBadge.warning]}>Warning</Text>
          <Text style={[bootstrapBadge.badge, bootstrapBadge.badgePill, bootstrapBadge.info]}>Info</Text>
          <Text style={[bootstrapBadge.badge, bootstrapBadge.badgePill, bootstrapBadge.light]}>Light</Text>
          <Text style={[bootstrapBadge.badge, bootstrapBadge.badgePill, bootstrapBadge.dark]}>Dark</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => setPath('')}>
        <Text>Unload</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setPath('./bootstrap-badge.js')}>
        <Text>Load</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
  },
});
