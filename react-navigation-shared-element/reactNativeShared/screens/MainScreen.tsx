import { useCallback } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Platform,
} from "react-native";

import { Router, NavBar, ListItem, Colors } from "../components";
import { Tests } from "../tests";
import { TestImage } from "../tests/image";
import { fadeIn, fromRight } from "../transitions";
import { Test } from "../types";
import { CardScreen } from "./CardScreen";
import { PagerScreen } from "./PagerScreen";
import { TestScreen } from "./TestScreen";
import { TestsScreen } from "./TestsScreen";
import { TilesScreen } from "./TilesScreen";
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: Platform.select({
    ios: {
      flex: 1,
      backgroundColor: Colors.empty,
    },
    default: {
      flex: 1,
    },
  }),
  back: {
    color: Colors.blue,
    marginLeft: 20,
  },
});

type Props = {
  navigation?: any;
  footer?: any;
};

export function MainScreen(props: Props) {
  const { footer, navigation } = props;

  const navigate = useCallback(
    (routeName: string, routeProps: any, element: any) => {
      if (navigation) {
        navigation.push(routeName, routeProps);
      } else {
        Router.push(element);
      }
    },
    [navigation]
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} endFillColor={Colors.empty}>
        <Tester>
            <TestSuite name='Shared Element Demo'>
                <TestCase itShould='Test cases demo' tags={['C_API']}>
                  <ListItem
                    label="Test Cases"
                    description="Test cases for development and diagnosing problems"
                    onPress={() =>
                      navigate("Tests", { tests: Tests }, <TestsScreen tests={Tests} />)
                    }
                  />
                </TestCase>

                <TestCase itShould='Tiles Demo' tags={['C_API']}>
                  <ListItem
                    label="Tiles Demo"
                    description="Image tiles that zoom-in and then allow gestures to paginate and dismiss"
                    onPress={() =>
                      navigate(
                        "Tiles",
                        { type: "tile" },
                        <TilesScreen
                          type="tile"
                          title="Tiles Demo"
                          DetailComponent={PagerScreen}
                        />
                      )
                    }
                  />
                </TestCase>

                <TestCase itShould='Card Demo' tags={['C_API']}>
                  <ListItem
                    label="Card Demo"
                    description="Card reveal with shared element transitions"
                    onPress={() =>
                      navigate(
                        "Tiles",
                        { type: "card" },
                        <TilesScreen
                          type="card"
                          title="Cards Demo"
                          DetailComponent={CardScreen}
                        />
                      )
                    }
                  />
                </TestCase>

                <TestCase itShould='Card Demo 2' tags={['C_API']}>
                <ListItem
                  label="Card Demo 2"
                  description="Heavier card demo with fading gradient overlay and cross-fading texts"
                  onPress={() =>
                    navigate(
                      "Tiles",
                      { type: "card2" },
                      <TilesScreen
                        type="card2"
                        title="Cards Demo 2"
                        transitionConfig={fadeIn(0, true)}
                        DetailComponent={CardScreen}
                      />
                    )
                  }
                />
                </TestCase>
            </TestSuite>
        </Tester >
        {footer}
      </ScrollView>
    </View>
  );
}
