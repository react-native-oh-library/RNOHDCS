import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Pressable,
    useWindowDimensions,
    TextInput
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { TabView, TabBar, TabBarItem, TabBarIndicator, SceneMap } from 'react-native-tab-view';
import type { TabBarProps, TabBarIndicatorProps, TabBarItemProps, TabViewProps, NavigationState, Route, SceneRendererProps } from 'react-native-tab-view'
type ComButtonProps = {
    index: number
    title: string
}
const checkType = (obj: any) => {
    return Object.prototype.toString.call(obj).slice(8, -1)
}

const checkIsObject = (obj: any) => {
    return checkType(obj) === 'Object'
}

export const TabViewExamples = () => {
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



    const FirstRoute = () => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ff4081' }} >
            <Text>FirstRoute</Text>
        </View>
    );

    const SecondRoute = () => {

        const [state, setState] = useState('');

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#673ab7' }}>
                <Text>SecondRoute</Text>
                <Text>{'State: ' + state}</Text>
                <TextInput style={styles.textInput} onChangeText={state => setState(state)}
                    defaultValue={state} autoFocus={false} />
            </View>
        )
    };

    const ThirdRoute = () => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange' }} >
            <Text>ThirdRoute</Text>
        </View>
    );

    const layout = useWindowDimensions();


    const renderTabBar = (props: TabBarProps<Route>) => (
        <TabBar
            labelStyle={{
                textTransform: 'none'
            }}
            {...(props || {})}
        />
    );


    const MyTabView = (props: TabViewProps<Route> & { onIndexChange: () => void, tabBarOptions: TabBarProps<Route> }) => {
        const { onIndexChange, tabBarOptions = {}, navigationState, renderScene, ...rest } = props
        const [index, setIndex] = React.useState(0);
        const [routes] = React.useState<Route[]>([
            { key: 'first', title: 'First' },
            { key: 'second', title: 'Second' },
            { key: 'third', title: 'Third' },
        ]);

        const renderScene1 = SceneMap<SceneRendererProps>({
            first: FirstRoute,
            second: SecondRoute,
            third: ThirdRoute,
        });


        return (
            <TabView
                renderTabBar={(options: TabBarProps<Route>) => renderTabBar({ ...options, ...tabBarOptions })}
                navigationState={{ index, routes }}
                renderScene={renderScene1}
                onIndexChange={(number) => {
                    setIndex(number)
                    onIndexChange && onIndexChange()
                }}
                initialLayout={{ width: layout.width }}
                {...rest}
            />
        );
    }

    interface State {
        [propName: string]: {
            platform?: string,
            testName?: string,
            type?: 'custom' | 'preview' | 'callBack',
            description?: string,
            props?: {
                [propName: string]: any,
            },
            value?: any,
            valueList?: any[],
            tabBarOptions?: boolean,
            extraOptions?: object,
            extraFn?: (a: any) => void,
            noRender?: boolean,
            propName?: string
        };
    }
    const [state, setState] = useState<State>(() => {
        return {
            navigationState: {
                type: 'preview',
                description: '基本属性，路由状态',
                props: {
                }
            },
            onIndexChange: {
                type: 'callBack',
                description: '基本属性，页面改变时触发',
            },
            renderScene: {
                type: 'preview',
                description: '基本属性，定义渲染的页面',
                props: {
                }
            },
            tabBarPosition: {
                description: 'tabBar位置',
                value: 'top',
                valueList: [
                    'top',
                    'bottom',
                ],
            },
            lazy: {
                testName: 'lazy & lazyPreloadDistance & renderLazyPlaceholder',
                type: 'custom',
                description: '页面懒加载，有个粉色加载动画',
                value: false,
                valueList: [
                    true,
                    false,
                ],
            },
            lazyPreloadDistance: {
                noRender: true,
                type: 'custom',
                value: 0,
                valueList: [0, 1, 2],
            },
            renderLazyPlaceholder: {
                noRender: true,
                type: 'custom',
            },
            keyboardDismissMode: {
                description: '拖动时是否自动关闭键盘',
                value: 'auto',
                valueList: [
                    'auto',
                    'on-drag',
                    'none',
                ],
            },
            swipeEnabled: {
                description: '开启滑动手势',
                value: true,
                valueList: [
                    false,
                    true
                ],
            },
            animationEnabled: {
                description: '开启动画',
                value: true,
                valueList: [
                    false,
                    true
                ],
            },
            onSwipeStart: {
                type: 'callBack',
                description: '开始滑动时触发',
            },
            onSwipeEnd: {
                type: 'callBack',
                description: '结束滑动时触发',
            },
            initialLayout: {
                description: '初始布局，设置不全宽，可以看到布局变化过程',
                value: undefined,
                valueList: [
                    undefined,
                    {
                        title: '设置',
                        value: {
                            width: 100,
                            height: 100
                        }

                    }
                ],
            },
            overScrollMode: {
                // platform: 'android',
                description: 'overScroll模式,控制滚动到边界页面的效果',
                value: 'never',
                valueList: [
                    'auto',
                    'always',
                    'never'
                ],
            },
            sceneContainerStyle: {
                type: 'preview',
                description: '页面容器的样式,加个边框',
                props: {
                    sceneContainerStyle: {
                        borderWidth: 5,

                    }
                }
            },
            pagerStyle: {
                type: 'preview',
                description: '页面里pagerView的样式,加个半透明效果',
                props: {
                    pagerStyle: {
                        opacity: 0.5
                    }
                }
            },
            style: {
                type: 'preview',
                description: 'tabView的样式,加个border',
                props: {
                    style: {
                        borderWidth: 5
                    }
                }
            },

            getLabelText: {
                type: 'preview',
                description: '获取标签文字，添加一个方框',
                tabBarOptions: true,
                value: 'never',
                valueList: [
                    'auto',
                    'always',
                    'never'
                ],
                props: {
                    getLabelText: ({ route }: { route: Route }) => `[${route.title}]`
                }
            },
            getAccessible: {
                description: '判定一个tab是否为accessible',
                tabBarOptions: true,
                value: undefined,
                valueList: [
                    undefined,
                    {
                        title: 'First',
                        value: ({ route }: { route: Route }) => {
                            return route.title === 'First'
                        }
                    },
                    {
                        title: 'Secend',
                        value: ({ route }: { route: Route }) => route.title === 'Secend'
                    },
                    {
                        title: 'Third',
                        value: ({ route }: { route: Route }) => route.title === 'Third'
                    }
                ],
            },
            getAccessibilityLabel: {
                description: '自定义Accessibility的标签，打开系统辅助功能以查看效果',
                tabBarOptions: true,
                type: 'preview',
                props: {
                    getAccessibilityLabel: ({ route }: { route: Route }) => '自定义无障碍标签' + route.title
                }
            },
            renderIcon: {
                description: '自定义图标',
                tabBarOptions: true,
                type: 'preview',
                props: {
                    renderIcon: ({ color }: { color: string }) => (
                        <View style={{ backgroundColor: 'red' }}>
                            <Text style={{ color: color }}>ico</Text>
                        </View>
                    )
                }
            },
            renderLabel: {
                description: '自定义标签',
                tabBarOptions: true,
                type: 'preview',
                props: {
                    renderLabel: ({ route, color }: { route: Route, color: string }) => (
                        <View>
                            <Text style={{ color: color }}>My{route.title}</Text>
                        </View>
                    )
                }
            },
            renderTabBarItem: {
                description: '自定义tabBar,改变label的字体大小',
                tabBarOptions: true,
                type: 'preview',
                props: {
                    renderTabBarItem: (props: TabBarItemProps<Route>) => (
                        <TabBarItem {...props} labelStyle={{
                            fontSize: 20,
                            textTransform: 'none'

                        }} />
                    )
                }
            },
            renderIndicator: {
                description: '自定义tabBar的指示器',
                tabBarOptions: true,
                type: 'preview',
                props: {
                    renderIndicator: (props: TabBarIndicatorProps<Route>) => (
                        <TabBarIndicator {...props} style={{
                            width: 20,
                            height: 20
                        }} />
                    )
                }
            },
            renderBadge: {
                description: '自定义tabBar的徽章',
                tabBarOptions: true,
                type: 'preview',
                props: {
                    renderBadge: ({ route }: { route: Route }) => {
                        return <View style={styles.tabBarBadge}>
                            <Text style={styles.tabBarBadgeText}>{route?.title?.[0]}</Text>
                        </View>
                    }
                }
            },
            onTabPress: {
                description: '点击tap时触发',
                tabBarOptions: true,
                type: 'callBack'
            },
            onTabLongPress: {
                description: '长按tap时触发',
                tabBarOptions: true,
                type: 'callBack'
            },
            activeColor: {
                description: '激活项颜色',
                tabBarOptions: true,
                value: 'red',
                valueList: [
                    'red',
                    'blue',
                    'pink'
                ],
            },
            inactiveColor: {
                description: '未激活项颜色',
                tabBarOptions: true,
                value: 'red',
                valueList: [
                    'red',
                    'blue',
                    'pink'
                ],
            },
            // pressColor: {
            //     platform: 'android>=5.0',
            //     description: '按压颜色',
            //     tabBarOptions: true,
            //     value: 'red',
            //     valueList: [
            //         'red',
            //         'blue',
            //         'pink'
            //     ],
            // },
            pressOpacity: {
                // platform: 'android<=5.0',
                description: '按压透明度',
                tabBarOptions: true,
                value: 0,
                valueList: [
                    0,
                    0.5,
                    1
                ],
            },
            scrollEnabled: {
                description: 'tabBar是否可滚动',
                tabBarOptions: true,
                value: false,
                valueList: [
                    true,
                    false
                ],
            },
            // //无效果 todo
            // bounces: {
            //     description: 'tabBar滚动时是否有回弹效果',
            //     tabBarOptions: true,
            //     value: false,
            //     valueList: [
            //         true,
            //         false
            //     ],
            //     extraOptions: {
            //         scrollEnabled: true
            //     }
            // },
            tabStyle: {
                description: 'tab样式，设置tab宽度为自动',
                tabBarOptions: true,
                type: 'preview',
                props: {
                    tabStyle: {
                        width: 'auto'
                    }
                }
            },
            indicatorStyle: {
                description: '指示器样式，切换其颜色',
                tabBarOptions: true,

                value: {
                    title: "red",
                    value: {
                        backgroundColor: 'red'
                    }
                },
                valueList: [
                    {
                        title: "red",
                        value: {
                            backgroundColor: 'red'
                        }
                    },
                    {
                        title: "black",
                        value: {
                            backgroundColor: 'black'
                        }
                    },
                    {
                        title: "blue",
                        value: {
                            backgroundColor: 'blue'
                        }
                    }
                ],
            },
            indicatorContainerStyle: {
                description: '指示器容器样式，改变指示器位置',
                tabBarOptions: true,
                type: 'preview',
                props: {
                    indicatorContainerStyle: {
                        bottom: '50%'
                    }
                }
            },
            labelStyle: {
                description: '标签样式,设置一个倾斜字体',
                tabBarOptions: true,
                type: 'preview',
                props: {
                    labelStyle: {
                        textTransform: 'none',
                        fontStyle: 'italic'
                    }
                }
            },
            contentContainerStyle: {
                description: '内容容器样式,改变排列方式',
                tabBarOptions: true,
                type: 'preview',
                props: {
                    contentContainerStyle: {
                        flexDirection: 'column'
                    }
                }
            },
            'style(TabBar)': {
                propName: 'style',
                description: 'tabBar的样式,设置为红色背景',
                tabBarOptions: true,
                type: 'preview',
                props: {
                    contentContainerStyle: {
                        backgroundColor: 'red'
                    }
                }
            },
            gap: {
                description: 'tabBar间距',
                tabBarOptions: true,
                value: 0,
                valueList: [
                    0,
                    10,
                    20
                ],
            },
        }
    })


    //组件按钮
    const [currentIndex, setIndex] = useState(0)

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
                        Object.entries(state).filter(([a, b]) => b?.noRender !== true).map(([title, obj], index) => {
                            let { propName = title, extraFn, platform, testName, type, props = {}, value, description = '', valueList = [], tabBarOptions, extraOptions } = obj
                            if (index !== currentIndex) {
                                return <ComButton index={index} title={testName || title} key={title} />
                            }
                            let initOptions = {}
                            if (!type) {
                                if (tabBarOptions) {
                                    initOptions = {
                                        tabBarOptions: {
                                            ...extraOptions,
                                            [propName]: checkIsObject(state?.[title].value) ? state?.[title].value.value : state?.[title].value
                                        },
                                    }
                                } else {
                                    initOptions = {
                                        ...extraOptions,
                                        [propName]: checkIsObject(state?.[title].value) ? state?.[title].value.value : state?.[title].value
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
                                            <MyTabView {...initOptions} />
                                        </View>
                                    </TestCase>
                                </TestSuite>
                            } else if (type === 'preview') {
                                if (tabBarOptions) {
                                    initOptions = {
                                        tabBarOptions: {
                                            ...props,
                                        },
                                    }
                                } else {
                                    initOptions = {
                                        ...props,
                                    }
                                }

                                // console.log('initOptions2 ', initOptions)
                                return <TestSuite name={(platform ? `[${platform}] ` : '') + (testName || title)} key={title}>
                                    <TestCase itShould={description} tags={['C_API']}>
                                        <View style={styles.container}>
                                            <MyTabView {...initOptions} />
                                        </View>
                                    </TestCase>
                                </TestSuite>
                            } else if (type === 'callBack') {
                                return <TestSuite name={(platform ? `[${platform}] ` : '') + (testName || title)} key={title}>
                                    <TestCase itShould={description}
                                        tags={['C_API']}
                                        initialState={false}
                                        assert={({ expect, state }) => {
                                            expect(state).to.be.true;
                                        }}
                                        arrange={({ setState }) => {
                                            return (
                                                <View style={styles.container}>
                                                    <MyTabView {...tabBarOptions ? {
                                                        tabBarOptions: {
                                                            ...props,
                                                            [propName]: (props: any) => {
                                                                setState(true)
                                                                extraFn && extraFn(props)
                                                            }
                                                        },
                                                    } : {
                                                        ...props,
                                                        [propName]: (props: any) => {
                                                            setState(true)
                                                            extraFn && extraFn(props)
                                                        }
                                                    }} />
                                                </View>
                                            )
                                        }}>
                                    </TestCase>
                                </TestSuite>
                            } else {

                                if (title === 'lazy') {

                                    return <TestSuite name={'lazy & lazyPreloadDistance & renderLazyPlaceholder'} key={title + state?.[title].value + state.lazyPreloadDistance + state.renderLazyPlaceholder}>
                                        <ToggleButton key={title} title={'切换' + title} list={valueList} initValue={value} onChange={(val: any) => {
                                            setState({
                                                ...state,
                                                [title]: {
                                                    ...state?.[title],
                                                    value: val
                                                }
                                            })
                                        }}></ToggleButton>

                                        <ToggleButton key={'lazyPreloadDistance'} title={'切换lazyPreloadDistance'} list={state.lazyPreloadDistance.valueList || []} initValue={state.lazyPreloadDistance.value} onChange={(val: any) => {
                                            setState({
                                                ...state,
                                                lazyPreloadDistance: {
                                                    ...state.lazyPreloadDistance,
                                                    value: val
                                                }
                                            })
                                        }}></ToggleButton>
                                        <TestCase itShould={description} tags={['C_API']}>
                                            <View style={styles.container}>
                                                <MyTabView {...{
                                                    [title]: state[title].value,
                                                    lazyPreloadDistance: state.lazyPreloadDistance.value,
                                                    renderLazyPlaceholder: () => <View style={[styles.absolute, {
                                                        backgroundColor: 'pink',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }]}><Text>加载中...</Text></View>
                                                }} />
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
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    tabBarBadge: {
        display: 'flex',
        borderRadius: 7,
        width: 14,
        height: 14,
        backgroundColor: 'red',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    tabBarBadgeText: {
        textAlign: 'center',
        color: '#fff'
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


export default TabViewExamples