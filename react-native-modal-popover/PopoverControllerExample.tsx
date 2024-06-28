import React from 'react';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Popover, PopoverController } from 'react-native-modal-popover';
const { width, height } = Dimensions.get('window');

 function PopoverControllerApp(props: any) {
  return  <PopoverController>
          {({
            openPopover,
            closePopover,
            popoverVisible,
            setPopoverAnchor,
            popoverAnchorRect,
          }) => (
            <React.Fragment>
              <Button
                title={props?.title}
                ref={setPopoverAnchor}
                onPress={openPopover}
              />
              <Popover
                contentStyle={styles.content}
                arrowStyle={styles.arrow}
                backgroundStyle={styles.background}
                visible={popoverVisible}
                onClose={closePopover}
                fromRect={popoverAnchorRect}
                supportedOrientations={['portrait', 'landscape']}>
                <Text>Hello from inside popover!</Text>
              </Popover>
            </React.Fragment>
          )}
        </PopoverController>
     
};



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

export function PopoverControllerExample() {

  return (
    <Tester>
      <TestSuite name='popoverTesteCenterDemo'>
        <TestCase itShould='popover' tags={['C_API']}>
          <View style={styles.app} >
            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <PopoverControllerApp title='Press1'/>
              <PopoverControllerApp  title='Press2'/>
              <PopoverControllerApp title='Press2'/>
            </View>
            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <PopoverControllerApp title='Press3'/>
              <PopoverControllerApp  title='Press4'/>
              <PopoverControllerApp title='Press5'/>
            </View>
            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <PopoverControllerApp title='Press6'/>
              <PopoverControllerApp  title='Press7'/>
              <PopoverControllerApp title='Press8'/>
            </View>
          </View>
        </TestCase>

      </TestSuite>
    </Tester>
  );
};
