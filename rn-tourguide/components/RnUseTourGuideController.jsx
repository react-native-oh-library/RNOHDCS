import React, { useImperativeHandle } from 'react'
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Button,
  Alert,
} from 'react-native'
import { Tester, TestCase } from '@rnoh/testerino';
import {
  TourGuideProvider,
  TourGuideZone,
  TourGuideZoneByPosition,
  useTourGuideController,
} from 'rn-tourguide'

// Add <TourGuideProvider/> at the root of you app!
function AppGuide() {
  const [isVisible, setIsVisible] = React.useState(false);
  const appContentRef = React.useRef(null)

  const hideVisible = () => {
    setIsVisible(false)
    let t = setTimeout(() => {
      clearTimeout(t)
      setIsVisible(true)
    }, 1000)
  }

  React.useEffect(() => {
    hideVisible()
  }, [])

  return (
    <Tester>
      <TestCase
        itShould={'base demo'}
        tags={["C_API"]}
      >
        <View style={Platform.OS == 'harmony' ? { height: 200 } : { height: 280 }}>
          <TourGuideProvider {...{ borderRadius: 16, androidStatusBarVisible: true }}>
            <AppContent ref={appContentRef} isVisible={isVisible} />
          </TourGuideProvider>
        </View>
      </TestCase>
      <ScrollView style={Platform.OS == 'harmony' ?{ marginBottom: 200 }:{ marginBottom: 340 }}>
        <TestCase
          itShould={'canStart'}
          tags={["C_API"]}
          initialState={0}
          arrange={({ setState }) =>
            <Button onPress={() => {
              setState(appContentRef.current?.getCanStart())
            }} title={'canStart'}></Button>
          }
          assert={({ expect, state }) => {
            expect(true).to.be.eq(true);
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
          initialState={0}
          arrange={({ setState }) =>
            <Button onPress={() => {
              appContentRef.current?.getCurrentStepTourGuid();
              setState(100)
            }} title={'getCurrentStep()'}></Button>
          }
          assert={({ expect, state }) => {
            expect(true).to.be.eq(true);
          }}
        />
        <TestCase
          itShould={'tourKey'}
          tags={["C_API"]}
          initialState={0}
          arrange={({ setState }) =>
            <Button onPress={() => {
              appContentRef.current?.getTourKey()
              setState(100)
            }} title={'tourKey'}></Button>
          }
          assert={({ expect, state }) => {
            expect(state).to.be.eq(100);
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
      </ScrollView>
    </Tester>
  )
}

const AppContent = React.forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({
    startTourGuid,
    getCanStart,
    stopTourGuid,
    getCurrentStepTourGuid,
    getTourKey
  }))
  const iconProps = { size: 40, color: '#888' }

  const { start, tourKey, canStart, stop, eventEmitter, getCurrentStep, TourGuideZone, TourGuideZoneByPosition } = useTourGuideController()

  React.useEffect(() => {
    eventEmitter.on('start', () => { Alert.alert('Tips', 'eventEmitter.on("start") is triggered'); })
    eventEmitter.on('stop', () => { Alert.alert('Tips', 'eventEmitter.on("stop") is triggered'); })
    eventEmitter.on('stepChange', () => { Alert.alert('Tips', 'eventEmitter.on("stepChange") is triggered'); })
    return () => eventEmitter.off('*', null)
  }, [])

  const startTourGuid = () => {
    if (canStart) {
      start();
    }
  }

  const stopTourGuid = () => {
    stop();
  }

  const getCanStart = () => {
    return canStart;
  }


  const getCurrentStepTourGuid = () => {
    return getCurrentStep()
  }

  const getTourKey = () => {
    return tourKey;
  }

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

          {Platform.OS !== 'web' ? (
            <TourGuideZoneByPosition
              zone={1}
              shape={'circle'}
              isTourGuide
              top={20}
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
})

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

export default AppGuide
