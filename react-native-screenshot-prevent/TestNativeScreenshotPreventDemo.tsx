import {
  Tester,
  Filter,
  TestSuite,
  TestCase as _TestCase,
} from '@rnoh/testerino';
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Alert,
  FlatList,
  SafeAreaView,
  StatusBar,
  Linking,
  TouchableOpacity,
  Button,
} from 'react-native';
import RNScreenshotPrevent, {
  addListener,
} from '@react-native-oh-tpl/react-native-screenshot-prevent';

type TesterSkipProp =
  | {
      android: string | boolean;
      harmony: TesterHarmonySkipProp;
    }
  | string;

function prepareSkipProp(skipProp: TesterSkipProp | undefined) {
  return skipProp
    ? typeof skipProp === 'string'
      ? skipProp
      : Platform.select({
          android: skipProp?.android,
          harmony: prepareHarmonySkipProp(skipProp?.harmony),
        })
    : undefined;
}
function Example({
  itShould,
  children,
  skip,
  tags,
  modal,
}: {
  itShould: string;
  children: any;
  modal?: boolean;
  skip?: TesterSkipProp;
  tags?: TesterTag[];
}) {
  return (
    <_TestCase
      itShould={itShould}
      modal={modal}
      tags={tags}
      skip={prepareSkipProp(skip)}>
      {children}
    </_TestCase>
  );
}
const TestCase = {
  Example: Example,
};

export function TestNativeScreenshotPreventDemo({filter}: {filter: Filter}) {
  const subscriptionRef = React.useRef({});
  const [text, setText] = React.useState('');
  const handleClick1 = () => {
    RNScreenshotPrevent.enabled(true);
  };
  const handleClick2 = () => {
    RNScreenshotPrevent.enabled(false);
  };
  const handleClick3 = () => {
    const subscription = addListener(() => {
      setText('监听到截屏操作');
    });
    subscriptionRef.current = subscription;
  };
  const handleClick4 = () => {
    const TAG2 = '测试事件监听RN侧';
    console.info(TAG2, JSON.stringify(subscriptionRef));
    subscriptionRef.current.remove();
    setText('');
  };

  return (
    <Tester style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <TestSuite name="React Native Screenshot Prevent">
          <TestCase.Example itShould="测试enabled(true)方法">
            <View style={styles.inputpart}>
              <Button
                title="点击测试enable,开启禁止截屏与录屏功能"
                onPress={handleClick1}></Button>
            </View>
          </TestCase.Example>
          <TestCase.Example itShould="测试enabled(false)方法">
            <View style={styles.inputpart}>
              <Button
                title="点击测试enable,关闭禁止截屏与录屏功能"
                onPress={handleClick2}></Button>
            </View>
          </TestCase.Example>
          <TestCase.Example itShould="测试addListener方法1">
            <View style={styles.inputpart}>
              <Button
                title="点击测试addListener,开启截屏监听"
                onPress={handleClick3}></Button>
            </View>
            <View style={styles.outputpart}>
              <Text>
                说明：点击按钮注册回调函数，当截屏时，：后面有文字提示---：
                {text}
              </Text>
            </View>
          </TestCase.Example>
          <TestCase.Example itShould="测试addListener方法2">
            <View style={styles.inputpart}>
              <Button
                title="点击测试addListener,关闭截屏监听"
                onPress={handleClick4}></Button>
            </View>
          </TestCase.Example>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#333',
  },
  inputpart: {
    marginBottom: 10,
  },
  output: {},
  url: {
    color: 'red',
    fontFamily: 'Times',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: ('bold', '700'),
  },
  phone: {
    color: 'green',
    fontFamily: 'Times',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: ('bold', '700'),
  },
  email: {
    color: 'blue',
    fontFamily: 'Times',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: ('bold', '700'),
  },
  name: {
    color: 'purple',
    fontFamily: 'Times',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: ('bold', '700'),
  },
  username: {
    color: 'orange',
    fontFamily: 'Times',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: ('bold', '700'),
  },
  magicNumber: {
    color: 'pink',
    fontFamily: 'Times',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: ('bold', '700'),
  },
  hashTag: {
    color: '#009f5d',
    fontFamily: 'Times',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: ('bold', '700'),
  },
  idnumber: {
    color: '#8cc540',
    fontFamily: 'Times',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: ('bold', '700'),
  },
  idnumber2: {
    color: '#880000',
    fontFamily: 'Times',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: ('bold', '700'),
  },
  fontstyle: {
    fontSize: 32,
    fontWeight: 600,
  },
  buttomMargin: {
    width: '100%',
    height: 60,
  },
});
