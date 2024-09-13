import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {showMessage, hideMessage} from 'react-native-flash-message';

export function FlashMessageTest() {
  return (
    <Tester>
      <TestSuite name="FlashMessage">
        <TestCase itShould="FlashMessage the theme">
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              showMessage({
                message: '普通提示内容自动关闭动画效果',
                type: 'info',
                hideOnPress: false,
                animated: true,
                floating: false,
                animationDuration: 500,
                titleStyle: {
                  backgroundColor: 'pink',
                  padding: 10,
                  borderRadius: 5,
                  color: 'black',
                },
              });
            }}>
            <Text>普通提示内容加样式自动关闭无动画效果动画时长500毫秒</Text>
          </TouchableOpacity>
        </TestCase>

        <TestCase itShould="FlashMessage the theme">
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              showMessage({
                message:
                  '普通提示内容自动关闭动画效果普通提示内容自动关闭动画效果普通提示内容自动关闭动画效果普通提示内容自动关闭动画效果普通提示内容自动关闭动画效果普通提示内容自动关闭动画效果普通提示内容自动关闭动画效果普通提示内容自动关闭动画效果普通提示内容自动关闭动画效果',
                textProps: {
                  style: {
                    backgroundColor: 'pink',
                    padding: 10,
                    borderRadius: 5,
                    color: 'black',
                  },
                  allowFontScaling: false, // 禁止字体自动缩放
                  ellipsizeMode: 'tail', // 文本省略模式为尾部省略
                },
              });
            }}>
            <Text>文本参数文本样式</Text>
          </TouchableOpacity>
        </TestCase>

        <TestCase itShould="FlashMessage the theme">
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              showMessage({
                message: '消息内容',
                type: 'info',
                hideOnPress: false,
                animated: true,
                floating: true,
                titleProps: {
                  style: { color: 'pink', fontSize: 30 },
                },
                style: {
                  backgroundColor: '#f0f0f0',
                  padding: 10,
                  borderRadius: 5,
                },
                textStyle: {
                  backgroundColor: 'pink',
                  padding: 10,
                  borderRadius: 5,
                  color: 'black',
                },
              });
            }}>
            <Text>悬停提示内容加样式属性消息容器样式自动关闭</Text>
          </TouchableOpacity>
        </TestCase>

        <TestCase itShould="FlashMessage the AutoHide Close">
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              showMessage({
                message: '点击消息内容关闭',
                type: 'info',
                onPress: () => {
                  hideMessage();
                },
                autoHide: false,
              });
            }}>
            <Text>点击消息内容关闭</Text>
          </TouchableOpacity>
        </TestCase>

        <TestCase itShould="FlashMessage the AutoHide Close">
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              showMessage({
                message: '长按消息内容关闭',
                type: 'info',
                onLongPress: () => {
                  hideMessage();
                },
                autoHide: false,
                textProps: { accessibilityHint: 'This is a helpful message' },
              });
            }}>
            <Text>长按消息内容关闭</Text>
          </TouchableOpacity>
        </TestCase>

        <TestCase itShould="FlashMessage the renderBeforeContent">
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              showMessage({
                message: '消息内容',
                type: 'info',
                position: 'center',
                renderBeforeContent: e => {
                  return (
                    <View>
                      <Text>主要内容之前渲染自定义的组件或内容</Text>
                    </View>
                  );
                },
                renderCustomContent: e => {
                  return (
                    <View>
                      <Text>自定义消息的主要内容</Text>
                    </View>
                  );
                },
                renderAfterContent: e => {
                  return (
                    <View>
                      <Text>主要内容之后渲染自定义的组件或内容</Text>
                    </View>
                  );
                },
              });
            }}>
            <Text>自定义消息位置居中</Text>
          </TouchableOpacity>
        </TestCase>

        <TestCase itShould="FlashMessage the renderCustomContent">
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              showMessage({
                message: '添加图标',
                type: 'info',
                icon: 'success',
              });
            }}>
            <Text>添加成功图标</Text>
          </TouchableOpacity>
        </TestCase>

        <TestCase itShould="FlashMessage the renderCustomContent">
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              showMessage({
                message: '添加图标',
                type: 'info',
                icon: props => (
                  <Image
                    source={require('./assets/massge_warn.png')}
                    {...props}
                  />
                ),
                iconProps: {
                  style: { width: 50, height: 50, marginRight: 10 },
                },
              });
            }}>
            <Text>icon添加自定义图标</Text>
          </TouchableOpacity>
        </TestCase>

        <TestCase itShould="FlashMessage the renderCustomContent">
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              showMessage({
                message: '自定义添加图标',
                type: 'info',
                icon: props => (
                  <Image
                    source={require('./assets/massge_warn.png')}
                    {...props}
                  />
                ),
                renderFlashMessageIcon: (props: any) => (
                  <View style={styles.icon}>
                    <Image
                      source={require('./assets/massge_warn.png')}
                      style={{ width: 30, height: 30, marginRight: 20 }}
                      {...props}
                    />
                  </View>
                ),
              });
            }}>
            <Text>
              自定义添加图标需要用icon接收element作为参数在renderFlashMessageIcon可以给样式
            </Text>
          </TouchableOpacity>
        </TestCase>

        <TestCase itShould="FlashMessage the renderCustomContent">
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              showMessage({
                message: '隐藏手机状态栏',
                type: 'info',
                hideStatusBar: true,
              });
            }}>
            <Text>
              隐藏手机状态栏会有抖动情况已提dts单不予处理详情请看指导文档
            </Text>
          </TouchableOpacity>
        </TestCase>

        <TestCase itShould="FlashMessage the renderCustomContent">
          <TouchableOpacity style={styles.button}>
            <Text>
              canRegisterAsDefault:注册全局默认为true,MessageComponent:所有消息的默认组件,transitionConfig:自定义动画效果
              可以按照一下的用法
              {`<FlashMessage
          position="top"
          canRegisterAsDefault
          MessageComponent={() => {
            return (
              <View
                style={{backgroundColor: '#eee', padding: 10, borderRadius: 5}}>
                <Text>message</Text>
              </View>
            );
          }}
          transitionConfig={(animValue, position) => ({
            duration: 500,
            opacity: animValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          })}
        />`}
            </Text>
          </TouchableOpacity>
        </TestCase>
      </TestSuite>
    </Tester>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 25,
    borderRadius: 5,
    borderWidth: 3,
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
});
