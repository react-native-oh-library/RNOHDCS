import React from 'react';
import { Button, View, ScrollView } from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import { EmitterSubscription } from "react-native";


const SoundPlayerDemo = () => {
    let _onFinishedSetUpSubscription: EmitterSubscription | null = null
    let _onFinishedPlayingSubscription: EmitterSubscription | null = null
    let _onFinishedLoadingSubscription: EmitterSubscription | null = null
    let _onFinishedLoadingFileSubscription: EmitterSubscription | null = null
    let _onFinishedLoadingURLSubscription: EmitterSubscription | null = null

    // Subscribe to event(s) you want when component mounted
    function componentDidMount() {
        _onFinishedSetUpSubscription = SoundPlayer.addEventListener('OnSetupError', ({ error }) => {
            console.log('RNSoundPlayer js setupError', error)
        })
        _onFinishedLoadingSubscription = SoundPlayer.addEventListener('FinishedLoading', ({ success }) => {
            console.log('RNSoundPlayer js finished loading', success)
        })
        _onFinishedLoadingFileSubscription = SoundPlayer.addEventListener('FinishedLoadingFile', ({ success, name, type }) => {
            console.log('RNSoundPlayer js finished loading file', success, name, type)
        })
        _onFinishedLoadingURLSubscription = SoundPlayer.addEventListener('FinishedLoadingURL', ({ success, url }) => {
            console.log('RNSoundPlayer js finished loading url', success, url)
        })
        _onFinishedPlayingSubscription = SoundPlayer.addEventListener('FinishedPlaying', ({ success }) => {
            console.log('RNSoundPlayer js finished playing', success)
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
            <ScrollView>
                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: 180 }}>
                        <Button
                            title="playSoundFileAsync"
                            onPress={async () => {
                                await SoundPlayer.playSoundFileAsync("tone", "mp3");
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="loadSoundFileAsync"
                            onPress={async () => {
                                await SoundPlayer.loadSoundFileAsync("tone", "mp3");
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="playUrlAsync(需要网络)"
                            onPress={async () => {
                                await SoundPlayer.playUrlAsync("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3");
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="loadUrlAsync(需要网络)"
                            onPress={async () => {
                                await SoundPlayer.loadUrlAsync('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3');
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="playAssetAsync"
                            onPress={async () => {
                                await SoundPlayer.playAssetAsync(require('./assets/tone.mp3'));
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="loadAssetAsync"
                            onPress={async () => {
                                await SoundPlayer.loadAssetAsync(require('./assets/tone.mp3'));
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
                                    console.info('soundPlayer js onFinishedPlaying', success)
                                });
                            }}
                        />
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="onFinishedLoading"
                            onPress={() => {
                                SoundPlayer.onFinishedLoading((success) => {
                                    console.info('soundPlayer js onFinishedLoading', success)
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
                        <Button
                            title="seek"
                            onPress={() => {
                                SoundPlayer.seek(10);
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
                        <Button
                            title="getInfo"
                            onPress={async () => {
                                let info = await SoundPlayer.getInfo();
                                console.info('soundPlayer js getInfo end info:' + JSON.stringify(info))
                            }}
                        />                        
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="setMixAudioAsync(true)"                            
                            onPress={async () => {
                                await SoundPlayer.setMixAudioAsync(true);
                            }}
                        /> 
                        <View style={{ marginTop: 10 }} ></View>
                        <Button
                            title="setMixAudioAsync(false)"                            
                            onPress={async () => {
                                await SoundPlayer.setMixAudioAsync(false);
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