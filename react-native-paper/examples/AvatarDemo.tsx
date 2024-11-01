import * as React from 'react';
import { useState, useEffect } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';

import {
  Avatar,
  Button,
  MD2Colors,
  Text,
} from 'react-native-paper';

import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import { blue100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function AvatarTest() {
  const [onProgressText, setonProgressText] = useState<number>(0);
  const [onLayoutText, setonLayoutText] = useState<String>('');
  const [onLoadStartText, setonLoadStartText] = useState<String>('');
  const [onLoadEndText, setonLoadEndText] = useState<String>('');
  const [onLoadText, setonLoadText] = useState<String>('');

  const [onLayoutText2, setonLayoutText2] = useState<String>('');
  const [onLoadStartText2, setonLoadStartText2] = useState<String>('');
  const [onLoadEndText2, setonLoadEndText2] = useState<String>('');
  const [onLoadText2, setonLoadText2] = useState<String>('');

  const [error, setError] = useState(false);

  const AvatarIconProps = [
    {
      key: 'Avatar.Icon style: icon is folder',
      value: {
        style: styles.avatar,
        icon: "folder",
      }
    },
    {
      key: 'Avatar.Icon style: icon is magnify',
      value: {
        style: styles.avatar,
        icon: "magnify",
      }
    },
    {
      key: 'Avatar.Icon style: size is 60',
      value: {
        style: styles.avatar,
        icon: "folder",
        size: 60,
      }
    },
    {
      key: 'Avatar.Icon style: size is 80',
      value: {
        style: styles.avatar,
        icon: "folder",
        size: 80,
      }
    },
    {
      key: 'Avatar.Icon style: color is MD2Colors.red100',
      value: {
        style: styles.avatar,
        icon: "folder",
        color: MD2Colors.red100
      }
    },
    {
      key: 'Avatar.Icon style: color is MD2Colors.blue100',
      value: {
        style: styles.avatar,
        icon: "folder",
        color: MD2Colors.blue100
      }
    },
    {
      key: 'Avatar.Icon style: styles.avatar,backgroundColor:MD2Colors.yellow500',
      value: {
        style: [styles.avatar, { backgroundColor: MD2Colors.yellow500 }],
        icon: "folder",
      }
    },
    {
      key: 'Avatar.Icon style: theme { colors: { primary:"green"}',
      value: {
        style: [styles.avatar],
        icon: "folder",
        theme: { colors: { primary: 'green' } }
      }
    },
  ]

  //2024/10/30:将回调用例重写
  // const onLoad = () => {
  //   console.info('fuction onLoad')
  // }


  // const _onError = () => {
  //   console.info('fuction onError')
  // }

  // const _onLayout = () => {
  //   console.info('fuction onLayout')
  // }

  // const _onLoadEnd = () => {
  //   console.info('fuction onLoadEnd')
  // }

  // const _onLoadStart = () => {
  //   console.info('fuction onLoadStart')
  // }

  // const _onProgress = () => {
  //   console.info("fuction onProgress")
  // }

  const AvatarImageProps = [
    {
      key: 'Avatar.Image style: source is avatar.png',
      value: {
        style: styles.avatar,
        source: require('../assets/images/avatar.png'),
      }
    },
    {
      key: 'Avatar.Image style: size is 60',
      value: {
        style: styles.avatar,
        source: require('../assets/images/avatar.png'),
        size: 60,
      }
    },
    {
      key: 'Avatar.Image style: size is 80',
      value: {
        style: styles.avatar,
        source: require('../assets/images/avatar.png'),
        size: 80,
      }
    },
    //2024/10/30：回调用例重写
    // {
    //   key: 'Avatar.Image fuction: onError = {_onError}',
    //   value: {
    //     style: styles.avatar,
    //     size: 60,
    //     source: require('../assets/images/avatar.png'),
    //     onError: _onError
    //   }
    // },
    // {
    //   key: 'Avatar.Image fuction: onLoadEnd = {_onLoadEnd}',
    //   value: {
    //     style: styles.avatar,
    //     size: 60,
    //     source: require('../assets/images/avatar.png'),
    //     onLoadEnd: _onLoadEnd
    //   }
    // },
    // {
    //   key: 'Avatar.Image fuction: onLoad = {onLoad}',
    //   value: {
    //     style: styles.avatar,
    //     size: 60,
    //     source: require('../assets/images/avatar.png'),
    //     onLoad: onLoad
    //   }
    // },
    // {
    //   key: 'Avatar.Image fuction: onLayout = {_onLayout}',
    //   value: {
    //     style: styles.avatar,
    //     size: 60,
    //     source: require('../assets/images/avatar.png'),
    //     onLayout: _onLayout
    //   }
    // },
    // {
    //   key: 'Avatar.Image fuction: onLoadStart = {_onLoadStart}',
    //   value: {
    //     style: styles.avatar,
    //     size: 60,
    //     source: require('../assets/images/avatar.png'),
    //     onLoadStart: _onLoadStart
    //   }
    // },
    // {
    //   key: 'Avatar.Image fuction: onProgress = {_onProgress}',
    //   value: {
    //     style: styles.avatar,
    //     size: 60,
    //     source: require('../assets/images/avatar.png'),
    //     onProgress: _onProgress
    //   }
    // },
    // {
    //   key: 'Avatar.Image fuction: theme = { colors: { primary:"green"} }',
    //   value: {
    //     style: styles.avatar,
    //     size: 60,
    //     source: require('../assets/images/avatar.png'),
    //     theme: { colors: { primary: 'green' } }
    //   }
    // },
  ]

  const AvatarTextProps = [
    {
      key: 'Avatar.Text: label is XD',
      value: {
        label: "XD"
      }
    },
    {
      key: 'Avatar.Text: label is SD',
      value: {
        label: "SD"
      }
    },
    {
      key: 'Avatar.Text: size is 60',
      value: {
        label: "XD",
        size: 60,
      }
    },
    {
      key: 'Avatar.Text: size is 80',
      value: {
        label: "XD",
        size: 80,
      }
    },
    {
      key: 'Avatar.Text: color is MD2Colors.red100',
      value: {
        label: "XD",
        color: MD2Colors.red100,
      }
    },
    {
      key: 'Avatar.Text: color is MD2Colors.blue100',
      value: {
        label: "XD",
        color: MD2Colors.blue100,
      }
    },
    {
      key: 'Avatar.Text: style is backgroundColor:MD2Colors.yellow500',
      value: {
        label: "XD",
        color: MD2Colors.blue100,
        style: { backgroundColor: MD2Colors.yellow500 }
      }
    },
    {
      key: 'Avatar.Text: labelStyle is color:MD2Colors.yellow500',
      value: {
        label: "XD",
        labelStyle: { color: MD2Colors.yellow500 }
      }
    },
    {
      key: 'Avatar.Text: maxFontSizeMultiplier is 1(maxFontSizeMultiplier属性主要用于解决在不同设备上，由于屏幕尺寸和分辨率的差异，导致文本字体大小过小或过大的问题)',
      value: {
        label: "XD",
        maxFontSizeMultiplier: 2
      }
    },
    {
      key: 'Avatar.Text: maxFontSizeMultiplier is 2(maxFontSizeMultiplier属性主要用于解决在不同设备上，由于屏幕尺寸和分辨率的差异，导致文本字体大小过小或过大的问题)',
      value: {
        label: "XD",
        maxFontSizeMultiplier: 4
      }
    },
    {
      key: 'Avatar.Text: theme is theme:{ primary: "green" }',
      value: {
        label: "XD",
        theme: { colors: { primary: 'green' } }
      }
    },
  ]

  return (
    <Tester>
      <ScrollView>
        <TestSuite name='Avatar的触发回调'>
          <TestCase itShould='onProgress,需要网络下载图片,在没有网络的情况下显示NaN,网络正常的情况下显示100,图片就是一个紫色圆形;不设置source的值就为0'>
            <View style={styles.row}>
              <Avatar.Image
                style={styles.avatar}
                size={60}
                source={{ uri: 'https://example.com/image.jpg' }}
                onProgress={({ nativeEvent }) => {
                  const { loaded, total } = nativeEvent;
                  const progress = (loaded / total) * 100;
                  setonProgressText(progress);
                }}
              />
              <Text>加载进度为:{onProgressText}</Text>
            </View>
          </TestCase>

          <TestCase
            itShould='onLoadStart,组件布局加载开始时候调用；
          onLayout,组件布局加载时候调用；
          onLoadEnd,组件布局加载结束调用；
          onLoad,组件布局加载完成调用'
          >
            <View style={styles.row}>
              <Avatar.Image
                style={styles.avatar}
                size={60}
                source={require('../assets/images/avatar.png')}
                onLoadStart={() => {
                  setonLoadStartText('组件onLoadStart触发完毕')
                }}
                onLayout={() => {
                  setonLayoutText('组件onLayout触发完毕')
                }}
                onLoadEnd={() => {
                  setonLoadEndText('组件onLoadEnd触发完毕')
                }}
                onLoad={() => {
                  setonLoadText('组件onLayout触发完毕')
                }}
              />
            </View>
            <Text>组件onLoadStart状态:{onLoadStartText}</Text>
            <Text>组件onLayout状态:{onLayoutText}</Text>
            <Text>组件onLoadEnd状态:{onLoadEndText}</Text>
            <Text>组件onLoad状态:{onLoadText}</Text>
          </TestCase>

          <TestCase
            itShould='回调触发对比测试用例,此时只有onLayout会触发,其他的不会触发'
          >
            <View style={styles.row}>
              <Avatar.Image
                style={styles.avatar}
                size={60}
                source={{}}
                onLoadStart={() => {
                  setonLoadStartText2('组件onLoadStart触发完毕')
                }}
                onLayout={() => {
                  setonLayoutText2('组件onLayout触发完毕')
                }}
                onLoadEnd={() => {
                  setonLoadEndText2('组件onLoadEnd触发完毕')
                }}
                onLoad={() => {
                  setonLoadText2('组件onLayout触发完毕')
                }}
              />
            </View>
            <Text>组件onLoadStart状态:{onLoadStartText2}</Text>
            <Text>组件onLayout状态:{onLayoutText2}</Text>
            <Text>组件onLoadEnd状态:{onLoadEndText2}</Text>
            <Text>组件onLoad状态:{onLoadText2}</Text>
          </TestCase>

          <TestCase
            itShould='onError触发,启动备用图片.error属性默认为false,是无法加载出图片的,会触发onError;加载出来是人像图'
          >
            <View style={styles.row}>
              <Avatar.Image
                style={styles.avatar}
                size={60}
                source={error ? require('../assets/images/avatar.png') : { uri: 'https://example.com/error.jpg' }}
                onError={() => setError(true)}
              />
            </View>
          </TestCase>

          <TestCase
            itShould='使用theme自定义,展示的图颜色为浅紫色'
          >
            <View style={styles.row}>
              <Avatar.Image
              source={{}}
              theme={{colors:{
                primary: "rgb(220, 184, 255)"
              }}}
              />
            </View>
          </TestCase>

        </TestSuite>
        <TestSuite name='Avatar'>
          {AvatarTextProps.map((item) => {
            return (
              <TestCase itShould={item.key} key={item.key} >
                <View style={styles.row}>
                  <Avatar.Text  {...item.value} />
                </View>
              </TestCase>
            );
          })}
          {AvatarIconProps.map((item) => {
            return (
              <TestCase itShould={item.key} key={item.key} >
                <View style={styles.row}>
                  <Avatar.Icon  {...item.value} />
                </View>
              </TestCase>
            );
          })}
          {AvatarImageProps.map((item) => {
            return (
              <TestCase itShould={item.key} key={item.key} >
                <View style={styles.row}>
                  <Avatar.Image  {...item.value} />
                </View>
              </TestCase>
            );
          })}
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 8,
  },
  avatar: {
    margin: 8,
  },
});

export default AvatarTest;
