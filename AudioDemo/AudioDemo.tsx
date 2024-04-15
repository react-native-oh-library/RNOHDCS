import React from 'react';
import { useState } from 'react';
import { SafeAreaView, StatusBar, Text, Button, TextInput, View } from 'react-native';
import { AudioRecorder, AudioUtils } from 'react-native-audio';

export const AudioDemo = () => {
    const [auth, setAuth] = useState<boolean>(false);
    const [isAuthorised, setIsAuthorised] = useState<boolean>(false);
    const [fileName, setFileName] = useState<string>('');
    const [tempFileName, setTempFileName] = useState<string>('');
    const [second, setSecond] = useState<number>(0);
    const [audioChannels, setAudioChannels] = useState<string>('2');
    const [audioSampleRate, setAudioSampleRate] = useState<string>('48000');

    const autoGenAudioName = () => {
        const date = new Date();
        const year = date.getFullYear().toString();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hour = date.getHours().toString().padStart(2, '0');
        const minute = date.getMinutes().toString().padStart(2, '0');
        const second = date.getSeconds().toString().padStart(2, '0');
        return `${year}${month}${day}_${hour}${minute}${second}`;
    }

    return (
        <SafeAreaView>
            <StatusBar barStyle={"dark-content"} />
            <View style={{ borderColor: '#aaa', borderWidth: 1, padding: 10 }}>
                <View>
                    <Text>{`requestAuthorization callback: ${isAuthorised}`}</Text>
                    <Text>{`checkAuthorizationStatus: ${auth}`}</Text>
                </View>
                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: 160 }}>
                        <Button
                            title="requestAuthorization"
                            onPress={async () => {
                                const res = await AudioRecorder.requestAuthorization();
                                setIsAuthorised(res);
                            }}
                        />
                    </View>
                    <View style={{ width: 160 }}>
                        <Button
                            title="checkAuthorizationStatus"
                            onPress={async () => {
                                const res = await AudioRecorder.checkAuthorizationStatus();
                                setAuth(res);
                            }}
                        />
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 10, borderColor: '#aaa', borderWidth: 1, padding: 10 }}>
                <View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={{ width: 120 }}>audioChannels:</Text>
                        <TextInput style={{ backgroundColor: '#fff', width: 200, height: 26, color: '#000' }}
                            placeholderTextColor={'#ccc'} placeholder="default value is 2" value={audioChannels} keyboardType={'numeric'}
                            onChangeText={(text) => setAudioChannels(text)} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={{ width: 120 }}>audioSampleRate:</Text>
                        <TextInput style={{ backgroundColor: '#fff', width: 200, height: 26, color: '#000' }}
                            placeholderTextColor={'#ccc'} placeholder="default value is 48000" value={audioSampleRate} keyboardType={'numeric'}
                            onChangeText={(text) => setAudioSampleRate(text)} />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Button
                        title="prepare"
                        onPress={async () => {
                            let file_name = autoGenAudioName();
                            setTempFileName(file_name);
                            const options = {
                                SampleRate: Number(audioSampleRate),
                                Channels: Number(audioChannels),
                                AudioEncoding: 'aac',
                                AudioEncodingBitRate: 32000,
                                AudioSource: 1,
                                OutputFormat: 'm4a',
                            }
                            await AudioRecorder.prepareRecordingAtPath(`${AudioUtils.FilesDirectoryPath}/${file_name}.m4a`, options);
                        }}
                    />
                </View>
            </View>

            <View style={{ marginTop: 10, borderColor: '#aaa', borderWidth: 1, padding: 10 }}>
                <View>
                    <Text>{`currentTime: ${parseInt(`${second}`)}`}</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Button
                        title="set onProgress"
                        onPress={() => {
                            AudioRecorder.onProgress = (data) => {
                                setSecond(data.currentTime);
                            }
                        }}
                    />
                </View>
                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: 80 }}>
                        <Button
                            title="start"
                            onPress={async () => {
                                await AudioRecorder.startRecording();
                                setFileName(tempFileName);
                            }}
                        />
                    </View>
                    <View style={{ width: 80 }}>
                        <Button
                            title="pause"
                            onPress={async () => {
                                await AudioRecorder.pauseRecording();
                            }}
                        />
                    </View>
                    <View style={{ width: 80 }}>
                        <Button
                            title="resume"
                            onPress={async () => {
                                await AudioRecorder.resumeRecording();
                            }}
                        />
                    </View>
                    <View style={{ width: 80 }}>
                        <Button
                            title="stop"
                            onPress={async () => {
                                await AudioRecorder.stopRecording();
                            }}
                        />
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 10, borderColor: '#aaa', borderWidth: 1, padding: 10 }}>
                <Text>录音文件：</Text>
                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    {fileName && <>
                        <Text style={{ fontSize: 12 }}>{`${fileName}.m4a`}</Text>
                    </>}
                </View>
            </View>
        </SafeAreaView>
    )
}