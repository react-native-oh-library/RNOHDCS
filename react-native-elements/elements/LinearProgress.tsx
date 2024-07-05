import React from 'react';
import { View, Text } from 'react-native';
import { Button, LinearProgress } from '@rneui/themed';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

const LinearProgressAPI: React.FunctionComponent = () => {
  const [progress, setProgress] = React.useState<number>(0);

  React.useEffect(() => {
    let subs = true;
    if (progress < 1 && progress !== 0) {
      setTimeout(() => {
        if (subs) {
          setProgress(progress + 0.3);
        }
      }, 10);
    }
    return () => {
      subs = false;
    };
  }, [progress]);

  return (
    <Tester>
      <TestSuite name='LinearProgress'>
        <View>
          <View
            style={{
              margin: 10,
            }}
          >
            <TestCase itShould='Indeterminate Variant' tags={['C_API']}>
              <LinearProgress style={{ marginVertical: 10 }} />
            </TestCase>
            <TestCase itShould='Indeterminate Variant with color' tags={['C_API']}>
              <LinearProgress style={{ marginVertical: 10 }} color="red" />
            </TestCase>
            <TestCase itShould='Determinate Variant without animation' tags={['C_API']}>
              <LinearProgress
                style={{ marginVertical: 10 }}
                animation={false}
                value={0.3}
              />
            </TestCase>
            <TestCase itShould='Determinate Variant with animation' tags={['C_API']}>
              <LinearProgress style={{ marginVertical: 10 }} value={progress} />
            </TestCase>
            <TestCase itShould='Determinate Variant with small duration' tags={['C_API']}>
              <LinearProgress
                style={{ marginVertical: 10 }}
                value={progress}
                animation={{ duration: 100 }}
              />
            </TestCase>
            <Button
              disabled={progress > 0}
              onPress={() => {
                setProgress(0.00001);
              }}
              title={'Start Progress'}
              containerStyle={{ margin: 10 }}
            />
            <Button
              disabled={progress === 0}
              onPress={() => {
                setProgress(0);
              }}
              title={'Restart'}
              containerStyle={{ margin: 10 }}
            />
          </View>
        </View>
      </TestSuite>
    </Tester>
  );
};

export default LinearProgressAPI;
