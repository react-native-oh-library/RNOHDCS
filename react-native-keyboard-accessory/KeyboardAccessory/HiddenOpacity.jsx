
import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button, ScrollView,LayoutAnimation } from "react-native";
import { KeyboardAccessoryView  } from "react-native-keyboard-accessory";


class HiddenOpacity extends Component {
  state = {
    text: '',
  };
  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
            <TextInput
                placeholder="Write your message"
                underlineColorAndroid="transparent"
                style={styles.input}/>
        </ScrollView>
        <KeyboardAccessoryView
          //当配件隐藏时的不透明度。隐藏时视图的透明度
          style={{ backgroundColor: 'green' }}
          alwaysVisible={false}
          animateOn={'all'} 
          hiddenOpacity={0.1}
          animationConfig={{
            duration: 500,
            create: {
              duration: 1000,
              type: LayoutAnimation.Types.linear,
              property: LayoutAnimation.Properties.opacity
            },
            update: {
              duration: 500,
              type: LayoutAnimation.Types.linear,
            },
            hide: {
              duration: 5000,
              type: LayoutAnimation.Types.linear,
              property: LayoutAnimation.Properties.opacity
            },
         }}
         >
            <View style={styles.textInputView}>
              <TextInput
                placeholder="Write your message"
                underlineColorAndroid="transparent"
                style={styles.textInput}
                multiline={true}
                value={text}
                onChangeText={text => this.setState({ text })}
              />
              <Button
                style={styles.textInputButton}
                title="Send"
                onPress={() => {}}
              />
            </View>
        </KeyboardAccessoryView>
      </View>
    );
  }
}

HiddenOpacity.navigationOptions = {
  title: "View Example",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#FFF',
  },
  textInputView: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    flexGrow: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#CCC",
    padding: 10,
    fontSize: 16,
    marginRight: 10,
    textAlignVertical: "top",
  },
  textInputButton: {
    flexShrink: 1,
  },
});

export {HiddenOpacity}

