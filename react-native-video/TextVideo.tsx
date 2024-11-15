import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, Button, Alert, ScrollView } from "react-native";
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import type {
    VideoComponentType,
} from "react-native-video/src/fabric/VideoNativeComponent";
import RNCVideo from 'react-native-video'
const fontSpecs: TSFontSpecs = {
    fontFamily: undefined,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '900',
}
const width = Dimensions.get('window').width * 0.8

export function TextVideo(): JSX.Element {
    const [disableFocus, setDisableFocus] = useState(false)

    return (
        <Tester style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <TestSuite name="video">
                    <TestCase
                        itShould="poster"
                        initialState={false}
                        arrange={({ setState }) => <AddMenuPosterTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould={`posterResizeMode = {"stretch"}`}
                        initialState={false}
                        arrange={({ setState }) => <AddposterResizeModeTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="OnBuffer"
                        initialState={false}
                        arrange={({ setState }) => <AddMenuOnBufferTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="source"
                        initialState={false}
                        arrange={({ setState }) => <AddMenuMeasureTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="repeat={true}"
                        initialState={false}
                        arrange={({ setState }) => <AddMenuRepeatFalseTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="resizeMode={'contain'}"
                        initialState={false}
                        arrange={({ setState }) => <AddMenuResizeModeTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="resizeMode={'cover'}"
                        initialState={false}
                        arrange={({ setState }) => <AddMenuResizeModecoverTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="resizeMode={'stretch'}"
                        initialState={false}
                        arrange={({ setState }) => <AddMenuResizeModeStretchTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        itShould="onLoadStart"
                        initialState={false}
                        arrange={({ setState }) => <AddMenuOnLoadStartTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="onProgress"
                        initialState={false}
                        arrange={({ setState }) => <AddMenuOnProgressTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="seek"
                        initialState={false}
                        arrange={({ setState }) => <AddMenuSeekTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="onEnd"
                        initialState={false}
                        arrange={({ setState }) => <AddMenuOnEndTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        itShould="onLoad"
                        initialState={false}
                        arrange={({ setState }) => <AddMenuOnLoadTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="onReadyForDisplay"
                        initialState={false}
                        arrange={({ setState }) => <AddMenuonReadyForDisplayTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="muted={false}"
                        initialState={false}
                        arrange={({ setState }) => <AddMenuonMutedTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="controls={false}"
                        initialState={false}
                        arrange={({ setState }) => <AdddControlsTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="volume={0.2}"
                        initialState={false}
                        arrange={({ setState }) => <AddVolumeTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="disableFocus = false"
                        initialState={false}
                        arrange={({ setState }) => <AdddisableFocusTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="disableFocus =true"
                        initialState={false}
                        arrange={({ setState }) => <AdddisableFocusTrueTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="paused"
                        initialState={false}
                        arrange={({ setState }) => <AddpausedTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="onError"
                        initialState={false}
                        arrange={({ setState }) => <AddonErrorTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="onPlaybackStalled"
                        initialState={false}
                        arrange={({ setState }) => <AddonPlaybackStalledTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        itShould="onPlaybackResume"
                        initialState={false}
                        arrange={({ setState }) => <AddonPlaybackResumeTest setState={setState} disableFocus={disableFocus} setDisableFocus={setDisableFocus} />}
                        assert={({ state, expect }) => {
                            expect(state).to.be.true;
                        }}
                    />

                </TestSuite>
            </ScrollView>
        </Tester>

    );
}

const AddonPlaybackResumeTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>;
    disableFocus: boolean;
}) => {
    const { disableFocus, setDisableFocus } = props

    const videoref = useRef<React.ElementRef<VideoComponentType>>(null);
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState("")
    const addRepeat = () => {
        setShow(!show)
    }
    return (

        <View style={{
            height: 220,
            width: "100%",
            overflow: 'hidden',
            alignItems: "center"

        }}>
            <Text>{title}</Text>
            <View style={{
                height: 150,
                width: 150,
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {show ?
                    <RNCVideo
                        ref={videoref}
                        source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                        repeat={false}
                        paused={false}
                        disableFocus={disableFocus}
                        resizeMode={"contain"}
                        style={{ flex: 1 }}
                        onPlaybackResume={() => {
                            setTitle("缓冲区结束缓存")
                        }}
                    /> : null}
            </View>
            <Button title={"展示video的onPlaybackResume"} onPress={addRepeat} />
        </View>

    );

}

const AddonPlaybackStalledTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>;
    disableFocus: boolean;
}) => {
    const { disableFocus, setDisableFocus } = props
    const videoref = useRef<React.ElementRef<VideoComponentType>>(null);
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState("")
    const addRepeat = () => {
        setShow(!show)
    }
    return (

        <View style={{
            height: 220,
            width: "100%",
            overflow: 'hidden',
            alignItems: "center"

        }}>
            <Text>{title}</Text>
            <View style={{
                height: 150,
                width: 150,
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {show ?
                    <RNCVideo
                        ref={videoref}
                        source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                        //
                        repeat={false}
                        paused={false}
                        disableFocus={disableFocus}
                        resizeMode={"contain"}
                        style={{ flex: 1 }}
                        onPlaybackStalled={() => {
                            setTitle("缓冲区开始缓存")
                        }}
                    /> : null}
            </View>
            <Button title={"展示video的onPlaybackStalled"} onPress={addRepeat} />
        </View>

    );

}

const AddonErrorTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>;
    disableFocus: boolean;
}) => {
    const { disableFocus, setDisableFocus } = props

    const videoref = useRef<React.ElementRef<VideoComponentType>>(null);
    const [paused, setPaused] = useState(true)
    const [error, setError] = useState("")
    const addRepeat = () => {
        setPaused(!paused)
    }
    const [show, setShow] = useState(false)
    const addshow = () => {
        setShow(!show)
    }


    return (

        <View style={{
            height: 220,
            width: "100%",
            overflow: 'hidden',
            alignItems: "center"

        }}>
            <View style={{
                height: 150,
                width: 200,
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                <Text>断网测试error{error}</Text>
                {
                    show ? <RNCVideo
                        ref={videoref}
                        source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                        repeat={false}
                        paused={false}
                        muted={false}
                        disableFocus={disableFocus}
                        resizeMode={"contain"}
                        onError={(err: any) => {
                            setError(JSON.stringify(err))
                        }}
                        style={{ flex: 1 }}
                    /> : null
                }

            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>
                <Button title={"展示video"} onPress={addshow} />
            </View>

        </View>

    );

}
const AddMenuOnEndTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>;
    disableFocus: boolean;
}) => {
    const { disableFocus, setDisableFocus } = props

    const videoref = useRef<React.ElementRef<VideoComponentType>>(null);
    const [paused, setPaused] = useState(true)
    const [show, setShow] = useState(false)
    const addshow = () => {
        setShow(!show)
    }
    const addRepeat = () => {
        setPaused(!paused)
    }
    return (

        <View style={{
            height: 220,
            width: "100%",
            overflow: 'hidden',
            alignItems: "center"

        }}>
            <View style={{
                height: 150,
                width: 150,
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {show ?
                    <RNCVideo
                        ref={videoref}
                        source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                        repeat={false}
                        paused={paused}
                        disableFocus={disableFocus}
                        resizeMode={"contain"}
                        style={{ flex: 1 }}
                        onEnd={() => {
                            console.log("onEnd已触发")
                            Alert.alert("onEnd已触发")
                        }}
                    />
                    : null}


            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>
                <Button title={"展示video"} onPress={addshow} />
                <Button title={paused ? "播放" : "暂停"} onPress={addRepeat} />
            </View>

        </View>

    );

}

const AddpausedTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>;
    disableFocus: boolean;
}) => {
    const { disableFocus, setDisableFocus } = props

    const videoref = useRef<React.ElementRef<VideoComponentType>>(null);
    const [paused, setPaused] = useState(true)

    const addRepeat = () => {
        setPaused(!paused)
    }
    const [show, setShow] = useState(false)
    const addshow = () => {
        setShow(!show)
    }


    return (

        <View style={{
            height: 220,
            width: "100%",
            overflow: 'hidden',
            alignItems: "center"

        }}>
            <View style={{
                height: 150,
                width: 200,
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {show ?
                    <RNCVideo
                        ref={videoref}
                        source={require("./asstes/34.mp4")}
                        repeat={false}
                        paused={paused}
                        muted={false}
                        disableFocus={disableFocus}
                        resizeMode={"contain"}
                        style={{ flex: 1 }}
                    />
                    : null}


            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>
                <Button title={"展示video"} onPress={addshow} />
                <Button title={paused ? "播放" : "暂停"} onPress={addRepeat} />
            </View>
        </View>

    );

}

const AdddisableFocusTrueTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>;
    disableFocus: boolean;
}) => {

    const videoref = useRef<React.ElementRef<VideoComponentType>>(null);
    const [paused, setPaused] = useState(true)

    const addRepeat = () => {
        setPaused(!paused)
    }


    const [show, setShow] = useState(false)
    const addshow = () => {
        setShow(!show)
    }

    return (

        <View style={{
            height: 220,
            width: "100%",
            overflow: 'hidden',
            alignItems: "center"

        }}>
            <View style={{
                height: 150,
                width: 200,
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {show ?
                    <RNCVideo
                        ref={videoref}
                        disableFocus={true}
                        source={require("./asstes/34.mp4")}
                        repeat={false}
                        paused={paused}
                        muted={false}
                        resizeMode={"contain"}
                        style={{ flex: 1 }}
                    />
                    : null}

            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>
                <Button title={"展示video"} onPress={addshow} />
                <Button title={paused ? "播放" : "暂停"} onPress={addRepeat} />
            </View>
        </View>

    );

}


const AdddisableFocusTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>;
    disableFocus: boolean;
}) => {
    const videoref = useRef<React.ElementRef<VideoComponentType>>(null);
    const [paused, setPaused] = useState(true)

    const addRepeat = () => {
        setPaused(!paused)
    }
    const [show, setShow] = useState(false)
    const addshow = () => {
        setShow(!show)
    }

    return (

        <View style={{
            height: 220,
            width: "100%",
            overflow: 'hidden',
            alignItems: "center"

        }}>
            <View style={{
                height: 150,
                width: 200,
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {show ?
                    <RNCVideo
                        ref={videoref}
                        disableFocus={false}
                        source={require("./asstes/34.mp4")}
                        repeat={false}
                        paused={paused}
                        muted={false}
                        resizeMode={"contain"}
                        style={{ flex: 1 }}
                    />
                    : null}

            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>
                <Button title={"展示video"} onPress={addshow} />
                <Button title={paused ? "播放" : "暂停"} onPress={addRepeat} />
            </View>
        </View>

    );

}
const AdddControlsTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>;
    disableFocus: boolean;
}) => {
    const videoref = useRef<React.ElementRef<VideoComponentType>>(null);
    const [controls, setControls] = useState(false)

    const addControls = () => {
        setControls(!controls)
    }
    const [show, setShow] = useState(false)
    const addshow = () => {
        setShow(!show)
    }

    return (

        <View style={{
            height: 220,
            width: "100%",
            overflow: 'hidden',
            alignItems: "center"

        }}>
            <View style={{
                height: 150,
                width: 200,
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {show ?
                    <RNCVideo
                        ref={videoref}
                        disableFocus={false}
                        source={require("./asstes/34.mp4")}
                        controls={controls}
                        repeat={false}
                        paused={false}
                        muted={false}
                        resizeMode={"stretch"}
                        style={{ flex: 1 }}
                    />
                    : null}

            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>
                <Button title={"展示video"} onPress={addshow} />
                <Button title={controls ? "隐藏" : "显示"} onPress={addControls} />
            </View>
        </View>

    );

}




const AddVolumeTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>;
    disableFocus: boolean;
}) => {

    const { disableFocus, setDisableFocus } = props
    const videoref = useRef<React.ElementRef<VideoComponentType>>(null);
    const [paused, setPaused] = useState(true)
    const [volume, setVolume] = useState(1)
    const addRepeat = () => {
        setPaused(!paused)
    }
    const addVolume = () => {
        setVolume(0.2)
    }

    const [show, setShow] = useState(false)
    const addshow = () => {
        setShow(!show)
    }

    return (

        <View style={{
            height: 220,
            width: "100%",
            overflow: 'hidden',
            alignItems: "center"

        }}>
            <View style={{
                height: 150,
                width: 200,
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {show ? <RNCVideo
                    ref={videoref}
                    source={require("./asstes/34.mp4")}

                    repeat={false}
                    disableFocus={disableFocus}
                    paused={paused}
                    muted={false}
                    resizeMode={"contain"}
                    style={{ flex: 1 }}
                    volume={volume}
                /> : null}


            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>
                <Button title={"展示video"} onPress={addshow} />
                <Button title={paused ? "播放" : "暂停"} onPress={addRepeat} />

                <Button title={"音量调整为0.2"} onPress={addVolume} />
            </View>
        </View>

    );

}
const AddMenuonMutedTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>;
    disableFocus: boolean;
}) => {
    const { disableFocus, setDisableFocus } = props

    const videoref = useRef<React.ElementRef<VideoComponentType>>(null);
    const [paused, setPaused] = useState(false)

    const [muted, setMuted] = useState(false)
    const addRepeat = () => {
        setMuted(!muted)
    }
    const [show, setShow] = useState(false)
    const addshow = () => {
        setShow(!show)
    }

    return (

        <View style={{
            height: 220,
            width: "100%",
            overflow: 'hidden',
            alignItems: "center"

        }}>
            <View style={{
                height: 150,
                width: 200,
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {show ? <RNCVideo
                    ref={videoref}
                    source={require("./asstes/34.mp4")}

                    repeat={true}
                    paused={paused}
                    disableFocus={disableFocus}
                    muted={muted}
                    resizeMode={"contain"}
                    style={{ flex: 1 }}
                /> : null}

            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>
                <Button title={"展示video"} onPress={addshow} />
                <Button title={muted ? "不静音" : "静音"} onPress={addRepeat} />

            </View>

        </View>

    );

}
const AddMenuonReadyForDisplayTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>;
    disableFocus: boolean;
}) => {
    const { disableFocus, setDisableFocus } = props

    const videoref = useRef<React.ElementRef<VideoComponentType>>(null);
    const [paused, setPaused] = useState(false)

    const [show, setShow] = useState(false)
    const addRepeat = () => {
        setShow(!show)
    }

    return (

        <View style={{
            height: 220,
            width: "100%",
            overflow: 'hidden',
            alignItems: "center"

        }}>
            <View style={{
                height: 150,
                width: 150,
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {show ?
                    <RNCVideo
                        ref={videoref}
                        source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                        repeat={false}
                        paused={paused}
                        disableFocus={disableFocus}
                        resizeMode={"contain"}
                        style={{ flex: 1 }}
                        onReadyForDisplay={() => {
                            Alert.alert("视频已准备完毕")
                        }}
                    /> : null}
            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>
                <Button title={"展示video的onReadyForDisplay"} onPress={addRepeat} />
            </View>
        </View>

    );

}


const AddMenuOnLoadTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>;
    disableFocus: boolean;
}) => {
    const { disableFocus, setDisableFocus } = props

    const videoref = useRef<React.ElementRef<VideoComponentType>>(null);
    const [paused, setPaused] = useState(false)
    const [show, setShow] = useState(false)

    const addRepeat = () => {
        setShow(!show)
    }
    return (
        <View style={{
            height: 220,
            width: "100%",
            overflow: 'hidden',
            alignItems: "center"
        }}>
            <View style={{
                height: 150,
                width: 150,
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {show ?
                    <RNCVideo
                        ref={videoref}
                        source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                        repeat={false}
                        paused={paused}
                        disableFocus={disableFocus}
                        resizeMode={"contain"}
                        style={{ flex: 1 }}
                        onLoad={(param) => {
                            Alert.alert("load", JSON.stringify(param))
                            console.log(22, JSON.stringify(param))
                        }}
                    /> : null}
            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>

                <Button title={"展示video的onLoad"} onPress={addRepeat} />
            </View>
        </View>

    );

}




const AddMenuOnBufferTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>;
    disableFocus: boolean;
}) => {
    const { disableFocus, setDisableFocus } = props

    const videoref = useRef<React.ElementRef<VideoComponentType>>(null);
    const [paused, setPaused] = useState(false)
    const [load, setLoad] = useState({ load: false })
    const [show, setShow] = useState(false)
    const addshow = () => {
        setShow(!show)
    }
    return (

        <View style={{
            height: 220,
            width: "100%",
            overflow: 'hidden',
            alignItems: "center"

        }}>
            <View style={{
                height: 150,
                width: 150,
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {show ?
                    <RNCVideo
                        ref={videoref}
                        source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                        repeat={false}
                        paused={paused}
                        disableFocus={disableFocus}
                        resizeMode={"contain"}
                        style={{ flex: 1 }}
                        onBuffer={(onBufferData) => {
                            console.log(JSON.stringify(onBufferData))
                            setLoad({ load: onBufferData.isBuffering ?? false });
                        }}
                    />

                    : null}

                {load.load &&
                    <View
                        style={{ backgroundColor: 'yellow', position: 'absolute', top: 0, width: '100%', height: 220, opacity: 0.7, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>加载中动画</Text>
                    </View>}
            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>

                <Button title={"展示video"} onPress={addshow} />
            </View>
        </View>

    );

}




const AddMenuSeekTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>;
    disableFocus: boolean;
}) => {
    const { disableFocus, setDisableFocus } = props

    const videoref = useRef<React.ElementRef<VideoComponentType>>(null);
    const [timeDuration, setTimeDuration] = useState({
        currentTime: 0,
        playableDuration: 0,
        seekableDuration: 0
    })

    const addRepeat = () => {
        videoref?.current?.seek(1)
    }

    const [show, setShow] = useState(false)
    const addshow = () => {
        setShow(!show)
    }

    return (

        <View style={{
            height: 250,
            width: "100%",
            overflow: 'hidden',
            alignItems: "center"

        }}>
            <Text>currentTime:{timeDuration?.currentTime},playableDuration:{timeDuration?.playableDuration},seekableDuration:{timeDuration?.seekableDuration}</Text>
            <View style={{
                height: 150,
                width: 150,
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {show ?
                    <RNCVideo
                        ref={videoref}
                        source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                        repeat={true}
                        disableFocus={disableFocus}
                        resizeMode={"contain"}
                        style={{ flex: 1 }}
                        onProgress={(currentTime) => {
                            setTimeDuration(currentTime)
                        }}
                    />
                    : null}
            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>
                <Button title={"展示video"} onPress={addshow} />
                <Button title={"设置seek"} onPress={addRepeat} />
            </View>

        </View>

    );

}

const AddMenuOnProgressTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>;
    disableFocus: boolean;
}) => {
    const [show, setShow] = useState(false)
    const addshow = () => {
        setShow(!show)
    }
    const { disableFocus, setDisableFocus } = props
    const [timeDuration, setTimeDuration] = useState({
        currentTime: 0,
        playableDuration: 0,
        seekableDuration: 0
    })

    return (

        <View style={{
            height: 250,
            width: "100%",
            overflow: 'hidden',
            alignItems: "center"

        }}>
            <Text>currentTime:{timeDuration?.currentTime},playableDuration:{timeDuration?.playableDuration},seekableDuration:{timeDuration?.seekableDuration}</Text>
            <View style={{
                height: 150,
                width: 150,
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {show ?
                    <RNCVideo
                        source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                        repeat={true}
                        resizeMode={"contain"}
                        disableFocus={disableFocus}
                        style={{ flex: 1 }}
                        onProgress={(currentTime) => {
                            setTimeDuration(currentTime)
                        }}
                    />
                    : null}


            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>
                <Button title={"展示video"} onPress={addshow} />

            </View>


        </View>

    );

}

const AddMenuOnLoadStartTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>;
    disableFocus: boolean;
}) => {
    const { disableFocus, setDisableFocus } = props

    const [show, setShow] = useState(false)
    const addRepeat = () => {
        setShow(!show)
    }
    return (
        <View style={{
            width: "100%",
            height: 220,
            justifyContent: "center",
            alignItems: "center"
        }}>

            <View style={{
                height: 150,
                width: "100%",
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {show ? <RNCVideo
                    source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}

                    repeat={true}
                    disableFocus={disableFocus}
                    resizeMode={"contain"}
                    style={{ flex: 1 }}
                    onLoadStart={() => {
                        console.log("onLoadStart已触发")
                        Alert.alert("onLoadStart已触发")
                    }}
                /> : null}

            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>

                <Button title={"展示video"} onPress={addRepeat} />
            </View>
        </View>


    );

}


const AddposterResizeModeTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>;
    disableFocus: boolean;
}) => {
    const { disableFocus, setDisableFocus } = props
    const [show, setShow] = useState(false)
    const addRepeat = () => {
        setShow(!show)
    }
    return (
        <View style={{
            width: "100%",
            height: 220,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <View style={{
                height: 150,
                width: "100%",
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {
                    show ? <RNCVideo
                        source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                        repeat={true}
                        resizeMode={"contain"}
                        style={{ flex: 1 }}
                        disableFocus={disableFocus}
                        poster={"https://res.vmallres.com/pimages/uomcdn/CN/pms/202304/sbom/4002010007801/group/800_800_9B1356F1330EADDCB20D35D2AE1F46E0.jpg"}
                        posterResizeMode="stretch"
                    /> : null
                }

            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>

                <Button title={"展示video"} onPress={addRepeat} />
            </View>
        </View>

    );

}
const AddMenuPosterTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>,
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>,
    disableFocus: boolean,
}) => {
    const { disableFocus, setDisableFocus } = props
    const [show, setShow] = useState(false)
    const addRepeat = () => {
        setShow(!show)
    }
    return (
        <View style={{
            width: "100%",
            height: 220,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <View style={{
                height: 150,
                width: "100%",
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {
                    show ?
                        <RNCVideo
                            source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                             repeat={true}
                            disableFocus={disableFocus}
                            resizeMode={"contain"}
                            style={{ flex: 1 }}
                            poster={"https://res.vmallres.com/pimages/uomcdn/CN/pms/202304/sbom/4002010007801/group/800_800_9B1356F1330EADDCB20D35D2AE1F46E0.jpg"}
                        />
                        : null}

            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>

                <Button title={"展示video"} onPress={addRepeat} />
            </View>
        </View>

    );

}


const AddMenuResizeModeStretchTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>,
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>,
    disableFocus: boolean,
}) => {
    const { disableFocus, setDisableFocus } = props

    const [show, setShow] = useState(false)
    const addRepeat = () => {
        setShow(!show)
    }
    return (
        <View style={{
            width: "100%",
            height: 220,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <View style={{
                height: 150,
                width: "100%",
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {
                    show ?
                        <RNCVideo
                            source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                                repeat={true}
                            disableFocus={disableFocus}
                            resizeMode={"stretch"}
                            style={{ flex: 1 }}
                        />
                        : null}

            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>

                <Button title={"展示video"} onPress={addRepeat} />
            </View>
        </View>

    );

}

const AddMenuResizeModecoverTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>,
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>,
    disableFocus: boolean,
}) => {
    const { disableFocus, setDisableFocus } = props
    const [show, setShow] = useState(false)
    const addRepeat = () => {
        setShow(!show)
    }

    return (
        <View style={{
            width: "100%",
            height: 220,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <View style={{
                height: 150,
                width: "100%",
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {
                    show ?
                        <RNCVideo
                            source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                                repeat={true}
                            disableFocus={disableFocus}
                            resizeMode={"cover"}
                            style={{ flex: 1 }}
                        />
                        : null}

            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>

                <Button title={"展示video"} onPress={addRepeat} />
            </View>
        </View>

    );

}

const AddMenuResizeModeTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>,
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>,
    disableFocus: boolean,
}) => {
    const { disableFocus, setDisableFocus } = props
    const [show, setShow] = useState(false)
    const addRepeat = () => {
        setShow(!show)
    }

    return (
        <View style={{
            width: "100%",
            height: 220,
            justifyContent: "center",
            alignItems: "center"
        }}>

            <View style={{
                height: 150,
                width: "100%",
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {
                    show ?
                        <RNCVideo
                            disableFocus={disableFocus}
                            source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                                repeat={true}
                            resizeMode={"contain"}
                            style={{ flex: 1 }}
                        />
                        : null}

            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>

                <Button title={"展示video"} onPress={addRepeat} />
            </View>
        </View>


    );

}

const AddMenuRepeatFalseTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>,
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>,
    disableFocus: boolean,
}) => {
    const { disableFocus, setDisableFocus } = props

    const [repeat, setRepeat] = useState<boolean>(true)
    const [show, setShow] = useState(false)
    const addshow = () => {
        setShow(!show)
    }
    const addRepeat = () => {
        setRepeat(!repeat)
    }

    return (
        <View style={{
            width: "100%",
            height: 220,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <View style={{
                height: 150,
                width: 150,
                overflow: 'hidden',

            }}>
                {show ? <RNCVideo
                    disableFocus={disableFocus}
                    source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}

                    repeat={repeat}
                    resizeMode={'contain'}
                    style={{ flex: 1 }}
                /> : null}

            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>

                <Button title={"展示video"} onPress={addshow} />
                <Button title={"重复播放切换"} onPress={addRepeat} />
            </View>

        </View>

    );

}






const AddMenuMeasureTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>,
    setDisableFocus: React.Dispatch<React.SetStateAction<boolean>>,
    disableFocus: boolean,
}) => {
    const [show, setShow] = useState(false)
    const addshow = () => {
        setShow(!show)
    }
    const { disableFocus, setDisableFocus } = props
    const [measureText, setMeasureText] = useState<{
        width: number,
        height: number,
    }>({
        width: 0,
        height: 0,
    })

    return (
        <View style={{
            width: "100%",
            height: 220,
            justifyContent: "center",
            alignItems: "center"
        }}>

            <View style={{
                height: 150,
                width: "100%",
                overflow: 'hidden',
                justifyContent: 'center',
            }}>

                {show ? <RNCVideo
                    source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}

                    disableFocus={disableFocus}
                    repeat={false}
                    resizeMode={'contain'}
                    style={{ flex: 1 }}
                /> : null}

            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>

                <Button title={"展示video"} onPress={addshow} />
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        justifyContent: 'center',
    },

});

