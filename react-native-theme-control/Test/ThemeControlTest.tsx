import React, { useState } from "react";
import { View, useColorScheme, ScrollView, Button, Text, StyleSheet } from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import {
  setAppBackground,
  setNavbarAppearance,
  setThemePreference,
  SystemBars,
  ThemePreference,
  useThemePreference,
  AppBackground,
  getThemePreference,
  // NavigationBar,
  ThemeAwareStatusBar,
} from "@vonovak/react-native-theme-control";
import { Tester, TestCase } from "@rnoh/testerino";
import { use } from "chai";

export const themeControlTest = () => {
  const themePreference = useThemePreference();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const bgColor = isDarkMode ? "#2A2550" : "#FFF6EA";
  const textColor = isDarkMode ? "white" : "black";
  const barsBackground = isDarkMode ? "#9900F0" : "#A0BCC2";
  const dividerColor = textColor;
  const appbgclor = isDarkMode ? "red" : "blue";

  const values: Array<ThemePreference> = ["light", "dark", "system"];
  const unvalue: Array<ThemePreference> = ["light", "dark"];
  const [systemBarsBackgroundColor, setSystemBarsBackgroundColor] =
    useState<string>('');
  const [appLight, setAppLight] = useState<string>('orange');

  return (
    <View style={{ height: "80%" }}>
      <Tester>
        <TestCase
          itShould="SystemBars"
          initialState={"dark"}
          tags={["C_API"]}
          arrange={({ setState, state }) => {
            return (
              <View
                style={{
                  backgroundColor: systemBarsBackgroundColor,
                  flexGrow: 1,
                  flexShrink: 1,
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Text>backgroundColor={systemBarsBackgroundColor}</Text>
                <SystemBars
                  backgroundColor={systemBarsBackgroundColor}
                  dividerColor={dividerColor}
                  barStyle={"default"}
                />
                <Button
                  onPress={() => {
                    setSystemBarsBackgroundColor(v =>
                      v === 'yellow' ? 'pink' : 'yellow',
                    );
                    setState("light");
                  }}
                  title={`SystemBars`}
                />
              </View>
            );
          }}
          assert={async ({ expect, state }) => {
            expect(values).to.include(state);
          }}
        />

        <TestCase
          itShould="setAppBackground"
          initialState={appbgclor}
          tags={["C_API"]}
          arrange={({ setState, state }) => {
            const [appbgc, setAppbgc] = useState('blue')
            return (
              <View
                style={{
                  backgroundColor: appbgc,
                  flexGrow: 1,
                  flexShrink: 1,
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <AppBackground dark={"red"} light={"blue"} />
                <Button
                  onPress={() => {
                    setAppBackground('blue')
                    setAppbgc('red')
                    setState("light");
                  }}
                  title={`setAppBackground`}
                />
              </View>
            );
          }}
          assert={async ({ expect, state }) => {
            expect(values).to.include(state);
          }}
        />
        <TestCase
          itShould="AppBackground"
          initialState={appbgclor}
          tags={["C_API"]}
          arrange={({ setState, state }) => {
            return (
              <View
                style={{
                  backgroundColor: appLight,
                  flexGrow: 1,
                  flexShrink: 1,
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <AppBackground dark={"red"} light={appLight} />
                <Button
                  onPress={() => {
                    setAppLight(v => (v === 'orange' ? 'purple' : 'orange'));
                    setState("light");
                  }}
                  title={`AppBackground`}
                />
              </View>
            );
          }}
          assert={async ({ expect, state }) => {
            expect(values).to.include(state);
          }}
        />
        <TestCase
          itShould="setThemePreference & getThemePreference & useThemePreference & setNavbarAppearance"
          initialState={themePreference}
          tags={["C_API"]}
          arrange={({ setState, state }) => {
            return (
              <View
                style={{
                  backgroundColor: bgColor,
                  flexGrow: 1,
                  flexShrink: 1,
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Text>useColorScheme: {colorScheme}</Text>
                <Text>useThemePreference: {themePreference}</Text>
                <Text>getThemePreference: {getThemePreference()}</Text>
                <SegmentedControl
                  style={{ width: "100%" }}
                  values={values}
                  selectedIndex={values.indexOf(themePreference)}
                  onChange={({ nativeEvent }: { nativeEvent: any }) => {
                    setThemePreference(nativeEvent.value as ThemePreference, {
                      persistTheme: false,
                      restartActivity: false,
                    });
                    setState(themePreference);
                  }}
                />
              </View>
            );
          }}
          assert={async ({ expect, state }) => {
            expect(values).to.include(state);
          }}
        />
      </Tester>
    </View>
  );
};


