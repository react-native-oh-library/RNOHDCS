import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import {
    open,
    type DB
} from '@op-engineering/op-sqlite';
import { HARMONY_DATABASE_PATH } from '@react-native-oh-tpl/op-sqlite';

export default function OpSqliteExample() {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <TouchableOpacity
                    style={{ padding: 5 }}
                    onPress={() => {
                        let db: DB = open({
                            name: 'helloDb.sqlite',
                            encryptionKey: 'test',
                            location: HARMONY_DATABASE_PATH
                        });
                    }}>
                    <Text style={{ color: 'red' }}>
                        tap to {'openDB'}
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}