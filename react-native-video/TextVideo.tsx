import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, Button, Alert } from "react-native";
import { TestSuite, TestCase } from '@rnoh/testerino';
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
    return (
        <TestSuite name="video">
            <TestCase
                itShould="poster"
                initialState={false}
                arrange={({ setState }) => <AddMenuPosterTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            <TestCase
                itShould="OnBuffer"
                initialState={false}
                arrange={({ setState }) => <AddMenuOnBufferTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            <TestCase
                itShould="source"
                initialState={false}
                arrange={({ setState }) => <AddMenuMeasureTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            <TestCase
                itShould="repeat={true}"
                initialState={false}
                arrange={({ setState }) => <AddMenuRepeatFalseTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            <TestCase
                itShould="resizeMode={'contain'}"
                initialState={false}
                arrange={({ setState }) => <AddMenuResizeModeTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            <TestCase
                itShould="resizeMode={'cover'}"
                initialState={false}
                arrange={({ setState }) => <AddMenuResizeModecoverTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            <TestCase
                itShould="resizeMode={'stretch'}"
                initialState={false}
                arrange={({ setState }) => <AddMenuResizeModeStretchTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />

            <TestCase
                itShould="onLoadStart"
                initialState={false}
                arrange={({ setState }) => <AddMenuOnLoadStartTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            <TestCase
                itShould="onProgress"
                initialState={false}
                arrange={({ setState }) => <AddMenuOnProgressTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            <TestCase
                itShould="seek"
                initialState={false}
                arrange={({ setState }) => <AddMenuSeekTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            <TestCase
                itShould="onEnd"
                initialState={false}
                arrange={({ setState }) => <AddMenuOnEndTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />

            <TestCase
                itShould="onLoad"
                initialState={false}
                arrange={({ setState }) => <AddMenuOnLoadTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            <TestCase
                itShould="onReadyForDisplay"
                initialState={false}
                arrange={({ setState }) => <AddMenuonReadyForDisplayTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            <TestCase
                itShould="muted={false}"
                initialState={false}
                arrange={({ setState }) => <AddMenuonMutedTest setState={setState} />}
                assert={({ state, expect }) => {
                    expect(state).to.be.true;
                }}
            />
            
        </TestSuite>
    );
}

//https://vod.vmall.com/asset/073cc2bab11eb7417e13a722bd9559d7/fe675e3e740a04d3a5295441af743036.mp4


const AddMenuonMutedTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const videoref = useRef<React.ElementRef<VideoComponentType>>(null);
    const [paused, setPaused] = useState(false)

    const [muted, setMuted] = useState(false)
    const addRepeat = () => {
        setMuted(!muted)
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
               
                    <RNCVideo
                        ref={videoref}
                         source={{ uri: "https://res.vmallres.com//uomcdn/CN/cms/202210/C75C7E20060F3E909F2998E13C3ABC03.mp4" }}
                        //source={{ uri: "https://vod.vmall.com/asset/073cc2bab11eb7417e13a722bd9559d7/fe675e3e740a04d3a5295441af743036.mp4" }}
                        controls={true}
                        repeat={true}
                        paused={paused}
                        muted={muted}
                        resizeMode={"contain"}
                        style={{ flex: 1 }}
                    /> 
            </View>
            <Button title={muted?"不静音":"静音"} onPress={addRepeat} />
        </View>

    );

}
const AddMenuonReadyForDisplayTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
                        controls={true}
                        repeat={false}
                        paused={paused}
                        resizeMode={"contain"}
                        style={{ flex: 1 }}
                        onReadyForDisplay={() => {
                            Alert.alert("视频已准备完毕")
                        }}
                    /> : null}
            </View>
            <Button title={"展示video的onReadyForDisplay"} onPress={addRepeat} />
        </View>

    );

}


const AddMenuOnLoadTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
                        controls={true}
                        repeat={false}
                        paused={paused}
                        resizeMode={"contain"}
                        style={{ flex: 1 }}
                        onLoad={(param) => {
                            Alert.alert("load", JSON.stringify(param))
                            console.log(22, JSON.stringify(param))
                        }}
                    /> : null}
            </View>
            <Button title={"展示video的onLoad"} onPress={addRepeat} />
        </View>

    );

}




const AddMenuOnBufferTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const videoref = useRef<React.ElementRef<VideoComponentType>>(null);
    const [paused, setPaused] = useState(false)
    const [load, setLoad] = useState({ load: false })
    const addRepeat = () => {
        setPaused(!paused)
    }
    return (

        <View style={{
            height: 150,
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
                <RNCVideo
                    ref={videoref}
                    source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                    controls={true}
                    repeat={false}
                    paused={paused}
                    resizeMode={"contain"}
                    style={{ flex: 1 }}
                    onBuffer={(onBufferData) => {
                        console.log(JSON.stringify(onBufferData))
                        setLoad({ load: onBufferData.isBuffering ?? false });
                    }}
                />

                {load.load &&
                    <View
                        style={{ backgroundColor: 'yellow', position: 'absolute', top: 0, width: '100%', height: 220, opacity: 0.7, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>加载中动画</Text>
                    </View>}
            </View>
            {/* <Button title={paused ? "播放" : "暂停"} onPress={addRepeat} /> */}
        </View>

    );

}

const AddMenuOnEndTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const videoref = useRef<React.ElementRef<VideoComponentType>>(null);
    const [paused, setPaused] = useState(true)
    const [show, setShow] = useState(false)
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
                <RNCVideo
                    ref={videoref}
                    source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                    controls={true}
                    repeat={false}
                    paused={paused}
                    resizeMode={"contain"}
                    style={{ flex: 1 }}
                    onEnd={() => {
                        console.log("onEnd已触发")
                        Alert.alert("onEnd已触发")
                    }}
                />

            </View>
            <Button title={paused ? "播放" : "暂停"} onPress={addRepeat} />
        </View>

    );

}


const AddMenuSeekTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const videoref = useRef<React.ElementRef<VideoComponentType>>(null);
    const [timeDuration, setTimeDuration] = useState({
        currentTime: 0,
        playableDuration: 0,
        seekableDuration: 0
    })

    const addRepeat = () => {
        videoref?.current?.seek(1)
    }

    return (

        <View style={{
            height: 220,
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
                <RNCVideo
                    ref={videoref}
                    source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                    controls={true}
                    repeat={true}
                    resizeMode={"contain"}
                    style={{ flex: 1 }}
                    onProgress={(currentTime) => {
                        setTimeDuration(currentTime)
                    }}
                />

            </View>
            <Button title={"设置seek"} onPress={addRepeat} />
        </View>

    );

}

const AddMenuOnProgressTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [timeDuration, setTimeDuration] = useState({
        currentTime: 0,
        playableDuration: 0,
        seekableDuration: 0
    })

    return (

        <View style={{
            height: 190,
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
                <RNCVideo
                    source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                    controls={true}
                    repeat={true}
                    resizeMode={"contain"}
                    style={{ flex: 1 }}
                    onProgress={(currentTime) => {
                        setTimeDuration(currentTime)
                    }}
                />

            </View>



        </View>

    );

}

const AddMenuOnLoadStartTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [show, setShow] = useState(false)
    const addRepeat=()=>{
        setShow(!show)
    }
    return (
        <View style={{
            width: "100%",
            height: 190,
            justifyContent: "center",
            alignItems: "center"
        }}>

            <View style={{
                height: 150,
                width: "100%",
                overflow: 'hidden',
                justifyContent: 'center',

            }}>
                {show? <RNCVideo
                    source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                    controls={true}
                    repeat={true}
                    resizeMode={"contain"}
                    style={{ flex: 1 }}
                    onLoadStart={() => {
                        console.log("onLoadStart已触发")
                        Alert.alert("onLoadStart已触发")
                    }}
                />:null}
               
            </View>
            <Button title={"展示video"} onPress={addRepeat} />
        </View>


    );

}
const AddMenuPosterTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

    return (

        <View style={{
            height: 150,
            width: "100%",
            overflow: 'hidden',
            justifyContent: 'center',

        }}>
            <RNCVideo
                source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                controls={true}
                repeat={true}
                resizeMode={"contain"}
                style={{ flex: 1 }}
                poster={"https://res.vmallres.com/pimages/uomcdn/CN/pms/202304/sbom/4002010007801/group/800_800_9B1356F1330EADDCB20D35D2AE1F46E0.jpg"}
            />
        </View>

    );

}


const AddMenuResizeModeStretchTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {


    return (

        <View style={{
            height: 150,
            width: "100%",
            overflow: 'hidden',
            justifyContent: 'center',

        }}>
            <RNCVideo
                source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                controls={true}
                repeat={true}
                resizeMode={"stretch"}
                style={{ flex: 1 }}
            />
        </View>

    );

}

const AddMenuResizeModecoverTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {


    return (

        <View style={{
            height: 150,
            width: "100%",
            overflow: 'hidden',
            justifyContent: 'center',

        }}>
            <RNCVideo
                source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                controls={true}
                repeat={true}
                resizeMode={"cover"}
                style={{ flex: 1 }}
            />
        </View>

    );

}

const AddMenuResizeModeTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {


    return (

        <View style={{
            height: 150,
            width: "100%",
            overflow: 'hidden',
            justifyContent: 'center',

        }}>
            <RNCVideo
                source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                controls={true}
                repeat={true}
                resizeMode={"contain"}
                style={{ flex: 1 }}
            />
        </View>

    );

}

const AddMenuRepeatFalseTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [repeat, setRepeat] = useState<boolean>(true)

    const addRepeat = () => {
        setRepeat(!repeat)
    }

    return (
        <View style={{
            width: "100%",
            height: 190,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <View style={{
                height: 150,
                width: 150,
                overflow: 'hidden',

            }}>
                <RNCVideo
                    source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                    controls={true}
                    repeat={repeat}
                    resizeMode={'contain'}
                    style={{ flex: 1 }}
                />
            </View>
            <Button title={"重复播放切换"} onPress={addRepeat} />
        </View>

    );

}






const AddMenuMeasureTest = (props: {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [measureText, setMeasureText] = useState<{
        width: number,
        height: number,
    }>({
        width: 0,
        height: 0,
    })

    return (
        <View style={{
            height: 150,
            width: "100%",
            overflow: 'hidden',
            justifyContent: 'center',
        }}>
            <RNCVideo
                source={{ uri: "https://971-cn-north-4.cdn-vod.huaweicloud.com/asset/c726f001f9b6c33483dc694002fd5759/09dff810b88651acd29c49cbcec21079.mp4" }}
                controls={true}
                repeat={false}
                resizeMode={'contain'}
                style={{ flex: 1 }}
            />
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

