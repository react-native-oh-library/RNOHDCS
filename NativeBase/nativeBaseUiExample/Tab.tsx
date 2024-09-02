import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import {
  TabView,
  TabBar,
  SceneMap,
  NavigationState,
  SceneRendererProps,
} from "react-native-tab-view";

type State = NavigationState<{
  key: string,
  title: string,
}>;

const FirstRoute = () => (
  <View
    style={{
      alignItems: "center",
      padding: 10,
      margin: 10,
      width: "80%",
      height: "80%",
      flex: 1,
      backgroundColor: "#62BBD4",
    }}
  >
    <Text
      style={{
        width: "100%",
        height: "100%",
        fontWeight: "bold",
      }}
    >
      First tab
    </Text>
  </View>
);

const SecondRoute = () => (
  <View
    style={{
      alignItems: "center",
      padding: 10,
      margin: 10,
      width: "80%",
      height: "80%",
      flex: 1,
      backgroundColor: "#A0D44E",
    }}
  >
    <Text
      style={{
        width: "100%",
        height: "100%",
        fontWeight: "bold",
      }}
    >
      Second tab
    </Text>
  </View>
);

const ThreedRoute = () => (
  <View
    style={{
      alignItems: "center",
      padding: 10,
      margin: 10,
      width: "80%",
      height: "80%",
      flex: 1,
      backgroundColor: "#A0D44E",
    }}
  >
    <Text
      style={{
        width: "100%",
        height: "100%",
        fontWeight: "bold",
      }}
    >
      ThreedRoute tab
    </Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  three: ThreedRoute,
});
export function TabExample() {
  const initialLayout = { width: Dimensions.get("window").width };
  const [index, setIndex] = React.useState(0);
  const renderTabBar = (
    props: SceneRendererProps & { navigationState: State }
  ) => (
    <TabBar
      {...props}
      scrollEnabled={true}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      labelStyle={styles.label}
      tabStyle={styles.tabStyle}
    />
  );

  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
    { key: "three", title: "three" },
  ]);

  return (
    <TabView
      style={{
        flex: 1,
        width: 350,
        height: 200,
        margin: 10,
        backgroundColor: "#6D8585",
      }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: "#3f51b5",
    height: 70,
    width: 350,
  },
  indicator: {
    backgroundColor: "#ffeb3b",
    width: 175,
    height: 5,
  },
  label: {
    fontWeight: "400",
    fontSize: 20,
    width: 100,
    height: 50,
    color: "black",
  },
  tabStyle: {
    height: 65,
    width: 175,
    backgroundColor: "#BAFDAD",
  },
});