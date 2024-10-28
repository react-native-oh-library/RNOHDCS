import React, { useEffect, useState } from "react";
import { ScrollView, Button, View, Text, FlatList, StyleSheet } from "react-native";
import { Realm } from '@realm/react'

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
const getRealm = () => new Realm(config);

const RealmDemoApp = () => {
  const [realm, setRealm] = useState(null as any);
  const [people, setPeople] = useState([]);
  const [result, setResult] = useState(undefined as any);

  const initialData = [
    { _id: new Realm.BSON.ObjectId(), name: 'Alice', age: 30 },
    { _id: new Realm.BSON.ObjectId(), name: 'Bob', age: 25 },
  ];

  let res = Realm.exists(config);
  console.info('realm exists(config) result:' + res)

  const realmPath = '/data/storage/el2/base/haps/entry/files/default.realm';
  const realm1 = new Realm(realmPath);
  const realm2 = new Realm();
  let realmInstance = realm;

  useEffect(() => {

    const realmInstance = getRealm();

    realmInstance.objects('Person').addListener((collection, changes) => {
      if (changes.insertions || changes.deletions || changes.newModifications) {
        setPeople(Array.from(realmInstance.objects('Person')));
      }
    });

    realmInstance.write(() => {
      initialData.forEach(person => {
        realmInstance.create('Person', person);
      });
    });

    setRealm(realmInstance);

    return () => {
      realmInstance.objects('Person').removeAllListeners();
      realmInstance.close();
      Realm.shutdown();
      console.log('RealmDemoApp is about to unmount');
    };
  }, []);

  const addPerson = () => {
    if (realm) {
      realm.write(() => {
        realm.create('Person', { _id: new Realm.BSON.ObjectId(), name: 'Person', age: null }, 'modified');
      });
    }
  };

  const addPerson1 = () => {
    if (realm1) {
      realm1.write(() => {
        realm1.create('Person', { _id: new Realm.BSON.ObjectId(), name: 'Person1', age: null });
      });
    }
  };

  const addPerson2 = () => {
    if (realm2) {
      realm2.write(() => {
        realm2.create('Person', { _id: new Realm.BSON.ObjectId(), name: 'Person2', age: null });
      });
    }
  };

  const schemaVersion = () => {
    if (realm) {
      let res = realm.schemaVersion;
      setResult('schemaVersion result:' + res);
    }
  }

  const schema = () => {
    if (realm) {
      let res = realm.schema;
      setResult('schema result:' + JSON.stringify(res));
    }
  }
  const objects = () => {
    if (realm) {
      const person = realm.objects('Person');
      setResult('objects result:' + JSON.stringify(person));
    }
  }

  const objectForPrimaryKey = () => {
    if (realm) {
      let id = people[0]._id;
      const person = realm.objectForPrimaryKey('Person', id);
      setResult('objectForPrimaryKey result:' + JSON.stringify(person));
    }
  }

  const objectForPrimaryKey1 = () => {
    if (realm) {
      type Task = Realm.Object<PersonSchema>;
      let id = people[0]._id;
      const person = realm.objectForPrimaryKey<Task>('Person', id);
      setResult('objectForPrimaryKey1 result:' + JSON.stringify(person));
    }
  }

  const deleteAll = () => {
    if (realm) {
      realm.write(() => {
        realm.deleteAll();
      });
    }
  }

  const deleteFile = () => {
    if (realm) {
      const realmPath = '/data/storage/el2/base/haps/entry/files/1';
      const config = {
        schema: realmSchema,
        schemaVersion: 0,
        path: realmPath
      };
      Realm.deleteFile(config);
      let res = Realm.exists(config);
      setResult('deleteFile exists result:' + res);
    }
  }

  const close = () => {
    if (realm) {
      realm.close();
    }
  }

  const shutdown = () => {
    if (realm) {
      Realm.shutdown();
    }
  }

  const isEmpty = () => {
    if (realm) {
      setResult('isEmpty result:' + realm.isEmpty);
    }
  }

  const path = () => {
    if (realm) {
      setResult('path result:' + realm.path);
    }
  }
  const isReadOnly = () => {
    if (realm) {
      setResult('isReadOnly result:' + realm.isReadOnly);
    }
  }
  const isInMemory = () => {
    if (realm) {
      setResult('isInMemory result:' + realm.isInMemory);
    }
  }
  const isInTransaction = () => {
    if (realm) {
      setResult('isInTransaction result:' + realm.isInTransaction);
    }
  }
  const isInTransaction1 = () => {
    if (realm) {
      realm.write(() => {
        setResult('isInTransaction1 result:' + realm.isInTransaction);
      });
    }
  }
  const isInMigration = () => {
    if (realm) {
      setResult('isInMigration result:' + realm.isInMigration);
    }
  }

  const isClosed = () => {
    if (realm) {
      setResult('isClosed result:' + realm.isClosed);
    }
  }
  const existsWithConfig = () => {
    if (realm) {
      let res = Realm.exists(config);
      setResult('exists(config) result:' + res);
    }
  }
  const existsWithPath = () => {
    if (realm) {
      let res = Realm.exists(realmPath);
      setResult('exists(path) result:' + res);
    }
  }

  const existsWithPath1 = () => {
    if (realm) {
      let res = Realm.exists('/data/storage/el2/base/haps/entry/files/1/default.realm');
      setResult('exists(path) result:' + res);
    }
  }
  const open = () => {
    if (realm) {
      let res = Realm.open();
      setResult('open result:' + res);
    }
  }
  const openWithPath = () => {
    if (realm) {
      let res = Realm.open(realmPath);
      setResult('open(path) result:' + res);
    }
  }
  const openWithConfig = () => {
    if (realm) {
      let res = Realm.open(config);
      setResult('open(config) result:' + res);
    }
  }

  const writeCopyTo = () => {
    if (realm) {
      const realmPath = '/data/storage/el2/base/haps/entry/files/1';
      const config = {
        schema: realmSchema,
        schemaVersion: 0,
        path: realmPath
      };
      realm.writeCopyTo(config);

      const r = new Realm(config);
      setResult('writeCopyTo result schemaVersion:' + r.schemaVersion);
    }
  }

  const setLogLevel = () => {
    if (realm) {
      Realm.setLogLevel('all');
    }
  }

  return (
    <View style={styles.container}>
      <Text>show {result}</Text>
      <FlatList
        data={people}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Name: {item.name}</Text>
            <Text>Age: {item.age}</Text>
          </View>
        )}
      />

      <ScrollView >

        <Button title="Add Person" onPress={addPerson} />
        <Button title="Add Person1" onPress={addPerson1} />
        <Button title="Add Person2" onPress={addPerson2} />
        <Button title="schemaVersion" onPress={schemaVersion} />
        <Button title="schema" onPress={schema} />
        <Button title="objects" onPress={objects} />
        <Button title="objectForPrimaryKey" onPress={objectForPrimaryKey} />
        <Button title="objectForPrimaryKey1" onPress={objectForPrimaryKey1} />

        <Button title="deleteAll" onPress={deleteAll} />
        <Button title="deleteFile" onPress={deleteFile} />

        <Button title="close" onPress={close} />
        <Button title="shutdown" onPress={shutdown} />
        <Button title="path" onPress={path} />

        <Button title="existsWithConfig" onPress={existsWithConfig} />
        <Button title="existsWithPath" onPress={existsWithPath} />
        <Button title="existsWithPath1" onPress={existsWithPath1} />
        <Button title="isEmpty" onPress={isEmpty} />
        <Button title="isInTransaction" onPress={isInTransaction} />
        <Button title="isInTransaction1" onPress={isInTransaction1} />
        <Button title="isReadOnly" onPress={isReadOnly} />
        <Button title="isInMemory" onPress={isInMemory} />
        <Button title="isInMigration" onPress={isInMigration} />

        <Button title="isClosed" onPress={isClosed} />
        <Button title="setLogLevel" onPress={setLogLevel} />

        <Button title="open" onPress={open} />
        <Button title="openWithPath" onPress={openWithPath} />
        <Button title="openWithConfig" onPress={openWithConfig} />
        <Button title="writeCopyTo" onPress={writeCopyTo} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
  },
});

export default RealmDemoApp;