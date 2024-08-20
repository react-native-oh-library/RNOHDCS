import * as React from 'react';
import { AccessibilityRole, Image, ScrollView, StyleSheet, View } from 'react-native';

import {
    Button,
    MD2Colors

} from 'react-native-paper';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

export function ButtonTest() {

    const ButtonProps = [
        {
          key: 'Button style: mode is text',
          value: {
            mode:'text' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal'
          },
          test:'text'
        },
        {
            key: 'Button style: mode is outlined',
            value: {
              mode:'outlined' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal'
            },
            test:'outlined'
          },
          {
            key: 'Button style: mode is contained',
            value: {
              mode:'contained' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal'
            },
            test:'contained'
          },
          {
            key: 'Button style: mode is elevated',
            value: {
              mode:'elevated' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal'
            },
            test:'elevated'
          },
          {
            key: 'Button style: mode is contained-tonal',
            value: {
              mode:'contained-tonal' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal'
            },
            test:'contained-tonal'
          },
          {
            key: 'Button style: dark is true',
            value: {
              mode:'contained-tonal'as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              dark:true
            },
            test:'Default'
          },
          {
            key: 'Button style: dark is false',
            value: {
              mode:'contained-tonal'as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              dark:false
            },
            test:'Default'
          },
          {
            key: 'Button style: compact is true',
            value: {
              mode:'contained-tonal' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              dark:false,
              compact:true
            },
            test:'Default'
          },
          {
            key: 'Button style: compact is false',
            value: {
              mode:'contained-tonal' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              dark:false,
              compact:false
            },
            test:'Default'
          },
          {
            key: 'Button style: buttonColor  is MD2Colors.red100',
            value: {
              mode:'contained-tonal' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              buttonColor:MD2Colors.red100
            },
            test:'Default'
          },
          {
            key: 'Button style: buttonColor  is MD2Colors.yellow100',
            value: {
              mode:'contained-tonal' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              buttonColor:MD2Colors.yellow100
            },
            test:'Default'
          },
          {
            key: 'Button style: textColor  is MD2Colors.red100',
            value: {
              mode:'contained-tonal' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              textColor:MD2Colors.red100
            },
            test:'Default'
          },
          {
            key: 'Button style: textColor  is MD2Colors.yellow100',
            value: {
              mode:'contained-tonal' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              textColor:MD2Colors.yellow100
            },
            test:'Default'
          },
          {
            key: 'Button style: icon  is camera',
            value: {
              mode:'contained' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              icon:'camera'
            },
            test:'Icon'
          },
          {
            key: 'Button style: disabled  is true',
            value: {
              mode:'contained' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              disabled:true
            },
            test:'Default'
          },
          {
            key: 'Button style: disabled  is false',
            value: {
              mode:'contained' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              disabled:false
            },
            test:'Default'
          },
          {
            key: 'Button style: children   is children text',
            value: {
              mode:'contained' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
            },
            test:'children text'
          },
          {
            key: 'Button style: uppercase  is true',
            value: {
              mode:'contained' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              uppercase:true
            },
            test:'children text'
          },
          {
            key: 'Button style: uppercase  is false',
            value: {
              mode:'contained' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              uppercase:false
            },
            test:'children text'
          },
          {
            key: 'Button style: background  is MD2Colors.red100',
            value: {
              mode:'contained' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              style:[styles.button,{backgroundColor:MD2Colors.red100}]
            },
            test:'children text'
          },
          {
            key: 'Button style: accessibilityLabel  is accessibility Label(accessibilityLabel 属性，这是为了增强应用的无障碍性,该属性为屏幕阅读器提供了一个标签，这样视力障碍的用户就能通过语音助手了解界面上各个元素的功能)',
            value: {
              mode:'contained' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              style:[styles.button],
              accessibilityLabel:'accessibility Label'
            },
            test:'children text'
          },
          {
            key: 'Button style: accessibilityHint  is accessibility hint(accessibilityLabel 属性，这是为了增强应用的无障碍性,该属性为屏幕阅读器提供了一个标签，这样视力障碍的用户就能通过语音助手了解界面上各个元素的功能)',
            value: {
              mode:'contained' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              style:[styles.button],
              accessibilityHint:'accessibility hint'
            },
            test:'children text'
          },
          {
            key: 'Button style: accessibilityRole  is button(accessibilityLabel 属性，这是为了增强应用的无障碍性,该属性为屏幕阅读器提供了一个标签，这样视力障碍的用户就能通过语音助手了解界面上各个元素的功能)',
            value: {
              mode:'contained' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              style:[styles.button],
              accessibilityRole:'button' as AccessibilityRole
            },
            test:'children text'
          },
          {
            key: 'Button style: maxFontSizeMultiplier  is 2(maxFontSizeMultiplier属性主要用于解决在不同设备上，由于屏幕尺寸和分辨率的差异，导致文本字体大小过小或过大的问题)',
            value: {
              mode:'contained' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              style:[styles.button],
              maxFontSizeMultiplier:2

            },
            test:'children text'
          },
          {
            key: 'Button style: maxFontSizeMultiplier  is 4(maxFontSizeMultiplier属性主要用于解决在不同设备上，由于屏幕尺寸和分辨率的差异，导致文本字体大小过小或过大的问题)',
            value: {
              mode:'contained' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              style:[styles.button],
              maxFontSizeMultiplier:4
            },
            test:'children text'
          },
          {
            key: 'Button style: style is [styles.button,{backgroundColor:MD2Colors.yellow100}]',
            value: {
              mode:'contained' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              style:[styles.button,{backgroundColor:MD2Colors.yellow100}],
            },
            test:'children text'
          },

          {
            key: 'Button style: labelStyle is {color:MD2Colors.black}',
            value: {
              mode:'contained' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              style:[styles.button,{backgroundColor:MD2Colors.yellow100}],
              maxFontSizeMultiplier:4,
              labelStyle:{color:MD2Colors.black}
            },
            test:'children text'
          },
          {
            key: 'Button style: theme is { colors: { primary: "green" }',
            value: {
              mode:'contained' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              style:[styles.button],
              theme:{ colors: { primary: 'green' }}
            },
            test:'children text'
          },
          {
            key: 'Button style: testID is button',
            value: {
              mode:'contained' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              style:[styles.button],
              testID:'button'
            },
            test:'children text'
          },
          {
            key: 'Button style: testID is button1',
            value: {
              mode:'contained' as 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
              style:[styles.button],
              testID:'button1'
            },
            test:'children text'
          },
    ]

    return (
        <Tester>
        <ScrollView>
        <TestSuite name='Button'>
          <TestCase itShould={"Button style: rippleColor  is MD2Colors.red100"}>
            <View style={styles.row}>
                    <Button onPress={() => { }} style={styles.button} rippleColor={MD2Colors.red100}>
                        Default
                    </Button>
                </View>
            </TestCase>  
            <TestCase itShould={"Button style: rippleColor  is MD2Colors.yellow100"}>
            <View style={styles.row}>
                    <Button onPress={() => { }} style={styles.button} rippleColor={MD2Colors.yellow100}>
                        Default
                    </Button>
                </View>
            </TestCase>  
            <TestCase itShould={"Button style: loading  is true"}>
            <View style={styles.row}>
                <Button
                    mode="contained"
                    loading = {true}
                    onPress={() => {}}
                    style={styles.button}
                >
                    Loading
                </Button>
                </View>
            </TestCase>  
            <TestCase itShould={"Button style: loading  is false"}>
            <View style={styles.row}>
                <Button
                    mode="contained"
                    loading = {false}
                    onPress={() => {}}
                    style={styles.button}
                >
                    Loading
                </Button>
                </View>
            </TestCase>  
            <TestCase itShould={"Button function: onPress"}>
            <View style={styles.row}>
                <Button
                    mode="contained"
                    loading = {false}
                    onPress={() => {
                        console.info('Button function: onPress')
                    }}
                    style={styles.button}
                >
                    Loading
                </Button>
                </View>
            </TestCase>  
            <TestCase itShould={"Button function: onPressIn"}>
            <View style={styles.row}>
                <Button
                    mode="contained"
                    loading = {false}
                    onPressIn={() => {
                        console.info('Button function: onPressIn')
                    }}
                    style={styles.button}
                >
                    Loading
                </Button>
                </View>
            </TestCase>  
            <TestCase itShould={"Button function: onPressOut"}>
            <View style={styles.row}>
                <Button
                    mode="contained"
                    loading = {false}
                    onPressOut={() => {
                        console.info('Button function: onPressOut')
                    }}
                    style={styles.button}
                >
                    Loading
                </Button>
                </View>
            </TestCase>  
            <TestCase itShould={"Button function: onLongPress"}>
            <View style={styles.row}>
                <Button
                    mode="contained"
                    loading = {false}
                    onLongPress={() => {
                        console.info('Button function: onLongPress')
                    }}
                    style={styles.button}
                >
                    Loading
                </Button>
                </View>
            </TestCase>  
            <TestCase itShould={"Button style: delayLongPress is 1000 (1秒延时长按)"}>
            <View style={styles.row}>
                <Button
                    mode="contained"
                    delayLongPress={1000}
                    onLongPress={() => {
                        console.info('Button function: onLongPress')
                    }}

                    style={styles.button}
                >
                    Loading
                </Button>
                </View>
            </TestCase>  
            <TestCase itShould={"Button style: delayLongPress is 10000 (10秒延时长按)"}>
            <View style={styles.row}>
                <Button
                    mode="contained"
                    delayLongPress={10000}
                    onLongPress={() => {
                        console.info('Button function: onLongPress')
                    }}

                    style={styles.button}
                >
                    Loading
                </Button>
                </View>
            </TestCase>  
            
            {ButtonProps.map((item) => {
                return (
              <TestCase itShould={item.key}  key={item.key}>
                <View style={styles.row}>
                        <Button {...item.value}>
                            {item.test}
                        </Button>
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
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 12,
        alignItems: 'center',
    },
    button: {
        margin: 4,
    },
    flexReverse: {
        flexDirection: 'row-reverse',
    },
    md3FontStyles: {
        lineHeight: 32,
    },
    fontStyles: {
        fontWeight: '800',
        fontSize: 24,
    },
    flexGrow1Button: {
        flexGrow: 1,
        marginTop: 10,
    },
    width100PercentButton: {
        width: '100%',
        marginTop: 10,
    },
    customRadius: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 16,
    },
    noRadius: {
        borderRadius: 0,
    },
});

export default ButtonTest;
