import Orientation from 'react-native-orientation';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from 'react';

export default function OrientationDemo() {
  const [orientation, setOrientation] = useState<string>();
  const [specificOrientation, setSpecificOrientation] = useState<string>();
  const updateOrientation = (orientation: string) => {
    setOrientation(orientation);
  };
  const UpdateSpecificOrientation = (specificOrientation: string) => {
    setSpecificOrientation(specificOrientation);
  };
  useEffect(() => {
    Orientation.getOrientation((err:string,orientation:string)=>{
      if(orientation){
        setOrientation(orientation)
      }else{
        console.info(err)
      }
    })
    Orientation.getSpecificOrientation((err:string,orientation:string)=>{
      if(orientation){
        setSpecificOrientation(orientation)
      }else{
        console.info(err)
      }
    })
    // 开启方向变化的监听
    Orientation.addOrientationListener(updateOrientation);
    Orientation.addSpecificOrientationListener(UpdateSpecificOrientation);
    return () => {
      Orientation.removeOrientationListener(updateOrientation);
      Orientation.removeSpecificOrientationListener(UpdateSpecificOrientation);
    };
  }, []);
  //获取方向
  const getOrientationInt = () => {
    Orientation.getOrientation((err: string, orientation: string) => {
      if (orientation) {
        Alert.alert(`当前屏幕方向为${orientation}`);
      } else {
        Alert.alert(err);
      }
    });
  };
  //获取具体方向
  const getSpecificOrientationInt = () => {
    Orientation.getSpecificOrientation((err: string, orientation: string) => {
      if (orientation) {
        Alert.alert(`当前屏幕方向为${orientation}`);
      } else {
        Alert.alert(err);
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
  //解除方向的锁定，允许自由旋转
  const unlockAllOrientations = () => {
    Orientation.unlockAllOrientations();
  };
  return (
    <View style={styles.container}>
      <Text>{`Current Orientation: ${orientation}`}</Text>
      <Text>{`Current SpecificOrientation: ${specificOrientation}`}</Text>
      <TouchableOpacity onPress={getOrientationInt} style={styles.button}>
        <Text style={styles.instructions}>获取当前屏幕的方向</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={getSpecificOrientationInt}
        style={styles.button}>
        <Text style={styles.instructions}>获取当前屏幕具体的方向</Text>
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
