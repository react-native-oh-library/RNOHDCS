import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Easing,
  TextInput,
  View
} from "react-native";
import { SpringScrollView } from "react-native-spring-scrollview";
import { NormalHeader } from "react-native-spring-scrollview/src/NormalHeader";
import { NormalFooter } from "react-native-spring-scrollview/src/NormalFooter";


export default class ComplexBouncesTrueExample extends React.Component {
  _refs;
  _scrollView;
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      loading: false,
      number: 8
    };
    this._refs = [];
    for (let i = 0; i < this.state.number; ++i) {
      this._refs.push(React.createRef());
    }
  }

  render() {
    return (    
        <SpringScrollView
          style={styles.container}
          ref={ref => (this._scrollView = ref)}
          contentStyle={styles.content}
          bounces={true}
          textInputRefs={this._refs}
          refreshHeader={NormalHeader}
          onRefresh={() => {
            setTimeout(() => this._scrollView?.endRefresh(), 1000);
          }}
          loadingFooter={NormalFooter}
          loadingFooterHeight={80}
          onLoading={() => {
            setTimeout(() => this._scrollView?.endLoading(), 1000);
          }}
        >
        <TouchableOpacity
          style={styles.text}
          onPress={() => this._scrollView?.beginRefresh()}>
          <Text>BeginRefresh</Text>
        </TouchableOpacity>
          {this._renderContent()}
        </SpringScrollView>
    );
  }

  renderElement1(text, index) {
    return (
      <TextInput
        ref={this._refs[index]}
        style={styles.text}
        placeholder={text}
        key={text}
      />
    );
  }
  renderElement(text) {
    return (
      <TouchableOpacity
        style={styles.btn}
        key={text}
        onPress={() => console.log("text")}
      >
        <Text style={styles.text}>
          {text}
        </Text>
        <View style={styles.line} />
      </TouchableOpacity>
    );
  }

  _renderContent() {
    const arr = [];
    for (let i = 0; i < this.state.number; ++i) arr.push(`Text${i}`);
    return arr.map(this.renderElement.bind(this));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // marginTop:20
    // overflow: "visible"
  },
  content: {
    // alignItems: "stretch"
    // backgroundColor: "#EEE"
  },
  btn: {},
  text: {
    marginVertical: 20,
    fontSize: 20,
    textAlign: "center",
    alignSelf: "stretch"
  },
  line: {
    height: 1,
    backgroundColor: "#EEE"
  }
});