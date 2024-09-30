import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

export default function ConfettiCannonDemo() {

  return (
    <View style={{width: '100%', height: '100%'}}>
      <ConfettiCannon
        count={50}
        origin={{x: -10, y: -10}}
      />
    </View>
  )
}