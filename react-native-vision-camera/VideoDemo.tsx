import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

export default function PhotoDemo() {
    const device = useCameraDevice('back');
    const { hasPermission, requestPermission } = useCameraPermission();
    const camera = useRef<Camera>(null);

    if (!device) {
        return (<Text>No Devices</Text>)
    }

    if (!hasPermission) {
        requestPermission();
    };


    const [audio, setAudio] = useState(true)
    const [flash, setFlash] = useState<'off' | 'on'>('off')
    const [preview, setPreview] = useState(true);
    const [videoCodec, setVideoCodec] = useState<'h265' | 'h264'>('h265')
    const [videoStabilizationMode, setVideoStabilizationMode] = useState<'off' | 'standard' | 'cinematic' | 'cinematic-extended' | 'auto'>('auto')
    const [videoHdr, setVideoHdr] = useState(false)
    const [androidPreviewViewType, setAndroidPreviewViewType] = useState<'surface-view' | 'texture-view'>('surface-view');

    const [startStatus, seteStartStatus] = useState('end')
    const [eq, setEq] = useState(0)

    const onStart = async () => {
        seteStartStatus('start')
        await camera.current?.startRecording({
            fileType: 'mp4',
            flash: flash,
            onRecordingError: (error) => {
                seteStartStatus('end')
                console.log(`videoStartParmas CameraSession: onRecordingError.${JSON.stringify(error)}`);
            },
            onRecordingFinished: (video) => {
                seteStartStatus('end')
                console.log(`CameraSession: onRecordingFinished ${JSON.stringify(video)}}`);
            },
            videoBitRate: 'extra-low',
            videoCodec: videoCodec
        });
    }
    const onPause = async () => {
        seteStartStatus('pause')
        camera.current?.pauseRecording();
    }
    const onStop = async () => {
        seteStartStatus('end')
        camera.current?.stopRecording();
    }
    const onResume = async () => {
        seteStartStatus('start')
        camera.current?.resumeRecording();
    }
    const onChangeVideoCodeC = async () => {
        const code = videoCodec === 'h264' ? 'h265' : 'h264'
        setVideoCodec(code)
    }

    const onChangeAudio = async () => { setAudio(!audio) }
    const onChangeFlash = async () => { setFlash(flash === 'off' ? 'on' : 'off') }
    const changePreview = () => { setPreview(!preview) }

    const onChangeVideoMode = async () => {
        const modes = ['off', 'standard', 'cinematic', 'cinematic-extended', 'auto']
        eq >= modes.length - 1 ? setEq(0) : setEq(eq + 1)
        const mode = modes[eq] as "off" | "standard" | "cinematic" | "cinematic-extended" | "auto";
        setVideoStabilizationMode(mode)
        console.log(videoStabilizationMode)
    }

    const onChangeVideoHdr = async () => {
        setVideoHdr(!videoHdr)
        console.log(videoHdr)
    }
    const changeAndroidPreviewViewType = () => { setAndroidPreviewViewType(androidPreviewViewType === 'surface-view' ? 'texture-view' : 'surface-view') }

    return (
        <View style={{ flex: 1 }}>
            <Camera
                style={{ flex: 1 }}
                ref={camera}
                isActive={true}
                preview={preview}
                device={device}
                video={true}
                audio={audio}
                videoHdr={videoHdr}
                videoStabilizationMode={videoStabilizationMode}
                onError={(err) => { console.log('test' + JSON.stringify(err)) }}
                fps={30}
            />

            <View style={style.btnsWrap}>
                <View>
                    {
                        videoHdr && videoCodec === 'h264' ?
                            <Text>videoHdr为true时，videoCodeC只能设置为h265; </Text> :
                            <View style={style.btns}>
                                {startStatus === 'end' ? <Button title='开始' onPress={onStart}></Button> : ''}
                                {startStatus === 'start' ? <Button title='暂停' onPress={onPause}></Button> : ''}
                                {startStatus === 'pause' ? <Button title='恢复' onPress={onResume}></Button> : ''}
                                {startStatus !== 'end' ? <Button title='停止' onPress={onStop}></Button> : ''}
                            </View>
                    }
                    <Text>fps: 30</Text>
                </View>
                <View style={style.btns2}>
                    <Button title={`flash:${flash}`} onPress={onChangeFlash}></Button>
                    <Button title={`codec:${videoCodec}`} onPress={onChangeVideoCodeC}></Button>
                    <Button title={`audio:${audio}`} onPress={onChangeAudio}></Button>
                    <Button title={`preview:${preview}`} onPress={changePreview}></Button>
                    <Button title={`hdr:${videoHdr}`} onPress={onChangeVideoHdr}></Button>
                    <Button title={`mode:${videoStabilizationMode}`} onPress={onChangeVideoMode}></Button>
                    <Button title={`androidPreviewViewType:${androidPreviewViewType}`} onPress={changeAndroidPreviewViewType}></Button>
                </View>

            </View>

        </View >
    )
}

const style = StyleSheet.create({
    btnsWrap: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        zIndex: 999999,
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 10,
        padding: 5
    },
    btns2: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 5,
        padding: 10
    },
})