import React = require('react');
import { StyleSheet, View, Text } from 'react-native';
import { getJSExceptionHandler, setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';

function ExceptionHandlerDemo() {
    let start
    const [setJSException, setErrMSG] = React.useState('Hello World')
    const [getJSException, getErrMSG] = React.useState('Hello World')
    const [setNativeException, nativeErrMSG] = React.useState('Hello World')

    const nativeCallBack = (errMsg) => {
        nativeErrMSG(errMsg)
    };

    const errorHandler = (e, isFatal) => {
        setErrMSG(e.message)
    };

    setNativeExceptionHandler(nativeCallBack, false)
    setJSExceptionHandler(errorHandler, true)
    return (
        <View style={styles.view}>
            <View style={styles.setNativeException}>
                <View style={styles.button} onTouchEnd={() => {
                    start = new Date().getTime()
                    setNativeExceptionHandler(nativeCallBack, false)
                }}>
                    <Text style={styles.buttonText}>setNativeException</Text>
                </View>
                <Text style={styles.text}>{setNativeException}</Text>
            </View>
            <View>
                <Text>------------------------------------------------------</Text>
            </View>
            <View style={styles.setJSException}>
                <View style={styles.setJSException1}>
                    <View style={styles.button} onTouchEnd={() => {
                        start = new Date().getTime()
                        setJSExceptionHandler(errorHandler, true)
                    }}>
                        <Text style={styles.buttonText}>setJSException</Text>
                    </View>
                    <Text style={styles.text}>{setJSException}</Text>
                </View>
                <View style={styles.setJSException1}>
                    <View style={styles.button} onTouchEnd={() => {
                        throw new Error('this is a Error')
                    }}>
                        <Text style={styles.buttonText}>自定义异常</Text>
                    </View>
                    <View style={styles.button} onTouchEnd={() => {
                        throw new RangeError('this is a RangeError')
                    }}>
                        <Text style={styles.buttonText}>RangeError</Text>
                    </View>
                    <View style={styles.button} onTouchEnd={() => {
                        throw new TypeError('this is a TypeError')
                    }}>
                        <Text style={styles.buttonText}>TypeError</Text>
                    </View>
                </View>
                <View style={styles.setJSException2}>
                    <View style={styles.button} onTouchEnd={() => {
                        throw new ReferenceError('this is a ReferenceError')
                    }}>
                        <Text style={styles.buttonText}>EvalError</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text>------------------------------------------------------</Text>
            </View>
            <View style={StyleSheet.getJSException}>
                <View style={StyleSheet.button} onTouchEnd={() => {
                    start = new Date().getTime()
                    let hander = getJSExceptionHandler()
                    let end = new Date().getTime()
                    getErrMSG('getJSException:' + (typeof hander == "function" ? 'success' : fail) + '\nexcuteTime:${end - start}')
                }}>
                    <Text style={styles.buttonText}>{getJSException}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: '100%',
    },
    setNativeException: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        paddingTop: 20
    },
    setJSException: {
        width: '100%',
        height: '30%',
        flexDirection: 'column'
    },
    setJSException1: {
        width: '100%',
        height: '10%',
        flexDirection: 'row'
        marginBottom: 30
    },
    setJSException: {
        width: '100%',
        height: '10%',
        flexDirection: 'row'
    },
    setJSException: {
        width: '100%',
        height: '10%',
        flexDirection: 'column'
    },
    text: {
        color: '#000',
        height: 40,
        marginLeft: 50
    },
    button: {
        width: 120,
        height: 40,
        backgroundColor: 'hsl(190,50%,70%)',
        padding: 8,
        borderRadius: 8,
        margin: 5
    },
    buttonText: {
        width: '100%',
        height: '100%',
        textAlign: 'center'
    }
})
export default ExceptionHandlerDemo;