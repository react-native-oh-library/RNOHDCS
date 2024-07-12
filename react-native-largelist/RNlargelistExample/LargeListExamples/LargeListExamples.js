import React from "react";
import { SpringScrollView } from "react-native-spring-scrollview";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

export class LargeListExamples extends React.Component {
  static navigationOptions = {
    title: "LargeListExamples"
  };

  render() {
    return (
      <SpringScrollView>
        {this.state.examples.map((example, index) =>
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => this.props.navigation.navigate(example)}
          >
            <Text style={styles.text}>
              {example}
            </Text>
          </TouchableOpacity>
        )}
      </SpringScrollView>
    );
  }

  state = {
    examples: [
      "HeightEqualExample",
      "HeightUnequalExample",
       "MessageExample",
       "ContactExample",
       "MenuListExample",
       "RefreshAndLoadingExample",
       "IntensiveSectionExample",
       "ChatExample",
       "FlatListExample",
       "BigMediaExample"
    ]
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 16,
    marginTop: 20,
    textAlign: "center"
  },
  button: { alignItems: "center" }
});
