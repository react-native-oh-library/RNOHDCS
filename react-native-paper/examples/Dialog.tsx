import * as React from 'react';
import { Platform, ScrollView, StyleSheet, TextComponent, View } from 'react-native';

import { Button, Portal,
  Dialog,Text, MD2Colors
} from 'react-native-paper';

type DialogVisibility = {
  [key: string]: boolean | undefined;
};

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

export function DialogText() {

  const [visibility, setVisibility] = React.useState<DialogVisibility>({});
  const _getVisibility = (name: string) => !!visibility[name];
  const _showVisibility = (name: string) => () =>
  setVisibility({ ...visibility, [name]: !visibility[name] });

  const DialogProps = [
    {
        key: 'Dialog style: dismissable  is true(该示例包含onDismiss、visiblechildr等属性示例)',
        buttonKey:'dismissable button',
        buttonValue:{
          onPress:_showVisibility("Dialog"),
          style:styles.button
        },
        dialogActions:{
          onPress:_showVisibility('Dialog')
        },
        value: {
          visible:_getVisibility("Dialog"),
          onDismiss:_showVisibility('Dialog'),
          dismissable:true
        } 
    },
    {
      key: 'Dialog style: dismissable  is false(该示例包含onDismiss、visiblechildr等属性示例)',
      buttonKey:'dismissable button',
      buttonValue:{
        onPress:_showVisibility("Dialog1"),
        style:styles.button
      },
      dialogActions:{
        onPress:_showVisibility('Dialog1')
      },
      value: {
        visible:_getVisibility("Dialog1"),
        onDismiss:_showVisibility('Dialog1'),
        dismissable:false
      } 
    },
    {
      key: 'Dialog style: dismissableBackButton  is true',
      buttonKey:'dismissable button',
      buttonValue:{
        onPress:_showVisibility("Dialog2"),
        style:styles.button
      },
      dialogActions:{
        onPress:_showVisibility('Dialog2')
      },
      value: {
        visible:_getVisibility("Dialog2"),
        onDismiss:_showVisibility('Dialog2'),
        dismissableBackButton:true
      } 
    },
    {
      key: 'Dialog style: dismissableBackButton  is false',
      buttonKey:'dismissable button',
      buttonValue:{
        onPress:_showVisibility("Dialog3"),
        style:styles.button
      },
      dialogActions:{
        onPress:_showVisibility('Dialog3')
      },
      value: {
        visible:_getVisibility("Dialog3"),
        onDismiss:_showVisibility('Dialog3'),
        dismissableBackButton:false
      } 
    },
    {
      key: 'Dialog style: style = {backgroundColor:MD2Colors.red100} testID="dialog1"',
      buttonKey:'dismissable button',
      buttonValue:{
        onPress:_showVisibility("Dialog4"),
        style:styles.button
      },
      dialogActions:{
        onPress:_showVisibility('Dialog4')
      },
      value: {
        visible:_getVisibility("Dialog4"),
        onDismiss:_showVisibility('Dialog4'),
        dismissableBackButton:false,
        style:{backgroundColor:MD2Colors.red100},
        testID:'dialog'
      } 
    },
    {
      key: 'Dialog style: style = {backgroundColor:MD2Colors.red100} testID="dialog2"',
      buttonKey:'dismissable button',
      buttonValue:{
        onPress:_showVisibility("Dialog5"),
        style:styles.button
      },
      dialogActions:{
        onPress:_showVisibility('Dialog5')
      },
      value: {
        visible:_getVisibility("Dialog5"),
        onDismiss:_showVisibility('Dialog5'),
        testID:'dialog2'
      } 
    }
  ]

  const DialogActionsProps = [
    {
      key: 'DialogActions style:{backgroundColor:MD2Colors.red100} children:<Button></Button> theme:{ colors: { primary: "green" }}',
      buttonKey:'Dialog.Actions button',
      buttonValue:{
        onPress:_showVisibility("DialogActions6"),
        style:styles.button
      },
      dialogActions:{
        onPress:_showVisibility('DialogActions6')
      },
      value: {
        visible:_getVisibility("DialogActions6"),
        onDismiss:_showVisibility('DialogActions6'),
        style:{backgroundColor:MD2Colors.red100},
        theme:{ colors: { primary: 'green' }}
      } 
    }
  ]

  const DialogContentProps = [
    {
      key: 'DialogContent style:{backgroundColor:MD2Colors.red100} children:<Text></Text>',
      buttonKey:'Dialog.Actions button',
      buttonValue:{
        onPress:_showVisibility("DialogContent7"),
        style:styles.button
      },
      dialogActions:{
        onPress:_showVisibility('DialogContent7')
      },
      value: {
        visible:_getVisibility("DialogContent7"),
        onDismiss:_showVisibility('DialogContent7'),
        style:{backgroundColor:MD2Colors.red100}
      } 
    }
  ]

const DialogIconProps = [
    {
      key: 'DialogIcon style:color={MD2Colors.red100} icon={alert} size={24}',
      buttonKey:'Dialog.Actions button',
      buttonValue:{
        onPress:_showVisibility("DialogIcon8"),
        style:styles.button
      },
      value: {
        visible:_getVisibility("DialogIcon8"),
        onDismiss:_showVisibility('DialogIcon8'),
      }, 
      dialogIconValue:{
        icon:'alert',
        color:MD2Colors.red100,
        size:24,
      }
    },
    {
      key: 'DialogIcon style:color={MD2Colors.blue100} icon={alert} size={50}',
      buttonKey:'Dialog.Actions button',
      buttonValue:{
        onPress:_showVisibility("DialogIcon9"),
        style:styles.button
      },
      value: {
        visible:_getVisibility("DialogIcon9"),
        onDismiss:_showVisibility('DialogIcon9'),
      }, 
      dialogIconValue:{
        icon:'alert',
        color:MD2Colors.blue100,
        size:50,
        theme:{ colors: { primary: 'green' }}
      }
    },
  ]

  const DialogScrollAreaProps = [
    {
      key: 'DialogScrollArea theme={{ colors: { primary: "green" } }} style={{backgroundColor:MD2Colors.red100}}  children:<Text></Text>',
      buttonKey:'Dialog.Actions button',
      buttonValue:{
        onPress:_showVisibility("DialogScro10"),
        style:styles.button
      },
      value: {
        visible:_getVisibility("DialogScro10"),
        onDismiss:_showVisibility('DialogScro10'),
      },
    },
  ]

  const DialogTitleAreaProps = [
    {
      key: 'DialogScrollArea theme={{ colors: { primary: "green" } }} style={{backgroundColor:MD2Colors.red100}}  children:This is a title',
      buttonKey:'Dialog.Actions button',
      buttonValue:{
        onPress:_showVisibility("DialogScro11"),
        style:styles.button
      },
      value: {
        visible:_getVisibility("DialogScro11"),
        onDismiss:_showVisibility('DialogScro11'),
      },
    },
  ]

  return (
  <Tester>
    <ScrollView>
    <TestSuite name='Dialog' >
        {DialogProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                <Button {...item.buttonValue}>
                {item.buttonKey}
              </Button>
              <Portal>
              <Dialog {...item.value}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                  <Text variant="bodyMedium">This is simple dialog</Text>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button {...item.dialogActions}>Done</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
            </TestCase>
            );
        })},
        {DialogActionsProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                 <Button  {...item.buttonValue}>{item.buttonKey}</Button>
                 <Portal>
                  <Dialog {...item.value}>
                    <Dialog.Actions>
                      <Button {...item.dialogActions}>Cancel</Button>
                      <Button onPress={() => console.log('Ok')}>Ok</Button>
                    </Dialog.Actions>
                  </Dialog>
                 </Portal>
              </TestCase>
            );
        })}  
        {DialogContentProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                 <Button  {...item.buttonValue}>{item.buttonKey}</Button>
                 <Portal>
                  <Dialog {...item.value}>
                    <Dialog.Content>
                      <Text variant="bodyMedium">This is simple dialog</Text>
                    </Dialog.Content>
                  </Dialog>
                 </Portal>
              </TestCase>
            );
        })}  
        {DialogIconProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                 <Button  {...item.buttonValue}>{item.buttonKey}</Button>
                 <Portal>
                  <Dialog {...item.value}>
                  <Dialog.Icon {...item.dialogIconValue} />
                    <Dialog.Title style={styles.title}>This is a title</Dialog.Title>
                    <Dialog.Content>
                      <Text variant="bodyMedium">This is simple dialog</Text>
                    </Dialog.Content>
                  </Dialog>
                 </Portal>
              </TestCase>
            );
        })}  
        {DialogScrollAreaProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                 <Button  {...item.buttonValue}>{item.buttonKey}</Button>
                 <Portal>
                  <Dialog {...item.value}>
                   <Dialog.ScrollArea theme={{ colors: { primary: 'green' } }} style={{backgroundColor:MD2Colors.red100}} >
                    <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
                      <Text>
                        Material is the metaphor
                        {'\n'}
                        {'\n'}A material metaphor is the unifying theory of a rationalized
                        space and a system of motion. The material is grounded in tactile
                        reality, inspired by the study of paper and ink, yet technologically
                        advanced and open to imagination and magic.
                        {'\n'}
                        {'\n'}
                        Surfaces and edges of the material provide visual cues that are
                        grounded in reality. The use of familiar tactile attributes helps
                        users quickly understand affordances. Yet the flexibility of the
                        material creates new affordances that supersede those in the
                        physical world, without breaking the rules of physics.
                      
                      </Text>
                    </ScrollView>
                  </Dialog.ScrollArea>
                  </Dialog>
                 </Portal>
              </TestCase>
            );
        })} 
        {DialogTitleAreaProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                 <Button  {...item.buttonValue}>{item.buttonKey}</Button>
                 <Portal>
                  <Dialog {...item.value}>
                  <Dialog.Title theme={{ colors: { primary: "green" } }} style={{backgroundColor:MD2Colors.red100}}>This is a title</Dialog.Title>
                  <Dialog.Content>
                    <Text variant="bodyMedium">This is simple dialog</Text>
                  </Dialog.Content>
                  </Dialog>
                 </Portal>
              </TestCase>
            );
        })}   
    </TestSuite>
    </ScrollView>
 </Tester>
 )
}
const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor:'#FFFFFF',
    padding: 12,
  },
  title: {
    textAlign: 'center',
  },
  button: {
    margin: 4,
  },
});

export default DialogText;
