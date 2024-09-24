import { use } from 'chai';

import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import RNShare from 'react-native-share'; 
// import RNShare from '@react-native-oh-tpl/react-native-share';

export function RNShareExample() {
  let [shareOptions, setShareOptions] = useState<string[]>([]);
  let [title, setTitle] = useState<string>('分享标题');
  let [share, setShare] = useState<string>('');
  let [appId, setAppId] = useState<string>('');
  let [subject, setSubject] = useState<string>('分享的内容');
  let [url, setUrl] = useState<string>(
    'https://developer.huawei.com/consumer/cn/',
  );
  let [imageUrl2] = useState<string>(
    'https://developer.huawei.com/allianceCmsResource/resource/HUAWEI_Developer_VUE/images/homeNew/sy-yy-pc.jpeg',
  );
  let [imageUrl] = useState<string>(
    'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png',
  );
  let [base64Url] = useState<string>(
    'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=',
  );
  let [videoUrl] = useState<string>('https://vjs.zencdn.net/v/oceans.mp4');
  // let [docUrl] = useState<string>('file://com.rnoh.tester/data/storage/el1/base/cache/video_file/d2.doc');
  // let [txtUrl] = useState<string>('file://com.rnoh.tester/data/storage/el1/base/cache/video_file/c1.txt');
  // let [localImage] = useState<string>('file://com.rnoh.tester/data/storage/el1/base/cache/image_file/a1.png');
  const getShareTypeArr = (options: any) => {
    const shareArr: string[] = ['testshare'];
    let social: { [key: string]: string } = options;
    for (let key in social) {
      shareArr.push(social[key]);
    }
    return shareArr;
  };

  useEffect(() => {
    const arr = getShareTypeArr(RNShare.Social);
    setShareOptions(arr);
  }, []);
  const getShareAction = async (option: string) => {
    if (option === RNShare.Social.FACEBOOK_STORIES) {
      setAppId('284882215')
    } else if (option === RNShare.Social.INSTAGRAM_STORIES) {
      setAppId('389801252')
    } else {
      setAppId('')
    }

    setShare(option);
  };
  const shareAction = async (options: any) => {
    try {
      const res = await RNShare.shareSingle(options);
      console.log('###Tester000', res);
      return res?.success;
    } catch (error) {
      console.log('###Tester111', JSON.stringify(error));
      return false;
    }
  };
  const openAction = async (options: any) => {
    try {
      const res = await RNShare.open(options);
      console.log('###Tester00', res);
      return res?.success;
    } catch (error) {
      console.log('###Tester111', JSON.stringify(error));
      return false;
    }
  };

  const isPackageInstalled = async () => {
    try {
      const res = await RNShare.isPackageInstalled(share);
      console.log('###Tester', JSON.stringify(res));
      return res?.isInstalled;
    } catch (error) {
      console.log('###Tester', JSON.stringify(error));
      return false;
    }
  };

  return (
    <Tester>
      <ScrollView style={styles.content}>
        <View style={styles.linkView}>
          <Text>请选择分享的三方APP</Text>
          <View style={styles.linkContent}>
            {shareOptions.map(item => {
              return (
                <Text
                  style={
                    share === item ? styles.linkTextSelected : styles.linkText
                  }
                  key={item}
                  onPress={() => {
                    getShareAction(item);
                  }}>
                  {item}
                </Text>
              );
            })}
          </View>
        </View>
        <TestSuite name="验证shareSingle接口-三方分享链接">
          <TestCase
            itShould="true"
            initialState={false}
            tags={['dev']}
            arrange={({ setState }) => {
              return (
                <View style={styles.section}>
                  <Text numberOfLines={10} style={styles.inputView}>
                    {JSON.stringify({
                      social: share,
                      url,
                      title,
                      subject,
                      appId,

                    })}
                  </Text>
                  <Button
                    key="openImageAction1"
                    title="三方分享链接"
                    onPress={async () => {
                      const res = await shareAction({
                        social: share,
                        url,
                        title,
                        subject,
                        appId,
                        message: '短信消息',
                        recipient: '123456789',
                        email: 'lihonggang11@h-partners.com',
                      });
                      setState(res);
                    }}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              console.log('###testCase', state);
              expect(state).to.be.true;
            }}
          />
        </TestSuite>
        <TestSuite name="验证shareSingle接口-三方分享图片">
          <TestCase
            itShould="true"
            initialState={false}
            tags={['dev']}
            arrange={({ setState }) => {
              return (
                <View style={styles.section}>
                  <Text numberOfLines={10} style={styles.inputView}>
                    {JSON.stringify({
                      social: share,
                      url: imageUrl,
                      title,
                      subject,
                      appId,
                      message: '短信消息',
                      recipient: '123456789',
                      email: 'lihonggang11@h-partners.com',

                    })}
                  </Text>
                  <Button
                    key="openImageAction2"
                    title="三方分享图片"
                    onPress={async () => {
                      const res = await shareAction({
                        social: share,
                        url: imageUrl,
                        title,
                        subject,
                        appId,
                        message: '短信消息',
                        recipient: '123456789',
                        email: 'lihonggang11@h-partners.com',
                      });
                      setState(res);
                    }}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              console.log('###testCase', state);
              expect(state).to.be.true;
            }}
          />
        </TestSuite>
        <TestSuite name="验证shareSingle接口-三方分享base64图片">
          <TestCase
            itShould="true"
            initialState={false}
            tags={['dev']}
            arrange={({ setState }) => {
              return (
                <View style={styles.section}>
                  <Text numberOfLines={10} style={styles.inputView}>
                    {JSON.stringify({
                      social: share,
                      url: base64Url,
                      title,
                      subject,
                      appId,
                      message: '短信消息',
                      recipient: '123456789',
                      email: 'lihonggang11@h-partners.com',
                    })}
                  </Text>
                  <Button
                    key="openImageAction22"
                    title="三方分享base64图片"
                    onPress={async () => {
                      const res = await shareAction({
                        social: share,
                        url: base64Url,
                        title,
                        subject,
                        appId,
                        message: '短信消息',
                        recipient: '123456789',
                        email: 'lihonggang11@h-partners.com',
                      });
                      setState(res);
                    }}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              console.log('###testCase', state);
              expect(state).to.be.true;
            }}
          />
        </TestSuite>

        <TestSuite name="验证shareSingle接口-三方分享视频">
          <TestCase
            itShould="true"
            initialState={false}
            tags={['dev']}
            arrange={({ setState }) => {
              return (
                <View style={styles.section}>
                  <Text numberOfLines={10} style={styles.inputView}>
                    {JSON.stringify({
                      social: share,
                      url: videoUrl,
                      title,
                      subject,
                      appId,
                      message: '短信消息',
                      recipient: '123456789',
                      email: 'lihonggang11@h-partners.com',
                    })}
                  </Text>
                  <Button
                    key="openImageAction741"
                    title="三方分享视频"
                    onPress={async () => {
                      const res = await shareAction({
                        social: share,
                        url: videoUrl,
                        title,
                        subject,
                        message: '短信消息',
                        recipient: '123456789',
                        email: 'lihonggang11@h-partners.com',
                      });
                      setState(res);
                    }}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              console.log('###testCase', state);
              expect(state).to.be.true;
            }}
          />
        </TestSuite>
        <TestSuite name="验证open-系统分享链接">
          <TestCase
            itShould="true"
            initialState={false}
            tags={['dev']}
            arrange={({ setState }) => {
              return (
                <View style={styles.section}>
                  <Text numberOfLines={10} style={styles.inputView}>
                    {JSON.stringify({
                      title,
                      subject,
                      url: url,
                      saveToFiles: false,
                      message: '短信消息',
                      recipient: '123456789',
                      email: 'lihonggang11@h-partners.com',
                    })}
                  </Text>
                  <Button
                    key="openAction1"
                    title="系统分享链接"
                    onPress={async () => {
                      const res = await openAction({
                        title,
                        subject,
                        url,
                        saveToFiles: false,
                        message: '短信消息',
                        recipient: '123456789',
                        email: 'lihonggang11@h-partners.com',
                      });
                      setState(res);
                    }}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              console.log('###testCase', state);
              expect(state).to.be.true;
            }}
          />
        </TestSuite>
        <TestSuite name="验证open-系统分享网络图片">
          <TestCase
            itShould="true"
            initialState={false}
            tags={['dev']}
            arrange={({ setState }) => {
              return (
                <View style={styles.section}>
                  <Text numberOfLines={10} style={styles.inputView}>
                    {JSON.stringify({
                      title,
                      subject,
                      url: imageUrl,
                      saveToFiles: false,
                      message: '短信消息',
                      recipient: '123456789',
                      email: 'lihonggang11@h-partners.com',
                    })}
                  </Text>
                  <Button
                    key="openAction2"
                    title="系统分享网络图片"
                    onPress={async () => {
                      const res = await openAction({
                        title,
                        subject,
                        url: imageUrl,
                        saveToFiles: false,
                        message: '短信消息',
                        recipient: '123456789',
                        email: 'lihonggang11@h-partners.com',
                      });
                      setState(res);
                    }}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              console.log('###testCase', state);
              expect(state).to.be.true;
            }}
          />
        </TestSuite>
        <TestSuite name="验证open-系统分享Base64图片">
          <TestCase
            itShould="true"
            initialState={false}
            tags={['dev']}
            arrange={({ setState }) => {
              return (
                <View style={styles.section}>
                  <Text numberOfLines={10} style={styles.inputView}>
                    {JSON.stringify({
                      title,
                      subject,
                      url: base64Url,
                      saveToFiles: false,
                      message: '短信消息',
                      recipient: '123456789',
                      email: 'lihonggang11@h-partners.com',
                    })}
                  </Text>
                  <Button
                    key="openAction22"
                    title="系统分享Base64图片"
                    onPress={async () => {
                      const res = await openAction({
                        title,
                        subject,
                        url: base64Url,
                        saveToFiles: false,
                        message: '短信消息',
                        recipient: '123456789',
                        email: 'lihonggang11@h-partners.com',
                      });
                      setState(res);
                    }}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              console.log('###testCase', state);
              expect(state).to.be.true;
            }}
          />
        </TestSuite>
        <TestSuite name="验证open-系统分享视频">
          <TestCase
            itShould="true"
            initialState={false}
            tags={['dev']}
            arrange={({ setState }) => {
              return (
                <View style={styles.section}>
                  <Text numberOfLines={10} style={styles.inputView}>
                    {JSON.stringify({
                      title,
                      subject,
                      url: videoUrl,
                      saveToFiles: false,
                      message: '短信消息',
                      recipient: '123456789',
                      email: 'lihonggang11@h-partners.com',
                    })}
                  </Text>
                  <Button
                    key="openAction3"
                    title="系统分享视频"
                    onPress={async () => {
                      const res = await openAction({
                        title,
                        subject,
                        url: videoUrl,
                        saveToFiles: false,
                        message: '短信消息',
                        recipient: '123456789',
                        email: 'lihonggang11@h-partners.com',
                      });
                      setState(res);
                    }}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              console.log('###testCase', state);
              expect(state).to.be.true;
            }}
          />
        </TestSuite>
        <TestSuite name="验证open-系统分享多条文件路径">
          <TestCase
            itShould="true"
            initialState={false}
            tags={['dev']}
            arrange={({ setState }) => {
              return (
                <View style={styles.section}>
                  <Text numberOfLines={10} style={styles.inputView}>
                    {JSON.stringify({
                      title,
                      subject,
                      urls: [url, imageUrl, imageUrl2],
                      saveToFiles: false,
                      message: '短信消息',
                      recipient: '123456789',
                      email: 'lihonggang11@h-partners.com',
                    })}
                  </Text>
                  <Button
                    key="openAction5"
                    title="系统分享多条文件路径"
                    onPress={async () => {
                      const res = await openAction({
                        title,
                        subject,
                        urls: [url, imageUrl, imageUrl2],
                        saveToFiles: false,
                        message: '短信消息',
                        recipient: '123456789',
                        email: 'lihonggang11@h-partners.com',
                      });
                      setState(res);
                    }}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              console.log('###testCase', state);
              expect(state).to.be.true;
            }}
          />
        </TestSuite>
        <TestSuite name="验证open">
          <TestCase
            itShould="true"
            initialState={false}
            tags={['dev']}
            arrange={({ setState }) => {
              return (
                <View style={styles.section}>
                  <Text numberOfLines={10} style={styles.inputView}>
                    {JSON.stringify({
                      title,
                      subject,
                      urls: [url, imageUrl, imageUrl2, base64Url],
                      saveToFiles: true,
                      message: '短信消息',
                      recipient: '123456789',
                      email: 'lihonggang11@h-partners.com',
                    })}
                  </Text>
                  <Button
                    key="openAction1"
                    title="系统分享保存多个文件地址"
                    onPress={async () => {
                      const res = await openAction({
                        title,
                        subject,
                        urls: [url, imageUrl, imageUrl2, base64Url],
                        saveToFiles: true,
                        message: '短信消息',
                        recipient: '123456789',
                        email: 'lihonggang11@h-partners.com',
                      });
                      setState(res);
                    }}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              console.log('###testCase', state);
              expect(state).to.be.true;
            }}
          />
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: 60,
    height: 60,
    aspectRatio: 1,
  },
  content: {
    width: '100%',
    height: '100%',
  },
  section: {
    padding: 20,
    fontSize: 14,
  },
  linkView: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    fontSize: 15,
    width: '100%',
  },
  linkContent: {
    display: 'flex',
    fontSize: 14,
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: 10,
    height: 300,
    width: '100%',
  },
  linkText: {
    padding: 5,
    textAlign: 'center',
    borderColor: '#f2f2f2',
    borderWidth: 1,
    borderRadius: 2,
    fontSize: 14,
    color: '#555',
  },
  linkTextSelected: {
    color: '#0000FF',
    padding: 5,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 500,
    borderColor: '#0000FF',
    borderWidth: 1,
    borderRadius: 3,
  },
  tipText: {
    fontSize: 12,
    color: '#999',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    height: 50,
    textAlignVertical: 'top',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  inputView: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    height: 200,
    textAlignVertical: 'top',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    color: '#fff',
  },
  colText: {
    padding: 5,
  },
  cloumnView: {
    padding: 10,
    fontSize: 14,
    height: 280,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    columnGap: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  rowView: {
    width: '100%',
    height: 450,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    rowGap: 10,
    columnGap: 10,
    backgroundColor: 'white',
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderRadius: 5,
    padding: 20,
  },
  Button: {
    marginBottom: 20,
  },
});
