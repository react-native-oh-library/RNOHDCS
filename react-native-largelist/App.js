import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Examples from "./RNlargelistExample";
const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {Object.keys(Examples).map((key) => (
            <Stack.Screen key={key} name={key} component={Examples[key]} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
