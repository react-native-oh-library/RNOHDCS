import * as React from 'react';
import type {PropsWithChildren} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';
import {useMotion} from 'react-use';
function App(): React.JSX.Element {
 const state = useMotion();
  return (
    <Text>
      {JSON.stringify(state, null, 2)}
    </Text>
  );
}
export default App;
