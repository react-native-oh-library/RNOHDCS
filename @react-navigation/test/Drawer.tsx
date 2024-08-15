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
    TextInput
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import type { DrawerScreenProps, DrawerContentComponentProps, DrawerNavigationProp } from '@react-navigation/drawer'
type Props = DrawerScreenProps<ParamListBase>;

export const DrawerExample = () => {

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
            let [state, setState] = useState(initValue)
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

                                // console.log('key', key)
                                if (Object.prototype.toString.call(key).slice(8, -1) === 'Object') {
                                    title = key.title;
                                    value = key.value
                                }


                                return (
                                    <Pressable
                                        style={{
                                            borderEndWidth: (index + 1) === list.length ? 0 : 1,
                                            borderColor: '#eee',
                                            backgroundColor: state === value ? '#0081f1' : '#ffffff',
                                            paddingHorizontal: 6,
                                        }}
                                        key={index + ''} onPress={() => {
                                            // console.log(title, value)
                                            setState(value)
                                            onChange(value)
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

    function Feed({ navigation }: Props) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Feed Screen</Text>
                <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
                <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
            </View>
        );
    }

    function Notifications() {
        const [state, setState] = useState('')
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Notifications Screen</Text>
                <Text>{'State: ' + state}</Text>
                <TextInput style={styles.textInput} onChangeText={state => setState(state)}
                    defaultValue={state} autoFocus={false} />
            </View>
        );
    }

    function Settings() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings Screen</Text>
            </View>
        );
    }

    function FeedNest({ navigation }: Props) {
        const parentNavigation = navigation.getParent<DrawerNavigationProp<ParamListBase>>('uniId');

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Feed Screen</Text>
                <Text>parentNavigation:{JSON.stringify(parentNavigation)}</Text>
                <Button title="Open parent drawer" onPress={() => parentNavigation.openDrawer()} />
                <Button title="Toggle parent drawer" onPress={() => parentNavigation.toggleDrawer()} />
            </View>
        );
    }


    function HomeNest() {
        return (
            <HomeStack.Navigator>
                <HomeStack.Screen
                    name="Feed"
                    component={FeedNest}
                />
            </HomeStack.Navigator>
        );
    }

    function CustomDrawerContent(props: DrawerContentComponentProps) {
        return (
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Close drawer"
                    onPress={() => props.navigation.closeDrawer()}
                />
                <DrawerItem
                    label="Toggle drawer"
                    onPress={() => props.navigation.toggleDrawer()}
                />
            </DrawerContentScrollView>
        );
    }

    const Drawer = createDrawerNavigator();
    const HomeStack = createStackNavigator();


    const [screens, setScreens] = useState([] as string[]);

    function Feed1() {
        React.useEffect(() => {
            !screens.includes('Feed') && setScreens([
                ...screens,
                'Feed'
            ])
        }, []);


        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
    function Notifications1() {
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

    function Settings1() {
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
            type?: 'custom' | 'preview',
            description?: string,
            props?: object,
            value?: any,
            valueList?: any[],
            options?: boolean,
            extraOptions?: object,
            platform?: string
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
            defaultStatus: {
                value: 'closed',
                description: '默认状态',
                valueList: [
                    'open',
                    'closed',
                ],
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
            drawerContent: {
                type: 'preview',
                description: 'drawer内容自定义，添加两个按钮',
                props: {
                    drawerContent: (props: DrawerContentComponentProps) => <CustomDrawerContent {...props} />
                }
            },
            title: {
                type: 'custom'
            },

            lazy: {
                description: '是否懒加载',
                type: 'custom',
                options: true,
                value: true,
                valueList: [false, true]
            },
            drawerLabel: {
                type: 'custom'
            },
            drawerIcon: {
                type: 'custom'
            },

            drawerActiveTintColor: {
                description: 'darwer激活项颜色',
                options: true,
                value: undefined,
                valueList: [undefined, 'gray', 'red', 'black']
            },
            drawerActiveBackgroundColor: {
                description: 'darwer激活项背景颜色',
                options: true,
                value: undefined,
                valueList: [undefined, 'gray', 'red', 'black']
            },
            drawerInactiveTintColor: {
                description: 'darwer未激活项颜色',
                options: true,
                value: undefined,
                valueList: [undefined, 'gray', 'red', 'black']
            },
            drawerInactiveBackgroundColor: {
                description: 'darwer未激活项背景颜色',
                options: true,
                value: undefined,
                valueList: [undefined, 'gray', 'red', 'black']
            },
            drawerItemStyle: {
                type: 'custom'
            },
            drawerLabelStyle: {
                type: 'custom'
            },
            drawerContentContainerStyle: {
                type: 'custom'
            },
            drawerContentStyle: {
                type: 'preview',
                description: 'drawer内容样式,修改背景色',
                props: {
                    screenOptions: {
                        drawerContentStyle: {
                            backgroundColor: 'pink'
                        }
                    }
                }
            },
            drawerStyle: {
                type: 'preview',
                description: 'drawer样式，修改背景色',
                props: {
                    screenOptions: {
                        drawerStyle: {
                            backgroundColor: 'yellow'
                        }
                    }
                }
            },

            drawerPosition: {
                options: true,
                value: 'left',
                description: 'darwer位置',
                valueList: [
                    'left',
                    'right'
                ]
            },
            drawerType: {
                options: true,
                description: 'darwer类型',
                value: 'front',
                valueList: [
                    'front',
                    'back',
                    'slide',
                    'permanent',
                ]
            },
            drawerHideStatusBarOnOpen: {
                options: true,
                description: '打开drawer时是否隐藏状态栏',
                value: false,
                valueList: [
                    false,
                    true,
                ]
            },

            overlayColor: {
                type: 'preview',
                description: '遮罩层颜色,设置红色',
                props: {
                    screenOptions: {
                        overlayColor: 'red'
                    }
                }
            },
            sceneContainerStyle: {
                type: 'preview',
                description: '屏幕容器样式,加个红色边框',
                props: {
                    screenOptions: {
                        sceneContainerStyle: {
                            borderWidth: 5,
                            borderColor: 'red'
                        }
                    }
                }
            },
            // //todo reanimated+gestureHandler
            // gestureHandlerProps: {
            //     type: 'preview',
            //     description: '添加gestureHandler的额外属性，滑动时会应用，现加入一个检测状态变更的函数',
            //     props: {
            //         screenOptions: {
            //             gestureHandlerProps: {
            //                 onHandlerStateChange: (state) => {
            //                     Alert.alert('onHandlerStateChange')
            //                 }
            //             }
            //         }
            //     }
            // },
            // //todo reanimated+gestureHandler
            // swipeEnabled: {
            //     options: true,
            //     description: '开启滑动手势',
            //     value: true,
            //     valueList: [
            //         false,
            //         true,
            //     ]
            // },
            // //todo reanimated+gestureHandler
            // swipeEdgeWidth: {
            //     options: true,
            //     extraOptions: {
            //         swipeEnabled: true,
            //     },
            //     description: '滑动手势的边缘距离',
            //     value: 50,
            //     valueList: [
            //         20,
            //         50,
            //         100
            //     ]
            // },
            // //todo reanimated+gestureHandler
            // swipeMinDistance: {
            //     options: true,
            //     extraOptions: {
            //         swipeEnabled: true,
            //     },
            //     description: '最小滑动距离',
            //     value: undefined,
            //     valueList: [
            //         undefined,
            //         50,
            //         100,
            //         200,
            //         300
            //     ]
            // },
            // //todo reanimated+gestureHandler
            // keyboardDismissMode: {
            //     options: true,
            //     extraOptions: {
            //         swipeEnabled: true,
            //         initialRouteName: 'Notifications'
            //     },
            //     description: '滑动手势开始时是否应该关闭键盘，设置“none”时不做处理',
            //     value: 'on-drag',
            //     valueList: [
            //         undefined,
            //         'on-drag',
            //         'none',
            //     ],
            // },

            unmountOnBlur: {
                options: true,
                description: '切换页面时卸载上个页面，会重置页面数据',
                value: false,
                valueList: [
                    true,
                    false,
                ],
                extraOptions: {
                    initialRouteName: 'Notifications'
                }
            },
            drawerItemPress: {
                type: 'custom'
            }
        }
    })

    const [currentIndex, setIndex] = useState(0)

    type ComButtonProps = {
        index: number
        title: string
    }
    //组件按钮
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
                            let { type, props, value, description = '', valueList = [], options, extraOptions } = obj
                            if (index !== currentIndex) {
                                return <ComButton index={index} title={title} key={title} />
                            }

                            if (!type) {
                                return <TestSuite name={title} key={title + state?.[title].value}>
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
                                                <Drawer.Navigator
                                                    {...options ? { screenOptions: { ...extraOptions, [title]: state?.[title].value } } : { ...extraOptions, [title]: state?.[title].value }}
                                                >
                                                    <Drawer.Screen name="Feed" component={Feed} />
                                                    <Drawer.Screen name="Notifications" component={Notifications} />
                                                    <Drawer.Screen name="Settings" component={Settings} />
                                                </Drawer.Navigator >
                                            </NavigationContainer>
                                        </View>
                                    </TestCase>
                                </TestSuite>
                            } else if (type === 'preview') {

                                console.log('props  ', props)
                                return <TestSuite name={title} key={title}>
                                    <TestCase itShould={description} tags={['C_API']}>
                                        <View style={styles.container}>
                                            <NavigationContainer>
                                                <Drawer.Navigator
                                                    {...props}
                                                >
                                                    <Drawer.Screen name="Feed" component={Feed} />
                                                    <Drawer.Screen name="Notifications" component={Notifications} />
                                                    <Drawer.Screen name="Settings" component={Settings} />
                                                </Drawer.Navigator >
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
                                                    <Drawer.Navigator id='uniId'
                                                    >
                                                        <Drawer.Screen name="Home" component={HomeNest} />
                                                    </Drawer.Navigator>
                                                </NavigationContainer>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }

                                if (title === 'title') {
                                    return <TestSuite name='title' key={'title'}>
                                        <TestCase itShould='页面名称，现改成中文' tags={['C_API']}>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Drawer.Navigator>
                                                        <Drawer.Screen name="Feed" component={Feed} options={{
                                                            title: '投喂'
                                                        }} />
                                                        <Drawer.Screen name="Notifications" component={Notifications} options={{
                                                            title: '通知'
                                                        }} />
                                                        <Drawer.Screen name="Settings" component={Settings} options={{
                                                            title: '设置'
                                                        }} />
                                                    </Drawer.Navigator >
                                                </NavigationContainer>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }

                                if (title === 'lazy') {
                               
                                    return <TestSuite name={title} key={title}>
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
                                        <Text>当前渲染页面：{JSON.stringify(screens)}</Text>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Drawer.Navigator screenOptions={{
                                                        lazy: state.lazy.value
                                                    }}>
                                                        <Drawer.Screen name="Feed" component={Feed1} />
                                                        <Drawer.Screen name="Notifications" component={Notifications1} />
                                                        <Drawer.Screen name="Settings" component={Settings1} />
                                                    </Drawer.Navigator >
                                                </NavigationContainer>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }

                                if (title === 'drawerLabel') {
                                    return <TestSuite name='drawerLabel' key={'drawerLabel'}>
                                        <TestCase itShould='抽屉标签' tags={['C_API']}>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Drawer.Navigator>
                                                        <Drawer.Screen name="Feed" component={Feed} options={{
                                                            drawerLabel: '投喂'
                                                        }} />
                                                        <Drawer.Screen name="Notifications" component={Notifications} options={{
                                                            drawerLabel: '通知'
                                                        }} />
                                                        <Drawer.Screen name="Settings" component={Settings} options={{
                                                            drawerLabel: '设置'
                                                        }} />
                                                    </Drawer.Navigator >
                                                </NavigationContainer>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }

                                if (title === 'drawerIcon') {
                                    return <TestSuite name='drawerIcon' key={'drawerIcon'}>
                                        <TestCase itShould='抽屉图标' tags={['C_API']}>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Drawer.Navigator>
                                                        <Drawer.Screen name="Feed" component={Feed} options={{
                                                            drawerIcon: ({ focused: boolean, color: string, size: number }) => {
                                                                return <View style={styles.icon}>
                                                                    <Text>
                                                                        ico
                                                                    </Text>
                                                                </View>
                                                            }
                                                        }} />
                                                        <Drawer.Screen name="Notifications" component={Notifications} />
                                                        <Drawer.Screen name="Settings" component={Settings} />
                                                    </Drawer.Navigator >
                                                </NavigationContainer>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }
                                if (title === 'drawerItemStyle') {
                                    return <TestSuite name='drawerItemStyle' key={'drawerItemStyle'}>
                                        <TestCase itShould='drawer项样式，修改第一项背景色' tags={['C_API']}>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Drawer.Navigator>
                                                        <Drawer.Screen name="Feed" component={Feed} options={{
                                                            drawerItemStyle: {
                                                                backgroundColor: 'orange'
                                                            }
                                                        }} />
                                                        <Drawer.Screen name="Notifications" component={Notifications} />
                                                        <Drawer.Screen name="Settings" component={Settings} />
                                                    </Drawer.Navigator >
                                                </NavigationContainer>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }

                                if (title === 'drawerLabelStyle') {
                                    return <TestSuite name='drawerLabelStyle' key={'drawerLabelStyle'}>
                                        <TestCase itShould='drawer标签样式，修改第一项颜色' tags={['C_API']}>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Drawer.Navigator>
                                                        <Drawer.Screen name="Feed" component={Feed} options={{
                                                            drawerLabelStyle: {
                                                                color: 'green',
                                                            }
                                                        }} />
                                                        <Drawer.Screen name="Notifications" component={Notifications} />
                                                        <Drawer.Screen name="Settings" component={Settings} />
                                                    </Drawer.Navigator >
                                                </NavigationContainer>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }



                                if (title === 'drawerContentContainerStyle') {
                                    return <TestSuite name='drawerContentContainerStyle' key={'drawerContentContainerStyle'}>
                                        <TestCase itShould='drawer容器样式，修改背景色' tags={['C_API']}>
                                            <View style={styles.container}>
                                                <NavigationContainer>
                                                    <Drawer.Navigator screenOptions={{
                                                        drawerContentContainerStyle: {
                                                            backgroundColor: 'orange'
                                                        }
                                                    }}>
                                                        <Drawer.Screen name="Feed" component={Feed} />
                                                        <Drawer.Screen name="Notifications" component={Notifications} />
                                                        <Drawer.Screen name="Settings" component={Settings} />
                                                    </Drawer.Navigator >
                                                </NavigationContainer>
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                }

                                if (title === 'drawerItemPress') {
                                    return <TestSuite name='drawerItemPress' key={'drawerItemPress'}>
                                        <TestCase itShould='点击drawerItem,触发事件'
                                            tags={['C_API']}
                                            initialState={false}
                                            assert={({ expect, state }) => {
                                                expect(state).to.be.true;
                                            }}
                                            arrange={({ setState }) => {
                                                const DrawerEvent = ({ navigation }: Props) => {

                                                    React.useEffect(() => {
                                                        const unsubscribe = navigation.addListener('drawerItemPress', (e: any) => {
                                                            // Prevent default behavior
                                                            // e.preventDefault();

                                                            setState(true)

                                                        });

                                                        return unsubscribe;
                                                    }, [navigation]);

                                                    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                        <Text>点击抽屉项Feed，触发事件</Text>
                                                    </View>
                                                }


                                                return (
                                                    <View style={styles.container}>
                                                        <NavigationContainer>
                                                            <Drawer.Navigator >
                                                                <Drawer.Screen name="Feed" component={DrawerEvent} />
                                                                <Drawer.Screen name="Notifications" component={Notifications} />
                                                                <Drawer.Screen name="Settings" component={Settings} />
                                                            </Drawer.Navigator >
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
        height: 400
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


export default DrawerExample