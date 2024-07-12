import React from "react";
import { NavigationContainer, NavigationState } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PanDemo from './PanDemo-CAPI'
import OrientationDemo from './OrientationDemo-CAPI'
import ScrollViewDemo from './ScrollViewDemo-CAPI'
import TimingDemo from './TimingDemo-CAPI'
import HomeDemo from './Home'
const Stack = createStackNavigator();
export class Nav extends React.Component {
    render() {
        return <NavigationContainer
        >
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeDemo} />
                <Stack.Screen name="Pan" component={PanDemo} />
                <Stack.Screen name="Orientation" component={OrientationDemo} />
                <Stack.Screen name="Scroll" component={ScrollViewDemo} />
                <Stack.Screen name="Timing" component={TimingDemo} />
            </Stack.Navigator>
        </NavigationContainer>;
    };
}