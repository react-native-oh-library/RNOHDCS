
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Pressable,
    Alert,
    Button,
    Image,
    Platform,
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {
    NativeStackHeaderProps,
    NativeStackScreenProps,
} from '@react-navigation/native-stack'
import {
    Header,
    HeaderBackground,
    HeaderTitle,
    HeaderBackButton,
    MissingIcon,
    PlatformPressable,
    ResourceSavingView,
    SafeAreaProviderCompat,
    HeaderBackContext,
    HeaderShownContext,
    HeaderHeightContext,
    useHeaderHeight,
    getDefaultHeaderHeight,
    getHeaderTitle
} from '@react-navigation/elements';
import type * as ElementProps from '@react-navigation/elements'
import { useNavigation, useNavigationState, Router } from '@react-navigation/core';
import MyImage from './Images'

type Props = NativeStackScreenProps<ParamListBase>;

const checkType = (obj: any) => {
    return Object.prototype.toString.call(obj).slice(8, -1)
}

const checkIsObject = (obj: any) => {
    return checkType(obj) === 'Object'
}

export const ElementsExamples = () => {
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

            // console.log('initValue', initValue)
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

                                // console.log('render', title, value, state)
                                return (
                                    <Pressable
                                        style={{
                                            borderEndWidth: (index + 1) === list.length ? 0 : 1,
                                            borderColor: '#eee',
                                            backgroundColor: state === title ? '#0081f1' : '#ffffff',
                                            paddingHorizontal: 6,
                                        }}
                                        key={index + ''} onPress={() => {
                                            // console.log(title, value)
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

    function HomeScreen({ navigation }: Props) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Button title='Go to Notifications' onPress={() => {
                    navigation.navigate('Notifications')
                }}></Button>
            </View>
        );
    }
    function NotificationsScreen({ navigation }: Props) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Notifications!</Text>
                <Button title='Go to Settings' onPress={() => {
                    navigation.navigate('Settings')
                }}></Button>
                <Button title='Go back' onPress={() => {
                    navigation.goBack()
                }}></Button>
            </View>
        );
    }

    function SettingsScreen({ navigation }: Props) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
                <Button title='Go back' onPress={() => {
                    navigation.goBack()
                }}></Button>
            </View>
        );
    }



    const Stack = createNativeStackNavigator();

    interface State {
        [propName: string]: {
            platform?: string,
            testName?: '',
            type?: 'custom' | 'preview',
            description?: string,
            props?: object,
            value?: any,
            valueList?: any[],
            options?: boolean,
            extraOptions?: object,
            propName?: string
        };
    }
    const [state, setState] = useState<State>(() => {
        return {
            headerTitle: {
                type: 'preview',
                description: '头部标题，自定义一个',
                props: {
                    headerTitle: ({ children, ...rest }: { children: string }) => {
                        return <Text {...rest}>自定义{children}</Text>
                    }
                }
            },
            headerTitleAlign: {
                description: '头部对齐方式',
                value: undefined,
                valueList: [
                    undefined,
                    'left',
                    'center'
                ],
            },

            headerTitleAllowFontScaling: {
                description: '头部标题是否随系统字体大小设置而缩放',
                value: false,
                valueList: [
                    false,
                    true,
                ],
            },


            headerLeft: {
                type: 'preview',
                description: '渲染左侧按钮',
                props: {
                    headerLeft: (props: {}) => {
                        const navigation = useNavigation()
                        const index = useNavigationState((state) => state.index);
                        return (
                            index !== 0 ? <HeaderBackButton {...props} onPress={() => navigation.goBack()} /> : null
                        )
                    }
                }
            },

            headerRight: {
                type: 'preview',
                description: '渲染右侧按钮',
                props: {
                    headerRight: (props: {}) => {
                        const navigation = useNavigation()
                        const index = useNavigationState((state) => state.index);
                        return (
                            index !== 0 ? <HeaderBackButton {...props} onPress={() => navigation.goBack()} /> : null
                        )
                    }
                }
            },

            headerShadowVisible: {
                description: '是否显示标题阴影',
                value: true,
                valueList: [
                    false,
                    true,
                ],
            },

            headerStyle: {
                description: '标题样式,设置粉色背景',
                type: 'preview',
                props: {
                    headerStyle: {
                        backgroundColor: 'pink'
                    },
                }
            },
            headerTitleStyle: {
                type: 'preview',
                description: '头部标题样式,设为红色字体',
                props: {
                    headerTitleStyle: {
                        color: 'red'
                    }
                }
            },
            headerLeftContainerStyle: {
                type: 'preview',
                description: '头部左侧的容器样式，加个背景色',
                props: {
                    headerLeft: (props: {}) => {
                        const navigation = useNavigation()
                        const index = useNavigationState((state) => state.index);
                        return (
                            index !== 0 ? <HeaderBackButton {...props} onPress={() => navigation.goBack()} /> : null
                        )
                    },
                    headerLeftContainerStyle: {
                        backgroundColor: 'pink'
                    }
                }
            },

            headerRightContainerStyle: {
                type: 'preview',
                description: '头部右侧的容器样式，加个背景色',
                props: {
                    headerRightContainerStyle: {
                        backgroundColor: 'orange'
                    }
                }
            },
            headerTitleContainerStyle: {
                type: 'preview',
                description: '头部标题的容器样式，加个背景色',
                props: {
                    headerTitleContainerStyle: {
                        backgroundColor: 'blue'
                    }
                }
            },
            headerBackgroundContainerStyle: {
                type: 'preview',
                description: '头部背景的容器样式，加个背景色',
                props: {
                    headerTitleContainerStyle: {
                        backgroundColor: 'red'
                    }
                }
            },


            headerTintColor: {
                type: 'preview',
                description: '头部的颜色,改成blue',
                props: {
                    headerLeft: (props: {}) => {
                        const navigation = useNavigation()
                        const index = useNavigationState((state) => state.index);
                        return (
                            index !== 0 ? <HeaderBackButton {...props} onPress={() => navigation.goBack()} /> : null
                        )
                    },
                    headerTintColor: 'blue'
                }
            },


            // headerPressColor: {
            //     platform: 'android >= 5.0,harmony不支持',
            //     type: 'preview',
            //     description: '头部按钮按压的颜色,是android_ripple的属性，改成red',
            //     props: {
            //         headerLeft: (props: {}) => {
            //             const navigation = useNavigation()
            //             const index = useNavigationState((state) => state.index);
            //             return (
            //                 index !== 0 ? <HeaderBackButton {...props} onPress={() => navigation.goBack()} /> : null
            //             )
            //         },
            //         headerPressColor: 'red'
            //     }
            // },

            headerPressOpacity: {
                type: 'preview',
                description: '头部按钮按压的透明度',
                props: {
                    headerLeft: (props: {}) => {
                        const navigation = useNavigation()
                        const index = useNavigationState((state) => state.index);
                        return (
                            index !== 0 ? <HeaderBackButton {...props} onPress={() => navigation.goBack()} /> : null
                        )
                    },
                    headerPressOpacity: 0.1
                }
            },

            headerTransparent: {
                description: '头部透明',
                value: false,
                valueList: [
                    false,
                    true,
                ],
            },

            headerBackground: {
                type: 'preview',
                description: '头部背景元素,添加一个图片背景',
                props: {
                    headerBackground: () => {
                        return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={MyImage} style={{ height: 20, width: 20 }} />
                        </View>
                    },
                }
            },
            headerStatusBarHeight: {
                description: '头部状态栏高度，显示一段空白距离',
                value: undefined,
                valueList: [
                    undefined,
                    0,
                    20,
                    50
                ],
            },

            HeaderBackground: {
                propName: 'headerBackground',
                type: 'preview',
                description: '头部背景元素,改变背景颜色',
                props: {
                    headerBackground: (props: {}) => <HeaderBackground {...props} style={{ backgroundColor: 'red' }} />,
                }
            },
            HeaderTitle: {
                propName: 'headerTitle',
                type: 'preview',
                description: '头部标题，修改颜色',
                props: {
                    headerTitle: (props: {}) => {
                        return <HeaderTitle {...props} style={{ color: 'red' }} />
                    }
                }
            },

            HeaderBackButton: {
                propName: 'headerLeft',
                type: 'preview',
                description: '返回按钮，修改背景颜色',
                props: {
                    headerLeft: (props: {}) => {
                        const navigation = useNavigation()
                        const index = useNavigationState((state) => state.index);
                        return (
                            index !== 0 ? <HeaderBackButton {...props} onPress={() => navigation.goBack()} style={{ backgroundColor: 'red' }} /> : null
                        )
                    }
                }
            },
            MissingIcon: {
                propName: 'headerLeft',
                type: 'preview',
                description: '作为一个图标占位符，在返回按钮做展示',
                props: {
                    headerLeft: (props: {}) => {
                        const navigation = useNavigation()
                        const index = useNavigationState((state) => state.index);
                        return (
                            index !== 0 ?
                                <Pressable {...props} onPress={() => navigation.goBack()}>
                                    <MissingIcon />
                                </Pressable >
                                : null
                        )
                    }
                }
            },
            PlatformPressable: {
                propName: 'headerLeft',
                type: 'preview',
                description: '为不同平台提供差异化的按压按钮，在返回按钮做展示',
                props: {
                    headerLeft: (props: {}) => {
                        const navigation = useNavigation()
                        const index = useNavigationState((state) => state.index);
                        return (
                            index !== 0 ?
                                <PlatformPressable {...props} onPress={() => navigation.goBack()}>
                                    <Text>back</Text>
                                </PlatformPressable >
                                : null
                        )
                    }
                }
            },
            ResourceSavingView: {
                description: '该组件用于提升非活动屏幕的性能，通过visible属性决定是否裁剪屏幕，切换为0设置屏幕为空',
                type: 'custom',
                value: 1,
                valueList: [0, 1],
            },
            SafeAreaProviderCompat: {
                description: '用于获取从react-native-safe-area-context拿到的初始化值，计算宽高和距离屏幕边缘的位置',
                type: 'custom',
            },
            HeaderBackContext: {
                type: 'custom',
                description: '屏幕中获取返回页的标题',
            },
            HeaderShownContext: {
                type: 'custom',
                description: '屏幕中判断头部是否隐藏',
            },
            HeaderHeightContext: {
                type: 'custom',
                description: '屏幕中获取头部高度',
            },
            useHeaderHeight: {
                type: 'custom',
                description: 'hooks, 屏幕中获取头部高度',
            },
            getDefaultHeaderHeight: {
                type: 'custom',
                description: '屏幕中获取头部本体默认高度，不随头部隐藏或状态栏高度而改变',
            },
            getHeaderTitle: {
                type: 'custom',
                description: '获取title,用于渲染header,查看header的title',
            },
        }
    })

    //组件按钮
    const [currentIndex, setIndex] = useState(0)
    type ComButtonProps = {
        index: number
        title: string
    }
    const ComButton = ({ index, title }: ComButtonProps) => {
        return <Pressable onPress={() => {
            setIndex(index)
        }}>
            <View style={styles.comButton}>
                <Text style={styles.comButtonText}>打开{title}</Text>
            </View>
        </Pressable>
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar></StatusBar>
            <Tester style={{ flex: 1 }}>
                <ScrollView>
                    {
                        Object.entries(state).map(([title, obj], index) => {
                            let { propName = title, platform, testName, type, props = {}, value, description = '', valueList = [], options, extraOptions } = obj
                            if (index !== currentIndex) {
                                return <ComButton index={index} title={title} key={title} />
                            }
                            if (!type) {
                                return <TestSuite name={(platform ? `[${platform}]` : '') + (testName || title)} key={title + state?.[title].value}>
                                    <ToggleButton title={'切换' + title} list={valueList} initValue={value} onChange={(val: any) => {
                                        setState({
                                            ...state,
                                            [title]: {
                                                ...state?.[title],
                                                value: val
                                            }
                                        })
                                    }}></ToggleButton>
                                    <TestCase itShould={description} tags={['C_API']}>
                                        <View style={styles.container}>
                                            <NavigationContainer>
                                                <Stack.Navigator
                                                    screenOptions={{
                                                        header: ({ options, route }: NativeStackHeaderProps) => {
                                                            return <Header  title={getHeaderTitle(options, route.name)} {...{
                                                                [propName]: checkIsObject(state?.[title].value) ? state?.[title].value.value : state?.[title].value,
                                                                ...extraOptions,
                                                            }} />
                                                        }
                                                    }}
                                                >
                                                    <Stack.Screen name="Home" component={HomeScreen} />
                                                    <Stack.Screen name="Notifications" component={NotificationsScreen} />
                                                    <Stack.Screen name="Settings" component={SettingsScreen} />
                                                </Stack.Navigator >
                                            </NavigationContainer>
                                        </View>
                                    </TestCase>
                                </TestSuite>
                            } else if (type === 'preview') {
                                return <TestSuite name={(platform ? `[${platform}] ` : '') + (testName || title)} key={title}>
                                    <TestCase itShould={description} tags={['C_API']}>
                                        <View style={styles.container}>
                                            <NavigationContainer>
                                                <Stack.Navigator
                                                    screenOptions={{
                                                        header: ({ options, route }) => (
                                                            <Header  title={getHeaderTitle(options, route.name)} {...props} />
                                                        ),
                                                    }}
                                                >
                                                    <Stack.Screen name="Home" component={HomeScreen} />
                                                    <Stack.Screen name="Notifications" component={NotificationsScreen} />
                                                    <Stack.Screen name="Settings" component={SettingsScreen} />
                                                </Stack.Navigator >
                                            </NavigationContainer>
                                        </View>
                                    </TestCase>
                                </TestSuite>
                            } else {
                                if (title === 'ResourceSavingView') {

                                    function HomeScreen2({ navigation }: Props) {
                                        return (
                                            <ResourceSavingView visible={state.ResourceSavingView.value}>
                                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text>Home!</Text>
                                                    <Text>切换值查看效果</Text>
                                                    <Button title='Go to Notifications' onPress={() => {
                                                        navigation.navigate('Notifications')
                                                    }}></Button>
                                                </View>
                                            </ResourceSavingView>

                                        );
                                    }

                                    return <TestSuite name={(platform ? `[${platform}]` : '') + (testName || title)} key={title + state?.[title].value}>
                                        <ToggleButton title={'切换' + title} list={valueList} initValue={value} onChange={(val: any) => {
                                            setState({
                                                ...state,
                                                [title]: {
                                                    ...state?.[title],
                                                    value: val
                                                }
                                            })
                                        }}></ToggleButton>
                                        <TestCase itShould={description} tags={['C_API']}>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Stack.Navigator
                                                        screenOptions={{
                                                            header: ({ options, route }: NativeStackHeaderProps) => (
                                                                <Header title={getHeaderTitle(options, route.name)} {...{
                                                                    [propName]: checkIsObject(state?.[title].value) ? state?.[title].value.value : state?.[title].value,
                                                                    ...extraOptions,
                                                                }} />
                                                            ),
                                                        }}
                                                    >
                                                        <Stack.Screen name="Home" component={HomeScreen2} />
                                                        <Stack.Screen name="Notifications" component={NotificationsScreen} />
                                                        <Stack.Screen name="Settings" component={SettingsScreen} />
                                                    </Stack.Navigator >
                                                </NavigationContainer>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }

                                if (title === 'SafeAreaProviderCompat') {
                                    return <TestSuite name={(platform ? `[${platform}] ` : '') + (testName || title)} key={title}>
                                        <TestCase itShould={description} tags={['C_API']}>
                                            <View style={styles.container}>
                                                <SafeAreaProviderCompat>
                                                    <Text>
                                                        SafeAreaProviderCompat.initialMetrics:
                                                    </Text>
                                                    <Text>
                                                        {JSON.stringify(SafeAreaProviderCompat.initialMetrics)}
                                                    </Text>
                                                </SafeAreaProviderCompat>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }

                                if (title === 'HeaderBackContext') {
                                    const HomeScreen = ({ navigation, route }: Props) => {
                                        return (
                                            <HeaderBackContext.Consumer>
                                                {
                                                    (headerBack) => {
                                                        return (
                                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                                <Text>{route.name}</Text>
                                                                {
                                                                    headerBack?.title ? <Text>返回页：{headerBack?.title}</Text> : null
                                                                }
                                                                {
                                                                    route.name !== 'Home1' ? <Button title='Go to Home1' onPress={() => {
                                                                        navigation.navigate('Home1')
                                                                    }}></Button> : null
                                                                }
                                                                {
                                                                    route.name !== 'Home2' ? <Button title='Go to Home2' onPress={() => {
                                                                        navigation.navigate('Home2')
                                                                    }}></Button> : null
                                                                }
                                                                {
                                                                    route.name !== 'Home' ? <Button title='Go Back' onPress={() => {
                                                                        navigation.goBack()
                                                                    }}></Button> : null
                                                                }
                                                            </View>
                                                        )
                                                    }
                                                }
                                            </HeaderBackContext.Consumer>
                                        );
                                    }

                                    return <TestSuite name={(platform ? `[${platform}] ` : '') + (testName || title)} key={title}>
                                        <TestCase itShould={description} tags={['C_API']}>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Stack.Navigator>
                                                        <Stack.Screen name="Home" component={HomeScreen} />
                                                        <Stack.Screen name="Home1" component={HomeScreen} />
                                                        <Stack.Screen name="Home2" component={HomeScreen} />
                                                    </Stack.Navigator>
                                                </NavigationContainer>

                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }

                                if (title === 'HeaderShownContext') {
                                    const HomeScreen = ({ navigation, route }: Props) => {

                                        return (
                                            <HeaderShownContext.Consumer>
                                                {
                                                    (headerShown) => {
                                                        return (
                                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                                <Text>{route.name}</Text>
                                                                <Text>是否有头部标题：{headerShown ? '是' : '否'}</Text>
                                                                {
                                                                    route.name !== 'Home1' ? <Button title='Go to Home1' onPress={() => {
                                                                        navigation.navigate('Home1')
                                                                    }}></Button> : null
                                                                }
                                                                {
                                                                    route.name !== 'Home2' ? <Button title='Go to Home2' onPress={() => {
                                                                        navigation.navigate('Home2')
                                                                    }}></Button> : null
                                                                }

                                                                {
                                                                    route.name !== 'Home' ? <Button title='Go Back' onPress={() => {
                                                                        navigation.goBack()
                                                                    }}></Button> : null
                                                                }
                                                            </View>
                                                        )
                                                    }
                                                }
                                            </HeaderShownContext.Consumer>

                                        );
                                    }

                                    return <TestSuite name={(platform ? `[${platform}] ` : '') + (testName || title)} key={title}>
                                        <TestCase itShould={description} tags={['C_API']}>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Stack.Navigator>
                                                        <Stack.Screen name="Home" component={HomeScreen} />
                                                        <Stack.Screen name="Home1" component={HomeScreen} options={{
                                                            headerShown: false
                                                        }} />
                                                        <Stack.Screen name="Home2" component={HomeScreen} />
                                                    </Stack.Navigator>
                                                </NavigationContainer>

                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }

                                if (title === 'HeaderHeightContext') {
                                    const HomeScreen = ({ navigation, route }: Props) => {

                                        return (
                                            <HeaderHeightContext.Consumer>
                                                {
                                                    (headerHeight) => {
                                                        return (
                                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                                <Text>{route.name}</Text>
                                                                <Text>头部高度：{headerHeight}</Text>
                                                                {
                                                                    route.name !== 'Home1' ? <Button title='Go to Home1' onPress={() => {
                                                                        navigation.navigate('Home1')
                                                                    }}></Button> : null
                                                                }
                                                                {
                                                                    route.name !== 'Home2' ? <Button title='Go to Home2' onPress={() => {
                                                                        navigation.navigate('Home2')
                                                                    }}></Button> : null
                                                                }
                                                                {
                                                                    route.name !== 'Home' ? <Button title='Go Back' onPress={() => {
                                                                        navigation.goBack()
                                                                    }}></Button> : null
                                                                }
                                                            </View>
                                                        )
                                                    }
                                                }
                                            </HeaderHeightContext.Consumer>
                                        );
                                    }

                                    return <TestSuite name={(platform ? `[${platform}] ` : '') + (testName || title)} key={title}>
                                        <TestCase itShould={description} tags={['C_API']}>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Stack.Navigator>
                                                        <Stack.Screen name="Home" component={HomeScreen} />
                                                        <Stack.Screen name="Home1" component={HomeScreen} options={{
                                                            headerShown: false
                                                        }} />
                                                        <Stack.Screen name="Home2" component={HomeScreen} options={{
                                                            header: ({ options, route }) => <Header {...props} title={getHeaderTitle(options, route.name)} headerStatusBarHeight={20}></Header>
                                                        }} />
                                                    </Stack.Navigator>
                                                </NavigationContainer>

                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }


                                if (title === 'useHeaderHeight') {
                                    const HomeScreen = ({ navigation, route }: Props) => {

                                        const headerHeight = useHeaderHeight();

                                        return (
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text>{route.name}</Text>
                                                <Text>头部高度：{headerHeight}</Text>
                                                {
                                                    route.name !== 'Home1' ? <Button title='Go to Home1' onPress={() => {
                                                        navigation.navigate('Home1')
                                                    }}></Button> : null
                                                }
                                                {
                                                    route.name !== 'Home2' ? <Button title='Go to Home2' onPress={() => {
                                                        navigation.navigate('Home2')
                                                    }}></Button> : null
                                                }
                                                {
                                                    route.name !== 'Home' ? <Button title='Go Back' onPress={() => {
                                                        navigation.goBack()
                                                    }}></Button> : null
                                                }
                                            </View>
                                        );
                                    }

                                    return <TestSuite name={(platform ? `[${platform}] ` : '') + (testName || title)} key={title}>
                                        <TestCase itShould={description} tags={['C_API']}>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Stack.Navigator>
                                                        <Stack.Screen name="Home" component={HomeScreen} />
                                                        <Stack.Screen name="Home1" component={HomeScreen} options={{
                                                            headerShown: false
                                                        }} />
                                                        <Stack.Screen name="Home2" component={HomeScreen} options={{
                                                            header: ({ options, route }) => <Header {...props} title={getHeaderTitle(options, route.name)} headerStatusBarHeight={20}></Header>
                                                        }} />
                                                    </Stack.Navigator>
                                                </NavigationContainer>

                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }


                                if (title === 'getDefaultHeaderHeight') {
                                    const HomeScreen = ({ navigation, route }: Props) => {

                                        const initialMetrics = SafeAreaProviderCompat.initialMetrics
                                        // const headerHeight = getDefaultHeaderHeight(initialMetrics.frame, false);

                                        return (
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text>{route.name}</Text>
                                                <Text>头部默认高度：{getDefaultHeaderHeight(initialMetrics.frame, false, 0)}</Text>
                                                {/* <Text>头部高度,包含statusbar：{getDefaultHeaderHeight(initialMetrics.frame, false,)}</Text> */}
                                                {
                                                    route.name !== 'Home1' ? <Button title='Go to Home1' onPress={() => {
                                                        navigation.navigate('Home1')
                                                    }}></Button> : null
                                                }
                                                {
                                                    route.name !== 'Home2' ? <Button title='Go to Home2' onPress={() => {
                                                        navigation.navigate('Home2')
                                                    }}></Button> : null
                                                }
                                                {
                                                    route.name !== 'Home' ? <Button title='Go Back' onPress={() => {
                                                        navigation.goBack()
                                                    }}></Button> : null
                                                }
                                            </View>
                                        );
                                    }

                                    return <TestSuite name={(platform ? `[${platform}] ` : '') + (testName || title)} key={title}>
                                        <TestCase itShould={description} tags={['C_API']}>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Stack.Navigator>
                                                        <Stack.Screen name="Home" component={HomeScreen} />
                                                        <Stack.Screen name="Home1" component={HomeScreen} options={{
                                                            headerShown: false
                                                        }} />
                                                        <Stack.Screen name="Home2" component={HomeScreen} options={{
                                                            header: ({ options, route }) => <Header {...props} title={getHeaderTitle(options, route.name)} headerStatusBarHeight={20}></Header>
                                                        }} />
                                                    </Stack.Navigator>
                                                </NavigationContainer>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }


                                if (title === 'getHeaderTitle') {
                                    const HomeScreen = ({ navigation, route }: Props) => {
                                        return (
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text>{route.name}</Text>
                                                {
                                                    route.name !== 'Home1' ? <Button title='Go to Home1' onPress={() => {
                                                        navigation.navigate('Home1')
                                                    }}></Button> : null
                                                }
                                                {
                                                    route.name !== 'Home2' ? <Button title='Go to Home2' onPress={() => {
                                                        navigation.navigate('Home2')
                                                    }}></Button> : null
                                                }
                                                {
                                                    route.name !== 'Home' ? <Button title='Go Back' onPress={() => {
                                                        navigation.goBack()
                                                    }}></Button> : null
                                                }
                                            </View>
                                        );
                                    }

                                    return <TestSuite name={(platform ? `[${platform}] ` : '') + (testName || title)} key={title}>
                                        <TestCase itShould={description} tags={['C_API']}>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Stack.Navigator screenOptions={{
                                                        header: ({ options, route }) => <Header {...props} title={getHeaderTitle(options, route.name)}></Header>
                                                    }}>
                                                        <Stack.Screen name="Home" component={HomeScreen} />
                                                        <Stack.Screen name="Home1" component={HomeScreen} />
                                                        <Stack.Screen name="Home2" component={HomeScreen} />
                                                    </Stack.Navigator>
                                                </NavigationContainer>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }
                            }
                        })
                    }
                </ScrollView>
            </Tester >
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    container: {
        height: 350
    },
    icon: {
        backgroundColor: 'blue'
    },
    textInput: {
        borderWidth: 1,
        width: 150
    },
    comButton: {
        borderWidth: 3,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 50,
        backgroundColor: 'pink',
        borderColor: 'gray'
    },
    comButtonText: {
        // fontSize: 24,
    }
});


export default ElementsExamples