import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import dayjs from 'dayjs'


const ValueAssignmentDemo = () => {

  const [setterData, setSetterData] = useState(20)

  console.log(dayjs().millisecond(57).millisecond())
  return (
    <View style={styles.container}>
      <Text style={styles.componentTitle}>ValueAssignmentDemo: 取值/赋值</Text>
      <Text style={styles.textCommon}>获取毫秒，固定传入666：{dayjs().millisecond(666).millisecond()}</Text>
      <Text style={styles.textCommon}>设置毫秒，固定传入1005：{dayjs().millisecond(1005).millisecond()}</Text>
      <Text style={styles.textCommon}>获取秒，固定传入35：{dayjs().second(35).second()}</Text>
      <Text style={styles.textCommon}>设置秒，固定传入63：{dayjs().second(63).second()}</Text>
      <Text style={styles.textCommon}>获取分钟，固定传入15：{dayjs().minute(15).minute()}</Text>
      <Text style={styles.textCommon}>设置分钟，固定传入61：{dayjs().minute(61).minute()}</Text>
      <Text style={styles.textCommon}>获取小时，固定传入22：{dayjs().hour(22).hour()}</Text>
      <Text style={styles.textCommon}>设置小时，固定传入25：{dayjs().hour(25).hour()}</Text>
      <Text style={styles.textCommon}>获取月份里的日期，固定传入18：{dayjs().date(18).date()}</Text>
      <Text style={styles.textCommon}>设置月份里的日期，固定传入35：{dayjs().date(35).date()}</Text>
      <Text style={styles.textCommon}>获取星期几，固定传入6：{dayjs().day(6).day()}</Text>
      <Text style={styles.textCommon}>设置星期几，固定传入9：{dayjs().day(9).day()}</Text>
      <Text style={styles.textCommon}>获取月份，固定传入8：{dayjs().month(8).month()}</Text>
      <Text style={styles.textCommon}>设置月份，固定传入13：{dayjs().month(13).month()}</Text>
      <Text style={styles.textCommon}>设置年份并且获取，固定传入2024：{dayjs().year(2024).year()}</Text>
      <Text style={styles.textCommon}>setter：年固定传入2024：{dayjs().set('year', 2024).get('year')}</Text>
      <Text style={styles.textCommon}>setter：月固定传入8：{dayjs().set('month', 8).get('month')} </Text>
      <Text style={styles.textCommon}>getter：年固定传入2022-05-05：{dayjs('2022-05-05').get('year')}</Text>
      <Text style={styles.textCommon}>getter：月固定传入2022-05-05：{dayjs('2022-05-05').get('month') + 1}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    padding: 8,
    paddingBottom:50
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
    borderRadius: 10,
    fontSize: 16
  }
});
export default ValueAssignmentDemo