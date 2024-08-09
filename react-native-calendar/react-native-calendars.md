<!-- {% raw %} -->
> 模板版本：v0.2.2

<p align="center">
  <h1 align="center"> <code>react-native-calendars</code> </h1>
</p>
<p align="center">
    <a href="https://github.com/wix/react-native-calendars">
        <img src="https://img.shields.io/badge/platforms-android%20|%20ios%20|%20harmony%20-lightgrey.svg" alt="Supported platforms" />
    </a>
    <a href="https://github.com/wix/react-native-calendars/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License" />
    </a>
</p>

> [!TIP] [Github 地址](https://github.com/wix/react-native-calendars)

## 安装与使用

#### **npm**

```bash
npm install --save react-native-calendars@1.1304.1
```

#### **yarn**

```bash
yarn install --save react-native-calendars@1.1304.1
```

下面的代码展示了这个库的基本使用场景：

```js
import React, { useState } from "react";
import { Calendar, CalendarList, Agenda ,AgendaList,CalendarProvider,ExpandableCalendar,Timeline,WeekCalendar} from "react-native-calendars";
import { View, StyleSheet } from "react-native";

const MySvgComponent = () => {
  const [selected, setSelected] = useState("");
  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      />
      <Agenda
        items={{
        '2012-05-22': [{name: 'item 1 - any js object'}],
        '2012-05-23': [{name: 'item 2 - any js object', height: 80}],
        '2012-05-24': [],
        '2012-05-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
       }}
      />
       <AgendaList
        scrollToNextEvent={true}
      />
       <CalendarProvider
        date={'yyyy-MM-dd'}
      />
       <ExpandableCalendar
        disablePan={false}
      />
       <Timeline
        theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#b6c1cd',
                textSectionTitleDisabledColor: '#d9e1e8',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',                          
              }}
      />
       <WeekCalendar
        hideDayNames={true}
      />
    </View>
  );
 
};

const styles = StyleSheet.create({
  container: {
    position: "absolute", // 绝对定位
    bottom: 210, // 底部边界与父容器底部对齐
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: "#CC00FF",
  },
});
export default MySvgComponent;
```

## 约束与限制

### 兼容性

本文档内容基于以下版本验证：

1. RNOH: 0.72.20; SDK：HarmonyOS NEXT Developer Preview2; IDE：DevEco Studio 5.0.3.200; ROM：3.0.0.18;

## 属性和方法

> [!tip] "Platform"列表示该属性在原三方库上支持的平台。

> [!tip] "HarmonyOS Support"列为 yes 表示 HarmonyOS 平台支持该属性或者方法；no 则表示不支持；partially 表示部分支持。使用方法跨平台一致，效果对标 iOS 或 Android 的效果。
## Agenda 

| Name                     | Description                                                                                                | Type                 | Required | Platform | HarmonyOS Support |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | -------------------- | -------- | -------- | ----------------- |
| items                    | the list of items that have to be displayed in agenda. If you want to render item as empty date the value of date key has to be an empty array []. If there exists no value for date key it is considered that the date in question is not yet loaded                                    | AgendaSchedule                | no       | All      | yes               |
| selected                 | initially selected day | string               | no       | All      | yes               |
| hideKnob                 | Whether to hide the knob | boolean               | no       | All      | yes               |
| showClosingKnob                 | Whether the knob should always be visible (when hideKnob = false) | boolean               | no       | All      | yes               |
| showOnlySelectedDayItems                 | Whether to show items only for the selected date | boolean               | no       | All      | yes               |

###### API

| Name                  | Description                                                        | Type     | Required | Platform | HarmonyOS Support |
| --------------------- | ------------------------------------------------------------------ | -------- | -------- | -------- | ----------------- |
| loadItemsForMonth            | Handler which gets executed when items for a certain month should be loaded (month became visible)                           | function | no       | All      | yes               |
| onDayChange        | Handler which gets executed when day changes while scrolling agenda list                      | function | no       | All      | yes               |
| onCalendarToggled         | Handler which gets executed when the calendar is opened or closed         | function | no       | All      | yes               |
| renderKnob | Replace default agenda's knob with a custom one | function | no       | All      | yes               |
| renderEmptyData                 | Replace default ActivityIndicator with a custom one | function               | no       | All      | yes               |

## AgendaList 

| Name                     | Description                                                                                                | Type                 | Required | Platform | HarmonyOS Support |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | -------------------- | -------- | -------- | ----------------- |
| theme                    | Specify theme properties to override specific styles for calendar parts                                    | Theme                | no       | All      | yes               |
| dayFormat                 | Day format in section title. Formatting values: http://arshaw.com/xdate/#Formatting | string               | no       | All      | yes               |
| useMoment                 | Whether to use moment.js for date string formatting | boolean               | no       | All      | yes               |
| markToday                 | Whether to mark today's title with the 'Today, ...' string | boolean               | no       | All      | yes               |
| avoidDateUpdates                 | Whether to block the date change in calendar (and calendar context provider) when agenda scrolls               | boolean       | All      | yes               |
| scrollToNextEvent                 | Whether to enable scrolling the agenda list to the next date with content when pressing a day without content               | boolean       | All      | yes               |
| viewOffset                 | Offset scroll to the section               | number       | All      | yes               |
| sectionStyle                 | The style passed to the section view               | ViewStyle       | All      | yes               |

###### API

| Name                  | Description                                                        | Type     | Required | Platform | HarmonyOS Support |
| --------------------- | ------------------------------------------------------------------ | -------- | -------- | -------- | ----------------- |
| dayFormatter            | A function to custom format the section header's title                           | function | no       | All      | yes               |


## Calendar 

| Name                     | Description                                                                                                | Type                 | Required | Platform | HarmonyOS Support |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | -------------------- | -------- | -------- | ----------------- |
| theme                    | Specify theme properties to override specific styles for calendar parts                                    | Theme                | no       | All      | yes               |
| firstDay                 | If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday | number               | no       | All      | yes               |
| hideArrows                 | Whether to hide the arrows | boolean               | no       | All      | yes               |
| disableArrowLeft                 | Whether to disable the left arrow | boolean               | no       | All      | yes               |
| disableArrowRight                 | Whether to disable the right arrow | boolean               | no       | All      | yes               |
| arrowsHitSlop                 | Left & Right arrows. Additional distance outside of the buttons in which a press is detected, default: 20 |   number               | no       | All      | yes               |
| hideDayNames                 | Whether to hide the days names | boolean               | no       | All      | yes               |
| monthFormat                | Month format for the header's title. Formatting values | string               | no       | All      | yes               |
| displayLoadingIndicator  | Display loading indicator                                                                                  | boolean              | no       | All      | yes               |
| showWeekNumbers          | Show week numbers                                                                                          | boolean              | no       | All      | yes               |
| style                    | Specify style for calendar container element                                                               | StyleProp<ViewStyle> | no       | All      | yes               |
| disabledDaysIndexes                    | Whether to apply custom disable color to selected day indexes                                                               | number[] | no       | All      | yes               |
| current                  | Initially visible month                                                                                    | string               | no       | All      | yes               |
| initialDate              | Initially visible month. If changed will initialize the calendar to this value                             | string               | no       | All      | yes               |
| minDate                  | Minimum date that can be selected, dates before minDate will be grayed out                                 | string               | no       | All      | yes               |
| maxDate                  | Maximum date that can be selected, dates after maxDate will be grayed out                                  | string               | no       | All      | yes               |
| markedDates              | Collection of dates that have to be marked                                                                 | MarkedDates          | no       | All      | yes               |
| hideExtraDays            | Do not show days of other months in month page                                                             | boolean              | no       | All      | yes               |
| showSixWeeks             | Always show six weeks on each month (only when hideExtraDays = false)                                      | boolean              | no       | All      | yes               |
| disableMonthChange       | Disables changing month when click on days of other months (when hideExtraDays is false)                   | boolean              | no       | All      | yes               |
| enableSwipeMonths        | Enable the option to swipe between months                                                                  | boolean              | no       | All      | yes               |
| disabledByDefault        | Disable days by default                                                                                    | boolean              | no       | All      | yes               |
| headerStyle              | Style passed to the header                                                                                 | StyleProp<ViewStyle> | no       | All      | yes               |
| customHeader             | Allow rendering a totally custom header                                                                    | any                  | no       | All      | yes               |
| allowSelectionOutOfRange | Allow selection of dates before minDate or after maxDate                                                   | boolean              | no       | All      | yes               |
| disableAllTouchEventsForDisabledDays | Whether to disable all touch events for disabled days (can be override with 'disableTouchEvent' in 'markedDates')                                                   | boolean              | no       | All      | yes               |
| disableAllTouchEventsForInactiveDays | Whether to disable all touch events for inactive days (can be override with 'disableTouchEvent' in 'markedDates')                                                   | boolean              | no       | All      | yes               |
| customHeaderTitle | Replace default title with custom element                                                   | JSX.Element              | no       | All      | yes               |
| dayComponent | Replace default day with custom day rendering component element                                                   | JSX.Element              | no       | All      | yes               |
###### API

| Name                  | Description                                                        | Type     | Required | Platform | HarmonyOS Support |
| --------------------- | ------------------------------------------------------------------ | -------- | -------- | -------- | ----------------- |
| onDayPress            | Handler which gets executed on day press                           | function | no       | All      | yes               |
| onDayLongPress        | Handler which gets executed on day long press                      | function | no       | All      | yes               |
| onMonthChange         | Handler which gets executed when month changes in calendar         | function | no       | All      | yes               |
| onVisibleMonthsChange | Handler which gets executed when visible month changes in calendar | function | no       | All      | yes               |
| onPressArrowLeft                 | Handler which gets executed when press left arrow. It receive a callback to go to the previous month | function               | no       | All      | yes               |
| onPressArrowRight                 | Handler which gets executed when press right arrow. It receive a callback to go to the next month | function               | no       | All      | yes               |
| renderArrow                 | Replace default arrows with custom ones (direction: 'left','right') | function               | no       | All      | yes               |
| renderHeader              | Replace default title with custom one                             | function               | no       | All      | yes               |

## CalendarList 

| Name                     | Description                                                                                                | Type                 | Required | Platform | HarmonyOS Support |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | -------------------- | -------- | -------- | ----------------- |
| pastScrollRange                    | Max amount of months allowed to scroll to the past                                    | number                | no       | All      | yes               |
| futureScrollRange                 | Max amount of months allowed to scroll to the future | number               | no       | All      | yes               |
| calendarStyle                 | Specify style for calendar container element | ViewStyle               | no       | All      | yes               |
| calendarHeight                 | Dynamic calendar height | number               | no       | All      | yes               |
| calendarWidth                 | Used when calendar scroll is horizontal, (when pagingEnabled = false) | number               | no       | All      | yes               |
| staticHeader                 | Whether to use a fixed header that doesn't scroll (when horizontal = true) | boolean               | no       | All      | yes               |
| showScrollIndicator                 | Whether to enable or disable vertical / horizontal scroll indicator | boolean               | no       | All      | yes               |

## CalendarProvider 

| Name                     | Description                                                                                                | Type                 | Required | Platform | HarmonyOS Support |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | -------------------- | -------- | -------- | ----------------- |
| theme                    | Specify theme properties to override specific styles for calendar parts                                    | Theme                | no       | All      | yes               |
| style                 | Specify style for calendar container element | ViewStyle               | no       | All      | yes               |
| date                 | Initial date in 'yyyy-MM-dd' format | string              | no       | All      | yes               |
| showTodayButton                 | Whether to show the today button | boolean               | no       | All      | yes               |
| todayButtonStyle                 | Today button's style | ViewStyle               | no       | All      | yes               |
| todayBottomMargin                 | Today button's top position | number               | no       | All      | yes               |
| disabledOpacity                 | The opacity for the disabled today button (0-1) | number               | no       | All      | yes               |
###### API

| Name                  | Description                                                        | Type     | Required | Platform | HarmonyOS Support |
| --------------------- | ------------------------------------------------------------------ | -------- | -------- | -------- | ----------------- |
| onDateChanged            | Handler which gets executed when the date changes                           | function | no       | All      | yes               |
| onMonthChange        | Handler which gets executed when the month changes                      | function | no       | All      | yes               |

## ExpandableCalendar 

| Name                     | Description                                                                                                | Type                 | Required | Platform | HarmonyOS Support |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | -------------------- | -------- | -------- | ----------------- |
| initialPosition                    | The initial position of the calendar ('open' or 'closed')                                    | Positions                | no       | All      | yes               |
| disablePan                 | Whether to disable the pan gesture and disable the opening and closing of the calendar (initialPosition will persist) | boolean               | no       | All      | yes               |
| hideKnob                 | Whether to hide the knob | boolean              | no       | All      | yes               |
| leftArrowImageSource                 | The source for the left arrow image | ImageSourcePropType               | no       | All      | yes               |
| rightArrowImageSource                 | The source for the right arrow image | ImageSourcePropType               | no       | All      | yes               |
| allowShadow                 | Whether to have shadow/elevation for the calendar | boolean               | no       | All      | yes               |
| disableWeekScroll                 | Whether to disable the week scroll in closed position | boolean               | no       | All      | yes               |
| openThreshold                 | The threshold for opening the calendar with the pan gesture | number               | no       | All      | yes               |
| closeThreshold                 | closeThreshold | number               | no       | All      | yes               |
| openThreshold                 | The threshold for opening the calendar with the pan gesture | number               | no       | All      | yes               |
| closeOnDayPress                 | Whether to close the calendar on day press| boolean               | no       | All      | yes               |
###### API

| Name                  | Description                                                        | Type     | Required | Platform | HarmonyOS Support |
| --------------------- | ------------------------------------------------------------------ | -------- | -------- | -------- | ----------------- |
| onCalendarToggled            | HHandler which gets executed when the calendar is opened or closed                           | function | no       | All      | yes               |

## Timeline 

| Name                     | Description                                                                                                | Type                 | Required | Platform | HarmonyOS Support |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | -------------------- | -------- | -------- | ----------------- |
| theme                    | Specify theme properties to override specific styles for calendar parts                                    | Theme                | no       | All      | yes               |
| style                 | Specify style for calendar container element | ViewStyle               | no       | All      | yes               |
| events                 | List of events to render on the timeline | Event[]              | no       | All      | yes               |
| start                 | The timeline day start time | number               | no       | All      | yes               |
| end                 | The timeline day end time | number              | no       | All      | yes               |
| scrollToFirst                 | Whether to scroll to the first event | boolean               | no       | All      | yes               |
| format24h                | Whether to use 24 hours format for the timeline hours | boolean               | no       | All      | yes               |

###### API

| Name                  | Description                                                        | Type     | Required | Platform | HarmonyOS Support |
| --------------------- | ------------------------------------------------------------------ | -------- | -------- | -------- | ----------------- |
| onEventPress            | Handler which gets executed when event is pressed                           | function | no       | All      | yes               |
| onBackgroundLongPress            | Handler which gets executed when background is long pressed. Pass to handle creation of a new event                           | function | no       | All      | yes               |
| onBackgroundLongPressOut            | Handler which gets executed when background's long pressed released. Pass to handle creation of a new event                           | function | no       | All      | yes               |
| renderEvent            | Specify a custom event block                           | function | no       | All      | yes               |

## WeekCalendar 

| Name                     | Description                                                                                                | Type                 | Required | Platform | HarmonyOS Support |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | -------------------- | -------- | -------- | ----------------- |
| allowShadow                    | Whether to have shadow/elevation for the calendar                                   | boolean                | no       | All      | yes               |
| hideDayNames                 | Whether to hide the names of the week days | boolean               | no       | All      | yes               |

## 遗留问题

## 其他

## 开源协议

本项目基于 [The MIT License (MIT)](https://github.com/wix/react-native-calendars/blob/master/LICENSE) ，请自由地享受和参与开源。

<!-- {% endraw %} -->