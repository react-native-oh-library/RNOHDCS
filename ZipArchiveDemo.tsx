import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { pathParameters, zip, unzip, zipWithPassword, unzipWithPassword } from 'react-native-zip-archive';

export function ZipArchiveDemo() {
    const [newZipPath, setNewZipPath]: any = useState();
    const [newSourcePath, setNewSourcePath]: any = useState();
    const [newFolder, setNewFolder]: any = useState();
    const [password, setPassword] = useState('');
    const correctPassword = '123456'

    useEffect(() => {
        let filesDir = pathParameters(); // 获取鸿蒙应用文件路径
        let newZipPath: any = filesDir + '.zip';
        let newSourcePath: any = filesDir;
        let newFolder: any = filesDir + 'Out';//解压时新建个文件夹

        setNewZipPath(newZipPath);//存储压缩包
        setNewSourcePath(newSourcePath);//原文件路径
        setNewFolder(newFolder);//解压时新建个文件夹
    }, []);


    const handleZipWithPassword = () => {
        if (newZipPath && newSourcePath) {
            if (password === correctPassword) {
                zipWithPassword(newSourcePath, newZipPath, password);
                Alert.alert('加密压缩成功');
                setPassword('');
            } else {
                Alert.alert('错误', '密码不正确，请重新输入!');
            }
        }
    }

    const handleUnzipWithPassword = () => {
        if (newZipPath && newSourcePath) {
            if (password === correctPassword) {
                unzipWithPassword(newFolder, newZipPath, password);
                Alert.alert('加密解压成功');
                setPassword('');
            } else {
                Alert.alert('错误', '密码不正确，请重新输入!');
            }
        }
    }

    return (
        <View style={styles.content}>
            <View style={styles.buttonSix}>
                <Button title='压缩' onPress={() => {
                    zip(newSourcePath, newZipPath);
                }} />
            </View>

            <View style={styles.buttonSix}>
                <Button title='解压' onPress={() => {
                    unzip(newFolder, newZipPath, 'UTF-8');
                }} />
            </View>

            <TextInput
                placeholder='请输入密码'
                onChangeText={(text) => setPassword(text)}
                value={password}
                style={styles.inputStyle}
            />
            <View style={styles.buttonSix}>
                <Button title='加密压缩' onPress={handleZipWithPassword} />
            </View>

            <View style={styles.buttonSix}>
                <Button title='加密解压' onPress={handleUnzipWithPassword} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    buttonSix: {
        width: '65%',
        marginBottom: 30
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '65%',
        marginVertical: 20,
        paddingHorizontal: 10
    }
})