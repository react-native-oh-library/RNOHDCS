import React, { useImperativeHandle, useState } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Button,
} from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';
import {
  TourGuideProvider,
  useTourGuideController,
} from 'rn-tourguide';

// Add <TourGuideProvider/> at the root of you app!
function AppGuide() {
  const [isVisible, setIsVisible] = React.useState(false);
  const appContentRef = React.useRef(null);
  const [currentTourKey, setCurrentTourKey] = React.useState('');

  const hideVisible = () => {
    setIsVisible(false)
    let t = setTimeout(() => {
      clearTimeout(t)
      setIsVisible(true)
    }, 1000)
  };

  React.useEffect(() => {
    hideVisible()
  }, []);

  return (
    <View>
      <Tester>
        <TestCase itShould='base demo'>
          <View style={{ height: 200, backgroundColor: '#ffffff' }}>
            <TourGuideProvider {...{ borderRadius: 16, androidStatusBarVisible: true }}>
              <AppContent ref={appContentRef} isVisible={isVisible} />
            </TourGuideProvider>
          </View>
        </TestCase>
        <ScrollView style={Platform.OS != 'harmony' ? { marginBottom: 800 } : { marginBottom: 550 }}>
          <TestCase
            itShould={'canStart'}
            tags={["C_API"]}
            initialState={undefined}
            arrange={({ setState }) =>
              <Button onPress={() => {
                setState(appContentRef.current?.getCanStart())
              }} title={'canStart'}></Button>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq(true);
            }}
          />
          <TestCase
            itShould={'start()'}
            tags={["C_API"]}
            initialState={0}
            arrange={({ setState }) =>
              <Button onPress={() => {
                appContentRef.current?.startTourGuid()
                setState(100)
              }} title={'start()'}></Button>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq(100);
            }}
          />
          <TestCase
            itShould={'getCurrentStep()'}
            tags={["C_API"]}
            initialState={undefined}
            arrange={({ setState }) =>
              <Button onPress={() => {
                let t = appContentRef.current?.getCurrentStepTourGuid();
                setState(t ? true : false)
              }} title={'getCurrentStep()'}></Button>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq(true);
            }}
          />
          <TestCase
            itShould={'tourKey'}
            tags={["C_API"]}
            initialState={undefined}
            arrange={({ setState }) =>
              <>
                <Text>tourKey:{currentTourKey}</Text>
                <Button onPress={() => {
                  let t = appContentRef.current?.getTourKey();
                  setCurrentTourKey(t);
                  setState(t ? true : false)
                }} title={'tourKey'}></Button>
              </>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq(true);
            }}
          />
          <TestCase
            itShould={'stop()'}
            tags={["C_API"]}
            initialState={0}
            arrange={({ setState }) =>
              <Button onPress={() => {
                appContentRef.current?.stopTourGuid()
                setState(100)
              }} title={'stop()'}></Button>
            }
            assert={({ expect, state }) => {
              expect(state).to.be.eq(100);
            }}
          />
          <TestCase
            itShould={'TourGuideZone和TourGuideZoneByPosition都为组件'}
            tags={["C_API"]}>
            <Text>TourGuideZone为组件，显示页面中的引导区域弹窗步骤引导</Text>
          </TestCase>
          <TestCase
            itShould={'TourGuideZoneByPosition都为组件'}
            tags={["C_API"]}>
            <Text>TourGuideZoneByPosition为组件，控制页面中引导区域显示位置</Text>
          </TestCase>
        </ScrollView>
      </Tester>
    </View>
  )
};

const AppContent = React.forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({
    startTourGuid,
    getCanStart,
    stopTourGuid,
    getCurrentStepTourGuid,
    getTourKey,
  }));
  const iconProps = { size: 40, color: '#888' };
  const [eventEmitterText, setEventEmitterText] = useState('');
  const { start, tourKey, canStart, stop, eventEmitter, getCurrentStep, TourGuideZone, TourGuideZoneByPosition } = useTourGuideController();

  React.useEffect(() => {
    eventEmitter.on('start', () => { setEventEmitterText('eventEmitter.on("start") is triggered') })
    eventEmitter.on('stop', () => { setEventEmitterText('eventEmitter.on("stop") is triggered') })
    eventEmitter.on('stepChange', () => { setEventEmitterText('eventEmitter.on("stepChange") is triggered') })
    return () => eventEmitter.off('*', null)
  }, []);

  const startTourGuid = () => {
    if (canStart) {
      start();
    }
  };

  const stopTourGuid = () => {
    stop();
  };

  const getCanStart = () => {
    return canStart;
  };

  const getCurrentStepTourGuid = () => {
    return getCurrentStep();
  };

  const getTourKey = () => {
    return tourKey;
  };

  return (
    <View style={styles.container}>
      {
        props.isVisible ? <View>
          <TourGuideZone
            keepTooltipPosition
            zone={1}
            text={'A react-native-copilot remastered! 🎉'}
            borderRadius={16}
          >
            <Text style={styles.title}>
              {'Welcome to the demo of\n"rn-tourguide"'}
            </Text>
          </TourGuideZone>
          <View style={styles.middleView}>
            <TourGuideZone zone={2} shape={'rectangle_and_keep'}>
              <TouchableOpacity style={styles.button} onPress={() => start()}>
                <Text style={styles.buttonText}>START THE TUTORIAL!</Text>
              </TouchableOpacity>
            </TourGuideZone>
          </View>
          <View>
            <Text style={{ color: '#000' }}>{eventEmitterText}</Text>
          </View>

          {Platform.OS !== 'web' ? (
            <TourGuideZoneByPosition
              zone={1}
              shape={'circle'}
              isTourGuide
              top={-50}
              left={50}
              width={64}
              height={64}
            />
          ) : null}
        </View>
          : null
      }

    </View>
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  profilePhoto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginVertical: 20,
  },
  middleView: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  row: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
  }
  // activeSwitchContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginBottom: 20,
  //   alignItems: 'center',
  //   paddingHorizontal: 40,
  // },
})

export default AppGuide;
