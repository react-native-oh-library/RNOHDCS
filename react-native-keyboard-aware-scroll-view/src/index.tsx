import React, {useState, useEffect, useRef} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  Platform,
  Button,
  ScrollView,
  Switch,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface WyzProps {
  flag: Boolean;
  changeFlag: Function;
}

const KasvCom: React.FC<WyzProps> = (props): JSX.Element => {
  const [eventStr, setEventStr] = useState<string>('onKeyboardDidHide'); //当前事件
  const [inputValue1, setInputValue1] = useState<string>(''); //软键盘不遮挡输入框内容
  const [inputValue2, setInputValue2] = useState<string>(''); //软键盘遮挡输入框内容
  const [scrollToPositionX, setScrollToPositionX] = useState<string>('0'); //scrollToPositionX参数
  const [scrollToPositionY, setScrollToPositionY] = useState<string>('220'); //scrollToPositionY参数
  const rnkasvRef = useRef<KeyboardAwareScrollView>(null); //组件实例

  //WyzProps
  const {flag, changeFlag} = props;

  //Props:
  const [viewIsInsideTabBarValue, setViewIsInsideTabBarValue] =
    useState<boolean>(false); //添加表示高度的额外偏移量
  const [resetScrollToCoordsValue, setResetScrollToCoordsValue] = useState<{
    x: number;
    y: number;
  }>({x: 0, y: 0}); //在键盘隐藏时将用于重置滚动的坐标
  const [enbleAutomaticScrollValue, setEnbleAutomaticScrollValue] =
    useState<boolean>(false); //当焦点将滚动位置时，默认启用
  const [extraHeightValue, setExtraHeightValue] = useState<number>(0); //聚焦时添加额外的偏移量
  const [extraScrollHeightValue, setExtraScrollHeightValue] =
    useState<number>(0); //向键盘添加额外的偏移量
  const [enableResetScrollToCoordsValue, setEnableResetScrollToCoordsValue] =
    useState<boolean>(false); //添加表示高度的额外偏移量

  const kbDidSHow = () => {
    setEventStr('onKeyboardDidShow');
  };

  const kbDidHide = () => {
    setEventStr('onKeyboardDidHide');
  };

  const scrollToPosition = (x: number, y: number) => {
    rnkasvRef.current?.scrollToPosition(x, y);
  };

  const scrollToEnd = () => {
    rnkasvRef.current?.scrollToEnd();
  };

  return (
    <>
      <KeyboardAwareScrollView
        onKeyboardDidShow={kbDidSHow}
        onKeyboardDidHide={kbDidHide}
        enableAutomaticScroll={enbleAutomaticScrollValue}
        enableResetScrollToCoords={enableResetScrollToCoordsValue}
        viewIsInsideTabBar={viewIsInsideTabBarValue}
        resetScrollToCoords={resetScrollToCoordsValue}
        extraHeight={extraHeightValue}
        extraScrollHeight={extraScrollHeightValue}
        ref={rnkasvRef}>
        <ScrollView>
          <Button
            title="返回"
            onPress={() => {
              changeFlag();
            }}></Button>
          <Text style={styles.placeHolder}>当前软键盘事件:</Text>
          <Text style={styles.placeHolder}>{eventStr}</Text>
          <TextInput style={styles.input} placeholder="键盘事件测试输入框" />
          <Text
            style={{
              fontSize: 28,
              textAlign: 'left',
              lineHeight: 50,
              marginLeft: 20,
              color: 'red',
            }}>
            Props:
          </Text>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 20,
            }}>
            <Text style={styles.placeHolder}>viewIsInsideTabBar</Text>
            <Switch
              onValueChange={value => {
                setViewIsInsideTabBarValue(!viewIsInsideTabBarValue);
              }}
              value={viewIsInsideTabBarValue}
            />
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 20,
            }}>
            <Text style={styles.placeHolder}>viewIsInsideTabBar</Text>
            <Text style={styles.placeHolder}>{'x:0,y:0'}</Text>
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 20,
            }}>
            <Text style={styles.placeHolder}>enbleAutomaticScroll</Text>
            <Switch
              onValueChange={value => {
                setEnbleAutomaticScrollValue(!enbleAutomaticScrollValue);
              }}
              value={enbleAutomaticScrollValue}
            />
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 20,
            }}>
            <Text style={styles.placeHolder}>extraHeight</Text>
            <TextInput
              style={{flex: 0.23, ...styles.positionInput}}
              value={extraHeightValue + ''}
              onChangeText={value => {
                setExtraHeightValue(Number(value));
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 20,
            }}>
            <Text style={styles.placeHolder}>extraScrollHeight</Text>
            <TextInput
              style={{flex: 0.4, ...styles.positionInput}}
              value={String(extraScrollHeightValue)}
              onChangeText={value => {
                setExtraScrollHeightValue(Number(value));
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 20,
            }}>
            <Text style={{fontSize: 22, textAlign: 'center', lineHeight: 50}}>
              enableResetScrollToCoords
            </Text>
            <Switch
              onValueChange={value => {
                setEnableResetScrollToCoordsValue(
                  !enableResetScrollToCoordsValue,
                );
              }}
              value={enableResetScrollToCoordsValue}
            />
          </View>
          <Text
            style={{
              fontSize: 28,
              textAlign: 'left',
              lineHeight: 50,
              marginLeft: 20,
              color: 'red',
            }}>
            Methods:
          </Text>
          <View
            style={{
              marginLeft: 0,
              marginRight: 20,
              marginTop: 5,
              marginBottom: 0,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View style={{display: 'flex', flexDirection: 'row', flex: 1}}>
              <Text style={{flex: 1, ...styles.placeHolder}}>X:</Text>
              <TextInput
                style={{flex: 1, ...styles.positionInput}}
                value={scrollToPositionX}
                onChangeText={value => {
                  setScrollToPositionX(value);
                }}
              />
            </View>
            <View style={{display: 'flex', flexDirection: 'row', flex: 1}}>
              <Text style={{flex: 1, ...styles.placeHolder}}>Y:</Text>
              <TextInput
                style={{flex: 1, ...styles.positionInput}}
                value={scrollToPositionY}
                onChangeText={value => {
                  setScrollToPositionY(value);
                }}
              />
            </View>
          </View>
          <View style={{margin: 20}}>
            <Button
              title={`scrollToPosition(${scrollToPositionX},${scrollToPositionY})`}
              onPress={() =>
                scrollToPosition(
                  Number(scrollToPositionX),
                  Number(scrollToPositionY),
                )
              }
            />
          </View>
          <View style={{margin: 20}}>
            <Button title="scrollToEnd" onPress={() => scrollToEnd()} />
          </View>
          <TextInput style={styles.input} placeholder="测试软键盘遮挡输入框" />
          <Text style={styles.placeHolder}>--scrollToEnd测试占位行--</Text>
          <Text style={styles.placeHolder}>--scrollToEnd测试占位行--</Text>
          <Text style={styles.placeHolder}>--scrollToEnd测试占位行--</Text>
          <Text style={styles.placeHolder}>--scrollToEnd测试占位行--</Text>
          <Text style={styles.placeHolder}>--scrollToEnd测试占位行--</Text>
          <Text style={styles.placeHolder}>--scrollToEnd测试占位行--</Text>
          {/* <Text style={{color:'red',fontSize:20}}>{'!!!当前仅支持软键盘事件(onKeyboardDidHide、onKeyboardDidShow)与Methods(scrollToPosition、scrollToEnd)'}</Text> */}
        </ScrollView>
      </KeyboardAwareScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  placeHolder: {
    fontSize: 28,
    textAlign: 'center',
    lineHeight: 50,
  },
  input: {
    width: '90%',
    marginLeft: '5%',
    borderWidth: 2,
    borderColor: 'black',
    height: 40,
    borderRadius: 10,
    fontSize: 26,
    paddingLeft: 6,
    marginTop: 10,
    marginBottom: 10,
  },
  positionInput: {
    width: '50%',
    marginLeft: '5%',
    borderWidth: 2,
    borderColor: 'black',
    height: 40,
    borderRadius: 10,
    fontSize: 26,
    paddingLeft: 6,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default KasvCom;
