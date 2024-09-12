import {
    alert,
    AlertOptions,
    ToastOptions,
    toast,
    dismissAlert,
    setup,
} from '@baronha/ting';
import { View, StyleSheet, Button, ScrollView } from 'react-native';

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
    };

    const optionToast: ToastOptions = {
        backgroundColor: '#E100FF',
    };

    setup({ alert: optionAlert, toast: optionToast });
}

export function TingExample() {
    return (
        <ScrollView>
            <View style={styles.buttonBox}>
                <Button
                    title="toast-green and blue"
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

            <View style={styles.buttonBox}>
                <Button
                    title="handleDismissAlert"
                    onPress={() => {
                        handleDismissAlert();
                    }}
                />
            </View>

            <View style={styles.buttonBox}>
                <Button
                    title="setup"
                    onPress={() => {
                        handleSetup();
                    }}
                />
            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    buttonBox: {
        marginTop: 5,
    },
});