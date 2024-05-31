import * as React from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';

import { Button, MD2Theme,
    MD3Theme,
    useTheme} from 'react-native-paper';

import {
  DialogWithCustomColors,
  DialogWithDismissableBackButton,
  DialogWithIcon,
  DialogWithLoadingIndicator,
  DialogWithLongText,
  DialogWithRadioBtns,
  UndismissableDialog,
} from '../Dialogs';

type ButtonVisibility = {
  [key: string]: boolean | undefined;
};

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

export function DialogText() {

  const [visible, setVisible] = React.useState<ButtonVisibility>({});

  const _toggleDialog = (name: string) => () =>
    setVisible({ ...visible, [name]: !visible[name] });

  const _getVisible = (name: string) => !!visible[name];

  return (
  <Tester>
    <ScrollView>
    <TestSuite name='Dialog' >
       <TestCase itShould='DialogWithLongText'>
         <Button
          mode="outlined"
          onPress={_toggleDialog('dialog1')}
          style={styles.button}
          >
          Long text
        </Button>
        <DialogWithLongText
          visible={_getVisible('dialog1')}
          close={_toggleDialog('dialog1')}
        />
       </TestCase>

       <TestCase itShould='DialogWithRadioBtns'>
        <Button
          mode="outlined"
          onPress={_toggleDialog('dialog2')}
          style={styles.button}
        >
          Radio buttons
        </Button>
        <DialogWithRadioBtns
          visible={_getVisible('dialog2')}
          close={_toggleDialog('dialog2')}
        />
       </TestCase>

       <TestCase itShould='DialogWithLoadingIndicator'>
        <Button
          mode="outlined"
          onPress={_toggleDialog('dialog3')}
          style={styles.button}
        >
          Progress indicator
        </Button>
        <DialogWithLoadingIndicator
          visible={_getVisible('dialog3')}
          close={_toggleDialog('dialog3')}
        />
       </TestCase>

       <TestCase itShould='UndismissableDialog'>
        <Button
          mode="outlined"
          onPress={_toggleDialog('dialog4')}
          style={styles.button}
        >
          Undismissable Dialog
        </Button>
        <UndismissableDialog
          visible={_getVisible('dialog4')}
          close={_toggleDialog('dialog4')}
        />
       </TestCase>

       <TestCase itShould='DialogWithCustomColors'>
        <Button
          mode="outlined"
          onPress={_toggleDialog('dialog5')}
          style={styles.button}
        >
          Custom colors
        </Button>
        <DialogWithCustomColors
          visible={_getVisible('dialog5')}
          close={_toggleDialog('dialog5')}
        />
       </TestCase>

       <TestCase itShould='DialogWithIcon'>
        <Button
          mode="outlined"
          onPress={_toggleDialog('dialog6')}
          style={styles.button}
        >
          With icon
        </Button>
        <DialogWithIcon
          visible={_getVisible('dialog6')}
          close={_toggleDialog('dialog6')}
        />
       </TestCase>

       <TestCase itShould='DialogWithDismissableBackButton'>
        <Button
            mode="outlined"
            onPress={_toggleDialog('dialog7')}
            style={styles.button}
          >
            Dismissable back button
          </Button>
        <DialogWithDismissableBackButton
        visible={_getVisible('dialog7')}
        close={_toggleDialog('dialog7')}
         />
       </TestCase>
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
  button: {
    margin: 4,
  },
});

export default DialogText;
