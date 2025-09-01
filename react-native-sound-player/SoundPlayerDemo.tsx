import React, { useState } from 'react';
import { Button, View, ScrollView, Text } from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import { EmitterSubscription } from "react-native";
import { SettingsPicker } from './SettingsPicker';


const mp3 = require('./assets/tone.mp3');
const m4a = require('./assets/tone.m4a');
const aac = require('./assets/tone.aac');
const wav = require('./assets/tone.wav');

const SoundPlayerDemo = () => {
    const [getInfoText, setGetInfoText] = useState('getInfo:');
    const [oldCallBackText, setOldCallBackText] = useState('');
    const [callBackText, setCallBackText] = useState('');
    const [seekText, setSeekText] = useState('');
    const [mixState, setMixState] = useState(false);
    const [playSoundFileAsyncType, setPlaySoundFileAsyncType] = useState('mp3');
    const [loadSoundFileAsyncType, setLoadSoundFileAsyncType] = useState('mp3');
    const [playUrlAsyncType, setPlayUrlAsyncType] = useState('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3');
    const [loadUrlAsyncType, setLoadUrlAsyncType] = useState('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3');
    const [playAssetAsyncType, setPlayAssetAsyncType] = useState('./assets/tone.mp3');
    const [loadAssetAsyncType, setLoadAssetAsyncType] = useState('./assets/tone.mp3');
    
    let _onFinishedSetUpSubscription: EmitterSubscription | null = null
    let _onFinishedPlayingSubscription: EmitterSubscription | null = null
    let _onFinishedLoadingSubscription: EmitterSubscription | null = null
    let _onFinishedLoadingFileSubscription: EmitterSubscription | null = null
    let _onFinishedLoadingURLSubscription: EmitterSubscription | null = null
    let callBackTmpText = '';

    // Subscribe to event(s) you want when component mounted
    function componentDidMount() {
        _onFinishedSetUpSubscription = SoundPlayer.addEventListener('OnSetupError', ({ error }) => {
            console.log('RNSoundPlayer js setupError', error);
            callBackTmpText = '';
            setCallBackText('setupError, err: ' + `${JSON.stringify(error)}`);
        })
        _onFinishedLoadingSubscription = SoundPlayer.addEventListener('FinishedLoading', ({ success }) => {
            console.log('RNSoundPlayer js finished loading', success);
            callBackTmpText = 'FinishedLoading, finished loading state:' + `${JSON.stringify(success)}`;
            setCallBackText('FinishedLoading, finished loading state:' + `${JSON.stringify(success)}`);
        })
        _onFinishedLoadingFileSubscription = SoundPlayer.addEventListener('FinishedLoadingFile', ({ success, name, type }) => {
            console.log('RNSoundPlayer js finished loading file', success, name, type);
            callBackTmpText += '\n FinishedLoadingFile, finished loading file name: ' + name + ' , type: ' + type + `, state: ${JSON.stringify(success)}`;
            setCallBackText(callBackTmpText);
        })
        _onFinishedLoadingURLSubscription = SoundPlayer.addEventListener('FinishedLoadingURL', ({ success, url }) => {
            console.log('RNSoundPlayer js finished loading url', success, url);
            callBackTmpText += '\n FinishedLoadingURL, finished loading url: ' + url + `, state: ${JSON.stringify(success)}`;
            setCallBackText(callBackTmpText);
        })
        _onFinishedPlayingSubscription = SoundPlayer.addEventListener('FinishedPlaying', ({ success }) => {
            console.log('RNSoundPlayer js finished playing', success);
            callBackTmpText = '';
            setCallBackText('FinishedPlaying, finished playing state:' + `${JSON.stringify(success)}`);
        })
    }

    // Remove all the subscriptions when component will unmount
    function componentWillUnmount() {
        _onFinishedSetUpSubscription?.remove()
        _onFinishedPlayingSubscription?.remove()
        _onFinishedLoadingSubscription?.remove()
        _onFinishedLoadingURLSubscription?.remove()
        _onFinishedLoadingFileSubscription?.remove()
    }

    return (
        <>
            <View style={{ width: '100%' }}>
                <Text style={{ backgroundColor: '#fff', width: '100%', height: 60, borderWidth: 1, borderColor: '#999' }}>废弃回调返回结果：{oldCallBackText}</Text>
                <Text style={{ backgroundColor: '#fff', width: '100%', height: 120, borderWidth: 1, borderColor: '#999' }}>回调返回结果：{callBackText}</Text>
                <Text></Text>
            </View>
            <ScrollView>
                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: '100%' }}>
                        <SettingsPicker
                                label="play sound file async type"
                                value={playSoundFileAsyncType}
                                onValueChange={setPlaySoundFileAsyncType}
                                items={[
                                'mp3', 
                                'm4a',
                                'aac',
                                'ogg',
                                'wav',
                                'flac',
                                'amr',
                                'ape',                    
                                ]}
                            />
                        <Button
                            title="playSoundFileAsync"
                            onPress={async () => {
                                await SoundPlayer.playSoundFileAsync("tone", playSoundFileAsyncType);
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <SettingsPicker
                            label="load sound file async type"
                            value={loadSoundFileAsyncType}
                            onValueChange={setLoadSoundFileAsyncType}
                            items={[
                            'mp3', 
                            'm4a',
                            'aac',
                            'ogg',
                            'wav',
                            'flac',
                            'amr',
                            'ape',                              
                            ]}
                        />
                        <Button
                            title="loadSoundFileAsync"
                            onPress={async () => {
                                await SoundPlayer.loadSoundFileAsync("tone", loadSoundFileAsyncType);
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <SettingsPicker
                            label="play url async type"
                            value={playUrlAsyncType}
                            onValueChange={setPlayUrlAsyncType}
                            items={[
                            'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
                            'https://download.blender.org/peach/trailer/trailer_400p.ogg',
                            ]}
                        />
                        <Button
                            title="playUrlAsync(需要网络)"
                            onPress={async () => {
                                await SoundPlayer.playUrlAsync(playUrlAsyncType);
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <SettingsPicker
                            label="load url async type"
                            value={loadUrlAsyncType}
                            onValueChange={setLoadUrlAsyncType}
                            items={[
                            'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
                            'https://download.blender.org/peach/trailer/trailer_400p.ogg',                 
                            ]}
                        />
                        <Button
                            title="loadUrlAsync(需要网络)"
                            onPress={async () => {
                                await SoundPlayer.loadUrlAsync(loadUrlAsyncType);
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <SettingsPicker
                            label="play asset async type"
                            value={playAssetAsyncType}
                            onValueChange={setPlayAssetAsyncType}
                            items={[
                                './assets/tone.mp3',
                                './assets/tone.m4a',
                                './assets/tone.aac',
                                './assets/tone.wav',
                            ]}
                        />
                        <Button
                            title="playAssetAsync"
                            onPress={async () => {
                                if (playAssetAsyncType === './assets/tone.mp3') {
                                    await SoundPlayer.playAssetAsync(mp3);
                                } else if (playAssetAsyncType === './assets/tone.m4a') {
                                    await SoundPlayer.playAssetAsync(m4a);
                                } else if (playAssetAsyncType === './assets/tone.aac') {
                                    await SoundPlayer.playAssetAsync(aac);
                                } else if (playAssetAsyncType === './assets/tone.wav') {
                                    await SoundPlayer.playAssetAsync(wav);
                                }
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <SettingsPicker
                            label="load asset async type"
                            value={loadAssetAsyncType}
                            onValueChange={setLoadAssetAsyncType}
                            items={[
                                './assets/tone.mp3',
                                './assets/tone.m4a',
                                './assets/tone.aac',
                                './assets/tone.wav',                         
                            ]}
                        />
                        <Button
                            title="loadAssetAsync"
                            onPress={async () => {
                                if (loadAssetAsyncType === './assets/tone.mp3') {
                                    await SoundPlayer.loadAssetAsync(mp3);
                                } else if (loadAssetAsyncType === './assets/tone.m4a') {
                                    await SoundPlayer.loadAssetAsync(m4a);
                                } else if (loadAssetAsyncType === './assets/tone.aac') {
                                    await SoundPlayer.loadAssetAsync(aac);
                                } else if (loadAssetAsyncType === './assets/tone.wav') {
                                    await SoundPlayer.loadAssetAsync(wav);
                                }
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="playSoundFileErr"
                            onPress={async () => {
                                await SoundPlayer.playSoundFileAsync("tone1", "mp3");
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="playUrlErr(需要网络)"
                            onPress={async () => {
                                await SoundPlayer.playUrlAsync("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4111.mp3");
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="onFinishedPlaying"
                            onPress={() => {
                                SoundPlayer.onFinishedPlaying((success) => {
                                    console.info('soundPlayer js onFinishedPlaying', success);
                                    setOldCallBackText('onFinishedPlaying ' + JSON.stringify(success));
                                });
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="onFinishedLoading"
                            onPress={() => {
                                SoundPlayer.onFinishedLoading((success) => {
                                    console.info('soundPlayer js onFinishedLoading', success);
                                    setOldCallBackText('onFinishedLoading ' + JSON.stringify(success));
                                });
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="unmount"
                            onPress={() => {
                                SoundPlayer.unmount();
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="addEventListener"
                            onPress={() => {
                                componentDidMount();
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="removeEventListener"
                            onPress={() => {
                                componentWillUnmount();
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="playAsync"
                            onPress={async () => {
                                await SoundPlayer.playAsync();
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="pauseAsync"
                            onPress={async () => {
                                await SoundPlayer.pauseAsync();
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="resumeAsync"
                            onPress={async () => {
                                await SoundPlayer.resumeAsync();
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="stopAsync"
                            onPress={async () => {
                                await SoundPlayer.stopAsync();
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Text>seek info {seekText}</Text>
                        <Button
                            title="seek(10)"
                            onPress={async () => {
                                SoundPlayer.seek(10);
                                setTimeout(async () => {
                                    let info = await SoundPlayer.getInfo();
                                    setSeekText(JSON.stringify(info));
                                }, 150)
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Text>seek info {seekText}</Text>
                        <Button
                            title="seek(90)"
                            onPress={() => {
                                SoundPlayer.seek(90);
                                setTimeout(async () => {
                                    let info = await SoundPlayer.getInfo();
                                    setSeekText(JSON.stringify(info));
                                }, 150)
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Text>seek info {seekText}</Text>
                        <Button
                            title="seek(180)"
                            onPress={async () => {
                                SoundPlayer.seek(180);
                                setTimeout(async () => {
                                    let info = await SoundPlayer.getInfo();
                                    setSeekText(JSON.stringify(info));
                                }, 150)
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="setVolume(0)"
                            onPress={() => {
                                SoundPlayer.setVolume(0);
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="setVolume(0.5)"
                            onPress={() => {
                                SoundPlayer.setVolume(0.5);
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="setVolume(1)"
                            onPress={() => {
                                SoundPlayer.setVolume(1);
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="setNumberOfLoopsTrue"
                            onPress={() => {
                                SoundPlayer.setNumberOfLoops(1);
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="setNumberOfLoopsFalse"
                            onPress={() => {
                                SoundPlayer.setNumberOfLoops(0);
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Text>{getInfoText}</Text>
                        <Button
                            title="getInfo"
                            onPress={async () => {
                                let info = await SoundPlayer.getInfo();
                                setGetInfoText('getInfo:' + JSON.stringify(info));
                                console.info('soundPlayer js getInfo info:' + JSON.stringify(info));
                            }}
                        />                        
                        <View style={{ marginTop: 10 }} ></View>
                        <Text>mixState: {JSON.stringify(mixState)}</Text>
                        <Button
                            title="setMixAudioAsync(true)"                            
                            onPress={async () => {
                                await SoundPlayer.setMixAudioAsync(true);
                                setTimeout(() => {
                                    setMixState(true);
                                }, 100);
                            }}
                        /> 
                        <View style={{ marginTop: 10 }} ></View>
                        <Text>mixState: {JSON.stringify(mixState)}</Text>
                        <Button
                            title="setMixAudioAsync(false)"                            
                            onPress={async () => {
                                await SoundPlayer.setMixAudioAsync(false);
                                setTimeout(() => {
                                    setMixState(false);
                                }, 100);
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="setSpeakerAsync(true)"
                            onPress={async () => {
                                await SoundPlayer.setSpeakerAsync(true);
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="setSpeakerAsync(false)"
                            onPress={async () => {
                                await SoundPlayer.setSpeakerAsync(false);
                            }}
                        />                         
                        <View style={{ marginTop: 20 }} ></View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default SoundPlayerDemo;