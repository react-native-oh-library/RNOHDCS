import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Linking, ScrollView, Dimensions, TextInput } from 'react-native';
import Autolink from 'react-native-autolink';
import { Tester, TestCase } from '@rnoh/testerino';
import { Match } from 'autolinker/dist/es2015';

const AutoLinkExample = () => {
    const [result, setResult] = useState<string>('');
    const linkProps = {
        onPress: () => {
            Linking.openURL('https://www.baidu.com/')
            setResult('success')
        }
    };
    const onPress = ((url: any, match: any) => {
        switch (match.getType()) {
            case 'mention':
                setResult('Mention pressed!')
                Linking.openURL(url)
                break
            default:
                Linking.openURL('https://www.baidu.com')
                setResult('Link pressed!')
        }
    })
    const onLongPress = ((url: any, match: any) => {
        switch (match.getType()) {
            case 'mention':
                setResult('Mention pressed!')
                Linking.openURL(url)
                break
            default:
                Linking.openURL('https://www.baidu.com')
                setResult('Link pressed!')
        }
    })
    const renderLink = ((text: string, match: Match, index: number) => {
        return <>
            <Text key={index} style={styles.link}>
                {text}
            </Text>
        </>
    })
    const renderText = (text: string) => {
        return (
            <Text style={styles.customText}>
                {text}
            </Text>
        );
    };
    const textProps = {
        style: {
            fontSize: 12,
            color: 'red',
        },
    };
    const AutolinkProps: any = [
        {
            key: 'Text:文本',
            value: {
                text: 'https://github.com/joshswan/react-native-autolink',
            }
        },
        {
            key: 'email: 跳转邮箱,设置为true',
            value: {
                email: true,
                text: 'emails (837185575@qq.com)'
            }
        },
        {
            key: 'email: 跳转邮箱,设置为false',
            value: {
                email: false,
                text: 'emails (837185575@qq.com)'
            }
        },
        {
            key: 'hashtag: 将主题标签链接到提供的服务,default is false',
            value: {
                hashtag: false,
                text: 'hashtags (#exciting)'
            }
        },
        {
            key: 'hashtag: 将主题标签链接到提供的服务,例如facebook',
            value: {
                hashtag: 'facebook',
                text: 'hashtags (#exciting)'
            }
        },
        {
            key: 'hashtag: 将主题标签链接到提供的服务,例如instagram',
            value: {
                hashtag: 'instagram',
                text: 'hashtags (#exciting)'
            }
        },
        {
            key: 'hashtag: 将主题标签链接到提供的服务,例如twitter',
            value: {
                hashtag: 'twitter',
                text: 'hashtags (#exciting)'
            }
        },
        {
            key: 'phone: 是否链接电话号码,默认是true',
            value: {
                phone: true,
                text: 'phone numbers (415-555-5555)'
            }
        },
        {
            key: 'phone: 是否链接电话号码,设置为false',
            value: {
                phone: false,
                text: 'phone numbers (415-555-5555)'
            }
        },
        {
            key: 'phone: 链接电话号码,设置为sms',
            value: {
                phone: 'sms',
                text: 'phone numbers (415-555-5555)'
            }
        },
        {
            key: 'phone: 链接电话号码,设置为text',
            value: {
                phone: 'text',
                text: 'phone numbers (415-555-5555)'
            }
        },
        {
            key: 'mention: 是否将提及/句柄链接到提供的服务,默认是false',
            value: {
                mention: false,
                text: 'mentions/handles (@twitter)'
            }
        },
        {
            key: 'mention: 是否将提及/句柄链接到提供的服务,例如soundcloud',
            value: {
                mention: 'soundcloud',
                text: 'mentions/handles (@soundcloud)'
            }
        },
        {
            key: 'mention: 是否将提及/句柄链接到提供的服务,例如instagram',
            value: {
                mention: 'instagram',
                text: 'mentions/handles (@instagram)'
            }
        },
        {
            key: 'mention: 是否将提及/句柄链接到提供的服务,例如twitter',
            value: {
                mention: 'twitter',
                text: 'mentions/handles (@twitter)'
            }
        },
        {
            key: 'showAlert: 是否显示弹窗,默认是false',
            value: {
                showAlert: false,
                text: 'https://www.baidu.com/'
            }
        },
        {
            key: 'showAlert: 是否显示弹窗,设置为true',
            value: {
                showAlert: true,
                text: 'https://www.baidu.com/'
            }
        },
        {
            key: 'stripPrefix: 是否从 URL 链接文本中去除协议,默认是true',
            value: {
                stripPrefix: true,
                text: "Check out our website at https://www.example.com and follow us on http://twitter.com/example"
            }
        },
        {
            key: 'stripPrefix: 是否从 URL 链接文本中去除协议,设置为false',
            value: {
                stripPrefix: false,
                text: "Check out our website at https://www.example.com and follow us on http://twitter.com/example"
            }
        },
        {
            key: 'stripTrailingSlash:是否从 URL 链接文本中删除尾随斜杠,默认是true',
            value: {
                stripTrailingSlash: true,
                text: "Visit our site at https://www.example.com/ and follow us on https://twitter.com/example/"
            }
        },
        {
            key: 'stripTrailingSlash: 是否从 URL 链接文本中删除尾随斜杠,设置为false',
            value: {
                stripTrailingSlash: false,
                text: "Visit our site at https://www.example.com/ and follow us on https://twitter.com/example/"
            }
        },
        {
            key: 'textProps: 应用于非链接文本组件的属性',
            value: {
                textProps: textProps,
                text: "Visit our site at https://www.example.com/ and follow us on https://twitter.com/example/"
            }
        },
        {
            key: 'truncate: URL 链接文本的最大长度，设置10',
            value: {
                truncate: 10,
                text: "This is the string to parse for urls (https://github.com/joshswan/react-native-autolink), emails (837185575@qq.com), and hashtags (#exciting)"
            }
        },
        {
            key: 'truncate: URL 链接文本的最大长度，设置15',
            value: {
                truncate: 12,
                text: "This is the string to parse for urls (https://github.com/joshswan/react-native-autolink), emails (837185575@qq.com), and hashtags (#exciting)"
            }
        },
        {
            key: 'url: 是否链接 URL，默认是true',
            value: {
                url: true,
                text: "This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
            }
        },
        {
            key: 'url: 是否链接 URL，设置为false',
            value: {
                url: false,
                text: "This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
            }
        },
        {
            key: 'url: 是否链接以scheme为前缀的URL，schemeMatches true',
            value: {
                url: {
                    schemeMatches: true
                },
                text: "This is the string to parse for urls (https://github.com)"
            }
        },
        {
            key: 'url: 是否链接以scheme为前缀的URL，schemeMatches false',
            value: {
                url: {
                    schemeMatches: false
                },
                text: "This is the string to parse for urls (https://github.com)"
            }
        },
        {
            key: 'url: 是否链接以www为前缀的URL，wwwMatches false',
            value: {
                url: {
                    wwwMatches: false
                },
                text: "This is the string to parse for urls (www.github.com)"
            }
        },
        {
            key: 'url: 是否链接以www为前缀的URL，wwwMatches true',
            value: {
                url: {
                    wwwMatches: true
                },
                text: "This is the string to parse for urls (www.github.com)"
            }
        },
        {
            key: 'url: 是否将URL与TLD链接，但不与方案或www前缀链接，tldMatches true',
            value: {
                url: {
                    tldMatches: true
                },
                text: "This is the string to parse for urls (github.com)"
            }
        },
        {
            key: 'url: 是否将URL与TLD链接，但不与方案或www前缀链接，tldMatches false',
            value: {
                url: {
                    tldMatches: false
                },
                text: "This is the string to parse for urls (github.com)"
            }
        }
    ];
    return (
        <View>
            <ScrollView stickyHeaderIndices={[0]}>
                <View style={styles.inputArea}>
                    <Text style={styles.baseText}>
                        {result}
                    </Text>
                </View>
                <Tester>
                    {AutolinkProps.map((item: any) => {
                        return (
                            <TestCase itShould={item.key} tags={['C_API']} key={item.key}>
                                <View style={{
                                    height: 40,
                                    display: 'flex',
                                }}>
                                    <Autolink
                                        text={item.value.text}
                                        email={item.value.email}
                                        hashtag={item.value.hashtag}
                                        phone={item.value.phone}
                                        linkStyle={item.value.linkStyle}
                                        mention={item.value.mention}
                                        showAlert={item.value.showAlert}
                                        stripPrefix={item.value.stripPrefix}
                                        stripTrailingSlash={item.value.stripTrailingSlash}
                                        textProps={item.value.textProps}
                                        truncate={item.value.truncate}
                                        url={item.value.url}
                                        {...item}>
                                    </Autolink>
                                </View>
                            </TestCase>
                        )
                    })}
                    <TestCase itShould="useNativeSchemes: 在链接到主题标签和提及链接的服务时，是否使用本机应用程序方案（例如twitter://）而不是网页 URL，设置为true" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Autolink
                                text="hashtags (#exciting)"
                                hashtag="facebook"
                                useNativeSchemes={true}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="useNativeSchemes: 在链接到主题标签和提及链接的服务时，是否使用本机应用程序方案（例如twitter://）而不是网页 URL，默认是false" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Autolink
                                text="hashtags (#exciting)"
                                hashtag="facebook"
                                useNativeSchemes={false}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="truncateChars: 用于替换截断的 URL 链接文本段的字符，使用**" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Autolink
                                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                                truncate={5}
                                truncateChars="**"
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="truncateChars: 用于替换截断的 URL 链接文本段的字符，使用$$" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Autolink
                                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                                truncate={5}
                                truncateChars="$$"
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="linkProps: 用于链接文本组件的属性，onPress点击事件" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Autolink
                                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                                linkProps={{
                                    onPress: () => {
                                        setResult('linkProps')
                                    }
                                }}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="linkProps: 用于链接文本组件的属性，跳转的是baidu" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Autolink
                                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                                linkProps={linkProps}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="onPress: 点击事件" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Autolink
                                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink) mentions/handles (@twitter)"
                                mention='twitter'
                                onPress={onPress}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="onLongPress: 长按事件" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Autolink
                                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink) mentions/handles (@instagram)"
                                mention='instagram'
                                onLongPress={onLongPress}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="renderLink: 自定义渲染连接" tags={['C_API']} >
                        <View style={{ height: 80 }}>
                            <Autolink
                                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink) @mention"
                                mention='instagram'
                                renderLink={renderLink}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="renderText: 自定义渲染文本，字体颜色是紫色" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Autolink
                                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                                renderText={renderText}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="truncateLocation: 覆盖截断位置，默认是smart" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Autolink
                                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                                truncate={12}
                                truncateLocation='smart'
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="truncateLocation: 覆盖截断位置，设置middle" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Autolink
                                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                                truncate={12}
                                truncateLocation='middle'
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="truncateLocation: 覆盖截断位置，设置end" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Autolink
                                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                                truncate={12}
                                truncateLocation='end'
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="linkStyle: 应用于链接文本组件的样式，颜色是red(红色)" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Autolink
                                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                                linkStyle={{ color: 'red' }}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="linkStyle: 应用于链接文本组件的样式，颜色是green(绿色)" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Autolink
                                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                                linkStyle={{ color: 'green' }}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="component: 覆盖用作输出容器的组件，设置为ScrollView组件" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Autolink
                                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                                component={ScrollView}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="component: 覆盖用作输出容器的组件，设置为view组件" tags={['C_API']} >
                        <View style={{ height: 50 }}>
                            <Autolink
                                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink)"
                                component={View}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="matchers: 自定义匹配规则(412-555-5555)" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Autolink
                                text="This is the phone numbers (412-555-5555)"
                                matchers={[
                                    {
                                        pattern: /[+]?[0-9]?\s?[(]?[0-9]{2}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{2}[-]?[0-9]{2,4}/g,
                                        style: { color: "blue", backgroundColor: 'red', textDecorationLine: 'underline' }
                                    },
                                ]}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="matchers: 自定义匹配规则(415-555-5555)" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Autolink
                                text="This is the phone numbers (415-555-5555)"
                                matchers={[
                                    {
                                        pattern: /[+]?[0-9]?\s?[(]?[0-9]{2}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{2}[-]?[0-9]{2,4}/g,
                                        style: { color: "red", backgroundColor: 'yellow', textDecorationLine: 'underline' }
                                    },
                                ]}
                            />
                        </View>
                    </TestCase>
                </Tester>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        color: 'red'
    },
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    animationContainer: {
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
    typingAnimation: {
        width: Dimensions.get('window').width,
        backgroundColor: 'pink',
    },
    typingAnimations: {
        width: Dimensions.get('window').width,
        backgroundColor: 'green',
    },
    inputArea: {
        width: '100%',
        height: 60,
        borderWidth: 2,
        borderColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
    },
    baseText: {
        width: '100%',
        height: 100,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    linkStyle: {
        color: 'red'
    },
    linkStyles: {
        backgroundColor: 'pink'
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    customText: {
        color: 'purple',
    }
});
export default AutoLinkExample
