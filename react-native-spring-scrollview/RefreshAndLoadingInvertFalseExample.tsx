import React from 'react';
import {StyleSheet, Text, Platform, View, TouchableOpacity} from 'react-native';
import {SpringScrollView} from 'react-native-spring-scrollview';
import { CommonLottieHeader } from "react-native-spring-scrollview/src/Customize/CommonLottieHeader";
import { CommonLottieFooter } from "react-native-spring-scrollview/src/Customize/CommonLottieFooter";
export default class RefreshAndLoadingInvertFalseExample extends React.Component {
  _scrollView;
  _step = 13;
  constructor(props) {
    super(props);
    this.state = {
      count: this._step,
      allLoaded: false
    };
  }
  render() {
    const arr = [];
    for (let i = 0; i < this.state.count; ++i) arr.push(i);
    return (
      <SpringScrollView
        ref={ref => (this._scrollView = ref)}
        style={styles.container}
        onRefresh={this._onRefresh}
        onLoading={this._onLoading}
        inverted={false}
        refreshHeader={CommonLottieHeader}
        loadingFooter={CommonLottieFooter}
        allLoaded={this.state.allLoaded}
      >
        {arr.map(item => (
          <Text key={item} style={styles.text}>
            This is a Refresh and Loading Test {item}
          </Text>
        ))}
      </SpringScrollView>
    );
  }

  _onRefresh = () => {
    setTimeout(() => {
      this._scrollView?.endRefresh();
      this.setState({ count: this._step, allLoaded: false });
    }, 3000);
  };

  _onLoading = () => {
    setTimeout(() => {
      if(this.state.count>20) return;
      this._scrollView?.endLoading();
      this.setState(p => ({
        count: p.count + this._step,
        allLoaded: false
      }));
    }, 3000);

    setTimeout(() => {
      if(this.state.count>20){
      this.setState(p => ({
        count: p.count,
        allLoaded: true
      }));
      this._scrollView?.endLoading();
     }
    }, 6000);
  };
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Platform.OS === "ios" ? 20 : 0
    },
    text: {
      paddingVertical: 20,
      fontSize: 16,
      textAlign: "center",
      backgroundColor: "white",
      // transform: [{ scaleY: -1 }]
    }
  });