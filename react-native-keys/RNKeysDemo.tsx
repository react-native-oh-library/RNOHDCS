import { Tester, TestCase, TestSuite } from "@rnoh/testerino";
import { useEffect, useState } from "react";
import React from "react";
import { View, Text, Button, TurboModuleRegistry, TextInput, StyleSheet, ScrollView } from 'react-native';
import Keys from 'react-native-keys';


export default function RnKeysDemo() {

    const [publicKeys, setpublicKeys] = useState({});
    const [secretValue, setsecretValue] = useState('');
    const [inputKey, setinputKey] = useState('BRANCH_API');
    const [inputKey2, setinputKey2] = useState('APP_NAME')
    const [keysValue, setkeysValue] = useState('');

    return (
        <ScrollView>
            <Tester style={{marginBottom: 300, marginTop: 20}}>
                <TestSuite name="react native keys">
                    <TestCase itShould="call publicKeys">
                        <View style={{ margin: 10, gap: 8 }}>
                            {
                                Object.entries(publicKeys).map((kv, index) => <View style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexDirection: "row" }} key={index}>
                                    <Text style={{ fontWeight: 700 }}>{kv[0]}</Text>
                                    <Text>{kv[1].toString()}</Text>
                                </View>)
                            }
                        </View>
                        <Button title="publicKeys" onPress={() => {
                            const res = Keys.publicKeys();
                            setpublicKeys(res);
                        }}></Button>
                    </TestCase>
                    <TestCase itShould="Keys">
                        <View>
                            <Text style={{ fontWeight: 700, margin: 10 }}>{keysValue.toString()}</Text>
                        </View>
                        <TextInput onChangeText={setinputKey2} value={inputKey2} style={styles.TextInput} placeholder='give key' />
                        <Button title={`get Keys['${inputKey2}']`} onPress={() => {
                            const res = Keys[inputKey2];
                            setkeysValue(res ?? 'not found');
                        }}></Button>
                    </TestCase>
                    <TestCase itShould="secureFor">
                        <View>
                            <Text style={{ fontWeight: 700, margin: 10 }}>{secretValue.toString()}</Text>
                        </View>
                        <TextInput onChangeText={setinputKey} value={inputKey} style={styles.TextInput} placeholder='give a sercet key' />
                        <Button title={`secureFor('${inputKey}')`} onPress={() => {
                            const res = Keys.secureFor(inputKey as any);
                            console.log(res);
                            setsecretValue(res ?? 'not found');
                        }}></Button>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    TextInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        width: '90%',
        marginBottom: 10
    },
});