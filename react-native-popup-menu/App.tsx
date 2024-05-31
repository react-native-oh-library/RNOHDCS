import * as React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  I18nManager,
  Switch,
} from 'react-native';

import Demo from './Demo'

export default function App() {
  return (
    <View style={styles.container}>
      {Platform.OS === 'harmony' && (
        <Demo  />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
});
