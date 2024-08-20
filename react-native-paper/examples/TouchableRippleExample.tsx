import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { MD2Colors, Text, TouchableRipple } from 'react-native-paper';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';;

function TouchableRippleDemo() { 

  const _onPress = () => {
    console.info('fuction onPress')
  }

  const _onLongPress =() => {
    console.info('fuction onLongPress')
  }

  const _onPressIn =() => {
    console.info('fuction onPressIn')
  }

  const _onPressOut =() => {
    console.info('fuction onPressOut')
  }

  const TouchableRippleProps = [
    {
      key: 'TouchableRipple style:borderless={true}',
      value: {
        borderless:true,
        style:styles.ripple,
        rippleColor:MD2Colors.red100,
        onPress:_onPress
      }
    },
    {
      key: 'TouchableRipple style:borderless={false}',
      value: {
        borderless:false,
        style:styles.ripple,
        rippleColor:MD2Colors.red100,
        onPress:_onPress
      }
    },
    {
      key: 'TouchableRipple background:borderless={color:MD2Colors.red100}(改属性只限于Android)',
      value: {
        background:{color:MD2Colors.red100},
        style:styles.ripple,
        rippleColor:MD2Colors.red100,
        onPress:_onPress
      }
    },
    {
      key: 'TouchableRipple style:centered={true}',
      value: {
        centered:true,
        style:styles.ripple,
        rippleColor:MD2Colors.red100,
        onPress:_onPress
      }
    },
    {
      key: 'TouchableRipple style:centered={false}',
      value: {
        centered:false,
        style:styles.ripple,
        rippleColor:MD2Colors.red100,
        onPress:_onPress
      }
    },
    {
      key: 'TouchableRipple style:disabled={true}',
      value: {
        disabled:true,
        style:styles.ripple,
        rippleColor:MD2Colors.red100,
        onPress:_onPress
      }
    },
    {
      key: 'TouchableRipple style:disabled={false}',
      value: {
        disabled:false,
        style:styles.ripple,
        rippleColor:MD2Colors.red100,
        onPress:_onPress
      }
    },
    {
      key: 'TouchableRipple fuction:onPressIn={_onPressIn}',
      value: {
        disabled:false,
        style:styles.ripple,
        rippleColor:MD2Colors.red100,
        onPressIn:_onPressIn
      }
    },
    {
      key: 'TouchableRipple fuction:onPressOut={_onPressOut}',
      value: {
        disabled:false,
        style:styles.ripple,
        rippleColor:MD2Colors.red100,
        onPressOut:_onPressOut
      }
    },
    {
      key: 'TouchableRipple style:rippleColor={MD2Colors.red100}',
      value: {
        disabled:false,
        style:styles.ripple,
        rippleColor:MD2Colors.red100,
        onPress:_onPress
      }
    },
    {
      key: 'TouchableRipple style:underlayColor={MD2Colors.blue100}',
      value: {
        disabled:false,
        style:styles.ripple,
        rippleColor:MD2Colors.red100,
        underlayColor:MD2Colors.blue100,
        onPress:_onPress
      }
    },
    {
      key: 'TouchableRipple style:styles.ripple',
      value: {
        disabled:false,
        style:styles.ripple,
        rippleColor:MD2Colors.red100,
        underlayColor:MD2Colors.blue100,
      }
    },
    {
      key: 'TouchableRipple style:theme = { colors: { primary:"green"} },',
      value: {
        disabled:false,
        style:styles.ripple,
        rippleColor:MD2Colors.red100,
        underlayColor:MD2Colors.blue100,
        theme:{ colors: { primary: 'green' } },
      }
    },
  ]

  return (
    <ScrollView>
    <Tester>
     <TestSuite name='Ripple' >
     {TouchableRippleProps.map((item) => {
      return (
        <TestCase itShould={item.key}  key={item.key}>
          <View style = {{width:'100%',height:200}}>
            <TouchableRipple {...item.value}>
              <View pointerEvents="none">
                <Text variant="bodyMedium">Press anywhere</Text>
              </View>
            </TouchableRipple>
          </View>
        </TestCase>
        );
      })},
     </TestSuite>
    </Tester>
    </ScrollView>
  )
}

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