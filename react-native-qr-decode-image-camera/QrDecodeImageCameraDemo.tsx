import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {QRreader, QRscanner} from 'react-native-qr-decode-image-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';
import { launchImageLibrary } from 'react-native-image-picker';
export const QRreaderExp = () => {
  const [reader, setReader] = useState<any>('');
  const [scanned, setScanned] = useState<boolean>(false);
  const [flashMode, setFlashMode] = useState<boolean | null>(null); //初始值必须为null;
  const [textInfo, setTextInfo] = useState<string>('');

  return (
    <Tester>
      <TestSuite name="qr-decode-image-camera">
        <TestCase
          itShould="QRReader"
          tags={['C_API']}
          initialState={undefined as any}
          arrange={({setState}) => {
            return (
              <View>
                <Button
                  onPress={() => {
                    launchImageLibrary({ mediaType: 'photo', selectionLimit: 1 }, (data) => {
                      if (data.assets?.length) {
                        const path = {
                          uri:data.assets[0].originalPath
                        }
                        QRreader(path)
                        .then(res => {
                          setReader(res?.[0]?.originalValue);
                          setState(res?.[0]?.originalValue);
                        })
                        .catch(error => {
                          console.log(error);
                        });
                      }
                    })
                  }}
                  title="点击选择二维码照片 "
                />
                <Text style={{fontSize: 20}}>{reader}</Text>
              </View>
            );
          }}
          assert={async ({expect, state}) => {
            expect(state).to.be.eq(reader);
          }}
        />
        <TestCase
          itShould="QRScaner"
          tags={['C_API']}
          initialState={undefined as any}
          arrange={({setState}) => {
            return (
              <View >
                <Button
                  onPress={() => {
                    setTextInfo('');
                    setScanned(true); // 开启摄像头
                  }}
                  title="点击扫码 "
                />
                {scanned && (
                  <QRscanner
                    onRead={e => {
                      console.log(e?.nativeEvent?.result, 'click onRead');
                      setTextInfo(e?.nativeEvent?.result);
                      setState(e?.nativeEvent?.result);
                      setScanned(false);
                    }}
                    flashMode={flashMode} //闪光灯
                    renderTopView={() => (
                      <View
                        style={{
                          height: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#0000004D',
                        }}>
                        <Text style={{fontSize: 18, color: 'green'}}>
                          将二维码放入框内，即可自动扫描
                        </Text>
                      </View>
                    )}
                    renderBottomView={() => (
                      <View
                        style={{
                          height: 100,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#0000004D',
                        }}>
                        <Text
                          style={{fontSize: 18, color: 'red'}}
                          onPress={() => {
                            setFlashMode(!flashMode);
                            console.log('click 点击开启/关闭闪光灯');
                          }}>
                          点击开启/关闭闪光灯
                        </Text>
                      </View>
                    )}
                  />
                )}
                <Text style={{fontSize: 20, color: 'red'}}>{textInfo}</Text>
              </View>
            );
          }}
          assert={async ({expect, state}) => {
            expect(state).to.be.eq(textInfo);
          }}
        />
      </TestSuite>
    </Tester>
  );
};