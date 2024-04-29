import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WebSocketDemo from './WebSocketDemo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebSocketDemo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});