/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {commonTheme} from './theme/theme';
import {Navigation} from './navigation';
import {ThemeProvider} from 'styled-components';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import { DashboardScreen, DeviceScreen,DevicenRFTestScreen,DeviceConnectDisconnectTestScreen,DeviceOnDisconnectTestScreen} from './screens';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={commonTheme}>
        <Navigation />
        {/* <Toast /> */}
      </ThemeProvider>
      {/* <DashboardScreen /> */}
      {/* <DeviceScreen /> */}
      {/* <DevicenRFTestScreen /> */}
      {/* <DeviceConnectDisconnectTestScreen /> */}
      {/* <DeviceOnDisconnectTestScreen /> */}
    </SafeAreaProvider>
  );
}

export default App;
