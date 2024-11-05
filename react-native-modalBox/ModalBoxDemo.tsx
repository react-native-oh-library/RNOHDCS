import {
  ScrollView,
  Easing,
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';
import React, {useState, useRef, useEffect} from 'react';

import ModalBox from 'react-native-modalbox';

const PALETTE = {
  REACT_CYAN_LIGHT: 'hsl(193, 95%, 68%)',
  REACT_CYAN_DARK: 'hsl(193, 95%, 30%)',
};

const NavigationContext = React.createContext<
  | {
      currentPageName: string;
      navigateTo: (pageName: string) => void;
      registerPageName: (pageName: string) => void;
      registeredPageNames: string[];
    }
  | undefined
>(undefined);

function NavigationContainer({
  initialPage = 'INDEX',
  hasHeader = true,
  children,
}: {
  initialPage?: string;
  children: any;
  hasHeader?: boolean;
}) {
  const [currentPageName, setCurrentPageName] = React.useState(initialPage);
  const [registeredPageNames, setRegisteredPageNames] = React.useState<
    string[]
  >([]);

  return (
    <NavigationContext.Provider
      value={{
        currentPageName,
        navigateTo: setCurrentPageName,
        registerPageName: (pageName: string) => {
          setRegisteredPageNames(pageNames => {
            if (pageNames.includes(pageName)) {
              return pageNames;
            }
            return [...pageNames, pageName];
          });
        },
        registeredPageNames,
      }}>
      <View style={{width: '100%', height: '100%', flexDirection: 'column'}}>
        <Page name="INDEX">
          <IndexPage hasHeader={hasHeader} />
        </Page>
        {children}
      </View>
    </NavigationContext.Provider>
  );
}

function useNavigation() {
  return React.useContext(NavigationContext)!;
}

function Page({name, children}: {name: string; children: any}) {
  const {currentPageName, navigateTo, registerPageName} = useNavigation();

  useEffect(() => {
    if (name !== 'INDEX') {
      registerPageName(name);
    }
  }, [name]);

  return name === currentPageName ? (
    <View style={{width: '100%', height: '100%'}}>
      {name !== 'INDEX' && (
        <View style={{backgroundColor: PALETTE.REACT_CYAN_DARK}}>
          <TouchableOpacity
            onPress={() => {
              navigateTo('INDEX');
            }}>
            <Text
              style={[styles.buttonText, {color: PALETTE.REACT_CYAN_LIGHT}]}>
              {'‹ Back'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={{width: '100%', flex: 1}}>{children}</View>
    </View>
  ) : null;
}

export function IndexPage({hasHeader}: {hasHeader: boolean}) {
  const {navigateTo, registeredPageNames} = useNavigation();

  return (
    <FlatList
      data={registeredPageNames}
      ListHeaderComponent={
        hasHeader ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
              paddingVertical: 5,
            }}></View>
        ) : null
      }
      renderItem={({item}) => {
        return (
          <View style={{backgroundColor: PALETTE.REACT_CYAN_DARK}}>
            <TouchableOpacity
              onPress={() => {
                navigateTo(item);
              }}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          </View>
        );
      }}
      ItemSeparatorComponent={() => (
        <View
          style={{height: StyleSheet.hairlineWidth, backgroundColor: '#666'}}
        />
      )}
    />
  );
}

const StartOpenModalBox = () => {
  return (
    <ModalBox
      style={[styles.modal]}
      startOpen={true}
      backdropPressToClose={true}>
      <Text style={[styles.modalText]}>startOpen is true</Text>
    </ModalBox>
  );
};
const StartOpenModalBox1 = () => {
  const [isOpenVal, setIsOpenVal] = useState(false);
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Button title="点击打开弹框" onPress={() => setIsOpenVal(!isOpenVal)} />
      <ModalBox
        style={[styles.modal]}
        isOpen={isOpenVal}
        startOpen={false}
        backdropPressToClose={true}>
        <Text style={[styles.modalText]}>startOpen is false</Text>
      </ModalBox>
    </View>
  );
};

