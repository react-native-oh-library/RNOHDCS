import * as React from 'react';
import { useTheme,MD2Theme,MD3Theme,Paragraph,Switch,MD3Colors,MD2Colors} from 'react-native-paper'
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function SnackbarDemo() { 

  const [valueNormal, setNormalValue] = React.useState<boolean>(true);
  const [valueCustom, setCustomValue] = React.useState<boolean>(true);
  const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();
  const { isV3 } = useExampleTheme();

  return (
    <Tester>
    <TestSuite name='Snackbar' >
        <TestCase itShould='Normal'>
          <Switch
            value={valueNormal}
            onValueChange={() => setNormalValue(!valueNormal)}
          />
        </TestCase>

        <TestCase itShould='Custom'>
          <Switch
            value={valueCustom}
            onValueChange={() => setCustomValue(!valueCustom)}
            color={isV3 ? MD3Colors.tertiary50 : MD2Colors.blue500}
          />
        </TestCase>

        <TestCase itShould='Switch on (disabled)'>
          <Switch value disabled />
        </TestCase>

        <TestCase itShould='Switch off (disabled)'>
          <Switch value={false} disabled />
        </TestCase>
     </TestSuite>
    </Tester>
  )
}


export default SnackbarDemo ;