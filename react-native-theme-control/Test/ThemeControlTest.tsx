// import React, { useState } from "react";
// import { View, useColorScheme, ScrollView, Button, Text } from "react-native";
// import SegmentedControl from "@react-native-segmented-control/segmented-control";
// import {
//   setAppBackground,
//   setNavbarAppearance,
//   setThemePreference,
//   SystemBars,
//   ThemePreference,
//   useThemePreference,
//   AppBackground,
//   getThemePreference,
//   // NavigationBar,
//   ThemeAwareStatusBar,
// } from "@vonovak/react-native-theme-control";
// import { Tester, TestCase } from "@rnoh/testerino";

// export const themeControlTest = () => {
//   const themePreference = useThemePreference();
//   const colorScheme = useColorScheme();
//   const isDarkMode = colorScheme === "dark";
//   const bgColor = isDarkMode ? "#2A2550" : "#FFF6EA";
//   const textColor = isDarkMode ? "white" : "black";
//   const barsBackground = isDarkMode ? "#9900F0" : "#A0BCC2";
//   const dividerColor = textColor;
//   const appbgclor = isDarkMode ? "red" : "blue";

//   const values: Array<ThemePreference> = ["light", "dark", "system"];
//   const unvalue: Array<ThemePreference> = ["light", "dark"];


//   return (
//     <ScrollView>
//       <Tester>
//         <TestCase
//           itShould="SystemBars"
//           initialState={"dark"}
//           tags={["C_API"]}
//           arrange={({ setState, state }) => {
//             return (
//               <View
//                 style={{
//                   backgroundColor: bgColor,
//                   flexGrow: 1,
//                   flexShrink: 1,
//                   alignItems: "center",
//                   justifyContent: "space-evenly",
//                 }}
//               >
//                 <SystemBars
//                   backgroundColor={barsBackground}
//                   dividerColor={dividerColor}
//                   barStyle={"default"}
//                 />
//                 <Button
//                   onPress={() => {
//                     setState("light");
//                   }}
//                   title={`getSystemBarsColor`}
//                 />
//               </View>
//             );
//           }}
//           assert={async ({ expect, state }) => {
//             expect(values).to.include(state);
//           }}
//         />
//         <TestCase
//           itShould="setAppBackground"
//           initialState={appbgclor}
//           tags={["C_API"]}
//           arrange={({ setState, state }) => {
//             return (
//               <View
//                 style={{
//                   backgroundColor: appbgclor,
//                   flexGrow: 1,
//                   flexShrink: 1,
//                   alignItems: "center",
//                   justifyContent: "space-evenly",
//                 }}
//               >
//                 <AppBackground dark={"red"} light={"blue"} />
//                 <Button
//                   onPress={() => {
//                     setState("light");
//                   }}
//                   title={`getBackgroundColor`}
//                 />
//               </View>
//             );
//           }}
//           assert={async ({ expect, state }) => {
//             expect(values).to.include(state);
//           }}
//         />
//         <TestCase
//           itShould="setThemePreference & getThemePreference & useThemePreference (Restart is not enabled)"
//           initialState={themePreference}
//           tags={["C_API"]}
//           arrange={({ setState, state }) => {
//             return (
//               <View
//                 style={{
//                   backgroundColor: bgColor,
//                   flexGrow: 1,
//                   flexShrink: 1,
//                   alignItems: "center",
//                   justifyContent: "space-evenly",
//                 }}
//               >
//                 <Text>useColorScheme: {colorScheme}</Text>
//                 <Text>useThemePreference: {themePreference}</Text>
//                 <Text>getThemePreference: {getThemePreference()}</Text>
//                 <SegmentedControl
//                   style={{ width: "100%" }}
//                   values={values}
//                   selectedIndex={values.indexOf(themePreference)}
//                   onChange={({ nativeEvent }: { nativeEvent: any }) => {
//                     setThemePreference(nativeEvent.value as ThemePreference, {
//                       persistTheme: false,
//                       restartActivity: false,
//                     });
//                     setState(themePreference);
//                   }}
//                 />
//               </View>
//             );
//           }}
//           assert={async ({ expect, state }) => {
//             expect(values).to.include(state);
//           }}
//         />
//         <TestCase
//           itShould="Enable restart and storage"
//           initialState={themePreference}
//           tags={["C_API"]}
//           arrange={({ setState, state }) => {
//             return (
//               <View
//                 style={{
//                   backgroundColor: bgColor,
//                   flexGrow: 1,
//                   flexShrink: 1,
//                   alignItems: "center",
//                   justifyContent: "space-evenly",
//                 }}
//               >
//                 <Text>useColorScheme: {colorScheme}</Text>
//                 <Text>useThemePreference: {themePreference}</Text>
//                 <Text>getThemePreference: {getThemePreference()}</Text>
//                 <SegmentedControl
//                   style={{ width: "100%" }}
//                   values={unvalue}
//                   selectedIndex={unvalue.indexOf(themePreference)}
//                   onChange={({ nativeEvent }: { nativeEvent: any }) => {
//                     setThemePreference(nativeEvent.value as ThemePreference, {
//                       persistTheme: true,
//                       restartActivity: true,
//                     });
//                     setState(themePreference);
//                   }}
//                 />
//               </View>
//             );
//           }}
//           assert={async ({ expect, state }) => {
//             expect(values).to.include(state);
//           }}
//         />
//         <TestCase
//           itShould="setNavbarAppearance"
//           initialState={"dark"}
//           tags={["C_API"]}
//           arrange={({ setState, state }) => {
//             const [Navbar, setNavbar] = useState('')
//             const [bgc, setBgc] = useState('blue')
//             const [dc, setDc] = useState('green')
//             return (
//               <View
//                 style={{
//                   backgroundColor: bgColor,
//                   flexGrow: 1,
//                   flexShrink: 1,
//                   alignItems: "center",
//                   justifyContent: "space-evenly",
//                 }}
//               >
//                 <Text>setNavbarAppearance: {bgc}</Text>
//                 <Text>setNavbarAppearance: {dc}</Text>
//                 <SystemBars
//                   backgroundColor={barsBackground}
//                   dividerColor={dividerColor}
//                   barStyle={"default"}
//                 />
//                 <Button
//                   onPress={() => {
//                     setNavbarAppearance({
//                       backgroundColor: bgc,
//                       dividerColor: dc,
//                       barStyle: 'dark-content'
//                     })
//                     setDc('black')
//                     setBgc('green')
//                     setState("light");
//                   }}
//                   title={`setNavbarAppearance`}
//                 />
//               </View>
//             );
//           }}
//           assert={async ({ expect, state }) => {
//             expect(values).to.include(state);
//           }}
//         />
//       </Tester>
//     </ScrollView>
//   );
// };

