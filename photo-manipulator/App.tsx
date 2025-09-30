import * as React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import EXAMPLES from './example';
import type { Example } from './example';
import styles from './App.styles';
import { Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';

class App extends React.Component<{}, {}> {
  private renderExample = (example: Example) => {
    return (
      <View
        testID={`example-${example.id}`}
        key={example.title}
        style={styles.exampleContainer}
      >
        <Text style={styles.exampleTitle}>{example.title}</Text>
        <Text style={styles.exampleDescription}>{example.description}</Text>
        <View style={styles.exampleInnerContainer}>{example.render()}</View>
      </View>
    );
  };

  render() {
    return (
      <Tester style={{ flex: 1, marginTop: 30 }}>
        <SafeAreaView style={styles.container}>
          <ScrollView testID="scrollView" style={styles.container}>
            <Text testID="examplesTitle" style={styles.sectionTitle}>
              Examples
            </Text>
            {EXAMPLES.map(this.renderExample)}
          </ScrollView>
        </SafeAreaView>
     </Tester>
    );
  }
}

export default {
  displayName: "photo-manipulator",
  framework: "React",
  category: "Map",
  title: "photo-manipulator",
  documentationURL: "",
  description: "photo-manipulator组件",
  examples: [
    {
      title: "photo-manipulator",
      render: function (): any {
        return <App />;
      },
    },
  ],
};
