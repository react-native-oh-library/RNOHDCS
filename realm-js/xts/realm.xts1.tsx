import React, { useEffect } from "react";
import { ScrollView, Button, View } from "react-native";
import { Realm, RealmProvider, useRealm, useQuery, createUseRealm } from '@realm/react'
import { TestCase, TestSuite, Tester } from '@rnoh/testerino';

class Task extends Realm.Object {
    _id!: Realm.BSON.ObjectId;
    description!: string;
    isComplete!: boolean;
    createdAt!: Date;

    static generate(description: string) {
        return {
            _id: new Realm.BSON.ObjectId(),
            description,
            createdAt: new Date(),
        };
    }

    static schema = {
        name: 'Task',
        primaryKey: '_id',
        properties: {
            _id: 'objectId',
            description: 'string',
            isComplete: { type: 'bool', default: false },
            createdAt: 'date'
        },
    };
}

export default function useQueryTest() {

    return (
        <RealmProvider schema={[Task]}><RealmTest /></RealmProvider>
    )
}

const RealmTest = () => {
    const realm = useRealm();
    const tasks = useQuery(Task);

    const realmSchema = [Task.schema];
    const config = {
        schema: realmSchema,
        schemaVersion: 0,
    };

    const realmPath = '/data/storage/el2/base/haps/entry/files/default.realm';

    useEffect(() => {
        return () => {
            realm.close();
            const config = {
                path: realmPath
            };
            Realm.deleteFile(config);
            console.log('RealmTest is about to unmount');
        };
    }, []);

    return (
        <Tester>
            <TestSuite name="useRealm.test">
                <ScrollView>
                    <TestCase
                        itShould='useRealm'
                        initialState={undefined as createUseRealm}
                        arrange={({ setState }) => (
                            <Button
                                title='useRealm'
                                onPress={() => {
                                    setState(realm);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.not.null;
                        }}
                    />

                    <TestCase
                        itShould='useQuery'
                        initialState={undefined as any}
                        arrange={({ setState }) => (
                            <Button
                                title='useQuery'
                                onPress={() => {
                                    setState(tasks);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.not.null;
                        }}
                    />

                    <TestCase
                        itShould='path'
                        initialState={undefined as any}
                        arrange={({ setState }) => (
                            <Button
                                title='path'
                                onPress={() => {
                                    let path = realm.path;
                                    setState(path);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.not.undefined;
                        }}
                    />

                    <TestCase
                        itShould='schema'
                        initialState={undefined as any}
                        arrange={({ setState }) => (
                            <Button
                                title='schema'
                                onPress={() => {
                                    let result = realm.schema;
                                    setState(result);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.not.undefined;
                        }}
                    />

                    <TestCase
                        itShould='isEmpty'
                        initialState={false}
                        arrange={({ setState }) => (
                            <Button
                                title='isEmpty'
                                onPress={() => {
                                    let isEmpty = realm.isEmpty;
                                    setState(isEmpty);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        itShould='isReadOnly'
                        initialState={true}
                        arrange={({ setState }) => (
                            <Button
                                title='isReadOnly'
                                onPress={() => {
                                    let result = realm.isReadOnly;
                                    setState(result);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.false;
                        }}
                    />

                    <TestCase
                        itShould='isInMemory'
                        initialState={true}
                        arrange={({ setState }) => (
                            <Button
                                title='isInMemory'
                                onPress={() => {
                                    let result = realm.isInMemory;
                                    setState(result);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.false;
                        }}
                    />


                    <TestCase
                        itShould='isInTransaction'
                        initialState={true}
                        arrange={({ setState }) => (
                            <Button
                                title='isInTransaction'
                                onPress={() => {
                                    let result = realm.isInTransaction;
                                    setState(result);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.false;
                        }}
                    />

                    <TestCase
                        itShould='isInMigration'
                        initialState={true}
                        arrange={({ setState }) => (
                            <Button
                                title='isInMigration'
                                onPress={() => {
                                    let result = realm.isInMigration;
                                    setState(result);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.false;
                        }}
                    />

                    <TestCase
                        itShould='isClosed'
                        initialState={true}
                        arrange={({ setState }) => (
                            <Button
                                title='isClosed'
                                onPress={() => {
                                    let result = realm.isClosed;
                                    setState(result);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.false;
                        }}
                    />

                    <TestCase
                        itShould='create'
                        initialState={undefined as any}
                        arrange={({ setState }) => (
                            <Button
                                title='create'
                                onPress={() => {
                                    realm.write(() => {
                                        let result = realm.create("Task", Task.generate("descript1"));
                                        setState(result);
                                    });
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.not.undefined;
                        }}
                    />

                    <TestCase
                        itShould='write'
                        initialState={false}
                        arrange={({ setState }) => (
                            <Button
                                title='write'
                                onPress={() => {
                                    realm.write(() => {
                                        realm.create("Task", Task.generate("new descript"));
                                        setState(true);
                                    });
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        itShould='delete'
                        initialState={{} as any}
                        arrange={({ setState }) => (
                            <Button
                                title='delete'
                                onPress={() => {
                                    realm.write(() => {
                                        realm.deleteAll();
                                        realm.create("Task", Task.generate("descript 2"));
                                        let item = tasks[0];
                                        realm.delete(item);
                                        setState(tasks[0]);
                                    });
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.undefined;
                        }}
                    />

                    <TestCase
                        itShould='objectForPrimaryKey'
                        initialState={null as any}
                        arrange={({ setState }) => (
                            <Button
                                title='objectForPrimaryKey'
                                onPress={() => {
                                    realm.write(() => {
                                        realm.create("Task", Task.generate("descript 2"));
                                        let id = tasks[0]._id;
                                        const result = realm.objectForPrimaryKey('Task', id);
                                        setState(result);
                                    });
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.not.null;
                        }}
                    />

                    <TestCase
                        itShould='objects'
                        initialState={null as any}
                        arrange={({ setState }) => (
                            <Button
                                title='objects'
                                onPress={() => {
                                    realm.write(() => {
                                        realm.create("Task", Task.generate("descript"));
                                        let result = realm.objects('Task');
                                        setState(result);
                                    });
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.not.null;
                        }}
                    />


                    <TestCase
                        itShould='deleteAll'
                        initialState={1}
                        arrange={({ setState }) => (
                            <Button
                                title='deleteAll'
                                onPress={() => {
                                    realm.write(() => {
                                        realm.create("Task", Task.generate("descript 2"));
                                        realm.deleteAll();
                                        setState(tasks.length);
                                    });

                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.equal(0);
                        }}
                    />

                    <TestCase
                        itShould='deleteFile'
                        initialState={true}
                        arrange={({ setState }) => (
                            <Button
                                title='deleteFile'
                                onPress={() => {
                                    const realmPath = '/data/storage/el2/base/haps/entry/files/1';
                                    const config = {
                                        schema: realmSchema,
                                        schemaVersion: 0,
                                        path: realmPath
                                    };
                                    realm.writeCopyTo(config);
                                    Realm.deleteFile(config);
                                    let res = Realm.exists(config);
                                    setState(res);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.false;
                        }}
                    />

                    <TestCase
                        itShould='setLogLevel'
                    >
                        <Button
                            title='setLogLevel'
                            onPress={() => {
                                Realm.setLogLevel("all");
                                realm.write(() => {
                                    realm.create("Task", Task.generate("descript1"));
                                });
                            }}
                        />
                    </TestCase>

                    <TestCase
                        itShould='writeCopyTo'
                        initialState={undefined as any}
                        arrange={({ setState }) => (
                            <Button
                                title='writeCopyTo'
                                onPress={() => {
                                    const realmPath = '/data/storage/el2/base/haps/entry/files/1';
                                    const config = {
                                        schema: realmSchema,
                                        schemaVersion: 0,
                                        path: realmPath
                                    };
                                    realm.writeCopyTo(config);
                                    const r = new Realm(config);
                                    setState(r);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.not.undefined;
                        }}
                    />

                    <TestCase
                        itShould='exists(config)'
                        initialState={false}
                        arrange={({ setState }) => (
                            <Button
                                title='exists(config)'
                                onPress={() => {
                                    let result = Realm.exists(config);
                                    setState(result);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        itShould='exists(path)'
                        initialState={false}
                        arrange={({ setState }) => (
                            <Button
                                title='exists(path)'
                                onPress={() => {
                                    let path = realmPath;
                                    let result = Realm.exists(path);
                                    setState(result);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        itShould='open()'
                        initialState={undefined as any}
                        arrange={({ setState }) => (
                            <Button
                                title='open(path)'
                                onPress={() => {
                                    let result = Realm.open();
                                    setState(result);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.not.undefined;
                        }}
                    />

                    <TestCase
                        itShould='open(path)'
                        initialState={undefined as any}
                        arrange={({ setState }) => (
                            <Button
                                title='open(path)'
                                onPress={() => {
                                    let path = realmPath;
                                    let result = Realm.open(path);
                                    setState(result);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.not.undefined;
                        }}
                    />

                    <TestCase
                        itShould='open(config)'
                        initialState={undefined as any}
                        arrange={({ setState }) => (
                            <Button
                                title='open(config)'
                                onPress={() => {
                                    let result = Realm.open(config);
                                    setState(result);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.not.undefined;
                        }}
                    />

                    <TestCase
                        itShould='schemaVersion'
                        initialState={undefined as any}
                        arrange={({ setState }) => (
                            <Button
                                title='schemaVersion'
                                onPress={() => {
                                    let path = realmPath;
                                    let result = Realm.schemaVersion(path);
                                    setState(result);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.equals(0);
                        }}
                    />

                    <TestCase
                        itShould='close'
                        initialState={false}
                        arrange={({ setState }) => (
                            <Button
                                title='close'
                                onPress={() => {
                                    realm.write(() => {
                                        realm.deleteAll();
                                    });
                                    realm.close();
                                    setState(realm.isClosed);
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        itShould='shutdown'
                        initialState={undefined as any}
                        arrange={({ setState }) => (
                            <Button
                                title='shutdown'
                                onPress={() => {
                                    Realm.shutdown();
                                    try {
                                        realm.deleteAll();
                                    } catch (e) {
                                        setState(e);
                                    }
                                }}
                            />
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.not.null;
                        }}
                    />

                    <TestCase
                        itShould='shutdown'>
                        <View style={{ height: 80 }} />
                    </TestCase>

                </ScrollView>
            </TestSuite>
        </Tester>
    );
}
