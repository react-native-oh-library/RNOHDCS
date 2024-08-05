import * as React from 'react';
import {Button, ScrollView, View, Text} from 'react-native';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {PNIPropsDemo} from './PNIPropsDemo';
import {Disable} from './Disable';

const Stack = createStackNavigator();

function HomePage({navigation}) {
  return (
    <View style={{backgroundColor: 'pink'}}>
      <Button
        title="Disable属性"
        onPress={() => {
          navigation.navigate('Disable');
        }}
      />
      <Button
        title="除去Disable属性以外的所有属性"
        onPress={() => {
          navigation.navigate('PNIPropsDemo');
        }}
      />
    </View>
  );
}

export const PhoneDemo = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="PNIPropsDemo" component={PNIPropsDemo} />
          <Stack.Screen name="Disable" component={Disable} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
