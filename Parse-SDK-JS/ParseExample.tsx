import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native";

Parse.setAsyncStorage(AsyncStorage);
// 初始化Parse，确保appId、javaScriptKey、masterKey与parse server配置一致
Parse.initialize(
  'myParseApp2024',
  'JSKey@Parse#2024!Secure',
  'P@rseM@sterKey#2024',
);
// parse server服务地址
Parse.serverURL = 'http://localhost:1337/parse';
Parse.CoreManager.set('REQUEST_HEADERS', {
  'X-Parse-REST-API-Key': 'MYRESTAPIKEY',
});

const ParseExample = () => {
  const [data, setData] = useState<any>([]);

  // 添加数据 Example of saving data
  async function saveData() {
    const TestObject = Parse.Object.extend("TestObject");
    const testObject = new TestObject();
    testObject.set("name", "张三");
    testObject.set("description", "我是rn使用parse-sdk-js库创建的张三!");

    try {
      const result = await testObject.save();
      if (result) {
        Alert.alert("添加成功");
      } else {
        Alert.alert("添加失败");
      }
      console.log("Object saved successfully:", result);
    } catch (error) {
      console.error("Error while saving object:", error);
    }
  }
  // 删除数据
  async function deleteData() {
    const TestObject = Parse.Object.extend("TestObject");
    const query = new Parse.Query(TestObject);
    query.equalTo("name", "李四");
    try {
      const results = await query.first();
      if (results) {
        Parse.Object.destroyAll(results).then((res) => {
          Alert.alert("删除成功");
        });
      } else {
        Alert.alert("未找到 李四");
      }
    } catch (error) {
      console.error("Error while fetching objects:", error);
    }
  }
  // 修改数据
  async function updateData() {
    const TestObject = Parse.Object.extend("TestObject");
    const query = new Parse.Query(TestObject);
    try {
      query.equalTo("name", "张三");
      const results = await query.first();
      if (results) {
        console.log(results, 666);
        results.set("name", "李四");
        results.set("description", "我的名字改成了李四");
        results.save().then((update) => {
          Alert.alert("修改成功");
        });
      } else {
        Alert.alert("修改失败");
      }
    } catch (error) {
      console.error("Error while fetching objects:", error);
    }
  }
  // 查询数据 Example of fetching data
  async function fetchData() {
    const TestObject = Parse.Object.extend("TestObject");
    const query = new Parse.Query(TestObject);

    try {
      const results = await query.find();
      const resultJson = results.map((item) => item.toJSON());
      console.log("查询成功:", resultJson);
      setData(resultJson);
    } catch (error) {
      console.error("Error while fetching objects:", error);
    }
  }

  return (
    <View style={style.mainBox}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        模拟数据进行增、删、改、查
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        TestObject 类（表）
      </Text>
      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <Button title="增加一条张三数据" onPress={saveData} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button title="删除一条姓名为李四数据" onPress={deleteData} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button title="修改,将一条张三数据改为李四" onPress={updateData} />
      </View>
      <Button title="查询所有数据" onPress={fetchData} />
      <View style={style.showBox}>
        {data?.map((item) => {
          return (
            <View style={{ marginTop: 10 }} key={item.objectId}>
              <Text>姓名：{item?.name}</Text>
              <Text>描述：{item?.description}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainBox: {
    borderWidth: 1,
    borderColor: "#ebebeb",
    padding: 10,
    marginTop: 10,
  },
  showBox: {
    backgroundColor: "#f5f5f5",
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ebebeb",
  },
});

export default ParseExample;
