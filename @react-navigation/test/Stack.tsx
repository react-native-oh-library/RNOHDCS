
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
  Animated,
  Image,

} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, HeaderStyleInterpolators, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';
import { getHeaderTitle } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyImage from './Images'

import type {
  StackCardInterpolatedStyle,
  StackCardInterpolationProps,
  StackCardStyleInterpolator,
  StackHeaderInterpolatedStyle,
  StackHeaderInterpolationProps,
  StackHeaderProps,
  StackHeaderStyleInterpolator,
  StackNavigationEventMap,
  StackNavigationOptions,
  StackNavigationProp,
  StackScreenProps,
  TransitionPreset,
} from '@react-navigation/stack';

type Props = StackScreenProps<ParamListBase>;

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

export const StackExamples = () => {
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
        <Button title='Go to Notifications' onPress={() => {
          navigation.navigate('Notifications', {
            itemId: 86,
          })
        }}></Button>
      </View>
    );
  }
  function NotificationsScreen({ navigation, route }: Props) {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text>Notifications! itemId: {JSON.stringify(route?.params?.itemId)}</Text>
          <TextInput style={styles.textInput} ></TextInput>
          <Button title='Go to Settings' onPress={() => {
            navigation.navigate('Settings')
          }}></Button>
          <Button title='Go back' onPress={() => {
            navigation.goBack()
          }}></Button>
          <Button
            title="Go to Notifications... again"
            onPress={() =>
              navigation.push('Notifications', {
                itemId: Math.floor(Math.random() * 100),
              })
            }
          />
          <Button
            title="replace Notifications"
            onPress={() =>
              navigation.replace('Notifications', {
                itemId: Math.floor(Math.random() * 100),
              })
            }
          />
        </View>

      </ScrollView>
    );
  }

  function SettingsScreen({ navigation }: Props) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button title='Go to Home' onPress={() => {
          navigation.navigate('Home')
        }}></Button>
        {
          navigation.canGoBack() ? <Button title='Go back' onPress={() => {
            navigation.goBack()
          }}></Button> : null
        }

      </View>
    );
  }


  function HomeScreenNest({ navigation }: Props) {
    const parentNavigation = navigation.getParent<StackNavigationProp<ParamListBase>>('uniId');
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
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreenNest"
          component={HomeScreenNest}

        />
      </Tab.Navigator>
    );
  }

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();


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
      extraOptions?: object
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




      // detachInactiveScreens: {
      //     tip: 'react-native-screens功能',
      //     description: '计算未激活的页面，以使用react-native-screens功能节省性能',
      //     value: true,
      //     valueList: [
      //         false,
      //         true,
      //     ],
      // },



      title: {
        type: 'custom'
      },

      // todo
      cardShadowEnabled: {
        description: 'card阴影是否启用，切换页面时，左侧会有很浅的阴影',
        options: true,
        value: true,
        valueList: [
          false,
          true,
        ],
        extraOptions: {
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }
      },

      cardOverlayEnabled: {
        description: 'card遮罩是否启用,加个粉色遮罩',
        options: true,
        value: true,
        valueList: [
          false,
          true,
        ],
        extraOptions: {
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          cardOverlay: () => <View style={[styles.absolute, { backgroundColor: 'pink', opacity: 0.5 }]}></View>

        }
      },

      cardOverlay: {
        type: 'preview',
        description: 'card遮罩样式',
        props: {
          screenOptions: {
            cardOverlay: () => <View style={[styles.absolute, { backgroundColor: 'pink', opacity: 0.5 }]}></View>
          }
        }
      },

      cardStyle: {
        type: 'custom',
        description: 'card样式',
        value: {
          title: '{backgroundColor:red}',
          value: {
            backgroundColor: 'red'
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
          {
            title: '{borderColor:pink,borderWidth:3}',
            value: {
              borderColor: 'pink',
              borderWidth: 3
            }
          },
          {
            title: '{borderColor:red,borderWidth:10}',
            value: {
              borderColor: 'red',
              borderWidth: 10
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
      },

      presentation: {
        description: '屏幕呈现方式',
        options: true,
        value: 'card',
        valueList: [
          'card',
          'modal',
          'transparentModal'
        ],
      },

      animationEnabled: {
        description: '是否启用切换屏幕的动画',
        options: true,
        value: true,
        valueList: [
          false,
          true,
        ]
      },

      animationTypeForReplace: {
        description: '页面replace时的动画，在Notifacations页点击replace按钮查看效果',
        options: true,
        value: 'push',
        valueList: [
          'pop',
          'push',
        ],
      },

      gestureEnabled: {
        description: '启用关闭页面的手势',
        options: true,
        value: false,
        valueList: [
          false,
          true,
        ],
      },

      gestureResponseDistance: {
        description: '手势距离边缘的响应距离',
        options: true,
        value: 50,
        valueList: [
          30,
          50,
          100,
          300
        ],
        extraOptions: {
          gestureEnabled: true
        }
      },

      gestureVelocityImpact: {
        description: '手势速度相关的数字',
        options: true,
        value: 0.3,
        valueList: [
          0.1,
          0.3,
          0.7,
          1
        ],
        extraOptions: {
          gestureEnabled: true
        }
      },

      gestureDirection: {
        description: '手势方向',
        options: true,
        value: 'horizontal',
        valueList: [
          'horizontal',
          'horizontal-inverted',
          'vertical',
        ],
        extraOptions: {
          gestureEnabled: true
        }
      },

      transitionSpec: {
        description: '页面过渡动画的配置',
        options: true,
        value: undefined,
        valueList: [
          undefined,
          {
            title: 'Slow',
            value: {
              open: {
                animation: 'timing',
                config: {
                  duration: 1000,
                },
              },
              close: {
                animation: 'timing',
                config: {
                  duration: 1000,
                },
              },
            }
          },
          {
            title: 'Fast',
            value: {
              open: {
                animation: 'timing',
                config: {
                  duration: 100,
                },
              },
              close: {
                animation: 'timing',
                config: {
                  duration: 100,
                },
              },
            }
          },
        ],
      },


      cardStyleInterpolator: {
        description: 'card的插值样式',
        options: true,
        value: undefined,
        valueList: [
          undefined,
          {
            title: 'forBottomSheetAndroid',
            value: CardStyleInterpolators.forBottomSheetAndroid
          },
          {
            title: 'forFadeFromBottomAndroid',
            value: CardStyleInterpolators.forFadeFromBottomAndroid
          },
          {
            title: 'forRevealFromBottomAndroid ',
            value: CardStyleInterpolators.forRevealFromBottomAndroid
          },
        ],
      },

      headerStyleInterpolator: {
        description: 'header的插值样式',
        options: true,
        value: undefined,
        valueList: [
          undefined,
          {
            title: 'forFade',
            value: HeaderStyleInterpolators.forFade
          },
          {
            title: 'forNoAnimation',
            value: HeaderStyleInterpolators.forNoAnimation
          },
          {
            title: 'forSlideLeft',
            value: HeaderStyleInterpolators.forSlideLeft
          },
        ],
        extraOptions: {
          headerMode: 'float'
        }
      },

      // keyboardHandlingEnabled: {
      //     description: '导航到新页面时是否关闭键盘',
      //     options: true,
      //     value: true,
      //     valueList: [
      //         false,
      //         true,
      //     ],
      // },


      // detachPreviousScreen: {
      //     description: '计算之前的页面,以使用react-native-screen机制节省性能',
      //     options: true,
      //     value: true,
      //     valueList: [
      //         false,
      //         true,
      //     ],
      //     extraOptions: {
      //         detachInactiveScreens: false
      //     }
      // },


      // freezeOnBlur: {
      //     platform: 'ios,android',
      //     description: '是否阻止非活动屏幕重新渲染，这是react-native-screen的机制',
      //     options: true,
      //     value: false,
      //     valueList: [
      //         false,
      //         true,
      //     ],
      // },



      header: {
        type: 'preview',
        description: '自定义头部',
        props: {
          screenOptions: {
            header: ({ navigation, route, options, back }: StackHeaderProps) => {
              const title = getHeaderTitle(options, route.name);

              return (
                <View style={[{ display: 'flex', alignItems: 'center', flexDirection: 'row' }]}>
                  {
                    back ? <Button title='返回' onPress={navigation.goBack} /> : undefined
                  }
                  <Text>{title}</Text>
                </View>
              );
            }
          }

        }
      },


      headerMode: {
        description: 'header模式,单独渲染还是和屏幕一体',
        options: true,
        value: undefined,
        valueList: [
          undefined,
          'float',
          'screen',
        ],
      },

      headerShown: {
        description: 'header是否显示',
        options: true,
        value: true,
        valueList: [
          true,
          false,
        ],
      },

      headerBackAllowFontScaling: {
        description: 'header的返回按钮是否随系统字体设置而变换',
        options: true,
        value: false,
        valueList: [
          true,
          false,
        ],
      },

      headerBackAccessibilityLabel: {
        description: '返回按钮的无障碍标签，打开系统功能以查看',
        type: 'preview',

        props: {
          screenOptions: {
            headerBackAccessibilityLabel: '自定义返回'

          }
        },
      },

      headerBackImage: {
        type: 'preview',
        description: '头部返回的图片',
        props: {
          screenOptions: {
            headerBackImage: () => {
              return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={MyImage} style={{ height: 20, width: 20 }} />
              </View>
            },
          }
        }
      },
      headerBackTitle: {

        type: 'preview',
        description: '头部返回标题',
        props: {
          screenOptions: {
            headerBackTitle: '返回',
            headerBackTitleVisible: true,
          }
        }
      },
      headerBackTitleVisible: {

        description: '头部返回标题是否显示',
        options: true,
        value: true,
        valueList: [
          true,
          false,
        ],
        extraOptions: {
          headerBackTitle: '返回'
        }
      },


      headerTruncatedBackTitle: {
        type: 'preview',

        description: 'headerBackTitle不合适时，作为替代显示,示例中会显示trun',
        props: {
          screenOptions: {
            headerBackTitle: '返回111111111111111111111111',
            headerTruncatedBackTitle: 'trun',
            headerBackTitleVisible: true,
          }
        }
      },

      headerBackTitleStyle: {
        type: 'custom',
        description: '头部返回标题的样式',
        value: {
          title: '{color:red}',
          value: {
            color: 'red'
          }
        },
        valueList: [
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
      },

      transitionStart: {
        type: 'custom'
      },
      transitionEnd: {
        type: 'custom'
      },
      gestureStart: {
        platform: 'ios,android',
        type: 'custom'
      },
      gestureEnd: {
        platform: 'ios,android',
        type: 'custom'
      },
      gestureCancel: {
        platform: 'ios,android',
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
            Object.entries(state).map(([title, obj], index) => {
              let { platform, testName, type, props = {}, value, description = '', valueList = [], options, extraOptions } = obj
              if (index !== currentIndex) {
                return <ComButton index={index} title={title} key={title} />
              }
              let initOptions = {
                screenOptions: {

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
                          {...initOptions}
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

                let { screenOptions = {}, ...rest } = props

                // console.log('props', JSON.stringify(props))

                initOptions = {
                  screenOptions: {
                    ...initOptions.screenOptions,
                    ...screenOptions,
                  },
                  ...rest
                }

                return <TestSuite name={(platform ? `[${platform}] ` : '') + (testName || title)} key={title}>
                  <TestCase itShould={description} tags={['C_API']}>
                    <View style={styles.container}>
                      <NavigationContainer>
                        <Stack.Navigator
                          {...initOptions}
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
                if (title === 'id') {
                  return <TestSuite name='id' key={'id'}>
                    <TestCase itShould='navigator的id,子路由通过id可找到父路由'
                      tags={['C_API']}
                    >
                      <View style={styles.container}>
                        <NavigationContainer>
                          <Stack.Navigator id='uniId'>
                            <Stack.Screen name="Home" component={HomeNest} />
                            <Stack.Screen name="Notifications" component={NotificationsScreen} />
                            <Stack.Screen name="Settings" component={SettingsScreen} />
                          </Stack.Navigator>
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
                          <Stack.Navigator>
                            <Stack.Screen name="Home" component={HomeScreen} options={{
                              title: '主页'
                            }} />
                            <Stack.Screen name="Notifications" component={NotificationsScreen} options={{
                              title: '通知'
                            }} />
                            <Stack.Screen name="Settings" component={SettingsScreen} options={{
                              title: '设置'
                            }} />
                          </Stack.Navigator >
                        </NavigationContainer>
                      </View>
                    </TestCase>
                  </TestSuite>
                }

                if (title === 'cardStyle') {
                  return <TestSuite name='cardStyle' key={'cardStyle'}>
                    <ToggleButton title={'切换' + title} list={valueList} initValue={value} onChange={(val: any) => {
                      setState({
                        ...state,
                        cardStyle: {
                          ...state.cardStyle,
                          value: {
                            title: val.title,
                            value: val.value
                          }
                        }
                      })
                    }}></ToggleButton>
                    <TestCase itShould='页面名称，现改成中文' tags={['C_API']}>
                      <View style={styles.container}>
                        <NavigationContainer>
                          <Stack.Navigator screenOptions={{
                            cardStyle: state.cardStyle.value.value,
                          }}>
                            <Stack.Screen name="Home" component={HomeScreen} />
                            <Stack.Screen name="Notifications" component={NotificationsScreen} />
                            <Stack.Screen name="Settings" component={SettingsScreen} />
                          </Stack.Navigator >
                        </NavigationContainer>
                      </View>
                    </TestCase>
                  </TestSuite>
                }

                if (title === 'headerBackTitleStyle') {
                  return <TestSuite name='headerBackTitleStyle' key={'headerBackTitleStyle'}>
                    <ToggleButton title={'切换' + title} list={valueList} initValue={value} onChange={(val: any) => {
                      setState({
                        ...state,
                        headerBackTitleStyle: {
                          ...state.headerBackTitleStyle,
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
                          <Stack.Navigator screenOptions={{
                            headerBackTitleVisible: true,
                            headerBackTitle: '返回',
                            headerBackTitleStyle: state.headerBackTitleStyle.value.value,
                          }}>
                            <Stack.Screen name="Home" component={HomeScreen} />
                            <Stack.Screen name="Notifications" component={NotificationsScreen} />
                            <Stack.Screen name="Settings" component={SettingsScreen} />
                          </Stack.Navigator >
                        </NavigationContainer>
                      </View>
                    </TestCase>
                  </TestSuite>
                }

                if (title === 'transitionStart') {
                  return <TestSuite name='transitionStart' key={'transitionStart'}>
                    <TestCase itShould='切换页面，动画开始变换时,由Notifications返回时可看到效果'
                      tags={['C_API']}
                      initialState={false}
                      assert={({ expect, state }) => {
                        expect(state).to.be.true;
                      }}
                      arrange={({ setState }) => {
                        const EventNotifications = (props: Props) => {
                          const { navigation } = props;
                          React.useEffect(() => {
                            const unsubscribe = navigation.addListener('transitionStart', (e: any) => {
                              console.log('e.data.closing  ', e.data.closing + '')
                              setState(true)
                            });

                            return unsubscribe;
                          }, [navigation]);
                          return <NotificationsScreen {...props} />
                        }

                        return (
                          <View style={styles.container}>
                            <NavigationContainer>
                              <Stack.Navigator>
                                <Stack.Screen name="Home" component={HomeScreen} />
                                <Stack.Screen name="Notifications" component={EventNotifications} />
                                <Stack.Screen name="Settings" component={SettingsScreen} />
                              </Stack.Navigator >
                            </NavigationContainer>
                          </View>
                        )
                      }}>
                    </TestCase>
                  </TestSuite>
                }



                if (title === 'transitionEnd') {
                  return <TestSuite name='transitionEnd' key={'transitionEnd'}>
                    <TestCase itShould='切换页面，动画结束变换时，进入Notifications时可看到效果'
                      tags={['C_API']}
                      initialState={false}
                      assert={({ expect, state }) => {
                        expect(state).to.be.true;
                      }}
                      arrange={({ setState }) => {
                        const EventNotifications = (props: Props) => {
                          const { navigation } = props;
                          React.useEffect(() => {
                            const unsubscribe = navigation.addListener('transitionEnd', (e: any) => {
                              setState(true)
                            });

                            return unsubscribe;
                          }, [navigation]);
                          return <NotificationsScreen {...props} />
                        }

                        return (
                          <View style={styles.container}>
                            <NavigationContainer>
                              <Stack.Navigator>
                                <Stack.Screen name="Home" component={HomeScreen} />
                                <Stack.Screen name="Notifications" component={EventNotifications} />
                                <Stack.Screen name="Settings" component={SettingsScreen} />
                              </Stack.Navigator >
                            </NavigationContainer>
                          </View>
                        )
                      }}>
                    </TestCase>
                  </TestSuite>
                }

                if (title === 'gestureStart') {
                  return <TestSuite name='gestureStart' key={'gestureStart'}>
                    <TestCase itShould='切换页面，手势开始时'
                      tags={['C_API']}
                      initialState={false}
                      assert={({ expect, state }) => {
                        expect(state).to.be.true;
                      }}
                      arrange={({ setState }) => {
                        const EventNotifications = (props: Props) => {
                          const { navigation } = props;
                          React.useEffect(() => {
                            const unsubscribe = navigation.addListener('gestureStart', (e: any) => {
                              setState(true)
                            });

                            return unsubscribe;
                          }, [navigation]);
                          return <NotificationsScreen {...props} />
                        }

                        return (
                          <View style={styles.container}>
                            <NavigationContainer>
                              <Stack.Navigator screenOptions={{
                                gestureEnabled: true
                              }}>
                                <Stack.Screen name="Home" component={HomeScreen} />
                                <Stack.Screen name="Notifications" component={EventNotifications} />
                                <Stack.Screen name="Settings" component={SettingsScreen} />
                              </Stack.Navigator >
                            </NavigationContainer>
                          </View>
                        )
                      }}>
                    </TestCase>
                  </TestSuite>
                }

                if (title === 'gestureEnd') {
                  return <TestSuite name='gestureEnd' key={'gestureEnd'}>
                    <TestCase itShould='切换页面，动画开始变换时'
                      tags={['C_API']}
                      initialState={false}
                      assert={({ expect, state }) => {
                        expect(state).to.be.true;
                      }}
                      arrange={({ setState }) => {
                        const EventNotifications = (props: Props) => {
                          const { navigation } = props;
                          React.useEffect(() => {
                            const unsubscribe = navigation.addListener('gestureEnd', (e: any) => {
                              setState(true)
                            });

                            return unsubscribe;
                          }, [navigation]);
                          return <NotificationsScreen {...props} />
                        }

                        return (
                          <View style={styles.container}>
                            <NavigationContainer>
                              <Stack.Navigator screenOptions={{
                                gestureEnabled: true
                              }}>
                                <Stack.Screen name="Home" component={HomeScreen} />
                                <Stack.Screen name="Notifications" component={EventNotifications} />
                                <Stack.Screen name="Settings" component={SettingsScreen} />
                              </Stack.Navigator >
                            </NavigationContainer>
                          </View>
                        )
                      }}>
                    </TestCase>
                  </TestSuite>
                }

                if (title === 'gestureCancel') {
                  return <TestSuite name='gestureCancel' key={'gestureCancel'}>
                    <TestCase itShould='切换页面，手势取消时'
                      tags={['C_API']}
                      initialState={false}
                      assert={({ expect, state }) => {
                        expect(state).to.be.true;
                      }}
                      arrange={({ setState }) => {
                        const EventNotifications = (props: Props) => {
                          const { navigation } = props;
                          React.useEffect(() => {
                            const unsubscribe = navigation.addListener('gestureCancel', (e: any) => {
                              setState(true)
                            });

                            return unsubscribe;
                          }, [navigation]);
                          return <NotificationsScreen {...props} />
                        }

                        return (
                          <View style={styles.container}>
                            <NavigationContainer>
                              <Stack.Navigator screenOptions={{
                                gestureEnabled: true
                              }}>
                                <Stack.Screen name="Home" component={HomeScreen} />
                                <Stack.Screen name="Notifications" component={EventNotifications} />
                                <Stack.Screen name="Settings" component={SettingsScreen} />
                              </Stack.Navigator >
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
    height: 350,
    overflow: 'hidden'
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


export default StackExamples