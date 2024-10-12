
import { TestCase, Tester, TestSuite } from '@rnoh/testerino';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    ScrollView,
    Platform,
    TurboModuleRegistry,
    NativeModules,
} from 'react-native';

import {
    open,
    openRemote,
    openSync,
    moveAssetsDatabase,
    isLibsql,
    isSQLCipher,
    type DB,
    type SQLBatchTuple,
    ANDROID_DATABASE_PATH,
    ANDROID_EXTERNAL_FILES_PATH,
    IOS_LIBRARY_PATH,
} from '@op-engineering/op-sqlite';
import { HARMONY_DATABASE_PATH, HARMONY_FILES_PATH } from '@react-native-oh-tpl/op-sqlite';
import FS from '@react-native-oh-tpl/react-native-fs'

const PALETTE = {
    REACT_CYAN_LIGHT: 'hsl(193, 95%, 68%)',
    REACT_CYAN_DARK: 'hsl(193, 95%, 30%)',
}

function Button({ label, onPress }: { onPress: () => void; label: string }) {
    return (
        <TouchableHighlight
            underlayColor={PALETTE.REACT_CYAN_DARK}
            style={{
                paddingVertical: 6,
                paddingHorizontal: 12,
                backgroundColor: PALETTE.REACT_CYAN_LIGHT,
                borderWidth: 2,
                borderColor: PALETTE.REACT_CYAN_DARK,
            }}
            onPress={onPress}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>
                {label}
            </Text>
        </TouchableHighlight>
    );
}


function randomString(e: number) {
    e = e || 32;
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
        a = t.length,
        n = "";
    for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
}

async function sleep(ms: number): Promise<void> {
    return new Promise<void>(resolve => {
        setTimeout(resolve, ms);
    });
}

const expectedVersion = isLibsql()
    ? '3.45.1'
    : isSQLCipher()
        ? '3.44.2'
        : '3.45.1';
const NativeOPSQLite = TurboModuleRegistry.getEnforcing('OPSQLite') ? TurboModuleRegistry.getEnforcing('OPSQLite') : NativeModules.OPSQLite;

let db: DB | undefined;

