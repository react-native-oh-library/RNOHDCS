
import { TestCase, Tester, TestSuite } from '@rnoh/testerino';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    ScrollView,
    Platform,
    DeviceEventEmitter,
    TurboModuleRegistry,
    NativeEventEmitter,
    NativeModules,
} from 'react-native';

import InCallManager from 'react-native-incall-manager';

const InCallManagerEmitter = new NativeEventEmitter(TurboModuleRegistry.get('InCallManagerTurboModule') ? TurboModuleRegistry.getEnforcing('InCallManagerTurboModule') : NativeModules.InCallManager);

enum InCallStartType {
    START = 'start',
    RINGBACK = 'ringback',
    BUSYTONE = 'busytone',
    RINGTONE = 'ringtone',
}

enum InCallManagerEventType {
    PROXIMITY_TYPE = 'Proximity',
    WIREDHEADSET_TYPE = 'WiredHeadset',
    NOISYAUDIO_TYPE = 'NoisyAudio',
    MEDIABUTTON_TYPE = 'MediaButton',
    ONAUDIOFOCUSCHANGE_TYPE = 'onAudioFocusChange',
}

const PALETTE = {
    REACT_CYAN_LIGHT: 'hsl(193, 95%, 68%)',
    REACT_CYAN_DARK: 'hsl(193, 95%, 30%)',
}

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


