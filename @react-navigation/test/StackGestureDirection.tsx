
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
            gap:10,
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
      gestureDirection: {
        description: '手势方向',
        options: true,
        value: 'horizontal',
        valueList: [
          'horizontal',
          'horizontal-inverted',
          'vertical',
          'vertical-inverted',
        ],
        extraOptions: {
          gestureEnabled: true
        }
      },
    }
  })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar></StatusBar>
      <Tester style={{ flex: 1 }}>
        <TestSuite name='gestureDirection' key={'gestureDirection'}>
          <ToggleButton title={'切换gestureDirection'} list={state.gestureDirection.valueList} initValue={state.gestureDirection.value} onChange={(val: any) => {
            setState({
              ...state,
              gestureDirection: {
                ...state?.gestureDirection,
                value: val
              }
            })
          }}></ToggleButton>
          <TestCase itShould='gestureDirection'
            tags={['C_API']}>
            <View style={styles.container}>
              <NavigationContainer>
                <Stack.Navigator screenOptions={{
                  gestureEnabled: true,
                  gestureDirection: state.gestureDirection.value
                }}>
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="Notifications" component={NotificationsScreen} />
                  <Stack.Screen name="Settings" component={SettingsScreen} />
                </Stack.Navigator >
              </NavigationContainer>
            </View>
          </TestCase>
        </TestSuite>
      </Tester>
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