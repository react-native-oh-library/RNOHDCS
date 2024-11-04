import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';

export function FlashMessageTest() {
  return (
    <>
      <FlashMessage position="top" />
      <ScrollView>
        <Tester>
          <TestSuite name="FlashMessage">
            <TestCase itShould="测试hideOnPress">
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '点击不能关闭消息',
                    type: 'info',
                    hideOnPress: false,
                  });
                }}>
                <Text>点击不能关闭消息</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '点击能关闭消息',
                    type: 'info',
                    hideOnPress: true,
                  });
                }}>
                <Text>点击能关闭消息</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试onPress">
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '点击事件',
                    type: 'info',
                    hideOnPress: false,
                    onPress: () => {
                      hideMessage();
                    },
                    autoHide: false,
                  });
                }}>
                <Text>点击事件</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试onLongPress">
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '长按事件',
                    type: 'info',
                    hideOnPress: false,
                    onLongPress: () => {
                      hideMessage();
                    },
                    autoHide: false,
                  });
                }}>
                <Text>长按事件</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试animated">
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '动画效果',
                    type: 'info',
                    animated: false,
                  });
                }}>
                <Text>动画效果取消（默认打开）</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试animationDuration">
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '动画时长1秒',
                    type: 'info',
                    animationDuration: 1000,
                  });
                }}>
                <Text>动画时长1秒</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试autoHide">
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '是否自动关闭',
                    type: 'info',
                    hideOnPress: false,
                    onPress: () => {
                      hideMessage();
                    },
                    autoHide: false,
                  });
                }}>
                <Text>是否自动关闭</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试duration">
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '自动影藏2秒',
                    type: 'info',
                    duration: 2000,
                  });
                }}>
                <Text>自动影藏2秒</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试statusBarHeight">
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '自定义高度',
                    type: 'info',
                    statusBarHeight: 200,
                  });
                }}>
                <Text>自定义高度</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试floating">
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '悬停模式',
                    type: 'info',
                    floating: true,
                  });
                }}>
                <Text>悬停模式</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试position">
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '位置居上',
                    type: 'info',
                    position: 'top',
                  });
                }}>
                <Text>位置居上</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '位置居中',
                    type: 'info',
                    position: 'center',
                  });
                }}>
                <Text>位置居中</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '位置居下',
                    type: 'info',
                    position: 'bottom',
                  });
                }}>
                <Text>位置居下</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试icon">
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

            <TestCase itShould="测试icon自定义">
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
                  });
                }}>
                <Text>自定义图标</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试style">
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '容器样式',
                    type: 'info',
                    hideOnPress: false,
                    animated: true,
                    floating: true,
                    style: {
                      backgroundColor: '#f0f0f0',
                      padding: 10,
                      borderRadius: 5,
                    },
                  });
                }}>
                <Text>容器样式</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试titleStyle">
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '消息体样式',
                    titleStyle: {
                      backgroundColor: 'pink',
                      padding: 10,
                      borderRadius: 5,
                      color: 'black',
                    },
                  });
                }}>
                <Text>消息体样式</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试textStyle">
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '标题',
                    description: '文本描述样式',
                    type: 'info',
                    hideOnPress: false,
                    animated: true,
                    floating: true,
                    textStyle: {
                      backgroundColor: 'pink',
                      padding: 10,
                      borderRadius: 5,
                      color: 'black',
                    },
                  });
                }}>
                <Text>文本描述样式</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试titleProps">
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '标题样式',
                    type: 'info',
                    hideOnPress: false,
                    animated: true,
                    floating: true,
                    titleProps: {
                      style: {color: 'pink', fontSize: 30},
                    },
                  });
                }}>
                <Text>标题样式</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试textProps">
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '文本组件自定义参数',
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
                <Text>文本组件自定义参数</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试iconProps">
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
                      style: {width: 50, height: 50, marginRight: 10},
                    },
                  });
                }}>
                <Text>自定义图标样式</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试renderBeforeContent">
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
                          <Text>消息内容之前渲染自定义的组件或内容</Text>
                        </View>
                      );
                    },
                  });
                }}>
                <Text>消息内容之前渲染自定义的组件或内容</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试renderCustomContent">
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '',
                    type: 'info',
                    renderCustomContent: e => {
                      return (
                        <View>
                          <Text>自定义消息的主要内容</Text>
                        </View>
                      );
                    },
                  });
                }}>
                <Text>自定义消息的主要内容</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试renderAfterContent">
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  showMessage({
                    message: '消息内容',
                    type: 'info',
                    renderAfterContent: e => {
                      return (
                        <View>
                          <Text>主要内容之后渲染自定义的组件或内容</Text>
                        </View>
                      );
                    },
                  });
                }}>
                <Text>主要内容之后渲染自定义的组件或内容</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试renderFlashMessageIcon">
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
                          style={{width: 30, height: 30, marginRight: 20}}
                          {...props}
                        />
                      </View>
                    ),
                  });
                }}>
                <Text>自定义图标渲染函数</Text>
              </TouchableOpacity>
            </TestCase>

            <TestCase itShould="测试canRegisterAsDefault transitionConfig MessageComponent">
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
      </ScrollView>
    </>
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
