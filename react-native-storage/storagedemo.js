import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { name as appName } from './app.json';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native'
///初始化
const storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,
  
    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,
  
    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: 1000 * 3600 * 24,
  
    // 读写时在内存中缓存数据。默认启用。
    enableCache: true, 
    // storageBackend: global.storage,
    // 你可以在构造函数这里就写好sync的方法 
    // 或是在任何时候，直接对storage.sync进行赋值修改 
    // 或是写到另一个文件里，这里require引入
    // 如果storage中没有相应数据，或数据已过期，
    // 则会调用相应的sync方法，无缝返回最新数据。
    // sync方法的具体说明会在后文提到
    // sync: sync,
  });
  var userids = [];
  var key = '';
  var userA = {
    key:'user',
    id:"1001",
    name: 'A',
    age: 20,
    tags: ['geek', 'nerd', 'otaku'],
  };
  var userB = {
    key:'user',
    id:"1002",
    name: 'B',
    age: 28,
    tags: ['test', 'john', 'storage'],
  };
  var loginA = {
    key:'login',
    id:"1003",
    account: 'test123',
    password: "123321",
  };
  var loginB = {
    key:'login',
    id:"1004",
    account: 'test456',
    password: "456654",
  };
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
 class StorageDemo extends Component {
    constructor() {
      super();
      this.listData = [];
      this.state = {
        listData: [],
      };
    }
    updateProgress = (text, resetState) => {
      let listData = [];
      if (!resetState) {
        listData = [...this.listData];
      }
      listData.push(text);
      this.listData = listData;
      this.setState({
        listData,
      });
    };
  
    componentWillUnmount = () => {
      this.timer && clearTimeout(this.timer);
    };
  
    ///保存
    saveStorageFun = (type) => {///type:1代表userA；2代表userB
      console.log("test==== >>>>storage====saveStorageFun");
      this.updateProgress("saveStorage start...");
      storage.save({
        key: 'user', // 注意:请不要在key中使用_下划线符号!
        id: type==1?userA.id:userB.id, // 注意:请不要在id中使用_下划线符号!
        data: type==1?userA:userB,
        // 如果不指定过期时间，则会使用defaultExpires参数
        // 如果设为null，则永不过期
        expires: 1000 * 3600 * 24
      }).then(() => {
        console.log("test==== >>>>storage====saveStorage  success");
        this.updateProgress("saveStorage success");
        this.loadStorageFun(type==1?userA:userB)
      });
    
    };
     //读取
  loadStorageFun = (user) => {
    this.updateProgress("loadStorage start...");
    console.log("test==== >>>>storage====loadStorageFun");
    storage.load({
      key: user.key,
      id:user.id,
      // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
    autoSync: false,

    // // syncInBackground(默认为true)意味着如果数据过期，
    // // 在调用sync方法的同时先返回已经过期的数据。
    // // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。
    syncInBackground: true,
    }).then(ret => {
      // 如果找到数据，则在then方法中返回
      this.updateProgress("data:{"+JSON.stringify(ret)+"}");
      console.log("test==== >>>>storage===="+JSON.stringify(ret));
      this.updateProgress("loadStorage success");
    }).catch(err => {
      // 如果没有找到数据且没有sync方法，
      // 或者有其他异常，则在catch中返回
      console.warn(err.message);
      this.updateProgress("loadStorage fail:"+err.message);
      console.log("test==== >>>>storage====loadStorageFunError   "+err.message);
      switch (err.name) {
          case 'NotFoundError':
              // TODO;
          
              break;
          case 'ExpiredError':
              // TODO
              break;
      }
    })
  }

  //移除单个数据
  removeStorageFun = (type) => {
    this.updateProgress("removeStoreage start...");
    storage.remove({
      key:type==1?userA.key:userB.key,
      id:type==1?userA.id:userB.id
    }).then(() => {
      this.updateProgress("removeStoreage success");
      this.loadStorageFun(type==1?userB:userA)
    }).catch(err => {
      this.updateProgress("removeStorage fail:"+err.message);
      console.log("test==== >>>>storage====removeStorageFunError   "+err.message);
    });
  }
  // 获取某个key下的所有id(仅key-id数据)
  getIdsForKeyStorageFun = (key) => {
    this.updateProgress("getIdsForKey start...");
    storage.getIdsForKey(key).then(ids => {
      this.updateProgress("getIdsForKey: "+JSON.stringify(ids));
      userids = ids
      console.log(ids);
      console.log("test==== >>>>storage=getIdsForKeyStorageFun==="+JSON.stringify(ids));
      this.updateProgress("getIdsForKey success");
    }).catch(err => {
      this.updateProgress("getIdsForKeyStorage fail:"+err.message);
      console.log("test==== >>>>storage====getIdsForKeyStorageFun===Error   "+err.message);
    });
  }

  //获取某个key下的所有数据(仅key-id数据)
  getAllDataForKeyStorageFun = (key) => {
    storage.getAllDataForKey(key).then(users => {
      console.log(users);
      console.log("test==== >>>>storage=getAllDataForKeyStorageFun==="+JSON.stringify(users));
    });
  }

  // !! 清除某个key下的所有数据(仅key-id数据)
  clearMapForKeyStorageFun= (key) =>{
    storage.clearMapForKey(key);
    console.log("test==== >>>>storage=clearMapForKeyStorageFun===");
  }

  // !! 清空map，移除所有"key-id"数据（但会保留只有key的数据）
  clearMapStorageFun = () => {
    console.log("test==== >>>>storage=clearMapStorageFun===");
    this.updateProgress("clearMapStorage start...")
    storage.clearMap().then(() => {
      this.updateProgress("clearMapStorage success")
      this.loadStorageFun(userA)
    });
  }
   //读取批量数据
   getBatchDataStorageFun = () => {
    console.log("test==== >>>>storage=getBatchDataStorageFun===start...");
    // 使用和load方法一样的参数读取批量数据，但是参数是以数组的方式提供。
    // 会在需要时分别调用相应的sync方法，最后统一返回一个有序数组。
    storage.getBatchData([
	    // { key: 'loginState' },
	    // { key: 'checkPoint', syncInBackground: false },
	    // { key: 'balance' },
	    { key: 'user'}
    ]).then(results => {
      console.log("test==== >>>>storage=getBatchDataStorageFun==="+JSON.stringify(results));
      // results.forEach( result => {
      //   console.log("test==== >>>>storage=getBatchDataStorageFun==="+JSON.stringify(result));
      // })
    })
  }
  //读取批量数据
  getBatchDataWithIdsStorageFun = () => {
    storage.getIdsForKey('user').then(userids => {
      //根据key和一个id数组来读取批量数据
      storage.getBatchDataWithIds({
      key: 'user',
      // ids: ['1001', '1002', '1003'],
      ids:userids
    }).then(retData => {
      this.updateProgress("storage data: "+JSON.stringify(retData));
      console.log("test==== >>>>storage=getBatchDataWithIdsStorageFun==="+JSON.stringify(retData));
    }).catch(err => {
      console.log("test==== >>>>storage====getBatchDataWithIdsStorageFun===Error   "+err.message);
    });
    }).catch(err => {
      this.updateProgress("getIdsForKeyStorage fail:"+err.message);
      console.log("test==== >>>>storage====getIdsForKeyStorageFun===Error   "+err.message);
    });
  }

  renderProgressEntry = entry => {
    return (
      <View style={listStyles.li}>
        <View>
          <Text style={listStyles.liText}>{entry.name}</Text>
        </View>
      </View>
    );
  };
  render = () => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.textdata}>
          <Text style = {styles.textkey}>{JSON.stringify(userA)}</Text>
          <Text style = {styles.textkey}>{JSON.stringify(userB)}</Text>
          <Button label='save userA' style={styles.toolbarButton} onPress={() => this.saveStorageFun(1)}/>
          <Button label='save userB' style={styles.toolbarButton} onPress={() =>this.saveStorageFun(2)}/>
          <Button label='get user key all ids' style={styles.toolbarButton} onPress={() =>this.getIdsForKeyStorageFun('user')}/>
          <Button label='remove user key one data' style={styles.toolbarButton} onPress={() =>this.removeStorageFun(1)}/>
          <Button label='clearMapStorage' style={styles.toolbarButton} onPress={() =>this.clearMapStorageFun()}/>
          <Button label='read storage data' style={styles.toolbarButton} onPress={() =>this.getBatchDataWithIdsStorageFun()}/>
        </View>
        <FlatList
          data={this.state.listData}
          renderItem={({item}) => <Item title={item} />}
          keyExtractor={item => item.i}
        />
      </View>
    );
  };
}

var listStyles = StyleSheet.create({
  li: {
    borderBottomColor: '#c8c7cc',
    borderBottomWidth: 0.5,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  liContainer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingLeft: 15,
  },
  liIndent: {
    flex: 1,
  },
  liText: {
    color: '#333',
    fontSize: 17,
    fontWeight: '400',
    marginBottom: -3.5,
    marginTop: -3.5,
  },
});
var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    textkey: {
      fontSize: 12,
      margin: 10,
    },
    textvules: {
      fontSize: 12,
      textAlign: 'center',
      margin: 10,
    },
    texterror: {
      fontSize: 12,
      textAlign: 'center',
      margin: 10,
      color:'red'
    },
    
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    toolbar: {
      paddingTop: 10,
      paddingBottom: 10,
      flexDirection: 'column',
    },
    textdata: {
      paddingTop: 60,
      paddingBottom: 10,
      flexDirection: 'column',
    },
    toolbarButton: {
      paddingTop: 10,
      paddingBottom: 10,
      margin: 10,
      backgroundColor: 'blue',
      color: '#ffffff',
      textAlign: 'center',
    },
    mainContainer: {
      flex: 1,
    },
  });

  AppRegistry.registerComponent(appName, () => StorageDemo);