import React, { useState, useEffect } from 'react';
import { Text, View, Button, ScrollView, NativeModules } from 'react-native';
import NativeSendIntent from 'react-native-send-intent'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

function SendIntent() {
  const [url, setUrl] = useState();
  const [flag1, setFlag1] = useState<boolean>();
  const [flag2, setFlag2] = useState<boolean>();
  return (
    <>
      <Tester style={{ height: '100%' }}>
        <ScrollView>
          <TestSuite name='sendIntent'>
            <TestCase
              itShould='native sendText'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <Button
                    onPress={() => {
                      NativeSendIntent.sendText({
                        title: "Please share this text",
                        text: "Lorem ipsum dolor sit amet, per error erant eu, antiopam intellegebat ne sed",
                        type: NativeSendIntent.TEXT_PLAIN,
                      });
                    }}
                    title="分享文本"

                  />
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould='native sendPhoneCall'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <Button
                    onPress={() => {
                      NativeSendIntent.sendPhoneCall('+86157 2729 3407', true);
                    }}
                    title="打开电话"

                  />
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould='native sendPhoneDial'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <Button
                    onPress={() => {
                      NativeSendIntent.sendPhoneDial('10086', false);
                    }}
                    title="打开电话 无需权限"

                  />
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould='native sendSms'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <Button
                    onPress={() => {
                      NativeSendIntent.sendSms('15727293407', '这是发送短信的内容');
                    }}
                    title="发送短信SMS"

                  />
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould='native openCalendar'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <Button
                    onPress={() => {
                      NativeSendIntent.openCalendar();
                    }}
                    title="打开日历"

                  />
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould='native sendMail'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <Button
                    onPress={() => {
                      NativeSendIntent.sendMail('mailto:someone@example.com', 'This%20is%20the%20subject', 'This%20is%20the%20body');
                    }}
                    title="发送邮件"

                  />
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould='native openChooserWithOptions'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <Button
                    onPress={() => {
                      NativeSendIntent.openChooserWithOptions(
                        {
                          imageUrl: "file://media/Photo/1/IMG_1724310149_000/screenshot_20240822_150049.jpg",
                        },
                        "Share video to"
                      );
                    }}
                    title="打开文件共享对话框"

                  />
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould='native openChooserWithMultipleOptions'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <Button
                    onPress={() => {
                      NativeSendIntent.openChooserWithMultipleOptions(
                        [
                          {
                            imageUrl: 'file://media/Photo/1/IMG_1724310149_000/screenshot_20240822_150049.jpg'
                          },
                          {
                            imageUrl: 'file://media/Photo/1/IMG_1724310149_000/screenshot_20240822_150049.jpg'
                          },
                          {
                            videoUrl: 'file://media/Photo/1/IMG_1724310149_000/screenshot_20240822_150049.jpg'
                          },
                        ],
                        'Share video'
                      );
                    }}
                    title="打开多文件文件共享对话框"

                  />
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould='native openMaps'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <Button
                    onPress={() => {
                      NativeSendIntent.openMaps('未来科技城C2');
                    }}
                    title="打开地图"

                  />
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould='native openMapsWithRoute'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <Button
                    onPress={() => {
                      NativeSendIntent.openMapsWithRoute('汉口火车站', 'b');
                    }}
                    title="打开带路线的地图"

                  />
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould='native openCamera'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <Button
                    onPress={() => {
                      NativeSendIntent.openCamera();
                    }}
                    title="打开相机"

                  />
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould='native openSettings'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <Button
                    onPress={() => {
                      NativeSendIntent.openSettings('bluetooth_entry');
                    }}
                    title="打开设置_蓝牙"

                  />
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould='native gotoHomeScreen'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <Button
                    onPress={() => {
                      NativeSendIntent.gotoHomeScreen();
                    }}
                    title="返回主界面"

                  />
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould='native openApp'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <>
                    <><Text style={{ color: "red" }}>{JSON.stringify(flag1)}</Text></>
                    <Button
                      onPress={async () => {
                        NativeSendIntent.openApp('com.huawei.hmos.email', {}).then((flag) => {
                          setFlag1(flag)
                        })

                      }}
                      title="打开APP"

                    />
                  </>
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould='native openChromeIntent'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <Button
                    onPress={() => {
                      NativeSendIntent.openChromeIntent('http://www.baidu.com');
                    }}
                    title="打开浏览器指定网站"

                  />
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould='native openDownloadManager'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <Button
                    onPress={() => {
                      NativeSendIntent.openDownloadManager();
                    }}
                    title="打开下载管理"

                  />
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould='native openEmailApp'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <Button
                    onPress={() => {
                      NativeSendIntent.openEmailApp();
                    }}
                    title="打开电子邮件"

                  />
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould='native openAllEmailApp'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <Button
                    onPress={() => {
                      NativeSendIntent.openAllEmailApp();
                    }}
                    title="打开设备中所有可用的电子邮件应用"

                  />
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould='native requestIgnoreBatteryOptimizations'
              tags={['C_API']}
              initialState={undefined as any}
              arrange={() => {
                return (
                  <Button
                    onPress={() => {
                      NativeSendIntent.requestIgnoreBatteryOptimizations();
                    }}
                    title="忽略电池优化"

                  />
                )
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
          </TestSuite>
          <TestCase
            itShould='native showIgnoreBatteryOptimizationsSettings'
            tags={['C_API']}
            initialState={undefined as any}
            arrange={() => {
              return (
                <Button
                  onPress={() => {
                    NativeSendIntent.showIgnoreBatteryOptimizationsSettings();
                  }}
                  title="显示电池优化"
                />
              )
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould='native openAppWithUri'
            tags={['C_API']}
            initialState={undefined as any}
            arrange={() => {
              return (
                <Button
                  onPress={() => {
                    NativeSendIntent.openAppWithUri('|| com.huawei.hmos.calendar');
                  }}
                  title="打开应用商店"
                />
              )
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould='native openFileChooser'
            tags={['C_API']}
            initialState={undefined as any}
            arrange={() => {
              return (
                <Button
                  onPress={() => {
                    NativeSendIntent.openFileChooser({
                      fileUrl: 'file://.../test.docx',
                      subject: '',
                      type: 'application/msword'
                    }, '');
                  }}
                  title="选择打开文件选择器"
                />
              )
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould='native openFilePicker'
            tags={['C_API']}
            initialState={undefined as any}
            arrange={({setState}) => {
              return (
                <>
                  <><Text style={{ color: "red" }}>{JSON.stringify(url)}</Text></>
                  <Button
                    onPress={() => {
                      NativeSendIntent.openFilePicker({
                        type: '',
                        title: ''
                      }, (uris) => {
                        setUrl(uris);
                        setState(true)
                      });
                    }}
                    title="选择打开文件选择器获取文件地址"
                  />
                </>
              )
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
        </ScrollView>
      </Tester>
    </>
  );
};
export default SendIntent;
