import { View, Alert, Button, ScrollView, TextInput, Text, TouchableHighlight, Linking } from 'react-native';
import Mailer from 'react-native-mail';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import { useState } from 'react';

// {
//   subject: 'need help',
//   recipients: ['support@example.com'],
//   ccRecipients: ['supportCC@example.com'],
//   bccRecipients: ['supportBCC@example.com'],
//   body: '<b>A Bold Body</b>',
//   customChooserTitle: 'This is my new title', // Android only (defaults to "Send Mail")
//   isHTML: true,
//   attachments: [{
//     // Specify either `path` or `uri` to indicate where to find the file data.
//     // The API used to create or locate the file will usually indicate which it returns.
//     // An absolute path will look like: /cacheDir/photos/some image.jpg
//     // A URI starts with a protocol and looks like: content://appname/cacheDir/photos/some%20image.jpg
//     path: '/data/storage/el2/base/haps/entry/files/test.txt', // The absolute path of the file from which to read data.
//     // uri: 'file://media/Photo/4/IMG_1718588093_001/screenshot_20240617_093313.jpg', // The uri of the file from which to read the data.
//     // Specify either `type` or `mimeType` to indicate the type of data.
//     type: 'text', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
//     mimeType: '', // - use only if you want to use custom type
//     name: 'test.txt', // Optional: Custom filename for attachment
//   }]
// }
let attachments = {
  path: '',
  uri: '',
  type: '',
  mimeType: '',
  name: '',
}

export default function RnMailTest() {
  const [mailOptions, setMailOptions] = useState({
    subject: '',
    recipients: [],
    ccRecipients: [],
    bccRecipients: [],
    body: '',
    customChooserTitle: '',
    isHTML: false,
    attachments: [
      {
        path: '', // /data/storage/el2/base/haps/entry/files/11.png
        uri: '', // file://com.rnoh.tester/data/storage/el2/base/haps/entry/files/11.png
        type: '',
        mimeType: '',
        name: '',
      }

    ]
  });
  const [error, setError] = useState('');
  const [event, setEvent] = useState('');

  const rnMailoptions = [
    {
      key: 'subject:主题',
      placeholder: '请输入主题',
      value: 'subject',
    },
    {
      key: 'recipients:收件人,多个用英文逗号分隔',
      placeholder: 'eg：support@example.com,support1@example.com',
      value: 'recipients',
    },

    {
      key: 'ccRecipients:抄送收件人,多个用英文逗号分隔',
      placeholder: 'eg：support@example.com,support1@example.com',
      value: 'ccRecipients',
    },
    {
      key: 'bccRecipients:密件抄送收件人,多个用英文逗号分隔',
      placeholder: 'eg：support@example.com,support1@example.com',
      value: 'bccRecipients',
    },
    {
      key: 'body:内容',
      placeholder: '请输入内容',
      value: 'body',
    },
    {
      key: 'customChooserTitle:自定义标题',
      placeholder: '请输入自定义标题',
      value: 'customChooserTitle',
    },
    {
      key: 'isHTML:是否是html',
      placeholder: '请输入true或fasle',
      value: 'isHTML',
    },
  ]
  const rnMailoptionsAttchments = [
    {
      key: 'path:文件沙箱路径与uri二选一',
      placeholder: 'eg: /data/storage/el2/base/haps/entry/files/文件名',
      value: 'path',
    },
    {
      key: 'uri:带前缀的文件沙箱路径与path二选一',
      placeholder: 'eg: file://文件沙箱路径',
      value: 'uri',
    },
    {
      key: 'type:文件类型与mimeType二选一',
      placeholder: 'eg: jpg, png, doc, ppt, html, pdf, csv',
      value: 'type',
    },
    {
      key: 'mimeType:自定义付件类型与type二选一',
      placeholder: '请输入自定义付件类型',
      value: 'mimeType',
    },
    {
      key: 'name:附件文件名',
      placeholder: '请输入附件文件名',
      value: 'name',
    }
  ]


  handleEmail = () => {
    Mailer.mail(mailOptions, (error, event) => {
      setError(error);
      setEvent(event);
      Alert.alert(
        error,
        event,
        [
          {
            text: 'Ok', onPress: () => {
              setError('');
              setEvent('');
              console.log('OK: Email Error Response')
            }
          },
          {
            text: 'Cancel', onPress: () => {
              setError('');
              setEvent('');
              console.log('CANCEL: Email Error Response')
            }
          }
        ],
        { cancelable: true }
      )
    });
  }

  return (
    <Tester style={{ flex: 1 }}>
      <TestCase itShould='打开邮箱'>
        <View style={{ margin: 10 }}>
          <Text>参数：{JSON.stringify(mailOptions)}</Text>
          <Button title="打开邮箱" onPress={() => {
            handleEmail()
          }}></Button>
        </View>
      </TestCase>
      <ScrollView style={{ flex: 1 }}>
        {
          rnMailoptions.map(item => {
            return (<TestCase itShould={item.key} key={item.key}>
              <TextInput style={{ height: 30, fontSize: 12, }} placeholder={item.placeholder}
                onChange={({ nativeEvent: { eventCount, target, text } }) => {
                  let value = text;
                  if (item.value === 'recipients'
                    || item.value === 'ccRecipients'
                    || item.value === 'bccRecipients') {
                    value = text.split(/[,，]/);
                  }
                  setMailOptions({ ...mailOptions, [item.value]: value })
                }} ></TextInput>
            </TestCase>)
          })
        }
        <TestSuite name='attachments:附件'>
          {rnMailoptionsAttchments.map(item => {
            return (<TestCase itShould={'attachments:' + item.key} key={'attachments:' + item.key}>
              <TextInput style={{ height: 30, fontSize: 12, }}
                placeholder={item.placeholder}
                onChange={({ nativeEvent: { eventCount, target, text } }) => {
                  attachments = {
                    ...attachments,
                    [item.value]: text
                  }
                  setMailOptions({ ...mailOptions, 'attachments': [attachments] })
                }} ></TextInput>
            </TestCase>)
          })}
        </TestSuite>
        <TestCase itShould='callback方法'>
          <View style={{ height: 220, margin: 10 }}>
            <Text style={{ marginBottom: 20 }}>callback结果error：{error}</Text>
            <Text>callback结果event：{event}</Text>
          </View>
        </TestCase>
      </ScrollView>
    </Tester>
  )

}