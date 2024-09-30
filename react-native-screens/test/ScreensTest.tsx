import React, {useState} from "react";
import { ScrollView, Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { enableFreeze, enableScreens } from 'react-native-screens';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

enableScreens(false)
enableFreeze(true)

export const ScreensTest = () => {
  function Home({ navigation, }: { navigation: NativeStackNavigationProp<ParamListBase> }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text>Home Screen</Text>
          <Button title="To TabScreen" onPress={() => navigation.push('TabScreen')} />
        </View>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();
  const TabScreen = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="toHome" component={Home} />
        <Tab.Screen name="toTabScreen" component={Inner} />
        <Tab.Screen name="toDetail" component={Detail} />
      </Tab.Navigator>
    );
  }
  
  function Detail({ navigation, }: { navigation: NativeStackNavigationProp<ParamListBase> }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>我是Details Screen</Text>
        <Button title="To Home" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  
  const InnerStack = createStackNavigator();
  const Inner = () => (
    <InnerStack.Navigator>
      <InnerStack.Screen name="DeeperHome" component={Home} />
    </InnerStack.Navigator>
  );
  
  const [freezeState, setFreezeState] = useState(true);
  
  const Stack = createStackNavigator();
  const changeFreezeState = ()=> {
    enableFreeze(!freezeState)
    setFreezeState(!freezeState)
  }
  return (
    <ScrollView>
      <View>
        <Tester>
          <TestSuite name={'Screens'}>
            <TestCase itShould={'enableScreens(false):由于harmonyOS侧未实现原生化适配，所以需要设置为false禁用原生屏幕'}>
              <View style={styles.container}>
                <NavigationContainer>
                  <Stack.Navigator>
                    <Stack.Screen
                      name="Home"
                      component={Home}
                      options={{ title: '我是Home的title' }}
                    />
                    <Stack.Screen
                      name="TabScreen"
                      component={TabScreen}
                      options={{ title: '我是TabScreen的title' }}
                    />
                  </Stack.Navigator>
                </NavigationContainer>
              </View>
            </TestCase>
            <TestCase itShould={'enableFreeze:防止React组件树的部分渲染,UI层无法看到效果'}>
              <View style={styles.container}>
                <View>
                  <Button title={freezeState?'toFalse':'toTrue'} onPress={()=>changeFreezeState()}></Button>
                </View>
                <NavigationContainer>
                  <Stack.Navigator>
                    <Stack.Screen
                      name="Home"
                      component={Home}
                      options={{ title: '我是Home的title' }}
                    />
                    <Stack.Screen
                      name="TabScreen"
                      component={TabScreen}
                      options={{ title: '我是TabScreen的title' }}
                    />
                  </Stack.Navigator>
                </NavigationContainer>
              </View>
            </TestCase>
            <TestCase itShould={'NativeStackNavigationProp:切换页面属性的封装，提供一种基于原生堆栈导航器的导航方式，无实际UI效果'}>
              <View style={styles.container}>
                <NavigationContainer>
                  <Stack.Navigator>
                    <Stack.Screen
                      name="Home"
                      component={Home}
                      options={{ title: '我是Home的title' }}
                    />
                    <Stack.Screen
                      name="TabScreen"
                      component={TabScreen}
                      options={{ title: '我是TabScreen的title' }}
                    />
                  </Stack.Navigator>
                </NavigationContainer>
              </View>
            </TestCase>
          </TestSuite>
        </Tester>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    overflow: 'hidden'
  },
});