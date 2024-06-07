import Orientation from 'react-native-orientation';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {useEffect, useState} from 'react';
import {Tester, TestSuite} from '@rnoh/testerino';
import {TestCase} from '../components';

export default function OrientationTestDemo() {
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

          setOrientation(null)
          setSpecificOrientation(null)
        };
      }, []);
    const [orientation, setOrientation] = useState<string|null>();
    const [specificOrientation, setSpecificOrientation] = useState<string|null>();
  return (
    <Tester>
      <ScrollView style = {{marginBottom:50}}>
        <TestSuite name="orientation">
          <TestCase.Example tags={['C_API']} itShould='当前屏幕方向为:'>
             <Text>{orientation}</Text>
          </TestCase.Example>
          <TestCase.Example tags={['C_API']} itShould='当前屏幕方具体方向为:'>
             <Text>{specificOrientation}</Text>
          </TestCase.Example>
          <TestCase.Manual
            itShould="锁定当前屏幕为竖屏"
            tags={['C_API']}
            initialState={{}}
            arrange={({setState}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    Orientation.lockToPortrait();
                    const time = setTimeout(() => {
                      Orientation.getOrientation(
                        (err: string, orientation: string) => {
                          if (orientation) {
                            setState(orientation);
                          } else {
                            Alert.alert(err);
                          }
                        },
                      );
                    }, 50);
                  }}
                  style={styles.button}>
                  <Text>锁定当前屏幕为竖屏</Text>
                </TouchableOpacity>
              );
            }}
            assert={({expect, state}) => {
              expect(state).equal('PORTRAIT');
            }}></TestCase.Manual>
          <TestCase.Manual
            itShould="锁定当前屏幕为横屏"
            tags={['C_API']}
            initialState={{}}
            arrange={({setState}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    Orientation.lockToLandscape();
                    const time = setTimeout(() => {
                      Orientation.getOrientation(
                        (err: string, orientation: string) => {
                          if (orientation) {
                            setState(orientation);
                          } else {
                            Alert.alert(err);
                          }
                        },
                      );
                    }, 50);
                  }}
                  style={styles.button}>
                  <Text>锁定当前屏幕为横屏</Text>
                </TouchableOpacity>
              );
            }}
            assert={({expect, state}) => {
              expect(state).equal('LANDSCAPE');
            }}></TestCase.Manual>
          <TestCase.Manual
            itShould="锁定当前屏幕为横屏，左旋转"
            tags={['C_API']}
            initialState={{}}
            arrange={({setState}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    Orientation.lockToLandscapeLeft();
                    const time = setTimeout(() => {
                      Orientation.getSpecificOrientation(
                        (err: string, orientation: string) => {
                          if (orientation) {
                            setState(orientation);
                          } else {
                            Alert.alert(err);
                          }
                        },
                      );
                    }, 50);
                  }}
                  style={styles.button}>
                  <Text>锁定当前屏幕为横屏，左旋转</Text>
                </TouchableOpacity>
              );
            }}
            assert={({expect, state}) => {
              expect(state).equal('LANDSCAPE_LEFT');
            }}></TestCase.Manual>
          <TestCase.Manual
            itShould="锁定当前屏幕为横屏，右旋转"
            tags={['C_API']}
            initialState={{}}
            arrange={({setState}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    Orientation.lockToLandscapeRight();
                    const time = setTimeout(() => {
                      Orientation.getSpecificOrientation(
                        (err: string, orientation: string) => {
                          if (orientation) {
                            setState(orientation)
                          } else {
                            Alert.alert(err);
                          }
                        },
                      );
                    }, 50);
                  }}
                  style={styles.button}>
                  <Text>锁定当前屏幕为横屏，右旋转</Text>
                </TouchableOpacity>
              );
            }}
            assert={({expect, state}) => {
              expect(state).equal('LANDSCAPE_RIGHT');
            }}></TestCase.Manual>
        </TestSuite>
        <TestCase.Example tags={['C_API']} itShould='解锁当前屏幕旋转锁定'>
            <TouchableOpacity onPress={()=>{
                Orientation.unlockAllOrientations();
            }}>
            <Text>解锁当前屏幕旋转锁定</Text>
            </TouchableOpacity>
        </TestCase.Example>
      </ScrollView >
    </Tester>
  );
}
const styles = StyleSheet.create({
  
  
  instructions: {
    textAlign: 'center',
    color: '#eeeeee',
    marginBottom: 0,
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
