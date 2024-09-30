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
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import type {
  MaterialBottomTabNavigationEventMap,
  MaterialBottomTabNavigationOptions,
  MaterialBottomTabNavigationProp,
  MaterialBottomTabScreenProps,
} from '@react-navigation/material-bottom-tabs';

type Props = MaterialBottomTabScreenProps<ParamListBase>;
type ComButtonProps = {
  index: number
  title: string
}

export const MaterialBottomTabsExample = () => {
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
          marginVertical: 5,
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

                console.log('key', key)
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
                      console.log(title, value)
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

  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  function NotificationsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
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
    const parentNavigation = navigation.getParent<MaterialBottomTabNavigationProp<ParamListBase>>('uniId');
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
          name="HomeNest"
          component={HomeScreenNest}
        />
      </HomeStack.Navigator>
    );
  }


  const HomeStack = createStackNavigator();
  const Tab = createMaterialBottomTabNavigator();
  interface State {
    [propName: string]: {
      type?: 'custom' | 'preview',
      description?: string,
      props?: object,
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
      backBehavior: {

        description: '控制返回时路由的切换顺序',
        value: 'firstRoute',
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
      shifting: {
        value: false,
        description: '转移动画',
        valueList: [
          false,
          true,
        ],
      },
      labeled: {
        value: true,
        description: '是否展示标签',
        valueList: [
          false,
          true,
        ],
      },

      activeColor: {
        description: '激活项颜色',
        value: undefined,
        valueList: [undefined, 'gray', 'red', 'black']
      },

      inactiveColor: {
        description: '未激活项颜色',
        value: undefined,
        valueList: [undefined, 'gray', 'red', 'black']
      },
      barStyle: {
        // type: 'preview',
        description: '',
        value: {
          title: 'backgroundColor-red',
          value: {
            backgroundColor: 'red',
          }
        },
        valueList: [
          {
            title: 'backgroundColor-green',
            value: {
              backgroundColor: 'green',
            }
          },
          {
            title: 'backgroundColor-pink',
            value: {
              backgroundColor: 'pink',
            }
          },
          {
            title: 'borderColor:red,borderWidth:3',
            value: {
              borderWidth: 3,
              borderColor: 'red'
            }
          },
          {
            title: 'borderColor:green,borderWidth:5',
            value: {
              borderWidth: 5,
              borderColor: 'green'
            }
          },
          {
            title: 'borderRadius:5,borderWidth:2,borderColor:green',
            value: {
              borderRadius: 5,
              borderWidth: 2,
              borderColor: 'green'
            }
          },
          {
            title: 'borderRadius:10,borderWidth:2,borderColor:green',
            value: {
              borderRadius: 10,
              borderWidth: 2,
              borderColor: 'green'
            }
          },
          {
            title: 'opacity:0.1',
            value: {
              opacity: 0.1
            }
          },
          {
            title: 'opacity:0.3',
            value: {
              opacity: 0.3
            }
          },
          {
            title: 'position:absolute,bottom:50',
            value: {
              position: 'absolute',
              bottom: 50
            }
          },
          {
            title: 'position:absolute,bottom:20',
            value: {
              position: 'absolute',
              bottom: 20
            }
          },
        ]
      },

      title: {
        type: 'custom'
      },
      tabBarIcon: {
        type: 'custom'
      },
      // //todo
      // tabBarColor: {
      //     description: 'tabBar颜色,这是应用在react-native-paper上的，目前已不接收此属性，失效',
      //     options: true,
      //     extraOptions: {
      //         shifting: true
      //     },
      //     value: undefined,
      //     valueList: [undefined, 'gray', 'red', 'black']
      // },
      tabBarLabel: {
        type: 'custom'
      },

      tabBarBadge: {
        type: 'custom'
      },
      tabBarAccessibilityLabel: {
        type: 'custom'
      },
      tabPress: {
        type: 'custom'
      }
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
                        <Tab.Navigator
                          {...options ? { screenOptions: { ...extraOptions, [title]: state?.[title].value } } : { ...extraOptions, [title]: state?.[title].value }}
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
                return <TestSuite name={title} key={title}>
                  <TestCase itShould={description} tags={['C_API']}>
                    <View style={styles.container}>
                      <NavigationContainer>
                        <Tab.Navigator
                          {...props}
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
                          <Tab.Navigator id='uniId'
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
                          <Tab.Navigator>
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
                if (title === 'tabBarIcon') {
                  return <TestSuite name='tabBarIcon' key={'tabBarIcon'}>
                    <TestCase itShould='tabBar图标' tags={['C_API']}>
                      <View style={styles.container}>
                        <NavigationContainer>
                          <Tab.Navigator>
                            <Tab.Screen name="Home" component={HomeScreen} options={{
                              tabBarIcon: ({ focused: boolean, color: string }) => {
                                return <View style={styles.icon}>
                                  <Text>
                                    ico
                                  </Text>
                                </View>
                              }
                            }} />
                            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                              tabBarIcon: ({ focused: boolean, color: string }) => {
                                return <View style={{ backgroundColor: 'red' }}>
                                  <Text>
                                    ico
                                  </Text>
                                </View>
                              }
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
                          <Tab.Navigator>
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
                if (title === 'tabBarBadge') {
                  return <TestSuite name='tabBarBadge' key={'tabBarBadge'}>
                    <TestCase itShould='tabBarBadge' tags={['C_API']}>
                      <View style={styles.container}>
                        <NavigationContainer>
                          <Tab.Navigator>
                            <Tab.Screen name="Home" component={HomeScreen} options={{
                              tabBarBadge: 'a'
                            }} />

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
                            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                              tabBarAccessibilityLabel: '这是自定义的无障碍标签设置'
                            }} />
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
                              <Tab.Navigator >
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



export default MaterialBottomTabsExample