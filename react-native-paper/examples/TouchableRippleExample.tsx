import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';;

function TouchableRippleDemo() { 
  return (
    <Tester>
     <TestSuite name='Ripple' >
        <TestCase itShould='Touchable Ripple'>
          <RippleExample></RippleExample>
        </TestCase>
     </TestSuite>
    </Tester>
  )
}
const RippleExample = () => {
  return (
    <View style = {{width:'100%',height:500}}>
       <TouchableRipple
        style={styles.ripple}
        onPress={() => {}}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <View pointerEvents="none">
          <Text variant="bodyMedium">Press anywhere</Text>
        </View>
      </TouchableRipple>
    </View>
  );
};

RippleExample.title = 'TouchableRipple';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ripple: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TouchableRippleDemo;