import React, { useRef, useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Animated,
  Image,
  Button
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import ReactNativeBlobUtil from "react-native-blob-util";

type ArgState = React.Dispatch<React.SetStateAction<boolean>>

export default function BlobUtilTest () {
  const [text, setText] = useState<null | string>(null)
  const [hashRes,setHashRes] = useState("")
  const [resAss,setResAss] = useState("")
  const [resDf,setResDf] = useState("")
  const [resStat,setResStat] = useState("")
  const [resIsTata,setResIsTat] = useState("")
  const [base64Res,setBase64Res] = useState("")
  const [readResU,setReadResU] = useState("")
  const [readResB,setReadResB] = useState("")
  const [readResA,setReadResA] = useState("")
  const [dirRes,setDirRes] = useState("")
  const [readStreamRes,setReadStreamRes] = useState("")
  const [isRes,setIsRes] = useState("")
  const [existsRes,setExistRes] = useState("")


  const createFile = (setState: ArgState) => {
    ReactNativeBlobUtil.fs.createFile(
      text + "/text.txt",
      "123456",
      "utf8"
    ).then(res => setState(true)
    )
    ReactNativeBlobUtil.fs.createFile(
      text + "/stream.txt",
      "",
      "utf8"
    ).then(res => setState(true)
    )
  };
  const unlinkFile = async (setState: ArgState) => {
    ReactNativeBlobUtil.fs.unlink(text + "/text2.txt").then(res => setState(true))
   
  }

  const readFile = async (setState: ArgState,coded:string) => {
    ReactNativeBlobUtil.fs.readFile(text + "/text.txt", coded).then(res => {
      console.log(res, "read");
      
       switch (coded) {
        case "utf8":
            setReadResU(JSON.stringify(res))
            break;
            case "base64":
            setReadResB(JSON.stringify(res))
            break;
            case "ascii":
            setReadResA(JSON.stringify(res))
            break;
       }
      setState(true)
    }
    )
  }
  const writeFile = async (setState: ArgState) => {
    ReactNativeBlobUtil.fs.writeFile(
      text + "/text.txt",
      "Try to write str",
      "utf8"
    ).then(res => setState(true))
  }

  const writeStream = (setState: ArgState) => {

    ReactNativeBlobUtil.fs.writeStream(
      text + "/stream.txt",
      'utf8',
      true
    )
    .then((ofstream) => {
      ofstream.write('foo')
      ofstream.write('bar')
      return ofstream.close()
     
  })
      .then(() => {
        setState(true)
      }
)
      .catch(console.error)
  };
  const readStream = (setState: ArgState) => {
    let data = ''
    ReactNativeBlobUtil.fs.readStream(
      text + "/stream.txt",
      "utf8")
      .then((ifstream) => {
        ifstream.open()
        ifstream.onData((chunk) => {
          data += chunk
        })
        ifstream.onError((err) => {
          console.log('oops', err)
        })
        ifstream.onEnd(() => {
          console.log(data, "数据");
          setReadStreamRes(data)

          setState(true)

        })

      }).catch(err => console.log(err, '报错')
      )
  };

  const mkdir = (setState: ArgState) => {
    ReactNativeBlobUtil.fs.mkdir(
      ReactNativeBlobUtil.fs.dirs.DocumentDir + "/" + "addfile"
    ).then(()=> {
      setState(true)
    })
  

  };

  const ls = async (setState: ArgState, dir="text.txt") => {
    ReactNativeBlobUtil.fs.ls(ReactNativeBlobUtil.fs.dirs.CacheDir).then(res => {
        setIsRes(JSON.stringify(res))
      if (res.includes(dir)) {
        setState(true)
      }
    })
  };

  const mv = (setState: ArgState) => {
    ReactNativeBlobUtil.fs.mv(text + "/text.txt", text + "/text1.txt").then(res => {
      setState(true)
    })
  };

  const exists = (setState: ArgState, dir: string = "/text1.txt") => {
    ReactNativeBlobUtil.fs.exists(text + dir).then(res => {
      console.log(res,"文件是否存在");
      
        setExistRes(JSON.stringify(res))
      if (res) {
        setState(true)
        
      }
    })
  };
  const copyFileToCache = (setState: ArgState) => {
    ReactNativeBlobUtil.fs.cp(text + "/text1.txt", text + "/text2.txt").then(res => {
      exists(setState, "/text2.txt")

    })
  };

  const isDir = (setState: ArgState) => {
    ReactNativeBlobUtil.fs.isDir(text).then(res => {
      setDirRes(JSON.stringify(res))
      setState(true)

    }).catch(res => console.log("err", res)
    )
  }

  const lstat = (setState: ArgState) => {
    ReactNativeBlobUtil.fs.lstat(text as string).then(res => {
      setResIsTat(JSON.stringify(res))
      setState(true)
    })
  };

  const stat = (setState: ArgState) => {
    ReactNativeBlobUtil.fs.stat(text as string).then(res => {
      setResStat(JSON.stringify(res))
      setState(true)
    }
    )
  };

  const fsDf = (setState: ArgState) => {
    ReactNativeBlobUtil.fs.df().then(res =>{
      setResDf(JSON.stringify(res))
      setState(true)
    }
    )
  };
  const getAsset = (setState: ArgState) => {
    let result = ReactNativeBlobUtil.fs.asset(text as string)
    if (result) {
      setResAss(result)
      setState(true)
    }
  }
  const hash = (setState: ArgState) => {
    ReactNativeBlobUtil.fs.hash(text + "/text1.txt", "md5").then(res => {
      setHashRes(res)
      setState(true)
    }
    )
  };
  const appendFile = (setState: ArgState) => {
    ReactNativeBlobUtil.fs.appendFile(
      text + "/text5.txt",
      "123456",
      "utf8"
    ).then(res => {
      exists(setState, "/text5.txt")
    }

    )
  }
  const previewDocument = (setState: ArgState) => {
    ReactNativeBlobUtil.ios.presentPreview(text + "/text5.txt")
    setState(true)
  }
  const openDocument = (setState: ArgState) => {
    ReactNativeBlobUtil.ios.openDocument(text + "/text5.txt")
    setState(true)
  }
  const base64 = (setState: ArgState) => {
    let res = ReactNativeBlobUtil.base64.encode("123456789")
    if(res) {
      setBase64Res(res)
      setState(true)
    }

  }

  return (
    <View style={{ flex: 1 }}>
      <Tester>

        <ScrollView >
          <TestSuite name="react-native-blob-util">
            <TestCase
              key={`getInitStatus_1  `}
              itShould={"获取目录  dirs属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>

                    <Text>目录：{text}</Text>
                    <Button title={"active"} onPress={() => {
                      setText(ReactNativeBlobUtil.fs.dirs.CacheDir)
                      setState(true)
                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={`getInitStatus_2  `}
              itShould={"创建文件  createFile属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Button title={"active"} onPress={() => {
                      createFile(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
          
            <TestCase
              key={`getInitStatus_4  `}
              itShould={"读取文件(ascii)  readFile属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                      <Text>执行结果：{readResA}</Text>
                    <Button title={"active"} onPress={() => {
                      readFile(setState,"ascii")

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
             <TestCase
              key={`getInitStatus_27  `}
              itShould={"读取文件(utf8)  readFile属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
<Text>执行结果：{readResU}</Text>
                    <Button title={"active"} onPress={() => {
                      readFile(setState,"utf8")

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
             <TestCase
              key={`getInitStatus_28  `}
              itShould={"读取文件(base64)  readFile属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Text>执行结果：{readResB}</Text>
                    <Button title={"active"} onPress={() => {
                      readFile(setState,"base64")

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={`getInitStatus_5  `}
              itShould={"写入文件  writeFile属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Button title={"active"} onPress={() => {
                      writeFile(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={`getInitStatus_6  `}
              itShould={"写流  writeStream属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Button title={"active"} onPress={() => {
                      writeStream(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={`getInitStatus_7  `}
              itShould={"读流  readStream属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Text>执行结果：{readStreamRes}</Text>
                    <Button title={"active"} onPress={() => {
                      readStream(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />

            <TestCase
              key={`getInitStatus_8  `}
              itShould={"创建目录  mkdir属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Button title={"active"} onPress={() => {
                      mkdir(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={`getInitStatus_9  `}
              itShould={"查看文件的目录  ls属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Text>执行结果：{isRes}</Text>
                    <Button title={"active"} onPress={() => {
                      ls(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={`getInitStatus_10  `}
              itShould={"移动文件  mv属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Button title={"active"} onPress={() => {
                      mv(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={`getInitStatus_11  `}
              itShould={"检查文件是否存在  exists属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Text>执行结果：{existsRes}</Text>
                    <Button title={"active"} onPress={() => {
                      exists(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={`getInitStatus_12  `}
              itShould={"copy文件  cp属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Button title={"active"} onPress={() => {
                      copyFileToCache(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
             <TestCase
              key={`getInitStatus_13  `}
              itShould={"是否是目录  isDir属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Text>执行结果：{dirRes}</Text>
                    <Button title={"active"} onPress={() => {
                      isDir(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />

            <TestCase
              key={`getInitStatus_14  `}
              itShould={"获取目录下文件的统计数据  lstat属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                       <Text>执行结果：{resIsTata}</Text>
                    <Button title={"active"} onPress={() => {
                      lstat(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={`getInitStatus_15  `}
              itShould={"类似地获取数据或目录的统计信息  stat属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                       <Text>执行结果：{resStat}</Text>
                    <Button title={"active"} onPress={() => {
                      stat(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={`getInitStatus_16  `}
              itShould={"获取设备的可用磁盘空间和总磁盘空间	  df属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                       <Text>执行结果：{resDf}</Text>
                    <Button title={"active"} onPress={() => {
                      fsDf(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={`getInitStatus_17  `}
              itShould={"资产	  asset属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                       <Text>执行结果：{resAss}</Text>
                    <Button title={"active"} onPress={() => {
                      getAsset(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={`getInitStatus_18  `}
              itShould={"文件的hash处理	  hash属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Text>执行结果：{hashRes}</Text>
                    <Button title={"active"} onPress={() => {
                      hash(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
             <TestCase
              key={`getInitStatus_19 `}
              itShould={"追加文件	  appendFile属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Button title={"active"} onPress={() => {
                      appendFile(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={`getInitStatus_20 `}
              itShould={"session	  session属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                const [session,setSeesion] = useState("")
                return (
                  <View style={{ flex: 1 }}>
                    <Text>执行结果：{session}</Text>
                    <Button title={"active"} onPress={() => {
                
                        let result = ReactNativeBlobUtil.session("12345")
                       setSeesion(JSON.stringify(result))
                        
                       if(result.name=="12345") {
                        setState(true)
                       }


                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
          <TestCase
            key={`getInitStatus_21 `}
            itShould={"warp	  warp属性"}
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => {
              const [warp,setWarp]=useState("")
              return (
                <View style={{ flex: 1 }}>
                  <Text>执行后的结果：{warp}</Text>
                  <Button title={"active"} onPress={() => {
                 
                     setWarp(JSON.stringify(ReactNativeBlobUtil.wrap(text+"/text.txt")))
                   if(ReactNativeBlobUtil.wrap(text+"text.txt")) {
                     setState(true)
                   }
  


                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
     
            <TestCase
              key={`getInitStatus_22 `}
              itShould={"预览文件	  previewDocument属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Button title={"active"} onPress={() => {
                      previewDocument(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={`getInitStatus_23 `}
              itShould={"打开文件	  openDocument属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Button title={"active"} onPress={() => {
                      openDocument(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              key={`getInitStatus_24 `}
              itShould={"base64	  base64属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Text>执行后的结果：{base64Res}</Text>
                    <Button title={"active"} onPress={() => {
                      base64(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
              <TestCase
              key={`getInitStatus_3  `}
              itShould={"删除文件  unlink属性"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Button title={"active"} onPress={() => {
                      unlinkFile(setState)

                    }}></Button>
                  </View>
                );
              }}
              assert={async ({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
        </TestSuite>
      </ScrollView>
    </Tester>
    </View >



  );
}



