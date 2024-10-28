import {
    alert,
    AlertOptions,
    ToastOptions,
    toast,
    dismissAlert,
    setup,
} from '@baronha/ting';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import balloon from './image/balloon.png';

function handleToast(options: ToastOptions) {
    toast(options);
}

function handleAlert(options: AlertOptions) {
    alert(options);
}

function handleDismissAlert() {
    dismissAlert();
}

function handleSetup() {
    const optionAlert: AlertOptions = {
        backgroundColor: '#E100FF',
        titleColor: '#FF4400',
        messageColor: '#00FF91',
    };

    const optionToast: ToastOptions = {
        backgroundColor: '#E100FF',
        titleColor: '#FF4400',
        messageColor: '#00FF91',
    };

    setup({ alert: optionAlert, toast: optionToast });
}

export function TingExample() {
    return (
        <Tester style={{ flex: 1 }}>
            <ScrollView>
                <TestSuite name="Ting Toast">
                    <TestCase itShould="default toast" tags={['C_API']}>
                        <Button
                            title="defalut"
                            onPress={() => {
                                const options: ToastOptions = {
                                    title: 'title-Toast',
                                    message: 'message-Toast',
                                };
                                handleToast(options);
                            }}
                        />
                    </TestCase>

                    <TestCase itShould="titleColor and messageColor" tags={['C_API']}>
                        <Button
                            title="change-red and green"
                            onPress={() => {
                                const options: ToastOptions = {
                                    title: 'title-Toast',
                                    message: 'message-Toast',
                                    titleColor: '#FF0000',
                                    messageColor: '#00FF51',
                                };

                                handleToast(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-green and blue"
                                onPress={() => {
                                    const options: ToastOptions = {
                                        title: 'title-Toast',
                                        message: 'message-Toast',
                                        titleColor: '#00FF51',
                                        messageColor: '#1500FF',
                                    };
                                    handleToast(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-blue and red"
                                onPress={() => {
                                    const options: ToastOptions = {
                                        title: 'title-Toast',
                                        message: 'message-Toast',
                                        titleColor: '#1500FF',
                                        messageColor: '#FF0000',
                                    };
                                    handleToast(options);
                                }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="preset" tags={['C_API']}>
                        <Button
                            title="change-done"
                            onPress={() => {
                                const options: ToastOptions = {
                                    title: 'title-Toast',
                                    message: 'message-Toast',
                                    preset: 'done',
                                };
                                handleToast(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-error"
                                onPress={() => {
                                    const options: ToastOptions = {
                                        title: 'title-Toast',
                                        message: 'message-Toast',
                                        preset: 'error',
                                    };
                                    handleToast(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-spinner"
                                onPress={() => {
                                    const options: ToastOptions = {
                                        title: 'title-Toast',
                                        message: 'message-Toast',
                                        preset: 'spinner',
                                    };
                                    handleToast(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-none"
                                onPress={() => {
                                    const options: ToastOptions = {
                                        title: 'title-Toast',
                                        message: 'message-Toast',
                                        preset: 'none',
                                    };
                                    handleToast(options);
                                }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="duration" tags={['C_API']}>
                        <Button
                            title="change-1s"
                            onPress={() => {
                                const options: ToastOptions = {
                                    title: 'title-Toast',
                                    message: 'message-Toast',
                                    duration: 1,
                                };
                                handleToast(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-3s"
                                onPress={() => {
                                    const options: ToastOptions = {
                                        title: 'title-Toast',
                                        message: 'message-Toast',
                                        duration: 3,
                                    };
                                    handleToast(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-5s"
                                onPress={() => {
                                    const options: ToastOptions = {
                                        title: 'title-Toast',
                                        message: 'message-Toast',
                                        duration: 5,
                                    };
                                    handleToast(options);
                                }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="haptic (iOS only)" tags={['C_API']}>
                        <Button
                            title="change-success"
                            onPress={() => {
                                const options: ToastOptions = {
                                    title: 'title-Toast',
                                    message: 'message-Toast',
                                    haptic: 'success',
                                };
                                handleToast(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-warning"
                                onPress={() => {
                                    const options: ToastOptions = {
                                        title: 'title-Toast',
                                        message: 'message-Toast',
                                        haptic: 'warning',
                                    };
                                    handleToast(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-error"
                                onPress={() => {
                                    const options: ToastOptions = {
                                        title: 'title-Toast',
                                        message: 'message-Toast',
                                        haptic: 'error',
                                    };
                                    handleToast(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-none"
                                onPress={() => {
                                    const options: ToastOptions = {
                                        title: 'title-Toast',
                                        message: 'message-Toast',
                                        haptic: 'none',
                                    };
                                    handleToast(options);
                                }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="shouldDismissByDrag" tags={['C_API']}>
                        <Button
                            title="change-true"
                            onPress={() => {
                                const options: ToastOptions = {
                                    title: 'title-Toast',
                                    message: 'message-Toast',
                                    shouldDismissByDrag: true,
                                };
                                handleToast(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-false"
                                onPress={() => {
                                    const options: ToastOptions = {
                                        title: 'title-Toast',
                                        message: 'message-Toast',
                                        shouldDismissByDrag: false,
                                    };
                                    handleToast(options);
                                }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="position" tags={['C_API']}>
                        <Button
                            title="change-top"
                            onPress={() => {
                                const options: ToastOptions = {
                                    title: 'title-Toast',
                                    message: 'message-Toast',
                                    position: 'top',
                                };
                                handleToast(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-bottom"
                                onPress={() => {
                                    const options: ToastOptions = {
                                        title: 'title-Toast',
                                        message: 'message-Toast',
                                        position: 'bottom',
                                    };
                                    handleToast(options);
                                }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="backgroundColor" tags={['C_API']}>
                        <Button
                            title="change-red"
                            onPress={() => {
                                const options: ToastOptions = {
                                    title: 'title-Toast',
                                    message: 'message-Toast',
                                    backgroundColor: '#FF0000',
                                };
                                handleToast(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-green"
                                onPress={() => {
                                    const options: ToastOptions = {
                                        title: 'title-Toast',
                                        message: 'message-Toast',
                                        backgroundColor: '#00FF59',
                                    };
                                    handleToast(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-blue"
                                onPress={() => {
                                    const options: ToastOptions = {
                                        title: 'title-Toast',
                                        message: 'message-Toast',
                                        backgroundColor: '#3700FF',
                                    };
                                    handleToast(options);
                                }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="icon" tags={['C_API']}>
                        <Button
                            title="default"
                            onPress={() => {
                                const options: ToastOptions = {
                                    title: 'title-Toast',
                                    message: 'message-Toast',
                                    icon: {
                                        uri: balloon,
                                    },
                                };
                                handleToast(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-tintColor-green"
                                onPress={() => {
                                    const options: ToastOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        icon: {
                                            uri: balloon,
                                            tintColor: '#00FF62',
                                        },
                                    };
                                    handleToast(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-tintColor-red"
                                onPress={() => {
                                    const options: ToastOptions = {
                                        title: 'title-Toast',
                                        message: 'message-Toast',
                                        icon: {
                                            uri: balloon,
                                            tintColor: '#FF0000',
                                        },
                                    };
                                    handleToast(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-size-100"
                                onPress={() => {
                                    const options: ToastOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        icon: {
                                            uri: balloon,
                                            size: 100,
                                        },
                                    };
                                    handleToast(options);
                                }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="progressColor" tags={['C_API']}>
                        <Button
                            title="default"
                            onPress={() => {
                                const options: ToastOptions = {
                                    title: 'title-Toast',
                                    message: 'message-Toast',
                                    preset: 'spinner',
                                };
                                handleToast(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-red"
                                onPress={() => {
                                    const options: ToastOptions = {
                                        title: 'title-Toast',
                                        message: 'message-Toast',
                                        progressColor: '#FF0000',
                                        preset: 'spinner',
                                    };
                                    handleToast(options);
                                }}
                            />
                        </View>
                    </TestCase>
                </TestSuite>

                <TestSuite name="Ting Alert">
                    <TestCase itShould="default alert" tags={['C_API']}>
                        <Button
                            title="defalut"
                            onPress={() => {
                                const options: AlertOptions = {
                                    title: 'title-Alert',
                                    message: 'message-Alert',
                                };
                                handleAlert(options);
                            }}
                        />
                    </TestCase>

                    <TestCase itShould="handleDismissAlert duration: 5s, close: 1s" tags={['C_API']}>
                        <Button
                            title="show alert 5s"
                            onPress={() => {
                                const options: AlertOptions = {
                                    title: 'title-Alert',
                                    message: 'message-Alert',
                                    duration: 5
                                };
                                handleAlert(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="handleDismissAlert"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        duration: 5
                                    };
                                    handleAlert(options);

                                    setTimeout(() => {
                                        handleDismissAlert();
                                    }, 1000);
                                }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="titleColor and messageColor" tags={['C_API']}>
                        <Button
                            title="change-red and green"
                            onPress={() => {
                                const options: AlertOptions = {
                                    title: 'title-Alert',
                                    message: 'message-Alert',
                                    titleColor: '#FF0000',
                                    messageColor: '#00FF51',
                                };

                                handleAlert(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-green and blue"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        titleColor: '#00FF51',
                                        messageColor: '#1500FF',
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-blue and red"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        titleColor: '#1500FF',
                                        messageColor: '#FF0000',
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="preset" tags={['C_API']}>
                        <Button
                            title="change-done"
                            onPress={() => {
                                const options: AlertOptions = {
                                    title: 'title-Alert',
                                    message: 'message-Alert',
                                    preset: 'done',
                                };
                                handleAlert(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-error"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        preset: 'error',
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-spinner"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        preset: 'spinner',
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-none"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        preset: 'none',
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="duration" tags={['C_API']}>
                        <Button
                            title="change-1s"
                            onPress={() => {
                                const options: AlertOptions = {
                                    title: 'title-Alert',
                                    message: 'message-Alert',
                                    duration: 1,
                                };
                                handleAlert(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-3s"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        duration: 3,
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-5s"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        duration: 5,
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="haptic (iOS only)" tags={['C_API']}>
                        <Button
                            title="change-success"
                            onPress={() => {
                                const options: AlertOptions = {
                                    title: 'title-Alert',
                                    message: 'message-Alert',
                                    haptic: 'success',
                                };
                                handleAlert(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-warning"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        haptic: 'warning',
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-error"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        haptic: 'error',
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-none"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        haptic: 'none',
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="shouldDismissByTap" tags={['C_API']}>
                        <Button
                            title="change-true"
                            onPress={() => {
                                const options: AlertOptions = {
                                    title: 'title-Alert',
                                    message: 'message-Alert',
                                    shouldDismissByTap: true,
                                };
                                handleAlert(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-false"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        shouldDismissByTap: false,
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="backgroundColor" tags={['C_API']}>
                        <Button
                            title="change-red"
                            onPress={() => {
                                const options: AlertOptions = {
                                    title: 'title-Alert',
                                    message: 'message-Alert',
                                    backgroundColor: '#FF0000',
                                };
                                handleAlert(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-green"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        backgroundColor: '#00FF59',
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-blue"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        backgroundColor: '#3300FF',
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="icon" tags={['C_API']}>
                        <Button
                            title="default"
                            onPress={() => {
                                const options: AlertOptions = {
                                    title: 'title-Alert',
                                    message: 'message-Alert',
                                    icon: {
                                        uri: balloon,
                                    },
                                };
                                handleAlert(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-tintColor-green"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        icon: {
                                            uri: balloon,
                                            tintColor: '#00FF62',
                                        },
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-tintColor-red"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        icon: {
                                            uri: balloon,
                                            tintColor: '#FF0000',
                                        },
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-size-100"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        icon: {
                                            uri: balloon,
                                            size: 100,
                                        },
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="progressColor" tags={['C_API']}>
                        <Button
                            title="default"
                            onPress={() => {
                                const options: AlertOptions = {
                                    title: 'title-Alert',
                                    message: 'message-Alert',
                                    preset: 'spinner',
                                };
                                handleAlert(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-red"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        progressColor: '#FF0000',
                                        preset: 'spinner',
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="borderRadius" tags={['C_API']}>
                        <Button
                            title="default"
                            onPress={() => {
                                const options: AlertOptions = {
                                    title: 'title-Alert',
                                    message: 'message-Alert',
                                };
                                handleAlert(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-10"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        borderRadius: 10,
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-50"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        borderRadius: 50,
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="backdropOpacity" tags={['C_API']}>
                        <Button
                            title="default"
                            onPress={() => {
                                const options: AlertOptions = {
                                    title: 'title-Alert',
                                    message: 'message-Alert',
                                };
                                handleAlert(options);
                            }}
                        />

                        <View style={styles.buttonBox}>
                            <Button
                                title="change-1"
                                onPress={() => {
                                    const options: AlertOptions = {
                                        title: 'title-Alert',
                                        message: 'message-Alert',
                                        backdropOpacity: 1,
                                    };
                                    handleAlert(options);
                                }}
                            />
                        </View>
                    </TestCase>
                </TestSuite>

                <TestSuite name="Ting setup">
                    <TestCase itShould="setup" tags={['C_API']}>
                        <Button
                            title="setup"
                            onPress={() => {
                                handleSetup();
                            }}
                        />
                    </TestCase>
                </TestSuite>
            </ScrollView>
        </Tester>
    );
}

const styles = StyleSheet.create({
    buttonBox: {
        marginTop: 5,
    },
});
