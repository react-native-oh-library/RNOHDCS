import React, {useState} from 'react';
import {Button, Overlay, Icon} from '@rneui/themed';
import {View, Text, StyleSheet, ScrollView, Modal} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

type OverlayComponentProps = {};
class ViewComponent extends React.Component<{}, {}> {
  render() {
    return (
      <View
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'pink',
          borderRadius: 20,
        }}>
        <Text style={{fontSize: 28, backgroundColor: 'yellow', color: 'pink'}}>
          ViewComponent
        </Text>
      </View>
    );
  }
}
const OverlayComponent: React.FunctionComponent<OverlayComponentProps> = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const [visible1, setVisible1] = useState(false);

  const toggleOverlay1 = () => {
    setVisible1(!visible1);
  };
  const [visible2, setVisible2] = useState(false);

  const toggleOverlay2 = () => {
    setVisible2(!visible2);
  };
  const [visible3, setVisible3] = useState(false);

  const toggleOverlay3 = () => {
    setVisible3(!visible3);
  };
  const [visible4, setVisible4] = useState(false);

  const toggleOverlay4 = () => {
    setVisible4(!visible4);
  };
  const [visible5, setVisible5] = useState(false);

  const toggleOverlay5 = () => {
    setVisible5(!visible5);
  };
  const [visible6, setVisible6] = useState(false);

  const toggleOverlay6 = () => {
    setVisible6(!visible6);
  };
  const [visible7, setVisible7] = useState(false);

  const toggleOverlay7 = () => {
    setVisible7(!visible7);
  };
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="Overlay属性ModalComponent 传入一个ModalComponent视图">
          <TestCase itShould="测试ModalComponent" tags={['C_API']}>
            <Button
              title="Open Overlay"
              onPress={toggleOverlay}
              buttonStyle={styles.button}
            />
            <Overlay
              ModalComponent={ViewComponent}
              isVisible={visible}
              onBackdropPress={toggleOverlay}>
              <Text style={styles.textPrimary}>Hello!</Text>
              <Text style={styles.textSecondary}>
                Welcome to React Native Elements
              </Text>
              <Button
                icon={
                  <Icon
                    name="wrench"
                    type="font-awesome"
                    color="white"
                    size={25}
                    iconStyle={{marginRight: 10}}
                  />
                }
                title="Start Building"
                onPress={toggleOverlay}
              />
            </Overlay>
          </TestCase>
        </TestSuite>
        <TestSuite name="Overlay属性backdropStyle 设置模态框背景视图的样式">
          <TestCase itShould="测试backdropStyle" tags={['C_API']}>
            <Button
              title="Open Overlay"
              onPress={toggleOverlay}
              buttonStyle={styles.button}
            />
            <Overlay
              isVisible={visible}
              onBackdropPress={toggleOverlay}
              backdropStyle={{
                backgroundColor: 'blue',
                borderRadius: 100,
                opacity: 0.7,
              }}>
              <Text style={styles.textPrimary}>Hello!</Text>
              <Text style={styles.textSecondary}>
                Welcome to React Native Elements
              </Text>
              <Button
                icon={
                  <Icon
                    name="wrench"
                    type="font-awesome"
                    color="white"
                    size={25}
                    iconStyle={{marginRight: 10}}
                  />
                }
                title="Start Building"
                onPress={toggleOverlay}
              />
            </Overlay>
          </TestCase>
        </TestSuite>
        <TestSuite name="Overlay属性fullScreen 是否全屏">
          <TestCase itShould="测试fullScreen" tags={['C_API']}>
            <Button
              title="Open Overlay"
              onPress={toggleOverlay1}
              buttonStyle={styles.button}
            />
            <Overlay
              overlayStyle={{backgroundColor: 'yellow'}}
              fullScreen={true}
              isVisible={visible1}
              onBackdropPress={toggleOverlay1}>
              <Text style={styles.textPrimary}>Hello!</Text>
              <Text style={styles.textSecondary}>
                Welcome to React Native Elements
              </Text>
              <Button
                icon={
                  <Icon
                    name="wrench"
                    type="font-awesome"
                    color="white"
                    size={25}
                    iconStyle={{marginRight: 10}}
                  />
                }
                title="Start Building"
                onPress={toggleOverlay1}
              />
            </Overlay>
          </TestCase>
        </TestSuite>
        <TestSuite name="Overlay属性isVisible 控制模态框的显示和隐藏">
          <TestCase itShould="测试isVisible" tags={['C_API']}>
            <Button
              title="Open Overlay"
              onPress={toggleOverlay2}
              buttonStyle={styles.button}
            />
            <Overlay
              overlayStyle={{backgroundColor: 'yellow'}}
              isVisible={visible2}
              onBackdropPress={toggleOverlay2}>
              <Text style={styles.textPrimary}>Hello!</Text>
              <Text style={styles.textSecondary}>
                Welcome to React Native Elements
              </Text>
              <Button
                icon={
                  <Icon
                    name="wrench"
                    type="font-awesome"
                    color="white"
                    size={25}
                    iconStyle={{marginRight: 10}}
                  />
                }
                title="Start Building"
                onPress={toggleOverlay2}
              />
            </Overlay>
          </TestCase>
        </TestSuite>
        <TestSuite name="Overlay属性onBackdropPress 模态框的点击事件 通过点击切换来控制模态框的显示和隐藏">
          <TestCase itShould="测试onBackdropPress" tags={['C_API']}>
            <Button
              title="Open Overlay"
              onPress={toggleOverlay3}
              buttonStyle={styles.button}
            />
            <Overlay isVisible={visible3} onBackdropPress={toggleOverlay3}>
              <Text style={styles.textPrimary}>Hello!</Text>
              <Text style={styles.textSecondary}>
                Welcome to React Native Elements
              </Text>
              <Button
                icon={
                  <Icon
                    name="wrench"
                    type="font-awesome"
                    color="white"
                    size={25}
                    iconStyle={{marginRight: 10}}
                  />
                }
                title="Start Building"
                onPress={toggleOverlay3}
              />
            </Overlay>
          </TestCase>
        </TestSuite>
        <TestSuite name="Overlay属性onLongPress 长按触发事件 通过点击切换来控制模态框的显示和隐藏">
          <TestCase itShould="测试onLongPress" tags={['C_API']}>
            <Button
              title="Open Overlay"
              onPress={toggleOverlay4}
              buttonStyle={styles.button}
            />
            <Overlay isVisible={visible4} onLongPress={toggleOverlay4}>
              <Text style={styles.textPrimary}>Hello!</Text>
              <Text style={styles.textSecondary}>
                Welcome to React Native Elements
              </Text>
              <Button
                icon={
                  <Icon
                    name="wrench"
                    type="font-awesome"
                    color="white"
                    size={25}
                    iconStyle={{marginRight: 10}}
                  />
                }
                title="Start Building"
                onPress={toggleOverlay4}
              />
            </Overlay>
          </TestCase>
        </TestSuite>
        <TestSuite name="Overlay属性onPressIn 按下去触发事件 通过点击切换来控制模态框的显示和隐藏">
          <TestCase itShould="测试onPressIn" tags={['C_API']}>
            <Button
              title="Open Overlay"
              onPress={toggleOverlay5}
              buttonStyle={styles.button}
            />
            <Overlay isVisible={visible5} onPressIn={toggleOverlay5}>
              <Text style={styles.textPrimary}>Hello!</Text>
              <Text style={styles.textSecondary}>
                Welcome to React Native Elements
              </Text>
              <Button
                icon={
                  <Icon
                    name="wrench"
                    type="font-awesome"
                    color="white"
                    size={25}
                    iconStyle={{marginRight: 10}}
                  />
                }
                title="Start Building"
                onPress={toggleOverlay5}
              />
            </Overlay>
          </TestCase>
        </TestSuite>
        <TestSuite name="Overlay属性onPressOut 手指抬起来触发事件 通过点击切换来控制模态框的显示和隐藏">
          <TestCase itShould="测试onPressOut" tags={['C_API']}>
            <Button
              title="Open Overlay"
              onPress={toggleOverlay6}
              buttonStyle={styles.button}
            />
            <Overlay isVisible={visible6} onPressOut={toggleOverlay6}>
              <Text style={styles.textPrimary}>Hello!</Text>
              <Text style={styles.textSecondary}>
                Welcome to React Native Elements
              </Text>
              <Button
                icon={
                  <Icon
                    name="wrench"
                    type="font-awesome"
                    color="white"
                    size={25}
                    iconStyle={{marginRight: 10}}
                  />
                }
                title="Start Building"
                onPress={toggleOverlay6}
              />
            </Overlay>
          </TestCase>
        </TestSuite>
        <TestSuite name="Overlay属性overlayStyle	 设置模态框样式">
          <TestCase itShould="测试overlayStyle" tags={['C_API']}>
            <Button
              title="Open Overlay1111111"
              onPress={toggleOverlay7}
              buttonStyle={styles.button}
            />
            <Overlay
              isVisible={visible7}
              overlayStyle={{backgroundColor: 'green', borderRadius: 20}}
              onBackdropPress={toggleOverlay7}>
              <Text style={styles.textPrimary}>Hello!</Text>
              <Text style={styles.textSecondary}>
                Welcome to React Native Elements
              </Text>
              <Button
                icon={
                  <Icon
                    name="wrench"
                    type="font-awesome"
                    color="white"
                    size={25}
                    iconStyle={{marginRight: 10}}
                  />
                }
                title="Start "
                onPress={toggleOverlay7}
              />
            </Overlay>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default OverlayComponent;
