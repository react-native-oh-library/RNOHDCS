import { useCallback } from "react";
import { StyleSheet, ScrollView, View, Platform } from "react-native";

import { Router, NavBar, ListItem, Colors } from "../components";
import { getTestGroup, Test, TestGroup } from "../types";
import { TestScreen } from "./TestScreen";
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import React from "react";

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
});

type Props = {
  tests: (Test | TestGroup)[];
  title?: string;
  description?: string;
  navigation?: any;
};

export function TestsScreen(props: Props) {
  const { title, navigation, description } = props;
  const tests: (Test | TestGroup)[] = props.tests;
  const onPressItem = useCallback(
    (test: Test | TestGroup) => {
      const resolvedDescription =
        navigation?.getParam("description") ?? description;
      const testGroup = getTestGroup(test);
        Router.push(
          testGroup ? (
            <TestsScreen
              tests={testGroup.tests}
              title={test.name}
              description={test.description}
            />
          ) : (
            <TestScreen
              test={test as Test}
              description={resolvedDescription || ""}
            />
          )
        );
      },
    [navigation, description]
  );
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} endFillColor={Colors.empty}>
        <Tester>
          <TestSuite name='Shared Element Demo'>
            <TestCase itShould='Tiles Demo' tags={['C_API']}>
              {tests.map((test, index) => (
                <ListItem
                  key={`item${index}`}
                  label={test.name}
                  onPress={() => onPressItem(test)}
                />
              ))}
            </TestCase>
          </TestSuite>
        </Tester >
      </ScrollView>
    </View>
  );
}
