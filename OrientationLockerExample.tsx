import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useState } from 'react';
import {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
  useOrientationChange,
  useDeviceOrientationChange,
  useLockListener,
} from 'react-native-orientation-locker';


export function OrientationLockerExample() {
  const [showVideo, setShowVideo] = useState(true);
  useOrientationChange((o) => {
    // Handle orientation change
  })

  useDeviceOrientationChange((o) => {
    // Handle device orientation change
  })

  useLockListener(()=>{
    // Handle lock change
  })

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <OrientationLocker
        orientation={PORTRAIT}
        onChange={orientation => console.log('onChange', orientation)}
        onDeviceChange={orientation =>
          console.log('onDeviceChange', orientation)
        }
      />
      <Button title="Toggle Video" onPress={() => setShowVideo(!showVideo)} />
      {showVideo && (
        <View>
          <OrientationLocker orientation={LANDSCAPE} />
          <View style={{width: 320, height: 180, backgroundColor: '#ccc'}}>
            <Text>Landscape video goes here</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#eeeeee',
    marginBottom: 0,
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 3,
    backgroundColor: 'grey',
  },
});