export default function InCallManagerTest() {

    const [audioUriJS, setAudioUri] = useState('');
    const [wiredHeadsetPluggedInObj, setWiredHeadsetPluggedInObj] =
        useState<Object>();
    const [proximityEvent, setProximityEvent] = useState<Object>();
    const [wiredHeadsetEvent, setWiredHeadsetEvent] = useState<Object>();
    const [noisyAudioEvent, setNoisyAudioEvent] = useState<Object>();
    const [mediaButtonEvent, setMediaButtonEvent] = useState<Object>();
    const [onAudioFocusChange, setAudioFocusChangeEvent] = useState<Object>();

    const [callStartWithRingBack, setCallStartWithRingBack] = useState(false);
    const [callStopWithRingBusy, setCallStopWithRingBusy] = useState(false);
    const [callStart, setCallStart] = useState(false);
    const [callStartWithVideo, setCallStartWithVideo] = useState(false);
    const [callStartWithRingBackVideo, setCallStartWithRingBackVideo] = useState(false);

    const [callStop, setCallStop] = useState(false);
    const [callTurnScreenOn, setCallTurnScreenOn] = useState(false);
    const [callTurnScreenOff, setCallTurnScreenOff] = useState(false);
    const [callSetKeepScreenOn, setCallSetKeepScreenOn] = useState(false);
    const [callGetAudioUri, setCallGetAudioUri] = useState(false);
    const [callStartRingtone, setCallStartRingtone] = useState(false);
    const [callStartRingtoneWithDefault, setCallStartRingtoneWithDefault] = useState(false);
    const [callStopRingtone, setCallSStopRingtone] = useState(false);
    const [callStartRingback, setCallStartRingback] = useState(false);
    const [callStopRingback, setCallStopRingback] = useState(false);

    const [callStartProximitySensor, setCallStartProximitySensor] = useState(false);
    const [callStopProximitySensor, setCallStopProximitySensor] = useState(false);
    const [callGetIsWiredHeadsetPluggedIn, setCallGetIsWiredHeadsetPluggedIn] = useState(false);
    const [flashOn, setFlashOn] = useState(false);

    useEffect(() => {

        const proximityListen = InCallManagerEmitter.addListener(InCallManagerEventType.PROXIMITY_TYPE, (data) => {
            console.log("Proximity event", data);
            setProximityEvent(data);
        });

        const wiredHeadsetListen = InCallManagerEmitter.addListener(InCallManagerEventType.WIREDHEADSET_TYPE, (data) => {
            console.log("WiredHeadset event", data);
            setWiredHeadsetEvent(data);
        });

        return () => {
            proximityListen.remove();
            wiredHeadsetListen.remove();
        }

    }, []);

    useEffect(() => {

        if (Platform.OS !== 'ios') {
            const noisyAudioListen = InCallManagerEmitter.addListener(InCallManagerEventType.NOISYAUDIO_TYPE, (data) => {
                console.log("NoisyAudio event", data);
                setNoisyAudioEvent(data);
            });

            const mediaButtonListen = InCallManagerEmitter.addListener(InCallManagerEventType.MEDIABUTTON_TYPE, (data) => {
                console.log("mediaButtonListen event", data);
                setMediaButtonEvent(data);
            });

            const audioFocusChangeListen = InCallManagerEmitter.addListener(InCallManagerEventType.ONAUDIOFOCUSCHANGE_TYPE, (data) => {
                console.log("onAudioFocusChange event", data);
                setAudioFocusChangeEvent(data);
            });

            return () => {
                noisyAudioListen.remove();
                mediaButtonListen.remove();
                audioFocusChangeListen.remove();
            }
        }


    }, []);

    const startAudio = (
        typeStr: string,
        ringType = '_DEFAULT_',
        mediaType: 'audio' | 'video' | undefined = 'audio',
    ) => {
        // --- start manager when the chat start based on logics of your app
        // On Call Established:

        if (typeStr === InCallStartType.START) {
            InCallManager.start({ media: mediaType }); // audio/video, default: audio
            setCallStart(true);
        }
        if (typeStr === InCallStartType.RINGBACK) {
            InCallManager.start({ media: mediaType, ringback: ringType }); // or _DEFAULT_ or _DTMF_ or _BUNDLE_
            setCallStartWithRingBack(true);
            setCallStartRingback(true);
        }
        if (typeStr === InCallStartType.RINGTONE) {
            InCallManager.startRingtone(ringType, [0, 500, 1000, 500], 'playback', 1000); // or default or playback with extension
            setCallStartRingtone(true);
        }
    };

    const stopAudio = (typeStr: string, ringType = '_DEFAULT_') => {
        // --- On Call Hangup:
        if (typeStr === InCallStartType.START) {
            InCallManager.stop();
            setCallStop(true);
        }
        if (typeStr === InCallStartType.RINGBACK) {
            InCallManager.stopRingback();
            setCallStopRingback(true);
        }
        if (typeStr === InCallStartType.BUSYTONE) {
            // busytone is basically for OUTGOING call. and is part of stop()
            // If the call failed or callee are busing,
            // you may want to stop the call and play busytone
            InCallManager.stop({ busytone: ringType }); // or _BUNDLE_ or _DEFAULT_ or _DTMF_
            setCallStopWithRingBusy(true);
        }
        if (typeStr === InCallStartType.RINGTONE) {
            InCallManager.stopRingtone();
            setCallSStopRingtone(true);
        }
        // ... it will also remove event listeners ...
    };

    const turnScreenOn = () => {
        InCallManager.turnScreenOn();
        setCallTurnScreenOn(true);
    };

    const turnScreenOff = () => {
        InCallManager.turnScreenOff();
        setCallTurnScreenOff(true);
    };

    const setKeepScreenOn = (enable: boolean) => {
        InCallManager.setKeepScreenOn(enable);
        setCallSetKeepScreenOn(enable);
    };

    const getAudioUriJS = async (audioType: string, fileType: string) => {
        let url = await InCallManager.getAudioUri(audioType, fileType);
        setAudioUri(url ? url : '');
        setCallGetAudioUri(true);
    };

    const getIsWiredHeadsetPluggedIn = async (
    ) => {
        let isWiredHeadsetPluggedInObj =
            await InCallManager.getIsWiredHeadsetPluggedIn();
        setWiredHeadsetPluggedInObj(
            isWiredHeadsetPluggedInObj ? isWiredHeadsetPluggedInObj : '',
        );
        setCallGetIsWiredHeadsetPluggedIn(true);
    };

    const setFlashOnFuc = async (enable: boolean, brightness: number) => {
        InCallManager.setFlashOn(enable, brightness);
    };

    const startProximitySensor = () => {
        InCallManager.startProximitySensor();
        setCallStartProximitySensor(true);
    };

    const stopProximitySensor = () => {
        InCallManager.stopProximitySensor();
        setCallStopProximitySensor(true);
    };


    return (
        <Tester key={"InCallManagerTest"} style={{ flex: 1 }}>

            <View>
                <Text numberOfLines={0} style={{ color: 'blue' }}>
                    EVENT Emit:
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

            </View>

            <ScrollView style={{ flex: 1 }}>

                <TestSuite name="InCallManager">

                    <TestCase
                        itShould="call api： start"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <View>
                                <Text numberOfLines={0} style={[styles.textStyle, { height: 'auto' }]}>{'call: start(param:{media:audio}):'}{callStart ? 'true' : 'false'}</Text>
                                <Text numberOfLines={0} style={[styles.textStyle, { height: 'auto' }]}>{'call: start(param:{media:video}):'}{callStartWithVideo ? 'true' : 'false'}</Text>
                                <Text numberOfLines={0} style={[styles.textStyle, { height: 'auto' }]}>{'call: start(param:{media:audio,ringback:_BUNDLE_}):'}{callStartWithRingBack ? 'true' : 'false'}</Text>
                                <Text numberOfLines={0} style={[styles.textStyle, { height: 'auto' }]}>{'call: start(param:{media:video,ringback:_BUNDLE_}):'}{callStartWithRingBackVideo ? 'true' : 'false'}</Text>

                                <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>

                                    <Button label='call param:{media:audio}' onPress={() => {
                                        startAudio(InCallStartType.START, '_BUNDLE_', 'audio');
                                        setState(true);
                                    }}></Button>

                                    <Button label='call param:{media:video}' onPress={() => {
                                        startAudio(InCallStartType.START, '_BUNDLE_', 'video');
                                        setCallStartWithVideo(true);
                                        setState(true);
                                    }}></Button>

                                    <Button label='call param:{media:audio,ringback:_BUNDLE_}' onPress={() => {
                                        startAudio(InCallStartType.RINGBACK, '_BUNDLE_', 'audio');
                                        setCallStartRingback(true);
                                        setState(true);
                                    }}></Button>

                                    <Button label='call param:{media:video,ringback:_BUNDLE_}' onPress={() => {
                                        startAudio(InCallStartType.RINGBACK, '_BUNDLE_', 'video');
                                        setCallStartWithRingBackVideo(true);
                                        setState(true);
                                    }}></Button>

                                </View>

                            </View>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        itShould="call api： stop"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <View>
                                <Text style={styles.textStyle}>{'call: stop(param:null):'}{callStop ? 'true' : 'false'}</Text>
                                <Text style={styles.textStyle}>{'call: stop(param:{busytone:_BUNDLE_}):'}{callStopWithRingBusy ? 'true' : 'false'}</Text>

                                <View style={{ flexDirection: 'row' }}>

                                    <Button label='call param:null' onPress={() => {
                                        stopAudio(InCallStartType.START);
                                        setState(true);
                                    }}></Button>

                                    <Button label='call param:{busytone:_BUNDLE_}' onPress={() => {
                                        stopAudio(InCallStartType.BUSYTONE, '_BUNDLE_');
                                        setCallStartWithVideo(true);
                                        setState(true);
                                    }}></Button>


                                </View>

                            </View>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />


                    <TestCase
                        itShould="call api： startRingtone"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <View>
                                <Text numberOfLines={0} style={[styles.textStyle, { height: 'auto' }]}>{'call: startRingtone(param:{ringtone:_BUNDLE_,vibrate_pattern:[0, 500, 1000, 500],ios_category:playback}):'}{callStartRingtone ? 'true' : 'false'}</Text>
                                <Text numberOfLines={0} style={[styles.textStyle, { height: 'auto' }]}>{'call: startRingtone(param:{ringtone:_BUNDLE_,vibrate_pattern:1,ios_category:default}):'}{callStartRingtoneWithDefault ? 'true' : 'false'}</Text>

                                <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>

                                    <Button label='call param:{ringtone:_BUNDLE_,vibrate_pattern:[0, 500, 1000, 500],ios_category:playback}' onPress={() => {
                                        startAudio(InCallStartType.RINGTONE, '_BUNDLE_', 'audio');
                                        setState(true);
                                    }}></Button>

                                    <Button label='call param:{ringtone:_BUNDLE_,vibrate_pattern:1,ios_category:default}' onPress={() => {
                                        InCallManager.startRingtone('_BUNDLE_', 1, 'default', 1000);
                                        setCallStartRingtoneWithDefault(true);
                                        setState(true);
                                    }}></Button>


                                </View>

                            </View>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        itShould="call api： stopRingtone"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <View>
                                <Text style={styles.textStyle}>{'call: stopRingtone(param:null):'}{callStopRingtone ? 'true' : 'false'}</Text>

                                <View style={{ flexDirection: 'row' }}>

                                    <Button label='call param:null' onPress={() => {
                                        stopAudio(InCallStartType.RINGTONE);
                                        setState(true);
                                    }}></Button>

                                </View>

                            </View>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        itShould="call api： startRingback"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <View>
                                <Text style={styles.textStyle}>{'call: startRingback(param:null):'}{callStartRingback ? 'true' : 'false'}</Text>

                                <View style={{ flexDirection: 'row' }}>

                                    <Button label='call param:null' onPress={() => {
                                        startAudio(InCallStartType.RINGBACK, '_BUNDLE_', 'audio');
                                        setState(true);
                                    }}></Button>

                                </View>

                            </View>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        itShould="call api： stopRingback"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <View>
                                <Text style={styles.textStyle}>{'call: stopRingback(param:null):'}{callStopRingback ? 'true' : 'false'}</Text>

                                <View style={{ flexDirection: 'row' }}>

                                    <Button label='call param:null' onPress={() => {
                                        stopAudio(InCallStartType.RINGBACK);
                                        setState(true);
                                    }}></Button>

                                </View>

                            </View>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />



                    <TestCase
                        itShould="call api： turnScreenOn(ios not support)"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <View>
                                <Text style={styles.textStyle}>{'call: turnScreenOn(param:null):'}{callTurnScreenOn ? 'true' : 'false'}</Text>

                                <View style={{ flexDirection: 'row' }}>

                                    <Button label='call param:null' onPress={() => {
                                        turnScreenOn();
                                        setState(true);
                                    }}></Button>


                                </View>

                            </View>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        itShould="call api： turnScreenOff(ios not support)"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <View>
                                <Text style={styles.textStyle}>{'call: turnScreenOff(param:null):'}{callTurnScreenOff ? 'true' : 'false'}</Text>

                                <View style={{ flexDirection: 'row' }}>

                                    <Button label='call param:null' onPress={() => {
                                        turnScreenOff();
                                        setState(true);
                                    }}></Button>


                                </View>

                            </View>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        itShould="call api： setKeepScreenOn"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <View>
                                <Text style={styles.textStyle}>{'call: setKeepScreenOn:'}{callSetKeepScreenOn ? 'true' : 'false'}</Text>

                                <View style={{ flexDirection: 'row' }}>

                                    <Button label='call param:true' onPress={() => {
                                        setKeepScreenOn(true);
                                        setState(true);
                                    }}></Button>

                                    <Button label='call param:false' onPress={() => {
                                        setKeepScreenOn(false);
                                        setState(true);
                                    }}></Button>


                                </View>

                            </View>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        itShould="call api： startProximitySensor"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <View>
                                <Text style={styles.textStyle}>{'call: startProximitySensor(param:null):'}{callStartProximitySensor ? 'true' : 'false'}</Text>

                                <View style={{ flexDirection: 'row' }}>

                                    <Button label='call param:null' onPress={() => {
                                        startProximitySensor();
                                        setState(true);
                                    }}></Button>


                                </View>

                            </View>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        itShould="call api： stopProximitySensor"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <View>
                                <Text style={styles.textStyle}>{'call: stopProximitySensor(param:null):'}{callStopProximitySensor ? 'true' : 'false'}</Text>

                                <View style={{ flexDirection: 'row' }}>

                                    <Button label='call param:null' onPress={() => {
                                        stopProximitySensor();
                                        setState(true);
                                    }}></Button>


                                </View>

                            </View>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        itShould="call api： getAudioUri"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <View>
                                <Text numberOfLines={0} style={[styles.textStyle, { height: 'auto' }]}>{'call: getAudioUri(audioType:ringtone,fileType:_BUNDLE_）：'}{JSON.stringify(audioUriJS)}</Text>

                                <View style={{ flexDirection: 'row' }}>

                                    <Button label='call' onPress={() => {
                                        getAudioUriJS(InCallStartType.RINGTONE, '_BUNDLE_');
                                        setState(true);
                                    }}></Button>


                                </View>

                            </View>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        itShould="call api： getIsWiredHeadsetPluggedIn"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <View>
                                <Text numberOfLines={0} style={[styles.textStyle, { height: 'auto' }]}>{'call: getIsWiredHeadsetPluggedIn(param:null):'}{JSON.stringify(wiredHeadsetPluggedInObj)}</Text>

                                <View style={{ flexDirection: 'row' }}>

                                    <Button label='call param:null' onPress={() => {
                                        getIsWiredHeadsetPluggedIn();
                                        setState(true);
                                    }}></Button>


                                </View>

                            </View>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />



                    <TestCase
                        itShould="call api： setFlashOn"
                        initialState={false}
                        arrange={({ setState, reset }) => (
                            <View>
                                <Text style={styles.textStyle}>setFlashOn:{flashOn ? 'true' : 'false'}</Text>

                                <View style={{ flexDirection: 'row' }}>

                                    <Button label='call' onPress={() => {
                                        setFlashOnFuc(true, 0);
                                        setFlashOn(true);
                                        setState(true);
                                    }}></Button>

                                    <Button label='reset' onPress={() => {
                                        setFlashOnFuc(false, 0);
                                        setFlashOn(false);
                                        setState(true);
                                    }}></Button>
                                </View>

                            </View>
                        )}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                </TestSuite>
            </ScrollView>
        </Tester>
    );
}


const styles = StyleSheet.create({

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: '#666',
        fontSize: 15,
        fontWeight: 'bold',
        height: 30,
    },
});
