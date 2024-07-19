import { useCallback } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Platform,
} from "react-native";

import { Router, ListItem, Colors } from "../components";
import { Tests } from "../tests";
import { TestsScreen } from "./TestsScreen";
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
            <TestCase itShould='Tiles Demo' tags={['C_API']}>
                <ListItem
                  label="Test Cases"
                  description="Test cases for development and diagnosing problems"
                  onPress={() =>
                    navigate("Tests", { tests: Tests }, <TestsScreen tests={Tests} />)
                  }
                />
              </TestCase>
            </TestSuite>
        </Tester >
      </ScrollView>
    </View>
  );
}
