import * as React from 'react';
import {StyleSheet,Animated, ScrollView } from 'react-native';
import {Button,  ProgressBarProps,ProgressBar,MD2Theme,
  MD3Theme,
  MD3Colors,
  MD2Colors,
  useTheme} from 'react-native-paper';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function ProgressBarDemo() { 

  const [visible, setVisible] = React.useState<boolean>(true);
  const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();
  const theme = useExampleTheme();
  const { current: progressBarValue } = React.useRef(new Animated.Value(0));

  const runCustomAnimation = () => {
    progressBarValue.setValue(0);
    Animated.timing(progressBarValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  
  const ProgressBarProps = [
    {
      key: ' ProgressBar style:progress={0.5}',
      value: {
        progress:0.5,
        color:MD3Colors.error50
      },

    },
    {
      key: ' ProgressBar style:progress={0.75}',
      value: {
        progress:0.75,
        color:MD3Colors.error50
      },
    },
    {
      key: ' ProgressBar style:color={MD2Colors.blue100}',
      value: {
        progress:0.75,
        color:MD2Colors.blue100
      },
    },
    {
      key: ' ProgressBar style:indeterminate={true}',
      value: {
        progress:0.75,
        color:MD3Colors.error50,
        indeterminate:true
      },
    },
    {
      key: ' ProgressBar style:indeterminate={false}',
      value: {
        progress:0.75,
        color:MD3Colors.error50,
        indeterminate:false
      },
    },
    {
      key: ' ProgressBar style:visible={true}',
      value: {
        progress:0.75,
        color:MD3Colors.error50,
        visible:true
      },
    },
    {
      key: ' ProgressBar style:visible={false}',
      value: {
        progress:0.75,
        color:MD3Colors.error50,
        visible:false
      },
    },
    {
      key: ' ProgressBar style:fillStyle={backgroundColor:MD2Colors.blue100}',
      value: {
        progress:0.75,
        color:MD3Colors.error50,
        fillStyle:{backgroundColor:MD2Colors.blue100},
      },
    },
    {
      key: ' ProgressBar style:style={backgroundColor:MD2Colors.blue100}',
      value: {
        progress:0.75,
        color:MD3Colors.error50,
        style:{backgroundColor:MD2Colors.blue100},
      },
    },
    {
      key: ' ProgressBar style:theme={theme}',
      value: {
        progress:0.75,
        color:MD3Colors.error50,
        theme:theme,
      },
    },
    {
      key: ' ProgressBar style:testID={"ProgressBar"}',
      value: {
        progress:0.75,
        color:MD3Colors.error50,
        testID:'ProgressBar',
      },
    },
    {
      key: ' ProgressBar style:testID={"ProgressBar1"}',
      value: {
        progress:0.75,
        color:MD3Colors.error50,
        testID:'ProgressBar1',
      },
    },
  ]


  return (
    <ScrollView>
       <Tester>
      <TestSuite name='ProgressBar' >
       <TestCase itShould='ProgressBar style:animatedValue ={progressBarValue}'>
          <Button onPress={runCustomAnimation}>Toggle animation</Button>
          <AnimatedProgressBar
            visible={visible}
            style={styles.progressBar}
            animatedValue={progressBarValue}
            theme={theme}
          />
        </TestCase>
        {ProgressBarProps.map((item) => {
          return (
            <TestCase itShould={item.key}  key={item.key}>
                  <ProgressBar {...item.value}/>
            </TestCase>
          );
        })},
     </TestSuite>
    </Tester>
    </ScrollView>
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