import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import dayjs from 'dayjs'
import type { OpUnitType } from 'dayjs' 

const OperationDemo = () => {

  const [addNum, setAddNum] = useState(1)
  const [subtractNum, setSubtractNum] = useState(1)
  const [add, setAdd] = useState(dayjs().format('YYYY-MM-DD HH:mm:ss'))
  const [subtract, setSubtract] = useState(dayjs().format('YYYY-MM-DD HH:mm:ss'))
  const [start, setStart] = useState<OpUnitType>('w')


  const changeDate = (type: string) => {
    switch (type) {
      case 'add':
        setAddNum(addNum + 1)
        setAdd(dayjs().add(addNum, 'day').format('YYYY-MM-DD HH:mm:ss'))
        break;
      case 'subtract':
        setSubtractNum(subtractNum + 1)
        setSubtract(dayjs().subtract(subtractNum, 'day').format('YYYY-MM-DD HH:mm:ss'))
        break;
      default:
        break;
    }
  }

  const setDateStartOrEnd = (type: OpUnitType) => {
    setStart(type)
  }



  return (
    <View style={styles.container}>
      <Text style={styles.componentTitle}>OperationDemo: 操作</Text>

      <View style={styles.viewBox}>
        <View style={[styles.viewButtonBox]}>
          <Text style={[{ marginBottom: 5, flex: 1 }, styles.headerTitle]}>增加一定时间:</Text>
          <Button title="增加1天时间" onPress={() => changeDate('add')} />
        </View>
        <Text style={styles.textCommon}>{add}</Text>
      </View>

      <View style={styles.viewBox}>
        <View style={[styles.viewButtonBox]}>
          <Text style={[{ marginBottom: 5, flex: 1 }, styles.headerTitle]}>减去一定时间:</Text>
          <Button title="减去1天时间" onPress={() => changeDate('subtract')} />
        </View>
        <Text style={styles.textCommon}>{subtract}</Text>
      </View>

      <View style={styles.viewBox}>
        <View style={[styles.viewButtonBox]}>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
            <Button title="year" onPress={() => setDateStartOrEnd('y')} />
            <Button title="month" onPress={() => setDateStartOrEnd('M')} />
            <Button title="day" onPress={() => setDateStartOrEnd('d')} />
            <Button title="hour" onPress={() => setDateStartOrEnd('h')} />
          </View>
        </View>
        <Text style={styles.textCommon}>设置到一个时间的开始:{dayjs().startOf(start).format('YYYY-MM-DD HH:mm:ss')} </Text>
        <Text style={styles.textCommon}>设置到一个时间的末尾:{dayjs().endOf(start).format('YYYY-MM-DD HH:mm:ss')}</Text>
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
    borderRadius: 10
  }
});

export default OperationDemo