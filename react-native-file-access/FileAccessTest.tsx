import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';
import { Dirs, FileSystem } from 'react-native-file-access';

export default () => {
  const [info, setInfo] = useState<{ key: string; value: string }[]>([]);
  const [result, setResult] = useState<string | null>('') || null;
  const [fileContent, setFileContent] = useState('');
  const [fileContentBase64, setFileContentBase64] = useState('');
  const [mkdirParam, setMkdirParam] = useState('');
  const [statInfo, setStatInfo] = useState<any>([]);
  const [isExists, setExists] = useState<boolean | string>('');
  const [lsList, setLsList] = useState<any>([]);
  const [totalSize, setTotalSize] = useState<number>();
  const [freeSize, setFreeSize] = useState<number>();
  const [hashValue, setHashValue] = useState<string>();
  const [hashValueMD5, setHashValueMD5] = useState<string>();
  const [statDirInfo, setStatDirInfo] = useState<object[]>([]);
  const [readFileChunkInfo, setReadFileChunkInfo] = useState<string>();
  const [readFileChunkInfoBase64, setReadFileChunkInfoBase64] = useState<string>();
  const [concatBeyts, setConcatBeyts] = useState<number>();
  const [dirOrNot, setDirOrNot] = useState<any>('');
  const [dirOrNot1, setDirOrNot1] = useState<any>('');

  // 以utf-8形式读取文件的内容
  const readFile = () => {
    FileSystem.readFile(Dirs.DocumentDir + "/text.txt").then((res) => {
      setFileContent(res);
    })
  };

  // 以base64形式读取文件的内容
  const readFileBase64 = () => {
    FileSystem.readFile(Dirs.DocumentDir + "/text.txt", 'base64').then((res) => {
      setFileContentBase64(res);
    })
  };

  // 创建一个新目录，返回创建目录的路径
  const mkdir = () => {
    FileSystem.mkdir(Dirs.DocumentDir + "/" + "0801").then((res) => {
      setMkdirParam(res);
    }).catch((error) => {
      console.log(error, 'error')
    });
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

  // 对文件内容进行哈希处理SHA-256
  const hash = () => {
    FileSystem.hash(Dirs.DocumentDir + "/text1.txt", 'SHA-256').then((res) => {
      setHashValue(res);
    }).catch((error) => {
      console.log(error, 'error')
    });
  };

  // 对文件内容进行哈希处理MD5
  const hashMD5 = () => {
    FileSystem.hash(Dirs.DocumentDir + "/text1.txt", 'MD5').then((res) => {
      setHashValueMD5(res);
    }).catch((error) => {
      console.log(error, 'error')
    });
  };

  // 检查路径是否是目录
  const isDir = async () => {
    let res = await FileSystem.isDir(Dirs.DocumentDir + '/text1.txt');
    setDirOrNot(res);
  };
  // 检查路径是否是目录
  const isDir0801 = async () => {
    let res = await FileSystem.isDir(Dirs.DocumentDir + '/0801');
    setDirOrNot1(res);
  };

  // 列出目录中的文件
  const ls = async () => {
    await FileSystem.ls(Dirs.DocumentDir + '/0801').then((res) => {
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
    FileSystem.statDir(Dirs.DocumentDir + '/0801').then(res => {
      setStatDirInfo(res);
    }).catch(err => {
      console.log(err);
    });
  };

  // 以utf-8形式读取文件的一大块内容，从位于的字节开始offset，读取length字节
  const readFileChunk = () => {
    FileSystem.readFileChunk(Dirs.DocumentDir + "/text1.txt", 1, 1, 'utf8').then((res) => {
      setReadFileChunkInfo(res);
    }).catch((error) => {
      console.log(error, 'error')
    });
  };

  // 以base64形式读取文件的一大块内容，从位于的字节开始offset，读取length字节
  const readFileChunkBase64 = () => {
    FileSystem.readFileChunk(Dirs.DocumentDir + "/text1.txt", 1, 2, 'base64').then((res) => {
      setReadFileChunkInfoBase64(res);
    }).catch((error) => {
      console.log(error, 'error')
    });
  };

  // 将一个文件附加到另一个文件。返回写入的字节数
  const concatFiles = async () => {
    await FileSystem.concatFiles(Dirs.DocumentDir + "/text.txt", Dirs.DocumentDir + "/text1.txt").then((res) => {
      setConcatBeyts(res)
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
    <TestSuite name="FileAccessTest">
      <TestCase itShould="将内容以utf-8形式写入文件text.txt" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileSystem.writeFile()</Text>
            <Button title="运行" color="#841584" onPress={() => {
              FileSystem.writeFile(Dirs.DocumentDir + "/text.txt", "DDDD", "utf8").then(() => {
                setState(true);
              })
            }}></Button>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="将内容以base64形式写入文件text.txt" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileSystem.writeFile()</Text>
            <Button title="运行" color="#841584" onPress={() => {
              FileSystem.writeFile(Dirs.DocumentDir + "/text.txt", "aGVsbG8=", "base64").then(() => {
                setState(true);
              })
            }}></Button>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="以utf-8形式读取text.txt文件的内容">
        <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.readFile()</Text>
            <Button title="运行" color="#841584" onPress={readFile}></Button>
          </View>
          <Text>读取的文件内容：{fileContent}</Text>
        </View>
      </TestCase>
      <TestCase itShould="以base64形式读取text.txt文件的内容">
        <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.readFile()</Text>
            <Button title="运行" color="#841584" onPress={readFileBase64}></Button>
          </View>
          <Text>读取的文件内容：{fileContentBase64}</Text>
        </View>
      </TestCase>
      <TestCase itShould="删除text.txt文件" initialState={false}
        arrange={({ setState }: any) =>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.unlink()</Text>
            <Button title="运行" color="#841584" onPress={() => {
              FileSystem.unlink(Dirs.DocumentDir + "/text.txt").then(res => {
                setState(true);
              })
            }}></Button>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="创建一个新目录0801，返回创建目录的路径">
        <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.mkdir()</Text>
            <Button title="运行" color="#841584" onPress={mkdir}></Button>
          </View>
          <Text>新目录路径：{mkdirParam}</Text>
        </View>
      </TestCase>
      <TestCase itShould="在0801目录下新增一个text0801.txt" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileSystem.writeFile()</Text>
            <Button title="运行" color="#841584" onPress={() => {
              FileSystem.writeFile(Dirs.DocumentDir + "/0801/text0801.txt", "08010801", "utf8").then(() => {
                setState(true);
              })
            }}></Button>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="移动文件text.txt到text1.txt" initialState={false}
        arrange={({ setState }: any) =>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.mv()</Text>
            <Button title="运行" color="#841584" onPress={() => {
              FileSystem.mv(Dirs.DocumentDir + "/text.txt", Dirs.DocumentDir + "/text1.txt").then(() => {
                setState(true);
              })
            }}></Button>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="解压一个zip档案" initialState={false}
        arrange={({ setState }: any) =>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.unzip()</Text>
            <Button title="运行" color="#841584" onPress={() => {
              FileSystem.unzip(Dirs.DocumentDir + "/wxwx.zip", Dirs.DocumentDir).then(() => {
                setState(true);
              })
            }}></Button>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="读取text1.txt文件元数据">
        <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.stat()</Text>
            <Button title="运行" color="#841584" onPress={stat}></Button>
          </View>
          <Text>文件信息：{statInfo}</Text>
        </View>
      </TestCase>
      <TestCase itShould='检查text1.txt文件是否存在'>
        <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.exists()</Text>
            <Button title="运行" color="#841584" onPress={exists}></Button>
          </View>
          <Text>文件是否存在：{isExists === '' ? '' : isExists ? '存在' : '不存在'}</Text>
        </View>
      </TestCase>
      <TestCase itShould='复制text.txt文件到text2.txt文件' initialState={false}
        arrange={({ setState }: any) =>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.cp()</Text>
            <Button title="运行" color="#841584" onPress={() => {
              FileSystem.cp(Dirs.DocumentDir + "/text.txt", Dirs.DocumentDir + "/text2.txt").then(() => {
                setState(true);
              })
            }}></Button>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould='检查text1.txt文件是否是目录'>
        <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.isDir()</Text>
            <Button title="运行" color="#841584" onPress={isDir}></Button>
          </View>
          <Text>是否是目录：{dirOrNot === '' ? '' : dirOrNot ? '是' : '不是'}</Text>
        </View>
      </TestCase>

      <TestCase itShould='检查0801目录是否是目录'>
        <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.isDir()</Text>
            <Button title="运行" color="#841584" onPress={isDir0801}></Button>
          </View>
          <Text>是否是目录：{dirOrNot1 === '' ? '' : dirOrNot1 ? '是' : '不是'}</Text>
        </View>
      </TestCase>

      <TestCase itShould='对text1.txt文件内容进行哈希处理SHA-256'>
        <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.hash()</Text>
            <Button title="运行" color="#841584" onPress={hash}></Button>
          </View>
          <Text>哈希值：{hashValue}</Text>
        </View>
      </TestCase>
      <TestCase itShould='对text1.txt文件内容进行哈希处理MD5'>
        <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.hash()</Text>
            <Button title="运行" color="#841584" onPress={hashMD5}></Button>
          </View>
          <Text>哈希值：{hashValueMD5}</Text>
        </View>
      </TestCase>
      <TestCase itShould='列出0801目录中的文件'>
        <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.ls()</Text>
            <Button title="运行" color="#841584" onPress={ls}></Button>
          </View>
          <Text>目录中的文件：{lsList}</Text>
        </View>
      </TestCase>
      <TestCase itShould='检查设备可用空间'>
        <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.df()</Text>
            <Button title="运行" color="#841584" onPress={df}></Button>
          </View>
          <Text>可用空间：{freeSize ? (freeSize / (1024 * 1024 * 1024)).toFixed(2) : ''}GB</Text>
          <Text>总空间：{totalSize ? (totalSize / (1024 * 1024 * 1024)).toFixed(2) : ''}GB</Text>
        </View>
      </TestCase>
      <TestCase itShould='读取0801目录中所有文件的元数据'>
        <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.statDir()</Text>
            <Button title="运行" color="#841584" onPress={statDir}></Button>
          </View>
          <Text>以下为目录下的文件信息：</Text>
          {statDirInfo.map((item, index) => (<Text key={index}>{JSON.stringify(item)}</Text>))}
        </View>
      </TestCase>
      <TestCase itShould='以utf-8形式读取text1.txt文件的部分内容'>
        <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.readFileChunk()</Text>
            <Button title="运行" color="#841584" onPress={readFileChunk}></Button>
          </View>
          <Text>读取的部分文件内容：{readFileChunkInfo}</Text>
        </View>
      </TestCase>
      <TestCase itShould='以base64形式读取text1.txt文件的部分内容'>
        <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.readFileChunk()</Text>
            <Button title="运行" color="#841584" onPress={readFileChunkBase64}></Button>
          </View>
          <Text>读取的部分文件内容：{readFileChunkInfoBase64}</Text>
        </View>
      </TestCase>
      <TestCase itShould='将"AAAAAA"内容以utf-8形式附加到text1.txt文件' initialState={false}
        arrange={({ setState }: any) =>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.appendFile()</Text>
            <Button title="运行" color="#841584" onPress={() => {
              FileSystem.appendFile(Dirs.DocumentDir + "/text1.txt", "AAAAAA", 'utf8').then(() => {
                setState(true);
              })
            }}></Button>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould='将"Hello World!"内容以base64形式附加到text1.txt文件' initialState={false}
        arrange={({ setState }: any) =>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.appendFile()</Text>
            <Button title="运行" color="#841584" onPress={() => {
              FileSystem.appendFile(Dirs.DocumentDir + "/text1.txt", "SGVsbG8gV29ybGQh", 'base64').then(() => {
                setState(true);
              })
            }}></Button>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould='将text.txt文件附加到text1.txt文件。返回写入的字节数'>
        <View style={{ height: 'auto', backgroundColor: "#FFF", marginTop: 6 }}>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.concatFiles()</Text>
            <Button title="运行" color="#841584" onPress={concatFiles}></Button>
          </View>
          <Text>写入的字节数：{concatBeyts}</Text>
        </View>
      </TestCase>
      <TestCase itShould='从应用的资源包中复制指定的资源text.txt文件到Dirs.DocumentDir位置,并命名为"text0806.txt"' initialState={false}
        arrange={({ setState }: any) =>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.cpAsset()</Text>
            <Button title="运行" color="#841584" onPress={() => {
              FileSystem.cpAsset('text.txt', Dirs.DocumentDir + '/text0806.txt').then(() => {
                setState(true);
              })
            }}></Button>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould='将text.txt文件复制到外部控制的位置Downloads下,命名为"external.txt"' initialState={false}
        arrange={({ setState }: any) =>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.cpExternal()</Text>
            <Button title="运行" color="#841584" onPress={() => {
              FileSystem.cpExternal(Dirs.DocumentDir + '/text.txt', "external.txt", 'downloads').then(() => {
                setState(true);
              })
            }}></Button>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould='将网络请求保存到example.html文件' initialState={false}
        arrange={({ setState }: any) =>
          <View style={styles.baseArea}>
            <Text style={{ flex: 1 }}>FileAccess.fetch()</Text>
            <Button title="运行" color="#841584" onPress={() => {
              try {
                FileSystem.fetch('https://example.com', {
                  path: Dirs.DocumentDir + '/example.html',
                  network: 'unmetered',
                })
                setState(true);
              } catch { }
            }}></Button>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould='获取常量'>
        <View style={{ backgroundColor: '#fff' }}>
          <SafeAreaView style={styles.container}>
            {info.map((value, index) => (
              <View key={`${index}-${value.key}`} style={styles.row}>
                <Text style={styles.key}>{value.key}</Text>
                <Text style={styles.value}>{value.value}</Text>
              </View>
            ))}
          </SafeAreaView>
        </View>
      </TestCase>
    </TestSuite>
  );
};
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