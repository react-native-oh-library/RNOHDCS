import Orientation from 'react-native-orientation-locker';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { useEffect, useState } from 'react';
import { Tester, TestSuite,TestCase } from '@rnoh/testerino';

export default function OrientationLockerExample() {
    const [orientation, setOrientation] = useState<string>();
    const updateOrientation = (orientation: string) => {
        setOrientation(orientation);
    };
    const [LockListener, setLockListener] = useState<string>();

    const updateDeviceOrientation = (orientation: string) => {
        setOrientation(orientation);
    };

    useEffect(() => {
        // 开启方向变化的监听
        getDeviceOrientation();
        return () => {
        // 退出应用销毁监听
        cancelAddAllListen();
      };
    }, []);

    const getDeviceOrientation = () => {
        Orientation.getDeviceOrientation((deviceOrientation: string) => {
            updateOrientation(deviceOrientation);
            if (orientation) {
                console.log(`当前屏幕方向为${orientation}`);
            } else {
                console.log('获取当前屏幕方向失败');
            }
        });
    };

    const setLockToPortrait = () => {
        Orientation.lockToPortrait();
    };
    const setLockToLandscape = () => {
        Orientation.lockToLandscape();
    };
    const setLockToLandscapeLeft = () => {
        Orientation.lockToLandscapeLeft();
    };
    const setLockToLandscapeRight = () => {
        Orientation.lockToLandscapeRight();
    };
    const unlockAllOrientations = () => {
        Orientation.unlockAllOrientations();
    };
    const lockToPortraitUpsideDown = () => {
        Orientation.lockToPortraitUpsideDown();
    };
    const lockToAllOrientationsButUpsideDown = () => {
        Orientation.lockToAllOrientationsButUpsideDown();
    };
    const addListen = () => {
        Orientation.addDeviceOrientationListener(updateDeviceOrientation);
    };
    const cancelAddListen = () => {
        Orientation.removeDeviceOrientationListener(updateDeviceOrientation);
    };
    const addOtherListen = () => {
        Orientation.addOrientationListener(updateDeviceOrientation);
    };
    const cancelAddOtherListen = () => {
        Orientation.removeOrientationListener(updateDeviceOrientation);
    };

    const lockDidChange  = () => {
        setLockListener('屏幕已锁定，无法进行旋转');
    };
    const addLockListener  = () => {
        Orientation.addLockListener(lockDidChange); 
    };

    const removeLockListener  = () => {
        Orientation.removeLockListener(updateDeviceOrientation);
    };
    const cancelAddAllListen = () => {
        Orientation.removeAllListeners(updateDeviceOrientation);
    };



    return (
        <Tester>
            <ScrollView style={{ marginBottom: 50 }}>
                <TestSuite name="orientation">
                    <TestCase tags={['C_API']} itShould='当前屏幕方向为:'>
                        <Text>{orientation}</Text>
                    </TestCase>
                    <TestCase tags={['C_API']} itShould='当前屏幕锁定状态为:'>
                        <Text>{LockListener}</Text>
                    </TestCase>
                    
                    <TestCase tags={['C_API']} itShould='开启监听'>
                        <TouchableOpacity onPress={() => {
                            addListen();
                        }}>
                            <Text>点击此处开启监听</Text>
                        </TouchableOpacity>
                    </TestCase>

                    <TestCase tags={['C_API']} itShould='取消监听'>
                        <TouchableOpacity onPress={() => {
                            cancelAddListen();
                        }}>
                            <Text>点击此处取消监听</Text>
                        </TouchableOpacity>
                    </TestCase>

                    <TestCase tags={['C_API']} itShould='开启监听2'>
                        <TouchableOpacity onPress={() => {
                            addOtherListen();
                        }}>
                            <Text>点击此处开启监听2</Text>
                        </TouchableOpacity>
                    </TestCase>

                    <TestCase tags={['C_API']} itShould='取消监听2'>
                        <TouchableOpacity onPress={() => {
                            cancelAddOtherListen();
                        }}>
                            <Text>点击此处取消监听2</Text>
                        </TouchableOpacity>
                    </TestCase>

                    <TestCase tags={['C_API']} itShould='开启监听3:监听屏幕锁定状态'>
                        <TouchableOpacity onPress={() => {
                            addLockListener();
                        }}>
                            <Text>点击此处开启监听3</Text>
                        </TouchableOpacity>
                    </TestCase>

                    <TestCase tags={['C_API']} itShould='取消监听3:监听屏幕锁定状态'>
                        <TouchableOpacity onPress={() => {
                            removeLockListener();
                        }}>
                            <Text>点击此处取消监听3</Text>
                        </TouchableOpacity>
                    </TestCase>

                    <TestCase tags={['C_API']} itShould='退出应用,销毁监听器(生命周期里面调用removeAllListeners)'>
                          <Text>退出应用,销毁监听</Text>
                    </TestCase>

                    <TestCase
                        itShould="锁定当前屏幕上下翻转"
                        tags={['C_API']}
                        initialState={{}}
                        arrange={({ setState }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        lockToPortraitUpsideDown();
                                        const time = setTimeout(() => {
                                            Orientation.getOrientation(
                                                (err: string, orientation: string) => {
                                                    if (orientation) {
                                                        setState(orientation);
                                                    } else {
                                                        console.log("当前屏幕上下翻转");
                                                    }
                                                },
                                            );
                                        }, 50);
                                    }}
                                    style={styles.button}>
                                    <Text>锁定当前屏幕为上下翻转</Text>
                                </TouchableOpacity>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state).equal('PORTRAIT');
                        }}></TestCase>

                    <TestCase
                        itShould="锁定当前屏幕为竖屏"
                        tags={['C_API']}
                        initialState={{}}
                        arrange={({ setState }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        setLockToPortrait();
                                        const time = setTimeout(() => {
                                            Orientation.getOrientation(
                                                (err: string, orientation: string) => {
                                                    if (orientation) {
                                                        setState(orientation);
                                                    } else {
                                                        console.log("当前屏幕为竖屏");
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
                        assert={({ expect, state }) => {
                            expect(state).equal('PORTRAIT');
                        }}></TestCase>

                    <TestCase
                        itShould="锁定当前屏幕为横屏"
                        tags={['C_API']}
                        initialState={{}}
                        arrange={({ setState }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        setLockToLandscape();
                                        const time = setTimeout(() => {
                                            Orientation.getOrientation(
                                                (err: string, orientation: string) => {
                                                    if (orientation) {
                                                        setState(orientation);
                                                    } else {
                                                        console.log("当前屏幕为横屏");
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
                        assert={({ expect, state }) => {
                            expect(state).equal('LANDSCAPE');
                        }}></TestCase>
                    <TestCase
                        itShould="锁定当前屏幕为横屏，右旋转"
                        tags={['C_API']}
                        initialState={{}}
                        arrange={({ setState }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        setLockToLandscapeLeft();
                                        const time = setTimeout(() => {
                                            Orientation.getOrientation(
                                                (err: string, orientation: string) => {
                                                    if (orientation) {
                                                        setState(orientation);
                                                    } else {
                                                        console.log("当前屏幕横屏，右旋转");
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
                        assert={({ expect, state }) => {
                            expect(state).equal('LANDSCAPE_LEFT');
                        }}></TestCase>
                    <TestCase
                        itShould="锁定当前屏幕为横屏，左旋转"
                        tags={['C_API']}
                        initialState={{}}
                        arrange={({ setState }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        setLockToLandscapeRight();
                                        const time = setTimeout(() => {
                                            Orientation.getOrientation(
                                                (err: string, orientation: string) => {
                                                    if (orientation) {
                                                        setState(orientation);
                                                    } else {
                                                        console.log("当前屏幕横屏，左旋转");
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
                        assert={({ expect, state }) => {
                            expect(state).equal('LANDSCAPE_RIGHT');
                        }}></TestCase>
                </TestSuite>

                <TestCase tags={['C_API']} itShould='解锁当前屏幕旋转锁定'>
                    <TouchableOpacity onPress={() => {
                        unlockAllOrientations();
                        removeLockListener();
                        setLockListener('屏幕已解锁,可以进行旋转');
                    }}>
                        <Text>解锁当前屏幕旋转锁定</Text>
                    </TouchableOpacity>
                </TestCase>
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