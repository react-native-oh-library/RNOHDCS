import React, { useState } from 'react';

import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

import {
  Image,
  StyleSheet,
  Platform,
  Switch,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Button
} from 'react-native';

import {
  BlurView,
  BlurViewProps,
} from '@react-native-community/blur';


export const CommunitrBlurDemo = () => {
  const [blurBlurType, setBlurBlurType] = useState<BlurViewProps['blurType']>('dark');
  const [blurAmount, setBlurAmount] = useState<number>(100);
  const blurtype: Array<BlurViewProps['blurType']> = ['light', 'xlight', 'thinMaterial', 'chromeMaterialLight', 'materialLight', 'thickMaterialLight', 'thinMaterialLight', 'ultraThinMaterialLight']
  const blurtypeDark: Array<BlurViewProps['blurType']> = ['dark', 'prominent', 'regular', 'extraDark', 'chromeMaterial', 'material', 'thickMaterial', 'ultraThinMaterial', 'chromeMaterialDark', "thickMaterialDark",
    'materialDark', 'thinMaterialDark', 'ultraThinMaterialDark']

  return (
    <Tester style={{paddingBottom:60}}>
      <ScrollView>
        <TestSuite name="@react-native-community/blur">
          <TestCase
            key={"getInitStatus_1"}
            itShould={`blurType 属性`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {

              return (
                <View style={{ flex: 1, height: 500 }}>
                  <BlurDemo blurBlurType={blurBlurType} blurAmount={blurAmount} ></BlurDemo>
                  <Button title={"start"} onPress={() => {

                    setBlurBlurType("light")

                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            key={"getInitStatus_2"}
            itShould={`blurAmount 属性`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {

              return (
                <View style={{ flex: 1, height: 500 }}>
                  <BlurDemo blurBlurType={blurBlurType} blurAmount={blurAmount}></BlurDemo>
                  <Button title={"start"} onPress={() => {

                    setBlurAmount(20)

                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          {
            blurtype.map((item, index) => <TestCase

              key={`${index}_${item}`}
              itShould={`blurType 属性 的${item}`}
              tags={['C_API']}
              initialState={false}

              arrange={({ setState }) => {
                const [blurTypeL, setBlurTypeL] = useState<BlurViewProps['blurType']>("dark")
                return (
                  <View style={{ flex: 1, height: 500 }}>
                    <BlurDemo blurBlurType={blurTypeL} blurAmount={100} ></BlurDemo>
                    <Button title={"start"} onPress={() => {

                      setBlurTypeL(item)

                      setState(true)
                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />)
          }
          {
            blurtypeDark.map((item, index) => <TestCase
              key={`${index}_${item}`}
              itShould={`blurType 属性 的${item}`}
              tags={['C_API']}
              initialState={false}

              arrange={({ setState }) => {
                const [blurTypeD, setBlurTypeD] = useState<BlurViewProps['blurType']>("light")
                return (
                  <View style={{ flex: 1, height: 500 }}>
                    <BlurDemo blurBlurType={blurTypeD} blurAmount={100} ></BlurDemo>
                    <Button title={"start"} onPress={() => {

                      setBlurTypeD(item)

                      setState(true)
                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />)
          }

        </TestSuite>

      </ScrollView>
    </Tester>
  );
}

interface IBlursProps {
  blurBlurType: BlurViewProps['blurType'],
  blurAmount: number
}

const Blurs: React.FC<IBlursProps> = ({ blurBlurType, blurAmount }) => {
  const tintColor = blurBlurType === 'dark' ? 'white' : 'black';
  return (
    <View style={styles.container}>
      <View style={styles.blurContainer}>
        <BlurView
          blurType={blurBlurType}
          blurAmount={blurAmount}
          reducedTransparencyFallbackColor="#000"
          style={[styles.blurView]}
        />

        <Text style={[styles.text, { color: tintColor }]}>
          Blur component1 ({Platform.OS})
        </Text>
      </View>
    </View>
  );
};

const BlurDemo: React.FC<IBlursProps> = ({ blurBlurType, blurAmount }) => {
  const [showBlurs, setShowBlurs] = React.useState(false);
  return (
    <View style={styles.container}>
      <Image
         source={require('../assests/blur.jpg')}
        resizeMode="cover"
        style={styles.img}
      />
      {showBlurs ? <Blurs blurBlurType={blurBlurType} blurAmount={blurAmount} /> : null}

      <SafeAreaView style={styles.blurToggle}>
        <Switch
          onValueChange={(value) => setShowBlurs(value)}
          value={showBlurs}
        />
      </SafeAreaView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  blurContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  row: {
    marginTop: 50,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  blurView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
  },

  blurView2: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  img: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: 400,
    width: "100%",
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  blurToggle: {
    position: 'absolute',
    top: 30,
    right: 10,
    alignItems: 'flex-end',
  },
});

export default CommunitrBlurDemo
