import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from "react-native";
import FS from "react-native-fs";
import { Colors } from "react-native/Libraries/NewAppScreen";
function App(): React.JSX.Element {
  // 参数
  const [mkdirParam, setMkdirParam] = useState("");
  // 创建文件夹接口调用
  const mkdirExample = () => {
    FS.mkdir(FS.DocumentDirectoryPath + "/" + mkdirParam).then(
      (result) => {
        console.log("file mkdirParam： " + mkdirParam);
        console.log("file Successfully created directory.");
      },
      (err) => {
        console.error("file mkdir: " + err.message);
      }
    );
  };
  // 组件
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Text style={styles.sectionTitle}>
            {"React Native File Harmony Demo App"}
          </Text>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{"mkdir"}</Text>
              <View style={styles.sectionDescription}>
                <TextInput
                  style={styles.input}
                  placeholder="Folder Path"
                  onChangeText={(mkdirParam) => setMkdirParam(mkdirParam)}
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                />
              </View>
              <Button
                title="Create Directory"
                color="#9a73ef"
                onPress={mkdirExample}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
// 组件样式
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.black,
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  body: {
    backgroundColor: Colors.dark,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.white,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark,
  },
  input: {
    marginTop: 12,
  },
});

export default App;