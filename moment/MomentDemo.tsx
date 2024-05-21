import React, {useState, useEffect} from 'react';
import {View, Button, Text} from 'react-native';
import moment from 'moment';
import 'moment/locale/zh-cn';
import ScrollView from 'react-native';
moment.locale('zh-cn');

export function MomentDemo() {
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<string>();
  const [date, setdate] = useState<string>();
  const [time, setTime] = useState<number>();
  const [minute, setMinute] = useState<string>();
  const [second, setSecond] = useState<string>();
  const [day, setDay] = useState<number>();
  const [nowTime, setNowTime] = useState<any>();
  const [lang, setLang] = useState<string>();

  useEffect(() => {
    setNowTime(moment());
    setLang(moment().locale());
    console.log(`当前时间：${moment()}`);
    console.log(`当前语言环境：${moment.locale()}`);
    console.log(`当前区域设置：${moment.locale('zh-cn')}`);
  }, []);

  const fun1 = () => {
    setYear(moment().year());
  };
  const fun2 = () => {
    setMonth(`-${moment().month() + 1}`);
  };
  const fun3 = () => {
    setdate('-' + moment().date());
  };
  const fun4 = () => {
    setTime(moment().hours());
  };
  const fun5 = () => {
    setMinute(':' + moment().minute());
  };
  const fun6 = () => {
    setSecond(':' + moment().second());
  };
  const fun7 = () => {
    setDay(moment().day());
  };

  //时间差
  function timeDiff() {
    const now = moment();
    const then = moment('2020-01-01 00:00:00', 'YYYY-MM-DD HH:mm:ss');
    const diff = now.diff(then, 'days');
    return diff;
  }

  return (
    <ScrollView>
      <View style={{padding: 20}}>
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: '600'}}>
            Moment.js库API验证
          </Text>
        </View>
        <Text style={{fontSize: 20, fontWeight: '600'}}>获取和设置</Text>
        <Text>当前时间：{JSON.stringify(nowTime)}</Text>
        <Text>当前语言：{lang}</Text>
        <Text>当前语言：{lang}</Text>
        <Text>当前时间：{moment().format()}</Text>
        <Text>获取今天0时：{moment().format()}</Text>
        <Text>获取或设置毫秒：{moment().millisecond()}</Text>
        <Text>获取或设置秒：{moment().second()}</Text>
        <Text>获取或设置分钟：{moment().minute()}</Text>
        <Text>获取或设置小时：{moment().hour()}</Text>
        <Text>获取或设置一月中的某一天：{moment().date()}</Text>
        <Text>获取或设置星期几：{moment().day()}</Text>
        <Text>根据区域设置获取或设置星期几：{moment().weekday()}</Text>
        <Text>获取或设置ISO 星期几:{moment().isoWeekday()}</Text>
        <Text>获取或设置一年中的某一天：{moment().dayOfYear()}</Text>
        <Text>获取或设置一年中的第几周:{moment().weekday()}</Text>
        <Text>根据区域设置获取或设置星期几：{moment().week()}</Text>
        <Text>获取或设置一年中的 ISO 周:{moment().isoWeek()}</Text>
        <Text>获取或设置月份:{moment().month()}</Text>
        <Text>获取季度（1 到 4）:{moment().quarter()}</Text>
        <Text>获取或设置年份:{moment().year()}</Text>
        <Text>根据区域设置获取或设置周年:{moment().weekYear()}</Text>
        <Text>获取或设置ISO 周-年: {moment().isoWeekYear()}</Text>
        <Text>
          根据当前 moment 所在年份的区域设置获取周数:{moment().weeksInYear()}
        </Text>
        <Text>
          根据 周数，获取当前moment所在年份的周数:{moment().isoWeeksInYear()}
        </Text>
        <Text>获取值：{moment().get('second')}</Text>
        <Text>设置值：{JSON.stringify(moment().set('year', 2013))}</Text>

        <Text style={{fontSize: 20, fontWeight: '600'}}>数据操作</Text>
        <Text>加法：{JSON.stringify(moment().add(7, 'days'))}</Text>
        <Text>减法：{JSON.stringify(moment().subtract(1, 'seconds'))}</Text>
        <Text>
          设置为今天的12:00：{JSON.stringify(moment().startOf('day'))}
        </Text>
        <Text>
          设置为今年的12月31 23:59:59:999 pm：
          {JSON.stringify(moment().endOf('year'))}
        </Text>
        <Text>本地化：{JSON.stringify(moment().local())}</Text>
        <Text>UTC ：{JSON.stringify(moment().utc())}</Text>
        <Text>以分钟为单位获取或设置 UTC 偏移量:{moment().utcOffset()}</Text>
        <Text>创建持续时间:{JSON.stringify(moment.duration(2, 'hours'))}</Text>
        <Text>创建持续时间的克隆:{JSON.stringify(moment.duration().clone())}</Text>
        <Text>人性化:{moment.duration(2, "minutes").humanize()}</Text>
        <Text>获取持续时间的毫秒数:{moment.duration(1500).milliseconds()}</Text>
        <Text>获取持续时间中的秒数:{moment.duration(1500).seconds()}</Text>
        <Text>取持续时间的分钟数:{moment.duration().asMinutes()}</Text>
        <Text>获取持续时间中的小时数:{moment.duration().hours()}</Text>
        <Text>获取持续时间中的天数:{moment.duration().days()}</Text>
        <Text>获取持续时间中的周数:{moment.duration().weeks()}</Text>
        <Text>获取持续时间中的月数:{moment.duration().months()}</Text>
        <Text>获取持续时间中的年数:{moment.duration().years()}</Text>
        <Text>添加时间来改变原始持续时间:{JSON.stringify(moment.duration().add(2))}</Text>
        <Text>获取持续时间中的年数:{JSON.stringify(moment.duration().subtract(5))}</Text>
        <Text>获取时间单位:{moment.duration().get('minutes')}</Text>

        <Text style={{fontSize: 20, fontWeight: '600'}}>显示</Text>
        <Text>此刻到过去的时间:{moment([2018, 0, 29]).fromNow()}</Text>
        <Text>从 X 到过去的时间:{moment().from(10)}</Text>
        <Text>从此刻到未来的时间:{moment().toNow()}</Text>
        <Text>从 X 到未来的时间:{moment().to([2016, 0, 10])}</Text>
        <Text>日历时间 :{moment().calendar()}</Text>
        <Text>时间差 :{timeDiff()}</Text>
        <Text>Unix 时间戳（毫秒） :{moment().valueOf()}</Text>
        <Text>Unix 时间戳（秒） :{moment().unix()}</Text>
        <Text>
          获取当月的天数 :{moment('2012-01', 'YYYY-MM').daysInMonth()}
        </Text>
        <Text>作为 Javascript 日期 :{JSON.stringify(moment().toDate())}</Text>
        <Text>作为数组 :{JSON.stringify(moment().toDate())}</Text>
        <Text>作为JSON :{JSON.stringify(moment().toJSON())}</Text>
        <Text>
          作为 ISO 8601 字符串 :{JSON.stringify(moment().toISOString())}
        </Text>
        <Text>作为对象 :{JSON.stringify(moment().toObject())}</Text>
        <Text>作为字符串 :{JSON.stringify(moment().toString())}</Text>
        <Text>检查 :{moment().inspect()}</Text>
        <Text style={{fontSize: 20, fontWeight: '600'}}>查询</Text>
        <Text>
          检查一个 moment 是否在另一个 moment 之前 :
          {moment('2023-10-20').isBefore('2024-02-26') ? 'true' : 'flase'}
        </Text>
        <Text>
          检查检查一个 moment 是否与另一个 moment 相同 :
          {moment('2010-10-20').isSame('2011-01-01', 'year') ? 'true' : 'flase'}
        </Text>
        <Text>
          检查一个 moment 是否在另一个 moment 之后 :
          {moment('2010-10-20').isAfter('2010-10-19') ? 'true' : 'flase'}
        </Text>
        <Text>
          是否相同或之前 :
          {moment('2010-10-20').isSameOrBefore('2010-10-20') ? 'true' : 'flase'}
        </Text>
        <Text>
          是否相同或之后 :
          {moment('2010-10-20').isSameOrAfter('2010-10-21') ? 'true' : 'flase'}
        </Text>
        <Text>
          检查某个 moment 是否位于其他两个 moment 之间 :
          {moment('2010-10-20').isBetween('2010-10-19', '2010-10-25')
            ? 'true'
            : 'flase'}
        </Text>
        <Text>
          检查当前 moment 是否处于夏令时 :
          {moment([2011, 2, 12]).isDST() ? 'true' : 'flase'}
        </Text>
        <Text>
          判断当前年份是否为闰年 :{moment([2024]).isLeapYear() ? '是' : '否'}
        </Text>
        <Text>
          检查变量是否为 moment 对象 : moment.isMoment(moment()) :
          {moment.isMoment(moment()) ? 'true' : 'flase'} / moment.isMoment(new
          Date()) : {moment.isMoment(new Date()) ? 'true' : 'flase'}
        </Text>
        <Text>
          检查变量是否为原生 js Date 对象 :moment.isDate(new Date()) ：
          {moment.isDate(new Date()) ? 'true' : 'flase'} /
          moment.isDate(moment())： {moment.isDate(moment()) ? 'true' : 'flase'}
        </Text>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text>{year}</Text>
          <Text>{month}</Text>
          <Text>{date} </Text>
          <Text>{time}</Text>
          <Text>{minute}</Text>
          <Text>{second}</Text>
          <Text> {day}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
          <Button title="点击获取年" onPress={fun1} />
          <Button title="点击获取月" onPress={fun2} />
          <Button title="点击获取日" onPress={fun3} />
          <Button title="点击获取时" onPress={fun4} />
          <Button title="点击获取分" onPress={fun5} />
          <Button title="点击获取秒" onPress={fun6} />
          <Button title="点击获取星期几" onPress={fun7} />
        </View>
      </View>
    </ScrollView>
  );
}
