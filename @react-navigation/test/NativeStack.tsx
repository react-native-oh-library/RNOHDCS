
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
  Image
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getHeaderTitle } from '@react-navigation/elements';
import { useNavigation, useNavigationState, useRoute } from '@react-navigation/core';
import MyImage from './Images'
import type {
  NativeStackHeaderProps,
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import type * as HeaderTypes from '@react-navigation/elements';


type Props = NativeStackScreenProps<ParamListBase>;
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

export const NativeStackExamples = () => {
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
            gap: 10,
          }}>
            {

              list.map((key: any, index: number) => {
                let title = key, value = key;


                if (Object.prototype.toString.call(key).slice(8, -1) === 'Object') {
                  title = key.title;
                  value = key.value
                }
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
        <Text>Settings!   </Text>
        {
          navigation.canGoBack() ?
            <Button title='Go back' onPress={() => {
              navigation.goBack()
            }}></Button>
            :
            <Button title='Go Home' onPress={() => {
              navigation.navigate('Home')
            }}></Button>
        }
      </View>
    );
  }


  function HomeScreenNest({ navigation }: Props) {
    const parentNavigation = navigation.getParent<NativeStackNavigationProp<ParamListBase>>('uniId');
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
            headerShown: true
          }}
        />
      </HomeStack.Navigator>
    );
  }



  const HomeStack = createStackNavigator();
  const Stack = createNativeStackNavigator();

  interface State {
    [propName: string]: {
      platform?: string,
      testName?: '',
      type?: 'custom' | 'preview',
      description?: string,
      props?: {
        screenOptions?: {},
        [propName: string]: any
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

      title: {
        type: 'custom'
      },

      // //ios >= 14 + react-native-screens
      // headerBackButtonMenuEnabled: {
      //     tip: 'ios >= 14 + react-native-screens',
      //     platform: 'ios',
      //     description: '长按展示菜单',
      //     options: true,
      //     value: true,
      //     valueList: [
      //         false,
      //         true,
      //     ],
      // },
      //todo
      // headerBackVisible: {
      //     description: '展示头部返回按钮',
      //     options: true,
      //     value: true,
      //     valueList: [
      //         false,
      //         true,
      //     ],
      // },
      // //ios
      // headerBackTitle: {
      //     platform: 'ios',
      //     type: 'preview',
      //     description: 'ios上用于返回的文字',
      //     props: {
      //         screenOptions: {
      //             headerBackTitle: '返回',
      //             headerBackTitleVisible: true,
      //         }
      //     }
      // },

      // //ios
      // headerBackTitleVisible: {
      //     platform: 'ios',
      //     description: '是否展示ios上用于返回的文字',
      //     options: true,
      //     value: true,
      //     valueList: [
      //         false,
      //         true,
      //     ],
      //     extraOptions: {
      //         headerBackTitle: '返回',
      //     }
      // },


      // //ios
      // headerBackTitleStyle: {
      //     platform: 'ios',
      //     description: 'ios上用于返回的文字的样式，设置字体大小',
      //     options: true,
      //     value: {
      //         title: 10,
      //         value: {
      //             fontSize: 10,
      //         }
      //     },
      //     valueList: [
      //         {
      //             title: 10,
      //             value: {
      //                 fontSize: 10,
      //             }
      //         },
      //         {
      //             title: 11,
      //             value: {
      //                 fontSize: 10,
      //             }
      //         }, {
      //             title: 12,
      //             value: {
      //                 fontSize: 10,
      //             }
      //         }
      //     ],
      //     extraOptions: {
      //         headerBackTitle: '返回',
      //         headerBackTitleVisible: true,
      //     }
      // },


      headerBackImageSource: {
        type: 'preview',
        description: '头部返回的图标源,替换图标',
        props: {
          screenOptions: {
            headerBackImageSource: MyImage,
          }
        }
      },


      // //ios
      // headerLargeStyle: {
      //     platform: 'ios',
      //     type: 'custom'
      // },

      // //ios
      // headerLargeTitle: {
      //     platform: 'ios',
      //     description: '启用头部大图标，样式设置为红色背景',
      //     testName: 'headerLargeStyle & headerLargeTitle',
      //     options: true,
      //     value: true,
      //     valueList: [
      //         false,
      //         true,
      //     ],
      //     extraOptions: {
      //         headerLargeStyle: {
      //             backgroundColor: 'red'
      //         },
      //     }
      // },




      // //ios
      // headerLargeTitleShadowVisible: {
      //     platform: 'ios',
      //     description: '头部大图标阴影是否可见',
      //     options: true,
      //     value: true,
      //     valueList: [
      //         false,
      //         true,
      //     ],
      //     extraOptions: {
      //         headerLargeTitle: true,
      //     }
      // },

      // //ios
      // headerLargeTitleStyle: {
      //     platform: 'ios',
      //     description: '头部大图标标题样式,设置红色字体',
      //     type: 'preview',
      //     props: {
      //         screenOptions: {
      //             headerLargeTitle: true,
      //             headerLargeTitleStyle: {
      //                 color: 'red'
      //             }
      //         }
      //     }
      // },

      headerShown: {
        description: '是否显示标题',
        options: true,
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
          screenOptions: {
            headerStyle: {
              backgroundColor: 'pink'
            },
          }
        }
      },
      headerStyle_red: {
        description: '标题样式,设置红色背景',
        type: 'preview',
        props: {
          screenOptions: {
            headerStyle: {
              backgroundColor: 'red'
            },
          }
        }
      },

      headerShadowVisible: {
        description: '是否显示标题阴影',
        options: true,
        value: true,
        valueList: [
          false,
          true,
        ],
      },

      headerTransparent: {
        description: '标题是否透明',
        options: true,
        value: false,
        valueList: [
          false,
          true,
        ],
      },


      // //ios
      // headerBlurEffect: {
      //     platform: 'ios',
      //     description: '标题是否透明',
      //     options: true,
      //     value: 'extraLight',
      //     valueList: [
      //         'extraLight',
      //         'light',
      //         'dark',
      //         'prominent'
      //     ],
      //     extraOptions: {
      //         headerTransparent: true
      //     }
      // },



      headerBackground: {
        type: 'preview',
        description: '头部背景元素,添加一个图片背景',
        props: {
          screenOptions: {
            headerBackground: () => {
              return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={MyImage} style={{ height: 20, width: 20 }} />
              </View>
            },
          }
        }
      },

      headerTintColor: {
        type: 'preview',
        description: '包含title和backbutton的颜色,改成pink',
        props: {
          screenOptions: {
            headerTintColor: 'pink'
          }
        }
      },

      headerTintColor_red: {
        type: 'preview',
        description: '包含title和backbutton的颜色,改成red',
        props: {
          screenOptions: {
            headerTintColor: 'red'
          }
        }
      },
      headerLeft: {
        type: 'preview',
        description: '渲染左侧按钮',
        props: {
          screenOptions: {
            headerLeft: (props: HeaderTypes.HeaderButtonProps) => {
              const navigation = useNavigation()
              return props.canGoBack ? (
                <View><Button title={'back'} onPress={() => {
                  navigation.goBack()
                }}></Button></View>
              ) : null
            }
          }
        }
      },

      headerRight: {
        type: 'preview',
        description: '渲染右侧',
        props: {
          screenOptions: {
            headerRight: (props: HeaderTypes.HeaderBackButtonProps) => {
              const navigation = useNavigation()
              return props.canGoBack ? (
                <View><Button title={'back'} onPress={() => {
                  navigation.goBack()
                }}></Button></View>
              ) : null
            }
          }
        }
      },

      headerTitle: {
        type: 'custom',
        description: '头部标题',
      },
      headerTitleAlign: {
        description: '头部标题对其方式',
        options: true,
        value: 'left',
        valueList: ['left', 'center']
      },

      headerTitleStyle: {
        description: '头部标题样式',
        type: 'custom',
        title: 'headerTitleStyle',
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

      // //这是react-native-screens的功能，不支持headerSearchBarOptions相关属性
      // headerSearchBarOptions: {
      //     tip: '这是react-native-screens的功能，不支持headerSearchBarOptions相关属性',
      //     type: 'preview',
      //     description: '头部搜索栏',
      //     props: {
      //         headerSearchBarOptions: {
      //             autoCapitalize: 'none'
      //         }
      //     }
      // },


      header: {
        type: 'preview',
        description: '自定义头部',
        props: {
          screenOptions: {
            header: ({ navigation, route, options, back }: NativeStackHeaderProps) => {
              const title = getHeaderTitle(options, route.name);

              return (
                <View style={[{ display: 'flex', alignItems: 'center', flexDirection: 'row' }]}>
                  {
                    back ? <Button title='返回' onPress={navigation.goBack} /> : undefined
                  }
                  <Text style={options.headerStyle}>{title}</Text>
                </View>
              );
            }
          }

        }
      },


      // statusBarAnimation: {
      //     tip: 'react-native-screen',
      //     platform: 'ios,android',
      //     description: '状态栏动画',
      //     options: true,
      //     value: 'none',
      //     valueList: [
      //         'fade',
      //         'none',
      //         'slide',
      //     ],
      //     extraOptions: {
      //         statusBarHidden: false
      //     }
      // },


      // statusBarHidden: {
      //     tip: 'react-native-screen',
      //     platform: 'ios,android',
      //     description: '状态栏隐藏',
      //     options: true,
      //     value: false,
      //     valueList: [
      //         false,
      //         true,
      //     ],
      // },


      // statusBarColor: {
      //     platform: 'android',
      //     description: '状态栏颜色',
      //     options: true,
      //     value: undefined,
      //     valueList: [
      //         undefined,
      //         'red',
      //     ],
      // },

      // statusBarTranslucent: {
      //     platform: 'android',
      //     description: '状态栏半透明',
      //     options: true,
      //     value: false,
      //     valueList: [
      //         false,
      //         true,
      //     ],
      // },


      contentStyle: {
        type: 'custom',
        description: '页面样式',
        title: 'contentStyle',
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
              borderRadius:10
            }
          },
          {
            title: '{borderRadius:20,borderColor:red,borderWidth:2}',
            value: {
              borderColor: 'red',
              borderWidth: 2,
              borderRadius:20
            }
          },
          {
            title: '{opacity:0.1}',
            value: {
              opacity:0.1
            }
          },
          {
            title: '{opacity:0.5}',
            value: {
              opacity:0.5
            }
          },
        ]

      },


      // customAnimationOnGesture: {
      //     platform: 'ios',
      //     description: '关闭页面的手势的动画',
      //     options: true,
      //     value: false,
      //     valueList: [
      //         false,
      //         true,
      //     ],
      // },

      // fullScreenGestureEnabled: {
      //     platform: 'ios',
      //     description: '关闭页面的手势是否应用于整个页面',
      //     options: true,
      //     value: false,
      //     valueList: [
      //         false,
      //         true,
      //     ],
      // },

      // gestureEnabled: {
      //     platform: 'ios',
      //     description: '启用关闭页面的手势',
      //     options: true,
      //     value: true,
      //     valueList: [
      //         false,
      //         true,
      //     ],
      // },


      // animationTypeForReplace: {
      //     tip: '使用了react-native-screens,系统代码已被改造',
      //     platform: 'ios,android',
      //     description: '页面replace时的动画',
      //     options: true,
      //     value: 'pop',
      //     valueList: [
      //         'pop',
      //         'push',
      //     ],
      // },

      // animation: {
      //     tip: '使用了react-native-screens,系统代码已被改造',
      //     platform: 'ios,android',
      //     description: '页面pushed 或 popped时的动画',
      //     options: true,
      //     value: 'default',
      //     valueList: [
      //         'default',
      //         'fade',
      //         'flip',
      //         'none',
      //     ],
      // },

      presentation: {
        description: '屏幕呈现方式',
        options: true,
        value: 'card',
        valueList: [
          'card',
          'transparentModal'
        ],
      },

      // orientation: {
      //     tip: '使用了react-native-screens,系统代码已被改造',
      //     platform: 'ios,android',
      //     description: '显示方向',
      //     options: true,
      //     value: 'default',
      //     valueList: [
      //         'default',
      //         'all',
      //         'portrait'
      //     ],
      // },

      // autoHideHomeIndicator: {
      //     platform: 'ios',
      //     description: '自动隐藏home的指示器',
      //     options: true,
      //     value: false,
      //     valueList: [
      //         false,
      //         true,
      //     ],
      // },

      // gestureDirection: {
      //     platform: 'ios',
      //     description: '手势方向',
      //     options: true,
      //     value: 'vertical',
      //     valueList: [
      //         'vertical',
      //         'horizontal',
      //     ],

      // },


      // animationDuration: {
      //     platform: 'ios',
      //     description: '动画时长',
      //     options: true,
      //     value: 350,
      //     valueList: [
      //         150,
      //         350,
      //         1000,
      //     ],
      //     extraOptions: {
      //         animation: 'fade'
      //     }
      // },


      // navigationBarColor: {
      //     tip: '使用了react-native-screens,系统代码已被改造',
      //     platform: 'android',
      //     description: '导航栏颜色',
      //     options: true,
      //     value: undefined,
      //     valueList: [
      //         undefined,
      //         'red',
      //         'blue',
      //     ],
      // },

      // navigationBarHidden: {
      //     tip: '使用了react-native-screens,系统代码已被改造',
      //     platform: 'android',
      //     description: '导航栏隐藏',
      //     options: true,
      //     value: false,
      //     valueList: [
      //         false,
      //         true,
      //     ],
      // },

      // freezeOnBlur: {
      //     tip: '使用了react-native-screens,系统代码已被改造',
      //     platform: 'android',
      //     description: '是否阻止非活动页面重新渲染',
      //     options: true,
      //     value: false,
      //     valueList: [
      //         false,
      //         true,
      //     ],
      // },


      // transitionStart: {
      //     platform: 'ios,android',
      //     type: 'custom'
      // },
      // transitionEnd: {
      //     platform: 'ios,android',
      //     type: 'custom'
      // },
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
                  // tabBarLabelStyle: { textTransform: 'none' }
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
                let { screenOptions = {}, ...rest } = props || {}
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
                if (title === 'headerTitleStyle') {
                  return <TestSuite name={title} key={title}>
                    <ToggleButton title={'切换' + title} list={valueList} initValue={value} onChange={(val: any) => {
                      setState({
                        ...state,
                        headerTitleStyle: {
                          ...state.headerTitleStyle,
                          value: {
                            title: val.title,
                            value: val.value
                          }
                        }
                      })
                    }}></ToggleButton>
                    <TestCase itShould='头部标题样式' tags={['C_API']}>
                      <View style={styles.container}>
                        <NavigationContainer>
                          <Stack.Navigator screenOptions={{
                            headerTitleStyle: state.headerTitleStyle.value.value,
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
                if (title === 'contentStyle') {
                  return <TestSuite name={title} key={title}>
                    <ToggleButton title={'切换' + title} list={valueList} initValue={value} onChange={(val: any) => {
                      setState({
                        ...state,
                        contentStyle: {
                          ...state.contentStyle,
                          value: {
                            title: val.title,
                            value: val.value
                          }
                        }
                      })
                    }}></ToggleButton>
                    <TestCase itShould='头部标题样式' tags={['C_API']}>
                      <View style={styles.container}>
                        <NavigationContainer>
                          <Stack.Navigator screenOptions={{
                            contentStyle: state.contentStyle.value.value,
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

                if (title === 'headerTitle') {
                  return <TestSuite name='title' key={'headerTitle'}>
                    <TestCase itShould='页面名称，现改成中文' tags={['C_API']}>
                      <View style={styles.container}>
                        <NavigationContainer>
                          <Stack.Navigator>
                            <Stack.Screen name="Home" component={HomeScreen} options={{
                              headerTitle: '主页1'
                            }} />
                            <Stack.Screen name="Notifications" component={NotificationsScreen} options={{
                              headerTitle: '通知1'
                            }} />
                            <Stack.Screen name="Settings" component={SettingsScreen} options={{
                              headerTitle: '设置1'
                            }} />
                          </Stack.Navigator >
                        </NavigationContainer>
                      </View>
                    </TestCase>
                  </TestSuite>
                }

                if (title === 'transitionStart') {
                  return <TestSuite name='[ios,android]transitionStart' key={'transitionStart'}>
                    <TestCase itShould='切换页面，动画开始变换时'
                      tags={['C_API']}
                      initialState={false}
                      assert={({ expect, state }) => {
                        expect(state).to.be.true;
                      }}
                      arrange={({ setState }) => {
                        const Home = ({ navigation }: Props) => {
                          return (
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                              <Text>Home!</Text>
                              <Button title='Go to Details' onPress={() => {
                                navigation.navigate('Details')
                              }}></Button>
                            </View>
                          );
                        }

                        const Event = ({ navigation }: Props) => {
                          React.useEffect(() => {
                            const unsubscribe = navigation.addListener('transitionStart', (e: any) => {
                              setState(true)
                            });

                            return unsubscribe;
                          }, [navigation]);

                          return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>切换页面，触发事件</Text>
                            <Button
                              title="Go to Details... again"
                              onPress={() =>
                                navigation.push('Details', {
                                  itemId: Math.floor(Math.random() * 100),
                                })
                              }
                            />
                            <Button title='Go back' onPress={() => {
                              navigation.goBack()
                            }}></Button>
                          </View>

                        }

                        return (
                          <View style={styles.container}>
                            <NavigationContainer>
                              <Stack.Navigator>
                                <Stack.Screen name="Home" component={Home} />
                                <Stack.Screen name="Details" component={Event} />
                              </Stack.Navigator >
                            </NavigationContainer>
                          </View>
                        )
                      }}>

                    </TestCase>
                  </TestSuite>
                }


                if (title === 'transitionEnd') {
                  return <TestSuite name='[ios,android]transitionEnd' key={'transitionEnd'}>
                    <TestCase itShould='切换页面，动画结束变换时'
                      tags={['C_API']}
                      initialState={false}
                      assert={({ expect, state }) => {
                        expect(state).to.be.true;
                      }}
                      arrange={({ setState }) => {
                        const Home = ({ navigation }: Props) => {
                          return (
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                              <Text>Home!</Text>
                              <Button title='Go to Details' onPress={() => {
                                navigation.navigate('Details')
                              }}></Button>
                            </View>
                          );
                        }

                        const Event = ({ navigation }: Props) => {
                          React.useEffect(() => {
                            const unsubscribe = navigation.addListener('transitionEnd', (e: any) => {
                              setState(true)
                            });

                            return unsubscribe;
                          }, [navigation]);

                          return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>切换页面，触发事件</Text>
                            <Button
                              title="Go to Details... again"
                              onPress={() =>
                                navigation.push('Details', {
                                  itemId: Math.floor(Math.random() * 100),
                                })
                              }
                            />
                            <Button title='Go back' onPress={() => {
                              navigation.goBack()
                            }}></Button>
                          </View>

                        }

                        return (
                          <View style={styles.container}>
                            <NavigationContainer>
                              <Stack.Navigator>
                                <Stack.Screen name="Home" component={Home} />
                                <Stack.Screen name="Details" component={Event} />
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


export default NativeStackExamples