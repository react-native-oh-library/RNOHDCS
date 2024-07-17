import React, {Component} from 'react';
import {Animated, Dimensions, Text, View} from 'react-native';
import {
  GestureEvent,
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

const {width} = Dimensions.get('screen');
const circleRadius = 30;
const url =
  'https://res.vmallres.com/pimages/uomcdn/CN/pms/202304/sbom/4002010007801/group/800_800_9B1356F1330EADDCB20D35D2AE1F46E0.jpg';

export class IssueWithAnimatedEvent extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      absoluteX: 0,
      absoluteY: 0,
      handlerTag: 0,
      numberOfPointers: 0,
      state: 0,
      translationX: 0,
      translationY: 0,
      velocityX: 0,
      velocityY: 0,
      x: 0,
      y: 0,
    };
  }

  _touchX = new Animated.Value(width / 2 - circleRadius);

  _onPanGestureEvent = Animated.event([{nativeEvent: {x: this._touchX}}], {
    listener: (e: GestureEvent<PanGestureHandlerEventPayload>) => {
      this.setState({
        absoluteX: e.nativeEvent.absoluteX,
        absoluteY: e.nativeEvent.absoluteY,
        handlerTag: e.nativeEvent.handlerTag,
        numberOfPointers: e.nativeEvent.numberOfPointers,
        state: e.nativeEvent.state,
        translationX: e.nativeEvent.translationX,
        translationY: e.nativeEvent.translationY,
        velocityX: e.nativeEvent.velocityX,
        velocityY: e.nativeEvent.velocityY,
        x: e.nativeEvent.x,
        y: e.nativeEvent.y,
      });
    },
    useNativeDriver: true,
  });

  render() {
    return (
      <GestureHandlerRootView>
        <View style={{width: 256, height: 200}}>
          <Text
            style={{
              width: 256,
              height: 128,
              fontSize: 8,
              backgroundColor: '#EEE',
            }}>
            {this.state === undefined
              ? 'undefined'
              : JSON.stringify(this.state)}
          </Text>
        </View>
        <PanGestureHandler onGestureEvent={this._onPanGestureEvent}>
          <Animated.View
            style={{
              height: 150,
              justifyContent: 'center',
            }}>
            <Animated.Image
              style={[
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
                        new Animated.Value(-circleRadius),
                      ),
                    },
                  ],
                },
              ]}
              source={{uri: url}}
            />
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    );
  }
}
