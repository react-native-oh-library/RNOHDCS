import { Block, theme, Text } from 'galio-framework';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';

const TextDemo = () => {
    const TextProps = [
        { h1: true },
        { h1: false },
        { h2: true },
        { h2: false },
        { h3: true },
        { h3: false },
        { h4: true },
        { h4: false },
        { h5: true },
        { h5: false },
        { p: true },
        { p: false },
        { size: 20 },
        { size: 22 },
        { color: 'red' },
        { color: 'blue' },
        { muted: true },
        { muted: false },
        { bold: true },
        { bold: false },
        { italic: true },
        { italic: false },
    ]

    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            {
                <Tester>
                    {
                        TextProps.map((item) => {
                            return (
                                <TestCase itShould={JSON.stringify(item)} tags={['C_API']} key={JSON.stringify(item)}>
                                    <Block style={{
                                        height: 'auto',
                                        display: 'flex',
                                    }}>
                                        <Text {...item}>Heading 1</Text>
                                    </Block>
                                </TestCase>
                            )
                        })
                    }
                    <TestCase itShould={'theme.SIZES?.BASE:' + JSON.stringify(theme.SIZES?.BASE)} tags={['C_API']}>
                        <Block style={{
                            height: 'auto',
                            display: 'flex',
                        }}>
                            <Text size={theme.SIZES?.BASE}>Heading 1</Text>
                        </Block>
                    </TestCase>
                </Tester>
            }
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
export default TextDemo