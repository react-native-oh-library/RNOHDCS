import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, Button, View, Pressable } from 'react-native';
import Hyperlink from 'react-native-hyperlink'

const checkType = (obj: any) => {
    return Object.prototype.toString.call(obj).slice(8, -1)
}

const checkIsObject = (obj: any) => {
    return checkType(obj) === 'Object'
}
const ToggleButton: React.FC<{
    title?: string,
    list: any[],
    initValue: any,
    onChange: Function
}> = ({
    title,
    list,
    initValue,
    onChange
}) => {
        let title1 = initValue, value1 = initValue;
        if (checkIsObject(initValue)) {

            title1 = initValue.title;
            value1 = initValue.value
        }

        let [state, setState] = useState(title1)

        return (
            <View style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                marginVertical: 5
            }}>
                <Text style={{ color: '#fff' }}>{title}：</Text>
                <View style={{
                    borderWidth: 1,
                    borderColor: '#eee',
                    borderRadius: 2,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                }}>
                    {

                        list.map((key: any, index: number) => {
                            let title = key, value = key;


                            if (Object.prototype.toString.call(key).slice(8, -1) === 'Object') {
                                title = key.title;
                                value = key.value
                            }

                            return (
                                <Pressable
                                    style={{
                                        borderEndWidth: (index + 1) === list.length ? 0 : 1,
                                        borderColor: '#eee',
                                        backgroundColor: state === title ? '#0081f1' : '#ffffff',
                                        paddingHorizontal: 6,
                                    }}
                                    key={index + ''} onPress={() => {
                                        setState(title)
                                        onChange(key)
                                    }}
                                >
                                    <Text>{title + ''}</Text>
                                </Pressable>
                            )
                        })
                    }
                </View>
            </View>
        )
    }

export function HyperlinkExamples() {

    const [state, setState] = useState(() => {
        return {
            linkStyle: {
                value: 'blue',
                valueList: ['red', 'orange', 'blue']
            },
            linkDefault: {
                value: true,
                valueList: [true, false]
            }
        }
    })

    return (
        <Tester style={{ flex: 1 }}>
            <ScrollView >
                <TestSuite name='linkify' key='linkify'>
                    <TestCase itShould='传入linkify-it库，作用为检测文本中的链接文字' tags={['C_API']}>
                        <View style={styles.container}>
                            <Hyperlink
                                linkify={require('linkify-it')()}
                                linkDefault={true}
                            >
                                <Text style={styles.linkStyle}>
                                    I am Link: https://github.com/obipawan/hyperlink
                                </Text>
                            </Hyperlink>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='linkStyle' key='linkStyle'>
                    <ToggleButton title={'切换linkStyle'} list={state.linkStyle.valueList} initValue={state.linkStyle.value} onChange={(val: any) => {
                        setState({
                            ...state,
                            linkStyle: {
                                ...state.linkStyle,
                                value: val
                            }
                        })
                    }}></ToggleButton>
                    <TestCase itShould='设置link背景色' tags={['C_API']}>
                        <View style={styles.container}>
                            <Hyperlink
                                linkDefault={true}
                                linkStyle={{
                                    backgroundColor: state.linkStyle.value
                                }}
                            >
                                <Text style={styles.linkStyle}>
                                    I am Link: https://github.com/obipawan/hyperlink
                                </Text>
                            </Hyperlink>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='linkText' key='linkText'>
                    <TestCase itShould='link显示的文字被替换成字符串【链接】' tags={['C_API']}>
                        <View style={styles.container}>
                            <Hyperlink
                                linkDefault={true}
                                linkStyle={{
                                    // backgroundColor: 'red'
                                }}
                                linkText={'【链接】'}
                            >
                                <Text style={styles.linkStyle}>
                                    I am Link: https://github.com/obipawan/hyperlink
                                </Text>
                            </Hyperlink>
                        </View>

                    </TestCase>
                </TestSuite>
                <TestSuite name='onPress' key='onPress'>
                    <TestCase itShould='点击link后触发' tags={['C_API']}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                        initialState={false}
                        arrange={({ setState }) => {
                            return <View style={styles.container}>
                                <Hyperlink
                                    onPress={(url) => {
                                        setState(true)
                                    }}
                                >
                                    <Text style={styles.linkStyle}>
                                        I am Link: https://github.com/obipawan/hyperlink
                                    </Text>
                                </Hyperlink>
                            </View>

                        }}>

                    </TestCase>
                </TestSuite>
                <TestSuite name='onLongPress' key='onLongPress'>
                    <TestCase itShould='长按link后触发' tags={['C_API']}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                        initialState={false}
                        arrange={({ setState }) => {
                            return <View style={styles.container}>
                                <Hyperlink
                                    onLongPress={(url) => {
                                        setState(true)
                                    }}
                                >
                                    <Text style={styles.linkStyle}>
                                        I am Link: https://github.com/obipawan/hyperlink
                                    </Text>
                                </Hyperlink>
                            </View>

                        }}>

                    </TestCase>
                </TestSuite>
                <TestSuite name='linkDefault' key='linkDefault'>
                    <ToggleButton title={'切换linkDefault'} list={state.linkDefault.valueList} initValue={state.linkDefault.value} onChange={(val: any) => {
                        setState({
                            ...state,
                            linkDefault: {
                                ...state.linkDefault,
                                value: val
                            }
                        })
                    }}></ToggleButton>
                    <TestCase itShould='link点击的默认表现' tags={['C_API']}>
                        <View style={styles.container}>
                            <Hyperlink
                                linkDefault={state.linkDefault.value}
                            >
                                <Text style={styles.linkStyle}>
                                    I am Link: https://github.com/obipawan/hyperlink
                                </Text>
                            </Hyperlink>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='injectViewProps' key='injectViewProps'>
                    <TestCase itShould='为可点击的组件插入属性,示例中改变了相应组件的style，颜色设置为red' tags={['C_API']}>
                        <View style={styles.container}>
                            <Hyperlink
                                linkDefault={true}
                                injectViewProps={(url) => {
                                    return {
                                        style: {
                                            color: 'red'
                                        }
                                    }
                                }}
                            >
                                <Text style={styles.linkStyle}>
                                    I am Link: https://github.com/obipawan/hyperlink
                                </Text>
                            </Hyperlink>
                        </View>
                    </TestCase>
                </TestSuite>
            </ScrollView>
        </Tester>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100
    },
    linkStyle: {
        fontSize: 20
    }
});

export default { HyperlinkExamples }