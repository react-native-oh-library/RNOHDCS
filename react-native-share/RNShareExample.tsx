import { use } from "chai";
import React, { useEffect, useState } from "react";
import { Button, View, StyleSheet, ScrollView, Text, TextInput } from 'react-native';
import { Tester, TestSuite } from '@rnoh/testerino';
import { TestCase } from "../components";
import RNShare from "react-native-share";
import { ShareSingleOptions, Social } from "react-native-share/lib/typescript/types";

export function RNShareExample() {
  let [shareOptions, setShareOptions] = useState<string[]>([]);
  let [title, setTitle] = useState<string>('分享标题');
  let [subject, setSubject] = useState<string>('分享的内容');
  let [urlLink, setUrlLink] = useState<string>('https://developer.huawei.com/consumer/cn/');
  let [url, setUrl] = useState<string>('https://developer.huawei.com/consumer/cn/');
  let [imageUrl, setImageUrl] = useState<string>('https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png');
  let [base64Url, setBase6Url] = useState<string>('data:image/jpeg;base64,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');
  let [videoUrl, setVideoUrl] = useState<string>('file://com.rnoh.tester/data/storage/el1/base/cache/video_file/e1.mp4');
  let [localImage, setLocalImage] = useState<string>('file://com.rnoh.tester/data/storage/el1/base/cache/image_file/a1.png');
  const ShareDemoOptions = {
    'link': '分享链接',
    'image_http': '分享网络图片',
    'image_local': '分享本地图片',
    'video_local': '分享本地视频',
    'base64': '分享base64图片'
  }
  const getShareTypeArr = (options: any) => {
    const shareArr: string[] = [];
    let social: { [key: string]: string } = options;
    for (let key in social) {
      shareArr.push(social[key]);
    }
    return shareArr;
  }

  useEffect(() => {
    const arr = getShareTypeArr(ShareDemoOptions);
    setShareOptions(arr);
  }, [])
  const shareAction = async (social: string) => {
    try {
      const res = await RNShare.shareSingle({
        social: social,
        title,
        subject,
        url
      })
      console.log('###Tester', JSON.stringify(res))
      return res?.success;

    } catch (error) {
      console.log('###Tester', JSON.stringify(error))
      return false
    }

  }
  const openAction = async () => {
    try {
      const res = await RNShare.open({
        title,
        subject,
        url,
        urls: [url, imageUrl, base64Url, localImage, videoUrl]
      })
      console.log('###Tester', JSON.stringify(res))
      return res?.success
    } catch (error) {
      console.log('###Tester', JSON.stringify(error))
      return false
    }

  }
  const isPackageInstalled = async () => {
    try {
      const res = await RNShare.isPackageInstalled('testshare')
      console.log('###Tester', JSON.stringify(res))
      return res?.isInstalled

    } catch (error) {
      console.log('###Tester', JSON.stringify(error))
      return false
    }

  }

  return (
    <Tester>
      <ScrollView style={styles.content}>


        <View style={styles.section}>
          <Text style={styles.title}>分享链接示例（link,image,video）:</Text>
          <View style={styles.cloumnView}>
            <Text style={styles.tipText}>长按任意一项可以复制到下面的输入框中</Text>
            <Text style={styles.colText} onPress={() => {
          
              setUrl(urlLink)
            }}>链接：{urlLink}</Text>
            <Text style={styles.colText} onPress={() => {
           
              setUrl(imageUrl)
            }}>网络图片：{imageUrl}</Text>
            <Text style={styles.colText} onPress={() => {
              setUrl(localImage)
            }}>本地图片：{localImage}</Text>
            <Text style={styles.colText} onPress={() => {
              setUrl(videoUrl)
            }}>本地视频：{videoUrl}</Text>
            <Text numberOfLines={2} style={styles.colText} onPress={() => {
              setUrl(base64Url)
            }}>base64图片：{base64Url}</Text>

          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>分享标题:</Text>
          <TextInput
           style={styles.input} 
           placeholder="请输入" 
           value={title}
           onChangeText={(text) => {
            setTitle(text)
          }}
           ></TextInput>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>分享内容:</Text>
          <TextInput 
          style={styles.input}
           placeholder="请输入" 
           value={subject}
           onChangeText={(text) => {
            setSubject(text)
          }}
           ></TextInput>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>输入分享的链接</Text>
          <TextInput style={styles.inputView}
           placeholder="请输入"
            textAlignVertical="top"
             multiline={true}
            value={url}
           onChangeText={(text) => {
            setUrl(text)
          }}>    
          </TextInput>
        </View>
        <TestSuite name="验证isPackageInstalled接口">
          <TestCase.Manual
            itShould="true"
            initialState={false}
            tags={['dev']}
            arrange={({ setState }) => {
              return (
                <View style={styles.section}>
                  <Text>验证isPackageInstalled接口</Text>
                  <Button
                    key='isPackageInstalled'
                    title='isPackageInstalled'
                    onPress={async() => {
                      const res = await isPackageInstalled();
                      setState(res)
             
                    }} />
                </View>
              )
            }}
            assert={async ({ expect, state }) => {
              console.log('###testCase', state);
              expect(state).to.be.true
            }} />
        </TestSuite>
        <TestSuite name="验证shareSingle接口">
          <TestCase.Manual
            itShould="true"
            initialState={false}
            tags={['dev']}
            arrange={({ setState }) => {
              return (
                <View style={styles.section}>
                  <Text>验证shareSingle接口</Text>
                  <Button
                    key='openImageAction'
                    title='shareSingle'
                    onPress={async() => {
                      const res = await shareAction('testshare');
                      setState(res)
                
                    }}
                  />
                </View>
              )
            }}
            assert={async ({ expect, state }) => {
              console.log('###testCase', state);
              expect(state).to.be.true
            }} />
        </TestSuite>
        <TestSuite name="验证open">
          <TestCase.Manual
            itShould="true"
            initialState={false}
            tags={['dev']}
            arrange={({ setState }) => {
              return (
                <View style={styles.section}>
                  <Text>验证open接口</Text>
                  <Button
                    key='openAction'
                    title='open'
                    onPress={async() => {
                      const res = await openAction();
                      setState(res);
            
                    }}
                  />
                </View>
              )
            }}
            assert={async ({ expect, state }) => {
              console.log('###testCase', state);
              expect(state).to.be.true
            }} />


        </TestSuite>
      </ScrollView>
    </Tester>
  )



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
    padding: 10,
    fontSize: 14,
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
    height: 100,
    textAlignVertical: 'top',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
    color: '#fff'
  },
  colText: {
    padding: 5,
  },
  cloumnView: {
    padding: 10,
    fontSize: 14,
    height: 280,
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    columnGap: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10
  },
  rowView: {
    width: '100%',
    height: 450,
    display: "flex",
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
    marginBottom: 20
  }
});
