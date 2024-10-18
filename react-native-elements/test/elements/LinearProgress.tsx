import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Button, LinearProgress} from '@rneui/themed';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

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
      <ScrollView>
        <TestSuite name="LinearProgress属性animation 设置动画">
          <TestCase itShould="设置animation" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>animation设置时间3秒和5秒</Text>
              <LinearProgress
                style={{marginVertical: 10, width: '80%', alignSelf: 'center'}}
                animation={{duration: 3000}}
              />
              <LinearProgress
                style={{marginVertical: 10, width: '80%', alignSelf: 'center'}}
                animation={{duration: 5000}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="LinearProgress属性color 设置颜色">
          <TestCase itShould="设置color" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>设置多种颜色</Text>
              <LinearProgress
                color="blue"
                style={{marginVertical: 10, width: '80%', alignSelf: 'center'}}
                animation={{duration: 3000}}
              />
              <LinearProgress
                color="pink"
                style={{marginVertical: 10, width: '80%', alignSelf: 'center'}}
                animation={{duration: 3000}}
              />
              <LinearProgress
                color="black"
                style={{marginVertical: 10, width: '80%', alignSelf: 'center'}}
                animation={{duration: 3000}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="LinearProgress属性style 设置LinearProgress样式">
          <TestCase itShould="设置style" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>设置样式</Text>
              <LinearProgress
                color="blue"
                style={{
                  marginVertical: 10,
                  width: '80%',
                  alignSelf: 'center',
                  backgroundColor: 'red',
                  height: 10,
                  borderRadius: 5,
                }}
                animation={{duration: 1000}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="LinearProgress属性trackColor ">
          <TestCase itShould="设置trackColor" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>trackColor</Text>
              <LinearProgress
                trackColor="pink"
                color="blue"
                style={{
                  marginVertical: 10,
                  width: '80%',
                  alignSelf: 'center',
                  height: 10,
                  borderRadius: 5,
                }}
                animation={{duration: 1000}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="LinearProgress属性value 设置LinearProgress的值">
          <TestCase itShould="设置value" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>value值设为0.1，0.2，1</Text>
              <LinearProgress
                value={0.1}
                trackColor="pink"
                color="blue"
                style={{
                  marginVertical: 10,
                  width: '80%',
                  alignSelf: 'center',
                  height: 10,
                  borderRadius: 5,
                }}
                animation={{duration: 1000}}
              />
              <LinearProgress
                value={0.2}
                trackColor="pink"
                color="blue"
                style={{
                  marginVertical: 10,
                  width: '80%',
                  alignSelf: 'center',
                  height: 10,
                  borderRadius: 5,
                }}
                animation={{duration: 1000}}
              />
              <LinearProgress
                value={1}
                trackColor="pink"
                color="blue"
                style={{
                  marginVertical: 10,
                  width: '80%',
                  alignSelf: 'center',
                  height: 10,
                  borderRadius: 5,
                }}
                animation={{duration: 1000}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="LinearProgress属性variant 枚举验证">
          <TestCase itShould="设置variant" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>variant值设为determinate</Text>
              <LinearProgress
                variant="determinate"
                trackColor="pink"
                color="blue"
                style={{
                  marginVertical: 10,
                  width: '80%',
                  alignSelf: 'center',
                  height: 10,
                  borderRadius: 5,
                }}
                animation={{duration: 1000}}
              />
              <Text style={styles.subText}>value值设为indeterminate</Text>
              <LinearProgress
                variant="indeterminate"
                trackColor="pink"
                color="blue"
                style={{
                  marginVertical: 10,
                  width: '80%',
                  alignSelf: 'center',
                  height: 10,
                  borderRadius: 5,
                }}
                animation={{duration: 1000}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="LinearProgress属性style  接收React-Native原生View组件的style">
          <TestCase itShould="React-Native原生View组件的style" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>接收React-Native原生View组件的style</Text>
              <LinearProgress
              
                variant="determinate"
                trackColor="pink"
                color="blue"
                style={{
                  marginVertical: 10,
                  width: '80%',
                  alignSelf: 'center',
                  height: 30,
                  borderRadius: 5,
                  backgroundColor:'black',
                  
                }}
                animation={{duration: 1000}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="LinearProgress属性testID  接收React-Native原生View组件的testID">
          <TestCase itShould="React-Native原生View组件的testID" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>接收React-Native原生View组件的testID</Text>
              <LinearProgress
              
                variant="determinate"
                trackColor="pink"
                color="blue"
                style={{
                  marginVertical: 10,
                  width: '80%',
                  alignSelf: 'center',
                  height: 30,
                  borderRadius: 5,
                  backgroundColor:'black',
                  
                }}
                testID='LinearProgress'
                animation={{duration: 1000}}
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  subText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
    color: '#222',
  },
  vertical: {
    paddingTop: 20,
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#222',
  },
  subTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default LinearProgressAPI;
