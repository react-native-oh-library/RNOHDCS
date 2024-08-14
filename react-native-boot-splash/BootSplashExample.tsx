import {useState, useEffect} from 'react';
import {
  Animated,
  View,
  Text,
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    margin: 20,
    lineHeight: 30,
    color: '#333',
    textAlign: 'center',
  },
});

type Props = {
  onAnimationEnd: () => void;
};

const useNativeDriver = Platform.OS !== 'web';

const AnimatedBootSplash = ({onAnimationEnd}: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));

  const {container, logo /*, brand */} = BootSplash.useHideAnimation({
    manifest: require('./source/bootsplash_manifest.json'),

    logo: require('./source/bootsplash_logo.png'),
    // darkLogo: require("../assets/bootsplash/dark-logo.png"),
    // brand: require("../assets/bootsplash/brand.png"),
    // darkBrand: require("../assets/bootsplash/dark-brand.png"),

    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      const {height} = Dimensions.get('window');

      Animated.stagger(1000, [
        Animated.spring(translateY, {
          useNativeDriver,
          toValue: -50,
        }),
        Animated.spring(translateY, {
          useNativeDriver,
          toValue: height,
        }),
      ]).start();

      Animated.timing(opacity, {
        useNativeDriver,
        toValue: 0,
        duration: 150,
        delay: 350,
      }).start(() => {
        onAnimationEnd();
      });
    },
  });

  return (
    <Animated.View {...container} style={[container.style, {opacity}]}>
      <Animated.Image
        {...logo}
        style={[logo.style, {transform: [{translateY}]}]}
      />
      {/* <Animated.Image {...brand} style={[brand.style, { opacity }]} /> */}
    </Animated.View>
  );
};

const UseHideAnimationTest = () => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={{height: '80%', width: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello BootSplash</Text>
        {visible && (
          <AnimatedBootSplash
            onAnimationEnd={() => {
              BootSplash.isVisible();
              console.log('--------++++AnimationEnd');
              setVisible(false);
            }}
          />
        )}
      </View>
    </View>
  );
};

export const BootSplashTest = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    if (Platform.OS !== 'android') {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }
  }, []);

  return (
    <View style={{top: 48}}>
      <Tester style={{height: '100%', width: '100%'}}>
        <TestSuite name="Bootsplash">
          <TestCase
            itShould="test Bootsplash hide"
            fn={({expect}) => {
              expect(BootSplash.hide()).ok;
            }}></TestCase>
          <TestCase
            itShould="test Bootsplash isVisible"
            fn={({expect}) => {
              expect(BootSplash.isVisible()).ok;
            }}></TestCase>
          <TestCase modal itShould="test Bootsplash useHideAnimation">
            <UseHideAnimationTest></UseHideAnimationTest>
          </TestCase>
        </TestSuite>
      </Tester>
      {visible && (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setVisible(false);
          }}
        />
      )}
    </View>
  );
};
