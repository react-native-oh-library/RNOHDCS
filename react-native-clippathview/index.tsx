import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useState, useMemo, useCallback } from 'react';
import BasicExample from './BasicExample';
import ViewBoxExample from './ViewBoxExample'
import StrokeExample from './StrokeExample';
import TranslateExample from './TranslateExample';
import RotateExample from './RotateExample';
import ScaleExample from './ScaleExample';
import ShunFengExample from './ShunFengExample';

interface IDemoItem {
  name: string;
  key: string;
  Component: () => React.JSX.Element
}

type TDemoCliCk = (item: IDemoItem) => void

const demos: IDemoItem[] = [
  { Component: BasicExample, name: 'basic', key: 'BasicExample' },
  { Component: ViewBoxExample, name: 'viewBox', key: 'ViewBoxExample' },
  { Component: StrokeExample, name: 'stroke', key: 'StrokeExample' },
  { Component: TranslateExample, name: 'translate', key: 'TranslateExample' },
  { Component: RotateExample, name: 'rotate', key: 'RotateExample' },
  { Component: ScaleExample, name: 'scale', key: 'ScaleExample' },
  { Component: ShunFengExample, name: 'shunfeng', key: 'ShunFengExample' },
];

export default function Demo() {
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
    <View style={styles.container}>
      
      <View style={styles.demoNav}><Text></Text>{demoMenu}</View>
      {currentDemoKey && <View style={styles.demoPanel}>{currentDemo}</View>}
      {currentDemoKey && (
        <View style={styles.backButtonPanel}>
          <Button title="Back" onPress={() => backClickHandle()}></Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '90%',
  },
  demoNav: {
    padding: 30,
    paddingTop: 50
  },
  navItem: {
    fontSize: 14,
    color: '#00f',
    padding: 6
  },
  demoPanel: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 99,
    elevation: 99,
    backgroundColor: 'rgba(255,255,255, 1)',
    // paddingTop: 60,
    padding: 16,
    paddingTop: 50
  },
  backButtonPanel: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 100,
    elevation: 100,
    width: '100%',
    paddingBottom: 10,
    alignItems: 'center',
  },
});
