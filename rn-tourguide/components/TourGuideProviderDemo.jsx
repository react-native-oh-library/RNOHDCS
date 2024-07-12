import * as React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  TourGuideProvider,
  TourGuideZone,
  TourGuideZoneByPosition,
  useTourGuideController,
} from 'rn-tourguide';

export default function (props) {
  return (
    <View style={{ position: 'relative', height: 250, backgroundColor: '#ffffff' }}>
      {
        props.isVisible ?
          <TourGuideProvider {...{ borderRadius: 20, androidStatusBarVisible: true }} {...props.providerprops}>
            <AppContent {...props} />
          </TourGuideProvider>
          : null
      }
    </View>
  )
}

const AppContent = (props) => {
  const iconProps = { size: 40, color: '#888' };
  const { start, canStart, getCurrentStep, stop, eventEmitter } = useTourGuideController();
  React.useEffect(() => {
    if (canStart) {
      start();
    }
  }, [canStart, props]);

  React.useEffect(() => {
    eventEmitter.on('start', () => console.log('start'));
    eventEmitter.on('stop', () => console.log('stop'));
    eventEmitter.on('stepChange', () => console.log(`stepChange`));
    return () => eventEmitter.off('*', null);
  }, []);
  return (
    <View style={styles.container}>
      <TourGuideZone
        keepTooltipPosition
        zone={1}
        text={'A react-native-copilot remastered! 🎉'}
        borderRadius={16}
        {...props.providerprops}
        {...props.tourGuideZoneprops}
        {...props.tourGuideZoneByPositionprops}
      >
        <Text style={styles.title}>
          {'Welcome to the demo of\n"rn-tourguide"'}
        </Text>
      </TourGuideZone>
      <TourGuideZone
        {...props.tourGuideZoneprops}
        {...props.tourGuideZoneByPositionprops}
        zone={2}
        shape={'rectangle_and_keep'}>
        <TouchableOpacity style={styles.button} onPress={() => start()}>
          <Text style={styles.buttonText}>START THE TUTORIAL!</Text>
        </TouchableOpacity>
      </TourGuideZone>
      {props.tourGuideZoneByPositionprops?.isZone ? (
        <TourGuideZoneByPosition
          zone={1}
          shape={'rectangle_and_keep'}
          isTourGuide
          width={64}
          height={64}
          {...props.tourGuideZoneByPositionprops}
        />
      ) : null}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
    height: 300,
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
})