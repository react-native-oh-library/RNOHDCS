import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ExampleVertical } from './src/Vertical';
import { ExampleTriangle } from './src/Triangle';


const examples = [
  { Component: ExampleVertical, title: 'vertical picker' },
  { Component: ExampleTriangle, title: 'triangle picker' }
];

function App() {
  const [example, setExample] = useState(null);

  if (example) {
    const { Component } = example;
    return (
      <View style={styles.componentContainer}>
        <Component />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {examples.map(ex => (
        <TouchableOpacity
          key={ex.title}
          style={styles.touchable}
          onPress={() => setExample(ex)}
        >
          <Text style={styles.text}>{ex.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 45,
    backgroundColor: '#212021',
  },
  componentContainer: {
    flex: 1,
  },
  touchable: {
    padding: 5,
  },
  text: {
    color: 'white',
  },
});

export default App;
