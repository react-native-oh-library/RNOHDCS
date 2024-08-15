import React, {useState} from 'react';
import {Button, View, Text, Alert, ScrollView,Switch} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {QRreader, QRscanner} from 'react-native-qr-decode-image-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';
import {launchImageLibrary} from 'react-native-image-picker';
const Stack = createStackNavigator();
export const QRreaderExp = ({navigation}) => {
  const [reader, setReader] = useState<any>('');
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
                    launchImageLibrary(
                      {mediaType: 'photo', selectionLimit: 1},
                      data => {
                        if (data.assets?.length) {
                          const path = {
                            uri: data.assets[0].originalPath,
                          };
                          QRreader(path)
                            .then(res => {
                              setReader(res?.[0]?.originalValue);
                              setState(res?.[0]?.originalValue);
                            })
                            .catch(error => {
                              console.log(error);
                            });
                        }
                      },
                    );
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
              <View>
                <Button
                  onPress={() => {
                    setTextInfo('');
                    navigation.navigate('QRscannerExp');
                  }}
                  title="点击扫码"
                />
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

export const QRscannerExp = () => {
  const [flashMode, setFlashMode] = useState<boolean | null>(null);
  const [maskColor, setMaskColor] = useState('#0000004D');
  const [borderColor, setBorderColor] = useState('#0000004D');
  const [cornerColor, setCornerColor] = useState('#22ff00');
  const [borderWidth, setBorderWidth] = useState(0);
  const [cornerBorderWidth, setCornerBorderWidth] = useState(4);
  const [cornerBorderLength, setCornerBorderLength] = useState(20);
  const [rectHeight, setRectHeight] = useState(200);
  const [rectWidth, setRectWidth] = useState(200);
  const [finderX, setFinderX] = useState(0);
  const [finderY, setFinderY] = useState(0);
  const [isCornerOffset, setIsCornerOffset] = useState(true);
  const [cornerOffsetSize, setCornerOffsetSize] = useState(1);
  const [bottomHeight, setBottomHeight] = useState(100);
  const [scanBarAnimateTime, setScanBarAnimateTime] = useState(2500);
  const [scanBarColor, setScanBarColor] = useState('#22ff00');
  const [scanBarImage, setScanBarImage] = useState<any>(null);
  const [scanBarHeight, setScanBarHeight] = useState(1.5);
  const [scanBarMargin, setScanBarMargin] = useState(6);
  const [hintText, setHintText] = useState(
    'Put the QR code / bar code into the box and it will scan automatically',
  );
  const [hintTextStyle, setHintTextStyle] = useState({
    color: '#fff',
    fontSize: 14,
    backgroundColor: 'transparent',
  });
  const [hintTextPosition, setHintTextPosition] = useState(130);
  const [isShowScanBar, setIsShowScanBar] = useState(true);
  const [topViewStyle, setTopViewStyle] = useState<any>(null);
  const [bottomViewStyle, setBottomViewStyle] = useState<any>({height: 200});
  const [zoom, setZoom] = useState(0.2);
  const [isRepeatScan, setIsRepeatScan] = useState(false);
  const [scanRes, setSacnres] = useState('');
  return (
    <QRscanner
      onRead={e => {
        console.log("1111111111",e)
        if (isRepeatScan) {
          setSacnres(JSON.stringify(e));
        } else {
          setSacnres(JSON.stringify(e));
        }
      }}
      isRepeatScan={isRepeatScan} //是否重复扫描
      zoom={zoom} //相机聚焦值
      flashMode={flashMode} //闪光灯
      maskColor={maskColor} //遮罩层颜色
      borderColor={borderColor} //边框颜色
      cornerColor={cornerColor} //四个角的边框颜色
      borderWidth={borderWidth} //边框宽度
      cornerBorderWidth={cornerBorderWidth} //四个角的边框宽度
      cornerBorderLength={cornerBorderLength} //四个角的边框长度
      rectHeight={rectHeight} //扫描框的高度
      rectWidth={rectWidth} //扫描框的宽度
      finderX={finderX} //扫描框的x坐标
      finderY={finderY} //扫描框的y坐标
      isCornerOffset={isCornerOffset} //角是否偏移
      cornerOffsetSize={cornerOffsetSize} //角偏移量
      bottomHeight={bottomHeight} //底部视图的高度
      scanBarAnimateTime={scanBarAnimateTime} //扫描线动画时间
      scanBarColor={scanBarColor} //扫描线颜色
      scanBarImage={scanBarImage} //扫描线图片
      scanBarHeight={scanBarHeight} //扫描线宽度
      scanBarMargin={scanBarMargin} //扫描线的左右边距
      hintText={hintText} //提示文字
      hintTextStyle={hintTextStyle} //提示字符串样式
      hintTextPosition={hintTextPosition} //提示文本位置
      isShowScanBar={isShowScanBar} //是否显示扫描线
      topViewStyle={topViewStyle}
      bottomViewStyle={bottomViewStyle}
      renderTopView={() => (
        <View
          style={{
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0000004D',
          }}>
          <Text style={{fontSize: 18, color: 'green'}}>渲染顶部视图</Text>
          <Text style={{fontSize: 18, color: 'red'}}>扫描结果:{scanRes}</Text>
        </View>
      )}
      renderBottomView={() => (
        <View
          style={{
            backgroundColor: '#0000004D',
          }}>
          <ScrollView>
            <Text style={{fontSize: 18, color: 'red'}}>渲染底部视图</Text>
            <Button
              title=" 点击开启/关闭闪光灯"
              style={{fontSize: 18, color: 'red'}}
              onPress={() => {
                setFlashMode(!flashMode);
                console.log('click 点击开启/关闭闪光灯');
              }}
            />
            <Button
              title={`是否重复扫描(${isRepeatScan ? '是' : '否'})`}
              onPress={() => {
                if (isRepeatScan) {
                  setIsRepeatScan(false);
                } else {
                  setIsRepeatScan(true);
                }
              }}
            />
            <Button
              title="更改遮罩层颜色"
              onPress={() => {
                if (maskColor === '#0000004D') {
                  setMaskColor('#0050009D');
                } else {
                  setMaskColor('#0000004D');
                }
              }}
            />
            <Button
              title="更改边框颜色(默认无宽度)"
              onPress={() => {
                if (borderColor === '#0000004D') {
                  setBorderColor('red');
                } else {
                  setBorderColor('#0000004D');
                }
              }}
            />
            <Button
              title="更改四角边框颜色"
              onPress={() => {
                if (cornerColor === '#22ff00') {
                  setCornerColor('red');
                } else {
                  setCornerColor('#22ff00');
                }
              }}
            />
            <Button
              title="边框宽度"
              onPress={() => {
                if (borderWidth === 0) {
                  setBorderWidth(1);
                } else {
                  setBorderWidth(0);
                }
              }}
            />
            <Button
              title="扫描框角边框宽度"
              onPress={() => {
                if (cornerBorderWidth === 4) {
                  setCornerBorderWidth(6);
                } else {
                  setCornerBorderWidth(4);
                }
              }}
            />
            <Button
              title="扫描框角边框长度"
              onPress={() => {
                if (cornerBorderLength === 20) {
                  setCornerBorderLength(30);
                } else {
                  setCornerBorderLength(20);
                }
              }}
            />
            <Button
              title="扫描框高度"
              onPress={() => {
                if (rectHeight === 200) {
                  setRectHeight(300);
                } else {
                  setRectHeight(200);
                }
              }}
            />
            <Button
              title="扫描框宽度"
              onPress={() => {
                if (rectWidth === 200) {
                  setRectWidth(300);
                } else {
                  setRectWidth(200);
                }
              }}
            />
            <Button
              title="扫描框的x坐标"
              onPress={() => {
                if (finderX === 0) {
                  setFinderX(20);
                } else {
                  setFinderX(0);
                }
              }}
            />
            <Button
              title="扫描框的y坐标"
              onPress={() => {
                if (finderY === 0) {
                  setFinderY(20);
                } else {
                  setFinderY(0);
                }
              }}
            />
            <Button
              title="角是否偏移"
              onPress={() => {
                if (isCornerOffset === true) {
                  setIsCornerOffset(false);
                } else {
                  setIsCornerOffset(true);
                }
              }}
            />
            <Button
              title="角偏移量"
              onPress={() => {
                if (cornerOffsetSize === 1) {
                  setCornerOffsetSize(30);
                } else {
                  setCornerOffsetSize(1);
                }
              }}
            />
            <Button
              title="底部视图高度"
              onPress={() => {
                if (bottomHeight === 100) {
                  setBottomHeight(200);
                } else {
                  setBottomHeight(100);
                }
              }}
            />
            <Button
              title="扫描动画时间"
              onPress={() => {
                if (scanBarAnimateTime === 2500) {
                  setScanBarAnimateTime(4500);
                } else {
                  setScanBarAnimateTime(2500);
                }
              }}
            />
            <Button
              title="扫描线颜色"
              onPress={() => {
                if (scanBarColor === '#22ff00') {
                  setScanBarColor('#ff0000');
                } else {
                  setScanBarColor('#22ff00');
                }
              }}
            />
            <Button
              title="扫描线图像"
              onPress={() => {
                if (scanBarImage === null) {
                  setScanBarImage({
                    uri: 'https://img1.baidu.com/it/u=2344902172,956617977&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=400',
                  });
                } else {
                  setScanBarImage(null);
                }
              }}
            />
            <Button
              title="扫描线高度"
              onPress={() => {
                if (scanBarHeight === 1.5) {
                  setScanBarHeight(6);
                } else {
                  setScanBarHeight(1.5);
                }
              }}
            />
            <Button
              title="扫描线左边距和右边距"
              onPress={() => {
                if (scanBarMargin === 6) {
                  setScanBarMargin(12);
                } else {
                  setScanBarMargin(6);
                }
              }}
            />
            <Button
              title="提示文字"
              onPress={() => {
                if (
                  hintText ===
                  'Put the QR code / bar code into the box and it will scan automatically'
                ) {
                  setHintText('this is a text');
                } else {
                  setHintText(
                    'Put the QR code / bar code into the box and it will scan automatically',
                  );
                }
              }}
            />
            <Button
              title="提示字符串样式"
              onPress={() => {
                if (hintTextStyle.color === '#fff') {
                  setHintTextStyle({
                    color: 'red',
                    fontSize: 24,
                    backgroundColor: 'transparent',
                  });
                } else {
                  setHintTextStyle({
                    color: '#fff',
                    fontSize: 14,
                    backgroundColor: 'transparent',
                  });
                }
              }}
            />
            <Button
              title="提示文本位置 "
              onPress={() => {
                if (hintTextPosition === 130) {
                  setHintTextPosition(150);
                } else {
                  setHintTextPosition(130);
                }
              }}
            />
            <Button
              title="是否显示扫描线"
              onPress={() => {
                if (isShowScanBar === true) {
                  setIsShowScanBar(false);
                } else {
                  setIsShowScanBar(true);
                }
              }}
            />
            <Button
              title="渲染顶部容器样式"
              onPress={() => {
                if (topViewStyle === null) {
                  setTopViewStyle({borderColor: 'red', borderWidth: 1});
                } else {
                  setTopViewStyle(null);
                }
              }}
            />
            <Button
              title="渲染底部容器样式"
              onPress={() => {
                if (bottomViewStyle.height === 200) {
                  setBottomViewStyle({
                    borderColor: 'red',
                    borderWidth: 1,
                    height: 300,
                  });
                } else {
                  setBottomViewStyle({
                    height: 200,
                  });
                }
              }}
            />
          </ScrollView>
        </View>
      )}
    />
  );
};
export default function QrDecodeImageCamera() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QRreaderExp">
        <Stack.Screen name="QRreaderExp" component={QRreaderExp} />
        <Stack.Screen name="QRscannerExp" component={QRscannerExp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