import React, {useState} from 'react';
import {View, useColorScheme, Button, Text, ScrollView} from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {
  setAppBackground,
  setNavbarAppearance,
  setThemePreference,
  SystemBars,
  ThemePreference,
  useThemePreference,
  AppBackground,
  getThemePreference,
} from '@vonovak/react-native-theme-control';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

export const ThemeControlTest = () => {
  const themePreference = useThemePreference();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const textColor = isDarkMode ? 'white' : 'black';
  const dividerColor = textColor;

  const values: Array<ThemePreference> = ['light', 'dark', 'system'];

  const [systemBarsBackgroundColor, setSystemBarsBackgroundColor] =
    useState<string>('');
  const [appLight, setAppLight] = useState<string>('orange');


  return (
    <ScrollView style={{height: '90%'}}>
      <Tester>
        <TestSuite name="SystemBars">
          <TestCase itShould="状态栏的样式组件">
            <View
              style={{
                backgroundColor: systemBarsBackgroundColor,
                flexGrow: 1,
                flexShrink: 1,
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <SystemBars
                backgroundColor={systemBarsBackgroundColor}
                dividerColor={dividerColor}
                barStyle={'default'}
              />
              <Button
                onPress={() => {
                  setSystemBarsBackgroundColor(v =>
                    v === 'blue' ? 'pink' : 'blue',
                  );
                }}
                title={`changeBackgroundColor`}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="AppBackground">
          <TestCase itShould="app背景颜色设置组件">
            <View
              style={{
                backgroundColor: appLight,
                flexGrow: 1,
                flexShrink: 1,
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <AppBackground dark={'black'} light={appLight} />
              <Button
                onPress={() => {
                  setAppLight(v => (v === 'orange' ? 'purple' : 'orange'));
                }}
                title={`changeAppLightColor`}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="setNavbarAppearance">
          <TestCase itShould="">
            <View
              style={{
                // backgroundColor: appLight,
                flexGrow: 1,
                flexShrink: 1,
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <Button
                onPress={() => {
                  setNavbarAppearance({
                    backgroundColor: 'red',
                    dividerColor: 'red',
                  });
                }}
                title={`setNavbarAppearance`}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="setAppBackground">
          <TestCase itShould="">
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
              }}>
              <Button
                onPress={() => {
                  setAppBackground('red');
                }}
                title={`set:red`}
              />
              <Button
                onPress={() => {
                  setAppBackground('green');
                }}
                title={`set:green`}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="setThemePreference">
          <TestCase itShould="">
            <SegmentedControl
              style={{width: '100%'}}
              values={values}
              selectedIndex={values.indexOf(themePreference)}
              onChange={({nativeEvent}: {nativeEvent: any}) => {
                setThemePreference(nativeEvent.value as ThemePreference);
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="useThemePreference">
          <TestCase itShould="">
            <Text>useThemePreference: {themePreference}</Text>
          </TestCase>
        </TestSuite>
        <TestSuite name="getThemePreference">
          <TestCase itShould="">
            <Text>getThemePreference: {getThemePreference()}</Text>
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
};
