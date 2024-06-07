import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import arraySupport from 'dayjs/plugin/arraySupport'
import bigIntSupport from 'dayjs/plugin/bigIntSupport'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import calendar from 'dayjs/plugin/calendar'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import duration from 'dayjs/plugin/duration'
import isBetween from 'dayjs/plugin/isBetween'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isToday from 'dayjs/plugin/isToday'
import isTomorrow from 'dayjs/plugin/isTomorrow'
import isYesterday from 'dayjs/plugin/isYesterday'
import isoWeek from 'dayjs/plugin/isoWeek'
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear'
import localeData from 'dayjs/plugin/localeData'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import minMax from 'dayjs/plugin/minMax'
import objectSupport from 'dayjs/plugin/objectSupport'
import pluralGetSet from 'dayjs/plugin/pluralGetSet'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import relativeTime from 'dayjs/plugin/relativeTime'
import toArray from 'dayjs/plugin/toArray'
import toObject from 'dayjs/plugin/toObject'
import updateLocale from 'dayjs/plugin/updateLocale'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekYear from 'dayjs/plugin/weekYear'
import weekday from 'dayjs/plugin/weekday'



const PluginDemo = () => {
  dayjs.locale('zh-cn')
  dayjs.extend(advancedFormat)
  dayjs.extend(arraySupport)
  dayjs.extend(bigIntSupport)
  dayjs.extend(buddhistEra)
  dayjs.extend(calendar)
  dayjs.extend(customParseFormat)
  dayjs.extend(dayOfYear)
  dayjs.extend(duration)
  dayjs.extend(isBetween)
  dayjs.extend(isLeapYear)
  dayjs.extend(isSameOrAfter)
  dayjs.extend(isSameOrBefore)
  dayjs.extend(isToday)
  dayjs.extend(isTomorrow)
  dayjs.extend(isYesterday)
  dayjs.extend(isoWeek)
  dayjs.extend(isoWeeksInYear)
  dayjs.extend(localeData)
  dayjs.extend(localizedFormat)
  dayjs.extend(minMax)
  dayjs.extend(objectSupport)
  dayjs.extend(pluralGetSet)
  dayjs.extend(quarterOfYear)
  dayjs.extend(relativeTime)
  dayjs.extend(toArray)
  dayjs.extend(toObject)
  dayjs.extend(updateLocale)
  dayjs.extend(weekOfYear)
  dayjs.extend(weekYear)
dayjs.extend(weekday)


  const [durationValue, setDurationValue] = useState('')
  const [betweenA, setBetweenA] = useState('2024-04-01')
  const [betweenB, setBetweenB] = useState('2024-04-08')
  const [middle, setMiddle] = useState('2024-04-05')
  const [isBetweenBool, setIsBetweenBool] = useState(false)
  const [leapYear, setLeapYear] = useState('2024')
  const [compareDateA, setCompareDateA] = useState('2024-04-01')
  const [compareDateB, setCompareDateB] = useState('2024-04-05')
  const [isSameOrAfterBool, setIsSameOrAfterBool] = useState(false)
  const [isSameOrBeforeBool, setIsSameOrBeforeBool] = useState(false)
  const [isTodayData, setIsTodayData] = useState('2024-03-11')
  const [isTodayDataBool, setIsTodayDataBool] = useState(false)
  const [isTomorrowDataBool, setIsTomorrowDataBool] = useState(false)
  const [isYesterdayDataBool, setIsYesterdayDataBool] = useState(false)
  const [weeksInYearData, setWeeksInYearData] = useState('2024')
  const [minMaxDataA, setMinMaxDataA] = useState('2021-05-01')
  const [minMaxDataB, setMinMaxDataB] = useState('2023-01-08')
  const [quarterOfYearData, setQuarterOfYearData] = useState('2024-01-01')
  const [weekOfYearData, setWeekOfYearData] = useState('2024-01-01')
  const [weekDayData, setWeekDayData] = useState(dayjs().weekday())
  dayjs().weekday(7).valueOf()
  const [weekDayData7, setWeekDay7Data] = useState(dayjs().weekday())

  const globalLocaleData = dayjs().localeData()
  // 修改语言配置
  dayjs.updateLocale('zh-cn', {
    // A : 上午/下午/晚上 , dddd: 星期
    calendar: {
      lastDay: 'YYYY.MM.DD [昨天] A h:mm dddd',
      sameDay: 'YYYY.MM.DD [今天] A h:mm dddd',
      nextDay: 'YYYY.MM.DD [明天] A h:mm dddd',
      lastWeek: 'YYYY.MM.DD A h:mm [上]dddd',
      nextWeek: 'YYYY.MM.DD A h:mm [下]dddd',
      sameElse: 'YYYY.MM.DD A h:mm dddd',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.componentTitle}>PluginDemo:插件</Text>
      <Text style={styles.formatLabel}>国际化可查看目前系统使用语言：{dayjs.locale()}</Text>
      <View style={styles.interval}></View>

      <View style={styles.viewBox}>
        <View style={styles.flexRowCenter}>
          <Text style={[styles.headerTitle, { marginRight: 20 }]}>插件：AdvancedFormat 支持更多模版</Text>
        </View>
        <View style={styles.flexRowCenter}>
          <Text style={styles.formatLabel}>显示季度：</Text>
          <Text >{dayjs().format('Q')}</Text>
        </View>
        <View style={styles.flexRowCenter}>
          <Text style={styles.formatLabel}>显示带序数词的月份里的一天：</Text>
          <Text >{dayjs().format('Do')}</Text>
        </View>
        <View style={styles.flexRowCenter}>
          <Text style={styles.formatLabel}>显示由 1 开始的小时</Text>
          <Text >{dayjs().format('k')}</Text>
        </View>
      </View>

      <View style={styles.viewBox}>
        <View style={styles.flexRowCenter}>
          <Text style={[styles.headerTitle, { marginRight: 20 }]}>插件：ArraySupport支持数组参数。</Text>
        </View>
        <View style={styles.flexRows}>
          <Text style={styles.formatLabel}>可以传入数组{'[2021, 0, 3]'}:</Text>
          <Text >{dayjs([2010, 0, 3]).format()} </Text>
        </View>
      </View>

      <View style={styles.viewBox}>
        <View style={styles.flexRowCenter}>
          <Text style={[styles.headerTitle, { marginRight: 20 }]}>插件：BigIntSupport支持 BigInt 参数。</Text>
        </View>
        <View style={styles.flexRows}>
          <Text style={styles.formatLabel}>支持 BigInt 参数：</Text>
          <Text >{dayjs(BigInt(1666310421101)).format()}</Text>
        </View>
      </View>

      <View style={styles.viewBox}>
        <View style={styles.flexRowCenter}>
          <Text style={[styles.headerTitle, { marginRight: 20 }]}>插件：BuddhistEra支持佛历格式化。</Text>
        </View>
        <Text>佛历是一个年份编号系统，主要用于柬埔寨、老挝、缅甸和泰国等东南亚国家以及斯里兰卡、马来西亚和新加坡的中国人，用于宗教或官方场合 (Wikipedia)。
          要计算 BE 年，只需在年份中添加 543。 例如，1977 年 5 月 26 日 AD / CE 应显示为 2520 年 5 月 26 日 BE（1977 + 543）。</Text>
        <View style={styles.flexRowCenter}>
          <Text style={styles.formatLabel}>支持佛历格式化：</Text>
          <Text >{dayjs().format('BBBB BB')}</Text>
        </View>
      </View>

      <View style={styles.viewBox}>
        <View style={styles.flexRowCenter}>
          <Text style={[styles.headerTitle, { marginRight: 20 }]}>插件：Calendar增加了.calendar API 返回一个 string 来显示日历时间。</Text>
        </View>
        <View style={styles.flexRowCenter}>
          <Text style={styles.formatLabel}>显示日历时间。</Text>
          <Text >{dayjs().calendar(null, {
            sameDay: '[Today at] h:mm A',
            nextDay: '[Tomorrow at] h:mm A',
            nextWeek: 'dddd [at] h:mm A',
            lastDay: '[Yesterday at] h:mm A',
            lastWeek: '[Last] dddd [at] h:mm A',
            sameElse: 'DD/MM/YYYY'
          })}</Text>
        </View>
      </View>

      <View style={styles.viewBox}>
        <View style={styles.flexRowCenter}>
          <Text style={[styles.headerTitle, { marginRight: 20 }]}>插件：CustomParseFormat支持自定义时间格式.</Text>
        </View>
        <View style={styles.flexRowCenter}>
          <Text style={styles.formatLabel}>支持 BigInt 参数：</Text>
          <Text >{dayjs("12-25-1995", "MM-DD-YYYY").format()}</Text>
        </View>
      </View>

      <View style={styles.viewBox}>
        <View style={styles.flexRowCenter}>
          <Text style={[styles.headerTitle, { marginRight: 20 }]}>插件：DayOfYear传入日期是年中第几天。</Text>
        </View>
        <View style={styles.flexRowCenter}>
          <Text style={styles.formatLabel}>当前天：</Text>
          <Text >第{dayjs().dayOfYear()}天</Text>
        </View>
        <View style={styles.flexRowCenter}>
          <Text style={styles.formatLabel}>2024-05-01：</Text>
          <Text >第{dayjs('2024-05-01').dayOfYear()}天</Text>
        </View>
        <View style={styles.flexRowCenter}>
          <Text style={styles.formatLabel}>2024-01-01：</Text>
          <Text >第{dayjs('2024-01-01').dayOfYear()}天</Text>
        </View>
      </View>

      <View style={styles.viewBox}>
        <View style={styles.flexRowCenter}>
          <Text style={[styles.headerTitle, { marginRight: 20 }]}>插件：Duration支持时间长度。</Text>
        </View>
        <View style={styles.flexRowCenter}>
          <Text style={styles.formatLabel}>输入时间长度（ms）:</Text>
          <TextInput
            style={[styles.inputStyle, { width: 100, marginRight: 10 }]}
            onChangeText={text => {
              if (!isNaN(Number(text))) {
                setDurationValue(text)
              }
            }}
            value={durationValue}
          />
        </View>
        <View style={styles.flexRowCenter}>
          <Text style={styles.formatLabel}></Text>
          <Text >{dayjs.duration(Number(durationValue)).format('Y')}年</Text>
          <Text >{dayjs.duration(Number(durationValue)).format('D')}天</Text>
          <Text >{dayjs.duration(Number(durationValue)).format('H')}时</Text>
          <Text >{dayjs.duration(Number(durationValue)).format('m')}分钟</Text>
          <Text >{dayjs.duration(Number(durationValue)).format('s')}秒</Text>
        </View>
      </View>

      <View style={styles.viewBox}>
        <View style={styles.flexRowCenter}>
          <Text style={[styles.headerTitle, { marginRight: 20 }]}>插件：IsBetween展示一个时间是否介于两个时间之间。</Text>
        </View>
        <Text>输入时间格式例如：2021-05-07</Text>
        <View style={styles.flexRowCenter}>
          <TextInput
            style={[styles.inputStyle, { width: 100, marginRight: 10 }]}
            onChangeText={text => setBetweenA(text)}
            value={betweenA}
          />
          <Text>到</Text>
          <TextInput
            style={[styles.inputStyle, { width: 100, marginLeft: 10 }]}
            onChangeText={text => setBetweenB(text)}
            value={betweenB}
          />
        </View>
        <View style={[styles.flexRowCenter, { marginTop: 10 }]}>
          <TextInput
            style={[styles.inputStyle, { width: 100, marginRight: 10 }]}
            onChangeText={text => setMiddle(text)}
            value={middle}
          />
          <Button title='查询' onPress={() => {
            setIsBetweenBool(dayjs(middle).isBetween(betweenA, betweenB))
          }} />
        </View>
        <View style={styles.flexRowCenter}>
          <Text style={styles.formatLabel}>{isBetweenBool ? '是' : '否'}</Text>
        </View>
      </View>

      <View style={styles.viewBox}>
        <View style={styles.flexRowCenter}>
          <Text style={[styles.headerTitle, { marginRight: 20 }]}>插件：IsLeapYear是否闰年。</Text>
        </View>
        <View style={styles.flexRowCenter}>
          <Text style={styles.formatLabel}>输入时间年份:</Text>
          <TextInput
            style={[styles.inputStyle, { width: 100, marginRight: 10 }]}
            onChangeText={text => {
              if (!isNaN(Number(text)) && text.length <= 4) {
                setLeapYear(text)
              }
            }}
            value={leapYear}
          />
        </View>
        <View style={styles.flexRowCenter}>
          <Text style={styles.formatLabel}>{dayjs(leapYear).isLeapYear() ? '是' : '否'}</Text>
        </View>
      </View>

      <View style={styles.viewBox}>
        <Text style={[styles.headerTitle, { marginRight: 20 }]}>插件：IsSameOrAfter A时间与B时间相同或在B时间之后。</Text>
        <Text style={[styles.headerTitle, { marginRight: 20 }]}>插件：IsSameOrBefore A时间与B时间相同或在B时间之前。</Text>
        <Text >可输入时间格式例如：2024， 2024-02，2024-02-05</Text>
        <View style={styles.flexRowCenter}>
          <View style={styles.flexRowCenter}>
            <Text style={styles.formatLabel}>A时间</Text>
            <TextInput
              style={[styles.inputStyle, { width: 100, marginRight: 10 }]}
              onChangeText={text => { setCompareDateA(text) }}
              value={compareDateA}
            />
          </View>
          <View style={styles.flexRowCenter}>
            <Text style={styles.formatLabel}>B时间</Text>
            <TextInput
              style={[styles.inputStyle, { width: 100, marginRight: 10 }]}
              onChangeText={text => { setCompareDateB(text) }}
              value={compareDateB}
            />
          </View>
        </View>
        <Button title='IsSameOrAfter' onPress={() => {
          setIsSameOrAfterBool(dayjs(compareDateA).isSameOrAfter(compareDateB))
        }} />
        <View style={styles.interval}></View>
        <Button title='IsSameOrBefore' onPress={() => {
          setIsSameOrBeforeBool(dayjs(compareDateA).isSameOrBefore(compareDateB))
        }} />
        <Text style={styles.formatLabel}>A时间与B时间相等或在B时间之后: {isSameOrAfterBool ? '是' : '否'}</Text>
        <Text style={styles.formatLabel}>A时间与B时间相等或在B时间之前: {isSameOrBeforeBool ? '是' : '否'}</Text>
      </View>

      <View style={styles.viewBox}>
        <Text style={styles.headerTitle}>插件：IsToday判断时间是否是今天。</Text>
        <Text style={styles.headerTitle}>插件：IsTomorrow判断时间是否是明天。</Text>
        <Text style={styles.headerTitle}>插件：IsYesterday判断时间是否是昨天。</Text>
        <View style={styles.flexRowCenter}>
          <Text style={styles.formatLabel}>输入时间:</Text>
          <TextInput
            style={[styles.inputStyle, { width: 100, marginRight: 10 }]}
            onChangeText={text => setIsTodayData(text)}
            value={isTodayData}
          />
          <Button title='查询' onPress={() => {
            setIsTodayDataBool(dayjs(isTodayData).isToday())
            setIsTomorrowDataBool(dayjs(isTodayData).isTomorrow())
            setIsYesterdayDataBool(dayjs(isTodayData).isYesterday())
          }} />
        </View>
        <Text style={styles.formatLabel}>{isTodayData}{isTodayDataBool ? '是' : '不是'}今天</Text>
        <Text style={styles.formatLabel}>{isTodayData}{isTomorrowDataBool ? '是' : '不是'}明天</Text>
        <Text style={styles.formatLabel}>{isTodayData}{isYesterdayDataBool ? '是' : '不是'}昨天</Text>
      </View>

      <View style={styles.viewBox}>
        <Text style={styles.headerTitle}>插件：IsoWeek获取年度的 ISO 周数 获取ISO 周年。</Text>
        <Text style={styles.formatLabel}>今天是今年的第{dayjs().isoWeek()}周</Text>
        <Text style={styles.formatLabel}>今天是一周的第{dayjs().isoWeekday()}天</Text>
        <Text style={styles.formatLabel}>今天是{dayjs().isoWeekYear()}年</Text>
      </View>

      <View style={styles.viewBox}>
        <Text style={styles.headerTitle}>插件：IsoWeeksInYear判断一年中有几周。</Text>
        <View style={styles.flexRowCenter}>
          <Text style={styles.formatLabel}>输入年份:</Text>
          <TextInput
            style={[styles.inputStyle, { width: 100, marginRight: 10 }]}
            onChangeText={text => {
              if (!isNaN(Number(text)) && text.length <= 4) {
                setWeeksInYearData(text)
              }
            }}
            value={weeksInYearData}
          />
        </View>
        <Text style={styles.formatLabel}>{weeksInYearData}年有{dayjs(weeksInYearData).isoWeeksInYear()}周</Text>
      </View>

      <View style={styles.viewBox}>
        <Text style={[styles.headerTitle, styles.interval]}>插件：LocaleData提供本地化数据。</Text>
        <Text style={[styles.formatLabel, styles.interval]}>{globalLocaleData.months()}</Text>
        <Text style={[styles.formatLabel, styles.interval]}>{globalLocaleData.monthsShort()}</Text>
        <Text style={[styles.formatLabel, styles.interval]}>{globalLocaleData.weekdaysMin()}</Text>
      </View>

      <View style={styles.viewBox}>
        <Text style={[styles.headerTitle, styles.interval]}>插件：LocalizedFormat扩展了formatAPI支持更多本地化的长日期格式。</Text>
        <Text style={[styles.formatLabel, styles.interval]}>{dayjs().format('L LT')}</Text>
        <Text style={[styles.formatLabel, styles.interval]}>{dayjs().format('llll')}</Text>
      </View>

      <View style={styles.viewBox}>
        <Text style={styles.headerTitle}>插件：MinMax比较传入的Day.js实例的大小。</Text>
        <View style={styles.flexRows}>
          <Text style={styles.formatLabel}>输入两个日期进行比较:</Text>
           <View style={styles.flexRowCenter}>
          <TextInput
            style={[styles.inputStyle, { width: 100, marginRight: 10 }]}
            onChangeText={text => setMinMaxDataA(text)}
            value={minMaxDataA}
          />
          <TextInput
            style={[styles.inputStyle, { width: 100, marginRight: 10 }]}
            onChangeText={text => setMinMaxDataB(text)}
            value={minMaxDataB}
          />
        </View>
        </View>
        <Text style={styles.formatLabel}>大日期为{dayjs.max(dayjs(minMaxDataA), dayjs(minMaxDataB))?.format()}</Text>
      </View>

      <View style={styles.viewBox}>
        <Text style={[styles.headerTitle, styles.interval]}>插件：ObjectSupport以支持传入对象参数。</Text>
        <Text style={[styles.formatLabel, styles.interval]}>{dayjs({
          year: 2010,
          month: 1,
          day: 12
        }).format()}</Text>
      </View>

      <View style={styles.viewBox}>
        <Text style={[styles.headerTitle, styles.interval]}>插件：PluralGetSet增加了复数形式的 API。</Text>
        <Text style={[styles.formatLabel, styles.interval]}>{dayjs().millisecond()}</Text>
        <Text style={[styles.formatLabel, styles.interval]}>{dayjs().milliseconds()}</Text>
      </View>

      <View style={styles.viewBox}>
        <Text style={[styles.headerTitle, styles.interval]}>插件：QuarterOfYear返回当前实例是哪个季度。</Text>
        <TextInput
            style={[styles.inputStyle, { width: 100, marginRight: 10 }]}
            onChangeText={text => setQuarterOfYearData(text)}
            value={quarterOfYearData}
          />
        <Text style={[styles.formatLabel, styles.interval]}>是第{dayjs(quarterOfYearData).quarter()}季度</Text>
      </View>

      <View style={styles.viewBox}>
        <Text style={[styles.headerTitle, styles.interval]}>插件：RelativeTime增加了 .from .to .fromNow .toNow 4 个 API 来展示相对的时间 (e.g. 3 小时以前).</Text>
        <Text style={[styles.formatLabel, styles.interval]}>.from 距离 2010-01-01 的相对时间: {dayjs().from(dayjs('2010-01-01'))}</Text>
        <Text style={[styles.formatLabel, styles.interval]}>.fromNow  2024-01-01 距离现在的相对时间: {dayjs('2024-01-01').fromNow()}</Text>
        <Text style={[styles.formatLabel, styles.interval]}>.to 到 2010-01-01 的相对时间: {dayjs().to(dayjs('2010-01-01'))}</Text>
        <Text style={[styles.formatLabel, styles.interval]}>.toNow 2024-01-01 到现在的相对时间: {dayjs('2024-01-01').toNow()}</Text>
      </View>

      <View style={styles.viewBox}>
        <Text style={[styles.headerTitle, styles.interval]}>插件：ToArray增加了 .toArray() API 来返回包含时间数值的 array。</Text>
        <Text style={[styles.formatLabel, styles.interval]}>{dayjs().toArray()}</Text>
      </View>
      
      <View style={styles.viewBox}>
        <Text style={[styles.headerTitle, styles.interval]}>插件：ToObject增加了 .toObject() API 来返回包含时间数值的 object。</Text>
        <Text style={[styles.formatLabel, styles.interval]}>年：{dayjs().toObject().years}</Text>
        <Text style={[styles.formatLabel, styles.interval]}>月：{dayjs().toObject().months + 1}</Text>
      </View>

      <View style={styles.viewBox}>
        <Text style={[styles.headerTitle, styles.interval]}>插件：UpdateLocale 增加了 .updateLocale API 来更新语言配置的属性。</Text>
        <Text style={[styles.formatLabel, styles.interval]}>{dayjs().calendar()}</Text>
      </View>

      <View style={styles.viewBox}>
        <Text style={[styles.headerTitle, styles.interval]}>插件：UTC 增加了 .utc .local .isUTC APIs 使用 UTC 模式来解析和展示时间。</Text>
        <Text style={[styles.formatLabel, styles.interval]}>将本地时间转换成 UTC 时间:</Text>
        <Text style={[styles.formatLabel, styles.interval]}>{dayjs().format()}</Text>
      </View>

      <View style={styles.viewBox}>
        <Text style={[styles.headerTitle, styles.interval]}>插件：WeekOfYear 增加了 .week() API 返回一个 number 来表示 Day.js 的日期是年中第几周。</Text>
        <TextInput
            style={[styles.inputStyle, { width: 100, marginRight: 10 }]}
            onChangeText={text => setWeekOfYearData(text)}
            value={weekOfYearData}
          />
        <Text style={[styles.formatLabel, styles.interval]}>是第{dayjs(weekOfYearData).week()}周</Text>
      </View>

      <View style={styles.viewBox}>
        <Text style={[styles.headerTitle, styles.interval]}>插件：WeekYear 增加了 .weekYear() API 来获取基于当前语言的按周计算的年份。</Text>
        <Text style={[styles.formatLabel, styles.interval]}>{dayjs().weekYear()}</Text>
      </View>
      <View style={styles.viewBox}>
        <Text style={[styles.headerTitle, styles.interval]}>插件：WeekDay 增加了 .weekday() API 来获取或设置当前语言的星期。</Text>
        <Text style={[styles.formatLabel, styles.interval]}>{weekDayData}</Text>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 90,
    paddingBottom: 90,
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
  viewButtonBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  viewBox: {
    width: '90%',
    borderWidth: 1,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft:3,
    paddingRight:3
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
flexRows: {
    alignItems: "center",
},
  flexRowBetween: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom:10
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

export default PluginDemo