export default function OpSqliteTest() {

    const [openValue, setOpenValue] = useState<any>(null);
    const [openRemoteValue, setOpenRemoteValue] = useState<any>(null);
    const [openSyncValue, setOpenSyncValue] = useState<any>(null);
    const [getConstantsValue, setGetConstantsValue] = useState<any>(null);
    const [isSQLCipherValue, setIsSQLCipherValue] = useState<any>(null);
    const [isLibsqlValue, setIsLibsqlValue] = useState<any>(null);
    const [moveAssetsDatabaseValue, setMoveAssetsDatabaseValue] = useState<any>(null);
    const [DB_close_Value, set_DB_close_Value] = useState<any>(null);
    const [DB_delete_Value, set_DB_delete_Value] = useState<any>(null);
    const [DB_attach_Value, set_DB_attach_Value] = useState<any>(null);
    const [DB_detach_Value, set_DB_detach_Value] = useState<any>(null);
    const [DB_transaction_Value, set_DB_transaction_Value] = useState<any>(null);
    const [DB_execute_Value, set_DB_execute_Value] = useState<any>(null);
    const [DB_executeWithHostObjects_Value, set_DB_executeWithHostObjects_Value] = useState<any>(null);
    const [DB_executeBatch_Value, set_DB_executeBatch_Value] = useState<any>(null);
    const [DB_loadFile_Value, set_DB_loadFile_Value] = useState<any>(null);
    const [DB_updateHook_Value, set_DB_updateHook_Value] = useState<any>(null);
    const [DB_commitHook_Value, set_DB_commitHook_Value] = useState<any>(null);
    const [DB_rollbackHook_Value, set_DB_rollbackHook_Value] = useState<any>(null);
    const [DB_prepareStatement_Value, set_DB_prepareStatement_Value] = useState<any>(null);
    const [DB_loadExtension_Value, set_DB_loadExtension_Value] = useState<any>(null);
    const [DB_executeRaw_Value, set_DB_executeRaw_Value] = useState<any>(null);
    const [DB_getDbPath_Value, set_DB_getDbPath_Value] = useState<any>(null);
    const [DB_reactiveExecute_Value, set_DB_reactiveExecute_Value] = useState<any>(null);
    const [DB_sync_Value, set_DB_sync_Value] = useState<any>(null);


    const createDB = async () => {
        try {
            if (db && db.close) {
                db.close();
                db.delete();
            }
            db = open({
                name: 'hooksDb.sqlite',
                encryptionKey: 'test',
                location: Platform.OS === 'ios' ? IOS_LIBRARY_PATH : HARMONY_DATABASE_PATH
            });
            await db.execute('DROP TABLE IF EXISTS User;').then(res => {

            }).catch(e => {
                console.warn('error on before each', e);
            });
            await db.execute(
                'CREATE TABLE User ( id INT PRIMARY KEY, name TEXT NOT NULL, age INT, networth REAL) STRICT;',
            );

        } catch (e) {
            console.warn('error on before each', e);
        }
    }

    const createTeacherDB = async () => {

        try {
            let teacherdb = open({
                name: 'testdb.sqlite',
                encryptionKey: 'test',
                location: Platform.OS === 'ios' ? IOS_LIBRARY_PATH : HARMONY_DATABASE_PATH
            });
            await teacherdb.execute('DROP TABLE IF EXISTS School;').then(res => {

            }).catch(e => {
                console.warn('error on before each', e);
            });
            await teacherdb.execute(
                'CREATE TABLE School ( id INT PRIMARY KEY, name TEXT NOT NULL, age INT, networth REAL) STRICT;',
            );

            await teacherdb.execute(
                'INSERT INTO "School" (id, name, age, networth) VALUES(?, ?, ?, ?)',
                [1, 'wangyuxi', 28, 500],
            );

            teacherdb.close();
        } catch (e) {
            console.warn('error on before createTeacherDB', e);
        }

    }

    const createTestDB2 = async () => {

        try {
            let teacherdb = open({
                name: 'testdb2.sqlite',
                encryptionKey: 'test',
                location: Platform.OS === 'ios' ? IOS_LIBRARY_PATH : HARMONY_DATABASE_PATH
            });
            await teacherdb.execute('DROP TABLE IF EXISTS users;').then(res => {

            }).catch(e => {
                console.warn('error on before each', e);
            });
            await teacherdb.execute(
                'CREATE TABLE users ( ID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT) STRICT;',
            );

            await teacherdb.execute(
                'INSERT INTO "users" (name) VALUES(?)',
                ['wangyuxi22'],
            );

            teacherdb.close();
        } catch (e) {
            console.warn('error on before createTestDB2', e);
        }

    }

    useEffect(() => {

        FS.exists(HARMONY_FILES_PATH + '/loadfile.sql').then(res => {
            if (!res) {
                FS.writeFile(HARMONY_FILES_PATH + '/loadfile.sql', 'select sqlite_version();');
            }
        }).catch(e => {
            FS.writeFile(HARMONY_FILES_PATH + '/loadfile.sql', 'select sqlite_version();');
        });

        createTeacherDB();
        createTestDB2();
        createDB();

        return () => {
            if (db && db.close) {
                try {
                    db.close();
                    db.delete();
                } catch (error) {

                }
            }
            db = undefined;
        }

    }, []);

    const Menues = [
        {
            name: 'Api',
            cases: [
                {
                    key: 'OpSqliteTest_Api_1',
                    itShould: `call api： open：(${JSON.stringify({
                        name: 'versionTest.sqlite',
                        location: Platform.OS === 'ios' ? IOS_LIBRARY_PATH : HARMONY_DATABASE_PATH,
                    })})`,
                    label: 'call',
                    isAssert: true,
                    returnValue: openValue,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        let db = open({
                            name: 'versionTest.sqlite',
                            encryptionKey: isSQLCipher() ? 'test' : '',
                            location: Platform.OS === 'ios' ? IOS_LIBRARY_PATH : HARMONY_DATABASE_PATH,
                        });

                        const res = await db.execute('select sqlite_version();');

                        setState(res.rows?._array[0]['sqlite_version()'] === expectedVersion);
                        db.close();
                        setOpenValue(JSON.stringify(db));
                    },
                },
                {
                    key: 'OpSqliteTest_Api_1_1',
                    itShould: `call api： open：((${JSON.stringify({
                        name: 'versionTest.sqlite',
                        encryptionKey: 'test',
                        location: Platform.OS === 'ios' ? IOS_LIBRARY_PATH : HARMONY_DATABASE_PATH,
                    })})`,
                    label: 'call',
                    isAssert: true,
                    returnValue: openValue,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        let db = open({
                            name: 'versionTest2.sqlite',
                            encryptionKey: 'test',
                            location: Platform.OS === 'ios' ? IOS_LIBRARY_PATH : HARMONY_DATABASE_PATH,
                        });

                        const res = await db.execute('select sqlite_version();');

                        setState(res.rows?._array[0]['sqlite_version()'] === expectedVersion);
                        db.close();
                        setOpenValue(JSON.stringify(db));
                    },
                },
                {
                    key: 'OpSqliteTest_Api_2',
                    itShould: 'call api： getConstants',
                    label: 'call',
                    isAssert: true,
                    returnValue: getConstantsValue,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        let {
                            IOS_DOCUMENT_PATH,
                            IOS_LIBRARY_PATH,
                            ANDROID_DATABASE_PATH,
                            ANDROID_FILES_PATH,
                            ANDROID_EXTERNAL_FILES_PATH,
                            HARMONY_DATABASE_PATH,
                            HARMONY_FILES_PATH
                        } = ((TurboModuleRegistry.getEnforcing('OPSQLite') && TurboModuleRegistry.getEnforcing('OPSQLite')?.getConstants) || !!NativeModules.OPSQLite.getConstants)
                                ? (TurboModuleRegistry.getEnforcing('OPSQLite').getConstants!() || NativeModules.OPSQLite.getConstants())
                                : NativeModules.OPSQLite;
                        let obj = {
                            IOS_DOCUMENT_PATH,
                            IOS_LIBRARY_PATH,
                            ANDROID_DATABASE_PATH,
                            ANDROID_FILES_PATH,
                            ANDROID_EXTERNAL_FILES_PATH,
                            HARMONY_DATABASE_PATH,
                            HARMONY_FILES_PATH
                        };

                        setState(!!obj);
                        setGetConstantsValue(JSON.stringify(obj));
                    },
                },
                {
                    key: 'OpSqliteTest_Api_3',
                    itShould: 'call api： isSQLCipher',
                    label: 'call',
                    isAssert: true,
                    returnValue: isSQLCipherValue,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        let isCipher = isSQLCipher();
                        setState(typeof isCipher === 'boolean');
                        setIsSQLCipherValue(isCipher ? 'true' : 'false');
                    },
                },
                {
                    key: 'OpSqliteTest_Api_4',
                    itShould: 'call api： isLibsql',
                    label: 'call',
                    isAssert: true,
                    returnValue: isLibsqlValue,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        let isLib = isLibsql();
                        setState(typeof isLib === 'boolean')
                        setIsLibsqlValue(isLib ? 'true' : 'false');
                    },
                },
                {
                    key: 'OpSqliteTest_Api_5',
                    itShould: 'call api： moveAssetsDatabase',
                    label: 'call',
                    isAssert: true,
                    returnValue: moveAssetsDatabaseValue,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        const copied = await moveAssetsDatabase({
                            filename: 'testdb.sqlite',
                            path: (Platform.OS === 'ios' ? IOS_LIBRARY_PATH : HARMONY_FILES_PATH),
                            overwrite: true,
                        });
                        setState(copied);
                        setMoveAssetsDatabaseValue(copied ? 'true' : 'false');
                    },
                },
                {
                    key: 'OpSqliteTest_Api_6',
                    itShould: 'call api： openSync',
                    label: 'call',
                    isAssert: true,
                    returnValue: openSyncValue,
                    onPress: async (setState: (arg0: boolean) => void) => {

                        let isLib = isLibsql();
                        if (isLib) {
                            const remoteDb = openSync({
                                url: 'libsql://my-db-1q2w3e4r.turso.io',
                                authToken:
                                    'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3Mjg2NDc0OTcsImlkIjoiZmE2NTFjMDQtNzBmOC00YjRiLTljZmYtOGI1OTdhNDE4ZDJkIn0.4BYeXPcCjuR2hQvuuhv30qWcLMqiIT4DXpmVZEnW1j85uPyFoxEFQzSxvGQ0L5CReSlT4YC6zM3FSvFTtoEcBg',
                                name: 'testdb4.sqlite',
                                syncInterval: 1000,
                                location: Platform.OS === 'ios' ? IOS_LIBRARY_PATH : HARMONY_DATABASE_PATH,
                            });

                            const res = await remoteDb.execute('SELECT 1');
                            // remoteDb.sync();
                            setState(!!remoteDb);
                            setOpenSyncValue(JSON.stringify(res));
                        } else {
                            setState(isLib);
                            setOpenSyncValue('only support isLibsql');
                        }

                    },
                },
                {
                    key: 'OpSqliteTest_Api_7',
                    itShould: 'call api： openRemote',
                    label: 'call',
                    isAssert: true,
                    returnValue: openRemoteValue,
                    onPress: async (setState: (arg0: boolean) => void) => {

                        let isLib = isLibsql();
                        if (isLib) {
                            const remoteDb = openRemote({
                                url: 'libsql://my-db-1q2w3e4r.turso.io',
                                authToken:
                                    'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3Mjg2NDc0OTcsImlkIjoiZmE2NTFjMDQtNzBmOC00YjRiLTljZmYtOGI1OTdhNDE4ZDJkIn0.4BYeXPcCjuR2hQvuuhv30qWcLMqiIT4DXpmVZEnW1j85uPyFoxEFQzSxvGQ0L5CReSlT4YC6zM3FSvFTtoEcBg',
                            });

                            const res = await remoteDb.execute('SELECT 1');
                            console.log('remoteDb', res);
                            remoteDb.close();

                            setState(!!remoteDb);
                            setOpenRemoteValue(JSON.stringify(res));
                        } else {
                            setState(isLib);
                            setOpenRemoteValue('only support isLibsql');
                        }
                    },
                },
            ],
        },
        {
            name: 'DB',
            cases: [
                {
                    key: 'OpSqliteTest_DB_1',
                    itShould: 'call api： execute',
                    label: 'call',
                    isAssert: true,
                    returnValue: DB_execute_Value,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        if (!db) {
                            await createDB();
                        }
                        if (db) {
                            const id = (Math.random() * 1000 + 1).toFixed(0);
                            const name = randomString(5);
                            const age = (Math.random() * 100 + 1).toFixed(0);
                            const networth = (Math.random() * 10 + 1).toFixed(0);
                            db.execute(
                                'INSERT INTO "User" (id, name, age, networth) VALUES(?, ?, ?, ?)',
                                [id, name, age, networth],
                            ).then((r) => {
                                setState(!!r);
                                set_DB_execute_Value(JSON.stringify(r));
                            });
                        }
                    },
                },
                {
                    key: 'OpSqliteTest_DB_2',
                    itShould: 'call api： executeWithHostObjects',
                    label: 'call',
                    isAssert: true,
                    returnValue: DB_executeWithHostObjects_Value,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        if (!db) {
                            await createDB();
                        }
                        if (db) {
                            const id = (Math.random() * 1000 + 1).toFixed(0);
                            const name = randomString(5);
                            const age = (Math.random() * 100 + 1).toFixed(0);
                            const networth = (Math.random() * 10 + 1).toFixed(0);
                            const res = await db.executeWithHostObjects(
                                'INSERT INTO "User" (id, name, age, networth) VALUES(?, ?, ?, ?)',
                                [id, name, age, networth],
                            );
                            setState(!!res);
                            set_DB_executeWithHostObjects_Value(JSON.stringify(res));
                        }
                    },
                },
                {
                    key: 'OpSqliteTest_DB_3',
                    itShould: 'call api： executeBatch',
                    label: 'call',
                    isAssert: true,
                    returnValue: DB_executeBatch_Value,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        if (!db) {
                            await createDB();
                        }
                        if (db) {
                            const id1 = (Math.random() * 1000 + 1).toFixed(0);
                            const name1 = randomString(5);
                            const age1 = (Math.random() * 100 + 1).toFixed(0);
                            const networth1 = (Math.random() * 10 + 1).toFixed(0);

                            const id2 = (Math.random() * 1000 + 1).toFixed(0);
                            const name2 = randomString(5);
                            const age2 = (Math.random() * 100 + 1).toFixed(0);
                            const networth2 = (Math.random() * 10 + 1).toFixed(0);

                            const commands: SQLBatchTuple[] = [
                                [
                                    'INSERT INTO "User" (id, name, age, networth) VALUES(?, ?, ?, ?)',
                                    [id1, name1, age1, networth1],
                                ],
                                [
                                    'INSERT INTO "User" (id, name, age, networth) VALUES(?, ?, ?, ?)',
                                    [id2, name2, age2, networth2],
                                ],
                            ];

                            const res = await db.executeBatch(commands);
                            setState(!!res);
                            set_DB_executeBatch_Value(JSON.stringify(res));
                        }
                    },
                },
                {
                    key: 'OpSqliteTest_DB_4',
                    itShould: 'call api： executeRaw',
                    label: 'call',
                    isAssert: true,
                    returnValue: DB_executeRaw_Value,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        if (!db) {
                            await createDB();
                        }
                        if (db) {
                            const id = (Math.random() * 1000 + 1).toFixed(0);
                            const name = randomString(5);
                            const age = (Math.random() * 100 + 1).toFixed(0);
                            const networth = (Math.random() * 10 + 1).toFixed(0);
                            await db.execute(
                                'INSERT INTO "User" (id, name, age, networth) VALUES(?, ?, ?, ?)',
                                [id, name, age, networth],
                            );

                            const res = await db.executeRaw(
                                'SELECT id, name, age, networth FROM User',
                            );
                            setState(!!res);
                            set_DB_executeRaw_Value(JSON.stringify(res));
                        }
                    },
                },
                {
                    key: 'OpSqliteTest_DB_5',
                    itShould: 'call api： reactiveExecute',
                    label: 'call',
                    isAssert: true,
                    returnValue: DB_reactiveExecute_Value,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        if (!db) {
                            await createDB();
                        }
                        if (db) {

                            let fullSelectRan = false;
                            let emittedUser = null;
                            const unsubscribe = db.reactiveExecute({
                                query: 'SELECT * FROM User;',
                                arguments: [],
                                fireOn: [
                                    {
                                        table: 'User',
                                    },
                                ],
                                callback: () => {
                                    fullSelectRan = true;
                                },
                            });

                            const unsubscribe2 = db.reactiveExecute({
                                query: 'SELECT name FROM User;',
                                arguments: [],
                                fireOn: [
                                    {
                                        table: 'User',
                                    },
                                ],
                                callback: data => {
                                    emittedUser = data.rows._array[0];
                                    setState(!!data);
                                    set_DB_reactiveExecute_Value(JSON.stringify(data));
                                },
                            });

                            db.execute(
                                'INSERT INTO User (id, name, age, networth) VALUES (?, ?, ?, ?);',
                                [1, 'John', 30, 1000],
                            );

                            await sleep(20);

                            db.execute('UPDATE User SET name = ? WHERE id = ?;', ['Foo', 1]);

                            await sleep(20);

                            unsubscribe();
                            unsubscribe2();

                        }
                    },
                },
                {
                    key: 'OpSqliteTest_DB_6',
                    itShould: 'call api： getDbPath',
                    label: 'call',
                    isAssert: true,
                    returnValue: DB_getDbPath_Value,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        if (!db) {
                            await createDB();
                        }
                        if (db) {
                            let dbpath = db.getDbPath();
                            setState(!!dbpath);
                            set_DB_getDbPath_Value(JSON.stringify(dbpath));
                        }
                    },
                },
                {
                    key: 'OpSqliteTest_DB_7',
                    itShould: 'call api： transaction',
                    label: 'call',
                    isAssert: true,
                    returnValue: DB_transaction_Value,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        if (!db) {
                            await createDB();
                        }
                        if (db) {
                            const id = (Math.random() * 1000 + 1).toFixed(0);
                            const name = randomString(5);
                            const age = (Math.random() * 100 + 1).toFixed(0);
                            const networth = (Math.random() * 10 + 1).toFixed(0);

                            await db.transaction(async tx => {
                                setState(!!tx);
                                set_DB_transaction_Value(JSON.stringify(tx));
                            });
                        }
                    },
                },
                {
                    key: 'OpSqliteTest_DB_8',
                    itShould: 'call api： updateHook',
                    label: 'call',
                    isAssert: true,
                    returnValue: DB_updateHook_Value,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        if (!db) {
                            await createDB();
                        }
                        if (db) {

                            const hookRes: string[] = [];
                            db.updateHook((param) => {
                                hookRes.push(param.operation);
                                set_DB_updateHook_Value(JSON.stringify(param));
                            });

                            const id = (Math.random() * 1000 + 1).toFixed(0);
                            const name = randomString(5);
                            const age = (Math.random() * 100 + 1).toFixed(0);
                            const networth = (Math.random() * 10 + 1).toFixed(0);

                            await db.execute(
                                'INSERT INTO "User" (id, name, age, networth) VALUES(?, ?, ?, ?)',
                                [id, name, age, networth],
                            );

                            db.updateHook(null);

                            await db.execute(
                                'INSERT INTO "User" (id, name, age, networth) VALUES(?, ?, ?, ?)',
                                [id + 1, name, age, networth],
                            );

                            await sleep(0);

                            setState(hookRes.length === 1);

                        }
                    },
                },
                {
                    key: 'OpSqliteTest_DB_9',
                    itShould: 'call api： commitHook',
                    label: 'call',
                    isAssert: true,
                    returnValue: DB_commitHook_Value,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        if (!db) {
                            await createDB();
                        }
                        if (db) {

                            const hookRes: string[] = [];
                            db.commitHook(() => {
                                hookRes.push('commit');
                                set_DB_commitHook_Value('callback');
                            });

                            const id = (Math.random() * 1000 + 1).toFixed(0);
                            const name = randomString(5);
                            const age = (Math.random() * 100 + 1).toFixed(0);
                            const networth = (Math.random() * 10 + 1).toFixed(0);

                            await db.transaction(async tx => {
                                await tx.execute(
                                    'INSERT INTO "User" (id, name, age, networth) VALUES(?, ?, ?, ?)',
                                    [id, name, age, networth],
                                );
                            });

                            db.commitHook(null);

                            await db.transaction(async tx => {
                                await tx.execute(
                                    'INSERT INTO "User" (id, name, age, networth) VALUES(?, ?, ?, ?)',
                                    [id + 1, name, age, networth],
                                );
                            });

                            await sleep(0);

                            setState(hookRes.length === 1);

                        }
                    },
                },
                {
                    key: 'OpSqliteTest_DB_10',
                    itShould: 'call api： rollbackHook',
                    label: 'call',
                    isAssert: true,
                    returnValue: DB_rollbackHook_Value,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        if (!db) {
                            await createDB();
                        }
                        if (db) {

                            const hookRes: string[] = [];
                            db.rollbackHook(() => {
                                hookRes.push('rollback');
                                set_DB_rollbackHook_Value('callback');
                            });

                            try {
                                await db.transaction(async () => {
                                    throw new Error('Blah');
                                });
                            } catch (e) {
                                // intentionally left blank
                            }

                            db.rollbackHook(null);

                            try {
                                await db.transaction(async () => {
                                    throw new Error('Blah');
                                });
                            } catch (e) {
                                // intentionally left blank
                            }

                            await sleep(0);

                            setState(hookRes.length === 1);

                        }
                    },
                },
                {
                    key: 'OpSqliteTest_DB_11',
                    itShould: 'call api： loadExtension',
                    label: 'call',
                    isAssert: true,
                    returnValue: DB_loadExtension_Value,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        let db = open({
                            name: 'versionTest3.sqlite',
                            encryptionKey: isSQLCipher() ? 'test' : '',
                            location: Platform.OS === 'ios' ? IOS_LIBRARY_PATH : HARMONY_DATABASE_PATH,
                        });

                        try {
                            db.loadExtension(Platform.OS === 'ios' ? 'sqlitevec.framework/sqlitevec' : 'libsqlite_vec', 'sqlite3_vec_init');
                            const res = await db.execute('select sqlite_version();');

                            setState(res.rows?._array[0]['sqlite_version()'] === expectedVersion);
                            db.close();
                            set_DB_loadExtension_Value(JSON.stringify(db));
                        } catch (e) {
                            // TODO load a sample extension
                            console.log('loadExtension', e);
                            setState(!e);
                            set_DB_loadExtension_Value(e);
                        }

                    },
                },
                {
                    key: 'OpSqliteTest_DB_12',
                    itShould: 'call api： loadFile',
                    label: 'call',
                    isAssert: true,
                    returnValue: DB_loadFile_Value,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        if (!db) {
                            await createDB();
                        }
                        if (db) {

                            let res = await db.loadFile((Platform.OS === 'ios' ? IOS_LIBRARY_PATH : HARMONY_FILES_PATH) + '/loadfile.sql');
                            setState(!!res);
                            set_DB_loadFile_Value(JSON.stringify(res));
                        }
                    },
                },
                {
                    key: 'OpSqliteTest_DB_13',
                    itShould: 'call api： prepareStatement',
                    label: 'call',
                    isAssert: true,
                    returnValue: DB_prepareStatement_Value,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        if (!db) {
                            await createDB();
                        }
                        if (db) {

                            const statement = db.prepareStatement('SELECT * FROM User WHERE id=?;');
                            statement.bind([1]);

                            let res = await statement.execute();
                            statement.bind([2]);
                            res = await statement.execute();

                            setState(!!res);
                            set_DB_prepareStatement_Value(JSON.stringify(statement));
                        }
                    },
                },
                {
                    key: 'OpSqliteTest_DB_14',
                    itShould: 'call api： attach',
                    label: 'call',
                    isAssert: true,
                    returnValue: DB_attach_Value,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        if (!db) {
                            await createDB();
                        }
                        if (db) {

                            db.attach('hooksDb.sqlite', 'testdb.sqlite', 'sam');
                            const res = await db.execute(
                                'SELECT * FROM User a INNER JOIN sam.School b on a.id = b.id'
                            );
                            setState(!!res);
                            set_DB_attach_Value('callback');
                        }
                    },
                },
                {
                    key: 'OpSqliteTest_DB_15',
                    itShould: 'call api： detach',
                    label: 'call',
                    isAssert: true,
                    returnValue: DB_detach_Value,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        if (!db) {
                            await createDB();
                        }
                        if (db) {
                            db.detach('hooksDb.sqlite', 'sam');
                            db.execute(
                                'SELECT * FROM User a INNER JOIN sam.User b on a.id = b.id'
                            ).catch(e => {
                                setState(!!e);
                                set_DB_detach_Value('callback');
                            });
                        }
                    },
                },
                {
                    key: 'OpSqliteTest_DB_16',
                    itShould: 'call api： sync',
                    label: 'call',
                    isAssert: true,
                    returnValue: DB_sync_Value,
                    onPress: async (setState: (arg0: boolean) => void) => {

                        try {
                            let isLib = isLibsql();
                            if (isLib) {
                                const remoteDb = openSync({
                                    url: 'libsql://my-db-1q2w3e4r.turso.io',
                                    authToken:
                                        'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3Mjg2NDc0OTcsImlkIjoiZmE2NTFjMDQtNzBmOC00YjRiLTljZmYtOGI1OTdhNDE4ZDJkIn0.4BYeXPcCjuR2hQvuuhv30qWcLMqiIT4DXpmVZEnW1j85uPyFoxEFQzSxvGQ0L5CReSlT4YC6zM3FSvFTtoEcBg',
                                    name: 'testdb5.sqlite',
                                    syncInterval: 1000,
                                    location: Platform.OS === 'ios' ? IOS_LIBRARY_PATH : HARMONY_DATABASE_PATH,
                                });
                                const res = await remoteDb.execute('SELECT 1');
                                remoteDb.sync();
                                setState(!!remoteDb);
                                set_DB_sync_Value(JSON.stringify(res));
                            } else {
                                setState(isLib);
                                set_DB_sync_Value('only support isLibsql');
                            }

                        } catch (e) {
                            console.log('call api： sync error:', e);
                        }
                    },
                },
                {
                    key: 'OpSqliteTest_DB_17',
                    itShould: 'call api： close',
                    label: 'call',
                    isAssert: true,
                    returnValue: DB_close_Value,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        if (!db) {
                            await createDB();
                        }
                        if (db) {
                            db.close();
                            db.execute('select 1;').catch((e) => {
                                set_DB_close_Value(!!e ? 'true' : 'false');
                                setState(!!e);
                            })
                        }
                    },
                },
                {
                    key: 'OpSqliteTest_DB_18',
                    itShould: 'call api： delete',
                    label: 'call',
                    isAssert: true,
                    returnValue: DB_delete_Value,
                    onPress: async (setState: (arg0: boolean) => void) => {
                        if (!db) {
                            await createDB();
                        }
                        if (db) {
                            db.delete();
                            try {
                                db.close();
                            } catch (error) {
                                console.log('dddfs', error)
                                set_DB_delete_Value(!!error ? 'true' : 'false');
                                setState(!!error);
                            }

                        }
                    },
                },
            ],
        },

    ];

    return (
        <Tester key={"OpSqliteTest"} style={{ flex: 1 }}>

            <ScrollView style={{ flex: 1 }}>

                {Menues.map((suiteItem) => {
                    return <TestSuite key={suiteItem.name} name={suiteItem.name}>
                        {suiteItem.cases.map(item => {
                            if (item.isAssert === true) {
                                return (
                                    <TestCase
                                        key={item.key}
                                        itShould={item.itShould}
                                        tags={['C_API']}
                                        initialState={false}
                                        arrange={({ setState }) => {
                                            return (
                                                <View key={item.key} style={{ flex: 1 }}>
                                                    {typeof (item?.returnValue) !== "undefined" && <Text numberOfLines={0} style={[styles.textStyle]}>{item.itShould}  ---returnValue: {item.returnValue}</Text>}
                                                    <Button
                                                        label={item.label}
                                                        onPress={() => {
                                                            item.onPress(setState);
                                                        }}></Button>
                                                </View>
                                            );
                                        }}
                                        assert={async ({ expect, state }) => {
                                            expect(state).to.be.true;
                                        }}
                                    />
                                )

                            } else {
                                return (
                                    <TestCase
                                        key={item.key}
                                        itShould={item.itShould}
                                        tags={['C_API']}
                                    >
                                        <View key={item.key} style={{ flex: 1 }}>
                                            {typeof (item?.returnValue) !== "undefined" && <Text numberOfLines={0} style={[styles.textStyle]}>{item.itShould}  ---returnValue: {JSON.stringify(item.returnValue)}</Text>}
                                            <Button
                                                label={item.label}
                                                onPress={() => {
                                                    item.onPress(() => { });
                                                }}></Button>
                                        </View>
                                    </TestCase>
                                )
                            }
                        })}
                    </TestSuite>
                })}

            </ScrollView>
        </Tester>
    );
}


const styles = StyleSheet.create({

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: '#666',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
