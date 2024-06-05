import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

function MyBackButton() {
    const navigation = useNavigation();

    return (
        <Button
            title="Back"
            onPress={() => {
                navigation.goBack();
            }}
        />
    );
}

function HomeScreen({ navigation: { navigate } }: any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is the home screen of the app</Text>
            <Button title="Go to Profile" onPress={() => navigate('Profile')} />
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>
            <MyBackButton />
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <Tester style={{ flex: 1 }}>
            <TestSuite name='navigation core'>
                <TestCase itShould='render navigation' tags={['C_API']}>
                    <View style={{ height: 300 }}>
                        <NavigationContainer>
                            <Stack.Navigator initialRouteName="Home">
                                <Stack.Screen name="Home" component={HomeScreen} />
                                <Stack.Screen name="Profile" component={ProfileScreen} />
                            </Stack.Navigator>
                        </NavigationContainer>
                    </View>
                </TestCase>
            </TestSuite>
        </Tester>
    );
}

export default App;

const NavigationCore = App

export { NavigationCore }