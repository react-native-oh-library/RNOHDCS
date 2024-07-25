import React, { PropsWithChildren, useState } from 'react';
import { View, Alert, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import ErrorBoundary from 'react-native-error-boundary';

export const ErrorBoundaryTest = () => {
    const [shouldThrow, setShouldThrow] = useState(false);
    const [showErrorApi, setShowErrorApi] = useState(false);
    const [showFallback, setShowFallback] = useState(false);

    return (
        <View style={{ flex: 1, paddingVertical: 48 }}>
            <Tester>
                <ScrollView>
                    <TestSuite name="ErrorBoundaryDefaultTest">
                        <TestCase itShould="Catch the exception, show a default error page">
                            <ErrorBoundary>
                                <Button
                                    title="Click the button, Trigger a Exception"
                                    onPress={() => {
                                        setShouldThrow(true);
                                    }}
                                />
                                {shouldThrow && (<MaybeThrows>Content</MaybeThrows>)}
                            </ErrorBoundary>
                        </TestCase>
                    </TestSuite>
                    <TestSuite name="ErrorBoundaryHandleTest" >
                        <TestCase itShould="Catch the exception, show a default error page and a pop-up window that displays abnormal content defined by the onError api">
                            <ErrorBoundary onError={errorHandler}>
                                <Button
                                    title="Click the button, Trigger a Exception"
                                    onPress={() => {
                                        setShowErrorApi(true);
                                    }}
                                />
                                {showErrorApi && (<MaybeThrows>Content</MaybeThrows>)}
                            </ErrorBoundary>
                        </TestCase>
                    </TestSuite>
                    <TestSuite name="ErrorBoundaryFallbackTest" >
                        <TestCase itShould="Catch the exception, show customized error page defined by the FallbackComponent api">
                            <ErrorBoundary FallbackComponent={CustomFallback}>
                                <Button
                                    title="Click the button, Trigger a Exception"
                                    onPress={() => {
                                        setShowFallback(true);
                                    }}
                                />
                                {showFallback && (<MaybeThrows>Content</MaybeThrows>)}
                            </ErrorBoundary>
                        </TestCase>
                    </TestSuite>
                </ScrollView>
            </Tester>
        </View>
    );
};

const errorHandler = (error: Error, stackTrace: string) => {
    Alert.alert('Error Handler', 'error content is:' + error + 'stackTrace is:' + stackTrace, [], {
        cancelable: true
    });
}

const CustomFallback = (props: { error: Error, resetError: Function }) => (
    <View style={styles.customFallback}>
        <Text style={styles.errorHeader}>Something happened!</Text>
        <Text style={styles.errorContent}>{props.error.toString()}</Text>
        <View style={styles.fallbackButtonParent}>
            <View style={styles.fallbackButton}>
                <Button onPress={() => props.resetError} title={'Try again'} />
            </View>
        </View>
    </View>
)

function MaybeThrows({ children }: PropsWithChildren) {
    const valueToThrow = new Error("💥💥💥There's been an exception");
    throw valueToThrow;
}

const styles = StyleSheet.create({
    customFallback: {
        height: 250,
        paddingTop: 12,
        paddingBottom: 12
    },
    errorHeader: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    errorContent: {
        fontSize: 16,
        marginTop: 12
    },
    fallbackButtonParent: {
        marginTop: 12,
        alignItems: 'center',
        width: '100%'
    },
    fallbackButton: {
        width: '80%'
    }
});