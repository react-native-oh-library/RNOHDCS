
import { TestCase, Tester, TestSuite } from '@rnoh/testerino';
import React, { } from 'react';
import {
    FlatList,
    Button,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { MMKVLoader, useMMKVStorage, useIndex } from 'react-native-mmkv-storage';


const MMKV = new MMKVLoader().initialize();
MMKV.transactions.register('array', 'beforewrite', ({ key, value }) => {
    console.log(MMKV.options);

    console.log(MMKV.instanceID, 'array:beforewrite: ', key, value);
});

const MyComponent = () => {
    const [tagIndex, setTagIndex] = useMMKVStorage(`index`, MMKV, ['abc', '123']);
    const [posts, update, remove] = useIndex(tagIndex, "object", MMKV);

    return (
        <Tester style={{ height: '100%' }}>
            <TestSuite name='API'>
                <TestCase
                    tags={['C_API']}
                    itShould="UseIndex：通过数组创建自定义的序列数组，通过update、remove更新删除">
                    <View>
                        <TouchableOpacity
                            style={styles.moduleButton}
                            onPress={() => {
                                remove("index")
                            }}
                        >
                            <Text style={styles.buttonText}>
                                remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.moduleButton}
                            onPress={() => {
                                update("index", ['def', '456'])
                            }}
                        >
                            <Text style={styles.buttonText}>
                                update
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={posts}
                        renderItem={({ item }) => <Text>{item}</Text>}
                    />
                    <View style={{ backgroundColor: "#fff" }}>
                        <Text style={{}}>{tagIndex}</Text>
                    </View>
                </TestCase>
            </TestSuite >
        </Tester >
    )
}
const styles = StyleSheet.create({
    moduleButton: {
        backgroundColor: 'deepskyblue',
        height: 32,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 32,
        verticalAlign: 'middle'
    },
    unitView: {
        backgroundColor: 'white',
        marginTop: 20,
        marginBottom: 10,
    },
    unitViewText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
        lineHeight: 32,
        verticalAlign: 'middle'
    }
})

export default MyComponent;