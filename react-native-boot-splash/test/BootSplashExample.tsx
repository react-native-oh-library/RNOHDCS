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
    manifest: require('../source/bootsplash_manifest.json'),

    logo: require('../source/bootsplash_logo.png'),
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

const AnimatedBootSplash2 = ({onAnimationEnd}: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));

  const {container, logo /*, brand */} = BootSplash.useHideAnimation({
    ready:false,
    manifest: require('../source/bootsplash_manifest.json'),
    logo: require('../source/bootsplash_logo.png'),
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

const AnimatedBootSplash3 = ({onAnimationEnd}: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));

  const {container, logo /*, brand */} = BootSplash.useHideAnimation({
    ready:true,
    manifest: require('../source/bootsplash_manifest.json'),
    logo: require('../source/bootsplash_logo.png'),
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

const AnimatedBootSplash4 = ({onAnimationEnd}: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));

  const {container, logo /*, brand */} = BootSplash.useHideAnimation({
    manifest: require('../source/bootsplash_manifest.json'),
    logo: require('../source/bootsplash_logo.png'),
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

const AnimatedBootSplash5 = ({onAnimationEnd}: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));

  const {container, logo /*, brand */} = BootSplash.useHideAnimation({
    manifest: require('../source/bootsplash_manifest2.json'),

    logo: require('../source/bootsplash_logo.png'),
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

const AnimatedBootSplash6 = ({onAnimationEnd}: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));

  const {container, logo /*, brand */} = BootSplash.useHideAnimation({
    manifest: require('../source/bootsplash_manifest.json'),

    logo: require('../source/bootsplash_logo.png'),
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

const AnimatedBootSplash7 = ({onAnimationEnd}: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));

  const {container, logo /*, brand */} = BootSplash.useHideAnimation({
    manifest: require('../source/bootsplash_manifest.json'),

    logo: require('../source/bootsplash_logo2.png'),
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

const AnimatedBootSplash8 = ({onAnimationEnd}: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));

  const {container, logo /*, brand */} = BootSplash.useHideAnimation({
    manifest: require('../source/bootsplash_manifest.json'),

    logo: require('../source/bootsplash_logo.png'),
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

const AnimatedBootSplash9 = ({onAnimationEnd}: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));

  const {container, logo /*, brand */} = BootSplash.useHideAnimation({
    manifest: require('../source/bootsplash_manifest.json'),

    logo: require('../source/bootsplash_logo.png'),
    // darkLogo: require("../assets/bootsplash/dark-logo.png"),
    // brand: require("../assets/bootsplash/brand.png"),
    // darkBrand: require("../assets/bootsplash/dark-brand.png"),

    statusBarTranslucent: false,
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

const AnimatedBootSplash10 = ({onAnimationEnd}: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));

  const {container, logo /*, brand */} = BootSplash.useHideAnimation({
    manifest: require('../source/bootsplash_manifest.json'),

    logo: require('../source/bootsplash_logo.png'),
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

const AnimatedBootSplash11 = ({onAnimationEnd}: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));

  const {container, logo /*, brand */} = BootSplash.useHideAnimation({
    manifest: require('../source/bootsplash_manifest.json'),

    logo: require('../source/bootsplash_logo.png'),
    // darkLogo: require("../assets/bootsplash/dark-logo.png"),
    // brand: require("../assets/bootsplash/brand.png"),
    // darkBrand: require("../assets/bootsplash/dark-brand.png"),

    statusBarTranslucent: true,
    navigationBarTranslucent: true,

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

const UseHideAnimationTest2 = () => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={{height: '80%', width: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello BootSplash</Text>
        {visible && (
          <AnimatedBootSplash2
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

const UseHideAnimationTest3 = () => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={{height: '80%', width: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello BootSplash</Text>
        {visible && (
          <AnimatedBootSplash3
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

const UseHideAnimationTest4 = () => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={{height: '80%', width: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello BootSplash</Text>
        {visible && (
          <AnimatedBootSplash4
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

const UseHideAnimationTest5 = () => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={{height: '80%', width: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello BootSplash</Text>
        {visible && (
          <AnimatedBootSplash5
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

const UseHideAnimationTest6 = () => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={{height: '80%', width: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello BootSplash</Text>
        {visible && (
          <AnimatedBootSplash6
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

const UseHideAnimationTest7 = () => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={{height: '80%', width: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello BootSplash</Text>
        {visible && (
          <AnimatedBootSplash7
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

const UseHideAnimationTest8 = () => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={{height: '80%', width: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello BootSplash</Text>
        {visible && (
          <AnimatedBootSplash8
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

const UseHideAnimationTest9 = () => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={{height: '80%', width: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello BootSplash</Text>
        {visible && (
          <AnimatedBootSplash9
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

const UseHideAnimationTest10 = () => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={{height: '80%', width: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello BootSplash</Text>
        {visible && (
          <AnimatedBootSplash10
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

const UseHideAnimationTest11 = () => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={{height: '80%', width: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello BootSplash</Text>
        {visible && (
          <AnimatedBootSplash11
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
          <TestCase modal itShould="test animate">
            <UseHideAnimationTest></UseHideAnimationTest>
          </TestCase>
          <TestCase modal itShould="ready:false">
            <UseHideAnimationTest2></UseHideAnimationTest2>
          </TestCase>
          <TestCase modal itShould="ready:true">
            <UseHideAnimationTest3></UseHideAnimationTest3>
          </TestCase>
          <TestCase modal itShould="manifest:../source/bootsplash_manifest.json">
            <UseHideAnimationTest4></UseHideAnimationTest4>
          </TestCase>
          <TestCase modal itShould="manifest:../source/bootsplash_manifest2.json">
            <UseHideAnimationTest5></UseHideAnimationTest5>
          </TestCase>
          <TestCase modal itShould="logo: require('../source/bootsplash_logo.png'),">
            <UseHideAnimationTest6></UseHideAnimationTest6>
          </TestCase>
          <TestCase modal itShould="logo: require('../source/bootsplash_logo2.png'),">
            <UseHideAnimationTest7></UseHideAnimationTest7>
          </TestCase>
          <TestCase modal itShould="statusBarTranslucent: true,">
            <UseHideAnimationTest8></UseHideAnimationTest8>
          </TestCase>
          <TestCase modal itShould="statusBarTranslucent: false,">
            <UseHideAnimationTest9></UseHideAnimationTest9>
          </TestCase>
          <TestCase modal itShould="navigationBarTranslucent: false,">
            <UseHideAnimationTest10></UseHideAnimationTest10>
          </TestCase>
          <TestCase modal itShould="navigationBarTranslucent: true,">
            <UseHideAnimationTest11></UseHideAnimationTest11>
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
