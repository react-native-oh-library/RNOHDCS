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
  const [Weekday, setWeekday] = useState<number>();
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
    setWeekday(moment().day());
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
        <Text>1.当前UTC时间：{JSON.stringify(nowTime)}</Text>
        <Text>2.当前语言：{lang}</Text>
        <Text>3.当前时间：{moment().format()}</Text>
        <Text>4.获取当前毫秒：{moment().millisecond()}</Text>
        <Text>5.获取当前秒：{moment().second()}</Text>
        <Text>6.获取当前分钟：{moment().minute()}</Text>
        <Text>7.获取当前小时：{moment().hour()}</Text>
        <Text>8.获取当前月中第几天：{moment().date()}</Text>
        <Text>9.获取星期几：{moment().day()}</Text>
        <Text>10.根据时区设置获取星期几：{moment().weekday()}</Text>
        <Text>11.获取ISO标准的星期几:{moment().isoWeekday()}</Text>
        <Text>12.获取一年中的第几一天：{moment().dayOfYear()}</Text>
        <Text>13.根据区域设置获取星期几：{moment().week()}</Text>
        <Text>14.获取IOS标准一年中的第几周:{moment().isoWeek()}</Text>
        <Text>15.获取月份(0-11):{moment().month()}</Text>
        <Text>16.获取季度(1-4):{moment().quarter()}</Text>
        <Text>17.获取年份:{moment().year()}</Text>
        <Text>18.根据时区设置获取周年:{moment().weekYear()}</Text>
        <Text>19.获取ISO标准周年:{moment().isoWeekYear()}</Text>
        <Text>
          20.根据当前 moment 所在年份的区域设置获取周数:{moment().weeksInYear()}
        </Text>
        <Text>
          21.根据周数获取当前moment所在年份的周数:{moment().isoWeeksInYear()}
        </Text>
        <Text>22.通过字符串获取当前秒:{moment().get('second')}</Text>
        <Text>23.获取当前UTC时间并将年份修改2013年:{JSON.stringify(moment().set('year', 2013))}</Text>

        <Text style={{fontSize: 20, fontWeight: '600'}}>数据操作</Text>
        <Text>1.获取当前UTC时间并加7天:{JSON.stringify(moment().add(7, 'days'))}</Text>
        <Text>2.获取当前UTC时间并减2月:{JSON.stringify(moment().subtract(2, 'months'))}</Text>
        <Text>
          3.获取当前UTC时间今天的初始时间:{JSON.stringify(moment().startOf('day'))}
        </Text>
        <Text>
          4.获取当前UTC时间今天的结束时间:
          {JSON.stringify(moment().endOf('year'))}
        </Text>
        <Text>5.本地化：{JSON.stringify(moment().local())}</Text>
        <Text>6.UTC ：{JSON.stringify(moment().utc())}</Text>
        <Text>7.以分钟为单位获取 UTC 偏移量:{moment().utcOffset()}</Text>
        <Text>8.创建持续时间2小时:{JSON.stringify(moment.duration(2, 'hours'))}</Text>
        <Text>9.创建持续时间的克隆:{JSON.stringify(moment.duration().clone())}</Text>
        <Text>10.设置人性化时间2分钟:{moment.duration(2, "minutes").humanize()}</Text>
        <Text>11.获取持续时间的毫秒数(0-999):{moment.duration(1500).milliseconds()}</Text>
        <Text>12.获取持续时间中的秒数(0-59):{moment.duration(1500).seconds()}</Text>
        <Text>13.取持续时间的分钟数(0-59):{moment.duration().asMinutes()}</Text>
        <Text>14.获取持续时间中的小时数(0-23):{moment.duration().hours()}</Text>
        <Text>15.获取持续时间中的天数(0-30):{moment.duration().days()}</Text>
        <Text>16.获取持续时间中的周数(0-4):{moment.duration().weeks()}</Text>
        <Text>17.获取持续时间中的月数(0-11):{moment.duration().months()}</Text>
        <Text>18.获取持续时间中的年数:{moment.duration().years()}</Text>
        <Text>19.添加时间来改变原始持续时间:{JSON.stringify(moment.duration().add(2))}</Text>
        <Text>20.获取持续时间中的年数:{JSON.stringify(moment.duration().subtract(5))}</Text>
        <Text>21.获取时间单位小时:{moment.duration().get('hours')}</Text>
        <Text>22.获取时间单位分钟:{moment.duration().get('minutes')}</Text>
        <Text>23.获取时间单位秒:{moment.duration().get('seconds')}</Text>
        <Text>24.获取时间单位毫秒:{moment.duration().get('milliseconds')}</Text>

        <Text style={{fontSize: 20, fontWeight: '600'}}>显示</Text>
        <Text>1.此刻到过去[2018, 0, 29]的时间:{moment([2018, 0, 29]).fromNow()}</Text>
        <Text>2.显示与现在以外的时间相关的moment。从 X 到过去的时间:{moment().from(10)}</Text>
        <Text>3.从此刻到未来[2035, 0, 29]的时间:{moment([2035, 0, 29]).toNow()}</Text>
        <Text>4.从 X[2016, 0, 10] 到未来[2035, 0, 29]的时间:{moment([2035, 0, 29]).to([2016, 0, 10])}</Text>
        <Text>5.获取当前日历时间:{moment().calendar()}</Text>
        <Text>6.时间差(从2020-01-01到现在的天数):{timeDiff()}天</Text>
        <Text>7.Unix 时间戳(毫秒):{moment().valueOf()}</Text>
        <Text>8.Unix 时间戳(秒):{moment().unix()}</Text>
        <Text>
          9.获取当月的天数:{moment('2012-01', 'YYYY-MM').daysInMonth()}
        </Text>
        <Text>10.作为 Javascript 日期:{JSON.stringify(moment().toDate())}</Text>
        <Text>11.作为数组:{JSON.stringify(moment().toDate())}</Text>
        <Text>12.作为JSON:{JSON.stringify(moment().toJSON())}</Text>
        <Text>
          13.作为 ISO 8601 字符串:{JSON.stringify(moment().toISOString())}
        </Text>
        <Text>14.作为对象:{JSON.stringify(moment().toObject())}</Text>
        <Text>15.作为字符串:{JSON.stringify(moment().toString())}</Text>
        <Text>16.检查:{moment().inspect()}</Text>

        <Text style={{fontSize: 20, fontWeight: '600'}}>查询</Text>
        <Text>
          1.检查一个 moment 在另一个 moment 之前(true/false):
        </Text>
         <Text>
            moment('2023-10-20').isBefore('2024-02-26') ? 'true' : 'false'
         </Text>
        <Text>
            运行结果:{moment('2023-10-20').isBefore('2024-02-26') ? 'true' : 'false'}
         </Text>

        <Text>
          2.检查检查一个 moment 与另一个 moment 相同:
          {moment('2010-10-20').isSame('2011-01-01', 'year') ? 'true' : 'false'}
        </Text>
        <Text>
          moment('2010-10-20').isSame('2011-01-01', 'year') ? 'true' : 'false'
        </Text>
         <Text>
          运行结果:{moment('2010-10-20').isSame('2011-01-01', 'year') ? 'true' : 'false'}
         </Text>

        <Text>
          3.检查一个 moment 在另一个 moment 之后:
        </Text>
        <Text>
          moment('2010-10-20').isAfter('2010-10-19') ? 'true' : 'false'
        </Text>
         <Text>
         运行结果: {moment('2010-10-20').isAfter('2010-10-19') ? 'true' : 'false'}
         </Text>

        <Text>
          4.是否相同或之前:
        </Text>
        <Text>
         moment('2010-10-20').isSameOrBefore('2010-10-20') ? 'true' : 'flase'
        </Text>
         <Text>
         运行结果: {moment('2010-10-20').isSameOrBefore('2010-10-20') ? 'true' : 'flase'}
         </Text>

        <Text>
          5.是否相同或之后 :
        </Text>
        <Text>
         moment('2010-10-20').isSameOrAfter('2010-10-21') ? 'true' : 'flase'
        </Text>
         <Text>
         运行结果: {moment('2010-10-20').isSameOrAfter('2010-10-21') ? 'true' : 'flase'}
         </Text>

        <Text>
          6.检查某个 moment 是否位于其他两个 moment 之间:
          moment('2010-10-20').isBetween('2010-10-19', '2010-10-25')
            ? 'true'
            : 'false'
        </Text>
         <Text>
         运行结果: {moment('2010-10-20').isBetween('2010-10-19', '2010-10-25')
                            ? 'true'
                            : 'false'}
         </Text>

        <Text>
          7.检查当前 moment 是否处于夏令时 :
        </Text>
         <Text>
         运行结果: {moment([2011, 2, 12]).isDST() ? 'true' : 'false'}
         </Text>


        <Text>
          8.判断当前年份是否为闰年 :{moment([2024]).isLeapYear() ? '是' : '否'}
        </Text>

        <Text>
          9.检查变量是否为 moment 对象 : moment.isMoment(moment()) :
          {moment.isMoment(moment()) ? 'true' : 'flase'} / moment.isMoment(new
          Date()) : {moment.isMoment(new Date()) ? 'true' : 'false'}
        </Text>
        <Text>
          10.检查变量是否为原生 js Date 对象 :moment.isDate(new Date()) ：
        </Text>
         <Text>
          moment.isDate(new Date()) ? 'true' : 'flase'} /
          moment.isDate(moment())： {moment.isDate(moment()) ? 'true' : 'flase'
        </Text>
         <Text>
          运行结果:{moment.isDate(new Date()) ? 'true' : 'flase'} /
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
          <Text> {Weekday}</Text>
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
