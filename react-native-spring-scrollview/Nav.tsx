import React from "react";
import { NavigationContainer,NavigationState } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RefreshAndLoadingExample from './RefreshAndLoadingExample'
import ScrollToAndOnScrollExample from './ScrollToAndOnScrollExample'
import BouncesAndScrollEnabledExample from './BouncesAndScrollEnabledExample'
import ComplexExample from './ComplexExample'
import InputExample from './InputExample'

import HomeDemo from './Home'
const Stack = createStackNavigator();
export class Nav extends React.Component {
    render() {
        return <NavigationContainer
         >
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeDemo} />
                <Stack.Screen name="ComplexExample" component={ComplexExample} />
                <Stack.Screen name="RefreshAndLoadingExample" component={RefreshAndLoadingExample} />
                <Stack.Screen name="ScrollToAndOnScrollExample" component={ScrollToAndOnScrollExample} />
                <Stack.Screen name="BouncesAndScrollEnabledExample" component={BouncesAndScrollEnabledExample} />
                <Stack.Screen name="InputExample" component={InputExample} />

            </Stack.Navigator>
        </NavigationContainer>;
    };
}