export const ModalBoxDemo = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{backgroundColor: 'black', paddingBottom: 70}}>
          <NavigationContainer>
            <Page key="ModalBoxAll" name="ModalBoxAll">
              <ModalBoxAll />
            </Page>
            <Page key="StartOpenModalBox" name="StartOpenModalBox:true">
              <StartOpenModalBox />
            </Page>
            <Page key="StartOpenModalBox1" name="StartOpenModalBox:false">
              <StartOpenModalBox1 />
            </Page>
          </NavigationContainer>
        </View>
      </SafeAreaView>
    </>
  );
};
const ModalBoxAll = () => {
  const [isOpenVal, setIsOpenVal] = useState(false);
  const [isOpenVal1, setIsOpenVal1] = useState(false);
  const [isOpenVal2, setIsOpenVal2] = useState(false);
  const [isOpenVal3, setIsOpenVal3] = useState(false);
  const [isOpenVal4, setIsOpenVal4] = useState(false);
  const [isOpenVal5, setIsOpenVal5] = useState(false);
  const [isOpenVal6, setIsOpenVal6] = useState(false);
  const [isOpenVal7, setIsOpenVal7] = useState(false);
  const [isOpenVal8, setIsOpenVal8] = useState(false);
  const [isOpenVal9, setIsOpenVal9] = useState(false);
  const [isOpenVal10, setIsOpenVal10] = useState(false);
  const [isOpenVal11, setIsOpenVal11] = useState(false);
  const [isOpenVal12, setIsOpenVal12] = useState(false);
  const [isOpenVal13, setIsOpenVal13] = useState(false);
  const [isOpenVal14, setIsOpenVal14] = useState(false);
  const [isOpenVal15, setIsOpenVal15] = useState(false);
  const [isOpenVal16, setIsOpenVal16] = useState(false);
  const [isOpenVal17, setIsOpenVal17] = useState(false);
  const [isOpenVal18, setIsOpenVal18] = useState(false);
  const [isOpenVal19, setIsOpenVal19] = useState(false);
  const [isOpenVal20, setIsOpenVal20] = useState(false);
  const [isOpenVal21, setIsOpenVal21] = useState(false);
  const [isOpenVal22, setIsOpenVal22] = useState(false);
  const [isOpenVal23, setIsOpenVal23] = useState(false);
  const [isOpenVal24, setIsOpenVal24] = useState(false);
  const [isOpenVal25, setIsOpenVal25] = useState(false);
  const [isOpenVal26, setIsOpenVal26] = useState(false);
  const [isOpenVal27, setIsOpenVal27] = useState(false);
  const [isOpenVal28, setIsOpenVal28] = useState(false);
  const [isOpenVal29, setIsOpenVal29] = useState(false);
  const [isOpenVal30, setIsOpenVal30] = useState(false);
  const [isOpenVal31, setIsOpenVal31] = useState(false);
  const [isOpenVal32, setIsOpenVal32] = useState(false);

  const btnRef1 = useRef(null);

  const openModalBox = () => {
    btnRef1.current?.open();
  };
  const closeModalBox = () => {
    btnRef1.current?.close();
  };
  return (
    <Tester>
      <ScrollView style={{margin: 10, height: '90%'}}>
        <TestSuite name="属性">
          <TestCase itShould="点击按钮后打开弹框，点击‘close ModalBox’关闭弹框">
            <Button title="isOpen" onPress={() => setIsOpenVal(!isOpenVal)} />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal}
              coverScreen={true}>
              <Text style={[styles.modalText]}>Modal is open</Text>
              <Button
                title={'close ModalBox'}
                onPress={() => setIsOpenVal(!isOpenVal)}
              />
            </ModalBox>
          </TestCase>
          <TestCase itShould="点击按钮后弹框不出现">
            <Button
              title="isDisabled"
              onPress={() => setIsOpenVal1(!isOpenVal1)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal1}
              isDisabled={true}
              coverScreen={true}>
              <Text style={[styles.modalText]}>Modal is isDisabled</Text>
              <Button title={'close ModalBox'} />
            </ModalBox>
          </TestCase>
          <TestCase itShould="按下背景关闭模态">
            <Button
              title="backdropPressToClose"
              onPress={() => setIsOpenVal2(!isOpenVal2)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal2}
              coverScreen={true}
              backdropPressToClose={true}>
              <Text style={[styles.modalText]}>
                Close the the modal by pressing on the backdrop
              </Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="向下滑动关闭弹框">
            <Button
              title="swipeToClose"
              onPress={() => setIsOpenVal3(!isOpenVal3)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal3}
              coverScreen={true}
              swipeToClose={true}>
              <Text style={[styles.modalText]}>
                Close the the modal by swipe down
              </Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="向下滑动10关闭弹框">
            <Button
              title="swipeThreshold:10"
              onPress={() => setIsOpenVal4(!isOpenVal4)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal4}
              coverScreen={true}
              swipeToClose={true}
              swipeThreshold={10}>
              <Text style={[styles.modalText]}>
                Close the the modal by swipe down 10
              </Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="向下滑动100关闭弹框">
            <Button
              title="swipeThreshold:100"
              onPress={() => setIsOpenVal25(!isOpenVal25)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal25}
              coverScreen={true}
              swipeToClose={true}
              swipeThreshold={100}>
              <Text style={[styles.modalText]}>
                Close the the modal by swipe down 100
              </Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="弹框左上方20X20区域可滑动关闭弹框">
            <Button
              title="swipeArea:20"
              onPress={() => setIsOpenVal5(!isOpenVal5)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal5}
              coverScreen={true}
              swipeToClose={true}
              swipeArea={20}>
              <Text style={[styles.modalText]}>
                Close the the modal by swipe down swipeArea:20
              </Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="弹框左上方100X100区域可滑动关闭弹框">
            <Button
              title="swipeArea:100"
              onPress={() => setIsOpenVal26(!isOpenVal26)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal26}
              coverScreen={true}
              swipeToClose={true}
              swipeArea={100}>
              <Text style={[styles.modalText]}>
                Close the the modal by swipe down swipeArea:100
              </Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="测试弹框的位置">
            <Button
              title="position:center"
              onPress={() => setIsOpenVal6(!isOpenVal6)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal6}
              coverScreen={true}
              backdropPressToClose={true}
              position={'center'}>
              <Text style={[styles.modalText]}>position is center</Text>
            </ModalBox>
            <Button
              title="position:bottom"
              onPress={() => setIsOpenVal7(!isOpenVal7)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal7}
              coverScreen={true}
              backdropPressToClose={true}
              position={'bottom'}>
              <Text style={[styles.modalText]}>position is bottom</Text>
            </ModalBox>
          </TestCase>

          <TestCase itShould="指定弹框的进入动画">
            <Button
              title="entry:top"
              onPress={() => setIsOpenVal8(!isOpenVal8)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal8}
              coverScreen={true}
              backdropPressToClose={true}
              entry={'top'}>
              <Text style={[styles.modalText]}>entry is top</Text>
            </ModalBox>
            <Button
              title="entry:bottom"
              onPress={() => setIsOpenVal9(!isOpenVal9)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal9}
              coverScreen={true}
              backdropPressToClose={true}
              entry={'bottom'}>
              <Text style={[styles.modalText]}>entry is bottom</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="取消弹框外部背景遮罩层显示">
            <Button
              title="backdrop"
              onPress={() => setIsOpenVal10(!isOpenVal10)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal10}
              coverScreen={true}
              backdropPressToClose={true}
              backdrop={false}>
              <Text style={[styles.modalText]}>backdrop is false</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="背景遮罩层透明度，设置为0.5">
            <Button
              title="backdropOpacity:0.5"
              onPress={() => setIsOpenVal11(!isOpenVal11)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal11}
              coverScreen={true}
              backdropPressToClose={true}
              backdropOpacity={0.5}>
              <Text style={[styles.modalText]}>backdropOpacity: 0.5</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="背景遮罩层透明度，设置为0.8">
            <Button
              title="backdropOpacity:0.8"
              onPress={() => setIsOpenVal27(!isOpenVal27)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal27}
              coverScreen={true}
              backdropPressToClose={true}
              backdropOpacity={0.8}>
              <Text style={[styles.modalText]}>backdropOpacity: 0.8</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="背景遮罩层颜色，设置为绿色">
            <Button
              title="backdropColor: 'green'"
              onPress={() => setIsOpenVal12(!isOpenVal12)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal12}
              coverScreen={true}
              backdropPressToClose={true}
              backdropColor={'green'}>
              <Text style={[styles.modalText]}>backdropColor: 'green'</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="背景遮罩层颜色，设置为黑色">
            <Button
              title="backdropColor: 'black'"
              onPress={() => setIsOpenVal17(!isOpenVal17)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal17}
              coverScreen={true}
              backdropPressToClose={true}
              backdropColor={'black'}>
              <Text style={[styles.modalText]}>backdropColor: 'black'</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="自定义的背景内容，背景会显示文字">
            <Button
              title="backdropContent"
              onPress={() => setIsOpenVal13(!isOpenVal13)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal13}
              coverScreen={true}
              backdropPressToClose={true}
              backdropOpacity={0.5}
              backdropContent={
                <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                  <Text style={{color: 'red', fontSize: 20}}>这是背景内容</Text>
                </View>
              }>
              <Text style={[styles.modalText]}>ModalBoxContent</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="弹框的打开和关闭动画持续时间，设置为1000ms">
            <Button
              title="animationDuration:1000"
              onPress={() => setIsOpenVal14(!isOpenVal14)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal14}
              coverScreen={true}
              backdropPressToClose={true}
              animationDuration={1000}>
              <Text style={[styles.modalText]}>animationDuration:1000ms</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="弹框的打开和关闭动画持续时间，设置为3000ms">
            <Button
              title="animationDuration:3000"
              onPress={() => setIsOpenVal29(!isOpenVal29)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal29}
              coverScreen={true}
              backdropPressToClose={true}
              animationDuration={3000}>
              <Text style={[styles.modalText]}>animationDuration:3000ms</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="设置弹框的动画效果">
            <Button
              title="easing"
              onPress={() => setIsOpenVal15(!isOpenVal15)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal15}
              coverScreen={true}
              backdropPressToClose={true}
              easing={ModalBox.easing}>
              <Text style={[styles.modalText]}>
                easing: 使用预定义的easing函数
              </Text>
            </ModalBox>
            <Button
              title="easing:custom"
              onPress={() => setIsOpenVal16(!isOpenVal16)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal16}
              coverScreen={true}
              backdropPressToClose={true}
              easing={Easing.elastic(8)}>
              <Text style={[styles.modalText]}>easing: 自定义easing函数</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="设置弹框显示在最上层">
            <Button
              title="coverScreen:true"
              onPress={() => setIsOpenVal19(!isOpenVal19)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal19}
              coverScreen={true}
              backdropPressToClose={true}>
              <Text style={[styles.modalText]}>coverScreen is true</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="设置弹框显示在默认层">
            <Button
              title="coverScreen:false"
              onPress={() => setIsOpenVal28(!isOpenVal28)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal28}
              backdropPressToClose={true}>
              <Text style={[styles.modalText]}>coverScreen is false</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="设置弹框在键盘弹出时距离键盘顶部的偏移量为默认偏移量">
            <Button
              title="keyboardTopOffset:默认"
              onPress={() => setIsOpenVal20(!isOpenVal20)}
            />
            <ModalBox
              style={[styles.modal1]}
              isOpen={isOpenVal20}
              keyboardTopOffset={0}
              coverScreen={true}
              position="bottom"
              backdropPressToClose={true}>
              <Text style={[styles.modalText]}>keyboardTopOffset: 默认</Text>
              <TextInput
                placeholder="text"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
              />
            </ModalBox>
          </TestCase>
          <TestCase itShould="设置弹框在键盘弹出时距离键盘顶部的偏移量：300">
            <Button
              title="keyboardTopOffset:300"
              onPress={() => setIsOpenVal30(!isOpenVal30)}
            />
            <ModalBox
              style={[styles.modal1]}
              isOpen={isOpenVal30}
              keyboardTopOffset={300}
              coverScreen={true}
              position="bottom"
              backdropPressToClose={true}>
              <Text style={[styles.modalText]}>keyboardTopOffset: 300</Text>
              <TextInput
                placeholder="text"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
              />
            </ModalBox>
          </TestCase>
          <TestCase itShould="使用原生驱动，提高动画性能">
            <Button
              title="useNativeDriver：true"
              onPress={() => setIsOpenVal21(!isOpenVal21)}
            />
            <Button
              title="useNativeDriver：false"
              onPress={() => setIsOpenVal32(!isOpenVal32)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal21}
              easing={Easing.elastic(8)}
              useNativeDriver={true}
              backdropPressToClose={true}>
              <Text style={[styles.modalText]}>useNativeDriver is true</Text>
            </ModalBox>
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal32}
              easing={Easing.elastic(8)}
              useNativeDriver={false}
              backdropPressToClose={true}>
              <Text style={[styles.modalText]}>useNativeDriver is false</Text>
            </ModalBox>
          </TestCase>
        </TestSuite>
        <TestSuite name="方法">
          <TestCase itShould="调用方法打开和关闭弹框">
            <Button title="open" onPress={openModalBox} />
            <Button title="close" onPress={closeModalBox} />
            <ModalBox ref={btnRef1} style={[styles.modal2]} backdrop={false}>
              <Text style={[styles.modalText]}>ModalBox open</Text>
            </ModalBox>
          </TestCase>
        </TestSuite>
        <TestSuite name="事件">
          <TestCase
            itShould="打开弹框的事件"
            initialState={null as any}
            arrange={({setState}) => (
              <View>
                <Button
                  title="onOpened"
                  onPress={() => setIsOpenVal22(!isOpenVal22)}
                />
                <ModalBox
                  style={[styles.modal]}
                  isOpen={isOpenVal22}
                  coverScreen={true}
                  onOpened={setState(true)}>
                  <Text style={[styles.modalText]}>onOpened</Text>
                </ModalBox>
              </View>
            )}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            itShould="关闭弹框的事件"
            initialState={null as any}
            arrange={({setState}) => (
              <View>
                <Button
                  title="onClosed"
                  onPress={() => setIsOpenVal23(!isOpenVal23)}
                />
                <ModalBox
                  style={[styles.modal]}
                  isOpen={isOpenVal23}
                  coverScreen={true}
                  onClosed={setState(true)}>
                  <Text style={[styles.modalText]}>onClosed</Text>
                </ModalBox>
              </View>
            )}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            itShould="滑动关闭功能的状态改变事件"
            initialState={null as any}
            arrange={({setState}) => (
              <View>
                <Button
                  title="onClosingState"
                  onPress={() => setIsOpenVal24(!isOpenVal24)}
                />
                <ModalBox
                  style={[styles.modal]}
                  isOpen={isOpenVal24}
                  coverScreen={true}
                  onClosingState={setState(true)}>
                  <Text style={[styles.modalText]}>onClosingState</Text>
                </ModalBox>
              </View>
            )}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
          />
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#888',
  },
  input: {},
  modal: {
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal1: {
    height: 300,
    width: 300,
  },
  modal2: {
    height: 300,
    width: 150,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  modalText: {
    fontSize: 20,
    margin: 10,
    color: 'black',
  },
  module: {
    margin: 15,
  },
  moduleName: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 4,
    color: '#fff',
  },
  moduleContent: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    color: '#fff',
  },
  moduleButton: {
    // marginBottom: 4,
    backgroundColor: 'deepskyblue',
    height: 34,
    // borderRadius: 10
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 32,
    verticalAlign: 'middle',
  },
});
