import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native'
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar
} from "react-native";

 export function AsyncStorageBasicTest() {
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
    var key = 'userTwo';
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
    return (
        <TestSuite name="AsyncStorage">
            <TestCase
                itShould="AsyncStorage.save"
                fn={async ({expect}:any)=>{
                    await storage.save({
                        key: 'user', 
                        id: userA.id, 
                        data: userA,
                        expires: 1000 * 3600 * 24
                    }).then(() => {
                        console.log("storage save key user success");
                    });
                    await storage.save({
                        key: 'userTwo', 
                        id: userB.id, 
                        data: userB,
                        expires: 1000 * 3600 * 24
                    }).then(() => {
                        console.log("storage save key userTwo success");
                    });
                    await storage.save({
                        key: 'userThree', 
                        id: userB.id, 
                        data: userB,
                        expires: 1000 * 3600 * 24
                    }).then(() => {
                        console.log("storage save key userThree success");
                    });
                    await storage.load({
                        key: userA.key,
                        id: userA.id,
                        // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
                        autoSync: false,
                        syncInBackground: true,
                    }).then(ret => {
                        expect((ret)).to.be.a('Object');
                    }).catch(err => {
                        console.warn(err.message);
                    })
                }}
            />
            <TestCase
                itShould="AsyncStorage.load"
                fn={async ({expect}:any)=>{
                    await storage.load({
                        key: userA.key,
                        id: userA.id,
                        // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
                        autoSync: false,
                        syncInBackground: true,
                    }).then(ret => {
                        console.info("storage load " + JSON.parse(ret))
                        expect((ret)).to.be.a('Object');
                    }).catch(err => {
                        console.warn(err.message);
                    })
                }}
            />
           
            <TestCase
                itShould="AsyncStorage.getIdsForKey"
                fn={async ({expect}:any)=>{
                    await storage.getIdsForKey(key).then(ids => {
                        userids = ids
                        console.log(ids);
                        expect((ids.length)).to.be.a('number');
                    }).catch(err => {
                        console.log("storage getIdsForKey Error " + err.message);
                    });
                }}
            />
            <TestCase
                itShould="AsyncStorage.getAllDataForKey"
                fn={async ({expect}:any)=>{
                    await storage.getAllDataForKey(key).then(users => {
                        console.log(users);
                        expect((users)).to.be.a('Array');
                    });
              }}
            />
            <TestCase
                itShould="AsyncStorage.getBatchDataWithIds"
                fn={async ({expect}:any)=>{
                    await storage.save({
                        key: 'userFour', 
                        id: userB.id, 
                        data: userB,
                        expires: 1000 * 3600 * 24
                    }).then(() => {
                        console.log("storage save key userFour success");
                    });
                    await storage.getIdsForKey('userFour').then(async (userids) => {
                        console.log("storage getBatchDataWithIds = " + JSON.stringify(userids));
                        //根据key和一个id数组来读取批量数据
                        await storage.getBatchDataWithIds({
                            key: 'userFour',
                            ids: userids
                        }).then(retData => {
                            console.log("storage getBatchDataWithIds = " + JSON.stringify(retData));
                            expect((retData)).to.be.a('Array');
                        }).catch(err => {
                            console.log("storage getBatchDataWithIds Error " + err.message);
                        });
                    }).catch(err => {
                        console.log("storage getIdsForKeyStorageFun Error "+err.message);
                    });
                }}
            />
            <TestCase
                itShould="AsyncStorage.remove"
                fn={async ({expect}:any)=>{
                    await storage.remove({
                            key:userA.key,
                            id:userA.id
                    }).then(() => {}).catch(err => {});
                    storage.getBatchData([
                        { key: 'user'}
                    ]).then(results => {
                        expect((results)).to.be.a('Array');
                    })
                }}
            />
            <TestCase
                itShould="AsyncStorage.clearMapForKey"
                fn={async ({expect}:any)=>{
                    await storage.clearMapForKey(key);
                    await storage.getBatchDataWithIds({
                        key: key,
                        ids: [userB.id]
                    }).then(retData => {
                        expect((retData)).to.be.a('Object');
                    }).catch(err => {
                        console.log("storage clearMapForKey Error "+err.message);
                    });
                }}
            />
           
            <TestCase
                itShould="AsyncStorage.getBatchData"
                fn={async ({expect}:any)=>{
                    storage.getBatchData([
                        { key: 'userFour'}
                    ]).then((result)=> {
                        expect((result)).to.be.a('Array');
                    })
                }}
            />
            <TestCase
                itShould="AsyncStorage.clearMap"
                fn={async ({expect} : any) => {
                    await storage.clearMap();
                    await storage.getBatchDataWithIds({
                        key: 'userThree',
                        ids: [userB.id]
                    }).then(retData => {
                        expect((retData)).to.be.a('Array');
                    }).catch(err => {
                        console.log("storage clearMap Error " + err.message);
                    });
                }}
            />
        </TestSuite>
    )
 }
 
function AppAsyncTest(){
    return(
        <View>
        <StatusBar />
            <SafeAreaView style={{backgroundColor: '#222'}}>
                <Tester >
                  <ScrollView style={{width: '100%'}}>
                    <AsyncStorageBasicTest/>
                  </ScrollView>
                </Tester>
            </SafeAreaView>
        </View>
    )
 }
 
 export default AppAsyncTest;