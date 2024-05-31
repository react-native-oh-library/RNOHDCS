import React, { useState } from 'react';  
import { View,StyleSheet } from 'react-native';  
import {
  Badge,
  Drawer,
  Switch,
  Text,
  TouchableRipple,
} from 'react-native-paper';

const DrawerItemsData  = [

  {
    label: 'Inbox',
    icon: 'inbox',
    key: 0,
    right: () => <Text variant="labelLarge">44</Text>,
  },
  {
    label: 'Starred',
    icon: 'star',
    key: 1,
    right: ({ color }: { color: string }) => (
      <Badge
        visible
        size={8}
        style={[styles.badge, { backgroundColor: color }]}
      />
    ),
  },
  { label: 'Sent mail', icon: 'send', key: 2 },
  { label: 'Colored label', icon: 'palette', key: 3 },
  {
    label: 'A very long title that will be truncated',
    icon: 'delete',
    key: 4,
    right: () => <Badge visible size={8} style={styles.badge} />,
  }
]
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

export function DrawerText() {
  const [drawerItemIndex, setDrawerItemIndex] = useState(0);
  const _setDrawerItem = (index: number) => setDrawerItemIndex(index);

  return (
    <Tester>
      <TestSuite name='Drawer' >
          <TestCase itShould='Example items'>
            <Drawer.Section >
              {DrawerItemsData.map((props, index) => (
                <Drawer.Item
                  {...props}
                  key={props.key}
                  active={drawerItemIndex === index}
                  onPress={() => _setDrawerItem(index)}
                />
              ))}
            </Drawer.Section>
          </TestCase>
          <TestCase itShould='Preferences'>
            <Drawer.Section>
                <TouchableRipple>
                    <View style={[styles.preference]}>
                    <Text variant="labelLarge">Use device colors *</Text>
                        <View pointerEvents="none">
                          <Switch />
                        </View>
                    </View>
                  </TouchableRipple>
                  <TouchableRipple >
                    <View style={[styles.preference]}>
                      <Text variant="labelLarge">Dark Theme</Text>
                      <View pointerEvents="none">
                        <Switch/>
                      </View>
                    </View>
                  </TouchableRipple>
                  <TouchableRipple >
                      <View style={[styles.preference]}>
                        <Text variant="labelLarge">RTL</Text>
                        <View pointerEvents="none">
                          <Switch />
                        </View>
                      </View>
                  </TouchableRipple>
                  <TouchableRipple >
                    <View style={[styles.preference]}>
                      <Text variant="labelLarge">MD 2</Text>
                      <View pointerEvents="none">
                        <Switch />
                      </View>
                    </View>
                  </TouchableRipple>
            </Drawer.Section>
          </TestCase>
      </TestSuite>
    </Tester>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  v3Preference: {
    height: 56,
    paddingHorizontal: 28,
  },
  badge: {
    alignSelf: 'center',
  },
  collapsedSection: {
    marginTop: 16,
  },
  annotation: {
    marginHorizontal: 24,
    marginVertical: 6,
  },
});

export default DrawerText;