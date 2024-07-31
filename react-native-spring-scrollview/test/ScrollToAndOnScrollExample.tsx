import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Animated,
  ScrollView,
} from 'react-native';
import {SpringScrollView} from 'react-native-spring-scrollview';

const AnimatedSpringScrollView = Animated.createAnimatedComponent(SpringScrollView);
export default class ScrollToAndOnScrollExample extends React.Component {
  _contentCount = 20;
  _scrollView;
  _nativeOffset = {
    y: new Animated.Value(0),
  };

  render() {
    const arr = [];
    for (let i = 0; i < this._contentCount; ++i) arr.push(i);
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.scrollTo} onPress={this._scrollTo}>
          <Text>Tap to ScrollTo y=200</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scrollTo} onPress={this._scroll}>
          <Text>scroll</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scrollTo} onPress={this._scrollToBegin}>
          <Text>scrollToBegin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scrollTo} onPress={this._scrollToEnd}>
          <Text>scrollToEnd</Text>
        </TouchableOpacity>
        <SpringScrollView
          style={styles.container}
          ref={(ref) => (this._scrollView = ref)}
          onTouchBegin={this._onTouchBegin}
          onTouchFinish={this._onTouchEnd}
          onMomentumScrollBegin={this.onMomentumScrollBegin}
          onMomentumScrollEnd={this._onMomentumScrollEnd}
          onNativeContentOffsetExtract={this._nativeOffset}
          onScroll={this._onScroll}
          bounces={true}
          onSizeChange={this._onSizeChange}
          onContentSizeChange={this._onContentSizeChange}
          onScrollBeginDrag={this._onScrollBeginDrag}
          >
          {arr.map((i, index) => (
            <Text key={index} style={styles.text}>
              Scroll and Look up the console log to check if
              'onScroll','onTouchBegin','onTouchEnd','onMomentumScrollBegin' and
              'onMomentumScrollEnd' work well!
            </Text>
          ))}
          <Animated.View style={this._stickyHeaderStyle}>
            <TouchableOpacity  onPress={this._onNativeContentOffsetExtract}>
            <Text>Test `onNativeContentOffsetExtract`</Text>
           </TouchableOpacity>
          </Animated.View>
        </SpringScrollView>
      </View>
    );
  }

  _stickyHeaderStyle = {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    transform: [{translateY: this._nativeOffset.y}],
  };


  _onScroll = offset => {
    console.log("onScroll", offset.nativeEvent);
  };

  _onSizeChange= (wh) => {
    console.log('onSizeChange:'+JSON.stringify(wh));

  };

  _onContentSizeChange= (wh) => {
    console.log('onContentSizeChange:'+JSON.stringify(wh));

  };

  _onNativeContentOffsetExtract = () => {
    console.log('onNativeContentOffsetExtract');
  };

  _onScrollBeginDrag = () => {
    console.log('onScrollBeginDrag');
  };

  _scroll = () => {
    console.log('scroll');
    if (this._scrollView) {
      this._scrollView
        .scroll({x: 0, y: 200});
    }
  };

  _scrollTo = () => {
    console.log('scrollTo');
    if (this._scrollView) {
      this._scrollView
        .scrollTo({x: 0, y: 200})
        .then(() => console.log('ScrollTo has finished'));
    }
  };

  _scrollToBegin = () => {
    console.log('scrollToBegin');
    if (this._scrollView) {
      this._scrollView.scrollToBegin(true);
    }
  };

  _scrollToEnd = () => {
    console.log('scrollToEnd');
    if (this._scrollView) {
      this._scrollView.scrollToEnd(true);
    }
  };


  _onTouchBegin = () => {
    console.log('onTouchBegin');
  };

  _onTouchEnd = () => {
    console.log('onTouchEnd');
  };

  onMomentumScrollBegin = () => {
    console.log('onMomentumScrollBegin');
  };
  _onMomentumScrollEnd = () => {
    console.log('onMomentumScrollEnd');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:400
  },
  scrollTo: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: 'gray',
    zIndex: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    margin: 20,
  },
});