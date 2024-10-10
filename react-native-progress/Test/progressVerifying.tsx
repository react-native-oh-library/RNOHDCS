import React, {useEffect} from 'react';
import {StyleSheet, View, ScrollView, Text, Button} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import * as Progress from 'react-native-progress';

const progressVerifying = () => {
  const [progress, setProgress] = React.useState(0);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [circleInfo, setCircleInfo] = React.useState(
    'Progress.Circle 中的属性 fill 在 HarmonyOS 上默认显示黑色和默认无色不一致',
  );
  const [circleColor, setCircleColor] = React.useState('#28c9c9');
  const [circleUnfilledColor, setCircleUnfilledColor] =
    React.useState('#1a01ff');
  const [circleBorderWith, setCircleBorderWith] = React.useState(20);
  const [circleBorderColor, setCircleBorderColor] = React.useState('#b202e1');

  const [pieBorderWith, setPieBorderWith] = React.useState(20);
  const [pieBorderColor, setPieBorderColor] = React.useState('#b202e1');
  const [pieColor, setPieColor] = React.useState('#28c9c9');

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timer = setTimeout(() => {
      setIndeterminate(false);
      interval = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress >= 1) {
            return 0;
          }
          return Math.min(1, prevProgress + Math.random() / 5);
        });
      }, 500);
    }, 1500);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <ScrollView style={{flex: 1, height: '100%'}}>
      <Tester>
        <TestSuite name="ProgressCircle">
          <View>
            <Text style={{fontSize: 30}}>遗留问题验证:</Text>

            <Text style={{fontSize: 20, marginBottom: 10}}>
              {'问题一：' + circleInfo}
            </Text>
            <Text style={{fontSize: 16, marginBottom: 10}}>
              {'fill默认显示黑色'}
            </Text>
            <TestCase
              itShould="动态修改color"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={styles.circles}>
                    <Progress.Circle
                      style={styles.progress}
                      size={150}
                      endAngle={0.2}
                      thickness={15}
                      showsText={true}
                      allowFontScaling={true}
                      direction={'counter-clockwise'}
                      strokeCap={'round'}
                      textStyle={{color: 'red', fontSize: 40}}
                      fill={'#000'}
                      animated={false}
                      indeterminate={false}
                      indeterminateAnimationDuration={1000}
                      progress={progress}
                      color={'#28c9c9'}
                      unfilledColor={'red'}
                      borderWidth={20}
                      borderColor={'#b202e1'}
                    />
                  </View>
                );
              }}
              assert={() => {}}
            />
            <Text style={{fontSize: 16, marginBottom: 10}}>
              {'fill默认显示无色'}
            </Text>
            <TestCase
              itShould="动态修改color"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={styles.circles}>
                    <Progress.Circle
                      style={styles.progress}
                      size={150}
                      endAngle={0.2}
                      thickness={15}
                      showsText={true}
                      allowFontScaling={true}
                      direction={'counter-clockwise'}
                      strokeCap={'round'}
                      textStyle={{color: 'red', fontSize: 40}}
                      fill={'transparent'}
                      animated={false}
                      indeterminate={false}
                      indeterminateAnimationDuration={1000}
                      progress={progress}
                      color={'#28c9c9'}
                      unfilledColor={'red'}
                      borderWidth={20}
                      borderColor={'#b202e1'}
                    />
                  </View>
                );
              }}
              assert={() => {}}
            />
            <Text
              style={{
                fontSize: 20,
                marginBottom: 10,
              }}>
              {
                '问题二：Progress.Circle中的属性color, unfilledColor,borderWith,borderColor中圆的颜色，在进行静态配置的时候颜色显示正常，在使用Button进行动态改变的时候，中间的圆会显示黑色和默认的颜色不一致'
              }
            </Text>
            <TestCase
              itShould="动态修改color"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={styles.circles}>
                    <Progress.Circle
                      style={styles.progress}
                      size={150}
                      endAngle={0.2}
                      thickness={15}
                      showsText={true}
                      allowFontScaling={true}
                      direction={'counter-clockwise'}
                      strokeCap={'round'}
                      textStyle={{color: 'red', fontSize: 40}}
                      fill={'transparent'}
                      animated={false}
                      indeterminate={false}
                      indeterminateAnimationDuration={1000}
                      progress={progress}
                      color={circleColor}
                      unfilledColor={'#b7f304'}
                      borderWidth={20}
                      borderColor={'#b202e1'}
                    />
                    <Button
                      title={'动态修改color'}
                      onPress={() => {
                        let circleColor_ = '#c6a9ff';
                        setCircleColor(circleColor_);
                      }}></Button>
                  </View>
                );
              }}
              assert={() => {}}
            />

            <Text style={{fontSize: 16, marginBottom: 10}}>
              {'动态修改unfilledColor'}
            </Text>

            <TestCase
              itShould="动态修改unfilledColor"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={styles.circles}>
                    <Progress.Circle
                      style={styles.progress}
                      size={150}
                      endAngle={0.2}
                      thickness={15}
                      showsText={true}
                      allowFontScaling={true}
                      direction={'counter-clockwise'}
                      strokeCap={'round'}
                      textStyle={{color: 'red', fontSize: 40}}
                      fill={'transparent'}
                      animated={false}
                      indeterminate={false}
                      indeterminateAnimationDuration={1000}
                      progress={progress}
                      color={'#28c9c9'}
                      unfilledColor={circleUnfilledColor}
                      borderWidth={20}
                      borderColor={'#b202e1'}
                    />
                    <Button
                      title={'动态修改unfilledColor'}
                      onPress={() => {
                        let circleUnfilledColor_ = '#c6a9ff';
                        setCircleUnfilledColor(circleUnfilledColor_);
                      }}></Button>
                  </View>
                );
              }}
              assert={() => {}}
            />

            <Text style={{fontSize: 16, marginBottom: 10}}>
              {'动态修改borderWith'}
            </Text>

            <TestCase
              itShould="动态修改borderWith"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={styles.circles}>
                    <Progress.Circle
                      style={styles.progress}
                      size={150}
                      endAngle={0.2}
                      thickness={15}
                      showsText={true}
                      allowFontScaling={true}
                      direction={'counter-clockwise'}
                      strokeCap={'round'}
                      textStyle={{color: 'red', fontSize: 40}}
                      fill={'transparent'}
                      animated={false}
                      indeterminate={false}
                      indeterminateAnimationDuration={1000}
                      progress={progress}
                      color={'#28c9c9'}
                      unfilledColor={'red'}
                      borderWidth={circleBorderWith}
                      borderColor={'#b202e1'}
                    />
                    <Button
                      title={'动态修改borderWith'}
                      onPress={() => {
                        let circleBorderWith_ = 60;
                        setCircleBorderWith(circleBorderWith_);
                      }}></Button>
                  </View>
                );
              }}
              assert={() => {}}
            />

            <Text style={{fontSize: 16, marginBottom: 10}}>
              {'动态修改borderColor'}
            </Text>

            <TestCase
              itShould="动态修改borderColor"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={styles.circles}>
                    <Progress.Circle
                      style={styles.progress}
                      size={150}
                      endAngle={0.2}
                      thickness={15}
                      showsText={true}
                      allowFontScaling={true}
                      direction={'counter-clockwise'}
                      strokeCap={'round'}
                      textStyle={{color: 'red', fontSize: 40}}
                      fill={'transparent'}
                      animated={false}
                      indeterminate={false}
                      indeterminateAnimationDuration={1000}
                      progress={progress}
                      color={'#28c9c9'}
                      unfilledColor={'red'}
                      borderWidth={20}
                      borderColor={circleBorderColor}
                    />
                    <Button
                      title={'动态修改borderColor'}
                      onPress={() => {
                        let circleBorderColor_ = '#c6a9ff';
                        setCircleBorderColor(circleBorderColor_);
                      }}></Button>
                  </View>
                );
              }}
              assert={() => {}}
            />

            <TestCase
              itShould="1"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={styles.circles}>
                    <Progress.CircleSnail
                      style={styles.progress}
                      color={'red'}
                      hidesWhenStopped={true}
                      size={150}
                      animating={true}
                      animated={true}
                      indeterminate={true}
                      progress={5}
                      indeterminateAnimationDuration={100}
                      unfilledColor={'red'}
                      borderWidth={10}
                      borderColor={'blue'}
                    />
                  </View>
                );
              }}
              assert={() => {}}
            />
            <TestCase
              itShould="2"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={styles.circles}>
                    <Progress.Bar
                      style={styles.progress}
                      width={150}
                      height={25}
                      borderRadius={15}
                      useNativeDriver={true}
                      animationType={'spring'}
                      animated={true}
                      indeterminate={true}
                      indeterminateAnimationDuration={100}
                      progress={progress}
                      color={'#28c9c9'}
                      unfilledColor={'red'}
                      borderWidth={10}
                      borderColor={'#b202e1'}
                    />
                  </View>
                );
              }}
              assert={() => {}}
            />
            <TestCase
              itShould="3"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={styles.circles}>
                    <Progress.Pie
                      style={styles.progress}
                      size={150}
                      animated={false}
                      indeterminate={false}
                      indeterminateAnimationDuration={1000}
                      progress={progress}
                      color={'#28c9c9'}
                      unfilledColor={'#69ec13'}
                      borderWidth={30}
                      borderColor={'#b202e1'}
                    />
                  </View>
                );
              }}
              assert={() => {}}
            />

            <Text
              style={{
                fontSize: 20,
                marginBottom: 10,
              }}>
              {
                '问题三： Progress.pie中的属性color,borderWith,borderColor中内圆的颜色，在进行静态配置的时候颜色显示正常，在使用Button进行动态改变的时候，中间的圆会显示黑色和默认的颜色不一致'
              }
            </Text>

            <Text style={{fontSize: 16, marginBottom: 10}}>
              {'动态修改color'}
            </Text>

            <TestCase
              itShould="动态修改color"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={styles.circles}>
                    <Progress.Pie
                      style={styles.progress}
                      size={150}
                      animated={false}
                      indeterminate={false}
                      indeterminateAnimationDuration={1000}
                      progress={progress}
                      color={pieColor}
                      unfilledColor={'#69ec13'}
                      borderWidth={30}
                      borderColor={'#b202e1'}
                    />
                    <Button
                      title={'动态修改color'}
                      onPress={() => {
                        let pieColor_ = '#c6a9ff';
                        setPieColor(pieColor_);
                      }}></Button>
                  </View>
                );
              }}
              assert={() => {}}
            />

            <Text style={{fontSize: 16, marginBottom: 10}}>
              {'动态修改borderColor'}
            </Text>

            <TestCase
              itShould="动态修改borderColor"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={styles.circles}>
                    <Progress.Pie
                      style={styles.progress}
                      size={150}
                      animated={false}
                      indeterminate={false}
                      indeterminateAnimationDuration={1000}
                      progress={progress}
                      color={'#28c9c9'}
                      unfilledColor={'#69ec13'}
                      borderWidth={30}
                      borderColor={pieBorderColor}
                    />
                    <Button
                      title={'动态修改borderColor'}
                      onPress={() => {
                        let pieBorderColor_ = '#c6a9ff';
                        setPieBorderColor(pieBorderColor_);
                      }}></Button>
                  </View>
                );
              }}
              assert={() => {}}
            />

            <Text style={{fontSize: 16, marginBottom: 10}}>
              {'动态修改borderWith'}
            </Text>
            <TestCase
              itShould="动态修改borderWith"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                 
            <View style={styles.circles}>
              <Progress.Pie
                style={styles.progress}
                size={150}
                animated={false}
                indeterminate={false}
                indeterminateAnimationDuration={1000}
                progress={progress}
                color={'#28c9c9'}
                unfilledColor={'#69ec13'}
                borderWidth={pieBorderWith}
                borderColor={'#b202e1'}
              />
               <Button
              title={'动态修改borderWith'}
              onPress={() => {
                let pieBorderWith_ = 40;
                setPieBorderWith(pieBorderWith_);
              }}></Button>
            </View>
                );
              }}
              assert={() => {}}
            />
            
          </View>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circles: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  progress: {
    margin: 10,
  },
  fz: {
    fontSize: 30,
  },
  fz_: {
    fontSize: 20,
  },
});

export default progressVerifying;
