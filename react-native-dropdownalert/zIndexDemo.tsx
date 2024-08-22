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
  Platform
} from 'react-native';
import DropdownAlert, {
  DropdownAlertData,
  DropdownAlertType,
  DropdownAlertColor,
  DropdownAlertProps,
} from 'react-native-dropdownalert';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

type ListItem = {
  name: string;
  itshould: string;
  alertData?: DropdownAlertData;
  alertProps?: DropdownAlertProps;
  color: ColorValue;
};

type ListItemIndex = {
  item: ListItem;
  index: number;
};

function ZIndexDemo(): React.JSX.Element {
  const defaultSelected: ListItem = {
    name: 'Default',
    itshould: '',
    color: DropdownAlertColor.Default,
  };
  const [selected, setSelected] = useState(defaultSelected);
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
      name: 'no zIndex',
      itshould:
        'DropdownAlertType.Warn  DropdownAlertColor.Warn 设置title和message属性',
      alertData: {
        type: DropdownAlertType.Warn,
        title: 'no zIndex',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      color: DropdownAlertColor.Warn,
    },
    {
      name: 'zIndex:1',
      itshould:
        'DropdownAlertType.Warn  DropdownAlertColor.Warn 设置title和message属性',
      alertData: {
        type: DropdownAlertType.Info,
        title: 'zIndex:1',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        zIndex: 1,
      },
      color: DropdownAlertColor.Info,
    },
    {
      name: 'zIndex:2',
      itshould:
        'DropdownAlertType.Warn  DropdownAlertColor.Warn 设置title和message属性',
      alertData: {
        type: DropdownAlertType.Success,
        title: 'zIndex:2',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        zIndex: 2,
      },
      color: DropdownAlertColor.Success,
    },
    {
      name: 'zIndex:-1',
      itshould:
        'DropdownAlertType.Warn  DropdownAlertColor.Warn 设置title和message属性',
      alertData: {
        type: DropdownAlertType.Info,
        title: 'zIndex:-1',
        message:
          '（I am message）The device battery is low. It will go into low power mode in 5 minutes.',
      },
      alertProps: {
        zIndex: 8,
      },
      color: DropdownAlertColor.Info,
    },
  ];

  function _onSelect(items: ListItem[]): void {
    setProcessing(true);

    setTimeout(async () => {
      items.forEach(i => {
        alert.current(i.alertData);
      });
    }, 10);
    setProcessing(false);
  }

  return (
    <ScrollView>
      {items.map((item: ListItem, index: number) => {
        return (
          <DropdownAlert
            key={index}
            alert={func => (alert.current = func)}
            dismiss={func => (dismiss.current = func)}
            {...item.alertProps}
          />
        );
      })}
      <Tester>
        <TestSuite name="drop down alert">
          <TestCase itShould={'zIndex test'}>
            <View style={{height: 300}}>
            </View>

            <TouchableOpacity
              style={[styles.item, {backgroundColor: DropdownAlertColor.Info}]}
              onPress={() => _onSelect(items)}
              disabled={processing}>
              <Text style={styles.name}>alert</Text>
            </TouchableOpacity>
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
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

export default ZIndexDemo;
