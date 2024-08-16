import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import IdleTimerManager from 'react-native-idle-timer';

const IdleTimerExample = () => {  
  useEffect(() => {
    // Disable the idle timer to prevent the screen from dimming or locking.
    IdleTimerManager.setIdleTimerDisabled(true);

    // A cleanup function to re-enable the idle timer when the component is unmounted
    return () => {
     IdleTimerManager.setIdleTimerDisabled(false);
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>By default, the screen will remain on</Text>
    </View>
  );
};
export default IdleTimerExample;