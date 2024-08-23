import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Dirs, FileSystem } from 'react-native-file-access';

export function FileAccessDemo() {
  const [info, setInfo] = useState<{ key: string; value: string }[]>([]);
  const [fileContent, setFileContent] = useState('');
  const [mkdirParam, setMkdirParam] = useState('');
  const [statInfo, setStatInfo] = useState<any>([]);
  const [isExists, setExists] = useState<boolean | string>('');
  const [lsList, setLsList] = useState<any>([]);
  const [totalSize, setTotalSize] = useState<number>();
  const [freeSize, setFreeSize] = useState<number>();
  const [hashValue, setHashValue] = useState<string>();
  const [statDirInfo, setStatDirInfo] = useState<object[]>([]);
  const [readFileChunkInfo, setReadFileChunkInfo] = useState<string>();
  const [concatBeyts, setConcatBeyts] = useState<number>();
  const [dirOrNot, setDirOrNot] = useState<any>('');

  // 将内容写入文件
  const wirteFile = () => {
    FileSystem.writeFile(Dirs.DocumentDir + '/0801' + '/text1.txt', "DDDD", "utf8")
  };

  // 读取文件的内容
  const readFile = () => {
    FileSystem.readFile(Dirs.DocumentDir + "/0801.txt").then((res) => {
      setFileContent(res);
    })
  };

  // 删除文件
  const unlink = () => {
    FileSystem.unlink(Dirs.DocumentDir + '/0812.txt');
  };

  // 创建一个新目录，返回创建目录的路径
  const mkdir = () => {
    FileSystem.mkdir(Dirs.DocumentDir + "/wxwx").then((res) => {
      setMkdirParam(res);
    }).catch((error) => {
      console.log(error, 'error')
    });
  };

  // 移动文件
  const mv = () => {
    FileSystem.mv(Dirs.DocumentDir + "/text.txt", Dirs.DocumentDir + "/text1.txt");
  };

  // 解压一个 zip 档案
  const unzip = () => {
    FileSystem.unzip(Dirs.DocumentDir + "/wxwx.zip", Dirs.DocumentDir);
  };

  // 读取文件元数据
  const stat = () => {
    FileSystem.stat(Dirs.DocumentDir + "/text1.txt").then((res) => {
      setStatInfo(JSON.stringify(res));
    }).catch(err => {
      console.log(err);
    })
  };

  // 检查路径是否存在
  const exists = () => {
    FileSystem.exists(Dirs.DocumentDir + "/text1.txt").then((res) => {
      setExists(res);
    }).catch((error) => {
      console.log(error, 'error');
    });
  };

  // 复制文件
  const cp = async () => {
    await FileSystem.cp(Dirs.DocumentDir + "/text1.txt", Dirs.DocumentDir + "/text4.txt")
  };

  // 对文件内容进行哈希处理
  const hash = () => {
    FileSystem.hash(Dirs.DocumentDir + "/text1.txt", 'SHA-256').then((res) => {
      setHashValue(res);
    }).catch((error) => {
      console.log(error, 'error')
    });
  };

  // 检查路径是否是目录
  const isDir = async () => {
    let res = await FileSystem.isDir(Dirs.DocumentDir + '/text1.txt');
    setDirOrNot(res);
  };

  // 列出目录中的文件
  const ls = async () => {
    await FileSystem.ls(Dirs.DocumentDir).then((res) => {
      setLsList(res.join('、'));
    }).catch((error) => {
      console.log(error, 'error')
    });
  };

  // 检查设备可用空间
  const df = async () => {
    await FileSystem.df().then(res => {
      setFreeSize(res?.internal_free);
      setTotalSize(res?.internal_total);
    })
  };

  // 读取目录中所有文件的元数据
  const statDir = () => {
    FileSystem.statDir(Dirs.DocumentDir).then(res => {
      setStatDirInfo(res);
    }).catch(err => {
      console.log(err);
    });
  };

  // 读取文件的一大块内容，从位于的字节开始offset，读取length字节
  const readFileChunk = () => {
    FileSystem.readFileChunk(Dirs.DocumentDir + "/text2.txt", 1, 1, 'utf8').then((res) => {
      setReadFileChunkInfo(res);
    }).catch((error) => {
      console.log(error, 'error')
    });
  };

  // 将内容附加到文件
  const appendFile = async () => {
    await FileSystem.appendFile(Dirs.DocumentDir + "/text3.txt", "AAAAAA", 'utf8');
  }

  // 将一个文件附加到另一个文件。返回写入的字节数
  const concatFiles = async () => {
    await FileSystem.concatFiles(Dirs.DocumentDir + "/text3.txt", Dirs.DocumentDir + "/text4.txt").then((res) => {
      setConcatBeyts(res)
    }).catch((error) => {
      console.log(error, 'error')
    });
  };

  // 从应用的资源包中复制指定的资源文件到目标位置
  const cpAsset = () => {
    FileSystem.cpAsset('bundle.harmony.js', Dirs.DocumentDir + '/0733.txt')
  };
  // 将文件复制到外部控制的位置
  const cpExternal = () => {
    FileSystem.cpExternal(Dirs.DocumentDir + '/0730.txt', "0724.txt", 'downloads');
  };

  // 将网络请求保存到文件
  const fetch = () => {
    FileSystem.fetch('https://example.com', {
      path: Dirs.DocumentDir + '/download.html',
      method: 'GET'
    }).then((res) => {
      console.log(res)
    }).catch((error) => {
      console.log(error, 'error')
    });
  };

  useEffect(() => {
    setInfo([
      { key: 'CacheDir', value: Dirs.CacheDir },
      { key: 'DatabaseDir', value: Dirs.DatabaseDir ?? '<undefined>' },
      { key: 'DocumentDir', value: Dirs.DocumentDir },
      { key: 'LibraryDir', value: Dirs.LibraryDir ?? '<undefined>' },
      { key: 'MainBundleDir', value: Dirs.MainBundleDir },
      { key: 'SDCardDir', value: Dirs.SDCardDir ?? '<undefined>' },
    ]);
  }, [])

  return (
    <ScrollView>
      <View style={{ backgroundColor: '#fff' }}>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            {info.map((value, index) => (
              <View key={`${index}-${value.key}`} style={styles.row}>
                <Text style={styles.key}>{value.key}</Text>
                <Text style={styles.value}>{value.value}</Text>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      </View>
      <View style={styles.baseArea}>
        <Text style={{ flex: 1 }}>FileAccess.wirteFile()</Text>
        <Button title="运行" color="#841584" onPress={wirteFile}></Button>
      </View>
      <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
        <View style={styles.baseArea}>
          <Text style={{ flex: 1 }}>FileAccess.readFile()</Text>
          <Button title="运行" color="#841584" onPress={readFile}></Button>
        </View>
        <Text>读取的文件内容：{fileContent}</Text>
      </View>
      <View style={styles.baseArea}>
        <Text style={{ flex: 1 }}>FileAccess.unlink()</Text>
        <Button title="运行" color="#841584" onPress={unlink}></Button>
      </View>
      <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
        <View style={styles.baseArea}>
          <Text style={{ flex: 1 }}>FileAccess.mkdir()</Text>
          <Button title="运行" color="#841584" onPress={mkdir}></Button>
        </View>
        <Text>新目录路径：{mkdirParam}</Text>
      </View>
      <View style={styles.baseArea}>
        <Text style={{ flex: 1 }}>FileAccess.mv()</Text>
        <Button title="运行" color="#841584" onPress={mv}></Button>
      </View>
      <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
        <View style={styles.baseArea}>
          <Text style={{ flex: 1 }}>FileAccess.stat()</Text>
          <Button title="运行" color="#841584" onPress={stat}></Button>
        </View>
        <Text>文件信息：{statInfo}</Text>
      </View>
      <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
        <View style={styles.baseArea}>
          <Text style={{ flex: 1 }}>FileAccess.exists()</Text>
          <Button title="运行" color="#841584" onPress={exists}></Button>
        </View>
        <Text>文件是否存在：{isExists === '' ? '' : isExists ? '存在' : '不存在'}</Text>
      </View>
      <View style={styles.baseArea}>
        <Text style={{ flex: 1 }}>FileAccess.cp()</Text>
        <Button title="运行" color="#841584" onPress={cp}></Button>
      </View>
      <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
        <View style={styles.baseArea}>
          <Text style={{ flex: 1 }}>FileAccess.isDir()</Text>
          <Button title="运行" color="#841584" onPress={isDir}></Button>
        </View>
        <Text>是否是目录：{dirOrNot === '' ? '' : dirOrNot ? '是' : '不是'}</Text>
      </View>
      <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
        <View style={styles.baseArea}>
          <Text style={{ flex: 1 }}>FileAccess.ls()</Text>
          <Button title="运行" color="#841584" onPress={ls}></Button>
        </View>
        <Text>目录中的文件：{lsList}</Text>
      </View>
      <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
        <View style={styles.baseArea}>
          <Text style={{ flex: 1 }}>FileAccess.df()</Text>
          <Button title="运行" color="#841584" onPress={df}></Button>
        </View>
        <Text>可用空间：{freeSize ? (freeSize / (1024 * 1024 * 1024)).toFixed(2) : ''}GB</Text>
        <Text>总空间：{totalSize ? (totalSize / (1024 * 1024 * 1024)).toFixed(2) : ''}GB</Text>
      </View>
      <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
        <View style={styles.baseArea}>
          <Text style={{ flex: 1 }}>FileAccess.hash()</Text>
          <Button title="运行" color="#841584" onPress={hash}></Button>
        </View>
        <Text>哈希值：{hashValue}</Text>
      </View>
      <View style={styles.baseArea}>
        <Text style={{ flex: 1 }}>FileAccess.unzip()</Text>
        <Button title="运行" color="#841584" onPress={unzip}></Button>
      </View>
      <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
        <View style={styles.baseArea}>
          <Text style={{ flex: 1 }}>FileAccess.statDir()</Text>
          <Button title="运行" color="#841584" onPress={statDir}></Button>
        </View>
        <Text>以下为目录下的文件信息：</Text>
        {statDirInfo.map((item, index) => (<Text key={index}>{JSON.stringify(item)}</Text>))}
      </View>
      <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
        <View style={styles.baseArea}>
          <Text style={{ flex: 1 }}>FileAccess.readFileChunk()</Text>
          <Button title="运行" color="#841584" onPress={readFileChunk}></Button>
        </View>
        <Text>读取的部分文件内容：{readFileChunkInfo}</Text>
      </View>
      <View style={styles.baseArea}>
        <Text style={{ flex: 1 }}>FileAccess.appendFile()</Text>
        <Button title="运行" color="#841584" onPress={appendFile}></Button>
      </View>
      <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
        <View style={styles.baseArea}>
          <Text style={{ flex: 1 }}>FileAccess.concatFiles()</Text>
          <Button title="运行" color="#841584" onPress={concatFiles}></Button>
        </View>
        <Text>写入的字节数：{concatBeyts}</Text>
      </View>
      <View style={styles.baseArea}>
        <Text style={{ flex: 1 }}>FileAccess.fetch()</Text>
        <Button title="运行" color="#841584" onPress={fetch}></Button>
      </View>
      <View style={styles.baseArea}>
        <Text style={{ flex: 1 }}>FileAccess.cpAsset()</Text>
        <Button title="运行" color="#841584" onPress={cpAsset}></Button>
      </View>
      <View style={styles.baseArea}>
        <Text style={{ flex: 1 }}>FileAccess.cpExternal()</Text>
        <Button title="运行" color="#841584" onPress={cpExternal}></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  key: { flex: 1.5, padding: 2 },
  row: { flexDirection: 'row', paddingVertical: 2 },
  value: { flex: 4, padding: 2 },
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
