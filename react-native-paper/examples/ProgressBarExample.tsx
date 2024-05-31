import * as React from 'react';
import { Alert, View,StyleSheet,Animated } from 'react-native';
import {Button,  ProgressBarProps,ProgressBar,MD2Theme,
  MD3Theme,
  MD3Colors,
  MD2Colors,
  useTheme,Text} from 'react-native-paper';
import ScreenWrapper from '../ScreenWrapper';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function ProgressBarDemo() { 

  const [visible, setVisible] = React.useState<boolean>(true);
  const [progress, setProgress] = React.useState<number>(0.3);
  const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();
  const theme = useExampleTheme();
  const { isV3 } = useExampleTheme();
  const { current: progressBarValue } = React.useRef(new Animated.Value(0));

  const runCustomAnimation = () => {
    progressBarValue.setValue(0);
    Animated.timing(progressBarValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Tester>
      <TestSuite name='ProgressBar' >
        <TestCase itShould='Default ProgressBar'>
           <ProgressBar progress={progress} visible={visible} />
        </TestCase>
                <TestCase itShould='Indeterminate ProgressBar'>
           <ProgressBar indeterminate visible={visible} />
        </TestCase>

        <TestCase itShould='ProgressBar with custom color'>
          <ProgressBar
            progress={progress}
            visible={visible}
            color={isV3 ? MD3Colors.error50 : MD2Colors.red800}
          />
        </TestCase>

        <TestCase itShould='ProgressBar with custom background color'>
          <ProgressBar
            progress={progress}
            visible={visible}
            color={MD2Colors.red800}
            style={{
              backgroundColor: isV3 ? MD3Colors.secondary50 : MD2Colors.teal500,
            }}
          />
        </TestCase>

        <TestCase itShould='ProgressBar with custom height'>
          <ProgressBar
            progress={progress}
            visible={visible}
            style={styles.customHeight}
          />
        </TestCase>

        <TestCase itShould='ProgressBar with animated value'>
          <Button onPress={runCustomAnimation}>Toggle animation</Button>
          <AnimatedProgressBar
            visible={visible}
            style={styles.progressBar}
            animatedValue={progressBarValue}
            theme={theme}
          />
        </TestCase>
     </TestSuite>
    </Tester>
  )
}

class ClassProgressBar extends React.Component {
  constructor(props: ProgressBarProps) {
    super(props);
  }

  render() {
    return <ProgressBar {...this.props} />;
  }
}

const AnimatedProgressBar = Animated.createAnimatedComponent(ClassProgressBar);
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    marginVertical: 10,
  },
  fullRow: {
    height: '100%',
    width: '100%',
  },
  customHeight: {
    height: 20,
  },
  progressBar: {
    height: 15,
  },
});

export default ProgressBarDemo;