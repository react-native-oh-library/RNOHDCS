import React  from 'react';
import {
  ActivityIndicator,
  MD2Theme,
  MD3Theme,
  useTheme,
  MD2Colors,
  MD3Colors,
} from 'react-native-paper';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

export function ActivityIndicatorTest() {
  const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();
  const { isV3 } = useExampleTheme();
  const [animating, setAnimating] = React.useState<boolean>(true);
  return (
    <Tester> 
    <TestSuite name='ActivityIndicator'>
      <TestCase itShould="large">
        <ActivityIndicator
              size="large"
              hidesWhenStopped={false}
            />
      </TestCase>

      <TestCase itShould="Custom size">
        <ActivityIndicator
          size={100}
          hidesWhenStopped={false}
        />
      </TestCase>

      <TestCase itShould="Custom color">
        <ActivityIndicator
            color={isV3 ? MD3Colors.error20 : MD2Colors.red500}
            hidesWhenStopped={false}
          />
      </TestCase>

      <TestCase itShould="Default">
         <ActivityIndicator animating={animating} hidesWhenStopped={false} />
      </TestCase>

    </TestSuite>
  </Tester>
  )
}

export default ActivityIndicatorTest;