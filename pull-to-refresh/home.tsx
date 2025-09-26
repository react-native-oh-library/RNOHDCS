import { Animated, Text, StyleSheet, Button } from 'react-native';
import React, { useState, useMemo, useCallback } from 'react';
import Default from './Default/index';
import Custom from './PullRefreshFlatList/index'
interface IDemoItem {
  name: string;
  key: string;
  Component: () => React.JSX.Element
}

type TDemoCliCk = (item: IDemoItem) => void

const demos: IDemoItem[] = [
  { Component: Default, name: '采用默认的刷新头，自动加载不开启', key: 'Default' },
  { Component: Custom, name: '采用自定义的刷新头，自动上拉加载开启', key: 'Custom' }
];

function Demo() {
  const [currentDemoKey, setCurrentDemoKey] = useState('');

  const demoNavClickHandle = useCallback<TDemoCliCk>(
    (item) => setCurrentDemoKey(item.key),
    []
  );
  const backClickHandle = useCallback(() => setCurrentDemoKey(''), []);

  const currentDemo = useMemo(() => {
    const target = demos.find((item) => item.key === currentDemoKey);
    console.log(target && target.key);
    if (target) return <target.Component />;
    return <Text>Select Demo</Text>;
  }, [currentDemoKey]);
  const demoMenu = useMemo(
    () =>
      demos.map((item, index) => (
        <Text
          style={styles.navItem}
          key={item.key}
          onPress={() => demoNavClickHandle(item)}>
          {index + 1}. {item.name}
        </Text>
      )),
    []
  );

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={styles.demoNav}><Text></Text>{demoMenu}</Animated.View>
      {currentDemoKey && <Animated.View style={styles.demoPanel}>{currentDemo}</Animated.View>}
      {currentDemoKey && (
        <Animated.View  style={styles.backButtonPanel}>
          <Button title="返回上一页" onPress={() => backClickHandle()}></Button>
        </Animated.View >)
        }
    </Animated.View>
  );
}


export default {
    displayName: 'pull-to-refresh',
    framework: 'React',
    category: 'UI',
    title: 'pull-to-refresh',
    documentationURL: 'pull-to-refresh',
    description: '',
    examples: [
      {
        title: 'pull-to-refresh',
        render: function (): any {
          return <Demo />;
        },
      },
    ],
  };
  

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  demoNav: {
  },
  navItem: {
    fontSize: 16,
    color: '#fff',
    padding: 6,
    textAlign: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    backgroundColor: "green",
    width: '100%',
    height: 60,
    borderRadius: 45,
  },
  demoPanel: {
    position: 'absolute',
    left: 0,
    top: -25,
    width: '100%',
    height: '100%',
    zIndex: 99,
    elevation: 99,
    backgroundColor: 'rgba(255,255,255, 1)',
  },
  backButtonPanel: {
    position: 'absolute',
    right: 0,
    bottom: 50,
    zIndex: 100,
    elevation: 100,
    width: 150,
    paddingBottom: 10,
    alignItems: 'center'
  },
});