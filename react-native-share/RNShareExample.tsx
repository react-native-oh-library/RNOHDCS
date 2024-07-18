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
    'data:image/jpeg;base64,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',
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
        <TestSuite name="验证isPackageInstalled接口">
          <TestCase
            itShould="false"
            initialState={true}
            tags={['dev']}
            arrange={({ setState }) => {
              return (
                <View style={styles.section}>
                  <Text>{share}</Text>
                  <Button
                    key="isPackageInstalled"
                    title="isPackageInstalled"
                    onPress={async () => {
                      const res = await isPackageInstalled();
                      setState(res);
                    }}
                  />
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              console.log('###testCase', state);
              expect(state).to.be.false;
            }}
          />
        </TestSuite>
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
                      message: '短信消息',
                      recipient: '123456789',
                      email: 'lihonggang11@h-partners.com',
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
