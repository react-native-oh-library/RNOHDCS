import { Tester, TestCase } from '@rnoh/testerino';
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
import RNFS from "react-native-fs";
import { Colors } from "react-native/Libraries/NewAppScreen";
function FsTest(): React.JSX.Element {
    // 参数
    const [mkdirParam, setMkdirParam] = useState("");
    const [existsParams, setExistsParams] = useState("");
    const mkdirExample = () => {
        //创建文件夹
        RNFS.mkdir(RNFS.DocumentDirectoryPath + "/" + mkdirParam).then(
            (result) => {
                console.log("file mkdirParam： " + mkdirParam);
                console.log("file Successfully created directory.");
            },
            (err) => {
                console.error("file mkdir: " + err.message);
            }
        );
    };




    const existsExample = () => {
        //查找文件夹
        RNFS.exists(RNFS.DocumentDirectoryPath + "/" + existsParams).then(
            (result) => {
                console.log("file exists " + result);
                console.log("file Successfully created directory.");
            },
            (err) => {
                console.error("file mkdir: " + err.message);
            }
        );
    };

    const readDirExample = () => {
        //读取文件夹
        RNFS.readDir(RNFS.MainBundlePath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
            .then((result) => {
                console.log('readDirExample', result);

                // stat the first file
                return Promise.all([RNFS.stat(result[0].path), result[0].path]);
            })
    };


    const writeFileExample = () => {
        // create a path you want to write to
        // :warning: on iOS, you cannot write into `RNFS.MainBundlePath`,
        // but `RNFS.DocumentDirectoryPath` exists on both platforms and is writable
        var path = RNFS.DocumentDirectoryPath + '/2.txt';

        // write the file
        RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')//写入文件
            .then((success) => {
                console.log('FILE WRITTEN!' + RNFS.DocumentDirectoryPath + '/2.txt', success);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }


    const unlinkExample = () => {
        // create a path you want to delete
        var path = RNFS.DocumentDirectoryPath + '/1.txt';

        RNFS.unlink(path)//删除文件
            .then(() => {
                console.log('FILE DELETED');
            })
            // `unlink` will throw an error, if the item to unlink does not exist
            .catch((err) => {
                console.log(err.message);
            });
    }




    const readFileExample = () => {
        // get a list of files and directories in the main bundle
        RNFS.readDir(RNFS.MainBundlePath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
            .then((result) => {
                console.log('GOT RESULT', result);

                // stat the first file
                return Promise.all([RNFS.stat(result[0].path), result[0].path]);
            })
            .then((statResult) => {
                if (statResult[0].isFile()) {
                    // if we have a file, read it
                    return RNFS.readFile(statResult[1], 'utf8');
                }

                return 'no file';
            })
            .then((contents) => {
                // log the file contents
                console.log(`log the file contentslog the file contents`);

                console.log(contents);
            })
            .catch((err) => {
                console.log(err.message, err.code);
            });
    }



    const appendFileExample = () => {//给文件写入内容
        var path = RNFS.DocumentDirectoryPath + '/2.txt';
        RNFS.appendFile(path, '新添加的文本', 'utf8')
            .then((success) => {
                console.log('success');
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const copyFileExample = () => {

        const path = RNFS.DocumentDirectoryPath + '/test.txt';
        const path1 = RNFS.DocumentDirectoryPath + '/eee/4.txt';
        RNFS.copyFile(path, path1)
            .then((result) => {
                console.log("复制path路径文件到path1", path, path1);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }



    const moveFileExample = () => {

        const path = RNFS.DocumentDirectoryPath + '/3.txt';
        const path1 = RNFS.DocumentDirectoryPath + '/eee/3.txt';
        RNFS.moveFile(path, path1)
            .then((result) => {
                console.log("将path路径文件移动到path1", path, path1);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }




    const readExample = () => {
        const path = RNFS.DocumentDirectoryPath + '/eee/3.txt';
        RNFS.read(path)
            .then((result) => {
                console.log("readExample", result);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }



    const starExample = () => {
        const path = RNFS.DocumentDirectoryPath + '/eee/3.txt';
        RNFS.stat(path)
            .then((result) => {
                console.log("starExample", result);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const downloadFileExample = () => {
        RNFS.downloadFile({
            fromUrl: "https://www-file.huawei.com/minisite/media/annual_report/annual_report_2022_cn.pdf",// URL to download file from
            toFile: RNFS.DocumentDirectoryPath + '/eee/3.pdf'
        })
    }

    const readFileAssetsExample = () => {//用户获取resources/rawfile/1.txt 目录下对应的rawfile文件内容，使用callback形式返回字节数组。
        RNFS.readFileAssets('1.txt').then(res => {

            console.log("readFileAssetsExample", res);

        }).catch((err) => {
            console.log("readFileAssetsExample error", err);
        });
    }



    const existsAssetsExample = () => {//用户获取resources/rawfile/1.txt 目录下对应的rawfile文件内容，使用callback形式返回字节数组。
        RNFS.existsAssets("test").then(res => {

            console.log("existsAssetsExample", res);

        }).catch((err) => {
            console.log("existsAssetsExample error", err);
        });
    }




    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}
                >
                    <Tester>
                        <TestCase
                            key={"getInitStatus_5"}
                            itShould={`api path list`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{  padding: 20 }}>
                                        <View>
                                            <Text style={{fontSize:13,color:"red"}}>
                                                当前库为文件操作库 不存在页面效果请关注文件系统变更{"\n"}
                                                相关资料链接：https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-sandbox-directory-0000001774280086
                                            </Text>
                                        </View>
                                        <View style={styles.sectionDescription}>
                                            <Text>FS.DocumentDirectoryPath:{"\n"}{RNFS.DocumentDirectoryPath}</Text>
                                        </View>
                                        <View style={styles.sectionDescription}>
                                            <Text>FS.CachesDirectoryPath:{RNFS.CachesDirectoryPath}</Text>
                                        </View>
                                        <View style={styles.sectionDescription}>
                                            <Text>FS.MainBundlePath:{"\n"}{RNFS.MainBundlePath}</Text>
                                        </View>
                                        <View style={styles.sectionDescription}>
                                            <Text>FS.TemporaryDirectoryPath:{"\n"}{RNFS.TemporaryDirectoryPath}</Text>
                                        </View>
                                        <View style={styles.sectionDescription}>
                                            <Text>FS.LibraryDirectoryPath:{"\n"}{RNFS.LibraryDirectoryPath}</Text>
                                        </View>
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />
                        <TestCase
                            key={"getInitStatus_5"}
                            itShould={`api mkdir and DocumentDirectoryPath`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ height: 100, padding: 20 }}>
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
                                            onPress={() => { mkdirExample(); setState(true) }}
                                        />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />

                        <TestCase
                            key={"getInitStatus_5"}
                            itShould="fs api readDir and MainBundlePath"
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ height: 100, padding: 20 }}>
                                        <Button
                                            title="readDir"
                                            color="#9a73ef"
                                            onPress={() => { readDirExample(); setState(true) }}
                                        />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />


                        <TestCase
                            key={"getInitStatus_5"}
                            itShould="fs api writeFile and DocumentDirectoryPath"
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ height: 100, padding: 20 }}>
                                        <Button
                                            title="writeFile"
                                            color="#9a73ef"
                                            onPress={() => { writeFileExample(); setState(true) }}
                                        />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />

                        <TestCase
                            key={"getInitStatus_5"}
                            itShould="fs api unlink and DocumentDirectoryPath"
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ height: 100, padding: 20 }}>
                                        <Button
                                            title="unlink"
                                            color="#9a73ef"
                                            onPress={() => { unlinkExample(); setState(true) }}
                                        />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />
                        <TestCase
                            key={"getInitStatus_5"}
                            itShould="fs api readDir and MainBundlePath  to readFile"
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ height: 100, padding: 20 }}>
                                        <Button
                                            title="writeFile"
                                            color="#9a73ef"
                                            onPress={() => { readFileExample(); setState(true) }}
                                        />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />

                        <TestCase
                            key={"getInitStatus_5"}
                            itShould="fs api DocumentDirectoryPath  to appendFile"
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ height: 100, padding: 20 }}>
                                        <Button
                                            title="appendFileExample"
                                            color="#9a73ef"
                                            onPress={() => { appendFileExample(); setState(true) }}
                                        />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />


                        <TestCase
                            key={"getInitStatus_5"}
                            itShould="fs api DocumentDirectoryPath  to appendFile"
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ height: 100, padding: 20 }}>
                                        <View style={styles.sectionDescription}>
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Folder Path"
                                                onChangeText={(mkdirParam) => setExistsParams(mkdirParam)}
                                                placeholderTextColor="#9a73ef"
                                                autoCapitalize="none"
                                            />
                                        </View>
                                        <Button
                                            title="existsExample"
                                            color="#9a73ef"
                                            onPress={() => { existsExample(); setState(true) }}
                                        />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />




                        <TestCase
                            key={"getInitStatus_5"}
                            itShould="fs api copyFile"
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ height: 100, padding: 20 }}>
                                        <View style={styles.sectionDescription}>
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Folder Path"
                                                onChangeText={(mkdirParam) => setExistsParams(mkdirParam)}
                                                placeholderTextColor="#9a73ef"
                                                autoCapitalize="none"
                                            />
                                        </View>
                                        <Button
                                            title="existsExample"
                                            color="#9a73ef"
                                            onPress={() => { existsExample(); setState(true) }}
                                        />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />

                        <TestCase
                            key={"getInitStatus_5"}
                            itShould="fs api copyFile"
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ height: 100, padding: 20 }}>
                                        <Button
                                            title="copyFileExample"
                                            color="#9a73ef"
                                            onPress={() => { copyFileExample(); setState(true) }}
                                        />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />




                        <TestCase
                            key={"getInitStatus_5"}
                            itShould="fs api moveFileExample"
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ height: 100, padding: 20 }}>
                                        <Button
                                            title="moveFileExample"
                                            color="#9a73ef"
                                            onPress={() => { moveFileExample(); setState(true) }}
                                        />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />



                        <TestCase
                            key={"readExample"}
                            itShould="fs api readExample"
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ height: 100, padding: 20 }}>
                                        <Button
                                            title="readExample"
                                            color="#9a73ef"
                                            onPress={() => { readExample(); setState(true) }}
                                        />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />




                        <TestCase
                            key={"starExample"}
                            itShould="fs api startExample"
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ height: 100, padding: 20 }}>
                                        <Button
                                            title="starExample"
                                            color="#9a73ef"
                                            onPress={() => { starExample(); setState(true) }}
                                        />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />


                        <TestCase
                            key={"starExample"}
                            itShould="fs api downloadFileExample"
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ height: 100, padding: 20 }}>
                                        <Button
                                            title="downloadFileExample"
                                            color="#9a73ef"
                                            onPress={() => { downloadFileExample(); setState(true) }}
                                        />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />


                        <TestCase
                            key={"starExample"}
                            itShould="fs api downloadFileExample"
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ height: 100, padding: 20 }}>
                                        <Button
                                            title="downloadFileExample"
                                            color="#9a73ef"
                                            onPress={() => { downloadFileExample(); setState(true) }}
                                        />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />

                        <TestCase
                            key={"starExample"}
                            itShould="fs api readFileAssetsExample"
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ height: 100, padding: 20 }}>
                                        <Button
                                            title="readFileAssetsExample"
                                            color="#9a73ef"
                                            onPress={() => { readFileAssetsExample(); setState(true) }}
                                        />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />


                        <TestCase
                            key={"starExample"}
                            itShould="fs api existsAssetsExample"
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ height: 100, padding: 20 }}>
                                        <Button
                                            title="existsAssetsExample"
                                            color="#9a73ef"
                                            onPress={() => { existsAssetsExample(); setState(true) }}
                                        />
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />



                    </Tester>







                </ScrollView>
            </SafeAreaView>
        </>
    );
}
// 组件样式
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.black,
        paddingBottom: 100,
    },
    sectionDescription: {
        marginBottom: 10,
        marginTop: 10
    },
    input: {
        marginTop: 12,
    },
});

export default FsTest;