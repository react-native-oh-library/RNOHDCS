import COLORS, { Block, Text, Switch } from 'galio-framework';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';

const SwitchDemo = () => {
    const [result, setReault] = useState('')
    const [initialValue, setInitialValue] = useState(false)
    const [switchValue, setSwitchValue] = React.useState(initialValue);
    function onPressSwitch() {
        setSwitchValue(!switchValue);
        setReault('onChange is success')
        return null;
    }
    const SwitchProps = [
        { disabled: false, onChange: onPressSwitch,title:'onChange事件,当开关变化的时候会触发'},
        { disabled: true, onChange: onPressSwitch },
        { initialValue: true, onChange: onPressSwitch },
        { initialValue: false, onChange: onPressSwitch },
        { onChange: onPressSwitch, trackColor: { false: 'pink', true: 'red' } },
        { onChange: onPressSwitch, trackColor: { false: 'blue', true: 'purple' } },
        { ios_backgroundColor: 'green', onChange: onPressSwitch, trackColor: { true: 'red' } },
        { ios_backgroundColor: 'green', onChange: onPressSwitch, trackColor: { false: 'black', true: 'red' } }
    ]
    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            <View style={styles.inputArea}>
                <Text style={styles.baseText}>
                    {result}
                </Text>
            </View>
            <Tester>
                {
                    SwitchProps.map((item) => {
                        return (
                            <TestCase itShould={JSON.stringify(item)} tags={['C_API']} key={JSON.stringify(item)}>
                                <Block style={{
                                    height: 'auto',
                                    display: 'flex',
                                }}>
                                    <Switch {...item}></Switch>
                                </Block>
                            </TestCase>
                        )
                    })
                }
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
        height: 50,
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
export default SwitchDemo