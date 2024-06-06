import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import dayjs from 'dayjs'


const RevealDemo = () => {

  const dateDiff = (type: string) => {
    const date1 = dayjs('2019-01-25')
    const date2 = dayjs('2018-06-05')
    const ms = date1.diff(date2) // 20214000000 默认单位是毫秒
    const dd = date1.diff(date2, 'd')
    return type === 'ms' ? ms : dd
  }

  return (
    <View style={styles.container}>
      <Text style={styles.componentTitle}>RevealDemo:显示</Text>
      <View style={styles.viewBox}>
        <Text style={styles.headerTitle}>Format, 根据传入的占位符返回格式化后的日期。</Text>
        <View>
          <View style={styles.flexRowCenter}>
            <Text style={styles.formatLabel}>YYYY:</Text>
            <Text >{dayjs().format('YYYY')}</Text>
          </View>
          <View style={styles.flexRowCenter}>
            <Text style={styles.formatLabel}>MM:</Text>
            <Text >{dayjs().format('MM')}</Text>
          </View>
          <View style={styles.flexRowCenter}>
            <Text style={styles.formatLabel}>DD:</Text>
            <Text >{dayjs().format('DD')}</Text>
          </View>
        </View>
      </View>

      <View style={styles.viewBox}>
        <Text style={styles.headerTitle}>Difference, 返回指定单位下两个日期时间之间的差异。</Text>
        <View>
          <View style={styles.flexColCenter}>
            <Text style={styles.formatLabel}>2018-06-05 - 2019-01-25</Text>
            <Text >时间相差{dateDiff('ms')}毫秒</Text>
            <Text >时间相差{dateDiff('day')}天</Text>
          </View>
        </View>
      </View>
      <View style={styles.viewBox}>
        <Text style={styles.headerTitle}>Unix 时间戳</Text>
        <View>
          <View style={styles.flexColCenter}>
            <Text >Unix 时间戳（Unix Timestamp）定义为从UTC/GMT的1970年1月1日0时0分0秒开始所经过的秒数/毫秒数</Text>
            <Text >{dayjs().valueOf()}毫秒</Text>
            <Text >{dayjs().unix()}秒</Text>
          </View>
        </View>
      </View>
      <View style={styles.viewBox}>
        <Text style={styles.headerTitle}>月份中天数</Text>
        <View>
          <View style={styles.flexColCenter}>
            <Text >当月有{dayjs().daysInMonth()}天</Text>
          </View>
        </View>
      </View>
      <View style={styles.viewBox}>
        <Text style={styles.headerTitle}>获取js原生Date对象</Text>
        <View>
          <View style={styles.flexColCenter}>
            <Text >调用getFullYear获取年份：{dayjs().toDate().getFullYear()}</Text>
            <Text >调用getFullYear获取分钟数：{dayjs().toDate().getMinutes()}</Text>
          </View>
        </View>
      </View>
      <View style={styles.viewBox}>
        <Text style={styles.headerTitle}>序列化为 ISO 8601 格式的字符串</Text>
        <View>
          <View style={styles.flexColCenter}>
            <Text >获取当前时间的json格式：{dayjs().toJSON()}</Text>
          </View>
        </View>
      </View>
      <View style={styles.viewBox}>
        <Text style={styles.headerTitle}>返回一个 ISO 8601 格式的字符串</Text>
        <View>
          <View style={styles.flexColCenter}>
            <Text >获取当前时间的json格式：{dayjs().toISOString()}</Text>
          </View>
        </View>
      </View>
      <View style={styles.viewBox}>
        <Text style={styles.headerTitle}>返回包含时间信息的 string </Text>
        <View>
          <View style={styles.flexColCenter}>
            <Text >字符串格式时间：{dayjs().toString()}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    padding: 15
  },
  navigationContainer: {
    flex: 1,
    paddingTop: 50,
    padding: 0
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
    marginBottom: 10,
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

export default RevealDemo