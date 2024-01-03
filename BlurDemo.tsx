/**
 * Basic [iOS] Example for react-native-blur
 * https://github.com/react-native-community/react-native-blur
 */
import React, { useState} from 'react';
import {
  Image,
  StyleSheet,
  Platform,
  Switch,
  Text,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import {
  BlurView,
  BlurViewProps,
} from '@react-native-community/blur';

const Blurs = () => {
  const [blurBlurType, setBlurBlurType] = useState<BlurViewProps['blurType']>('dark');
  const [blurAmount, setBlurAmount] = useState<number>(100);
  useState<BlurViewProps['blurType']>('dark');
  const tintColor = blurBlurType === 'dark' ? 'white' : 'black';

  return (
    <View style={styles.container}>
      <View style={styles.blurContainer}>
        <BlurView
          blurType={blurBlurType}
          blurAmount={blurAmount}
          reducedTransparencyFallbackColor='red'
          style={[styles.blurView]}
        />
        <Text style={[styles.text, { color: tintColor }]}>
          Blur component ({Platform.OS})
        </Text>

        <View style={styles.row}>
          <Text onPress={() => {
            setBlurBlurType('light')
          }}>light</Text>

          <Text onPress={() => {
            setBlurBlurType('dark')
          }}>dark</Text>

          <Text onPress={() => {
            setBlurBlurType('chromeMaterialLight')
          }}>chromeMaterialLight click will crash</Text>
{/* 

  给鸿蒙平台设置在其他平台顶一顶
  define of BlurViewPropsIOS
  declare type BlurType = 'dark' | 'light' | 'xlight' | 'prominent' | 'regular' | 'extraDark' | 'chromeMaterial' | 'material' | 'thickMaterial' | 'thinMaterial' | 'ultraThinMaterial' | 'chromeMaterialDark' | 'materialDark' | 'thickMaterialDark' | 'thinMaterialDark' | 'ultraThinMaterialDark' | 'chromeMaterialLight' | 'materialLight' | 'thickMaterialLight' | 'thinMaterialLight' | 'ultraThinMaterialLight';

  define of BlurViewPropsHarmony
  declare type BlurType = 'dark' | 'light' | 'thickMaterialDark' | 'thinMaterialDark' | 'thickMaterialLight' | 'thinMaterialLight';

  import type { BlurViewProps as BlurViewPropsIOS } from './components/BlurView.ios';
  import type { BlurViewProps as BlurViewPropsAndroid } from './components/BlurView.android';
  import type { BlurViewProps as BlurViewPropsHarmony } from './components/BlurView.harmony';
  declare type BlurViewProps = BlurViewPropsIOS | BlurViewPropsAndroid | BlurViewPropsHarmony;

  BlurViewProps is enum 
  chromeMaterialLight is define in BlurViewPropsIOS but not in BlurViewPropsHarmony.
  chromeMaterialLight 在 BlurViewPropsIOS中声明了，在 BlurViewPropsHarmony没有，
  所以在鸿蒙平台上设置 BlurViewProps= chromeMaterialLight，语法不会报错。但执行会闪退。

  包错日志见 blurCrash.txt
*/}

        {/* <Text onPress={() => {
            setBlurBlurType('thickMaterialDark')
          }}>thickMaterialDark</Text>
          <Text onPress={() => {
            setBlurBlurType('thinMaterialLight')
          }}>thinMaterialLight</Text> */}
        </View>
        <View style={styles.row}>
          <Text onPress={() => {
            setBlurAmount(20)
          }}>20</Text>

          <Text onPress={() => {
            setBlurAmount(40)
          }}>40</Text>

          <Text onPress={() => {
            setBlurAmount(60)
          }}>60</Text>
          <Text onPress={() => {
            setBlurAmount(80)
          }}>80</Text>

          <Text onPress={() => {
            setBlurAmount(100)
          }}>100</Text>
        </View>
      </View>
    </View>
  );
};

const BlurDemo = () => {
  const [showBlurs, setShowBlurs] = React.useState(true);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/bgimage.jpeg')}
        resizeMode="cover"
        style={styles.img}
      />
      {showBlurs ? <Blurs /> : null}

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
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
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

export default BlurDemo;
