import { useState, useEffect } from 'react';
import * as React from 'react';
import {
    DeviceEventEmitter,
    NativeModules,
    NativeEventEmitter,
    Platform,
    SafeAreaView,
    View,
    Text,
    useWindowDimensions,
    ScrollView,
    TouchableOpacity,
    TurboModuleRegistry,
} from 'react-native';
import InCallManager from 'react-native-incall-manager';

const InCallManagerEmitter = new NativeEventEmitter(TurboModuleRegistry.get('InCallManagerTurboModule') ? TurboModuleRegistry.getEnforcing('InCallManagerTurboModule') : NativeModules.InCallManager);

enum InCallStartType {
    START = 'start',
    RINGBACK = 'ringback',
    BUSYTONE = 'busytone',
    RINGTONE = 'ringtone',
}

export default function InCallManagerExample() {
    const [changeType, setChangeType] = useState<'audio' | 'video' | undefined>(
        'audio',
    );
    const [audioUriJS, setAudioUri] = useState('');
    const [wiredHeadsetPluggedInObj, setWiredHeadsetPluggedInObj] =
        useState<Object>();
    const [audioRoute, setAudioRoute] = useState('');
    const [proximityEvent, setProximityEvent] = useState<Object>();
    const [wiredHeadsetEvent, setWiredHeadsetEvent] = useState<Object>();
    const [noisyAudioEvent, setNoisyAudioEvent] = useState<Object>();
    const [mediaButtonEvent, setMediaButtonEvent] = useState<Object>();
    const [onAudioFocusChange, setAudioFocusChangeEvent] = useState<Object>();

    const proximityHandleFuc = (data: any) => {
        // data: {'isNear': boolean}
        console.log('Proximity', data);
        setProximityEvent(data);
    };

    useEffect(() => {
        const proximityHandle = InCallManagerEmitter.addListener(
            'Proximity',
            proximityHandleFuc,
        );

        const wiredHeadsetHandle = InCallManagerEmitter.addListener(
            'WiredHeadset',
            wiredHeadsetHandleFuc,
        );

        return () => {
            proximityHandle.remove();
            wiredHeadsetHandle.remove();
        };
    }, []);

    useEffect(() => {
        if (Platform.OS === 'android' || Platform.OS === 'harmony') {
            const noisyAudioHandle = InCallManagerEmitter.addListener(
                'NoisyAudio',
                noisyAudioHandleFuc,
            );

            const mediaButtonHandle = InCallManagerEmitter.addListener(
                'MediaButton',
                mediaButtonHandleFuc,
            );

            const onAudioFocusChangeHandle = InCallManagerEmitter.addListener(
                'onAudioFocusChange',
                onAudioFocusChangeHandleFuc,
            );

            return () => {
                noisyAudioHandle.remove();
                mediaButtonHandle.remove();
                onAudioFocusChangeHandle.remove();
            };
        }
    }, []);

    function wiredHeadsetHandleFuc(data: any) {
        // data: {'isPlugged': boolean, 'hasMic': boolean, 'deviceName': string }
        console.log('WiredHeadset', data);
        setWiredHeadsetEvent(data);
    }

    function noisyAudioHandleFuc(data: any) {
        // data: {}
        console.log('NoisyAudio', data);
        setNoisyAudioEvent(data);
    }

    function mediaButtonHandleFuc(data: any) {
        // data: {'eventText': string, 'eventCode': number }
        console.log('MediaButton', data);
        setMediaButtonEvent(data);
    }

    function onAudioFocusChangeHandleFuc(data: any) {
        // data: {'eventText': string, 'eventCode': number }
        console.log('onAudioFocusChange', data);
        setAudioFocusChangeEvent(data);
    }

    const startAudio = (
        typeStr: string,
        ringType = '_DEFAULT_',
        mediaType: 'audio' | 'video' | undefined = 'audio',
    ) => {

        if (typeStr === InCallStartType.START) {
            InCallManager.start({ media: mediaType }); // audio/video, default: audio
        }
        if (typeStr === InCallStartType.RINGBACK) {
            InCallManager.start({ media: mediaType, ringback: ringType }); // or _DEFAULT_ or _DTMF_ or _BUNDLE_
        }
        if (typeStr === InCallStartType.RINGTONE) {
            InCallManager.startRingtone(ringType, [0, 500, 1000, 500], 'playback', 1000);
        }
    };

    const stopAudio = (typeStr: string, ringType = '_DEFAULT_') => {
        // --- On Call Hangup:
        if (typeStr === InCallStartType.START) {
            InCallManager.stop();
        }
        if (typeStr === InCallStartType.RINGBACK) {
            InCallManager.stopRingback();
        }
        if (typeStr === InCallStartType.BUSYTONE) {
            // busytone is basically for OUTGOING call. and is part of stop()
            // If the call failed or callee are busing,
            // you may want to stop the call and play busytone
            InCallManager.stop({ busytone: ringType }); // or _BUNDLE_ or _DEFAULT_ or _DTMF_
        }
        if (typeStr === InCallStartType.RINGTONE) {
            InCallManager.stopRingtone();
        }
        // ... it will also remove event listeners ...
    };

    const turnScreenOn = () => {
        InCallManager.turnScreenOn();
    };

    const turnScreenOff = () => {
        InCallManager.turnScreenOff();
    };

    const setKeepScreenOn = (enable: boolean) => {
        InCallManager.setKeepScreenOn(enable);
    };

    const setSpeakerphoneOn = (enable: boolean) => {
        InCallManager.setSpeakerphoneOn(enable);
    };

    const setForceSpeakerphoneOn = (enable: boolean) => {
        InCallManager.setForceSpeakerphoneOn(enable);
    };

    const setMicrophoneMute = (enable: boolean) => {
        InCallManager.setMicrophoneMute(enable);
    };

    const getAudioUriJS = async (audioType: string, fileType: string) => {
        let url = await InCallManager.getAudioUri(audioType, fileType);
        setAudioUri(url ? url : '');
    };

    const getIsWiredHeadsetPluggedIn = async (
        audioType: string,
        fileType: string,
    ) => {
        let isWiredHeadsetPluggedInObj =
            await InCallManager.getIsWiredHeadsetPluggedIn();
        setWiredHeadsetPluggedInObj(
            isWiredHeadsetPluggedInObj ? isWiredHeadsetPluggedInObj : '',
        );
    };

    const setFlashOn = async (enable: boolean, brightness: number) => {
        InCallManager.setFlashOn(enable, brightness);
    };

    const startProximitySensor = () => {
        InCallManager.startProximitySensor();
    };

    const stopProximitySensor = () => {
        InCallManager.stopProximitySensor();
    };

    const pokeScreen = (timeout: number) => {
        InCallManager.pokeScreen(timeout);
    };

    const chooseAudioRoute = async (route: string) => {
        // SPEAKER_PHONE, WIRED_HEADSET, EARPIECE, BLUETOOTH, NONE
        let url = await InCallManager.chooseAudioRoute(route);
        setAudioRoute(url ? url : '');
    };

    const requestAudioFocus = () => {
        InCallManager.requestAudioFocus();
    };

    const abandonAudioFocus = () => {
        InCallManager.abandonAudioFocus();
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View>
                <Text numberOfLines={0} style={{ color: 'blue' }}>
                    EVENT:
                </Text>

                <Text numberOfLines={0} style={{ color: 'blue' }}>
                    proximityEvent:{JSON.stringify(proximityEvent)}
                </Text>

                <Text numberOfLines={0} style={{ color: 'blue' }}>
                    wiredHeadsetEvent:{JSON.stringify(wiredHeadsetEvent)}
                </Text>

                <Text numberOfLines={0} style={{ color: 'blue' }}>
                    noisyAudioEvent(iOS不支持):{JSON.stringify(noisyAudioEvent)}
                </Text>

                <Text numberOfLines={0} style={{ color: 'blue' }}>
                    mediaButtonEvent(iOS不支持):{JSON.stringify(mediaButtonEvent)}
                </Text>

                <Text numberOfLines={0} style={{ color: 'blue' }}>
                    onAudioFocusChange(iOS不支持):{JSON.stringify(onAudioFocusChange)}
                </Text>

                <TouchableOpacity
                    style={{ padding: 5 }}
                    onPress={() => {
                        stopAudio(InCallStartType.START);
                        setChangeType(changeType == 'audio' ? 'video' : 'audio');
                    }}>
                    <Text style={{ color: 'red' }}>
                        切换为{changeType == 'audio' ? 'video' : 'audio'}
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={() => {
                        startAudio(InCallStartType.START, '_DEFAULT_', changeType);
                    }}>
                    <Text style={{ color: '#000' }}>start{changeType}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        stopAudio(InCallStartType.START);
                    }}>
                    <Text style={{ color: '#000' }}>stop{changeType}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        startAudio(InCallStartType.RINGTONE, '_BUNDLE_', changeType);
                    }}>
                    <Text style={{ color: '#000' }}>
                        start{changeType}RINGTONE:_BUNDLE_
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        startAudio(InCallStartType.RINGTONE, '_DEFAULT_', changeType);
                    }}>
                    <Text style={{ color: '#000' }}>
                        start{changeType}RINGTONE:_DEFAULT_
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        stopAudio(InCallStartType.RINGTONE);
                    }}>
                    <Text style={{ color: '#000' }}>stop{changeType}RINGTONE</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        startAudio(InCallStartType.RINGBACK, '_BUNDLE_', changeType);
                    }}>
                    <Text style={{ color: '#000' }}>
                        start{changeType}RINGBACK:_BUNDLE_
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        startAudio(InCallStartType.RINGBACK, '_DEFAULT_', changeType);
                    }}>
                    <Text style={{ color: '#000' }}>
                        start{changeType}RINGBACK:_DEFAULT_
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        startAudio(InCallStartType.RINGBACK, '_DTMF_', changeType);
                    }}>
                    <Text style={{ color: '#000' }}>start{changeType}RINGBACK:_DTMF_</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        stopAudio(InCallStartType.RINGBACK);
                    }}>
                    <Text style={{ color: '#000' }}>stop{changeType}RINGBACK</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        stopAudio(InCallStartType.BUSYTONE, '_BUNDLE_');
                    }}>
                    <Text style={{ color: '#000' }}>stop{changeType}BUSYTONE:_BUNDLE_</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        stopAudio(InCallStartType.BUSYTONE, '_DEFAULT_');
                    }}>
                    <Text style={{ color: '#000' }}>
                        stop{changeType}BUSYTONE:_DEFAULT_
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        stopAudio(InCallStartType.BUSYTONE, '_DTMF_');
                    }}>
                    <Text style={{ color: '#000' }}>stop{changeType}BUSYTONE:_DTMF_</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        turnScreenOn();
                    }}>
                    <Text style={{ color: '#000' }}>turnScreenOn(iOS不支持)</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        turnScreenOff();
                    }}>
                    <Text style={{ color: '#000' }}>turnScreenOff(iOS不支持)</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setKeepScreenOn(true);
                    }}>
                    <Text style={{ color: '#000' }}>setKeepScreenOn=true</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setKeepScreenOn(false);
                    }}>
                    <Text style={{ color: '#000' }}>setKeepScreenOn=false</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setMicrophoneMute(true);
                    }}>
                    <Text style={{ color: '#000' }}>setMicrophoneMute=true</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setMicrophoneMute(false);
                    }}>
                    <Text style={{ color: '#000' }}>setMicrophoneMute=false</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={async () => {
                        await getAudioUriJS(InCallStartType.RINGTONE, '');
                    }}>
                    <Text style={{ color: '#000' }}>
                        getAudioUriJS={InCallStartType.RINGTONE}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={async () => {
                        await getAudioUriJS(InCallStartType.BUSYTONE, '');
                    }}>
                    <Text style={{ color: '#000' }}>
                        getAudioUriJS={InCallStartType.BUSYTONE}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={async () => {
                        await getAudioUriJS(InCallStartType.RINGBACK, '');
                    }}>
                    <Text style={{ color: '#000' }}>
                        getAudioUriJS={InCallStartType.RINGBACK}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                    <Text style={{ color: 'green' }}>audioUriJS={audioUriJS}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={async () => {
                        await getIsWiredHeadsetPluggedIn('', '');
                    }}>
                    <Text style={{ color: '#000' }}>getIsWiredHeadsetPluggedIn</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                    <Text style={{ color: 'green' }}>
                        getIsWiredHeadsetPluggedIn=
                        {JSON.stringify(wiredHeadsetPluggedInObj)}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setFlashOn(true, 100);
                    }}>
                    <Text style={{ color: '#000' }}>setFlashOn=true(Android不支持)</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setFlashOn(false, 50);
                    }}>
                    <Text style={{ color: '#000' }}>setFlashOn=false(Android不支持)</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        startProximitySensor();
                    }}>
                    <Text style={{ color: '#000' }}>startProximitySensor</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        stopProximitySensor();
                    }}>
                    <Text style={{ color: '#000' }}>stopProximitySensor</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}
