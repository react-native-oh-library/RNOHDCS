import Orientation from 'react-native-orientation-locker';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { useEffect, useState } from 'react';
import { Tester, TestSuite } from '@rnoh/testerino';
import { TestCase } from '../components';

export default function OrientationLockerExample() {
    const [orientation, setOrientation] = useState<string>();
    const updateOrientation = (orientation: string) => {
        setOrientation(orientation);
    };

    const updateDeviceOrientation = (orientation: string) => {
        setOrientation(orientation);
    };

    useEffect(() => {
        // 开启方向变化的监听
        getOrientationInt();
    }, []);
    const getOrientationInt = () => {
        Orientation.getOrientation((orientation: string) => {
            updateOrientation(orientation);
            if (orientation) {
                console.log(`当前屏幕方向为${orientation}`);
            } else {
                console.log('获取当前屏幕方向失败');
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
    // 添加监听
    const addTisten = () => {
        Orientation.addDeviceOrientationListener(updateDeviceOrientation);
    };
    // 取消监听
    const cancelAddTisten = () => {
        Orientation.removeDeviceOrientationListener(updateDeviceOrientation);
    };

    return (
        <Tester>
            <ScrollView style={{ marginBottom: 50 }}>

                <TestSuite name="orientation">
                    <TestCase.Example tags={['C_API']} itShould='当前屏幕方向为:'>
                        <Text>{orientation}</Text>
                    </TestCase.Example>

                    <TestCase.Example tags={['C_API']} itShould='开启监听'>
                        <TouchableOpacity onPress={() => {
                            addTisten();
                        }}>
                            <Text>点击此处开启监听</Text>
                        </TouchableOpacity>
                    </TestCase.Example>

                    <TestCase.Example tags={['C_API']} itShould='开启监听'>
                        <TouchableOpacity onPress={() => {
                            cancelAddTisten();
                        }}>
                            <Text>点击此处取消监听</Text>
                        </TouchableOpacity>
                    </TestCase.Example>

                    <TestCase.Manual
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
                        }}></TestCase.Manual>

                    <TestCase.Manual
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
                        }}></TestCase.Manual>

                    <TestCase.Manual
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
                        }}></TestCase.Manual>
                    <TestCase.Manual
                        itShould="锁定当前屏幕为横屏，左旋转"
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
                            expect(state).equal('LANDSCAPE_LEFT');
                        }}></TestCase.Manual>
                    <TestCase.Manual
                        itShould="锁定当前屏幕为横屏，右旋转"
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
                            expect(state).equal('LANDSCAPE_RIGHT');
                        }}></TestCase.Manual>
                </TestSuite>

                <TestCase.Example tags={['C_API']} itShould='解锁当前屏幕旋转锁定'>
                    <TouchableOpacity onPress={() => {
                        unlockAllOrientations();
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
