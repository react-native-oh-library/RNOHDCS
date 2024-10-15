import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradientText } from 'react-native-linear-gradient-text';

export const App = () => {
  return (
    <View style={styles.container}>
      <LinearGradientText
        colors={['#E76F00', '#EA374E']}
        text="Hello World"
        start={{ x: 0.5, y: 0 }}  // Optional
        end={{ x: 1, y: 1 }}  // Optional
        textStyle={{ fontSize: 40 }}  // Optional
        textProps={{ allowFontScaling: true }}  // Optional
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});