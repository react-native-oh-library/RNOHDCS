import React from "react";
import { StyleSheet, FlatList, Text, Pressable } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";

import realmDemo from "./realmDemo";
import RealmDemoApp from "./realmDemo1";

interface ExampleItem {
  title: string;
  destination: keyof RootStackParamList;
}

export type RootStackParamList = {
  Example: undefined;
  Example1: undefined;
  Example2: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const NavigationTree = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Example">
        <Stack.Screen name="Example" component={HomeScreen} />
        <Stack.Screen name="Example1" component={RealmDemoApp} />
        <Stack.Screen name="Example2" component={realmDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = () => {
  const { navigate } =
    useNavigation<StackNavigationProp<RootStackParamList, "Example">>();

  const data: ExampleItem[] = [
    { title: "Example", destination: "Example" },
    { title: "Example1", destination: "Example1" },
    { title: "Example2", destination: "Example2" }
  ];
  return (
    <FlatList
      testID="ExamplesFlatList"
      keyExtractor={(item) => item.destination}
      data={data}
      renderItem={({ item }) => (
        <Pressable
          style={styles.row}
          onPress={() => {
            navigate(item.destination);
          }}
          testID={item.title}
        >
          <Text style={styles.rowTitle}>{item.title}</Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    padding: 16,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowTitle: {
    fontSize: 18,
  },
});


export default NavigationTree;