import * as React from "react";
import { Button, View, Text, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtonsProvider } from "react-navigation-header-buttons/HeaderButtonsProvider";
import {
  HeaderButtons,
  Item,
  HeaderButtonProps,
  OverflowMenu,
  HiddenItem,
} from "react-navigation-header-buttons";
const stackType = "native";
const Stack = createNativeStackNavigator();
function HeaderButtonsTester({ navigation }) {
  const MaterialHeaderButton = (props: HeaderButtonProps) => {
    return (
      <View>
        <Text>{props.title}</Text>
      </View>
    );
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "导航栏",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item title="this is a item" />
          <OverflowMenu OverflowIcon={() => <Text>Icon</Text>}>
            <HiddenItem
              title="hidden1"
              onPress={() => Alert.alert("hidden1")}
            />
            <HiddenItem
              title="hidden2"
              onPress={() => Alert.alert("hidden2")}
            />
          </OverflowMenu>
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>
        HeaderButton默认渲染按钮的组件
        HeaderButtonComponent中可以接收来自Item中的props
      </Text>
    </View>
  );
}
function HomePage({ navigation }) {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <Button
        title="HeaderButtonDemo"
        onPress={() => {
          navigation.navigate("HeaderButtonsTester");
        }}
      />
    </View>
  );
}
export default function HeaderButtonExample() {
  return (
    <NavigationContainer>
      <HeaderButtonsProvider stackType={stackType}>
        <Stack.Navigator initialRouteName="react-navigation-header-buttons">
          <Stack.Screen
            name="react-navigation-header-buttons"
            component={HomePage}
          />
          <Stack.Screen
            name="HeaderButtonsTester"
            component={HeaderButtonsTester}
          />
        </Stack.Navigator>
      </HeaderButtonsProvider>
    </NavigationContainer>
  );
}