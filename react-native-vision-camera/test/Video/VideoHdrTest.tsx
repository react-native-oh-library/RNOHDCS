import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

export function VideoHdrTest() {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();
  const camera = useRef<Camera>(null);
  const format = useCameraFormat(device, [
    {videoResolution: {width: 1920, height: 1080}},
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
  const [eq, setEq] = useState(0);
  const [videoFile, setVideoFile] = useState<string>('');
  const [videoPath, setVideoPath] = useState<string>('');

  const onStart = async () => {
    setVideoPath('');
    setVideoFile('');
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
        video && setVideoFile(JSON.stringify(video));
        video?.path && setVideoPath(video.path);
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

  const onChangeVideoHdr = async () => {
    setVideoHdr(v => !v);
  };

  return (
    <Tester>
      <TestSuite name="VideoHdrTest">
        <TestCase itShould={`是否开启hdr：${videoHdr ? '是' : '否'}`}>
          <View>
            <Text>注意：先设置参数，后点击开始按钮</Text>
            <Text>录像结果:{videoFile}</Text>
          </View>
          {videoPath && (
            <View style={{height: 50}}>
              <Button
                title="SaveAsset"
                onPress={() => {
                  CameraRoll.saveAsset(videoPath).then(() => {
                    setTimeout(() => {
                      setVideoPath('');
                      setVideoFile('');
                    }, 500);
                  });
                }}
              />
            </View>
          )}
          <Camera
            style={style.cameraPreview}
            ref={camera}
            isActive={true}
            preview={preview}
            device={device}
            video={true}
            audio={false}
            videoHdr={videoHdr}
            videoStabilizationMode={videoStabilizationMode}
            onError={err => {
              console.log('test' + JSON.stringify(err));
            }}
            fps={30}
            format={format}
          />

          <View style={style.actionBtn}>
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

            <Button
              title={`hdr:${videoHdr}`}
              onPress={onChangeVideoHdr}></Button>
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
}

const style = StyleSheet.create({
cameraPreview: {width: '100%', aspectRatio: 56 / 100},
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
