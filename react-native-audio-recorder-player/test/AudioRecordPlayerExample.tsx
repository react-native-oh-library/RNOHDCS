import React, { useEffect, useState } from 'react';

import { View, ScrollView, Text, TouchableHighlight } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import AudioRecorderPlayer, {
    AVEncoderAudioQualityIOSType,
    AVEncodingOption
} from 'react-native-audio-recorder-player';
import type {
    PlayBackType,
    RecordBackType,
} from 'react-native-audio-recorder-player';
import { AudioMimeHarmonyType, AudioFormatHarmonyType, AudioSourceHarmonyType, AudioSet } from "@react-native-oh-tpl/react-native-audio-recorder-player";


const PALETTE = {
    REACT_CYAN_LIGHT: 'hsl(193, 95%, 68%)',
    REACT_CYAN_DARK: 'hsl(193, 95%, 30%)',
};

function Button({ label, onPress }: { onPress: () => void; label: string }) {
    return (
        <TouchableHighlight
            underlayColor={PALETTE.REACT_CYAN_DARK}
            style={{
                paddingVertical: 6,
                paddingHorizontal: 12,
                backgroundColor: PALETTE.REACT_CYAN_LIGHT,
                borderWidth: 2,
                borderColor: PALETTE.REACT_CYAN_DARK,
            }}
            onPress={onPress}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>
                {label}
            </Text>
        </TouchableHighlight>
    );
}

const AudioRecorder = new AudioRecorderPlayer()


