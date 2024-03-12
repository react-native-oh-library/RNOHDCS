import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import dayjs from 'dayjs'


const ValueAssignmentDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.componentTitle}>ValueAssignmentDemo: 取值/赋值</Text>
      <Text style={styles.textCommon}>获取或设置毫秒：{dayjs().millisecond()}</Text>
      <Text style={styles.textCommon}>获取或设置秒：{dayjs().second()}</Text>
      <Text style={styles.textCommon}>获取或设置分钟：{dayjs().minute()}</Text>
      <Text style={styles.textCommon}>获取或设置小时：{dayjs().hour()}</Text>
      <Text style={styles.textCommon}>获取或设置月份里的日期：{dayjs().date()}</Text>
      <Text style={styles.textCommon}>获取或设置星期几：{dayjs().day()}</Text>
      <Text style={styles.textCommon}>获取或设置月份：{dayjs().month()}</Text>
      <Text style={styles.textCommon}>获取或设置年份。：{dayjs().year()}</Text>
      <Text style={styles.textCommon}>从Dayjs对象中获取相应信息的 getter：年{dayjs().get('year')} 月{dayjs().get('month')}</Text>
    </View>
  )
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
export default ValueAssignmentDemo