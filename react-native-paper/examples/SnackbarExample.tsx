import * as React from 'react';
import { View ,StyleSheet} from 'react-native';
import {Snackbar,Button} from 'react-native-paper';

const SHORT_MESSAGE = 'Single-line snackbar';
const LONG_MESSAGE =
  'Snackbar with longer message which does not fit in one line';


import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function SnackbarDemo() { 
  return (
    <Tester>
    <TestSuite name='SnackbarDemo' >
        <TestCase itShould='Default'>
          <SnackbarExample></SnackbarExample>
        </TestCase>
     </TestSuite>
    </Tester>
  )
}

const SnackbarExample  = () => {
  const [options, setOptions] = React.useState({
    showSnackbar: false,
    showAction: true,
    showCloseIcon: false,
    showLongerMessage: false,
    showLongerAction: false,
  });

  const {
    showSnackbar,
    showAction,
    showCloseIcon,
    showLongerMessage,
    showLongerAction,
  } = options;

  const action = {
    label: showLongerAction ? 'Toggle Theme' : 'Action',
    onPress: () => {
      //preferences?.toggleTheme();
    },
  };

  return (
    <View style={styles.wrapper}>
      <Button
          mode="outlined"
          onPress={() =>
            setOptions({ ...options, showSnackbar: !showSnackbar })
          }
        >
          {showSnackbar ? 'Hide' : 'Show'}
        </Button>
        <Snackbar
        visible={showSnackbar}
        onDismiss={() => setOptions({ ...options, showSnackbar: false })}
        action={showAction ? action : undefined}
        onIconPress={
          showCloseIcon
            ? () => setOptions({ ...options, showSnackbar: false })
            : undefined
        }
        duration={Snackbar.DURATION_MEDIUM}
        style={showLongerAction && styles.longerAction}
      >
        {showLongerMessage ? LONG_MESSAGE : SHORT_MESSAGE}
      </Snackbar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  longerAction: {
    flexDirection: 'column',
  },
});

export default SnackbarDemo ;