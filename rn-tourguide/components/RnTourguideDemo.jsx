import * as React from 'react'
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  TourGuideProvider,
  TourGuideZone,
  TourGuideZoneByPosition,
  useTourGuideController,
  TourGuideContext
} from 'rn-tourguide'


// Add <TourGuideProvider/> at the root of you app!
function AppGuide() {
  return (
    <TourGuideProvider {...{ borderRadius: 16, androidStatusBarVisible: true }}>
      <AppContent />
    </TourGuideProvider>
  )
}

const AppContent = () => {
  const iconProps = { size: 40, color: '#888' }

  // Use Hooks to control!
  const { start, canStart, stop, eventEmitter } = useTourGuideController()

  React.useEffect(() => {
    // start at mount
    if (canStart) {
      start()
    }
  }, [canStart]) // wait until everything is registered

  React.useEffect(() => {
    eventEmitter.on('start', () => console.log('start'))
    eventEmitter.on('stop', () => console.log('stop'))
    eventEmitter.on('stepChange', () => console.log(`stepChange`))
    return () => eventEmitter.off('*', null)
  }, [])
  return (
    <View style={styles.container}>
      {/* Use TourGuideZone only to wrap */}
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
        <TouchableOpacity style={styles.button} onPress={() => start()}>
          <Text style={styles.buttonText}>START THE TUTORIAL!</Text>
        </TouchableOpacity>

        <TourGuideZone zone={2} shape={'rectangle_and_keep'}>
          <TouchableOpacity style={styles.button} onPress={() => start(4)}>
            <Text style={styles.buttonText}>Step 4</Text>
          </TouchableOpacity>
        </TourGuideZone>
        <TouchableOpacity style={styles.button} onPress={() => start(2)}>
          <Text style={styles.buttonText}>Step 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={stop}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
        <TourGuideZone
          zone={6}
          shape='circle'
          text={'With animated SVG morphing with awesome flubber 🍮💯'}
        >
          <Image source={require('../assets/tourguide.jpg')} style={styles.profilePhoto} />
        </TourGuideZone>
      </View>
      <View style={styles.row}>
        <TourGuideZone zone={3} shape={'circle'} tooltipBottomOffset={200}>
          {/* <Ionicons name='ios-add-circle' {...iconProps} /> */}
          <Text style={styles.text}>Text1</Text>
        </TourGuideZone>
        <Text style={styles.text}>Text2</Text>
        <Text style={styles.text}>Text3</Text>
        {/* <Ionicons name='ios-chatbubbles' {...iconProps} />
        <Ionicons name='ios-globe' {...iconProps} /> */}
        <TourGuideZone zone={4} shape={'rectangle'}>
          {/* <Ionicons name='ios-navigate' {...iconProps} /> */}
        <Text style={styles.text}>Text4</Text>
        </TourGuideZone>
        <TourGuideZone zone={5} shape={'circle'}>
         <Text style={styles.text}>Text5</Text>
          {/* <Ionicons name='ios-rainy' {...iconProps} /> */}
        </TourGuideZone>
      </View>
      {/* <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            top: 250,
            left: 50,
            width: 64,
            height: 64,
            backgroundColor: 'red',
          },
        ]}
      /> */}
      {Platform.OS !== 'web' ? (
        <TourGuideZoneByPosition
          zone={1}
          shape={'circle'}
          isTourGuide
          top={250}
          left={50}
          width={64}
          height={64}
        />
      ) : null}
    </View>
  )
}

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
  text:{
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
