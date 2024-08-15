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
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { NavigationContainer, ParamListBase, NavigationHelpers } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, HeaderStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type {
    BottomTabBarButtonProps,
    BottomTabBarProps,
    BottomTabHeaderProps,
    BottomTabNavigationProp,
    BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';

import MyImage from './Images'
type Props = BottomTabScreenProps<ParamListBase>;
const checkType = (obj: any) => {
    return Object.prototype.toString.call(obj).slice(8, -1)
}

const checkIsObject = (obj: any) => {
    return checkType(obj) === 'Object'
}

export const BottomTabsExamples = () => {
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
                <TextInput style={styles.textInput} />
            </View>
        );
    }
    function NotificationsScreen({ navigation, route }: Props) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Notifications!</Text>
            </View>
        );
    }

    function SettingsScreen({ navigation }: Props) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }


    function HomeScreenNest({ navigation }: Props) {
        const parentNavigation = navigation.getParent<NavigationHelpers<ParamListBase>>('uniId');
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Text>parentNavigation:{JSON.stringify(parentNavigation)}</Text>
                <Button title="go to parent settings" onPress={() => parentNavigation.navigate('Settings')} />
            </View>
        );
    }

    function HomeNest({ navigation }: Props) {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeScreenNest"
                    component={HomeScreenNest}
                />
            </Stack.Navigator>
        );
    }


    function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
        return (
            <View style={{ flexDirection: 'row' }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1 }}
                        >
                            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                                {label + ''}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }


    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();


    const [screens, setScreens] = useState([] as string[]);

    function HomeScreen1() {
        React.useEffect(() => {
            !screens.includes('Home') && setScreens([
                ...screens,
                'Home'
            ])
        }, []);


        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
    function NotificationsScreen1() {
        React.useEffect(() => {
            !screens.includes('Notifications') && setScreens([
                ...screens,
                'Notifications'
            ])
        }, []);

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Notifications!</Text>
            </View>
        );

    }

    function SettingsScreen1() {
        React.useEffect(() => {
            !screens.includes('Settings') && setScreens([
                ...screens,
                'Settings'
            ])
        }, []);

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }

    interface State {
        [propName: string]: {
            platform?: string,
            testName?: '',
            type?: 'custom' | 'preview',
            description?: string,
            props?: {
                screenOptions?: {},
                [propName: string]: any,
            },
            value?: any,
            valueList?: any[],
            options?: boolean,
            extraOptions?: object,
        };
    }
    const [state, setState] = useState<State>(() => {
        return {
            id: {
                type: 'custom'
            },
            initialRouteName: {
                type: 'preview',
                description: '默认路由,设置为Settings',
                props: {
                    initialRouteName: 'Settings'
                }
            },

            backBehavior: {
                value: 'firstRoute',
                description: '控制返回时路由的切换顺序',
                valueList: [
                    'firstRoute',
                    'initialRoute',
                    'order',
                    'history',
                    'none'
                ],
                extraOptions: {
                    initialRouteName: 'Notifications'
                }
            },

            // detachInactiveScreens: {
            //     platform: 'android,ios',
            //     tip: 'react-native-screens功能',
            //     description: '计算未激活的页面，以使用react-native-screens功能节省性能,这是react-native-screens功能',
            //     value: true,
            //     valueList: [
            //         false,
            //         true,
            //     ],
            // },
            sceneContainerStyle: {
                type: 'preview',
                description: '屏幕容器样式,设置为红色背景',
                props: {
                    sceneContainerStyle: {
                        backgroundColor: 'red',
                    }
                }
            },

            tabBar: {
                type: 'preview',
                description: '自定义tabBar',
                props: {
                    tabBar: (props: BottomTabBarProps) => <MyTabBar {...props} />
                }
            },


            title: {
                type: 'custom'
            },

            tabBarLabel: {
                type: 'custom'
            },
            tabBarShowLabel: {
                options: true,
                value: true,
                description: '是否展示标签',
                valueList: [
                    false,
                    true,
                ],
            },

            tabBarLabelPosition: {
                options: true,
                value: 'below-icon',
                description: '标签位置',
                valueList: [
                    'below-icon',
                    'beside-icon',
                ],
            },
            tabBarLabelStyle: {
                description: 'tabBar标签样式，加个粉色背景',
                type: 'preview',
                props: {
                    screenOptions: {
                        tabBarLabelStyle: {
                            backgroundColor: 'pink',
                        }
                    }
                }
            },
            tabBarIcon: {
                type: 'custom'
            },
            tabBarIconStyle: {
                description: 'tabBar图标样式,设置背景颜色',
                value: {
                    title: 'red',
                    value: {
                        backgroundColor: 'red',
                        width: 30,
                        height: 30,
                    }
                },
                options: true,
                valueList: [
                    {
                        title: 'red',
                        value: {
                            backgroundColor: 'red',
                            width: 30,
                            height: 30,
                        }
                    },
                    {
                        title: 'pink',
                        value: {
                            backgroundColor: 'pink',
                            width: 30,
                            height: 30,
                        }
                    },
                    {
                        title: 'black',
                        value: {
                            backgroundColor: 'black',
                            width: 30,
                            height: 30,
                        }
                    },
                ],
            },
            tabBarBadge: {
                type: 'custom'
            },


            tabBarBadgeStyle: {
                description: 'tabBar徽章样式,设置背景颜色',
                value: {
                    title: 'red',
                    value: {
                        backgroundColor: 'red',

                    }
                },
                options: true,
                valueList: [
                    {
                        title: 'red',
                        value: {
                            backgroundColor: 'red',

                        }
                    },
                    {
                        title: 'pink',
                        value: {
                            backgroundColor: 'pink',

                        }
                    },
                    {
                        title: 'blue',
                        value: {
                            backgroundColor: 'blue',
                        }
                    },
                ],
                extraOptions: {
                    tabBarBadge: 'a'
                }
            },

            tabBarAccessibilityLabel: {
                type: 'custom'
            },
            tabBarButton: {
                description: 'tabBarButton自定义,有动画效果',
                type: 'preview',
                props: {
                    screenOptions: {
                        tabBarButton: (props: BottomTabBarButtonProps) => <TouchableOpacity {...props} />
                    }
                }
            },
            tabBarActiveTintColor: {
                description: '激活项颜色',
                options: true,
                value: undefined,
                valueList: [undefined, 'gray', 'red', 'blue']
            },

            tabBarInactiveTintColor: {
                description: '未激活项颜色',
                options: true,
                value: undefined,
                valueList: [undefined, 'gray', 'red', 'blue']
            },

            tabBarActiveBackgroundColor: {
                description: '激活项背景颜色',
                options: true,
                value: undefined,
                valueList: [undefined, 'gray', 'red', 'blue']
            },

            tabBarInactiveBackgroundColor: {
                description: '未激活项背景颜色',
                options: true,
                value: undefined,
                valueList: [undefined, 'gray', 'red', 'blue']
            },
            tabBarHideOnKeyboard: {
                description: '打开键盘时隐藏tabBar',
                options: true,
                value: false,
                valueList: [false, true]
            },
            tabBarItemStyle: {
                type: 'preview',
                description: 'tabBar项样式',
                props: {
                    screenOptions: {
                        tabBarItemStyle: {
                            backgroundColor: 'blue'
                        }
                    }
                }
            },
            tabBarStyle: {
                type: 'preview',
                description: 'tabBar样式，加粉色背景',
                props: {
                    screenOptions: {
                        tabBarStyle: {
                            backgroundColor: 'pink'
                        }
                    }
                }
            },

            tabBarBackground: {
                type: 'preview',
                description: 'tabBar背景元素,添加一个图片背景',
                props: {
                    screenOptions: {
                        tabBarBackground: () => {
                            return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={MyImage} style={{ height: 20, width: 20 }} />
                            </View>
                        },
                    }
                }
            },

            lazy: {
                description: '是否懒加载',
                type: 'custom',
                options: true,
                value: true,
                valueList: [false, true]
            },

            unmountOnBlur: {
                description: '离开页面时是否卸载页面，会清除暂存数据',
                options: true,
                value: false,
                valueList: [false, true]
            },
            // freezeOnBlur: {
            //     platform: 'android,ios',
            //     tip: 'react-native-screens的功能',
            //     description: '是否阻止非活动页面重新渲染,这是react-native-screens库的功能',
            //     options: true,
            //     value: false,
            //     valueList: [false, true]
            // },

            header: {
                type: 'preview',
                description: '自定义头部',
                props: {
                    screenOptions: {
                        header: ({ navigation, route, options }: BottomTabHeaderProps) => {
                            return (
                                <View style={[{ display: 'flex', alignItems: 'center', flexDirection: 'row' }]}>
                                    <Text>{route.name}</Text>
                                </View>
                            );
                        }
                    },
                    headerShown: true

                }
            },

            headerShown: {
                description: '是否显示header',
                options: true,
                value: true,
                valueList: [false, true]
            },

            tabPress: {
                type: 'custom'
            },

            tabLongPress: {
                type: 'custom'
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
                            let { platform, testName, type, props = {}, value, description = '', valueList = [], options, extraOptions } = obj
                            if (index !== currentIndex) {
                                return <ComButton index={index} title={title} key={title} />
                            }
                            let initOptions = {

                            }

                            if (!type) {
                                if (options) {
                                    initOptions = {
                                        screenOptions: {
                                            ...extraOptions,

                                            [title]: checkIsObject(state?.[title].value) ? state?.[title].value.value : state?.[title].value
                                        },

                                    }
                                } else {
                                    initOptions = {
                                        ...extraOptions,
                                        ...{ [title]: checkIsObject(state?.[title].value) ? state?.[title].value.value : state?.[title].value }
                                    }
                                }

                                // console.log('initOptions  ', JSON.stringify(initOptions))

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
                                                <Tab.Navigator
                                                    {...initOptions}
                                                >
                                                    <Tab.Screen name="Home" component={HomeScreen} />
                                                    <Tab.Screen name="Notifications" component={NotificationsScreen} />
                                                    <Tab.Screen name="Settings" component={SettingsScreen} />
                                                </Tab.Navigator >
                                            </NavigationContainer>
                                        </View>
                                    </TestCase>
                                </TestSuite>
                            } else if (type === 'preview') {

                                let { screenOptions = {}, ...rest } = props
                                initOptions = {
                                    screenOptions: {
                                        ...screenOptions,
                                    },
                                    ...rest
                                }




                                return <TestSuite name={(platform ? `[${platform}] ` : '') + (testName || title)} key={title}>
                                    <TestCase itShould={description} tags={['C_API']}>
                                        <View style={styles.container}>
                                            <NavigationContainer>
                                                <Tab.Navigator
                                                    {...initOptions}
                                                >
                                                    <Tab.Screen name="Home" component={HomeScreen} />
                                                    <Tab.Screen name="Notifications" component={NotificationsScreen} />
                                                    <Tab.Screen name="Settings" component={SettingsScreen} />
                                                </Tab.Navigator >
                                            </NavigationContainer>
                                        </View>
                                    </TestCase>
                                </TestSuite>
                            } else {
                                if (title === 'id') {
                                    return <TestSuite name='id' key={'id'}>
                                        <TestCase itShould='navigator的id,子路由通过id可找到父路由'
                                            tags={['C_API']}
                                        >
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Tab.Navigator id='uniId'>
                                                        <Tab.Screen name="Home" component={HomeNest} />
                                                        <Tab.Screen name="Notifications" component={NotificationsScreen} />
                                                        <Tab.Screen name="Settings" component={SettingsScreen} />
                                                    </Tab.Navigator>
                                                </NavigationContainer>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }


                                if (title === 'title') {
                                    return <TestSuite name='title' key={'title'}>
                                        <TestCase itShould='页面名称，现改成中文，tabBarLabel没设置时生效' tags={['C_API']}>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Tab.Navigator>
                                                        <Tab.Screen name="Home" component={HomeScreen} options={{
                                                            title: '主页'
                                                        }} />
                                                        <Tab.Screen name="Notifications" component={NotificationsScreen} options={{
                                                            title: '通知'
                                                        }} />
                                                        <Tab.Screen name="Settings" component={SettingsScreen} options={{
                                                            title: '设置'
                                                        }} />
                                                    </Tab.Navigator >
                                                </NavigationContainer>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }

                                if (title === 'tabBarLabel') {
                                    return <TestSuite name='tabBarLabel' key={'tabBarLabel'}>
                                        <TestCase itShould='tabBar标签,改成中文' tags={['C_API']}>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Tab.Navigator>
                                                        <Tab.Screen name="Home" component={HomeScreen} options={{
                                                            tabBarLabel: '主页'
                                                        }} />
                                                        <Tab.Screen name="Notifications" component={NotificationsScreen} options={{
                                                            tabBarLabel: '通知'
                                                        }} />
                                                        <Tab.Screen name="Settings" component={SettingsScreen} options={{
                                                            tabBarLabel: '设置'
                                                        }} />
                                                    </Tab.Navigator >
                                                </NavigationContainer>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }

                                if (title === 'tabBarIcon') {
                                    return <TestSuite name='tabBarIcon' key={'tabBarIcon'}>
                                        <TestCase itShould='tabBar图标' tags={['C_API']}>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Tab.Navigator screenOptions={{
                                                        tabBarLabelStyle: {
                                                            textTransform: 'none'
                                                        }
                                                    }}>
                                                        <Tab.Screen name="Home" component={HomeScreen} options={{
                                                            tabBarIcon: ({ focused: boolean, color: string }) => {
                                                                return <View style={styles.icon}>
                                                                    <Text>
                                                                        ico
                                                                    </Text>
                                                                </View>
                                                            }
                                                        }} />
                                                        <Tab.Screen name="Notifications" component={NotificationsScreen} />
                                                        <Tab.Screen name="Settings" component={SettingsScreen} />
                                                    </Tab.Navigator >
                                                </NavigationContainer>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }

                                if (title === 'tabBarBadge') {
                                    return <TestSuite name='tabBarBadge' key={'tabBarBadge'}>
                                        <TestCase itShould='tabBarBadge' tags={['C_API']}>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Tab.Navigator>
                                                        <Tab.Screen name="Home" component={HomeScreen} options={{
                                                            tabBarBadge: 'a'
                                                        }} />
                                                        <Tab.Screen name="Notifications" component={NotificationsScreen} />
                                                        <Tab.Screen name="Settings" component={SettingsScreen} options={{
                                                            tabBarBadge: 3
                                                        }} />
                                                    </Tab.Navigator >
                                                </NavigationContainer>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }

                                if (title === 'tabBarAccessibilityLabel') {
                                    return <TestSuite name='tabBarAccessibilityLabel' key={'tabBarAccessibilityLabel'}>
                                        <TestCase itShould='开启系统的屏幕阅读器，读取已设置的无障碍按钮标签' tags={['C_API']}>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Tab.Navigator>
                                                        <Tab.Screen name="Home" component={HomeScreen} options={{
                                                            tabBarAccessibilityLabel: '这是自定义的无障碍标签主页'
                                                        }} />
                                                        <Tab.Screen name="Notifications" component={NotificationsScreen} options={{
                                                            tabBarAccessibilityLabel: '这是自定义的无障碍标签通知'
                                                        }} />
                                                        <Tab.Screen name="Settings" component={SettingsScreen} options={{
                                                            tabBarAccessibilityLabel: '这是自定义的无障碍标签设置'
                                                        }} />
                                                    </Tab.Navigator >
                                                </NavigationContainer>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }
                                if (title === 'lazy') {


                                    return <TestSuite name={(platform ? `[${platform}]` : '') + (testName || title)} key={title + state?.[title].value}>
                                        <ToggleButton title={'切换' + title} list={valueList} initValue={value} onChange={(val: any) => {
                                            setState({
                                                ...state,
                                                [title]: {
                                                    ...state?.[title],
                                                    value: val
                                                }
                                            })
                                            setScreens([])

                                        }}></ToggleButton>
                                        <TestCase itShould={description} tags={['C_API']}>
                                            <View style={styles.container}>
                                                <Text>当前渲染页面：{JSON.stringify(screens)}</Text>
                                                <NavigationContainer>
                                                    <Tab.Navigator
                                                        {...{
                                                            screenOptions: {
                                                                ...extraOptions,
                                                                [title]: checkIsObject(state?.[title].value) ? state?.[title].value.value : state?.[title].value
                                                            },
                                                        }}
                                                    >
                                                        <Tab.Screen name="Home" component={HomeScreen1} />
                                                        <Tab.Screen name="Notifications" component={NotificationsScreen1} />
                                                        <Tab.Screen name="Settings" component={SettingsScreen1} />
                                                    </Tab.Navigator >
                                                </NavigationContainer>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }


                                if (title === 'tabPress') {
                                    return <TestSuite name='tabPress' key={'tabPress'}>
                                        <TestCase itShould='点击Notifications的tab时触发'
                                            tags={['C_API']}
                                            initialState={false}
                                            assert={({ expect, state }) => {
                                                expect(state).to.be.true;
                                            }}
                                            arrange={({ setState }) => {
                                                const EventNotifications = (props: Props) => {
                                                    const { navigation } = props;
                                                    React.useEffect(() => {
                                                        const unsubscribe = navigation.addListener('tabPress', (e: any) => {
                                                            // e.preventDefault();
                                                            setState(true)
                                                        });

                                                        return unsubscribe;
                                                    }, [navigation]);
                                                    return <NotificationsScreen {...props} />
                                                }

                                                return (
                                                    <View style={styles.container}>
                                                        <NavigationContainer>
                                                            <Tab.Navigator>
                                                                <Tab.Screen name="Home" component={HomeScreen} />
                                                                <Tab.Screen name="Notifications" component={EventNotifications} />
                                                                <Tab.Screen name="Settings" component={SettingsScreen} />
                                                            </Tab.Navigator >
                                                        </NavigationContainer>
                                                    </View>
                                                )
                                            }}>
                                        </TestCase>
                                    </TestSuite>
                                }

                                if (title === 'tabLongPress') {
                                    return <TestSuite name='tabLongPress' key={'tabLongPress'}>
                                        <TestCase itShould='长按Notifications的tab时触发'
                                            tags={['C_API']}
                                            initialState={false}
                                            assert={({ expect, state }) => {
                                                expect(state).to.be.true;
                                            }}
                                            arrange={({ setState }) => {
                                                const EventNotifications = (props: Props) => {
                                                    const { navigation } = props;
                                                    React.useEffect(() => {
                                                        const unsubscribe = navigation.addListener('tabLongPress', (e: any) => {
                                                            setState(true)
                                                        });

                                                        return unsubscribe;
                                                    }, [navigation]);
                                                    return <NotificationsScreen {...props} />
                                                }

                                                return (
                                                    <View style={styles.container}>
                                                        <NavigationContainer>
                                                            <Tab.Navigator>
                                                                <Tab.Screen name="Home" component={HomeScreen} />
                                                                <Tab.Screen name="Notifications" component={EventNotifications} />
                                                                <Tab.Screen name="Settings" component={SettingsScreen} />
                                                            </Tab.Navigator >
                                                        </NavigationContainer>
                                                    </View>
                                                )
                                            }}>
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
        width: 150,
        height: 30
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
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


export default BottomTabsExamples