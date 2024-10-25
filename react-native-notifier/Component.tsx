import * as React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

const customStyles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'orange',
  },
  container: {
    padding: 20,
  },
  title: { color: 'white', fontWeight: 'bold' },
  description: { color: 'white' },
});

interface ComponentProps {
  title?: string;
  description?: string;
}

const Component = ({ title, description }: ComponentProps) => (
  <SafeAreaView style={customStyles.safeArea}>
    <View style={customStyles.container}>
      <Text style={customStyles.title}>Component组件替换</Text>
      <Text style={customStyles.description}>这是一个组件替换Component组件替换</Text>
    </View>
  </SafeAreaView>
);

export default Component;
