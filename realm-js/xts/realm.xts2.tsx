import React, { useState, useEffect } from "react";
import { ScrollView, Button } from "react-native";
import { Realm } from '@realm/react'
import { TestCase, TestSuite, Tester } from '@rnoh/testerino';

export const PersonSchema = {
    name: 'Person',
    primaryKey: '_id',
    properties: {
        _id: 'objectId',
        name: 'string',
        age: 'int?',
    },
};

const realmSchema = [PersonSchema];
const config = {
    schema: realmSchema,
    schemaVersion: 0,
};

const RealmTest = () => {
    const [realm, setRealm] = useState(null as any);

    useEffect(() => {
        const realmInstance = new Realm(config);
        setRealm(realmInstance);

        return () => {
            realmInstance.close();
            Realm.shutdown();
            console.log('RealmDemoApp is about to unmount');
        };
    }, []);

    const realmSchema = [PersonSchema];
    const config = {
        schema: realmSchema,
        schemaVersion: 0,
    };

    const realmInstance1 = new Realm();
    const realmPath = '/data/storage/el2/base/haps/entry/files/default.realm';
    const realmInstance2 = new Realm(realmPath);

    return (
        <Tester>
            <TestSuite name="useRealm.test">
                <ScrollView>
                    <TestCase
                        itShould='new Realm()'
                        initialState={undefined as any}
                        arrange={({ setState }) => (
                            <Button
                                title='new Realm()'
                                onPress={() => {
                                    setState(realmInstance1);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.not.null;
                        }}
                    />

                    <TestCase
                        itShould='new Realm(path)'
                        initialState={undefined as any}
                        arrange={({ setState }) => (
                            <Button
                                title='new Realm(path)'
                                onPress={() => {
                                    setState(realmInstance2);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.not.null;
                        }}
                    />

                    <TestCase
                        itShould='new Realm(config)'
                        initialState={undefined as any}
                        arrange={({ setState }) => (
                            <Button
                                title='new Realm(config)'
                                onPress={() => {
                                    setState(realm);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.not.null;
                        }}
                    />

                </ScrollView>
            </TestSuite>
        </Tester>
    );
}

export default RealmTest;