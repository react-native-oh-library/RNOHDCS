
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
  TextInput,
  Dimensions,
  TouchableOpacity,
  Animated
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { NavigationContainer, ParamListBase, NavigationHelpers } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import type {
  MaterialTopTabBarProps,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationProp,
  MaterialTopTabScreenProps,
} from '@react-navigation/material-top-tabs';
import type { TabBarProps, TabBarIndicatorProps, TabBarItemProps, TabViewProps, NavigationState, Route, SceneRendererProps } from 'react-native-tab-view'
type Props = MaterialTopTabScreenProps<ParamListBase>;
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

export const MaterialTopTabsExample = () => {
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
            gap: 10,
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

  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  function NotificationsScreen() {
    const [state, setState] = useState('')
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
        <Text>{'State: ' + state}</Text>
        <TextInput style={styles.textInput} onChangeText={state => setState(state)}
          defaultValue={state} autoFocus={false} />
      </View>
    );

  }

  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }


  function HomeScreenNest({ navigation }: Props) {
    const parentNavigation = navigation.getParent<MaterialTopTabNavigationProp<ParamListBase>>('uniId');
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
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="HomeScreenNest"
          component={HomeScreenNest}
          options={{
            headerShown: false
          }}
        />
      </HomeStack.Navigator>
    );
  }


  function MyTabBar({ state, descriptors, navigation, position }: MaterialTopTabBarProps) {
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

          const inputRange = state.routes.map((_, i) => i);
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0.2)),
          });

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
              <Animated.Text style={{ opacity }}>
                {label + ''}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }


  function TabBarIndicator({
    getTabWidth,
    layout,
    state,
    position,
    width,
    gap,
    style,
  }: TabBarIndicatorProps<Route> & { state: NavigationState<Route> }) {

    const getTranslateX = (
      position: Animated.AnimatedInterpolation<number>,
      routes: Route[],
      getTabWidth: (index: number) => number,
      gap?: number
    ) => {
      const inputRange = routes.map((_, i) => i);

      // every index contains widths at all previous indices
      const outputRange = routes.reduce((acc, _, i) => {
        if (i === 0) return [0];
        return [...acc, acc[i - 1] + getTabWidth(i - 1) + (gap ?? 0)];
      }, []);

      const translateX = position.interpolate({
        inputRange,
        outputRange,
        extrapolate: 'clamp',
      });

      return Animated.multiply(translateX, 1);
    };
    const { routes } = state;
    const transform = [];

    if (layout.width) {
      const translateX =
        routes.length > 1 ? getTranslateX(position, routes, getTabWidth, gap) : 0;

      transform.push({ translateX });
    }


    return (
      <Animated.View
        style={[
          styles.tabBarIndicator,
          { transform },
        ]}
      />
    );
  }

  const HomeStack = createStackNavigator();
  const Tab = createMaterialTopTabNavigator();
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
      type?: 'custom' | 'preview' | 'screenOptions',
      description?: string,
      props?: {
        screenOptions?: object,
        [propName: string]: any
      },
      value?: any,
      valueList?: any[],
      options?: boolean,
      extraOptions?: object,
      testName?: string,
      noRender?: boolean
    };
  }

  const ViewStyle = [

    {
      title: '{borderColor:pink,borderWidth:2}',
      value: {
        borderColor: 'pink',
        borderWidth: 2
      }
    },
    {
      title: '{borderColor:red,borderWidth:5}',
      value: {
        borderColor: 'red',
        borderWidth: 5
      }
    },
    {
      title: '{borderRadius:10,borderColor:red,borderWidth:2}',
      value: {
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 10
      }
    },
    {
      title: '{borderRadius:20,borderColor:red,borderWidth:2}',
      value: {
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 20
      }
    },
    {
      title: '{opacity:0.1}',
      value: {
        opacity: 0.1
      }
    },
    {
      title: '{opacity:0.5}',
      value: {
        opacity: 0.5
      }
    },
  ]
  const TextStyle = [
    {
      title: '{color:red}',
      value: {
        color: 'red'
      }
    },
    {
      title: '{color:blue}',
      value: {
        color: 'blue'
      }
    },
    {
      title: '{fontSize:14}',
      value: {
        fontSize: 14
      }
    },
    {
      title: '{fontSize:22}',
      value: {
        fontSize: 22
      }
    },
    {
      title: '{fontWeight:200}',
      value: {
        fontWeight: 200
      }
    },
    {
      title: '{fontWeight:900}',
      value: {
        fontWeight: 900
      }
    },
    {
      title: '{letterSpacing:10}',
      value: {
        letterSpacing: 10
      }
    },
    {
      title: '{letterSpacing:20}',
      value: {
        letterSpacing: 20
      }
    },
    {
      title: '{fontStyle:italic}',
      value: {
        fontStyle: 'italic'
      }
    },
    {
      title: '{fontStyle:normal}',
      value: {
        fontStyle: 'normal'
      }
    },
  ]

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
      tabBarPosition: {
        value: 'top',
        description: 'tabBar位置',
        valueList: [
          'top',
          'bottom',
        ],
      },
      //todo
      keyboardDismissMode: {
        value: 'auto',
        description: '关闭键盘的类型',
        valueList: [
          'auto',
          'on-drag',
          'none'
        ],
      },
      initialLayout: {
        description: '默认布局,设置为比屏幕宽度小,有布局变化的过程',
        value: '不设置',
        valueList: [
          {
            title: '不设置',
            value: undefined
          },
          {
            title: '设置',
            value: {
              width: 100,
              height: 100
            }
          },
        ],
      },

      sceneContainerStyle: {
        description: '屏幕容器样式',
        value: {
          title: 'backgroundColor:red',
          value: {
            backgroundColor: 'red',
          }
        },
        valueList: [
          {
            title: '{backgroundColor:green}',
            value: {
              backgroundColor: 'green'
            }
          },
          {
            title: '{backgroundColor:pink}',
            value: {
              backgroundColor: 'pink'
            }
          },
          ...ViewStyle]
      },

      style: {
        description: '页面样式样式',
        value: {
          title: 'padding:20,backgroundColor:red',
          value: {
            padding: 20,
            backgroundColor: 'red'
          }
        },
        valueList: [
          {
            title: '{padding:20,backgroundColor:green}',
            value: {
              padding: 20,
              backgroundColor: 'green'
            }
          },
          {
            title: '{padding:10,backgroundColor:pink}',
            value: {
              padding: 10,
              backgroundColor: 'pink'
            }
          },
          ...ViewStyle]
      },
      tabBar: {
        type: 'preview',
        description: '自定义tabBar',
        props: {
          tabBar: (props: MaterialTopTabBarProps) => <MyTabBar {...props} />
        }
      },

      title: {
        type: 'custom'
      },
      tabBarLabel: {
        type: 'custom'
      },
      tabBarAccessibilityLabel: {
        type: 'custom'
      },
      tabBarAllowFontScaling: {
        description: '允许文字随系统设置而缩放',
        options: true,
        value: true,
        valueList: [
          false,
          true,
        ],
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

      tabBarIcon: {
        type: 'custom'
      },
      tabBarShowIcon: {
        options: true,
        value: false,
        description: '是否展示图标',
        extraOptions: {
          tabBarIcon: () => {
            return <View style={styles.icon}>
              <Text>
                ico
              </Text>
            </View>
          }
        },
        valueList: [
          false,
          true,
        ],
      },
      tabBarBadge: {
        type: 'custom'
      },

      tabBarIndicator: {
        type: 'preview',
        description: 'tabBar指示器',
        props: {
          screenOptions: {
            tabBarIndicator: (props: TabBarIndicatorProps<Route> & { state: NavigationState<Route> }) => <TabBarIndicator {...props} />
          }
        }
      },
      tabBarIndicatorStyle: {
        type: 'screenOptions',
        description: 'tabBar指示器样式',
        value: {
          title: 'backgroundColor:red',
          value: {
            backgroundColor: 'red',
          }
        },
        valueList: [
          {
            title: '{backgroundColor:green}',
            value: {
              backgroundColor: 'green'
            }
          },
          {
            title: '{backgroundColor:pink}',
            value: {
              backgroundColor: 'pink'
            }
          },
          ...ViewStyle]
      },
      tabBarIndicatorContainerStyle: {
        type: 'screenOptions',
        description: 'tabBar指示器容器样式',
        value: {
          title: 'backgroundColor:red',
          value: {
            backgroundColor: 'red',
          }
        },
        valueList: [
          {
            title: '{backgroundColor:orange}',
            value: {
              backgroundColor: 'orange'
            }
          },
          {
            title: '{backgroundColor:pink}',
            value: {
              backgroundColor: 'pink'
            }
          },
          ...ViewStyle]
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

      tabBarGap: {
        description: 'tabBar间隙',
        options: true,
        value: 0,
        valueList: [0, 10, 20]
      },

      tabBarPressOpacity: {
        description: '按压透明度',
        options: true,
        value: 0,
        valueList: [
          0,
          0.2,
          0.5,
          1
        ],
      },

      // // ios only
      // tabBarBounces: {
      //     options: true,
      //     value: true,
      //     description: '滚动时是否回弹',
      //     valueList: [
      //         false,
      //         true,
      //     ],
      //     extraOptions: {
      //         tabBarScrollEnabled: true
      //     },
      // },

      tabBarScrollEnabled: {
        value: false,
        options: true,
        description: 'tabBar是否可滚动',
        valueList: [
          false,
          true,
        ],
      },
      tabBarIconStyle: {
        description: 'tabBar图标样式',
        value: {
          title: 'backgroundColor:red',
          value: {
            backgroundColor: 'red'
          }
        },
        options: true,
        valueList: [
          {
            title: 'backgroundColor:green',
            value: {

              backgroundColor: 'green'
            }
          },
          {
            title: 'backgroundColor:pink',
            value: {

              backgroundColor: 'pink'
            }
          },
          ...ViewStyle
        ],

        extraOptions: {
          tabBarShowIcon: true,
          tabBarIcon: () => {
            return <View style={{ width: 50, height: 50 }}>
              <Text style={{ fontSize: 12 }}>
                ico
              </Text>
            </View>
          }
        },

      },

      tabBarLabelStyle: {
        description: 'tabBar标签样式，加个粉色背景',
        type: 'screenOptions',
        value: {
          title: '{color:red}',
          value: {
            color: 'red'
          }
        },
        valueList: TextStyle
      },

      tabBarItemStyle: {
        type: 'screenOptions',
        description: 'tabBar项样式',
        value: {
          title: 'backgroundColor:red',
          value: {
            backgroundColor: 'red'
          }
        },
        options: true,
        valueList: [
          {
            title: 'backgroundColor:green',
            value: {

              backgroundColor: 'green'
            }
          },
          {
            title: 'backgroundColor:pink',
            value: {

              backgroundColor: 'pink'
            }
          },
          ...ViewStyle]
      },
      tabBarContentContainerStyle: {
        type: 'screenOptions',
        description: 'tabBar内容容器样式，加红色背景',
        value: {
          title: 'backgroundColor:red',
          value: {
            backgroundColor: 'red'
          }
        },
        options: true,
        valueList: [
          {
            title: 'backgroundColor:green',
            value: {

              backgroundColor: 'green'
            }
          },
          {
            title: 'backgroundColor:pink',
            value: {

              backgroundColor: 'pink'
            }
          },
          ...ViewStyle]
      },
      tabBarStyle: {
        type: 'screenOptions',
        description: 'tabBar样式',
        value: {
          title: 'backgroundColor:red',
          value: {
            backgroundColor: 'red'
          }
        },
        options: true,
        valueList: [
          {
            title: 'backgroundColor:green',
            value: {

              backgroundColor: 'green'
            }
          },
          {
            title: 'backgroundColor:pink',
            value: {

              backgroundColor: 'pink'
            }
          },
          ...ViewStyle]
      },
      swipeEnabled: {
        value: false,
        options: true,
        description: '启动滑动手势',
        valueList: [
          false,
          true,
        ],
      },
      lazy: {
        testName: 'lazy & lazyPreloadDistance & lazyPlaceholder',
        type: 'custom',
        value: true,
        description: '开启懒加载',
        valueList: [
          false,
          true,
        ],
      },
      lazyPreloadDistance: {
        noRender: true,
        type: 'custom',
        value: 0,
        description: '懒加载页面距离',
        valueList: [
          0,
          1,
          2
        ],
      },
      lazyPlaceholder: {
        noRender: true,
        type: 'custom',
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
              let { testName, type, props = {}, value, description = '', valueList = [], options, extraOptions } = obj

              if (index !== currentIndex) {
                return <ComButton index={index} title={testName || title} key={title} />
              }
              let initOptions = {
                screenOptions: {
                  tabBarLabelStyle: { textTransform: 'none' }
                }
              }

              if (!type) {
                if (options) {
                  initOptions = {
                    screenOptions: {
                      ...initOptions.screenOptions,
                      ...extraOptions,
                      [title]: checkIsObject(state?.[title].value) ? state?.[title].value.value : state?.[title].value
                    },

                  }
                } else {
                  initOptions = {
                    screenOptions: initOptions.screenOptions,
                    ...extraOptions,
                    [title]: checkIsObject(state?.[title].value) ? state?.[title].value.value : state?.[title].value
                  }
                }


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
                let { screenOptions = {}, ...rest } = props || {}
                initOptions = {
                  screenOptions: {
                    ...initOptions.screenOptions,
                    ...screenOptions,
                  },
                  ...rest
                }
                return <TestSuite name={title} key={title}>
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
              } else if (type === 'screenOptions') {
                return <TestSuite name={title} key={title}>
                  <ToggleButton title={'切换' + title} list={valueList} initValue={value} onChange={(val: any) => {
                    setState({
                      ...state,
                      [title]: {
                        ...state?.[title],
                        value: {
                          title: val.title,
                          value: val.value
                        }
                      }
                    })
                  }}></ToggleButton>
                  <TestCase itShould={description} tags={['C_API']}>
                    <View style={styles.container}>
                      <NavigationContainer>
                        <Tab.Navigator screenOptions={{ [title]: state[title].value.value, }}>
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
                          <Tab.Navigator id='uniId' screenOptions={{
                            tabBarLabelStyle: {
                              textTransform: 'none'
                            }
                          }}
                          >
                            <Tab.Screen name="Home" component={HomeNest} />
                            <Tab.Screen name="Settings" component={SettingsScreen} />
                          </Tab.Navigator>
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
                          <Tab.Navigator screenOptions={{
                            tabBarLabelStyle: {
                              textTransform: 'none'
                            }
                          }}>
                            <Tab.Screen name="Home" component={HomeScreen} options={{
                              title: '主页'
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
                    <TestCase itShould='tabBar标签' tags={['C_API']}>
                      <View style={styles.container}>
                        <NavigationContainer>
                          <Tab.Navigator screenOptions={{
                            tabBarLabelStyle: {
                              textTransform: 'none'
                            }
                          }}>
                            <Tab.Screen name="Home" component={HomeScreen} options={{
                              tabBarLabel: '主页'
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


                if (title === 'tabBarAccessibilityLabel') {
                  return <TestSuite name='tabBarAccessibilityLabel' key={'tabBarAccessibilityLabel'}>
                    <TestCase itShould='开启系统的屏幕阅读器，读取已设置的无障碍按钮标签' tags={['C_API']}>
                      <View style={styles.container}>
                        <NavigationContainer>
                          <Tab.Navigator screenOptions={{
                            tabBarLabelStyle: {
                              textTransform: 'none'
                            }
                          }}>
                            <Tab.Screen name="Home" component={HomeScreen} options={{
                              tabBarAccessibilityLabel: '这是自定义无障碍标签主页'
                            }} />

                            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                              tabBarAccessibilityLabel: '这是自定义无障碍标签设置'
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
                          <Tab.Navigator screenOptions={{
                            tabBarLabelStyle: {
                              textTransform: 'none'
                            }
                          }}>
                            <Tab.Screen name="Home" component={HomeScreen} options={{
                              tabBarBadge: () => {
                                return <View style={styles.tabBarBadge}>
                                  <Text style={styles.tabBarBadgeText}>a</Text>
                                </View>
                              }
                            }} />

                            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                              tabBarBadge: () => {
                                return <View style={styles.tabBarBadge}>
                                  <Text style={styles.tabBarBadgeText}>3</Text>
                                </View>
                              }
                            }} />
                          </Tab.Navigator >
                        </NavigationContainer>
                      </View>
                    </TestCase>
                  </TestSuite>
                }


                if (title === 'lazy') {
                  return <TestSuite name='lazy & lazyPreloadDistance & lazyPlaceholder' key={'lazy' + state?.['lazy'].value + 'lazyPreloadDistance' + state.lazyPreloadDistance.value}>
                    <ToggleButton title={'切换lazy'} list={valueList} initValue={value} onChange={(val: any) => {
                      setState({
                        ...state,
                        [title]: {
                          ...state?.[title],
                          value: val
                        }
                      })

                      setScreens([])
                    }}></ToggleButton>
                    <ToggleButton title={'切换lazyPreloadDistance'} list={state.lazyPreloadDistance.valueList || []} initValue={state.lazyPreloadDistance.value} onChange={(val: any) => {
                      setState({
                        ...state,
                        lazyPreloadDistance: {
                          ...state.lazyPreloadDistance,
                          value: val
                        }
                      })
                    }}></ToggleButton>
                    <TestCase itShould='' tags={['C_API']}>
                      <Text>当前渲染页面：{JSON.stringify(screens)}</Text>
                      <View style={styles.container}>
                        <NavigationContainer>
                          <Tab.Navigator
                            screenOptions={{
                              lazy: state.lazy.value,
                              lazyPreloadDistance: state.lazyPreloadDistance.value,
                              lazyPlaceholder: () => {
                                return <View style={{
                                  flex: 1,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  backgroundColor: 'pink'
                                }}>
                                  <Text>加载中。。。</Text>
                                </View>
                              },
                              tabBarLabelStyle: {
                                textTransform: 'none'
                              }
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
                    <TestCase itShould='点击tabBar,触发事件'
                      tags={['C_API']}
                      initialState={false}
                      assert={({ expect, state }) => {
                        expect(state).to.be.true;
                      }}
                      arrange={({ setState }) => {
                        const Event = ({ navigation }: Props) => {

                          React.useEffect(() => {
                            const unsubscribe = navigation.addListener('tabPress', (e: any) => {
                              // Prevent default behavior
                              // e.preventDefault();
                              setState(true)

                            });

                            return unsubscribe;
                          }, [navigation]);

                          return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>点击tabBar Home，触发事件</Text>
                          </View>
                        }


                        return (
                          <View style={styles.container}>
                            <NavigationContainer>
                              <Tab.Navigator screenOptions={{
                                tabBarLabelStyle: {
                                  textTransform: 'none'
                                }
                              }}>
                                <Tab.Screen name="Home" component={Event} />
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
                    <TestCase itShould='长按tabBar,触发事件'
                      tags={['C_API']}
                      initialState={false}
                      assert={({ expect, state }) => {
                        expect(state).to.be.true;
                      }}
                      arrange={({ setState }) => {
                        const Event = ({ navigation }: Props) => {

                          React.useEffect(() => {
                            const unsubscribe = navigation.addListener('tabLongPress', (e: any) => {
                              setState(true)
                            });

                            return unsubscribe;
                          }, [navigation]);

                          return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>长按tabBar Home，触发事件</Text>
                          </View>
                        }


                        return (
                          <View style={styles.container}>
                            <NavigationContainer>
                              <Tab.Navigator screenOptions={{
                                tabBarLabelStyle: {
                                  textTransform: 'none'
                                }
                              }}>
                                <Tab.Screen name="Home" component={Event} />
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
    width: 150
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
  tabBarIndicator: {
    backgroundColor: 'red',
    position: 'absolute',
    left: 50,
    top: '50%',
    width: 20,
    height: 20,
    alignItems: 'center',
    display: 'flex',
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


export default MaterialTopTabsExample