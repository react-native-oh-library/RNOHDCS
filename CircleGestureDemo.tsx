import React, { Component } from 'react';
import { Animated, Dimensions } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

const { width } = Dimensions.get('screen');
const circleRadius = 30;
const url = 'https://res.vmallres.com/pimages/uomcdn/CN/pms/202304/sbom/4002010007801/group/800_800_9B1356F1330EADDCB20D35D2AE1F46E0.jpg';

class Circle extends Component {
  _touchX = new Animated.Value(width / 2 - circleRadius);

  _onPanGestureEvent = Animated.event([{ nativeEvent: { x: this._touchX } }], {
    useNativeDriver: true,
  });

  render() {
    return (
      <GestureHandlerRootView>
        <PanGestureHandler onGestureEvent={this._onPanGestureEvent}>
          <Animated.View
            style={{
              height: 150,
              justifyContent: 'center',
            }}>
            <Animated.Image style={[
                {
                    backgroundColor: '#42a5f5',
                    borderRadius: circleRadius,
                    height: circleRadius * 2,
                    width: circleRadius * 2,
                },
                {
                transform: [
                    {
                    translateX: Animated.add(
                        this._touchX,
                        new Animated.Value(-circleRadius)
                    ),
                    },
                ],
                },
            ]} 
            source={{uri: url}}/>
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    );
  }
}

export default function App() {
  return <Circle />;
}