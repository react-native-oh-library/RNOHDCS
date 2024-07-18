import React from 'react';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { Button, StyleSheet, Text, ScrollView, Dimensions, View } from 'react-native';
import { Popover, usePopover } from 'react-native-modal-popover';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  app: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c2ffd2',
    height: height - 200,

  },
  content: {
    padding: 16,
    backgroundColor: 'pink',
    borderRadius: 8,
  },
  arrow: {
    borderTopColor: 'pink',
  },
  background: {
    backgroundColor: 'rgba(0, 0, 255, 0.5)',
  },
});

export function PopoverOnePopoverExample() {
  const [cbMsg, setCbMsg] = React.useState<string>('');
  const [easingMsg, setEasingMsg] = React.useState<string>('');

  const OnePopover = (prpos: any) => {
    const {
      openPopover,
      closePopover,
      popoverVisible,
      touchableRef,
      popoverAnchorRect,
    } = usePopover();
    return <View>
      <Button title={prpos.name} ref={touchableRef} onPress={openPopover} />
      <Popover
        contentStyle={styles.content}
        arrowStyle={styles.arrow}
        backgroundStyle={styles.background}
        visible={popoverVisible}
        onClose={closePopover}
        fromRect={popoverAnchorRect}
        supportedOrientations={['portrait', 'landscape']}
        {...prpos.prop}
      >
        <Text>Hello from inside popover!</Text>
      </Popover>
      {prpos?.msg && <Text>{prpos?.msg}</Text>}
    </View>
  }

  const testProps = [
    {
      prop: {
        displayArea: {
          x: 30,
          y: 100,
          width: 100,
          height: 10,
        }
      },
      name: '自定义displayArea1'
    },
    {
      prop: {
        displayArea: {
          x: 130,
          y: 0,
          width: 200,
          height: 0,
        }
      },
      name: '自定义displayArea2'
    },
    {
      prop: { placement: 'auto' },
      name: '自定义placement(auto)'
    },
    {
      prop: { placement: 'top' },
      name: '自定义placement(top)'
    },
    {
      prop: { placement: 'bottom' },
      name: '自定义placement(bottom)'
    },
    {
      prop: { placement: 'start' },
      name: '自定义placement(start)'
    },
    {
      prop: { placement: 'end' },
      name: '自定义placement(end)'
    },
    {
      prop: { onDismiss: () => setCbMsg('onDismiss(success)') },
      name: '自定义onDismiss',
      msg: cbMsg
    },
    {
      prop: {
        backgroundStyle: {
          backgroundColor: 'rgba(100, 200, 255, 0.2)',
        }
      },
      name: '自定义backgroundStyle1',
    },
    {
      prop: {
        backgroundStyle: {
          backgroundColor: 'rgba(600, 600, 0, 0.8)',
        }
      },
      name: '自定义backgroundStyle2',
    },
    {
      prop: {
        contentStyle: {
          padding: 32,
          backgroundColor: 'red',
          borderRadius: 0,
        }
      },
      name: '自定义contentStyle1',
    },
    {
      prop: {
        contentStyle: {
          padding: 0,
          backgroundColor: 'yellow',
          borderRadius: 20,
        }
      },
      name: '自定义contentStyle2',
    },
    {
      prop: {
        arrowStyle: {
          borderTopColor: 'white',
        }
      },
      name: '自定义arrowStyle1',
    },
    {
      prop: {
        arrowStyle: {
          borderTopColor: 'red',
        }
      },
      name: '自定义arrowStyle2',
    },
    {
      prop: { duration: 1000 },
      name: '自定义duration(1000)毫秒',
    },
    {
      prop: { duration: 3000 },
      name: '自定义duration(3000)毫秒',
    },
    {
      prop: {
        easing: (show: boolean) => {
          return (value: number) => {
            show ? setEasingMsg(`easing(true)(${value})`) : setEasingMsg(`easing(false)(${value})`)
          }
        }
      },
      name: '自定义easing',
      msg: easingMsg
    },
    {
      prop: { useNativeDriver: false },
      name: '自定义useNativeDriver(false)',
    },
    {
      prop: { useNativeDriver: true },
      name: '自定义useNativeDriver(true)',
    },
    {
      prop: { supportedOrientations: ['portrait-upside-down', 'landscape-left'] },
      name: '自定义supportedOrientations1',
    },
    {
      prop: { supportedOrientations: ['portrait-upside-down', 'landscape-right'] },
      name: '自定义supportedOrientations2',
    },
    {
      prop: { calculateStatusBar: false },
      name: '自定义calculateStatusBar(false)',
    },
    {
      prop: { calculateStatusBar: true },
      name: '自定义calculateStatusBar(true)',
    }
  ]

  return (
    <ScrollView>
      <Tester>
        <TestSuite name='PopoverOnePopoverExample'>
          {testProps.map((test) => (<TestCase itShould={JSON.stringify(test.prop)} tags={['C_API']}>
            <OnePopover {...test} />
          </TestCase>)
          )}
        </TestSuite>
      </Tester>
    </ScrollView>
  );
};
