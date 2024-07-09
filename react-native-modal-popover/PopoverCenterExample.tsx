
import React from 'react';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Popover, usePopover } from 'react-native-modal-popover';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  app: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: height - 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#c2ffd2',
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

export function PopoverCenterExample() {
  const {
    openPopover,
    closePopover,
    popoverVisible,
    touchableRef,
    popoverAnchorRect,
  } = usePopover();
  const {
    openPopover: openPopover1,
    closePopover: closePopover1,
    popoverVisible: popoverVisible1,
    touchableRef: touchableRef1,
    popoverAnchorRect: popoverAnchorRect1,
  } = usePopover();
  const {
    openPopover: openPopover2,
    closePopover: closePopover2,
    popoverVisible: popoverVisible2,
    touchableRef: touchableRef2,
    popoverAnchorRect: popoverAnchorRect2,
  } = usePopover();
  const {
    openPopover: openPopover4,
    closePopover: closePopover4,
    popoverVisible: popoverVisible4,
    touchableRef: touchableRef4,
    popoverAnchorRect: popoverAnchorRect4,
  } = usePopover();
  const {
    openPopover: openPopover3,
    closePopover: closePopover3,
    popoverVisible: popoverVisible3,
    touchableRef: touchableRef3,
    popoverAnchorRect: popoverAnchorRect3,
  } = usePopover();
  const {
    openPopover: openPopover5,
    closePopover: closePopover5,
    popoverVisible: popoverVisible5,
    touchableRef: touchableRef5,
    popoverAnchorRect: popoverAnchorRect5,
  } = usePopover();
  const {
    openPopover: openPopover6,
    closePopover: closePopover6,
    popoverVisible: popoverVisible6,
    touchableRef: touchableRef6,
    popoverAnchorRect: popoverAnchorRect6,
  } = usePopover();
  const {
    openPopover: openPopover7,
    closePopover: closePopover7,
    popoverVisible: popoverVisible7,
    touchableRef: touchableRef7,
    popoverAnchorRect: popoverAnchorRect7,
  } = usePopover();
  const {
    openPopover: openPopover8,
    closePopover: closePopover8,
    popoverVisible: popoverVisible8,
    touchableRef: touchableRef8,
    popoverAnchorRect: popoverAnchorRect8,
  } = usePopover();
  const title = <Text ref={touchableRef} >Press me!222</Text>
  return (
    <Tester>
      <TestSuite name='popoverTesteCenterDemo'>
        <TestCase itShould='popover' tags={['C_API']}>
          <View style={styles.app} >
            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Button title='Press1' ref={touchableRef} onPress={openPopover} />
              <Button title='Press2' ref={touchableRef1} onPress={openPopover1} />
              <Button title='Press3' ref={touchableRef2} onPress={openPopover2} />
            </View>
            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Button title='Press4' ref={touchableRef3} onPress={openPopover3} />
              <Button title='Press5' ref={touchableRef4} onPress={openPopover4} />
              <Button title='Press6' ref={touchableRef5} onPress={openPopover5} />
            </View>
            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Button title='Press7' ref={touchableRef6} onPress={openPopover6} />
              <Button title='Press8' ref={touchableRef7} onPress={openPopover7} />
              <Button title='Press9' ref={touchableRef8} onPress={openPopover8} />
            </View>
            <Popover
              // placement={'top'}
              contentStyle={styles.content}
              arrowStyle={styles.arrow}
              backgroundStyle={styles.background}
              visible={popoverVisible6}
              onClose={closePopover6}
              fromRect={popoverAnchorRect6}
              supportedOrientations={['portrait', 'landscape']}>
              <Text>Hello77!</Text>
            </Popover>

            <Popover
              placement={'top'}
              contentStyle={styles.content}
              arrowStyle={styles.arrow}
              backgroundStyle={styles.background}
              visible={popoverVisible7}
              onClose={closePopover7}
              fromRect={popoverAnchorRect7}
              supportedOrientations={['portrait', 'landscape']}>
              <Text>Hello88!</Text>
            </Popover>
            <Popover
              contentStyle={styles.content}
              arrowStyle={styles.arrow}
              backgroundStyle={styles.background}
              visible={popoverVisible8}
              onClose={closePopover8}
              fromRect={popoverAnchorRect8}
              supportedOrientations={['portrait', 'landscape']}>
              <Text>Hello99!</Text>
            </Popover>
            <Popover
              // placement={'top'}
              contentStyle={styles.content}
              arrowStyle={styles.arrow}
              backgroundStyle={styles.background}
              visible={popoverVisible3}
              onClose={closePopover3}
              fromRect={popoverAnchorRect3}
              supportedOrientations={['portrait', 'landscape']}>
              <Text>Hello44!</Text>
            </Popover>

            <Popover
              placement={'top'}
              contentStyle={styles.content}
              arrowStyle={styles.arrow}
              backgroundStyle={styles.background}
              visible={popoverVisible4}
              onClose={closePopover4}
              fromRect={popoverAnchorRect4}
              supportedOrientations={['portrait', 'landscape']}>
              <Text>Hello55!</Text>
            </Popover>
            <Popover
              // placement={'top'}
              contentStyle={styles.content}
              arrowStyle={styles.arrow}
              backgroundStyle={styles.background}
              visible={popoverVisible5}
              onClose={closePopover5}
              fromRect={popoverAnchorRect5}
              supportedOrientations={['portrait', 'landscape']}>
              <Text>Hello66!</Text>
            </Popover>

            <Popover
              // placement={'top'}
              contentStyle={styles.content}
              arrowStyle={styles.arrow}
              backgroundStyle={styles.background}
              visible={popoverVisible}
              onClose={closePopover}
              fromRect={popoverAnchorRect}
              supportedOrientations={['portrait', 'landscape']}>
              <Text>Hello11!</Text>
            </Popover>

            <Popover
              placement={'top'}
              contentStyle={styles.content}
              arrowStyle={styles.arrow}
              backgroundStyle={styles.background}
              visible={popoverVisible1}
              onClose={closePopover1}
              fromRect={popoverAnchorRect1}
              supportedOrientations={['portrait', 'landscape']}>
              <Text>Hello22!</Text>
            </Popover>
            <Popover
              // placement={'top'}
              contentStyle={styles.content}
              arrowStyle={styles.arrow}
              backgroundStyle={styles.background}
              visible={popoverVisible2}
              onClose={closePopover2}
              fromRect={popoverAnchorRect2}
              supportedOrientations={['portrait', 'landscape']}>
              <Text>Hello33!</Text>
            </Popover>
          </View>
        </TestCase>

      </TestSuite>
    </Tester>
  );
};