const AudioRecorderDemo = () => {
    const [recorderTime, setRecorderTime] = useState('00:00:00')
    const [playTime, setPlayTime] = useState('00:00:00')
    const [duration, setDuration] = useState('00:00:00')
    const [playCallBack, setPlayCallBack] = useState('')
    const [currentMetering, setCurrentMetering] = useState('')
    const [value, setValue] = useState('');
    const [mmss, setMMSS] = useState('');
    const [mmssss, setMMSSSS] = useState('');
    const [subscriptionDuration, setSubscriptionDuration] = useState('');


    const Meun = [
        {
            key: 'recorder-player_2_3_1',
            itShould: 'call addRecordBackListener',
            label: 'addRecordBackListener',
            isAssert: false,
            onPress: async (setState: (arg0: boolean) => void) => {
                AudioRecorder.addRecordBackListener((r) => {
                    console.log(r)
                    setCurrentMetering(r ? JSON.stringify(r) : '');
                    setRecorderTime(AudioRecorder.mmssss(r.currentPosition));
                })
            },
        },
        {
            key: 'recorder-player_1',
            itShould: 'Start recording',
            label: 'startRecord',
            isAssert: true,
            onPress: async (setState: (arg0: boolean) => void) => {
                const url = await AudioRecorder.startRecorder()
                setValue(url);
                setState(!!url);
            },
        },
        {
            key: 'recorder-player_3_3_2',
            itShould: 'call removeRecordBackListener',
            label: 'removeRecordBackListener',
            isAssert: false,
            onPress: async (setState: (arg0: boolean) => void) => {
                AudioRecorder.removeRecordBackListener();
            },
        },
        {
            key: 'recorder-player_1_1',
            itShould: 'Start recording and set uri=sound1.m4a',
            label: 'startRecord',
            isAssert: true,
            onPress: async (setState: (arg0: boolean) => void) => {
                const url = await AudioRecorder.startRecorder('sound1.m4a');
                setValue(url);
                setState(!!url);
            },
        },
        {
            key: 'recorder-player_1_2',
            itShould: 'Start recording and set audioSet={AudioSourceHarmony: AudioSourceHarmonyType.MIC,AudioMimeHarmony: AudioMimeHarmonyType.AUDIO_AAC,AudioFileFormatHarmony: AudioFormatHarmonyType.MPEG_4A,AudioEncodingBitRateHarmony: 3200,AudioSamplingRateHarmony: 44100,AudioChannelsHarmony: 2,}',
            label: 'startRecord',
            isAssert: true,
            onPress: async (setState: (arg0: boolean) => void) => {

                let path = 'sound2.m4a';
                const audioSet: AudioSet = {

                    AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
                    AVNumberOfChannelsKeyIOS: 2,
                    AVFormatIDKeyIOS: AVEncodingOption.aac,
                    AudioSourceHarmony: AudioSourceHarmonyType.MIC,
                    AudioMimeHarmony: AudioMimeHarmonyType.AUDIO_AAC,
                    AudioFileFormatHarmony: AudioFormatHarmonyType.MPEG_4A,
                    AudioEncodingBitRateHarmony: 3200,
                    AudioSamplingRateHarmony: 44100,
                    AudioChannelsHarmony: 2,
                };

                console.log('audioSet', audioSet);

                const url = await AudioRecorder.startRecorder(path, audioSet);
                setValue(url)
                setState(!!url);
            },
        },
        {
            key: 'recorder-player_1_3',
            itShould: 'Start recording and set meteringEnabled=true',
            label: 'startRecord',
            isAssert: true,
            onPress: async (setState: (arg0: boolean) => void) => {

                let path = 'sound3.m4a';
                const audioSet: AudioSet = {
                    AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
                    AVNumberOfChannelsKeyIOS: 2,
                    AVFormatIDKeyIOS: AVEncodingOption.aac,
                    AudioSourceHarmony: AudioSourceHarmonyType.DEFAULT,
                    AudioMimeHarmony: AudioMimeHarmonyType.AUDIO_AAC,
                    AudioFileFormatHarmony: AudioFormatHarmonyType.MPEG_4A,
                    AudioEncodingBitRateHarmony: 3200,
                    AudioSamplingRateHarmony: 44100,
                    AudioChannelsHarmony: 2,
                };

                console.log('audioSet', audioSet);

                const url = await AudioRecorder.startRecorder(path, audioSet, true);
                setValue(url)
                setState(!!url);
            },
        },
        {
            key: 'recorder-player_2',
            itShould: 'Pause recording',
            label: 'Pause',
            isAssert: true,
            onPress: async (setState: (arg0: boolean) => void) => {
                const r = await AudioRecorder.pauseRecorder()
                setValue(r)
                setState(!!r)

            },
        },

        {
            key: 'recorder-player_3',
            itShould: 'Resume recording',
            label: 'Resume',
            isAssert: true,
            onPress: async (setState: (arg0: boolean) => void) => {
                const r = await AudioRecorder.resumeRecorder()
                setValue(r)
                setState(!!r)

            },
        },

        {
            key: 'recorder-player_4',
            itShould: 'Stop recording',
            label: 'Stop',
            isAssert: true,
            onPress: async (setState: (arg0: boolean) => void) => {
                const url = await AudioRecorder.stopRecorder()
                setValue(url)
                setState(!!url)
            },
        },
        {
            key: 'recorder-player_5',
            itShould: 'Playing url',
            label: 'Play（url=https://sis-sample-audio.obs.cn-north-1.myhuaweicloud.com/16k16bit.mp3）',
            isAssert: true,
            onPress: async (setState: (arg0: boolean) => void) => {
                const r = await AudioRecorder.startPlayer('https://sis-sample-audio.obs.cn-north-1.myhuaweicloud.com/16k16bit.mp3');
                setValue(r);
                setState(!!r);

            },
        },
        {
            key: 'recorder-player_5_1',
            itShould: 'Playing url with httpHeader',
            label: 'Play（url with httpHeader={\'User-Agent\':\'HarmonyOS\'}）',
            isAssert: true,
            onPress: async (setState: (arg0: boolean) => void) => {
                const r = await AudioRecorder.startPlayer('https://sis-sample-audio.obs.cn-north-1.myhuaweicloud.com/16k16bit.mp3', { 'User-Agent': 'HarmonyOS' })
                setValue(r);
                setState(!!r);
            },
        },
        {
            key: 'recorder-player_6',
            itShould: 'Playing',
            label: 'Play url=sound.m4a',
            isAssert: true,
            onPress: async (setState: (arg0: boolean) => void) => {
                const r = await AudioRecorder.startPlayer('sound.m4a')
                setValue(r);
                setState(!!r);
            },
        },
        {
            key: 'recorder-player_6_1',
            itShould: 'call addPlayBackListener',
            label: 'addPlayBackListener',
            isAssert: false,
            onPress: async (setState: (arg0: boolean) => void) => {
                AudioRecorder.addPlayBackListener((r) => {
                    console.log(r)
                    setPlayCallBack(r ? JSON.stringify(r) : '');
                    // setState(!!r.currentPosition)
                    setPlayTime(AudioRecorder.mmssss(r.currentPosition))
                    setDuration(AudioRecorder.mmssss(r.duration))
                })
            },
        },
        {
            key: 'recorder-player_6_2',
            itShould: 'call removePlayBackListener',
            label: 'removePlayBackListener',
            isAssert: false,
            onPress: async (setState: (arg0: boolean) => void) => {
                AudioRecorder.removePlayBackListener();
            },
        },
        {
            key: 'recorder-player_7',
            itShould: 'Pause playing',
            label: 'Pause',
            isAssert: true,
            onPress: async (setState: (arg0: boolean) => void) => {
                const r = await AudioRecorder.pausePlayer()
                setValue(r)
                setState(!!r)
            },
        }, {
            key: 'recorder-player_8',
            itShould: 'Resume playing',
            label: 'Resume',
            isAssert: true,
            onPress: async (setState: (arg0: boolean) => void) => {
                const r = await AudioRecorder.resumePlayer()
                setValue(r)
                setState(!!r)

            },
        },
        {
            key: 'recorder-player_9',
            itShould: 'Stop playing',
            label: 'Stop',
            isAssert: true,
            onPress: async (setState: (arg0: boolean) => void) => {
                const r = await AudioRecorder.stopPlayer()
                setValue(r)
                setState(!!r)
            },
        }, {
            key: 'recorder-player_10',
            itShould: 'setSubscriptionDuration',
            label: 'setSubscriptionDuration 3s',
            isAssert: true,
            onPress: async (setState: (arg0: boolean) => void) => {
                const r = await AudioRecorder.setSubscriptionDuration(3)
                setState(!!r)
                setSubscriptionDuration(r);
            },
        },
        {
            key: 'recorder-player_11',
            itShould: 'setVolume',
            label: 'setVolume to 0.1',
            isAssert: true,
            onPress: async (setState: (arg0: boolean) => void) => {
                const r = await AudioRecorder.setVolume(0.1)
                setState(!!r)
                setValue(r)
            },
        },
        {
            key: 'recorder-player_13',
            itShould: 'seekToPlayer to 5s',
            label: 'seekToPlayer to 5s',
            isAssert: true,
            onPress: async (setState: (arg0: boolean) => void) => {
                const r = await AudioRecorder.seekToPlayer(5000)
                setState(!!r)
                setValue(r)
            },
        },
        {
            key: 'recorder-player_14',
            itShould: 'call mmss = 1000',
            label: 'mmss：Convert milliseconds to minute:second string',
            isAssert: true,
            onPress: async (setState: (arg0: boolean) => void) => {
                const r = AudioRecorder.mmss(1000);
                setState(!!r)
                setMMSS(r)
            },
        },
        {
            key: 'recorder-player_15',
            itShould: 'set mmssss = 1000',
            label: 'mmssss：Convert milliseconds to minute:second:milliseconds string',
            isAssert: true,
            onPress: async (setState: (arg0: boolean) => void) => {
                const r = AudioRecorder.mmssss(1000);
                setState(!!r)
                setMMSSSS(r)
            },
        },

    ];
    return (
        <Tester style={{ flex: 1 }}>
            <View style={{ margin: 13 }}>
                <View style={{ marginTop: 20, flexDirection: 'row', width: '100%' }}><Text numberOfLines={0} style={{ color: '#fff', fontSize: 14 }}>Recorder Time :</Text><Text style={{ color: '#fff', fontSize: 13 }}>{recorderTime}</Text></View>
                <View style={{ marginTop: 20, flexDirection: 'row', width: '100%' }}><Text numberOfLines={0} style={{ color: '#fff', fontSize: 14 }}>Player Time :</Text><Text style={{ color: '#fff', fontSize: 13 }}>{playTime}/{duration}</Text></View>
                <View style={{ marginTop: 20, flexDirection: 'row', width: '100%' }}><Text numberOfLines={0} style={{ color: '#fff', fontSize: 14 }}>Player callBack（addPlayBackListener）:<Text style={{ color: '#fff', fontSize: 13 }}>{playCallBack}</Text></Text></View>
                <View style={{ marginTop: 20, flexDirection: 'row', width: '100%' }}><Text numberOfLines={0} style={{ color: '#fff', fontSize: 14 }}>Record callBack（addRecordBackListener）:<Text style={{ color: '#fff', fontSize: 13 }}>{currentMetering}</Text></Text></View>
                <View style={{ marginTop: 20, flexDirection: 'row', marginBottom: 20, width: '100%' }}><Text numberOfLines={0} style={{ color: '#fff', fontSize: 14 }}>return Value:<Text style={{ color: '#fff', fontSize: 13 }}>{value}</Text></Text></View>

                {subscriptionDuration.length > 0 && <View style={{ marginTop: 20, flexDirection: 'row', marginBottom: 20, width: '100%' }}><Text numberOfLines={0} style={{ color: '#fff', fontSize: 14 }}>return Value:</Text><Text style={{ color: '#fff', fontSize: 13 }}>call setSubscriptionDuration return：{subscriptionDuration}</Text></View>}
                {mmss.length > 0 && <View style={{ marginTop: 20, flexDirection: 'row', marginBottom: 20, width: '100%' }}><Text numberOfLines={0} style={{ color: '#fff', fontSize: 14 }}>return Value:</Text><Text style={{ color: '#fff', fontSize: 13 }}>call mmss return：{mmss}</Text></View>}
                {mmssss.length > 0 && <View style={{ marginTop: 20, flexDirection: 'row', marginBottom: 20, width: '100%' }}><Text numberOfLines={0} style={{ color: '#fff', fontSize: 14 }}>return Value:</Text><Text style={{ color: '#fff', fontSize: 13 }}>call mmssss return：{mmssss}</Text></View>}

            </View>
            <ScrollView style={{ flex: 1 }}>

                <TestSuite name="@react-native-audio-recorder-player">

                    {Meun.map(item => {
                        if (item.isAssert === true) {
                            return (
                                <TestCase
                                    key={item.key}
                                    itShould={item.itShould}
                                    tags={['C_API']}
                                    initialState={false}
                                    arrange={({ setState }) => {
                                        return (
                                            <View style={{ flex: 1 }}>
                                                <Button
                                                    label={item.label}
                                                    onPress={() => {
                                                        item.onPress(setState);
                                                    }}></Button>
                                            </View>
                                        );
                                    }}
                                    assert={async ({ expect, state }) => {
                                        expect(state).to.be.true;
                                    }}
                                />
                            )

                        } else {
                            return (
                                <TestCase
                                    key={item.key}
                                    itShould={item.itShould}
                                    tags={['C_API']}

                                >
                                    <View style={{ flex: 1 }}>
                                        <Button
                                            label={item.label}
                                            onPress={() => {
                                                item.onPress(() => { });
                                            }}></Button>
                                    </View>
                                </TestCase>
                            )
                        }

                    })}
                </TestSuite>
            </ScrollView>
        </Tester>
    );
};

export default AudioRecorderDemo;