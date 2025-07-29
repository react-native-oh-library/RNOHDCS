import React from 'react';
import { useState } from 'react';
import { SafeAreaView, StatusBar, Text, Button, TextInput, View, Switch, StyleSheet, TouchableOpacity, Alert,Platform,ScrollView } from 'react-native';
import { AudioRecorder, AudioUtils,AudioSource } from 'react-native-audio/index';

type FileDirType = 'FilesDirectoryPath' | 'CachesDirectoryPath'| 'CacheDirectoryPath' | 'TempsDirectoryPath';

export const AudioDemo = () => {
    const [auth, setAuth] = useState<boolean>(false);
    const [isAuthorised, setIsAuthorised] = useState<boolean>(false);
    const [fileName, setFileName] = useState<string>('');
    const [tempFileName, setTempFileName] = useState<string>('');
    const [second, setSecond] = useState<number>(0);
    const [base64, setBase64] = useState<string>('');
    const [duration, setDuration] = useState<number>(0);
    const [status, setStatus] = useState<string>('');
    const [audioFileURL, setAudioFileURL] = useState<string>('');
    const [audioFileSize, setAudioFileSize] = useState<number>(0);
    const [audioChannels, setAudioChannels] = useState<string>('2');
    const [audioSampleRate, setAudioSampleRate] = useState<string>('48000');
    const [audioEncodingBitRate, setAudioEncodingBitRate] = useState<string>('100000');
    const [includeBase64, setIncludeBase64] = useState<boolean>(false);
    const [isButtonPressed01, setIsButtonPressed01] = useState<boolean>(false);
    const [fileFlag, setFileFlag] = useState<FileDirType>('FilesDirectoryPath');

    const toggleSwitch = () => setIncludeBase64(!includeBase64);

    const resetRecording = () => {
        setIsButtonPressed01(false)
        setBase64('');
        setDuration(0);
        setStatus('');
        setAudioFileURL('');
        setAudioFileSize(0);
        setSecond(0);
    }
    return (
        <ScrollView>
            <StatusBar barStyle={"dark-content"} />
            <View style={{ borderColor: '#aaa', borderWidth: 1, padding: 10 }}>
                <View>
                    <Text>{`requestAuthorization callback: ${JSON.stringify(isAuthorised)}`}</Text>
                    <Text>{`checkAuthorizationStatus: ${JSON.stringify(auth)}`}</Text>
                </View>
                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: 160 }}>
                        <Button
                            title="requestAuthorization"
                            onPress={async () => {
                                const res = await AudioRecorder.requestAuthorization();
                                setIsAuthorised(res);

                                const hasPermission = await AudioRecorder.checkAuthorizationStatus();
                                if (!hasPermission) {
                                    Alert.alert('Deny authorization! Recording requeires authorization,Enter the system setting and turn on microphone permissions');
                                }
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
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ width: 120 }}>audioSampleRate:</Text>
                        <TextInput style={{ backgroundColor: '#fff', width: 200, height: 26, color: '#000' }}
                            placeholderTextColor={'#ccc'} placeholder="default value is 48000" value={audioSampleRate} keyboardType={'numeric'}
                            onChangeText={(text) => setAudioSampleRate(text)} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ width: 120 }}>audioEncodingBitRate:</Text>
                        <TextInput style={{ backgroundColor: '#fff', width: 200, height: 26, color: '#000' }}
                            placeholderTextColor={'#ccc'} placeholder="default value is 100000" value={audioEncodingBitRate} keyboardType={'numeric'}
                            onChangeText={(text) => setAudioEncodingBitRate(text)} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ width: 120 }}>includeBase64:</Text>
                        <View style={styles.container}>
                            <Switch
                                style={{ height: 22 }}
                                trackColor={{ false: '#767577', true: '#0081f1' }}
                                thumbColor={'#f4f3f4'}
                                onValueChange={toggleSwitch}
                                value={includeBase64}
                            />
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ width: 180 }}>{`path: ${fileFlag}`}:</Text>
                        <View style={{ height: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 10 }}>
                            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => {
                                setFileFlag('FilesDirectoryPath');
                            }}>
                                <Text style={{ color: fileFlag === 'FilesDirectoryPath' ? '#0081f1' : '#666', fontSize: 14 }}>Files</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => {
                                setFileFlag(Platform.OS === 'harmony'?'CacheDirectoryPath':'CachesDirectoryPath');
                            }}>
                                <Text style={{ color: fileFlag === 'CachesDirectoryPath'||fileFlag === 'CacheDirectoryPath' ? '#0081f1' : '#666', fontSize: 14 }}>Caches</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setFileFlag('TempsDirectoryPath');
                            }}>
                                <Text style={{ color: fileFlag === 'TempsDirectoryPath' ? '#0081f1' : '#666', fontSize: 14 }}>Temps</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: 120 }}>
                        <Button
                            title="prepare"
                            onPress={async () => {
                                // let file_name = autoGenAudioName();
                                let file_name = 'audio_demo';
                                setTempFileName(file_name);
                                resetRecording()
                                const options = {
                                    SampleRate: Number(audioSampleRate),
                                    Channels: Number(audioChannels),
                                    AudioEncoding: 'aac',
                                    AudioEncodingBitRate: Number(audioEncodingBitRate),
                                    AudioSource: 1,
                                    OutputFormat: 'm4a',
                                    IncludeBase64: includeBase64
                                }
                                try {
                                    await AudioRecorder.prepareRecordingAtPath(`${AudioUtils[fileFlag]}/${file_name}.m4a`, options);
                                    console.log(`AudioRecorder : ${AudioSource},${AudioUtils[fileFlag]}/${file_name}.m4a`);
                                    setIsButtonPressed01(true);
                                    Alert.alert('Recording is prepared');
                                } catch (error) {
                                    // Alert.alert('error',JSON.stringify(error));
                                    
                                }

                            }}
                        />
                    </View>
                    <View style={{ width: 120}}>
                    <Button
                        title="prepare-aac"
                        onPress={async () => {
                            // let file_name = autoGenAudioName();
                            let file_name = 'audio_demo';
                            setTempFileName(file_name);
                            const options = {
                                SampleRate: Number(audioSampleRate),
                                Channels: Number(audioChannels),
                                AudioEncoding: 'aac',
                                AudioEncodingBitRate: Number(audioEncodingBitRate),
                                AudioSource: 1,
                                OutputFormat: 'aac',
                                IncludeBase64: includeBase64
                            }
                            try {
                                    await AudioRecorder.prepareRecordingAtPath(`${AudioUtils[fileFlag]}/${file_name}.m4a`, options);
                                    console.log(`AudioRecorder : ${AudioSource},${AudioUtils[fileFlag]}/${file_name}.m4a`);
                                    setIsButtonPressed01(true);
                                    Alert.alert('Recording is prepared');
                                } catch (error) {
                                    // Alert.alert('error',JSON.stringify(error));
                                    
                                }
                        }}
                    />
                </View>
                    <View style={{ width: 120 }}>
                        <Button
                            title="reset"
                            onPress={resetRecording}
                        />
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 10, borderColor: '#aaa', borderWidth: 1, padding: 10 }}>
                <View>
                    <Text>{`currentTime: ${parseInt(`${second}`)}`}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: 160, marginTop: 10 }}>
                        <Button
                            title="set onProgress"
                            onPress={() => {
                                AudioRecorder.onProgress = (data) => {
                                    setSecond(data.currentTime);
                                }
                            }}
                        />
                    </View>
                    <View style={{ width: 160, marginTop: 10 }}>
                        <Button
                            title="set onFinished"
                            onPress={() => {
                                AudioRecorder.onFinished = (data) => {

                                    let file_name = 'audio_demo';
                                    setTempFileName(file_name);
                                    setFileFlag('FilesDirectoryPath');
                                    const options1 = {
                                        SampleRate: Number(audioSampleRate),
                                        Channels: Number(audioChannels),
                                        AudioEncoding: 'aac',
                                        AudioEncodingBitRate: Number(audioEncodingBitRate),
                                        AudioSource: 1,
                                        OutputFormat: 'm4a',
                                        IncludeBase64: includeBase64,
                                    }
                                    AudioRecorder.prepareRecordingAtPath(`${AudioUtils[fileFlag]}/${file_name}.m4a`, options1);

                                    let str = data.base64.slice(0, 80);
                                    setBase64(includeBase64 ? str + '...' : '');
                                    setDuration(includeBase64 ? data.duration : 0);
                                    setStatus(includeBase64 ? data.status : '');
                                    setAudioFileURL(includeBase64 ? data.audioFileURL : '');
                                    setAudioFileSize(includeBase64 ? data.audioFileSize : 0);
                                }
                            }}
                        />
                    </View>
                </View>
                 <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: 80 }}>
                        <Button
                            title="start"
                            onPress={async () => {
                                if (!isButtonPressed01) {
                                    Alert.alert('Please call prepareRecording before starting recording');
                                } else {
                                    Alert.alert('start recording');
                                    await AudioRecorder.startRecording();
                                    setFileName(tempFileName);
                                }
                            }}
                        />
                    </View>
                    <View style={{ width: 80 }}>
                        <Button
                            title="pause"
                            onPress={async () => {
                                if (!isButtonPressed01) {
                                    Alert.alert('It is reasonable to call pauseRecording only in the started stat');
                                } else {
                                    Alert.alert('pause recording');
                                    await AudioRecorder.pauseRecording();
                                }
                            }}
                        />
                    </View>
                    <View style={{ width: 80 }}>
                        <Button
                            title="resume"
                            onPress={async () => {
                                if (!isButtonPressed01) {
                                    Alert.alert('It is reasonable to call resumeRecording only in the paused stats');
                                } else {
                                    Alert.alert('resume recording');
                                    await AudioRecorder.resumeRecording();
                                }
                            }}
                        />
                    </View>
                    <View style={{ width: 80 }}>
                        <Button
                            title="stop"
                            onPress={async () => {

                                if (!isButtonPressed01) {
                                    Alert.alert('It is reasonable to call stopRecording only in the started or paused state');
                                } else {
                                    Alert.alert('stop recording');
                                    await AudioRecorder.stopRecording();
                                    if (!AudioRecorder.onFinished || !includeBase64) {
                                        resetRecording()
                                    }
                                }

                            }}
                        />
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 10, borderColor: '#aaa', borderWidth: 1, padding: 10, marginBottom:30  }}>
                <Text>录音文件：</Text>
                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    {fileName && <>
                        <Text style={{ fontSize: 12 }}>{`${fileName}.m4a`}</Text>
                    </>}
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 12 }}>base64:</Text>
                    <Text style={{ flex: 1 }}>{`${base64}`}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 12 }}>duration:</Text>
                    <Text >{`${duration}`}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 12 }}>status:</Text>
                    <Text >{`${status}`}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 12 }}>audioFileSize:</Text>
                    <Text >{`${audioFileSize}`}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 12 }}>audioFileURL:</Text>
                    <Text >{`${audioFileURL}`}</Text>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    }
})