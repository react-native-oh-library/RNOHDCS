import React from "react";
import { NavigationContainer,NavigationState } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RefreshAndLoadingInvertTrueExample from './RefreshAndLoadingInvertTrueExample'
import ScrollToAndOnScrollExample from './ScrollToAndOnScrollExample'
import BouncesAndScrollEnableDirectionalLockEnabledFalseExample from './BouncesAndScrollEnableDirectionalLockEnabledFalseExample'
import ComplexBouncesFalseExample from './ComplexBouncesFalseExample'
import InputTapToHideKeyboardTrueExample from './InputTapToHideKeyboardTrueExample'
import RefreshAndLoadingInvertFalseExample from './RefreshAndLoadingInvertFalseExample'
import ComplexBouncesTrueExample from './ComplexBouncesTrueExample'
import BouncesAndScrollEnableDirectionalLockEnabledTrueExample from './BouncesAndScrollEnableDirectionalLockEnabledTrueExample'
import BouncesAndScrollEnabledFalseExample from './BouncesAndScrollEnabledFalseExample'
import InputTapToHideKeyboardFalseExample from './InputTapToHideKeyboardFalseExample'
import HomeDemo from './Home'
const Stack = createStackNavigator();
export class Nav extends React.Component {
    render() {
        return <NavigationContainer
         >
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeDemo} />
                <Stack.Screen name="InputTapToHideKeyboardTrueExample" component={InputTapToHideKeyboardTrueExample} />
                <Stack.Screen name="InputTapToHideKeyboardFalseExample" component={InputTapToHideKeyboardFalseExample} />
                <Stack.Screen name="ComplexBouncesFalseExample" component={ComplexBouncesFalseExample} />
                <Stack.Screen name="ComplexBouncesTrueExample" component={ComplexBouncesTrueExample} />
                <Stack.Screen name="RefreshAndLoadingInvertFalseExample" component={RefreshAndLoadingInvertFalseExample} />
                <Stack.Screen name="RefreshAndLoadingInvertTrueExample" component={RefreshAndLoadingInvertTrueExample} />
                <Stack.Screen name="ScrollToAndOnScrollExample" component={ScrollToAndOnScrollExample} />
                <Stack.Screen name="BouncesDirectionalLockEnabledFalseExample" component={BouncesAndScrollEnableDirectionalLockEnabledFalseExample} />
                <Stack.Screen name="BouncesDirectionalLockEnabledTrueExample" component={BouncesAndScrollEnableDirectionalLockEnabledTrueExample} />
                <Stack.Screen name="BouncesAndScrollEnabledFalseExample" component={BouncesAndScrollEnabledFalseExample} />
            </Stack.Navigator>
        </NavigationContainer>;
    };
}