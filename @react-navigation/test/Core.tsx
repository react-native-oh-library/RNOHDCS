
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
    CommonActions,
    TabActionHelpers,
    TabNavigationState,
    TabRouter,
    TabRouterOptions,
    useNavigationBuilder,
    NavigationProp
} from '@react-navigation/core';
import type {
    BottomTabBarButtonProps,
    BottomTabBarProps,
    BottomTabHeaderProps,
    BottomTabNavigationEventMap,
    BottomTabNavigationOptions,
    BottomTabNavigationProp,
    BottomTabScreenProps,
} from '@react-navigation/bottom-tabs'
type ScreenProps = BottomTabScreenProps<ParamListBase>

const checkType = (obj: any) => {
    return Object.prototype.toString.call(obj).slice(8, -1)
}

const checkIsObject = (obj: any) => {
    return checkType(obj) === 'Object'
}

export const CoreExamples = () => {
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
    }: Props) {
        const { state, navigation, descriptors, NavigationContent } =
            useNavigationBuilder<
                TabNavigationState<ParamListBase>,
                TabRouterOptions,
                TabActionHelpers<ParamListBase>,
                TabNavigationOptions,
                TabNavigationEventMap
            >(TabRouter, {
                children,
                screenOptions,
                initialRouteName,
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



    const HomeScreen = ({ navigation, route }: ScreenProps) => {
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
            useNavigationBuilder: {
                type: 'custom',
                description: '自定义一个导航',
            },
            useNavigation: {
                type: 'custom',
                description: '获取navigation,用于导航',
            },
            useNavigationState: {
                type: 'custom',
                description: '获取navigation状态',
            },
            useRoute: {
                type: 'custom',
                description: '获取route状态',
            },
            useFocusEffect: {
                type: 'custom',
                description: '页面聚焦时，执行',
            },
            useIsFocused: {
                type: 'custom',
                description: '判断页面是否聚焦，切换页面时能看到判定过程',
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

                            if (title === 'useNavigationBuilder') {
                                return <TestSuite name={(platform ? `[${platform}]` : '') + (testName || title)} key={title + state?.[title].value}>
                                    <TestCase itShould={description} tags={['C_API']}>
                                        <View style={styles.container}>
                                            <NavigationContainer>
                                                <My.Navigator initialRouteName='Home'>
                                                    <My.Screen name="Home" component={HomeScreen} />
                                                    <My.Screen name="Home1" component={HomeScreen} />
                                                    <My.Screen name="Home2" component={HomeScreen} />
                                                </My.Navigator >
                                            </NavigationContainer>

                                        </View>
                                    </TestCase>
                                </TestSuite>
                            }

                            if (title === 'useNavigation') {
                                const HomeScreen = ({ route }: ScreenProps) => {
                                    const navigation = useNavigation<BottomTabNavigationProp<ParamListBase>>()
                                    return (
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text>{route.name}</Text>
                                            <Text>navigation由useNavigation获得</Text>
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



                                return <TestSuite name={(platform ? `[${platform}]` : '') + (testName || title)} key={title + state?.[title].value}>
                                    <TestCase itShould={description} tags={['C_API']}>
                                        <View style={styles.container}>
                                            <NavigationContainer>
                                                <My.Navigator initialRouteName='Home'>
                                                    <My.Screen name="Home" component={HomeScreen} />
                                                    <My.Screen name="Home1" component={HomeScreen} />
                                                    <My.Screen name="Home2" component={HomeScreen} />
                                                </My.Navigator >
                                            </NavigationContainer>
                                        </View>
                                    </TestCase>
                                </TestSuite>
                            }

                            if (title === 'useNavigationState') {
                                const HomeScreen = ({ navigation, route }: ScreenProps) => {
                                    const index = useNavigationState((state) => state.index)
                                    return (
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text>{route.name}</Text>
                                            <Text>navigationState.index: {index}</Text>
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



                                return <TestSuite name={(platform ? `[${platform}]` : '') + (testName || title)} key={title + state?.[title].value}>
                                    <TestCase itShould={description} tags={['C_API']}>
                                        <View style={styles.container}>
                                            <NavigationContainer>
                                                <My.Navigator initialRouteName='Home'>
                                                    <My.Screen name="Home" component={HomeScreen} />
                                                    <My.Screen name="Home1" component={HomeScreen} />
                                                    <My.Screen name="Home2" component={HomeScreen} />
                                                </My.Navigator >
                                            </NavigationContainer>

                                        </View>
                                    </TestCase>
                                </TestSuite>
                            }


                            if (title === 'useRoute') {
                                const HomeScreen = ({ navigation }: ScreenProps) => {
                                    const route = useRoute()
                                    return (
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text>{route.name}</Text>
                                            <Text>标题由useRoute获取</Text>
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



                                return <TestSuite name={(platform ? `[${platform}]` : '') + (testName || title)} key={title + state?.[title].value}>
                                    <TestCase itShould={description} tags={['C_API']}>
                                        <View style={styles.container}>
                                            <NavigationContainer>
                                                <My.Navigator initialRouteName='Home'>
                                                    <My.Screen name="Home" component={HomeScreen} />
                                                    <My.Screen name="Home1" component={HomeScreen} />
                                                    <My.Screen name="Home2" component={HomeScreen} />
                                                </My.Navigator >
                                            </NavigationContainer>

                                        </View>
                                    </TestCase>
                                </TestSuite>
                            }

                            if (title === 'useFocusEffect') {

                                return <TestSuite name={(platform ? `[${platform}]` : '') + (testName || title)} key={title + state?.[title].value}>
                                    <TestCase itShould={description} tags={['C_API']}
                                        initialState={false}
                                        assert={({ expect, state }) => {
                                            expect(state).to.be.true;
                                        }}
                                        arrange={({ setState }) => {
                                            const HomeScreen = ({ navigation, route }: ScreenProps) => {
                                                useFocusEffect(
                                                    React.useCallback(() => {
                                                        setState(true)
                                                    }, [route])
                                                );

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

                                            return <View style={styles.container}>
                                                <NavigationContainer>
                                                    <My.Navigator initialRouteName='Home'>
                                                        <My.Screen name="Home" component={HomeScreen} />
                                                        <My.Screen name="Home1" component={HomeScreen} />
                                                        <My.Screen name="Home2" component={HomeScreen} />
                                                    </My.Navigator >
                                                </NavigationContainer>

                                            </View>

                                        }}>

                                    </TestCase>
                                </TestSuite>
                            }


                            if (title === 'useIsFocused') {
                                const HomeScreen = ({ navigation, route }: ScreenProps) => {
                                    const isFocused = useIsFocused()
                                    return (
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text>{route.name}</Text>
                                            <Text>isFocused: {isFocused + ''}</Text>
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



                                return <TestSuite name={(platform ? `[${platform}]` : '') + (testName || title)} key={title + state?.[title].value}>
                                    <TestCase itShould={description} tags={['C_API']}>
                                        <View style={styles.container}>
                                            <NavigationContainer>
                                                <My.Navigator initialRouteName='Home'>
                                                    <My.Screen name="Home" component={HomeScreen} />
                                                    <My.Screen name="Home1" component={HomeScreen} />
                                                    <My.Screen name="Home2" component={HomeScreen} />
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


export default CoreExamples