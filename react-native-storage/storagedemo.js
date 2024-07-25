import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage'
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

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  storage.sync ={
    async user1(params) {
        const {
            id,
            syncParams:{
                extraFetchOption,
                someFlag
            }
        } = params;
        //示例url api
        const url = 'https://xgzz-apiqa.bydauto.com.cn/aiApi-ts-dev/v2/appBaseService/info';///对应的API链接获取远程数据
        const response = await fetch(url,{
            ...extraFetchOption
        });
        const responseText = await response.text();
        console.log('user1${id} sync resp: ',responseText);
        const json = JSON.parse(responseText);
        if(json){
            return json
        }
    }
  }
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
    saveStorageFun = () => {
      console.log("test==== >>>>storage====saveStorageFun");
      this.updateProgress("saveStorage start...");
      
      storage.save({
        key:'user1',
        id:'1001',
        data: { id: 1001, name: 'Alice'},
        expires: 1000 * 3600 *24
        });
      storage.save({
        key:'user2',
        id:'1002',
        data: { id: 1002, name: 'Bob'},
        expires: 1000 * 3600 *24
      });
      storage.save({
        key:'user3',
        id:'1003',
        data: { id: 1003, name: 'Charlie'},
        expires: 1000 * 3600 *24
      });
      this.updateProgress("saveStorage success");
    };
     //读取
  loadStorageFun = () => {
    this.updateProgress("loadStorage start...");
    console.log("test==== >>>>storage====loadStorageFun");
    storage.load({
      key: 'user1',
      id: '1001',
      // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
    autoSync: true,

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
  removeStorageFun = () => {
    this.updateProgress("remove user2 start...");
    storage.remove({key: 'user2'}).then(() => {
      this.updateProgress("removeStoreage success");
    }).catch(err => {
      this.updateProgress("removeStorage fail:"+err.message);
      console.log("test==== >>>>storage====removeStorageFunError   "+err.message);
    });
  }
  //清除所有数据
  removeAllStorageFun = (type) => {
    this.updateProgress("clearAllStoreage start...");
    storage.clearAll();
    this.updateProgress("clearAllStorage success")
  }
  // 获取某个key下的所有id(仅key-id数据)
  getIdsForKeyStorageFun = () => {
    this.updateProgress("getIdsForKey start...");
    storage.getIdsForKey('user1').then(ids => {
      this.updateProgress("getIdsForKey: "+JSON.stringify(ids));
      userids = ids
      console.log(ids);
      console.log("test==== >>>>storage=getIdsForKeyStorageFun==="+JSON.stringify(ids));
      this.updateProgress("getIdsForKey success"+JSON.stringify(ids));
    }).catch(err => {
      this.updateProgress("getIdsForKeyStorage fail:"+err.message);
      console.log("test==== >>>>storage====getIdsForKeyStorageFun===Error   "+err.message);
    });
  }

  //获取某个key下的所有数据(仅key-id数据)
  getAllDataForKeyStorageFun = () => {
    this.updateProgress("getAllDataForKey start ...")
    storage.getAllDataForKey('user3').then(users => {
      console.log(users);
      console.log("test==== >>>>storage=getAllDataForKeyStorageFun==="+JSON.stringify(users));
      this.updateProgress("getAllDataForKey :"+JSON.stringify(users))
      this.updateProgress("getAllDataForKey success")
    });
  }

  // !! 清除某个key下的所有数据(仅key-id数据)
  clearMapForKeyStorageFun= () =>{
    this.updateProgress("clearMapForKeystart ...")
    storage.clearMapForKey('user1').then(() => {
      this.updateProgress("clearMapForKey success")
    });
  }

  // !! 清空map，移除所有"key-id"数据（但会保留只有key的数据）
  clearMapStorageFun = () => {
    console.log("test==== >>>>storage=clearMapStorageFun===");
    this.updateProgress("clearMap start...")
    storage.clearMap().then(() => {
      this.updateProgress("clearMap success")
    });
  }
   //读取批量数据
   getBatchDataStorageFun = () => {
    this.updateProgress("getBatchData start ...");
    console.log("test==== >>>>storage=getBatchDataStorageFun===start...");
    // 使用和load方法一样的参数读取批量数据，但是参数是以数组的方式提供。
    // 会在需要时分别调用相应的sync方法，最后统一返回一个有序数组。
    storage.getBatchData([{key:'user1',id:'1001',syncInBackground:false},{key:'user2',id:'1002',syncInBackground:false},{key:'user3',id:'1003',syncInBackground:false}]).then(results => {
      this.updateProgress("getBatchData success "+JSON.stringify(results));
      this.updateProgress("getBatchData success");
      console.log("test==== >>>>storage=getBatchDataStorageFun==="+JSON.stringify(results));
    })
  }
  //读取批量数据
  getBatchDataWithIdsStorageFun = () => {
    this.updateProgress("getBatchDataWithIds start...");
    storage.getBatchDataWithIds({key:'user3',ids:['1003']}).then(retData => {
        this.updateProgress("getBatchDataWithIds data: "+JSON.stringify(retData));
        this.updateProgress("getBatchDataWithIds success");
        console.log("test==== >>>>storage=getBatchDataWithIdsStorageFun==="+JSON.stringify(retData));
      }).catch(err => {
        console.log("test==== >>>>storage====getBatchDataWithIdsStorageFun===Error   "+err.message);
      });
  }

   syncStorageFun = () => {
    this.updateProgress("syncStorage start...");
    const params = {
        id:'1001',
        syncParams: {
            extraFetchOption: {
                method: 'GET',
                headers:{ 'Content-Type': 'application/json'}
            },
            someFlag: true
        }
    }
    storage.sync.user1(params).then(json => {
        this.updateProgress('syncStorage data ===='+json.serverName);
        storage.save({
            key: 'user1',
            id: '1002',
            data:{id: 1004,name: json.serverName},
        }).then(() => {
            this.updateProgress('syncStorage success');
        })
    }).catch(error => {
        this.updateProgress('syncStorage fail: '+error.message);
    })
    
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
          <Button title='save (user1,user2,user3)' style={styles.toolbarButton} onPress={() => this.saveStorageFun()}/>
          <View style = {{height:10}}/>
          <Button title='sync (user1)' style={styles.toolbarButton} onPress={() => this.syncStorageFun()}/>
          <View style = {{height:10}}/>
          <Button title='load data (user1)' style={styles.toolbarButton} onPress={() =>this.loadStorageFun()}/>
          <View style = {{height:10}}/>
          <Button title='get batch data (user1,user2,user3)' style={styles.toolbarButton} onPress={() =>this.getBatchDataStorageFun()}/>
          <View style = {{height:10}}/>
          <Button title='get batch data with ids (user3)' style={styles.toolbarButton} onPress={() =>this.getBatchDataWithIdsStorageFun()}/>
          <View style = {{height:10}}/>
          <Button title='get ids For key (user1)' style={styles.toolbarButton} onPress={() =>this.getIdsForKeyStorageFun()}/>
          <View style = {{height:10}}/>
          <Button title='remove data (user2)' style={styles.toolbarButton} onPress={() =>this.removeStorageFun()}/>
          <View style = {{height:10}}/>
          <Button title='get AllData For Key (user3)' style={styles.toolbarButton} onPress={() =>this.getAllDataForKeyStorageFun()}/>
          <View style = {{height:10}}/>
          <Button title='clear Map' style={styles.toolbarButton} onPress={() =>this.clearMapStorageFun()}/>
          <View style = {{height:10}}/>
          <Button title='clear All' style={styles.toolbarButton} onPress={() =>this.removeAllStorageFun()}/>
          <View style = {{height:10}}/>
          <Button title='clear MapFor Key (user1)' style={styles.toolbarButton} onPress={() =>this.clearMapForKeyStorageFun()}/>
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
      paddingBottom: 10,
      flexDirection: 'column',
    },
    toolbarButton: {
      margin: 20,
      backgroundColor: 'blue',
      color: '#ffffff',
      textAlign: 'center',
    },
    mainContainer: {
      flex: 1,
      padding:10
    },
  });

  export default StorageDemo;