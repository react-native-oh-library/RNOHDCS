import * as React from 'react';
import {  ScrollView, StyleSheet, View } from "react-native"
import { Avatar, Card ,MD2Colors,Button,Text} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const RightContent = props => <Avatar.Icon {...props} icon = "folder"/>

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

export function CardTest() {


    const _onLongPress =() => {
        console.info('Button function: onLongPress')
    }
    const _onPress =() => {
        console.info('Button function: onPress')
    }
    const _onPressIn =() => {
        console.info('Button function: onPressIn')
    }

    const _onPressOut =() => {
        console.info('Button function: onPressOut')
    }


    const CardProps = [
        {
          key: 'Card style: mode is elevated',
          value: {
            mode:'elevated' as 'elevated' | 'outlined' | 'contained'
          }
        },
        {
            key: 'Card style: mode is outlined',
            value: {
              mode:'outlined' as 'elevated' | 'outlined' | 'contained'
            }
        },
        {
            key: 'Card style: mode is contained',
            value: {
              mode:'contained' as 'elevated' | 'outlined' | 'contained'
            }
        },
        {
            key: 'Card style: children  is <Card.Title title="Card Title" />',
            value: {
              mode:'contained' as 'elevated' | 'outlined' | 'contained'
            }
        },
        {
            key: 'Card fuction: onLongPress',
            value: {
              mode:'contained' as 'elevated' | 'outlined' | 'contained',
              onLongPress:_onLongPress
            }
        },
        {
            key: 'Card fuction: onPress',
            value: {
              mode:'contained' as 'elevated' | 'outlined' | 'contained',
              onPress:_onPress
            }
        },
        {
            key: 'Card fuction: onPressIn',
            value: {
              mode:'contained' as 'elevated' | 'outlined' | 'contained',
              onPressIn:_onPressIn
            }
        },
        {
            key: 'Card fuction: onPressOut',
            value: {
              mode:'contained' as 'elevated' | 'outlined' | 'contained',
              onPressIn:_onPressOut
            }
        },
        {
            key: 'Card stylet: delayLongPress is 10000(延时长按1秒)',
            value: {
              mode:'contained' as 'elevated' | 'outlined' | 'contained',
              onLongPress:_onLongPress,
              delayLongPress:10000
            }
        },
        {
            key: 'Card stylet: delayLongPress is 100000(延时长按10秒)',
            value: {
              mode:'contained' as 'elevated' | 'outlined' | 'contained',
              onLongPress:_onLongPress,
              delayLongPress:100000
            }
        },
        {
            key: 'Card stylet: disabled is true',
            value: {
              mode:'contained' as 'elevated' | 'outlined' | 'contained',
              onLongPress:_onLongPress,
              disabled:true
            }
        },
        {
            key: 'Card stylet: disabled is false',
            value: {
              mode:'contained' as 'elevated' | 'outlined' | 'contained',
              onLongPress:_onLongPress,
              disabled:false
            }
        },
        {
            key: 'Card stylet: contentStyle is {backgroundColor:MD2Colors.red100}',
            value: {
              mode:'contained' as 'elevated' | 'outlined' | 'contained',
              contentStyle:{backgroundColor:MD2Colors.red100}
            }
        },
        {
            key: 'Card stylet: style is {backgroundColor:MD2Colors.red100}',
            value: {
              mode:'contained' as 'elevated' | 'outlined' | 'contained',
              style:{backgroundColor:MD2Colors.red100}
            }
        },
        {
            key: 'Card stylet: theme is { colors: { primary: "green" } }',
            value: {
              mode:'outlined' as 'elevated' | 'outlined' | 'contained',
              theme:{ colors: { primary: 'green' } }
            }
        },
        {
            key: 'Card stylet: testID is Card',
            value: {
              mode:'outlined' as 'elevated' | 'outlined' | 'contained',
              testID:'Card'
            }
        },
        {
            key: 'Card stylet: testID is Card1',
            value: {
              mode:'outlined' as 'elevated' | 'outlined' | 'contained',
              testID:'Card1'
            }
        },
        {
            key: 'Card style: accessible is true(accessible属性用于提高应用的无障碍性)',
            value: {
              mode:'contained' as 'elevated' | 'outlined' | 'contained',
              accessible:true
            }
        },
        {
            key: 'Card style: accessible is false(accessible属性用于提高应用的无障碍性)',
            value: {
              mode:'contained' as 'elevated' | 'outlined' | 'contained',
              accessible:false
            }
        },
    ]

    const CardElevationProps = [
        {
          key: 'Card style: mode is elevated is 0',
          value: {
            elevation: 0 as 0 | 1 | 2 | 3 | 4 | 5 
          }
        },
        {
            key: 'Card style: mode is elevated is 1',
            value: {
              elevation: 1 as 0 | 1 | 2 | 3 | 4 | 5 
            }
          },
          {
            key: 'Card style: mode is elevated is 2',
            value: {
              elevation: 2 as 0 | 1 | 2 | 3 | 4 | 5 
            }
          },
          {
            key: 'Card style: mode is elevated is 3',
            value: {
              elevation: 3 as 0 | 1 | 2 | 3 | 4 | 5 
            }
          },
          {
            key: 'Card style: mode is elevated is 4',
            value: {
              elevation: 4 as 0 | 1 | 2 | 3 | 4 | 5 
            }
          },
          {
            key: 'Card style: mode is elevated is 5',
            value: {
              elevation: 5 as 0 | 1 | 2 | 3 | 4 | 5 
            }
          },
    ]

    const CardActionsProps = [
        {
          key: 'Card.Actions style: children  is <Button>Cancel</Button><Button>Ok</Button> ',
          value: {
            style:{backgroundColor:MD2Colors.white}
          }
        },
        {
            key: 'Card.Actions style: style  is {backgroundColor:MD2Colors.red100}',
            value: {
                style:{backgroundColor:MD2Colors.red100}
            }
        },
        {
            key: 'Card.theme style: theme  is { colors: { primary: "green" } }',
            value: {
               theme:{ colors: { primary: 'green' } }
            }
        }
    ]

    const CardContentProps = [
        {
          key: 'Card.Content style: children  is <Text variant="titleLarge">Card title</Text> ',
          value: {
            style:{backgroundColor:MD2Colors.white}
          }
        },
        {
            key: 'Card.Content style: style  is {backgroundColor:MD2Colors.white}',
            value: {
              style:{backgroundColor:MD2Colors.red100}
            }
        },
    ]

    const CardCoverProps = [
        {
          key: 'Card.Cover style: source  is { uri: "../assets/images/avatar.png" } ',
          value: {
            source:require('../assets/images/avatar.png')
          }
        },
        {
            key: 'Card.Cover style: style  is {backgroundColor:MD2Colors.red100}',
            value: {
              source:require('../assets/images/avatar.png'),
              style:{backgroundColor:MD2Colors.red100}
            }
          },
          {
            key: 'Card.Cover style: theme  is { colors: { primary: "green" }',
            value: {
              source:require('../assets/images/avatar.png'),
              theme:{ colors: { primary: 'green' } }
            }
          },
    ]

    const CardTitleProps = [
        {
            key: 'Card.Title style: title  is Card Title',
            value: {
                title:'Card Title'
            } 
        },
        {
            key: 'Card.Title style: titleStyle  is {color:MD2Colors.red100}',
            value: {
                title:'Card Title',
                titleStyle:{color:MD2Colors.red100}
            } 
        },
        {
            key: 'Card.Title style: titleNumberOfLines  is 1',
            value: {
                title:'Card Title Card Title Card Title Card Title Card Title Card Title',
                titleNumberOfLines:1
            } 
        },
        {
            key: 'Card.Title style: titleNumberOfLines  is 2',
            value: {
                title:'Card Title Card Title Card Title Card Title Card Title Card Title',
                titleNumberOfLines:2
            } 
        },
        {
            key: 'Card.Title style: titleVariant  is bodyLarge',
            value: {
                title:'Card Title',
                titleVariant:'bodyLarge' as 'bodyLarge'|'bodyMedium'|'bodySmall'
            } 
        },
        {
            key: 'Card.Title style: titleVariant  is bodyMedium',
            value: {
                title:'Card Title',
                titleVariant:'bodyMedium' as 'bodyLarge'|'bodyMedium'|'bodySmall'
            } 
        },
        {
            key: 'Card.Title style: titleVariant  is bodySmall',
            value: {
                title:'Card Title',
                titleVariant:'bodySmall' as 'bodyLarge'|'bodyMedium'|'bodySmall'
            } 
        },
        {
            key: 'Card.Title style: subtitle  is ... for card and cove',
            value: {
                title:'Card Title',
                subtitle:'... for card and cover'
            } 
        },
        {
            key: 'Card.Title subtitleStyle: subtitle  {color:MD2Colors.red100}',
            value: {
                title:'Card Title',
                subtitle:'... for card and cover',
                subtitleStyle:{color:MD2Colors.red100}
            } 
        },
        {
            key: 'Card.Title subtitleNumberOfLines: 1',
            value: {
                title:'Card Title',
                subtitle:'for card and cover for card and cover for card and cover for card and cover',
                subtitleNumberOfLines:1
            } 
        },
        {
            key: 'Card.Title subtitleNumberOfLines: 2',
            value: {
                title:'Card Title',
                subtitle:'for card and cover for card and cover for card and cover for card and cover',
                subtitleNumberOfLines:2
            } 
        },
        {
            key: 'Card.Title style: subtitleVariant  is bodyLarge',
            value: {
                title:'Card Title',
                subtitle:'... for card and cover',
                subtitleVariant:'bodyLarge'  as 'bodyLarge'|'bodyMedium'|'bodySmall'
            } 
        },
        {
            key: 'Card.Title style: subtitleVariant  is bodyMedium',
            value: {
                title:'Card Title',
                subtitle:'... for card and cover',
                subtitleVariant:'bodyMedium'  as 'bodyLarge'|'bodyMedium'|'bodySmall'
            } 
        },
        {
            key: 'Card.Title style: subtitleVariant  is bodySmall',
            value: {
                title:'Card Title',
                subtitle:'... for card and cover',
                subtitleVariant:'bodySmall'  as 'bodyLarge'|'bodyMedium'|'bodySmall'
            } 
        },
        {
            key: 'Card.Title style: left  is LeftContent',
            value: {
                title:'Card Title',
                subtitle:'... for card and cover',
                left:LeftContent
            } 
        },
        {
            key: 'Card.Title style: leftStyle  is {backgroundColor:MD2Colors.red100}',
            value: {
                title:'Card Title',
                subtitle:'... for card and cover',
                left:LeftContent,
                leftStyle:{backgroundColor:MD2Colors.red100}
            } 
        },
        {
            key: 'Card.Title style: right  is RightContent',
            value: {
                title:'Card Title',
                subtitle:'... for card and cover',
                right:RightContent
            } 
        },
        {
            key: 'Card.Title style: rightStyle  is {backgroundColor:MD2Colors.red100}',
            value: {
                title:'Card Title',
                subtitle:'... for card and cover',
                right:RightContent,
                rightStyle:{backgroundColor:MD2Colors.red100}
            } 
        },
        {
            key: 'Card.Title style: titleMaxFontSizeMultiplier  is 1(maxFontSizeMultiplier属性主要用于解决在不同设备上，由于屏幕尺寸和分辨率的差异，导致文本字体大小过小或过大的问题)',
            value: {
                title:'Card Title',
                titleMaxFontSizeMultiplier:1
            } 
        },
        {
            key: 'Card.Title style: titleMaxFontSizeMultiplier  is 2(maxFontSizeMultiplier属性主要用于解决在不同设备上，由于屏幕尺寸和分辨率的差异，导致文本字体大小过小或过大的问题)',
            value: {
                title:'Card Title',
                titleMaxFontSizeMultiplier:2
            } 
        },
        {
            key: 'Card.Title subtitleStyle: subtitleMaxFontSizeMultiplier is 1(subtitleMaxFontSizeMultiplier属性主要用于解决在不同设备上，由于屏幕尺寸和分辨率的差异，导致文本字体大小过小或过大的问题)',
            value: {
                title:'Card Title',
                subtitle:'... for card and cover',
                subtitleMaxFontSizeMultiplier:1
            } 
        },
        {
            key: 'Card.Title subtitleStyle: subtitleMaxFontSizeMultiplier is 2(subtitleMaxFontSizeMultiplier属性主要用于解决在不同设备上，由于屏幕尺寸和分辨率的差异，导致文本字体大小过小或过大的问题)',
            value: {
                title:'Card Title',
                subtitle:'... for card and cover',
                subtitleMaxFontSizeMultiplier:2
            } 
        },
        {
            key: 'Card.Title style:{backgroundColor:MD2Colors.red100}',
            value: {
                title:'Card Title',
                subtitle:'... for card and cover',
                style:{backgroundColor:MD2Colors.red100}
            } 
        },
        {
            key: 'Card.Title style:theme is { colors: { primary: "green" } }',
            value: {
                title:'Card Title',
                subtitle:'... for card and cover',
                theme:{ colors: { primary: 'green' } }
            } 
        },
    ]

    return (
    <ScrollView>
     <Tester>
        <TestSuite name='Card' >
            {CardElevationProps.map((item) => {
                return (
                <TestCase itShould={item.key}  key={item.key}>
                <View style={styles.container}>  
                <Card {...item.value}>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                </Card>
                </View>
                </TestCase>
                );
            })}
            {CardProps.map((item) => {
            return (
            <TestCase itShould={item.key}  key={item.key}>
                <Card  {...item.value}>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                </Card>
            </TestCase>
            );
            })}

            {CardActionsProps.map((item) => {
            return (
            <TestCase itShould={item.key}  key={item.key}>
                <Card>
                    <Card.Actions {...item.value}>
                        <Button >Cancel</Button>
                        <Button >Ok</Button>
                    </Card.Actions>
                </Card>
            </TestCase>
            );
            })}
          {CardContentProps.map((item) => {
            return (
            <TestCase itShould={item.key}  key={item.key}>
                <Card>
                    <Card.Content {...item.value}>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                    </Card.Content>
                </Card>
            </TestCase>
            );
            })}
        {CardCoverProps.map((item) => {
            return (
            <TestCase itShould={item.key}  key={item.key}>
                <Card>
                    <Card.Cover  {...item.value} />
                </Card>
            </TestCase>
            );
            })}
        {CardTitleProps.map((item) => {
            return (
                <TestCase itShould={item.key}  key={item.key}>
                    <Card.Title {...item.value}/>
                </TestCase>
            );
            })}
        </TestSuite>
    </Tester>      
    </ScrollView>  
    )
}

const styles = StyleSheet.create({  
    container: {  
      // 这里你可以尝试一些样式变化，但请注意 React Native 不支持直接的阴影效果  
      // 如果你需要阴影，你可能需要使用额外的库  
      // 例如，你可以尝试给 Appbar 添加一个背景色和边框来模拟提升效果（但这不是真正的阴影）  
      backgroundColor: 'white',   
      borderBottomColor: '#ccc',  
      height:100,  
    },  
    content: {  
      flex: 1,  
      // 页面内容的样式  
    },  
  });

export default CardTest;