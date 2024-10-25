import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { BottomNavigation, Icon } from 'react-native-material-ui';

const BottomNavigationDome = () => {
  const [state, setState] = useState({ active: 'today' });
  return (
    <>
      <Tester>
        <ScrollView style={{ marginBottom: 100 }}>
          <TestSuite name="该组件是一个整体属性需要一起验证">
            <TestCase itShould="该组件是一个整体属性需要一起验证">
              <Text>该组件是一个整体属性需要一起验证</Text>
            </TestCase>
          </TestSuite>
          <TestSuite name="Bottom navigation(底部导航栏，该组件是一个整体，需一起验证所有属性) BottomNavigation">
            <TestCase itShould="涉及到的属性有：active 选定/活动选项卡的键 children 导航栏的内容 style 导航栏的样式：{backgroundColor: '#666'}">
              <View style={styles.rowContainer}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>{state.active}</Text>
                  <Icon name={state.active} size={54} />
                </View>
                <BottomNavigation
                  active={state.active}
                  style={{ container: { backgroundColor: '#666' } }}
              >
                  <BottomNavigation.Action
                    active
                    key="today"
                    icon="today"
                    label="today"
                    onPress={() => setState({ active: 'today' })}
                  />
                  <BottomNavigation.Action
                    key="people"
                    icon="people"
                    label="people"
                    onPress={() => setState({ active: 'people' })}
                  />
                  <BottomNavigation.Action
                    key="bookmark-border"
                    icon="bookmark-border"
                    label="book"
                    onPress={() => setState({ active: 'bookmark-border' })}
                  />
                  <BottomNavigation.Action
                    key="settings"
                    icon="settings"
                    label="settings"
                    onPress={() => setState({ active: 'settings' })}
                  />
                </BottomNavigation>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Bottom navigation(底部导航栏，该组件是一个整体，需一起验证所有属性 BottomNavigation.ActionProps">
            <TestCase itShould="涉及到的属性为:icon：图标将作为操作的内容呈现在标签上方 分别有：today，people,bookmark-border,settings 
                                              label:会作为action的内容渲染在图标下方 分别有：today，people,bookmark-border,settings 
                                              active 给一个组件设置为活动状态 onPress 触发回调 点击触发切换活动状态的回调 style 设置 
                                              样式为背景为红色，活动字体颜色为蓝色 backgroundColor: 'red' color: 'blue'">
              <View style={styles.rowContainer}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>{state.active}</Text>
                  <Icon name={state.active} size={54} />
                </View>
                <BottomNavigation
                  active={state.active}
                  style={{ container: { backgroundColor: '#566' } }}>
                  
                  <BottomNavigation.Action
                    active
                    key="today"
                    icon="today"
                    label="today"
                    onPress={() => setState({ active: 'today' })}
                    style={{ container: { backgroundColor: 'red' } }}
                  />
                  <BottomNavigation.Action
                    key="people"
                    icon="people"
                    label="people"
                    onPress={() => setState({ active: 'people' })}
                    style={{ active: { color: 'blue' } }}
                  />
                  <BottomNavigation.Action
                    key="bookmark-border"
                    icon="bookmark-border"
                    label="book"
                    onPress={() => setState({ active: 'bookmark-border' })}
                    style={{ active: { color: 'blue' } }}
                  />
                  <BottomNavigation.Action
                    key="settings"
                    icon="settings"
                    label="settings"
                    onPress={() => setState({ active: 'settings' })}
                  />
                </BottomNavigation>
              </View>
            </TestCase>
          </TestSuite>
        </ScrollView>
      </Tester>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
  },
  rowContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: 500,
    marginTop: 20,
  },
  badgeContainer: {
    paddingLeft: 24,
  },
  scrollView: {
    marginBottom: 70,
  },
});

export default BottomNavigationDome;
