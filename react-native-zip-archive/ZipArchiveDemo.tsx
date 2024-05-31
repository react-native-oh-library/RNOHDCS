import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, TextInput, Alert, Text, ActivityIndicator } from 'react-native';
import { pathParameters, zip, unzip, zipWithPassword, unzipWithPassword, subscribe, creteFile, isPasswordProtected, unzipAssets, getUncompressedSize } from 'react-native-zip-archive';
import { ProgressBar } from 'react-native-paper';

export function ZipArchiveDemo() {
    const [fileName, setFileName] = useState('');
    const [fileContent, setFileContent] = useState('');
    const [createdFilePath, setCreatedFilePath] = useState('');
    const [compressedFilePath, setCompressedFilePath] = useState('');

    const [newZipPath, setNewZipPath]: any = useState();
    const [newSourcePath, setNewSourcePath]: any = useState();
    const [newFolder, setNewFolder]: any = useState();
    const [password, setPassword] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [zipPassword, setZipPassword] = useState('');
    const [progress, setProgress] = useState(0);
    const [isProgressPing, setIsProgressPing] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);
    const [unzipStatus, setUnzipStatus] = useState('');
    const [uncompressSize, setUncompressSize] = useState('');
    let unzipPassword: string = '';
    let needPassword: boolean = false;

    // 存储设置的密码
    const setUnzipPassword = (value: string) => {
        console.log(`setUnzipPassword: ${value}`);
        unzipPassword = value;
    }

    useEffect(() => {
        let filesDir = pathParameters(); // 获取鸿蒙应用文件路径
        let newZipPath: any = filesDir + '.zip';
        let newSourcePath: any = filesDir;
        let newFolder: any = filesDir + 'Out';//解压时新建个文件夹

        setNewZipPath(newZipPath);//存储压缩包
        setNewSourcePath(newSourcePath);//原文件路径
        setNewFolder(newFolder);//解压时新建个文件夹

        if (!showInput) {
            setPassword(''); // 隐藏输入框时清空密码
        }
    }, [showInput]);

    // 创建文件
    const createFile = () => {
        if (!fileName || !fileContent) {
            Alert.alert('文件名和内容不能为空');
            return;
        }
        const filePath = `${newSourcePath}/${fileName}.txt`;

        if (fileName && fileContent) {
            creteFile(filePath, fileContent)
                .then(() => {
                    setCreatedFilePath(filePath);
                    Alert.alert('文件创建成功')
                    setTimeout(() => {
                        setFileName('');
                        setFileContent('');
                    }, 100);
                })
                .catch((error) => {
                    console.log('文件创建失败:', error);
                });
        } else {
            Alert.alert('请输入文件名和内容');
        }
    };

    // 密码压缩
    const handleZipPress = () => {
        if (password === '') {
            Alert.alert('错误', '请输入密码');
            return;
        }

        if (createdFilePath) {
            handleProgress();//进度条
            zipWithPassword(newSourcePath, newZipPath, password)
                .then(() => {
                    console.log(`password--11:${password}`)
                    setZipPassword(password);
                    setCompressedFilePath(newZipPath)
                    Alert.alert('成功', '已使用密码创建压缩');
                })
                .catch(error => {
                    Alert.alert('错误', `创建压缩文件失败: ${error}`);
                });
        } else {
            Alert.alert('无文件可供压缩');
        }
    };

    // 解压时是否需要密码
    const isUnzipWithPassword = () => {
        if (unzipPassword) {
            if (unzipPassword === zipPassword) {
                handleGetUncompressedSize();
                handleProgress();//进度条
                unzipWithPassword(newZipPath, newFolder, unzipPassword)
                    .then(() => {
                        setShowInput(false);
                        Alert.alert('成功', '已使用密码解压文件');
                    })
                    .catch(error => {
                        Alert.alert('错误', `解压文件失败: ${error}`);
                    });

            } else {
                Alert.alert('密码输入错误');
            }
        } else {
            Alert.alert('错误', '请先输入密码');
        }
    }

    // 密码解压&解压
    const handleUnzipPress = () => {
        if (this.needPassword) {
            isUnzipWithPassword();
            return;
        }
        isPasswordProtected(newZipPath)
            .then((res) => {
                if (res) {
                    this.needPassword = true;
                    setShowInput(true);
                } else {
                    if (compressedFilePath) {
                        if (needPassword === false) {
                            setShowInput(false);
                            handleGetUncompressedSize();
                            handleProgress();//进度条
                            unzip(newZipPath, newFolder, 'UTF-8')
                                .then(() => {
                                    console.log(`unzip success`)
                                    Alert.alert('成功', '已解压');
                                })
                                .catch(error => {
                                    Alert.alert('错误', '解压失败');
                                    console.log(`unzip error: ${error}`);
                                })
                        }
                    } else {
                        Alert.alert('无压缩文件可供解压');
                    }
                }
            })
            .catch(error => {
                console.error(`isPasswordProtected error: ${error}`)
            })
    }

    // 进度条
    const handleProgress = () => {
        setIsProgressPing(true);
        setProgress(0); //重置进度条
        interface data {
            progress: number,
            filePath: string
        }
        let currentProgress = 0;

        const interval = setInterval(() => {
            if (currentProgress < 100) {
                currentProgress += 20;
                setProgress(currentProgress);
                console.log(`current progress: ${currentProgress}%`);
            } else {
                clearInterval(interval); // 达到最大值后清除 interval
                setIsProgressPing(false);
            }
        }, 1000);

        subscribe((data: data) => {
            try {
                if (data.progress != null) {
                    currentProgress = data.progress;
                    setProgress(data.progress);
                    console.log(`subscribe success: ${data.progress}`);
                    setIsProgressPing(false);

                    if (data.progress === 100) {
                        clearInterval(interval);
                    }
                }
            } catch (error) {
                console.log(`subscribe error: ${error}`);
                clearInterval(interval);
            }
        })
    }

    // unzipAssets
    const handleUnzipAssets = async () => {
        setLoading(true);
        let filesDir = pathParameters();
        //解压files.zip文件到系统中的 destinationFolder 目录中
        let assetPath = filesDir + '.zip';
        let targetPath = filesDir + 'destinationFolder';
        if (compressedFilePath) {
            try {
                await unzipAssets(assetPath, targetPath);
                setUnzipStatus('解压完成');
                console.log(`unzipAssets success`);
            } catch (err) {
                setUnzipStatus(`解压失败：${err}`);
                console.log(`unzipAssets err: ${err}`);
            } finally {
                setLoading(false);
            }
        } else {
            Alert.alert('无压缩文件可供解压');
        }
    }

    // getUncompressedSize
    const handleGetUncompressedSize = () => {
        getUncompressedSize(newZipPath)
            .then((uncompressSize: any) => {
                setUncompressSize(uncompressSize);
                console.log(`uncompressSize success:${uncompressSize}`)
            })
            .catch((err) => {
                console.log(`getUncompressedSize err:${err}`)
            })
    }

    return (
        <View style={styles.content}>
            <View style={styles.buttonSix}>
                <View>
                    <Text>解压缩后的大小:{uncompressSize ? uncompressSize : '0'}字节</Text>
                    <View style={styles.progressBar}>
                        <View style={{ width: `${progress}%`, backgroundColor: '#00AEEF', height: '100%' }}></View>
                    </View>
                    <Text style={styles.percentageText}>{progress}%</Text>
                </View>
            </View>

            <View >
                <View >
                    <TextInput
                        placeholder="请输入文件名"
                        value={fileName}
                        onChangeText={setFileName}
                        style={{ borderWidth: 1, padding: 10, width: '70%' }}
                    />
                    <TextInput
                        style={{
                            height: 100,
                            borderColor: 'gray',
                            borderWidth: 1,
                            width: 200,
                            padding: 10,
                            marginBottom: 10,
                            marginTop: 10
                        }}
                        onChangeText={text => setFileContent(text)}
                        value={fileContent}
                        placeholder="文件内容"
                        multiline={true}
                    />
                    <Button title="创建文件" onPress={createFile} />
                </View>
            </View>

            <View style={styles.buttonSix}>
                <Button title='压缩' onPress={() => {
                    if (createdFilePath) {
                        handleProgress();//进度条
                        zip(newSourcePath, newZipPath)
                            .then(() => {
                                setCompressedFilePath(newZipPath)
                                Alert.alert('成功', '已压缩');
                            })
                            .catch(error => {
                                Alert.alert('错误', `压缩失败: ${error}`);
                            })
                    } else {
                        Alert.alert('无文件可供压缩');
                    }
                }} />
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder="设置压缩密码"
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
            </View>
            <View style={styles.buttonSix}>
                <Button title='密码压缩' onPress={handleZipPress} />
            </View>

            {showInput && (
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="输入解压密码"
                        onChangeText={text => setUnzipPassword(text)}
                    />
                </View>
            )}

            <View style={styles.buttonSix}>
                <Button title="解压" onPress={handleUnzipPress} />
            </View>

            <View>
                <Button title='unzipAssets解压' onPress={handleUnzipAssets} />
                {loading ? (
                    <View>
                        <ActivityIndicator size="large" color='#0000ff' />
                        <Text>正在解压文件...</Text>
                    </View>
                ) : (
                    <Text>{unzipStatus}</Text>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 56
    },
    buttonSix: {
        width: '65%',
        marginBottom: 10,
        marginTop: 20
    },
    input: {
        borderWidth: 1,
        padding: 10,
        width: 300
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressBar: {
        width: 250,
        height: 20,
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 10
    },
    percentageText: {
        marginTop: 5,
        fontSize: 16
    }
})