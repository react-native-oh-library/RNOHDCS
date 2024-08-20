import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import {
    Avatar, 
    MD2Colors, 
} from 'react-native-paper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

export function AvatarTest() {
    const AvatarIconProps = [ 
        {
          key: 'Avatar.Icon style: icon is folder',
          value: {
            style:styles.avatar,
            icon:"folder",
          }
        },
        {
            key: 'Avatar.Icon style: icon is magnify',
            value: {
              style:styles.avatar,
              icon:"magnify",
            }
          },
          {
            key: 'Avatar.Icon style: size is 60',
            value: {
              style:styles.avatar,
              icon:"folder",
              size:60,
            }
          },
          {
            key: 'Avatar.Icon style: size is 80',
            value: {
              style:styles.avatar,
              icon:"folder",
              size:80,
            }
          },
          {
            key: 'Avatar.Icon style: color is MD2Colors.red100',
            value: {
              style:styles.avatar,
              icon:"folder",
              color:MD2Colors.red100
            }
          },
          {
            key: 'Avatar.Icon style: color is 80',
            value: {
              style:styles.avatar,
              icon:"folder",
              color:MD2Colors.blue100
            }
          },
          {
            key: 'Avatar.Icon style: styles.avatar,backgroundColor:MD2Colors.yellow500',
            value: {
              style:[styles.avatar,{backgroundColor:MD2Colors.yellow500}],
              icon:"folder",
            }
          },
          {
            key: 'Avatar.Icon style: theme { colors: { primary:"green"}',
            value: {
              style:[styles.avatar],
              icon:"folder",
              theme:{ colors: { primary: 'green' }}
            }
          },
    ]

    const _onError = () => {
      console.info('fuction onError')
    }

    const _onLayout = () => {
      console.info('fuction onLayout')
    }

    const _onLoadEnd =() => {
      console.info('fuction onLoadEnd')
    }

    const _onLoadStart =() => {
      console.info('fuction onLoadStart')
    }

    const _onProgress = () => {
      console.info("fuction onProgress")
    }

    const AvatarImageProps = [
        {
          key: 'Avatar.Image style: source is avatar.png',
          value: {
            style:styles.avatar,
            source:require('../assets/images/avatar.png'),
          }
        },
        {
            key: 'Avatar.Image style: size is 60',
            value: {
              style:styles.avatar,
              source:require('../assets/images/avatar.png'),
              size:60,
            }
          },
          {
            key: 'Avatar.Image style: size is 80',
            value: {
              style:styles.avatar,
              source:require('../assets/images/avatar.png'),
              size:80,
            }
          },
          {
            key: 'Avatar.Image fuction: onError = {_onError}',
            value: {
              style:styles.avatar,
              size:60,
              source:require('../assets/images/avatar.png'),
              onError:_onError
            }
          },
          {
            key: 'Avatar.Image fuction: onLoadEnd = {_onLoadEnd}',
            value: {
              style:styles.avatar,
              size:60,
              source:require('../assets/images/avatar.png'),
              onLoadEnd:_onLoadEnd
            }
          },
          {
            key: 'Avatar.Image fuction: onLoadEnd = {_onLoadEnd}',
            value: {
              style:styles.avatar,
              size:60,
              source:require('../assets/images/avatar.png'),
              onLoadEnd:_onLoadEnd
            }
          },
          {
            key: 'Avatar.Image fuction: onLayout = {_onLayout}',
            value: {
              style:styles.avatar,
              size:60,
              source:require('../assets/images/avatar.png'),
              onLayout:_onLayout
            }
          },
          {
            key: 'Avatar.Image fuction: onLoadStart = {_onLoadStart}',
            value: {
              style:styles.avatar,
              size:60,
              source:require('../assets/images/avatar.png'),
              onLoadStart:_onLoadStart
            }
          },
          {
            key: 'Avatar.Image fuction: onLoadStart = {_onLoadStart}',
            value: {
              style:styles.avatar,
              size:60,
              source:require('../assets/images/avatar.png'),
              onProgress:_onProgress
            }
          },
          {
            key: 'Avatar.Image fuction: theme = { colors: { primary:"green"} }',
            value: {
              style:styles.avatar,
              size:60,
              source:require('../assets/images/avatar.png'),
              theme:{ colors: { primary: 'green' } }
            }
          },
    ]

    const AvatarTextProps = [
        {
          key: 'Avatar.Text: label is XD',
          value: {
            label:"XD"
          }
        },
        {
            key: 'Avatar.Text: label is SD',
            value: {
              label:"SD"
            }
          },
          {
            key: 'Avatar.Text: size is 60',
            value: {
              label:"XD",
              size:60,
            }
          },
          {
            key: 'Avatar.Text: size is 80',
            value: {
              label:"XD",
              size:80,
            }
          },
          {
            key: 'Avatar.Text: color is MD2Colors.red100',
            value: {
              label:"XD",
              color:MD2Colors.red100,
            }
          },
          {
            key: 'Avatar.Text: color is MD2Colors.blue100',
            value: {
              label:"XD",
              color:MD2Colors.blue100,
            }
          },
          {
            key: 'Avatar.Text: style is backgroundColor:MD2Colors.yellow500',
            value: {
              label:"XD",
              color:MD2Colors.blue100,
              style:{backgroundColor:MD2Colors.yellow500}
            }
          },
          {
            key: 'Avatar.Text: labelStyle is color:MD2Colors.yellow500',
            value: {
              label:"XD",
              labelStyle:{color:MD2Colors.yellow500}
            }
          },
          {
            key: 'Avatar.Text: maxFontSizeMultiplier is 1(maxFontSizeMultiplier属性主要用于解决在不同设备上，由于屏幕尺寸和分辨率的差异，导致文本字体大小过小或过大的问题)',
            value: {
              label:"XD",
              maxFontSizeMultiplier:2
            }
          },
          {
            key: 'Avatar.Text: maxFontSizeMultiplier is 2(maxFontSizeMultiplier属性主要用于解决在不同设备上，由于屏幕尺寸和分辨率的差异，导致文本字体大小过小或过大的问题)',
            value: {
              label:"XD",
              maxFontSizeMultiplier:4
            }
          },
          {
            key: 'Avatar.Text: theme is theme:{ primary: "green" }',
            value: {
              label:"XD",
              theme:{ colors: { primary: 'green' }}
            }
          },
    ]

    return (
        <Tester> 
          <ScrollView>
          <TestSuite name='Avatar'>
          {AvatarTextProps.map((item) => {
              return (
                <TestCase  itShould={item.key}  key={item.key} > 
                 <View style={styles.row}>
                   <Avatar.Text  {...item.value} />
                 </View>
                </TestCase>
              );
          })}
         {AvatarIconProps.map((item) => {
              return (
                <TestCase  itShould={item.key}  key={item.key} > 
                 <View style={styles.row}>
                   <Avatar.Icon  {...item.value} />
                 </View>
                </TestCase>
              );
          })}
        {AvatarImageProps.map((item) => {
              return (
                <TestCase  itShould={item.key}  key={item.key} > 
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
