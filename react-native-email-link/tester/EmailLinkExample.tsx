import { TestCase, Tester, TestSuite } from '@rnoh/testerino';
import React, { useState } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Button
} from 'react-native';

import { getEmailClients, openInbox, openComposer } from "react-native-email-link"

export function EmailLinkExample() {
  const [emailClients, setEmailClients] = useState('点击getEmailClients按钮获取邮箱信息');
  return (
    <ScrollView style={styles.container}>
      <Tester>
        <TestSuite name='email'>
          <TestCase itShould='getEmailClients'>
            <View style={styles.wrapper}>
              <Text>{emailClients}</Text>
              <Button title="getEmailClients" onPress={async () => {
                let clients = await getEmailClients();
                setEmailClients(JSON.stringify(clients));
              }} />
            </View>
          </TestCase>
          <TestCase itShould='openInbox-without-app'>
            <Text>{'无参数'}</Text>
            <Button title="openInbox-without-app" onPress={() => {
              openInbox();
            }} />
          </TestCase>
          <TestCase itShould='openInbox-with-app'>
            <Text>
              {'参数：{\n' +
                '      app: "mail"\n' +
                '      title: "title"\n' +
                '      message: "open"\n' +
                '      cancelLabel: "cancel"\n' +
                '      removeText: "removeText"\n' +
                '      defaultEmailLabel: "default"\n' +
                '     }'
              }
            </Text>
            <Button title="openInbox-with-app" onPress={() => {
              openInbox({
                app: 'mail',
                title: 'title',
                message: 'open',
                cancelLabel: 'cancel',
                removeText: 'removeText',
                defaultEmailLabel: 'default'
              });
            }} />
          </TestCase>
          <TestCase itShould='openComposer-without-app'>
            <Text>
              {'参数：{\n' +
                '      title: "title"\n' +
                '      message: "open"\n' +
                '      cancelLabel: "cancel"\n' +
                '      removeText: "removeText"\n' +
                '      defaultEmailLabel: "default"\n' +
                '      to: "support@example.com",\n' +
                '      cc: "cc@example.com",\n' +
                '      bcc: "bcc@example.com", \n' +
                '      subject: "I have a question", \n' +
                '      body: "Hi, can you help me with..." \n' +
                '      encodeBody: false \n' +
                '     }'
              }
            </Text>
            <Button title="openComposer-without-app" onPress={() => {
              openComposer({
                title: 'title',
                message: 'open',
                cancelLabel: 'cancel',
                removeText: 'removeText',
                defaultEmailLabel: 'default',
                to: "support@example.com",
                cc: "cc@example.com",
                bcc: "bcc@example.com",
                subject: "I have a question",
                body: "Hi, can you help me with...",
                encodeBody: false
              });
            }} />
          </TestCase>
          <TestCase itShould='openComposer-with-app'>
            <Text>
              {'参数：{\n' +
                '      app: "mail",\n' +
                '      title: "title"\n' +
                '      message: "open"\n' +
                '      cancelLabel: "cancel"\n' +
                '      removeText: "removeText"\n' +
                '      defaultEmailLabel: "default"\n' +
                '      to: "support@example.com",\n' +
                '      cc: "cc@example.com",\n' +
                '      bcc: "bcc@example.com", \n' +
                '      subject: "I have a question", \n' +
                '      body: "Hi, can you help me with..." \n' +
                '      encodeBody: true \n' +
                '     }'
              }
            </Text>
            <Button title="openComposer-with-app" onPress={() => {
              openComposer({
                app: "mail",
                title: 'title',
                message: 'open',
                cancelLabel: 'cancel',
                removeText: 'removeText',
                defaultEmailLabel: 'default',
                to: "support@example.com",
                cc: "cc@example.com",
                bcc: "bcc@example.com",
                subject: "I have a question",
                body: "Hi, can you help me with...",
                encodeBody: false
              });
            }} />
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 24,
  },
  wrapper: {
    height: 200,
  }
});