import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';

export function VideoDemo() {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();
  const camera = useRef<Camera>(null);
  const format = useCameraFormat(device, [
    {videoResolution: {width: 3048, height: 2160}},
    {fps: 30},
  ]);
  if (!device) {
    return <Text>No Devices</Text>;
  }

  if (!hasPermission) {
    requestPermission();
  }

  const [audio, setAudio] = useState(true);
  const [flash, setFlash] = useState<'off' | 'on'>('off');
  const [preview, setPreview] = useState(true);
  const [videoCodec, setVideoCodec] = useState<'h265' | 'h264'>('h265');
  const [videoStabilizationMode, setVideoStabilizationMode] = useState<
    'off' | 'standard' | 'cinematic' | 'cinematic-extended' | 'auto'
  >('auto');
  const [videoHdr, setVideoHdr] = useState(false);

  const [startStatus, seteStartStatus] = useState('end');

  const onStart = async () => {
    seteStartStatus('start');
    await camera.current?.startRecording({
      fileType: 'mp4',
      flash: flash,
      onRecordingError: error => {
        seteStartStatus('end');
        console.log(
          `videoStartParmas CameraSession: onRecordingError.${JSON.stringify(
            error,
          )}`,
        );
      },
      onRecordingFinished: video => {
        seteStartStatus('end');
        console.log(
          `CameraSession: onRecordingFinished ${JSON.stringify(video)}}`,
        );
      },
      videoBitRate: 'extra-low',
      videoCodec: videoCodec,
    });
  };
  const onPause = async () => {
    seteStartStatus('pause');
    camera.current?.pauseRecording();
  };
  const onStop = async () => {
    seteStartStatus('end');
    camera.current?.stopRecording();
  };
  const onResume = async () => {
    seteStartStatus('start');
    camera.current?.resumeRecording();
  };

  return (
    <>
      <Camera
        style={style.cameraPreview}
        ref={camera}
        isActive={true}
        preview={preview}
        device={device}
        video={true}
        audio={audio}
        videoHdr={videoHdr}
        videoStabilizationMode={videoStabilizationMode}
        onError={err => {
          console.log('test' + JSON.stringify(err));
        }}
        fps={30}
        format={format}
      />

      <View style={style.actionBtn}>
        <View>
          {videoHdr && videoCodec === 'h264' ? (
            <Text>videoHdr为true时，videoCodeC只能设置为h265; </Text>
          ) : (
            <>
              {startStatus === 'end' ? (
                <Button title="开始" onPress={onStart}></Button>
              ) : (
                ''
              )}
              {startStatus === 'start' ? (
                <Button title="暂停" onPress={onPause}></Button>
              ) : (
                ''
              )}
              {startStatus === 'pause' ? (
                <Button title="恢复" onPress={onResume}></Button>
              ) : (
                ''
              )}
              {startStatus !== 'end' ? (
                <Button title="停止" onPress={onStop}></Button>
              ) : (
                ''
              )}
            </>
          )}
          <Text>fps: 30</Text>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  cameraPreview: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  actionBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    gap: 5,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
});
