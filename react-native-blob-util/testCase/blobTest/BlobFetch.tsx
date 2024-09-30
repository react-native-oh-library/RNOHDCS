import React, { useEffect, useRef, useState } from 'react';

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
export default function BlobUtilFetch() {
  const [text, setText] = useState<string>("")
  const [sessionAdd, setSessionAdd] = useState<string>("")
  const [sessionlist, setSessionList] = useState<string>("")
  const [sessionRemove, setSessionRemove] = useState<string>("")
  const [sessionDis, setSessionDis] = useState<string>("")
  const [progress, setProgress] = useState<string>("")
  const [uploadpro, setUploadPRo] = useState<string>("")

  const createFile = () => {
   
    ReactNativeBlobUtil.fs.createFile(
      ReactNativeBlobUtil.fs.dirs.CacheDir + "/fetch.txt",
      "123456",
      "utf8"
    )
  };

  useEffect(() => {
    createFile()
  }, [])


  const uploadFile = async (setState: ArgState) => {
    const filePath = ReactNativeBlobUtil.fs.dirs.CacheDir + '/fetch.txt';
    ReactNativeBlobUtil.config({
      timeout: 20000,
      indicator: true,
    })
      .fetch(
        "POST",
        "http://127.0.0.1:3006/fileUpload",
        {
          'Content-Type': 'multipart/form-data',
        },
        [{

          name: 'file',
          filename: 'fetch.txt',
          // upload a file from asset is also possible in version >= 0.6.2
          data: ReactNativeBlobUtil.wrap(filePath)
        }]
      )
      .then((res) => {

      if (res.data) {
        setState(true)
      }
    })


  }
  const downLoad = (setState: ArgState) => {
    ReactNativeBlobUtil.config({
      fileCache: true,
      timeout: 20000,
      indicator: true,
    })
      .fetch(
        "GET",
        "http://127.0.0.1:3006/download",
      ).then((res) => {
        console.log(res.data, "aaa");
        if (res.data) {
          setState(true)
          setText(res.data)
        }

      }).catch((err) => {
        console.log(err, "err");

      })

  }

  const downLoadConfig = (setState: ArgState) => {
    ReactNativeBlobUtil.config({
      fileCache: true,
      timeout: 20000,
      path: ReactNativeBlobUtil.fs.dirs.CacheDir + "/config1.txt"
    })
      .fetch(
        "GET",
        "http://127.0.0.1:3006/download",
      ).then((res) => {
        console.log(res.data, "aaa");
        if (res.data) {
          setState(true)
        }
      }).catch((err) => {
        console.log(err, "err");

      })

  }

  const sessionFetch = (setState: ArgState) => {
    ReactNativeBlobUtil.config({
      session: 'foo',
      fileCache: true
    })
      .fetch('GET', "http://127.0.0.1:3006/download")
      .then((res) => {
        console.log(res, "aaa");

      })
    ReactNativeBlobUtil.session('foo').add(ReactNativeBlobUtil.fs.dirs.CacheDir + "/fetch.txt")
    setSessionAdd(JSON.stringify(ReactNativeBlobUtil.session('foo').list()))
    if (ReactNativeBlobUtil.session('foo').list().length > 0) {
      setState(true)
    }
  }
  const fetchprogress = (setState: ArgState) => {
    let task = ReactNativeBlobUtil.config({
      fileCache: true
    })
      .fetch('GET', "http://127.0.0.1:3006/download") .progress({count:-1,interval:1000},(received, total) => {
        console.log('progress ' + Math.floor(received/total*100) + '%')
        setProgress( Math.floor(received/total*100)+"")
        setState(true)
    })
     
  }
  const fetchUploadProgress = (setState: ArgState) => {
    const filePath = ReactNativeBlobUtil.fs.dirs.CacheDir + '/config1.txt';
    ReactNativeBlobUtil.config({
      timeout: 20000,
      indicator: true,
    })
      .fetch(
        "POST",
        "http://127.0.0.1:3006/fileUpload",
        {
          'Content-Type': 'multipart/form-data',
        },
        [{

          name: 'file',
          filename: 'fetch.txt',
          data: ReactNativeBlobUtil.wrap(filePath)
        }]
      ).uploadProgress((received, total) => {
        console.log('uploadProgress ' + Math.floor(received/total*100) + '%')
         
        setUploadPRo(Math.floor(received/total*100) + '%')
        setState(true)
    })
     
  }
  const fetchCancel = (setState: ArgState) => {
    let task = ReactNativeBlobUtil.config({
      fileCache: true
    })
      .fetch('GET', "http://127.0.0.1:3006/download").cancel(res=>setState(true))
     
  }

  return (
    <View style={{ flex: 1 }}>
      <Tester>

        <ScrollView >
          <TestSuite name="react-native-blob-util">
            <TestCase
              key={`getInitStatus_1  `}
              itShould={"上传文件  fetch"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>

                    <Button title={"active"} onPress={() => {
                      uploadFile(setState)

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
              itShould={"下载文件  fetch"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Text>文件目录：{text}</Text>
                    <Button title={"active"} onPress={() => {
                      downLoad(setState)

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
              itShould={"下载文件到指定目录  config"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Button title={"active"} onPress={() => {
                      downLoadConfig(setState)

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
              itShould={"session add API"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Text>sessionList：{sessionAdd}</Text>
                    <Button title={"active"} onPress={() => {
                      sessionFetch(setState)

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
              itShould={"session list  API"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Text>sessionList：{sessionlist}</Text>
                    <Button title={"active"} onPress={() => {
                      setSessionList(JSON.stringify(ReactNativeBlobUtil.session("foo").list()))
                      if (ReactNativeBlobUtil.session("foo").list().length > 0) {
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
              key={`getInitStatus_6  `}
              itShould={"session remove  API"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Text>sessionList：{sessionRemove}</Text>
                    <Button title={"active"} onPress={() => {
                      setSessionRemove(JSON.stringify(ReactNativeBlobUtil.session('foo').remove(ReactNativeBlobUtil.fs.dirs.CacheDir + "/fetch.txt").list()))
                      if (ReactNativeBlobUtil.session('foo').remove(ReactNativeBlobUtil.fs.dirs.CacheDir + "/fetch.txt").list().length > 0) {
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
              key={`getInitStatus_7  `}
              itShould={"session dispose  API"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Text>sessionList：{sessionDis}</Text>
                    <Button title={"active"} onPress={() => {
                      ReactNativeBlobUtil.session('foo').dispose().then(() => {
                        setSessionDis(JSON.stringify(ReactNativeBlobUtil.session("foo").list()))
                        if (ReactNativeBlobUtil.session('foo').list().length == 0) {
                          setState(true)
                        }
                      })


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
              itShould={"fetch progress"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Text>进度：{progress}</Text>
                    <Button title={"active"} onPress={() => {
                     fetchprogress(setState)


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
              itShould={"fetch unloadprogress"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Text>进度：{uploadpro}</Text>
                    <Button title={"active"} onPress={() => {
                     fetchUploadProgress(setState)


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
              itShould={"fetch cancel"}
              tags={['C_API']}
              initialState={false}
              arrange={({ setState }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <Button title={"active"} onPress={() => {
                     fetchCancel(setState)


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



