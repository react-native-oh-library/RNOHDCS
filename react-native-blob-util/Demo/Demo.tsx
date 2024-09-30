import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Button,
  View,
  Text,
  NativeEventEmitter,
} from "react-native";
import ReactNativeBlobUtil from "react-native-blob-util";

export default function BlobUtilDemo() {
  const [result, setResult] = useState < string | null > (null);
  const [mkdirParam, setMkdirParam] = useState("");

  const createFile = async () => {
    await ReactNativeBlobUtil.fs.createFile(
      result + "/text.txt",
      "123456",
      "utf8"
    );
  };

  const ls = async () => {
    await ReactNativeBlobUtil.fs.ls(ReactNativeBlobUtil.fs.dirs.CacheDir);
  };

  const createFileASCII = async () => {
    await ReactNativeBlobUtil.fs.createFile(
      result + "/text.txt",
      [102, 111, 111],
      "ascii"
    );
  };

  const unlink = () => {
    ReactNativeBlobUtil.fs.unlink(result + "/text.txt");
  };

  const getConstants = () => {
    let obj = ReactNativeBlobUtil.fs.dirs.CacheDir;
    setResult(obj);
  };

  const writeFile = () => {
    ReactNativeBlobUtil.fs.writeFile(
      result + "/text.txt",
      "Try to write str",
      "utf8"
    );
  };

  const writeStream = () => {
    ReactNativeBlobUtil.fs.writeStream(result + "/text.txt", "utf8", false);
  };

  const writeArrayChunk = () => {
    ReactNativeBlobUtil.fs
      .writeStream(result + "/text.txt", "ascii", false)
      .then((reactNativeBlobUtilWriteStream) => {
        reactNativeBlobUtilWriteStream.encoding = "ascii";
        reactNativeBlobUtilWriteStream.write(["101", "32", "97"]);
      });
  };

  const writeChunk = () => {
    ReactNativeBlobUtil.fs
      .writeStream(result + "/text.txt", "utf8", false)
      .then((reactNativeBlobUtilWriteStream) => {
        reactNativeBlobUtilWriteStream.write("Zm9vIChXcml0ZSBCYXNlNjQpMQ==");
      });
  };

  const closeStream = () => {
    ReactNativeBlobUtil.fs
      .writeStream(result + "/text.txt", "utf8", false)
      .then((reactNativeBlobUtilWriteStream) => {
        setTimeout(() => {
          reactNativeBlobUtilWriteStream.close();
        }, 1000);
      });
  };
  const readStream = () => {
    ReactNativeBlobUtil.fs.readStream(result + "/text.txt", "utf8", 4000, 200);
  };

  const mkdir = () => {
    ReactNativeBlobUtil.fs.mkdir(
      ReactNativeBlobUtil.fs.dirs.DocumentDir + "/" + mkdirParam
    );
  };

  const stat = () => {
    ReactNativeBlobUtil.fs.stat(result + "/text.txt");
  };

  const copyFileToCache = () => {
    ReactNativeBlobUtil.fs.cp(result + "/text.txt", result + "/text1.txt");
  };

  const writeFileArray = () => {
    ReactNativeBlobUtil.fs.writeFile(
      result + "/text.txt",
      [102, 111, 111],
      "ascii"
    );
  };

  const exists = () => {
    ReactNativeBlobUtil.fs.exists(result + "/text.txt");
  };

  const lstat = () => {
    ReactNativeBlobUtil.fs.lstat(result + "/text.txt");
  };

  const mv = () => {
    ReactNativeBlobUtil.fs.mv(result + "/text.txt", result + "/text1.txt");
  };

  const hash = () => {
    ReactNativeBlobUtil.fs.hash(result + "/text.txt", "md5");
  };

  const readFile = () => {
    ReactNativeBlobUtil.fs.readFile(result + "/text.txt", "utf8", 4000);
  };

  const slice = () => {
    ReactNativeBlobUtil.fs.slice(
      result + "/text.txt",
      result + "/text1.txt",
      2,
      5
    );
  };

  const df = () => {
    ReactNativeBlobUtil.fs.df();
  };

  const addListener = () => {
    let obj = "addListener是空实现";
    setResult(obj);
  };

  const removeListeners = () => {
    let obj = "removeListeners是空实现";
    setResult(obj);
  };

  const emitExpiredEvent = () => {
    let obj = "emitExpiredEvent是空实现,三方库没有调用";
    setResult(obj);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>BlobUtil</Text>
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.baseText}>{result}</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={{ flexDirection: "column" }}>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>BlobUtilTurboModule.getConstants()</Text>
            <Button
              title="运行"
              color="#841584"
              onPress={getConstants}
            ></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>BlobUtilTurboModule.createFile()</Text>
            <Button title="运行" color="#841584" onPress={createFile}></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>BlobUtilTurboModule.unlink()</Text>
            <Button title="运行" color="#841584" onPress={unlink}></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>
              BlobUtilTurboModule.copyFileToCache()
            </Text>
            <Button
              title="运行"
              color="#841584"
              onPress={copyFileToCache}
            ></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>BlobUtilTurboModule.writeFile()</Text>
            <Button title="运行" color="#841584" onPress={writeFile}></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>BlobUtilTurboModule.stat()</Text>
            <Button title="运行" color="#841584" onPress={stat}></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>BlobUtilTurboModule.mkdir()</Text>
            <Button title="运行" color="#841584" onPress={mkdir}></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>BlobUtilTurboModule.writeStream()</Text>
            <Button title="运行" color="#841584" onPress={writeStream}></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>BlobUtilTurboModule.ls()</Text>
            <Button title="运行" color="#841584" onPress={ls}></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>
              BlobUtilTurboModule.createFileASCII()
            </Text>
            <Button
              title="运行"
              color="#841584"
              onPress={createFileASCII}
            ></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>
              BlobUtilTurboModule.writeFileArray()
            </Text>
            <Button
              title="运行"
              color="#841584"
              onPress={writeFileArray}
            ></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>BlobUtilTurboModule.exists()</Text>
            <Button title="运行" color="#841584" onPress={exists}></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>BlobUtilTurboModule.lstat()</Text>
            <Button title="运行" color="#841584" onPress={lstat}></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>BlobUtilTurboModule.hash()</Text>
            <Button title="运行" color="#841584" onPress={hash}></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>BlobUtilTurboModule.readFile()</Text>
            <Button title="运行" color="#841584" onPress={readFile}></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>BlobUtilTurboModule.slice()</Text>
            <Button title="运行" color="#841584" onPress={slice}></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>BlobUtilTurboModule.df()</Text>
            <Button title="运行" color="#841584" onPress={df}></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>BlobUtilTurboModule.closeStream()</Text>
            <Button title="运行" color="#841584" onPress={closeStream}></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>
              BlobUtilTurboModule.writeArrayChunk()
            </Text>
            <Button
              title="运行"
              color="#841584"
              onPress={writeArrayChunk}
            ></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>BlobUtilTurboModule.writeChunk()</Text>
            <Button title="运行" color="#841584" onPress={writeChunk}></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>BlobUtilTurboModule.readStream()</Text>
            <Button title="运行" color="#841584" onPress={readStream}></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>BlobUtilTurboModule.mv()</Text>
            <Button title="运行" color="#841584" onPress={mv}></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>addListener()</Text>
            <Button title="运行" color="#841584" onPress={addListener}></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>removeListeners()</Text>
            <Button
              title="运行"
              color="#841584"
              onPress={removeListeners}
            ></Button>
          </View>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>emitExpiredEvent()</Text>
            <Button
              title="运行"
              color="#841584"
              onPress={emitExpiredEvent}
            ></Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F1F3F5",
  },
  baseText: {
    width: "100%",
    height: "100%",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    ellipsizeMode: "tail",
    numberOfLines: 2,
  },
  titleArea: {
    width: "90%",
    height: "8%",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    width: "90%",
    color: "#000000",
    textAlign: "left",
    fontSize: 30,
  },
  scrollView: {
    width: "90%",
    marginHorizontal: 10,
  },

  inputArea: {
    width: "90%",
    height: "10%",
    borderWidth: 2,
    borderColor: "#000000",
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  baseArea: {
    width: "100%",
    height: 60,
    borderRadius: 4,
    borderColor: "#000000",
    marginTop: 6,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8,
    paddingRight: 8,
  },
});