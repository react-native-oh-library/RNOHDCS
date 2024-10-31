import { Block, Radio } from 'galio-framework';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';

const RadioDemo = () => {
    const [selectedValue, setSelectedValue] = useState('first');

    const handleRadioChange = (value: any) => {
        setSelectedValue(value);
    };
    const RadioProps = [
        { color: 'primary', label: 'primary' },
        { color: 'info', label: 'info' },
        { color: 'warning', label: 'warning' },
        { color: 'success', label: 'success' },
        { color: 'danger', label: 'danger' },
        { containerStyle: { backgroundColor: "#FE247220" } },
        { radioOuterStyle: { backgroundColor: '#FF9C09' } },
        { radioOuterStyle: { backgroundColor: 'purple' } },
        { radioInnerStyle: { backgroundColor: "blue", width: 10, height: 10 } },
        { radioInnerStyle: { backgroundColor: "red", width: 8, height: 8 } },
        { disabled: true, label: 'disabled -true' },
        { disabled: false, label: 'disabled -false' },
        { initialValue: true, label: 'initialValue -true' },
        { initialValue: false, label: 'initialValue -false' },
        { label: 'label' },
        { label: 'label', labelStyle: { color: 'red' } },
    ]

    return (
        <ScrollView style={{ backgroundColor: "#fff" }} stickyHeaderIndices={[0]}>
            <View style={styles.inputArea}>
                <Text style={styles.baseText}>
                    {selectedValue}
                </Text>
            </View>
            <Tester>
                {
                    RadioProps.map((item) => {
                        return (
                            <TestCase itShould={JSON.stringify(item)} tags={['C_API']} key={JSON.stringify(item)}>
                                <Block style={{
                                    height: 'auto',
                                    display: 'flex',
                                }}>
                                    <Radio {...item}></Radio>
                                </Block>
                            </TestCase>
                        )
                    })
                }

                <TestCase itShould={'flexDirection: row'} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        <Radio
                            label="First Option"
                            value="first"
                            color="blue"
                            onChange={() => handleRadioChange('first')}
                        />
                        <Radio
                            label="Second Option"
                            value="second"
                            color="green"
                            onChange={() => handleRadioChange('second')}
                        />
                        <Radio
                            label="Third Option"
                            value="third"
                            color="red"
                            onChange={() => handleRadioChange('third')}
                        />
                    </View >
                </TestCase>
                <TestCase itShould={'flexDirection: row-reverse'} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'row-reverse',
                    }}>
                        <Radio
                            label="First Option"
                            value="first"
                            color="blue"
                            onChange={() => handleRadioChange('first')}
                        />
                        <Radio
                            label="Second Option"
                            value="second"
                            color="green"
                            onChange={() => handleRadioChange('second')}
                        />
                        <Radio
                            label="Third Option"
                            value="third"
                            color="red"
                            onChange={() => handleRadioChange('third')}
                        />
                    </View >
                </TestCase>
                <TestCase itShould={'flexDirection: column'} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Radio
                            label="First Option"
                            value="first"
                            color="blue"
                            onChange={() => handleRadioChange('first')}
                        />
                        <Radio
                            label="Second Option"
                            value="second"
                            color="green"
                            onChange={() => handleRadioChange('second')}
                        />
                        <Radio
                            label="Third Option"
                            value="third"
                            color="red"
                            onChange={() => handleRadioChange('third')}
                        />
                    </View >
                </TestCase>
                <TestCase itShould={'flexDirection: column-reverse'} tags={['C_API']}>
                    <View style={{
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column-reverse',
                    }}>
                        <Radio
                            label="First Option"
                            value="first"
                            color="blue"
                            onChange={() => handleRadioChange('first')}
                        />
                        <Radio
                            label="Second Option"
                            value="second"
                            color="green"
                            onChange={() => handleRadioChange('second')}
                        />
                        <Radio
                            label="Third Option"
                            value="third"
                            color="red"
                            onChange={() => handleRadioChange('third')}
                        />
                    </View >
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
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
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
export default RadioDemo