/**
 * title: Listening content scrolling selection menu
 * desc: Pass the `callback` that is triggered when the callback of `IntersectionObserver` is called, so you can do some customization.
 *
 * title.zh-CN: 监听内容滚动选中菜单
 * desc.zh-CN: 传入 `callback`, 使得 `IntersectionObserver` 的回调被调用时，用户可以做一些自定义操作。
 */
import { useInViewport, useMemoizedFn } from 'ahooks';
import React, { useRef, useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView } from 'react-native';

const menus: any = ['menu-1', 'menu-2', 'menu-3'];
const content: any = {
  'menu-1': 'Content for menus 1',
  'menu-2': 'Content for menus 2',
  'menu-3': 'Content for menus 3',
};

export function MenuInViewport() {
  const menuRef = useRef<HTMLDivElement[]>([]);

  const [activeMenu, setActiveMenu] = useState(menus[0]);

  const callback = useMemoizedFn((entry) => {
    if (entry.isIntersecting) {
      const active = entry.target.getAttribute('id') || '';
      setActiveMenu(active);
    }
  });

  const handleMenuClick = (index: any) => {
    const contentEl = document.getElementById('content-scroll');
    const top = menuRef.current[index]?.offsetTop;

    contentEl?.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  useInViewport(menuRef.current, {
    callback,
    root: () => document.getElementById('parent-scroll'),
    rootMargin: '-50% 0px -50% 0px',
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: Dimensions.get('window').width * 0.3, backgroundColor: '#f0f0f0' }}>
          {menus.map((menu: any, index: any) => (
            <TouchableOpacity key={menu} onPress={() => handleMenuClick(index)}>
              <Text
                style={{
                  padding: 10,
                  textAlign: 'center',
                  backgroundColor: activeMenu === menu ? '#e0e0e0' : '',
                }}
              >
                {menu}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView
          ref={handleMenuClick}
          style={{ flex: 1 }}
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
          horizontal={false}
          showsVerticalScrollIndicator={true}
        >
          {menus.map((menu: any, index: any) => (
            <View
              key={menu}
              ref={menu}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: Dimensions.get('window').height,
              }}
            >
              <Text style={{ fontSize: 16 }}>{content[menu]}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>

  );
};
