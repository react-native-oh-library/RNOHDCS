import { Block, Toast, Button, theme } from 'galio-framework';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';

const ToastDemo = () => {
    const [isShow, setShow] = useState(true);

    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            <Tester>
                <TestCase itShould='textStyle: color:skyblue fontSize:20' tags={['C_API']}>
                    <Block style={{
                        height: 200,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow} textStyle={{ color: 'skyblue', fontSize: 20 }}>This is a top positioned toast</Toast>
                    </Block>
                </TestCase>
                <TestCase itShould='textStyle: color:blue fontWeight:bold textAlign:center' tags={['C_API']}>
                    <Block style={{
                        height: 200,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow} textStyle={{ color: 'skyblue', fontWeight: 'bold', textAlign: 'center' }}>This is a top positioned toast</Toast>
                    </Block>
                </TestCase>
                <TestCase itShould='round: true' tags={['C_API']}>
                    <Block style={{
                        height: 200,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow} round={true}>This is a top positioned toast</Toast>
                    </Block>
                </TestCase>
                <TestCase itShould='round: false' tags={['C_API']}>
                    <Block style={{
                        height: 200,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow} round={false}>This is a top positioned toast</Toast>
                    </Block>
                </TestCase>
                <TestCase itShould='color: primary' tags={['C_API']}>
                    <Block style={{
                        height: 200,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow} color='primary'>This is a top positioned toast</Toast>
                    </Block>
                </TestCase>
                <TestCase itShould='color: info' tags={['C_API']}>
                    <Block style={{
                        height: 200,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow} color='info'>This is a top positioned toast</Toast>
                    </Block>
                </TestCase>
                <TestCase itShould='color: warning' tags={['C_API']}>
                    <Block style={{
                        height: 200,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow} color='warning'>This is a top positioned toast</Toast>
                    </Block>
                </TestCase>
                <TestCase itShould='color: success' tags={['C_API']}>
                    <Block style={{
                        height: 200,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow} color='success'>This is a top positioned toast</Toast>
                    </Block>
                </TestCase>
                <TestCase itShould='color: theme.COLORS?.FACEBOOK' tags={['C_API']}>
                    <Block style={{
                        height: 200,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow} color={theme.COLORS?.FACEBOOK}>This is a top positioned toast</Toast>
                    </Block>
                </TestCase>
                <TestCase itShould='fadeInDuration: 5000(淡入持续时间)' tags={['C_API']}>
                    <Block style={{
                        height: 200,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow} fadeInDuration={5000}>This is a top positioned toast</Toast>
                    </Block>
                </TestCase>
                <TestCase itShould='fadeInDuration: 1000(淡入持续时间)' tags={['C_API']}>
                    <Block style={{
                        height: 200,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow} fadeInDuration={1000}>This is a top positioned toast</Toast>
                    </Block>
                </TestCase>
                <TestCase itShould='style: backgroundColor: skyblue' tags={['C_API']}>
                    <Block style={{
                        height: 200,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow} style={{ backgroundColor: 'skyblue' }}>This is a top positioned toast</Toast>
                    </Block>
                </TestCase>
                <TestCase itShould='positionOffset: 60' tags={['C_API']}>
                    <Block style={{
                        height: 200,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow} positionOffset={60}>This is a top positioned toast</Toast>
                    </Block>
                </TestCase>
                <TestCase itShould='positionOffset: 70' tags={['C_API']}>
                    <Block style={{
                        height: 200,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow} positionOffset={70}>This is a top positioned toast</Toast>
                    </Block>
                </TestCase>
                <TestCase itShould={'isShow:' + JSON.stringify(isShow)} tags={['C_API']}>
                    <Block style={{
                        height: 200,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow}>This is a top positioned toast</Toast>
                    </Block>
                </TestCase>
                <TestCase itShould='positionIndicator: top' tags={['C_API']}>
                    <Block style={{
                        height: 200,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow} positionIndicator='top'>This is a top positioned toast</Toast>
                    </Block>
                </TestCase>
                <TestCase itShould='positionIndicator: center' tags={['C_API']}>
                    <Block style={{
                        height: 800,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow} positionIndicator='center'>This is a top positioned toast</Toast>
                    </Block>
                </TestCase>
                <TestCase itShould='positionIndicator: bottom' tags={['C_API']}>
                    <Block style={{
                        height: 800,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow} positionIndicator='bottom'>This is a top positioned toast</Toast>
                    </Block>
                </TestCase>
                <TestCase itShould='children: 展示的是Button组件' tags={['C_API']}>
                    <Block style={{
                        height: 300,
                        display: 'flex',
                    }}>
                        <Button onPress={() => setShow(!isShow)} style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>click here for toast notifications</Button>
                        <Toast isShow={isShow}>
                            <Button style={{ width: 'auto', height: 50, backgroundColor: 'blue' }}>children</Button>
                        </Toast>
                    </Block>
                </TestCase>
            </Tester>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    accordion: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
    },
    listStyle: {
        borderTopWidth: 10,
        borderTopColor: 'red',
    },
    headerStyle: {
        backgroundColor: '#5E72E4',
        padding: 10,
    },
    contentStyle: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontWeight: 'bold'
    },
    inputArea: {
        width: '100%',
        height: 100,
        borderWidth: 2,
        borderColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        marginBottom: 20
    },
    baseText: {
        width: '100%',
        height: "auto",
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    checkboxStyle: {
        color: 'pink'
    },
    imageStyle: {
        backgroundColor: "red"
    },
    labelStyle: {
        color: 'red'
    },
    focusedCard: {
        transform: [{ scale: 0.5 }],
    },
    nextCard: {
        transform: [{ scale: 1.4 }],
    },
});
export default ToastDemo