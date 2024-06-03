import * as React from 'react';
import { Alert, View ,StyleSheet} from 'react-native';
import { FAB, MD2Theme,
  MD3Theme,
  useTheme,Text,Portal,Button } from 'react-native-paper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function FABText() { 
  const [visible, setVisible] = React.useState<boolean>(false);
  const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();
  const { isV3 } = useExampleTheme();
  const [toggleStackOnLongPress, setToggleStackOnLongPress] =
  React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Tester>
    <TestSuite name='FAB' >
        <TestCase itShould='FAB.Group'>
          <Button
            mode="outlined"
            onPress={() => setVisible(!visible)}
            style={styles.button}
            >
            FAB.Group
          </Button>
          <Portal>
          <FAB.Group
            open={open}
            icon={open ? 'calendar-today' : 'plus'}
            toggleStackOnLongPress={toggleStackOnLongPress}
            actions={[
              { icon: 'plus', onPress: () => {} },
              { icon: 'star', label: 'Star', onPress: () => {} },
              { icon: 'email', label: 'Email', onPress: () => {} },
              {
                icon: 'bell',
                label: 'Remind',
                onPress: () => {},
                size: isV3 ? 'small' : 'medium',
              },
              {
                icon: toggleStackOnLongPress
                  ? 'gesture-tap'
                  : 'gesture-tap-hold',
                label: toggleStackOnLongPress
                  ? 'Toggle on Press'
                  : 'Toggle on Long Press',
                onPress: () => {
                  setToggleStackOnLongPress(!toggleStackOnLongPress);
                },
              },
            ]}
            enableLongPressWhenStackOpened
            onStateChange={({ open }: { open: boolean }) => setOpen(open)}
            onPress={() => {}}
            onLongPress={() => {}}
            visible={visible}
          />
        </Portal>
        </TestCase>
     </TestSuite>
    </Tester>
  )
}
const styles = StyleSheet.create({
    container: {
      padding: 4,
    },
    row: {
      marginBottom: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    column: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
    },
    fab: {
      margin: 8,
    },
    fabVariant: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    button: {
      margin: 4,
    },
  });  

export default FABText ;