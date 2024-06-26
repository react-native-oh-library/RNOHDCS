import { useState, useEffect } from "react";
import { Animated, View, Text, Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
import BootSplash from "react-native-bootsplash";
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    margin: 20,
    lineHeight: 30,
    color: "#333",
    textAlign: "center",
  },
});

type Props = {
  onAnimationEnd: () => void;
};

const configTest = {
  manifest: require("../assets/bootsplash_manifest.json"),
  logo: require("../assets/bootsplash_logo.png"),
  statusBarTranslucent: true,
  navigationBarTranslucent: false,

  animate: () => {
    const { height } = Dimensions.get("window");
    Animated.stagger(250, [
      Animated.spring(new Animated.Value(0), {
        useNativeDriver: true,
        toValue: -50,
      }),
      Animated.spring(new Animated.Value(0), {
        useNativeDriver: true,
        toValue: height,
      }),
    ]).start();
    Animated.timing(new Animated.Value(1), {
      useNativeDriver: true,
      toValue: 0,
      duration: 150,
      delay: 350,
    }).start(() => {

    });
  },
}

export const AnimatedBootSplash = ({ onAnimationEnd }: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));
  const config = {
    manifest: require("../assets/bootsplash_manifest.json"),
    logo: require("../assets/bootsplash_logo.png"),
    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      const { height } = Dimensions.get("window");
      Animated.stagger(250, [
        Animated.spring(translateY, {
          useNativeDriver: true,
          toValue: -50,
        }),
        Animated.spring(translateY, {
          useNativeDriver: true,
          toValue: height,
        }),
      ]).start();
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 150,
        delay: 350,
      }).start(() => {
        onAnimationEnd()
      });
    },
  }
  const { container, logo /*, brand */ } = BootSplash.useHideAnimation(config);

  return (
    <Animated.View {...container} style={[container.style, { opacity }]}>
      <Animated.Image
        {...logo}
        style={[logo.style, { transform: [{ translateY }] }]}
      />
      {/* <Animated.Image {...brand} style={[brand.style, { opacity }]} /> */}
    </Animated.View>
  );
};

const App = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // set transparent status bar
    StatusBar.setBarStyle("dark-content");
    if (Platform.OS !== "android") {
      StatusBar.setBackgroundColor("transparent");
      StatusBar.setTranslucent(true);
    }
  }, []);

  return (
    <Tester style={{ height: '100%', width: '100%' }}>
      <TestSuite name="Bootsplash">
        <TestCase
          itShould="test Bootsplash hide"
          fn={({ expect }) => {
            expect(BootSplash.hide()).ok
          }}
        ></TestCase>
        <TestCase
          itShould="test Bootsplash isVisible"
          fn={({ expect }) => {
            expect(BootSplash.isVisible()).ok
          }}
        ></TestCase>
        <TestCase
          itShould="test Bootsplash useHideAnimation"
          fn={({ expect }) => {
            expect(BootSplash.useHideAnimation(configTest)).ok
          }}
        ></TestCase>
        <View style={{ height: '80%', width: '100%' }}>
          <View style={styles.container}>
            <Text style={styles.text}>Hello World</Text>
            {
              visible && (
                <AnimatedBootSplash
                  onAnimationEnd={() => {
                    BootSplash.isVisible();
                    console.log("--------++++AnimationEnd")
                    setVisible(false);
                  }}
                />
              )
            }
          </View>
        </View>
      </TestSuite>
    </Tester >
  );
};


export default App;