import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TextInput } from 'react-native';
import DrawerLayout from 'react-native-drawer-layout-polyfill';
import dayjs from 'dayjs'
import ValueAssignmentDemo from './ValueAssignmentDemo.tsx'
import OperationDemo from './OperationDemo.tsx'
import RevealDemo from './RevealDemo.tsx'
import QueryDemo from './QueryDemo.tsx'
import PluginDemo from './PluginDemo.tsx'

const DayJsDemo = () => {
  const drawerLayoutRef = useRef(null)
  const [value, setValue] = useState(1)


  const open = () => {
   console.log('open')
    drawerLayoutRef.current?.openDrawer()
  }

  const close = (val: number) => {
    drawerLayoutRef.current?.closeDrawer()
    setValue(val)
  }

  const navigationView = (
    <View style={styles.navigationContainer}>
      <Button title="取值/赋值" onPress={() => close(1)} />
      <View style={styles.interval}></View>
      <Button title="操作" onPress={() => close(2)} />
      <View style={styles.interval}></View>
      <Button title="显示" onPress={() => close(3)} />
      <View style={styles.interval}></View>
      <Button title="查询" onPress={() => close(4)} />
      <View style={styles.interval}></View>
      <Button title="插件" onPress={() => close(5)} />
    </View>
  );


  return (

    <DrawerLayout
      ref={drawerLayoutRef}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => navigationView}
      drawerBackgroundColor="#ccc"
    >
      <View style={styles.container}>
        <Button title="打开弹框切换" onPress={() => open()} />
        <View style={styles.interval}></View>
        <ScrollView>
          {
            value === 1 ? <ValueAssignmentDemo /> :
              value === 2 ? <OperationDemo /> :
                value === 3 ? <RevealDemo /> :
                  value === 4 ? <QueryDemo /> : <PluginDemo />
          }
        </ScrollView>

      </View>
    </DrawerLayout>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    padding: 8
  },
  navigationContainer: {
    flex: 1,
    paddingTop: 50,
    padding: 8
  },
  textCommon: {
    marginBottom: 10,
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  interval: {
    marginBottom: 10,
  },
  viewBox: {
    width: '100%',
    borderWidth: 1,
    marginBottom: 2,
    padding: 5
  },
  viewButtonBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  formatLabel: {
    marginRight: 2,
    fontSize: 16,
    fontWeight: '700'
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  flexColCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700'
  },
  componentTitle: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 20
  },
  inputStyle: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderRadius: 10
  }
});

export default DayJsDemo;