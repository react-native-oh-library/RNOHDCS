import { NavBar, Block } from 'galio-framework';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TestCase, Tester } from '@rnoh/testerino';

const NavBarDemo = () => {
    const [result, setReault] = useState('')
    const handleLeftPress = () => {
        setReault('Left button pressed');
    };

    const NavbarProps = [
        { back: true },
        { back: false },
        { transparent: true },
        { transparent: false },
        { title: 'NavBar' },
        { titleStyle: styles.titleStyle, title: 'NavBar' },
        { back: true, leftStyle: { paddingLeft: 2, backgroundColor: 'pink' } },
        { onLeftPress: handleLeftPress, title: 'onLeftPress', back: true }
    ]
    return (
        <ScrollView style={{ backgroundColor: "#fff" }} stickyHeaderIndices={[0]}>
            <View style={styles.inputArea}>
                <Text style={styles.baseText}>
                    {result}
                </Text>
            </View>
            <Tester>
                {
                    NavbarProps.map((item) => {
                        return (
                            <TestCase itShould={JSON.stringify(item)} tags={['C_API']} key={JSON.stringify(item)}>
                                <Block style={{
                                    height: 'auto',
                                    display: 'flex',
                                    backgroundColor: 'pink'
                                }}>
                                    <NavBar {...item}></NavBar>
                                </Block>
                            </TestCase>
                        )
                    })
                }
                <TestCase itShould='Left: Text组件'>
                    <NavBar
                        left={<Text>Left</Text>}
                    />
                </TestCase>
                <TestCase itShould='left: icon组件'>
                    <NavBar
                        left={<Ionicons name="caret-down" size={20} color="red" />}
                    />
                </TestCase>
                <TestCase itShould='right: Text组件'>
                    <NavBar
                        right={<Text>right</Text>}
                    />
                </TestCase>
                <TestCase itShould='right: icon组件'>
                    <NavBar
                        right={<Ionicons name="alarm" size={20} color="red" />}
                    />
                </TestCase>
                <TestCase itShould="rightStyle: backgroundColor:'blue',borderRadius:10">
                    <NavBar
                        right={<Text>rightStyle</Text>}
                        rightStyle={{backgroundColor:'blue',borderRadius:10}}
                    />
                </TestCase>
                <TestCase itShould="rightStyle: backgroundColor:'skyblue',borderRadius:5">
                    <NavBar
                        right={<Text>rightStyle</Text>}
                        rightStyle={{backgroundColor:'skyblue',borderRadius:5}}
                    />
                </TestCase>
                <TestCase itShould='leftIconColor: blue'>
                    <NavBar
                        back={true}
                        leftIconColor='blue'
                    />
                </TestCase>
                <TestCase itShould='leftIconColor: purple'>
                    <NavBar
                        back={true}
                        leftIconColor='purple'
                    />
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
    titleStyle: {
        color: 'blue',
        fontSize: 20
    }
});
export default NavBarDemo