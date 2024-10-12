import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import waterflowList1 from './waterflow_list1';
import waterflowList2 from './waterflow_list2';

const Stack = createStackNavigator();

class Home extends React.Component {
  onPress1 = () => {
      this.props.navigation.navigate('waterflow_list1');
  }
  onPress2 = () => {
      this.props.navigation.navigate('waterflow_list2');
  }

  render() {
      return (
          <View style={{padding:14}}>
              <View style={{height:50}}>
                  <Button title="waterflow_list1"  onPress={this.onPress1}></Button>
              </View>
              <View style={{height:50,marginTop:12}}>
                  <Button title="waterflow_list2"  onPress={this.onPress2}></Button>
              </View>
              
          </View>
      );
  }
};

class waterflowListDemo extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="waterflowList 组件测试">
                    <Stack.Screen name="首页" component={Home} />
                    <Stack.Screen name="waterflow_list1" component={waterflowList1} />
                    <Stack.Screen name="waterflow_list2" component={waterflowList2} />
                  
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default waterflowListDemo;