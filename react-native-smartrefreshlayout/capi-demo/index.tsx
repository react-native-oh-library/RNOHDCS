import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useState, useMemo, useCallback } from 'react';
import SmartRefreshLayoutAnyHeader from './SmartRefreshLayoutAnyHeader';
import SmartRefreshLayoutClassiscHeader from './SmartRefreshLayoutClassiscHeader'
import SmartRefreshLayoutDefaultHeader from './SmartRefreshLayoutDefaultHeader';
import SmartRefreshLayoutMaterialHeader from './SmartRefreshLayoutMaterialHeader';
import SmartRefreshLayoutStoreHouseHeader from './SmartRefreshLayoutStoreHouseHeader';
import SmartRefreshLayoutAutoRefreshExample from './SmartRefreshLayoutAutoRefreshExample'
interface IDemoItem {
  name: string;
  key: string;
  Component: () => React.JSX.Element
}

type TDemoCliCk = (item: IDemoItem) => void

const demos: IDemoItem[] = [
  { Component: SmartRefreshLayoutAnyHeader, name: 'AnyHeader', key: 'SmartRefreshLayoutAnyHeader' },
  { Component: SmartRefreshLayoutClassiscHeader, name: 'ClassiscHeader', key: 'SmartRefreshLayoutClassiscHeader' },
  { Component: SmartRefreshLayoutDefaultHeader, name: 'DefaultHeader', key: 'SmartRefreshLayoutDefaultHeader' },
  { Component: SmartRefreshLayoutMaterialHeader, name: 'MaterialHeader', key: 'SmartRefreshLayoutMaterialHeader' },
  { Component: SmartRefreshLayoutStoreHouseHeader, name: 'StoreHouseHeader', key: 'SmartRefreshLayoutStoreHouseHeader' },
  { Component: SmartRefreshLayoutAutoRefreshExample, name: 'AutoRefresh', key: 'SmartRefreshLayoutAutoRefreshExample' },
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
    height: '100%',
  },
  demoNav: {
    padding: 30,
    paddingTop: 50
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
    marginTop: 20
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
  },
  backButtonPanel: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 100,
    elevation: 100,
    width: 150,
    paddingBottom: 10,
    alignItems: 'center'
  },
});