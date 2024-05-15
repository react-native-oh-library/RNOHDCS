import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import Orientation, {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
  useOrientationChange,
  useDeviceOrientationChange,
  useLockListener,
} from 'react-native-orientation-locker';

export function OrientationLockerExample() {
  const [showVideo, setShowVideo] = useState(true);
  const [orientation, setOrientation] = useState<string>();
  const [isLock, setIsLock] = useState<boolean>(false);
  const updateOrientation = (orientation: string) => {
    console.info('---orientation-----22222', orientation);
    setOrientation(orientation);
  };

  const updateDeviceOrientation = (orientation: string) => {
    console.info('---updateDeviceOrientation-----1111111', orientation);
    setOrientation(orientation);
  };

  const updateLock = (orientation: string) => {
    console.info('---updateLock-----', orientation);
  };

  useEffect(() => {
    // 开启方向变化的监听
    getOrientationInt();
  }, []);


  //获取方向
  const getOrientationInt = () => {
    Orientation.getOrientation((orientation: string) => {
      updateOrientation(orientation);
      if (orientation) {
        Alert.alert(`当前屏幕方向为${orientation}`);
      } else {
        Alert.alert('获取当前屏幕方向失败');
      }
    });
  };

  // 锁定方向为纵向（竖屏）
  const setLockToPortrait = () => {
    Orientation.lockToPortrait();
  };
  // 锁定方向为横向（横屏）
  const setLockToLandscape = () => {
    Orientation.lockToLandscape();
  };
  // 锁定方向为横向，并且是向左旋转的方向
  const setLockToLandscapeLeft = () => {
    Orientation.lockToLandscapeLeft();
  };
  // 锁定方向为横向，并且是向右旋转的方向
  const setLockToLandscapeRight = () => {
    Orientation.lockToLandscapeRight();
  };
  // 解除方向的锁定，允许自由旋转
  const unlockAllOrientations = () => {
    Orientation.unlockAllOrientations();
  };

  // 锁定上下的方向
  const lockToPortraitUpsideDown = () => {
    Orientation.lockToPortraitUpsideDown();
  };

  // 锁定除了上下的所有方向
  const lockToAllOrientationsButUpsideDown = () => {
    Orientation.lockToAllOrientationsButUpsideDown();
  };
  // 添加监听a
  const addTisten = () => {
    Orientation.addDeviceOrientationListener(updateDeviceOrientation);
  };
  // 取消监听
  const cancelAddTisten = () => {
    Orientation.removeDeviceOrientationListener(updateDeviceOrientation);
  };

  return (
    <View style={styles.container}>
      <Text>{`Current Orientation----: ${orientation}`}</Text>
      <TouchableOpacity
        onPress={lockToPortraitUpsideDown}
        style={styles.button}>
        <Text style={styles.instructions}>锁定上下的方向</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={lockToAllOrientationsButUpsideDown}
        style={styles.button}>
        <Text style={styles.instructions}>锁定除了上下的所有方向</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={setLockToPortrait} style={styles.button}>
        <Text style={styles.instructions}>锁定当前屏幕为竖屏</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={setLockToLandscape} style={styles.button}>
        <Text style={styles.instructions}>锁定当前屏幕为横屏</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={setLockToLandscapeLeft} style={styles.button}>
        <Text style={styles.instructions}>锁定当前屏幕为横屏,左旋转</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={setLockToLandscapeRight} style={styles.button}>
        <Text style={styles.instructions}>锁定当前屏幕为横屏,右旋转</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={unlockAllOrientations} style={styles.button}>
        <Text style={styles.instructions}>解锁当前屏幕旋转锁定</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={addTisten} style={styles.button}>
        <Text style={styles.instructions}>添加监听</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={cancelAddTisten} style={styles.button}>
        <Text style={styles.instructions}>取消监听</Text>
      </TouchableOpacity>
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
