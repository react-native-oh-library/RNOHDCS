import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {QRreader, QRscanner} from 'react-native-qr-decode-image-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

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
                    QRreader()
                      .then(res => {
                        console.log(JSON.stringify(res), 'click');
                        setReader(res?.[0]?.originalValue);
                        setState(res?.[0]?.originalValue);
                      })
                      .catch(error => {
                        console.log(error);
                      });
                  }}
                  title="点击选择二维码照片 "
                />
                <Text style={{fontSize: 40}}>{reader}</Text>
              </View>
            );
          }}
          assert={async ({expect, state}) => {
            expect(state).to.be.eq(reader);
          }}
        />
      </TestSuite>

      <TestCase
        itShould="QRScaner"
        tags={['C_API']}
        initialState={undefined as any}
        arrange={({setState}) => {
          return (
            <View>
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
                  //   cornerColor="red" // 扫描框角落颜色
                  // borderColor="green" //  边框颜色
                  // borderWidth={10}  // 扫描框边框宽度 默认是0 是0的话边框颜色不显示
                  //   maskColor="gray" //遮罩层颜色
                  // isShowScanBar={true}  //是否显示扫描线
                  //   hintText={null} // 提示文字
                  // hintTextStyle={{color:"red",fontSize:20}} //提示字符串样式
                  // hintTextPosition={50} // 提示文本位置
                  // scanBarMargin={26}  //扫描线左边距和右边距
                  // scanBarHeight={10}   //扫描线高度
                  // scanBarColor="blue"  //扫描线颜色
                  // scanBarAnimateTime={2500}  //扫描线时间
                  // bottomHeight={200}  // 底部预留高度
                  // cornerOffsetSize={3}  // ?
                  // cornerBorderWidth={1}  // 角落边框宽度
                  // cornerBorderLength={30}  // 角落边框长度
                  //   rectHeight={200} //扫描框高度
                  //   rectWidth={200} //扫描框宽度
                  // finderX={20} // 扫描框X轴偏移量
                  //   finderY={20} // 扫描框Y轴偏移量
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
    </Tester>
  );
};
