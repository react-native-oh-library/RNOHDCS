import React from 'react';
import {ScrollView, Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function Home({navigation}) {
    return (
        <ScrollView
            style={{backgroundColor: 'yellow'}}
            contentInsetAdjustmentBehavior="automatic">
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
            </View>
            <Button title="To Detail" onPress={() => navigation.push('Detail')} />
        </ScrollView>
    );
}

function Detail({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>我是Details Screen</Text>
            <Button title="To Home" onPress={() => navigation.goBack()} />
        </View>
    );
}

const Stack = createStackNavigator();

function NativeNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{title: '我是Home的title'}}
                />
                <Stack.Screen
                    name="Detail"
                    component={Detail}
                    options={{title: '我是Detail的title'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export function ScreenDemo() {
    return <NativeNavigation />;
}
