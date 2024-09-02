import React from 'react';
import { View, StyleSheet } from 'react-native';
import Autolink from 'react-native-autolink';

const AutolinkDemo = () => {
    return (
        <View style={styles.container}>
            <Autolink
                text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink),emails (837185575@qq.com), phone numbers (415-555-5555), emails (josh@example.com), mentions/handles (@twitter), and hashtags (#exciting)"
                email
                hashtag="instagram"
                mention="twitter"
                phone="sms"
                url
                useNativeSchemes={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    autolink: {
        fontSize: 16,
        lineHeight: 24,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    customLink: {
        color: 'red',
        textDecorationLine: 'underline',
    },
    customText: {
        color: 'red',
    }
});

export default AutolinkDemo;
