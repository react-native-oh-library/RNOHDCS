import React, { Component } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';

export class ColorPickerSlider extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      trackWidth: 0,
    };

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: () => {
        this.startValue = this.props.value || 0;
      },

      onPanResponderMove: (_, gestureState) => {
        if (this.state.trackWidth === 0) return;

        const deltaValue = gestureState.dx / this.state.trackWidth;
        let newValue = Math.max(0, Math.min(1, this.startValue + deltaValue));

        if (this.props.onValueChange) {
          this.props.onValueChange(newValue);
        }
      },
    });
  }

  handleLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    this.setState({ trackWidth: width });
  };

  render() {
    const { trackWidth } = this.state;
    const { value = 0 } = this.props;
    const thumbLeft = value * trackWidth - 10; // 10 = THUMB_SIZE / 2

    return (
      <View style={styles.container}>
        <View style={styles.trackContainer} onLayout={this.handleLayout}>
          <View style={styles.track} />
          <View style={[styles.filledTrack, { width: value * trackWidth }]} />
        </View>
        
        {trackWidth > 0 && (
          <View
            style={[styles.thumb, { left: thumbLeft }]}
            {...this._panResponder.panHandlers}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  trackContainer: {
    flex: 1,
    height: 4,
    justifyContent: 'center',
  },
  track: {
    height: 4,
    backgroundColor: '#b3b3b3',
    borderRadius: 2,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  filledTrack: {
    height: 4,
    backgroundColor: '#007AFF',
    borderRadius: 2,
    position: 'absolute',
    left: 0,
  },
  thumb: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
});