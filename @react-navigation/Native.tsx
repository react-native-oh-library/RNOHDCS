
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

import {
    NavigationContainer,
    useScrollToTop,
    useNavigationContainerRef
} from '@react-navigation/native';
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
    TabRouterOptions,
    useNavigationBuilder,
} from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import type {
    BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
type Props = BottomTabScreenProps<ParamListBase>;

const checkType = (obj: any) => {
    return Object.prototype.toString.call(obj).slice(8, -1)
}

const checkIsObject = (obj: any) => {
    return checkType(obj) === 'Object'
}

export const NativeExamples = () => {
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



    const HomeScreen = ({ navigation, route }:Props) => {
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

   
    const HomeStack = createStackNavigator()
    const Tab = createBottomTabNavigator()

    interface State {
        [propName: string]: {
            platform?: string,
            testName?: '',
            type?: 'custom' | 'preview' | 'callBack',
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
          
            useNavigationContainerRef: {
                type: 'custom',
                description: '通过ref获取导航，本例在导航页外做跳转',
            },
            onStateChange: {
                type: 'callBack',
                description: '导航状态改变时',
            },
            onReady: {
                type: 'callBack',
                description: '导航加载完成时',
            },
            useScrollToTop: {
                type: 'custom',
                description: 'hooks,点击tab让页面滚动到顶部',
                value: true,
                valueList: [true, false]
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


                            if (type === 'callBack') {
                                return <TestSuite name={(platform ? `[${platform}]` : '') + (testName || title)} key={title + state?.[title].value}>
                                    <TestCase itShould={description} tags={['C_API']}
                                        initialState={false}
                                        assert={({ expect, state }) => {
                                            expect(state).to.be.true;
                                        }}
                                        arrange={({ setState }) => {
                                            return <View style={styles.container}>
                                                <NavigationContainer {...{
                                                    [title]: () => {
                                                        setState(true)
                                                    }
                                                }}>
                                                    <Tab.Navigator>
                                                        <Tab.Screen name="Home" component={HomeScreen} />
                                                        <Tab.Screen name="Home1" component={HomeScreen} />
                                                        <Tab.Screen name="Home2" component={HomeScreen} />
                                                    </Tab.Navigator >
                                                </NavigationContainer>
                                            </View>
                                        }}
                                    >
                                    </TestCase>
                                </TestSuite>
                            }

                            if (title === 'useScrollToTop') {
                                const HomeScreen = ({ navigation, route }:Props) => {
                                    const state = useNavigationState(state => state.history) || []

                                    const ref = React.useRef(null);

                                    console.log('state.useScrollToTop.value  ', value)
                                    value && useScrollToTop(ref);

                                    return (
                                        <ScrollView ref={ref}>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                                <Text>{route.name}</Text>
                                                <Text>滚动到底部查看按钮</Text>
                                                {
                                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(e => {
                                                        return <View style={{ height: 40 }} key={e}>
                                                            <Text>{e}</Text>
                                                        </View>
                                                    })
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
                                                    state.length > 1 ? <Button title='Go Back' onPress={() => {
                                                        navigation.goBack()
                                                    }}></Button> : null
                                                }
                                            </View>
                                        </ScrollView>
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
                                                <Tab.Navigator>
                                                    <Tab.Screen name="Home" component={HomeScreen} />
                                                    <Tab.Screen name="Home1" component={HomeScreen} />
                                                    <Tab.Screen name="Home2" component={HomeScreen} />
                                                </Tab.Navigator >
                                            </NavigationContainer>
                                        </View>
                                    </TestCase>
                                </TestSuite>
                            }


                            if (title === 'useNavigationContainerRef') {

                             
                                const App = () => {
                                    const navigationRef = useNavigationContainerRef<ParamListBase>();

                                    return <View style={styles.container}>
                                        <NavigationContainer ref={navigationRef}>
                                            <Tab.Navigator>
                                                <Tab.Screen name="Home" component={HomeScreen} />
                                                <Tab.Screen name="Home1" component={HomeScreen} />
                                                <Tab.Screen name="Home2" component={HomeScreen} />
                                            </Tab.Navigator >
                                        </NavigationContainer>
                                        <Button title='Go to home1' onPress={() => navigationRef.navigate('Home1')}></Button>
                                    </View>
                                }


                                return <TestSuite name={(platform ? `[${platform}]` : '') + (testName || title)} key={title + state?.[title].value}>
                                    <TestCase itShould={description} tags={['C_API']}>
                                        <App></App>
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


export default NativeExamples