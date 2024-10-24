import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageSourcePropType,
  ColorValue,
  Image,
  ScrollView,
} from 'react-native';
import DropdownAlert, {
  DropdownAlertData,
  DropdownAlertType,
  DropdownAlertColor,
  DropdownAlertProps,
  DropDownAlertImage,
  DropDownAlertTestID,
  DropdownAlertPosition,
  DropdownAlertToValue,
  DropdownAlertDismissAction,
} from 'react-native-dropdownalert';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import NotificationAndroid from './Notification/NotificationAndroid';
import NotificationIOS from './Notification/NotificationIOS';

type ListItem = {
  name: string;
  itshould: string;
  alertData?: DropdownAlertData;
  alertProps?: DropdownAlertProps;
  color: ColorValue;
  needMessage?:boolean |undefined
};

type ListItemIndex = {
  item: ListItem;
  index: number;
};

function DropdownalertDemo(): React.JSX.Element {
  const defaultSelected: ListItem = {
    name: 'Default',
    itshould: '',
    color: DropdownAlertColor.Default,
  };
  const [selected, setSelected] = useState(defaultSelected);
  const [iMessage, setIMessage] = useState("");
  const [processing, setProcessing] = useState(false);
  let alert = useRef(
    (_data?: DropdownAlertData) => new Promise<DropdownAlertData>(res => res),
  );
  let dismiss = useRef(() => {});
  const reactNativeLogoSrc: ImageSourcePropType = {
    uri: 'https://reactnative.dev/docs/assets/favicon.png',
  };

  const items: ListItem[] = [
    {
      name: 'Warn',
      itshould:
        'DropdownAlertType.Warn  DropdownAlertColor.Warn 设置title和message属性',
      alertData: {
        type: DropdownAlertType.Warn,
        title: 'I am title',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      color: DropdownAlertColor.Warn
    },
    {
      name: 'Info',
      itshould: 'DropdownAlertType.Info  DropdownAlertColor.Info',
      alertData: {
        type: DropdownAlertType.Info,
        title: 'Info',
        message:
          'The system goes offline from midnight to 3 AM for regular maintenance.',
      },
      color: DropdownAlertColor.Info,
    },
    {
      name: 'Success',
      itshould: 'DropdownAlertType.Success  DropdownAlertColor.Success',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'Success',
        message: 'The order is complete and details sent to email.',
      },
      color: DropdownAlertColor.Success,
    },
    {
      name: 'Default color',
      itshould: '按钮颜色应该为 Default color',
      alertData: {
        type: DropdownAlertType.Success,
        title: '测试Default color',
        message:
          '（I am message）The order is complete and details sent to email.',
      },
      color: DropdownAlertColor.Default,
    },
    {
      name: 'Error',
      itshould: 'DropdownAlertType.Error  DropdownAlertColor.Error',
      alertData: {
        type: DropdownAlertType.Error,
        title: 'Error',
        message:
          'Something went wrong. Please contact support if error persists.',
      },
      color: DropdownAlertColor.Error,
    },
    {
      name: 'Custom',
      itshould:
        'Custom自定义样式；alertData.source引用网络图片资源；interval 5000',
      alertData: {
        type: '',
        title: 'Custom',
        message: '这条消息将会在5秒之后收起',
        source: reactNativeLogoSrc,
        interval: 5000,
      },
      alertProps: {
        alertViewStyle: styles.alertView,
      },
      color: styles.alertView.backgroundColor,
    },
    {
      name: 'Custom',
      itshould: 'interval 2000',
      alertData: {
        type: '',
        title: 'Custom',
        message: '这条消息将会在2秒之后收起',
        source: reactNativeLogoSrc,
        interval: 2000,
      },
      alertProps: {
        alertViewStyle: styles.alertView,
      },
      color: styles.alertView.backgroundColor,
    },
    {
      name: 'resolve test',
      itshould: 'resolve test',
      alertData: {
        type: '',
        title: 'Custom',
        message: '',
        source: reactNativeLogoSrc,
        resolve: () => {
          setIMessage("I am resolved");
        },
      },
      alertProps: {
        alertViewStyle: styles.alertView,
      },
      color: styles.alertView.backgroundColor,
    },
    {
      name: 'DropDownAlertImage.Error',
      itshould: '展示 DropDownAlertImage.Error 图片',
      alertData: {
        type: '',
        title: 'DropDownAlertImage.Error 测试',
        message: '展示 DropDownAlertImage.Error 图片',
        source: DropDownAlertImage.Error,
      },
      alertProps: {
        alertViewStyle: styles.alertView,
      },
      color: styles.alertView.backgroundColor,
    },
    {
      name: 'DropDownAlertImage.Info',
      itshould: '展示 DropDownAlertImage.Info 图片(同Error)',
      alertData: {
        type: '',
        title: 'DropDownAlertImage.Info 测试',
        message: '展示 DropDownAlertImage.Info 图片(同Error)',
        source: DropDownAlertImage.Info,
      },
      alertProps: {
        alertViewStyle: styles.alertView,
      },
      color: styles.alertView.backgroundColor,
    },
    {
      name: 'DropDownAlertImage.Warn',
      itshould: '展示 DropDownAlertImage.Warn 图片',
      alertData: {
        type: '',
        title: 'DropDownAlertImage.Warn 测试',
        message: '展示 DropDownAlertImage.Warn 图片',
        source: DropDownAlertImage.Warn,
      },
      alertProps: {
        alertViewStyle: styles.alertView,
      },
      color: styles.alertView.backgroundColor,
    },
    {
      name: 'DropDownAlertImage.Success',
      itshould: '展示 DropDownAlertImage.Success 图片',
      alertData: {
        type: '',
        title: 'DropDownAlertImage.Success 测试',
        message: '展示 DropDownAlertImage.Success 图片',
        source: DropDownAlertImage.Success,
      },
      alertProps: {
        alertViewStyle: styles.alertView,
      },
      color: styles.alertView.backgroundColor,
    },
    {
      name: 'DropDownAlertImage.Cancel',
      itshould: 'source',
      alertData: {
        type: '',
        title: 'DropDownAlertImage.Cancel 测试',
        message: '展示 DropDownAlertImage.Cancel 图片',
        source: DropDownAlertImage.Cancel,
      },
      alertProps: {
        alertViewStyle: styles.alertView,
      },
      color: styles.alertView.backgroundColor,
    },
    {
      name: '模拟iOS样式',
      itshould: '验证自定义的children 模拟iOS样式 children: <NotificationIOS />',
      alertProps: {
        children: <NotificationIOS />,
      },
      color: 'gray',
    },
    {
      name: '模拟Android样式',
      itshould: '验证自定义的children 模拟Android样式 children: <NotificationAndroid />',
      alertProps: {
        children: <NotificationAndroid />,
      },
      color: '#1F89C7',
    },
    {
      name: 'Cancel dismissInterval 3000',
      itshould: 'showCancel true ',
      alertData: {
        type: DropdownAlertType.Info,
        title: 'Info',
        message:
          'This demonstrates an info alert with a cancel button. Tap cancel button to dismiss.',
      },
      alertProps: {
        dismissInterval: 3000,
        showCancel: true,
        onDismissPressDisabled: true,
      },
      color: 'teal',
    },
    {
      name: 'Bottom',
      itshould: 'alertPosition bottom（默认为 top）',
      alertData: {
        type: DropdownAlertType.Info,
        title: 'Info',
        message: 'This demonstrates an info alert with bottom alert position.',
      },
      alertProps: {
        alertPosition: 'bottom',
        infoColor: 'green',
      },
      color: 'green',
    },
    {
      name: 'dismiss',
      itshould: '验证dismiss属性，绑定dismiss方法',
      alertData: {
        type: DropdownAlertType.Warn,
        title: '',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        dismiss: () => {
          setIMessage("I am dismiss");
        },
      },
      color: DropdownAlertColor.Warn,
      needMessage:true

    },
    {
      name: 'alert',
      itshould: '验证alert属性，绑定alert方法',
      alertData: {
        type: DropdownAlertType.Warn,
        title: '',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        alert: () => {
          setIMessage("I am alert!");
        },
      },
      color: DropdownAlertColor.Warn,
      needMessage:true
    },
    {
      name: 'elevation 10 test',
      itshould: 'elevation:10',
      alertData: {
        type: DropdownAlertType.Warn,
        title: '',
        message: 'elevation:10 elevation:10 elevation:10',
      },
      alertProps: {
        elevation: 10,
      },
      color: DropdownAlertColor.Warn,
    },
    {
      name: 'elevation 100 test',
      itshould: 'elevation:100',
      alertData: {
        type: DropdownAlertType.Warn,
        title: '',
        message: 'elevation:100 elevation:100 elevation:100',
      },
      alertProps: {
        elevation: 100,
      },
      color: DropdownAlertColor.Warn,
    },
    {
      name: 'titleNumberOfLines 1 messageNumberOfLines 1 test',
      itshould: 'titleNumberOfLines 1 messageNumberOfLines 1',
      alertData: {
        type: DropdownAlertType.Warn,
        title:
          'I am title  I am title  I am title  I am title  I am title  I am title  I am title I am title  I am title  I am title',
        message:
          'messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines ',
      },
      alertProps: {
        titleNumberOfLines: 1,
        messageNumberOfLines: 1,
      },
      color: DropdownAlertColor.Warn,
    },
    {
      name: 'titleNumberOfLines 2 messageNumberOfLines 3 test',
      itshould: 'titleNumberOfLines 2 messageNumberOfLines 3',
      alertData: {
        type: DropdownAlertType.Warn,
        title:
          'I am title  I am title  I am title  I am title  I am title  I am title  I am title I am title  I am title  I am title',
        message:
          'messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines messageNumberOfLines ',
      },
      alertProps: {
        titleNumberOfLines: 2,
        messageNumberOfLines: 3,
      },
      color: DropdownAlertColor.Warn,
    },
  ];

  function _onSelect(item: ListItem): void {
    setSelected(item);
    setTimeout(async () => {
      setProcessing(true);
      await alert.current(item.alertData);
      setProcessing(false);
    }, 10);
  }

  return (
    <View>
      <DropdownAlert
        alert={func => (alert.current = func)}
        dismiss={func => (dismiss.current = func)}
        {...selected.alertProps}
      />
      <ScrollView>
        <Tester>
          <TestSuite name="drop down alert">
            {items.map((item: ListItem, index: number) => {
              return item.needMessage?(<TestCase itShould={item.itshould} key={index}>
                                  <Text>show message:{iMessage}</Text>
                <TouchableOpacity
                  style={[styles.item, {backgroundColor: item.color}]}
                  onPress={() => _onSelect(item)}
                  disabled={processing}>
                  <Text style={styles.name}>{item.name}</Text>
                </TouchableOpacity>
              </TestCase>):(
                <TestCase itShould={item.itshould} key={index}>
                  <TouchableOpacity
                    style={[styles.item, {backgroundColor: item.color}]}
                    onPress={() => _onSelect(item)}
                    disabled={processing}>
                    <Text style={styles.name}>{item.name}</Text>
                  </TouchableOpacity>
                </TestCase>
              );
            })}

            {Object.keys(DropDownAlertTestID).map(
              (emunkey: string, index: number) => {
                const emunValue =
                  DropDownAlertTestID[
                    emunkey as keyof typeof DropDownAlertTestID
                  ];
                return (
                  <TestCase
                    itShould={
                      '展示 DropDownAlertTestID的 ' +
                      emunkey +
                      ' 属性值为：' +
                      emunValue
                    }
                    key={index}>
                    <Text>
                      DropDownAlertTestID的 {emunkey} 属性值为：{emunValue}
                    </Text>
                  </TestCase>
                );
              },
            )}
            {Object.keys(DropdownAlertPosition).map(
              (emunkey: string, index: number) => {
                const emunValue =
                  DropdownAlertPosition[
                    emunkey as keyof typeof DropdownAlertPosition
                  ];
                return (
                  <TestCase
                    itShould={
                      '展示 DropdownAlertPosition的 ' +
                      emunkey +
                      ' 枚举值为：' +
                      emunValue
                    }
                    key={index}>
                    <Text>
                      DropdownAlertPosition的 {emunkey} 枚举值为：{emunValue}
                    </Text>
                  </TestCase>
                );
              },
            )}
            {Object.keys(DropdownAlertDismissAction).map(
              (emunkey: string, index: number) => {
                const emunValue =
                  DropdownAlertDismissAction[
                    emunkey as keyof typeof DropdownAlertDismissAction
                  ];
                return (
                  <TestCase
                    itShould={
                      '展示 DropdownAlertDismissAction的 ' +
                      emunkey +
                      ' 枚举值为：' +
                      emunValue
                    }
                    key={index}>
                    <Text>
                      DropdownAlertDismissAction的 {emunkey} 枚举值为：
                      {emunValue}
                    </Text>
                  </TestCase>
                );
              },
            )}
            {Object.keys(DropdownAlertToValue).map(
              (emunkey: string, index: number) => {
                const emunValue =
                  DropdownAlertToValue[
                    emunkey as keyof typeof DropdownAlertToValue
                  ];
                return (
                  <TestCase
                    itShould={
                      '展示 DropdownAlertToValue的 ' +
                      emunkey +
                      ' 枚举值为：' +
                      emunValue
                    }
                    key={index}>
                    <Text>
                      DropdownAlertToValue的 {emunkey} 枚举值为：{emunValue}
                    </Text>
                  </TestCase>
                );
              },
            )}
          </TestSuite>
        </Tester>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F4F3E9',
  },
  item: {
    padding: 12,
    margin: 4,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'whitesmoke',
  },
  alertView: {
    padding: 8,
    backgroundColor: '#6441A4',
  },
});

export default DropdownalertDemo;
