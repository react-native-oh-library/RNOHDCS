import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import dayjs from 'dayjs'

const QueryDemo = () => {
  const [value, setValue] = useState('');

  const [isBeforeQueryBool, setIsBeforeQueryBool] = useState(false)
  const [isSameQueryBool, setIsSameQueryBool] = useState(false);
  const [isAfterQueryBool, setIsAfterQueryBool] = useState(false);


  const handleQuery = (type: string) => {
    if (value === '') return
    switch (type) {
      case 'isBefore':
        setIsBeforeQueryBool(dayjs(dayjs().format('YYYY-MM-DD')).isBefore(dayjs(value)))
        break;
      case 'isSame':
        setIsSameQueryBool(dayjs(dayjs().format('YYYY-MM-DD')).isSame(dayjs(value)))
        break;
        case 'isAfter':
        setIsAfterQueryBool(dayjs(dayjs().format('YYYY-MM-DD')).isAfter(dayjs(value)))
          break;
      default:
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.componentTitle}>QueryDemo:查询</Text>
      <Text style={styles.textCommon}>输入时间戳或者'xxxx-xx-xx'查询，例如：2023-01-15</Text>
      <Text style={styles.textCommon}>A 时间表示当前时间， B 时间表示输入时间</Text>
      <View style={styles.flexRowCenter}>
        <Text style={styles.formatLabel}>输入B时间:</Text>
        <TextInput
          style={[styles.inputStyle, { marginBottom: 20 }]}
          onChangeText={text => setValue(text)}
          value={value}
        />
      </View>
      <View style={styles.viewBox}>
        <View style={styles.flexRowCenter}>
          <Text style={[styles.textCommon, {marginRight:20}]}>Is Before。A时间是否在B时间之前</Text>
          <View style={styles.flexRowCenter}>
            <Button title="查询" onPress={() => handleQuery('isBefore')} />
          </View>
        </View>
        <Text style={styles.textCommon}><Text style={styles.formatLabel}>{isBeforeQueryBool ? '在' : '不在'}</Text></Text>
      </View>

      <View style={styles.viewBox}>
        <View style={styles.flexRowCenter}>
          <Text style={[styles.textCommon, {marginRight:20}]}>Is After。A时间是否在B时间之后</Text>
          <View style={styles.flexRowCenter}>
            <Button title="查询" onPress={() => handleQuery('isAfter')} />
          </View>
        </View>
        <Text style={styles.textCommon}><Text style={styles.formatLabel}>{isAfterQueryBool ? '在' : '不在'}</Text></Text>
      </View>

      <View style={styles.viewBox}>
        <View style={styles.flexRowCenter}>
          <Text style={[styles.textCommon, {marginRight:20}]}>Is Same。A时间是否和B时间相等</Text>
          <View style={styles.flexRowCenter}>
            <Button title="查询" onPress={() => handleQuery('isSame')} />
          </View>
        </View>
        <Text style={styles.textCommon}><Text style={styles.formatLabel}>{isSameQueryBool ? '相等' : '不相等'}</Text></Text>
      </View>

      <View style={styles.viewBox}>
        <View style={styles.flexRowCenter}>
          <Text style={[styles.textCommon, {marginRight:20}]}>Is Dayjs, 判断是否为 Day.js 对象。</Text>
        </View>
        <Text style={styles.textCommon}>传入DayJS对象：<Text style={styles.formatLabel}>{dayjs.isDayjs(dayjs())  ? '是' : '否'}</Text></Text>
        <Text style={styles.textCommon}>传入非对象：<Text style={styles.formatLabel}>{dayjs.isDayjs(new Date())  ? '是' : '否'}</Text></Text>
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
    borderRadius: 10,
    fontSize: 16
  }
});

export default QueryDemo