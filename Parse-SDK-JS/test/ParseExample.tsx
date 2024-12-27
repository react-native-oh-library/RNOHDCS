import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
  'myParseApp2024',
  'JSKey@Parse#2024!Secure',
  'P@rseM@sterKey#2024',
);
Parse.serverURL = 'http://localhost:1337/parse';
Parse.CoreManager.set('REQUEST_HEADERS', {
  'X-Parse-REST-API-Key': 'MYRESTAPIKEY',
});

const ParseExample = () => {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState<any>([]);
  const [dataTwo, setDataTwo] = useState<any>([]);
  const [batchData, setBatchData] = useState<any>([]);
  const [jointData, setJointData] = useState<any>([]);
  const [roleData, setRoleData] = useState<any>([]);
  const [InputData, setInputData] = useState<any>({});
  const [userInfo, setUserInfo] = useState<any>({});

  // 检测链接
  async function checkParseServerStatus() {
    try {
      // 尝试使用 Parse SDK 的功能（例如查询对象）来检查服务器状态
      const query = new Parse.Query('TestObject'); // 替换成你的 Parse 类名
      await query.first(); // 尝试查询第一个对象
      return true; // 如果成功，表示服务器是可达的
    } catch (error) {
      return false; // 如果出现错误，表示服务器不可达
    }
  }

  // 添加数据 Example of saving data
  async function saveData() {
    const TestObject = Parse.Object.extend('TestObject');
    const testObject = new TestObject();
    testObject.set('name', '张三');
    testObject.set('description', '我是rn使用parse-sdk-js库创建的张三!');

    try {
      const result = await testObject.save();
      if (result) {
        Alert.alert('添加成功');
      } else {
        Alert.alert('添加失败');
      }
      console.log('Object saved successfully:', result);
    } catch (error) {
      console.error('Error while saving object:', error);
    }
  }
  // 删除数据
  async function deleteData() {
    const TestObject = Parse.Object.extend('TestObject');
    const query = new Parse.Query(TestObject);
    query.equalTo('name', '李四');
    try {
      const results = await query.first();
      if (results) {
        Parse.Object.destroyAll(results).then(res => {
          Alert.alert('删除成功');
        });
      } else {
        Alert.alert('未找到 李四');
      }
    } catch (error) {
      console.error('Error while fetching objects:', error);
    }
  }
  // 修改数据
  async function updateData() {
    const TestObject = Parse.Object.extend('TestObject');
    const query = new Parse.Query(TestObject);
    try {
      query.equalTo('name', '张三');
      const results = await query.first();
      if (results) {
        console.log(results, 666);
        results.set('name', '李四');
        results.set('description', '我的名字改成了李四');
        results.save().then(update => {
          Alert.alert('修改成功');
        });
      } else {
        Alert.alert('修改失败');
      }
    } catch (error) {
      console.error('Error while fetching objects:', error);
    }
  }
  // 查询数据 Example of fetching data
  async function fetchData() {
    const TestObject = Parse.Object.extend('TestObject');
    const query = new Parse.Query(TestObject);

    try {
      const results = await query.find();
      const resultJson = results.map(item => item.toJSON());
      console.log('查询成功:', resultJson);
      setData(resultJson);
    } catch (error) {
      console.error('Error while fetching objects:', error);
    }
  }

  // 注册用户
  async function signUpUser(username: string, password: string, email: string) {
    const user = new Parse.User();
    user.set('username', username);
    user.set('password', password);
    user.set('email', email);

    try {
      await user.signUp();
      setInputData({});
      Alert.alert('注册成功');
      console.log('User signed up:', user);
      return user;
    } catch (error) {
      console.error('Error signing up user:', error);
      throw error;
    }
  }
  // 登录
  async function logInUser(username: string, password: string) {
    try {
      const user = await Parse.User.logIn(username, password);
      Alert.alert('登录成功');
      setInputData({});
      console.log('User logged in:', user);
      return user.toJSON();
    } catch (error) {
      console.error('Error logging in user:', error);
      Alert.alert('登录失败');
      return {};
    }
  }
  // 注销
  async function logOutUser() {
    try {
      await Parse.User.logOut();
      Alert.alert('注销成功');
      setUserInfo({});
      console.log('User logged out');
    } catch (error) {
      console.error('Error logging out user:', error);
      Alert.alert('注销失败');
    }
  }
  // 查询当前用户信息 设置读写权限
  function getCurrentUser() {
    const currentUser = Parse.User.current();
    if (currentUser) {
      // setUserInfo(currentUser.toJSON());
      let currentUserJson = currentUser.toJSON();
      const acl = new Parse.ACL();
      acl.setReadAccess(currentUser.id, true);
      acl.setWriteAccess(currentUser.id, true);
      let aclStr = acl.getReadAccess(currentUser.id) ? '读' : '';
      aclStr += acl.getWriteAccess(currentUser.id) ? '写' : '';
      setUserInfo({
        ...currentUserJson,
        acl: aclStr,
      });
      console.log('Current user:', currentUser);
      return currentUser;
    } else {
      Alert.alert('No user logged in');
      return null;
    }
  }

  // 删除用户
  const destroyUser = () => {
    const currentUser = Parse.User.current();
    if (currentUser) {
      currentUser
        .destroy()
        .then(deletedUser => {
          console.log('User deleted successfully:', deletedUser);
          // 用户已被删除，可能需要注销并清理本地存储
          Alert.alert('删除用户成功');
        })
        .catch(error => {
          console.error('Error deleting user:', error);
        });
    } else {
      console.log('No user is currently logged in');
    }
  };

  // 批量创建数据
  async function batchCreateObjects() {
    const ObjectClass = Parse.Object.extend('BatchObject');
    const objectsToSave = [];

    const object1 = new ObjectClass();
    object1.set('name', `王五`);
    object1.set('age', `20`);
    objectsToSave.push(object1);
    const object2 = new ObjectClass();
    object2.set('name', `赵六`);
    object2.set('age', `20`);
    objectsToSave.push(object2);

    try {
      const savedObjects = await Parse.Object.saveAll(objectsToSave);
      Alert.alert('批量新增成功');
      console.log('Batch creation successful:', savedObjects);
    } catch (error) {
      Alert.alert('批量新增失败');
      console.error('Error while saving objects:', error);
    }
  }
  // 批量修改数据
  async function batchUpdateObjects() {
    const query = new Parse.Query('BatchObject');
    // query.limit(5); // 限制为只更新前5个对象
    try {
      const objectsToUpdate = await query.find();
      objectsToUpdate.forEach(obj => {
        obj.set('age', '18');
      });
      const updatedObjects = await Parse.Object.saveAll(objectsToUpdate);
      Alert.alert('批量修改成功');
      console.log('Batch update successful:', updatedObjects);
    } catch (error) {
      Alert.alert('批量修改失败');
      console.error('Error while updating objects:', error);
    }
  }
  // 批量删除
  async function batchDeleteObjects() {
    const query = new Parse.Query('BatchObject');
    query.limit(1000); // 设置查询的对象数量限制，例如每次最多处理1000个对象

    try {
      const objectsToDelete = await query.find();
      await Parse.Object.destroyAll(objectsToDelete);
      Alert.alert('批量删除成功');
      console.log('Batch deletion successful');
    } catch (error) {
      console.error('Error while deleting objects:', error);
    }
  }
  // 查询数据 Example of fetching data
  async function fetchBatchData() {
    const TestObject = Parse.Object.extend('BatchObject');
    const query = new Parse.Query(TestObject);

    try {
      const results = await query.find();
      const resultJson = results.map(item => item.toJSON());
      console.log('查询成功:', resultJson);
      setBatchData(resultJson);
    } catch (error) {
      console.error('Error while fetching objects:', error);
    }
  }
  // 模拟服务端函数
  async function cloudErr() {
    const query = new Parse.Query('BatchObject');
    // query.limit(5); // 限制为只更新前5个对象
    try {
      const objectsToUpdate = await query.find();
      objectsToUpdate.forEach(obj => {
        obj.set('age', '30');
      });
      const updatedObjects = await Parse.Object.saveAll(objectsToUpdate);
      console.log(`Saved object beforeSave with ID: ${updatedObjects}`);
      Alert.alert('批量修改成功');
      console.log(`Saved object afterSave with ID: ${updatedObjects}`);
    } catch (error) {
      Alert.alert('批量修改失败');
      console.error('Error while updating objects:', error);
    }
  }
  async function cloudDeleteErr() {
    const query = new Parse.Query('BatchObject');
    query.limit(1000);
    try {
      const objectsToDelete = await query.find();
      console.log(`Deleted object beforeDelete`);
      await Parse.Object.destroyAll(objectsToDelete);
      Alert.alert('删除成功');
      console.log(`Deleted object afterDelete`);
    } catch (error) {
      console.log(`Deleted object beforeDelete`);
      console.log(`Deleted object afterDelete`);
    }
  }

  // 创建角色
  async function createRole(roleName: string) {
    const roleACL = new Parse.ACL(); // 创建一个空的 ACL
    roleACL.setPublicReadAccess(true); // 设置公开读取权限
    roleACL.setPublicWriteAccess(true); // 设置公开读取权限

    const role = new Parse.Role(roleName, roleACL); // 创建角色对象
    try {
      const savedRole = await role.save();
      console.log('Role created:', savedRole);
      return savedRole;
    } catch (error) {
      console.error('Error creating role:', error);
      throw error;
    }
  }

  // 联表、外键
  // 设置外键关系
  const jointTable = (postId: any) => {
    const Post = Parse.Object.extend('Post');
    const Comment = Parse.Object.extend('Comment');
    // 创建 Comment 对象并指定 post 字段
    const comment = new Comment();
    const postPointer = Post.createWithoutData('Post', postId);
    comment.set('postId', postPointer);
  };
  // 根据postId联表查询
  async function fetchCommentsForPost(postId: any) {
    await jointTable(postId);
    const Comment = Parse.Object.extend('Comment');
    const commentQuery = new Parse.Query(Comment);
    // 使用 'postId' 字段来匹配评论中引用的 Post 的 objectId
    commentQuery.equalTo('postId', postId);

    try {
      const comments = await commentQuery.find();
      const resultJson = comments.map(item => item.toJSON());
      return resultJson;
    } catch (error) {
      console.error('Error fetching comments:', error);
      throw error;
    }
  }
  // 新增联表数据
  async function addJoinPostData() {
    const ObjectClass = Parse.Object.extend('Post');
    const objectsToSave = [];

    const object1 = new ObjectClass();
    object1.set('postId', `1`);
    object1.set('postName', `测试11`);
    
    objectsToSave.push(object1);
    const object2 = new ObjectClass();
    object2.set('postId', `2`);
    object2.set('postName', `测试22`);
    objectsToSave.push(object2);

    try {
      const savedObjects = await Parse.Object.saveAll(objectsToSave);
      console.log('Batch creation successful:', savedObjects);
    } catch (error) {
      console.error('Error while saving objects:', error);
    }
  }
  async function addJoinCommentData() {
    const ObjectClass = Parse.Object.extend('Comment');
    const objectsToSave = [];

    const object1 = new ObjectClass();
    object1.set('postId', `1`);
    object1.set('CommentObjName1', `描述111`);
    object1.set('CommentObjName2', `20`);
    objectsToSave.push(object1);
    const object2 = new ObjectClass();
    object2.set('postId', `2`);
    object2.set('CommentObjName1', `描述111`);
    object2.set('CommentObjName2', `2011`);
    objectsToSave.push(object2);
    const object3 = new ObjectClass();
    object3.set('postId', `1`);
    object3.set('CommentObjName1', `描述222`);
    object3.set('CommentObjName2', `20222`);
    objectsToSave.push(object3);

    try {
      const savedObjects = await Parse.Object.saveAll(objectsToSave);
      Alert.alert('新增成功');
      console.log('Batch creation successful:', savedObjects);
    } catch (error) {
      Alert.alert('新增失败');
      console.error('Error while saving objects:', error);
    }
  }

  // 创建云函数
  // 仅适用于 Parse 平台的云代码环境
  // Parse.Cloud.define('cloudBatchUpdateObjects', async request => {
  //   return '我是云函数cloudBatchUpdateObjects'
  // });
  // 调用云函数
  async function runCloudToBatchUpdateObjects() {
    try {
      // beforeSave：验证数据或修改数据
      Parse.Cloud.beforeSave('cloudBatchUpdateObjects', request => {
        const object = request.object;
        console.log(`Saved object beforeSave with ID: ${object.id}`);
      });

      // afterSave：保存后执行一些操作
      Parse.Cloud.afterSave('cloudBatchUpdateObjects', request => {
        const object = request.object;
        console.log(`Saved object afterSave with ID: ${object.id}`);
      });

      // 调用云函数
      const result = await Parse.Cloud.run('cloudBatchUpdateObjects');
    } catch (error) {
      cloudErr();
    }
  }

  async function runCloudToBatchDeleteObjects() {
    try {
      // beforeDelete：删除前检查
      Parse.Cloud.beforeDelete('cloudBatchDeleteObjects', request => {
        const object = request.object;
        console.log(`Deleted object beforeDelete`);
      });

      // afterDelete：删除后清理
      Parse.Cloud.afterDelete('cloudBatchDeleteObjects', request => {
        const object = request.object;
        console.log(`Deleted object afterDelete`);
      });

      // 调用云函数
      const result = await Parse.Cloud.run('cloudBatchDeleteObjects');
    } catch (error) {
      cloudDeleteErr();
    }
  }

  const getRolesByName = async (roleName: string) => {
    const roleQuery = new Parse.Query(Parse.Role);
    roleQuery.equalTo('name', roleName); // 根据角色名进行查询
    const role = await roleQuery.first(); // 获取第一个匹配的角色对象

    if (role) {
      console.log(`Found Role: ${role.get('name')}`);
      return role;
    } else {
      console.log(`Role with name ${roleName} not found.`);
      return null;
    }
  };

  return (
    <Tester style={{flex: 1}}>
      <View style={style.box}>
        <TestSuite name={`Parse-SDK-js`}>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <TestCase itShould="Parse Server 连接状态">
              <View style={{padding: 10}}>
                <Text style={{color: status ? 'green' : 'red'}}>
                  {status ? '已连接' : '未连接'}
                </Text>
                <View style={{marginBottom: 10}}>
                  <Button
                    title="刷新连接状态"
                    onPress={async () => {
                      const flag = await checkParseServerStatus();
                      setStatus(flag);
                    }}
                  />
                </View>
              </View>
            </TestCase>
            <TestCase itShould="数据管理 Parse.Object">
              <View style={style.mainBox}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  模拟数据进行增、删、改、查
                </Text>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  TestObject 类（表）
                </Text>
                <View style={{marginTop: 10, marginBottom: 10}}>
                  <Button title="增加一条张三数据" onPress={saveData} />
                </View>
                <View style={{marginBottom: 10}}>
                  <Button title="删除一条姓名为李四数据" onPress={deleteData} />
                </View>
                <View style={{marginBottom: 10}}>
                  <Button
                    title="修改,将一条张三数据改为李四"
                    onPress={updateData}
                  />
                </View>
                <Button title="查询所有数据" onPress={fetchData} />
                <View style={style.showBox}>
                  {data?.map((item: any) => {
                    return (
                      <View style={{marginTop: 10}} key={item.objectId}>
                        <Text>姓名：{item?.name}</Text>
                        <Text>描述：{item?.description}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            </TestCase>

            <TestCase itShould="数据管理二 Parse.Object">
              <View style={style.mainBox}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  unset increment remove fetchWithinclude get方法
                </Text>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  TestObject 类（表）
                </Text>
                <View style={{marginTop: 10, marginBottom: 10}}>
                  <Button
                    title="删除destroy测试"
                    onPress={async () => {
                      const TestObject = Parse.Object.extend('TestObjectTwo');
                      const testObject = new TestObject();
                      testObject.set('name', '李四');
                      testObject
                        .destroy()
                        .then((deletedObject: any) => {
                          Alert.alert('删除成功');
                        })
                        .catch((error: any) => {
                          console.error('Error deleting object:', error);
                        });
                    }}
                  />
                  <View style={{height: 10}} />
                  <Button
                    title="增加数据"
                    onPress={async () => {
                      const TestObject = Parse.Object.extend('TestObjectTwo');
                      const testObject = new TestObject();
                      testObject.set('name', '张三');
                      testObject.set('age', '18');
                      testObject.set('num', 10);
                      testObject.set('tags', ['tag1', 'tag2', 'tag3']);
                      // 移除 'age' 属性
                      testObject.unset('age');
                      testObject.increment('num', 5); // score 变为 15
                      // 从 'tags' 数组中移除 'tag2'
                      testObject.remove('tags', 'tag2');

                      testObject.fetchWithInclude('num');

                      testObject.fetch();

                      // 获取 'name' 属性的值
                      const name = testObject.get('name');
                      console.log('Object.get', name);

                      try {
                        const result = await testObject.save();
                        if (result) {
                          Alert.alert('添加成功');
                        } else {
                          Alert.alert('添加失败');
                        }
                        console.log('Object saved successfully:', result);
                      } catch (error) {
                        console.error('Error while saving object:', error);
                      }
                    }}
                  />
                </View>
                <Button
                  title="查询所有数据"
                  onPress={async () => {
                    const TestObject = Parse.Object.extend('TestObjectTwo');
                    const query = new Parse.Query(TestObject);

                    try {
                      const results = await query.find();
                      const resultJson = results.map(item => item.toJSON());
                      setDataTwo(resultJson);
                    } catch (error) {
                      console.error('Error while fetching objects:', error);
                    }
                  }}
                />
                <View style={style.showBox}>
                  {dataTwo?.map((item: any) => {
                    return (
                      <View style={{marginTop: 10}} key={item.objectId}>
                        <Text>姓名：{item?.name}</Text>
                        {item?.age ? <Text>年龄：{item?.age}</Text> : null}
                        <Text>num：{item?.num}</Text>
                        <Text>tags: {JSON.stringify(item?.tags)}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            </TestCase>

            <TestCase itShould="用户管理 Parse.User">
              <View style={style.mainBox}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  模拟用户注册、登录、注销、查看用户信息
                </Text>
                <View>
                  <View style={style.inputBox}>
                    <Text>用户名:</Text>
                    <TextInput
                      style={{
                        width: 180,
                        height: 30,
                        backgroundColor: '#ebebeb',
                      }}
                      value={InputData.name}
                      onChangeText={(str: string) => {
                        setInputData({...InputData, name: str});
                      }}
                    />
                  </View>
                  <View style={style.inputBox}>
                    <Text>密码:</Text>
                    <TextInput
                      style={{
                        width: 180,
                        height: 30,
                        backgroundColor: '#ebebeb',
                      }}
                      value={InputData.password}
                      onChangeText={(str: string) => {
                        setInputData({...InputData, password: str});
                      }}
                    />
                  </View>
                  <View style={style.inputBox}>
                    <Text>邮箱:</Text>
                    <TextInput
                      style={{
                        width: 180,
                        height: 30,
                        backgroundColor: '#ebebeb',
                      }}
                      value={InputData.email}
                      onChangeText={(str: string) => {
                        setInputData({...InputData, email: str});
                      }}
                    />
                  </View>
                </View>
                <Button
                  title="注册用户"
                  color={'#007AFF'}
                  onPress={() => {
                    signUpUser(
                      InputData.name,
                      InputData.password,
                      InputData.email,
                    );
                  }}
                />
                <View
                  style={{margin: 20, height: 2, backgroundColor: 'green'}}
                />
                <View>
                  <View style={style.inputBox}>
                    <Text>用户名:</Text>
                    <TextInput
                      style={{
                        width: 180,
                        height: 30,
                        backgroundColor: '#ebebeb',
                      }}
                      value={InputData.loginName}
                      onChangeText={(str: string) => {
                        setInputData({...InputData, loginName: str});
                      }}
                    />
                  </View>
                  <View style={style.inputBox}>
                    <Text>密码:</Text>
                    <TextInput
                      style={{
                        width: 180,
                        height: 30,
                        backgroundColor: '#ebebeb',
                      }}
                      value={InputData.loginPassword}
                      onChangeText={(str: string) => {
                        setInputData({...InputData, loginPassword: str});
                      }}
                    />
                  </View>
                </View>
                <Button
                  title="登录用户"
                  onPress={async () => {
                    const user = await logInUser(
                      InputData.loginName,
                      InputData.loginPassword,
                    );
                    // setUserInfo(user)
                  }}
                />
                <View
                  style={{margin: 20, height: 2, backgroundColor: 'green'}}
                />
                <Button
                  title="注销"
                  onPress={async () => {
                    logOutUser();
                  }}
                />
                <View
                  style={{margin: 20, height: 2, backgroundColor: 'green'}}
                />
                <Button
                  title="查询当前用户信息"
                  onPress={async () => {
                    getCurrentUser();
                  }}
                />
                <View style={style.showBox}>
                  <Text>当前用户信息</Text>
                  <Text>username: {userInfo?.username}</Text>
                  <Text>email: {userInfo?.email}</Text>
                  <Text>sessionToken: {userInfo?.sessionToken}</Text>
                  <Text>ACL: {userInfo?.acl}</Text>
                </View>
                <Button
                  title="删除用户"
                  onPress={async () => {
                    destroyUser();
                  }}
                />
                <View style={{height: 10}} />
                <Button
                  title="become认证用户"
                  onPress={async () => {
                    Parse.User.become(userInfo.sessionToken).then(res => {
                      Alert.alert('认证成功！');
                    });
                  }}
                />
              </View>
            </TestCase>
            <TestCase itShould="批量操作 saveAll, destroyAll">
              <View style={style.mainBox}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  BatchObject 类（表）
                </Text>
                <Text>1. 批量新增数据</Text>
                <Button
                  title="批量新增 王五、赵六 两条数据"
                  color={'#007AFF'}
                  onPress={() => {
                    batchCreateObjects();
                  }}
                />
                <View
                  style={{margin: 20, height: 2, backgroundColor: 'green'}}
                />
                <Text>2. 批量修改数据</Text>
                <Button
                  title="批量修改, age都改为18"
                  color={'#007AFF'}
                  onPress={() => {
                    batchUpdateObjects();
                  }}
                />
                <View
                  style={{margin: 20, height: 2, backgroundColor: 'green'}}
                />
                <Text>3. 批量删除数据</Text>
                <Button
                  title="删除 BatchObject 表中所有数据"
                  color={'#007AFF'}
                  onPress={() => {
                    batchDeleteObjects();
                  }}
                />
                <View
                  style={{margin: 20, height: 2, backgroundColor: 'green'}}
                />
                <Button
                  title="查询 BatchObject 表中所有数据"
                  color={'#007AFF'}
                  onPress={() => {
                    fetchBatchData();
                  }}
                />
                <View style={style.showBox}>
                  {batchData?.map((item: any) => {
                    return (
                      <View style={{marginTop: 10}} key={item.objectId}>
                        <Text>姓名：{item?.name}</Text>
                        <Text>年龄：{item?.age}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            </TestCase>
            <TestCase itShould="访问控制列表Parse.ACL 和 角色管理Parse.Role">
              <View style={style.mainBox}>
                <View style={style.inputBox}>
                  <Text>角色名:</Text>
                  <TextInput
                    style={{width: 180, height: 30, backgroundColor: '#ebebeb'}}
                    value={InputData.roleName}
                    onChangeText={(str: string) => {
                      setInputData({...InputData, roleName: str});
                    }}
                  />
                </View>
                <Button
                  title="创建角色, 设置ACL读写权限"
                  color={'#007AFF'}
                  onPress={() => {
                    // 创建角色示例
                    createRole(InputData.roleName)
                      .then(res => {
                        let str = '';
                        const acl: any = res.getACL();
                        str += acl.getPublicReadAccess() ? '读' : '';
                        str += acl.getPublicWriteAccess() ? '写' : '';
                        setRoleData({...res.toJSON(), ACL: str});
                        setInputData({});
                        Alert.alert('角色创建成功');
                      })
                      .catch(error => {});
                  }}
                />
                <View style={{height: 10}} />
                <Button
                  title="getName, getUsers, getRoles"
                  color={'#007AFF'}
                  onPress={async () => {
                    const role = await new Parse.Query(Parse.Role)
                      .equalTo('name', roleData.name)
                      .first();
                    if (role) {
                      const getNameStr = role.getName();
                      const getUserStr = role.getUsers().toJSON();
                      const getRolesStr = role.getRoles().toJSON();
                      console.log(getNameStr, getUserStr, getRolesStr, 655);
                      setRoleData({
                        ...roleData,
                        getName: getNameStr,
                        getUsers: JSON.stringify(getUserStr),
                        getRoles: JSON.stringify(getRolesStr),
                      });
                    }
                  }}
                />
                <View style={{height: 10}} />
                <Button
                  title="getRolesByName"
                  color={'#007AFF'}
                  onPress={async () => {
                    const role = await new Parse.Query(Parse.Role)
                      .equalTo('name', roleData.name)
                      .first();
                    if (role) {
                      getRolesByName(roleData.name).then(res => {
                        console.log(res, 64445);
                        setRoleData({...roleData, getRolesByName: res?.id});
                      });
                    }
                  }}
                />

                <View>
                  <View style={style.showBox}>
                    <View style={{marginTop: 10}} key={roleData.objectId}>
                      <Text>name：{roleData?.name}</Text>
                      <Text>ACL: {roleData?.ACL}</Text>
                      <Text>创建时间：{roleData?.createdAt}</Text>
                      <Text>getName:{roleData?.getName}</Text>
                      <Text>getUsers:{roleData?.getUsers}</Text>
                      <Text>getRoles:{roleData?.getRoles}</Text>
                      <Text>getRolesByName:{roleData?.getRolesByName}</Text>
                    </View>
                  </View>
                </View>
                <Button
                  title="role.destroy"
                  color={'#007AFF'}
                  onPress={async () => {
                    const role = await new Parse.Query(Parse.Role)
                      .equalTo('name', roleData.name)
                      .first()
                    if (role) {
                      role.destroy().then(() => {
                        Alert.alert("删除成功")
                      })
                    }
                  }}
                />
              </View>
            </TestCase>
            <TestCase itShould="联表、外键 createWithoutData">
              <View style={style.mainBox}>
                <Text>主表Post，主键postId, 外键表Comments</Text>
                <Button
                  title="新增联表数据"
                  color={'#007AFF'}
                  onPress={async () => {
                    addJoinPostData();
                    addJoinCommentData();
                  }}
                />
                <View style={{height: 10}} />
                <Button
                  title="联表查询"
                  color={'#007AFF'}
                  onPress={() => {
                    // 示例用法
                    fetchCommentsForPost('1')
                      .then(comments => {
                        setJointData(comments);
                        console.log('Comments for post:', comments);
                      })
                      .catch(error => {
                        console.error('Failed to fetch comments:', error);
                      });
                  }}
                />
                <View style={style.showBox}>
                  {jointData?.map((item: any) => {
                    return (
                      <View style={{marginTop: 10}} key={item.objectId}>
                        <Text>postId：{item?.postId}</Text>
                        <Text>CommentObjName1：{item?.CommentObjName1}</Text>
                        <Text>CommentObjName2：{item?.CommentObjName2}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            </TestCase>
            <TestCase itShould="云函数 Parse.Cloud">
              <View style={style.mainBox}>
                <Text>批量修改 BatchObject 数据 age: 30</Text>
                <View style={{margin: 10}}>
                  <Button
                    title="调用云函数批量修改"
                    color={'#007AFF'}
                    onPress={() => {
                      runCloudToBatchUpdateObjects();
                    }}
                  />
                </View>
                <View style={{margin: 10}}>
                  <Button
                    title="云函数删除触发"
                    color={'#007AFF'}
                    onPress={() => {
                      runCloudToBatchDeleteObjects();
                    }}
                  />
                </View>
                <Button
                  title="查询 BatchObject 表中所有数据"
                  color={'#007AFF'}
                  onPress={() => {
                    fetchBatchData();
                  }}
                />
                <View style={style.showBox}>
                  {batchData?.map((item: any) => {
                    return (
                      <View style={{marginTop: 10}} key={item.objectId}>
                        <Text>姓名：{item?.name}</Text>
                        <Text>年龄：{item?.age}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            </TestCase>
            <View style={{height: 300}} />
          </ScrollView>
        </TestSuite>
      </View>
    </Tester>
  );
};

const style = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
  },
  mainBox: {
    borderWidth: 1,
    borderColor: '#ebebeb',
    padding: 10,
    marginTop: 10,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  showBox: {
    backgroundColor: '#f5f5f5',
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ebebeb',
  },
});

export default ParseExample;
