import React, {useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MMKVLoader, create} from 'react-native-mmkv-storage';

const storage = new MMKVLoader().withPersistedDefaultValues().initialize();
const storage1 = new MMKVLoader().withPersistedDefaultValues().initialize();
const useStorage = create(storage);
const useStorage1 = create(storage1);
const MMKVStorageDmoe = () => {
  const [user, setUser] = useStorage('user', 'robert');
  const [age, setAge] = useStorage1('age', 12);
  const getUser = useCallback(() => {
    let users = ['andrew', 'robert', 'jack', 'alison'];
    let _user =
      users[
        users.indexOf(user) === users.length - 1 ? 0 : users.indexOf(user) + 1
      ];
    return _user;
  }, [user]);

  const buttons = [
    {
      title: 'setString',
      onPress: () => {
        storage.setString('user', getUser());
        storage.setString('age',"21");
      },
    },
    {
      title: 'getString',
      onPress: () => {
        let res = storage.getString('user');
        console.log(res)
      },
    },
    {
      title: 'setMap',
      onPress: () => {
        storage.setMap('user',{user:"jack"});
      },
    },
    {
      title: 'getMap',
      onPress: () => {
        let res = storage.getMap('user');
        console.log(res);
      },
    },
    {
      title: 'setArray',
      onPress: () => {
        storage.setArray('user',["jack","mack"]);
      },
    },
    {
      title: 'getArray',
      onPress: () => {
        let res = storage.getArray('user');
        console.log(res);
      },
    },
    {
      title: 'setNumber',
      onPress: () => {
        storage1.setInt('user',3);
      },
    },
    {
      title: 'getNumber',
      onPress: () => {
        let res = storage.getInt('user');
        console.log(res);
      },
    },
    {
      title: 'setBool',
      onPress: () => {
        storage.setBool('user',true);
      },
    },
    {
      title: 'getBool',
      onPress: () => {
        let res = storage.getBool('user');
        console.log(res);
      },
    },
    {
      title: 'setMulti',
      onPress: () => {
        const user = getUser();
        console.log('setting user to', user);
        storage.setMultipleItemsAsync([['user', user]], 'string');
      },
    },
    {
      title: 'getMulti',
      onPress: async () => {
        console.log(await storage.getMultipleItemsAsync(['user'], 'string'));
      },
    },
    {
      title: 'setUser',
      onPress: () => {
        setUser(getUser());
      },
    },
    {
      title: 'removeValue',
      onPress: () => {
        storage.removeItem('user');
      },
    },
    {
      title: 'removeValues',
      onPress: () => {
        storage.removeItems(["user","age"]);
      },
    },
    
    {
      title: 'clearAll',
      onPress: () => {
        storage.clearStore();
      },
    },
    {
      title: 'removeByKeys',
      onPress: async () => {
        const keys = await storage.indexer.getKeys();
        console.log(keys);
        storage.removeItems(keys);
        storage.clearStore();
        console.log(await storage.indexer.getKeys());
      },
    },
  ];

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            I am {typeof user == "object" ? JSON.stringify(user):user.toString()},age{age};
          </Text>
        </View>
        <ScrollView
          style={{
            width: '100%',
            paddingHorizontal: 12,
          }}>
          {buttons.map(item => (
            <Button
              key={item.title}
              title={item.title}
              onPress={item.onPress}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const Button = ({title, onPress}: {title: string; onPress: () => void}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MMKVStorageDmoe;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    backgroundColor: '#f7f7f7',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  headerText: {fontSize: 40, textAlign: 'center', color: 'black'},
});