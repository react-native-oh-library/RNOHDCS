import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Platform,
  Animated
} from 'react-native';
import SpringScrollView from "react-native-spring-scrollview";
import { NormalHeader } from "@react-native-oh-tpl/react-native-spring-scrollview/src/NormalHeader";
import { NormalFooter } from "@react-native-oh-tpl/react-native-spring-scrollview/src/NormalFooter";
import { TestSuite,Tester } from '@rnoh/testerino';
import { TestCase } from '../components';

const AnimatedSpringScrollView = Animated.createAnimatedComponent(SpringScrollView);
function RNSpringScrollViewTest() {
    this.state = {
      scrollEnabled: true,
      refreshing: false,
      loading: false,
      number: 8,
      contentCount: 20,
      bounces: true,
      showsVerticalScrollIndicator: true,
      showsHorizontalScrollIndicator: true
    };
    this._refs = [];
    for (let i = 0; i < this.state.number; ++i) {
      this._refs.push(React.createRef());
    }
    _topInput = React.createRef();
    _bottomInput = React.createRef();
    _nativeOffset = {
      y: new Animated.Value(0),
    };
    const arr = [];
    for (let i = 0; i < this._contentCount; ++i) arr.push(i);
    return (
      <TestSuite name="SpringScrollView">                   
       <TestCase.Example
       tags={['C_API']}
       itShould="SpringScrollView">
      <SpringScrollView
        style={styles.container}
        ref={ref => (this._scrollView = ref)}
        contentStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={true}
        scrollEnabled={this.state.scrollEnabled}
        textInputRefs={this._refs}
        inputToolBarHeight={20}
        refreshHeader={NormalHeader}
        onRefresh={() => {
          setTimeout(() => this._scrollView?.endRefresh(), 1000);
        }}
        initialContentOffset={{x: 0, y: 550}}
        loadingFooter={NormalFooter}
        loadingFooterHeight={80}
        onTouchBegin={this._onTouchBegin}
        onTouchFinish={this._onTouchEnd}
        onMomentumScrollBegin={this.onMomentumScrollBegin}
        onMomentumScrollEnd={this._onMomentumScrollEnd}
        onNativeContentOffsetExtract={this._nativeOffset}
        onLoading={() => {
          setTimeout(() => this._scrollView?.endLoading(), 1000);
        }}
        tapToHideKeyboard={true}
        textInputRefs={[this._topInput, this._bottomInput]}
      >
        {arr.map((i, index) => (
            <Text key={index} style={styles.text}>
              Scroll and Look up the console log to check if
              'onScroll','onTouchBegin','onTouchEnd','onMomentumScrollBegin' and
              'onMomentumScrollEnd' work well!
            </Text>
          ))}
          <Animated.View style={this._stickyHeaderStyle}>
            <Text>Test `onNativeContentOffsetExtract`</Text>
          </Animated.View>
        <TextInput
          ref={this._topInput}
          style={styles.input}
          placeholder="Keyboard Test Top"
        />
        <Text style={styles.text}>
          Keyboard will never cover the focused TextInput
        </Text>
        <TextInput
          ref={this._bottomInput}
          style={styles.input}
          placeholder="Keyboard Test Bottom"
        />
      </SpringScrollView>
      </TestCase.Example>  
     </TestSuite>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
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
  },
  input: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  scrollTo: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: 'gray',
    zIndex: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

_scrollTo = () => {
  if (this._scrollView) {
    this._scrollView
      .scrollTo({x: 0, y: 200})
      .then(() => console.log('ScrollTo has finished'));
  }
};

_onTouchBegin = () => {
  console.log('jslog onTouchBegin');
};

_onTouchEnd = () => {
  console.log('jslog onTouchEnd11111');
};

onMomentumScrollBegin = () => {
  console.log('jslog onMomentumScrollBegin');
};

_onMomentumScrollEnd = () => {
  console.log('jslog onMomentumScrollEnd');
};

export default RNSpringScrollViewTest;