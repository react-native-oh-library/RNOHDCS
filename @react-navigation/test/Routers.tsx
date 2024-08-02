
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Pressable,
    Button,
    TextInput,
} from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { NavigationContainer } from '@react-navigation/native';
import {
    useNavigation,
    useNavigationState,
    useRoute,
    useFocusEffect,
    useIsFocused,
    NavigationHelpersContext,
    TabActions,
    createNavigatorFactory,
    DefaultNavigatorOptions,
    ParamListBase,
    TabActionHelpers,
    TabNavigationState,
    TabRouterOptions,
    useNavigationBuilder,
} from '@react-navigation/core';
import { TabRouter, CommonActions } from '@react-navigation/routers'
import type { BottomTabScreenProps, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { interpolate } from 'react-native-reanimated';



export const RoutersExamples = () => {
    const MyTabRouter = (options: TabRouterOptions) => {
        const router = TabRouter(options);
        return {
            ...router,
            getStateForAction(state, action, options) {
                switch (action.type) {
                    case 'CLEAR_HISTORY':
                        return {
                            ...state,
                            history: [ state.history[state.history.length - 1]],
                        };
                    default:
                        return router.getStateForAction(state, action, options);
                }
            },
            actionCreators: {
                ...router.actionCreators,
                clearHistory() {
                    return { type: 'CLEAR_HISTORY' };
                },
            },
        };
    };

    // Props accepted by the view
    type TabNavigationConfig = {
        tabBarStyle?: StyleProp<ViewStyle>;
        contentStyle?: StyleProp<ViewStyle>;
    };

    // Supported screen options
    type TabNavigationOptions = {
        title?: string;
    };

    // Map of event name and the type of data (in event.data)
    //
    // canPreventDefault: true adds the defaultPrevented property to the
    // emitted events.
    type TabNavigationEventMap = {
        tabPress: {
            data: { isAlreadyFocused: boolean };
            canPreventDefault: true;
        };
    };

    // The props accepted by the component is a combination of 3 things
    type Props = DefaultNavigatorOptions<
        ParamListBase,
        TabNavigationState<ParamListBase>,
        TabNavigationOptions,
        TabNavigationEventMap
    > &
        TabRouterOptions &
        TabNavigationConfig;


    function TabNavigator({
        initialRouteName,
        children,
        screenOptions,
        tabBarStyle,
        contentStyle,
        backBehavior
    }: Props) {
        const { state, navigation, descriptors, NavigationContent } =
            useNavigationBuilder<
                TabNavigationState<ParamListBase>,
                TabRouterOptions,
                TabActionHelpers<ParamListBase>,
                TabNavigationOptions,
                TabNavigationEventMap
            >(MyTabRouter, {
                children,
                screenOptions,
                initialRouteName,
                backBehavior
            });
        return (
            <NavigationContent>
                <View style={[{ flexDirection: 'row' }, tabBarStyle]}>
                    {state.routes.map((route, index) => {
                        const isFocused = state.index === index;
                        return <Pressable
                            key={route.key}
                            onPress={() => {

                                const event = navigation.emit({
                                    type: 'tabPress',
                                    target: route.key,
                                    canPreventDefault: true,
                                    data: {
                                        isAlreadyFocused: isFocused,
                                    },
                                });

                                if (!isFocused && !event.defaultPrevented) {
                                    navigation.dispatch({
                                        ...CommonActions.navigate(route),
                                        target: state.key,
                                    });
                                }
                            }}
                            style={[{ flex: 1 }]}
                        >
                            <Text style={isFocused ? { color: 'red' } : {}}>{descriptors[route.key].options.title ?? route.name}</Text>
                        </Pressable>
                    })}
                </View>
                <View style={[{ flex: 1 }, contentStyle]}>
                    {state.routes.map((route, i) => {
                        return (
                            <View
                                key={route.key}
                                style={[
                                    StyleSheet.absoluteFill,
                                    { display: i === state.index ? 'flex' : 'none' },
                                ]}
                            >
                                {descriptors[route.key].render()}
                            </View>
                        );
                    })}
                </View>
            </NavigationContent>
        );
    }

    const createMyNavigator = createNavigatorFactory<
        TabNavigationState<ParamListBase>,
        TabNavigationOptions,
        TabNavigationEventMap,
        typeof TabNavigator
    >(TabNavigator);

    const My = createMyNavigator();


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
            customRouter: {
                type: 'custom',
                description: '自定义修改TabRouter，添加一个方法clearHistory清除历史记录',
            },
            navigate: {
                type: 'custom',
                description: '导航到页面，示例里点击navigate to Home1按钮跳转到Home1并携带参数',
            },
            reset: {
                type: 'custom',
                description: '用新路由状态重置当前路由状态',
            },
            goBack: {
                type: 'custom',
                description: '返回到上个路由，比如从home1返回到home',
            },
            setParams: {
                type: 'custom',
                description: '更新路由的参数',
            },

        }
    })


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar></StatusBar>
            <Tester style={{ flex: 1 }}>
                <ScrollView>
                    {
                        Object.entries(state).map(([title, obj]) => {
                            let { propName = title, platform, testName, type, props = {}, value, description = '', valueList = [], options, extraOptions } = obj

                            if (title === 'customRouter') {
                                const HomeScreen = ({ navigation, route }) => {
                                    const state = useNavigationState(state => state.history)
                                    return (
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text>{route.name}</Text>
                                            <Text>historyLength: {state?.length}</Text>
                                            <Button title='Clear History' onPress={() => {
                                                navigation.clearHistory()
                                            }}></Button>
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
                                                navigation.canGoBack() ? <Button title='Go Back' onPress={() => {
                                                    navigation.goBack()
                                                }}></Button> : null
                                            }
                                        </View>
                                    );
                                }

                                return <TestSuite name={(platform ? `[${platform}]` : '') + (testName || title)} key={title + state?.[title].value}>
                                    <TestCase itShould={description} tags={['C_API']}>
                                        <View style={styles.container}>
                                            <NavigationContainer>
                                                <My.Navigator initialRouteName='Home' backBehavior='history'>
                                                    <My.Screen name="Home" component={HomeScreen} />
                                                    <My.Screen name="Home1" component={HomeScreen} />
                                                    <My.Screen name="Home2" component={HomeScreen} />
                                                </My.Navigator >
                                            </NavigationContainer>

                                        </View>
                                    </TestCase>
                                </TestSuite>
                            }

                            if (title === 'navigate') {
                                const HomeScreen = ({ navigation, route }) => {
                                    return (
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text>{route.name}</Text>
                                            <Text>params: {JSON.stringify(route.params || {})} </Text>
                                            {
                                                route.name !== 'Home1' ? <Button title='navigate to Home1' onPress={() => {
                                                    navigation.dispatch(
                                                        CommonActions.navigate({
                                                            name: 'Home1',
                                                            params: {
                                                                user: 'abc',
                                                            },
                                                        })
                                                    );
                                                }}></Button> : null
                                            }
                                            {
                                                route.name !== 'Home1' ? <Button title='navigate to Home1' onPress={() => {
                                                    navigation.dispatch(
                                                        CommonActions.navigate({
                                                            name: 'Home1',
                                                            params: {
                                                                user: 'abc',
                                                            },
                                                        })
                                                    );
                                                }}></Button> : null
                                            }
                                            {
                                                navigation.canGoBack() ? <Button title='Go Back' onPress={() => {
                                                    navigation.goBack()
                                                }}></Button> : null
                                            }
                                        </View>
                                    );
                                }

                                return <TestSuite name={(platform ? `[${platform}]` : '') + (testName || title)} key={title + state?.[title].value}>
                                    <TestCase itShould={description} tags={['C_API']}>
                                        <View style={styles.container}>
                                            <NavigationContainer>
                                                <My.Navigator initialRouteName='Home' backBehavior='history'>
                                                    <My.Screen name="Home" component={HomeScreen} />
                                                    <My.Screen name="Home1" component={HomeScreen} />
                                                </My.Navigator >
                                            </NavigationContainer>
                                        </View>
                                    </TestCase>
                                </TestSuite>

                            }

                            if (title === 'reset') {

                                const HomeScreen = ({ navigation, route }) => {
                                    const [value, setValue] = useState('')
                                    return (
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text>{route.name}</Text>
                                            <Text>params: {JSON.stringify(route.params || {})} </Text>
                                            {
                                                route.name !== 'Home' ? <Button title='Go to Home' onPress={() => {
                                                    navigation.navigate('Home')
                                                }}></Button> : null
                                            }
                                            {
                                                route.name === 'Home' ?
                                                    <View>
                                                        <Text>value: {value}</Text>
                                                        <TextInput style={styles.textInput} onChangeText={state => setValue(state)}></TextInput>
                                                    </View>
                                                    : null
                                            }
                                            {
                                                route.name !== 'Home1' ? <Button title='navigate to Home1' onPress={() => {
                                                    navigation.dispatch(
                                                        navigation.navigate('Home1', {
                                                            user: 'abc'
                                                        })
                                                    );
                                                }}></Button> : null
                                            }
                                            <Button title='Reset' onPress={() => {
                                                navigation.dispatch(
                                                    navigation.dispatch(
                                                        CommonActions.reset({
                                                            index: 1,
                                                            routes: [
                                                                {
                                                                    name: 'Home1',
                                                                },
                                                                { name: 'Home', params: { user: 'def' } },
                                                            ],
                                                        })
                                                    )
                                                );
                                            }}></Button>
                                            {
                                                navigation.canGoBack() ? <Button title='Go Back' onPress={() => {
                                                    navigation.goBack()
                                                }}></Button> : null
                                            }
                                        </View>
                                    );
                                }

                                return <TestSuite name={(platform ? `[${platform}]` : '') + (testName || title)} key={title + state?.[title].value}>
                                    <TestCase itShould={description} tags={['C_API']}>
                                        <View style={styles.container}>
                                            <NavigationContainer>
                                                <My.Navigator initialRouteName='Home' backBehavior='history'>
                                                    <My.Screen name="Home" component={HomeScreen} />
                                                    <My.Screen name="Home1" component={HomeScreen} />

                                                </My.Navigator >
                                            </NavigationContainer>
                                        </View>
                                    </TestCase>
                                </TestSuite>

                            }

                            if (title === 'goBack') {

                                const HomeScreen = ({ navigation, route }) => {
                                    const [value, setValue] = useState('')
                                    return (
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text>{route.name}</Text>
                                            <Text>params: {JSON.stringify(route.params || {})} </Text>
                                            {
                                                route.name !== 'Home' ? <Button title='Go to Home' onPress={() => {
                                                    navigation.navigate('Home')
                                                }}></Button> : null
                                            }

                                            {
                                                route.name !== 'Home1' ? <Button title='navigate to Home1' onPress={() => {
                                                    navigation.dispatch(
                                                        navigation.navigate('Home1', {
                                                            user: 'abc'
                                                        })
                                                    );
                                                }}></Button> : null
                                            }

                                            {
                                                navigation.canGoBack() ? <Button title='Go Back' onPress={() => {
                                                    navigation.dispatch(CommonActions.goBack());
                                                }}></Button> : null
                                            }
                                        </View>
                                    );
                                }

                                return <TestSuite name={(platform ? `[${platform}]` : '') + (testName || title)} key={title + state?.[title].value}>
                                    <TestCase itShould={description} tags={['C_API']}>
                                        <View style={styles.container}>
                                            <NavigationContainer>
                                                <My.Navigator initialRouteName='Home' backBehavior='history'>
                                                    <My.Screen name="Home" component={HomeScreen} />
                                                    <My.Screen name="Home1" component={HomeScreen} />

                                                </My.Navigator >
                                            </NavigationContainer>
                                        </View>
                                    </TestCase>
                                </TestSuite>

                            }

                            if (title === 'setParams') {

                                const HomeScreen = ({ navigation, route }) => {
                                    const [value, setValue] = useState('')
                                    return (
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text>{route.name}</Text>
                                            <Text>params: {JSON.stringify(route.params || {})} </Text>
                                            <Button title='set new Params' onPress={() => {
                                                navigation.dispatch({
                                                    ...CommonActions.setParams({ newParams: Math.floor(Math.random() * 100) }),

                                                });
                                            }} />

                                            {
                                                route.name !== 'Home' ? <Button title='Go to Home' onPress={() => {
                                                    navigation.navigate('Home')
                                                }}></Button> : null
                                            }


                                            {
                                                route.name !== 'Home1' ? <Button title='navigate to Home1' onPress={() => {
                                                    navigation.dispatch(
                                                        navigation.navigate('Home1', {
                                                            user: 'abc'
                                                        })
                                                    );
                                                }}></Button> : null
                                            }

                                            {
                                                navigation.canGoBack() ? <Button title='Go Back' onPress={() => {
                                                    navigation.goBack()
                                                }}></Button> : null
                                            }
                                        </View>
                                    );
                                }

                                return <TestSuite name={(platform ? `[${platform}]` : '') + (testName || title)} key={title + state?.[title].value}>
                                    <TestCase itShould={description} tags={['C_API']}>
                                        <View style={styles.container}>
                                            <NavigationContainer>
                                                <My.Navigator initialRouteName='Home' backBehavior='history'>
                                                    <My.Screen name="Home" component={HomeScreen} />
                                                    <My.Screen name="Home1" component={HomeScreen} />
                                                </My.Navigator >
                                            </NavigationContainer>
                                        </View>
                                    </TestCase>
                                </TestSuite>

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
    textInput: {
        borderWidth: 1,
        width: 150
    },

});


export default RoutersExamples