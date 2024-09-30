import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Button
} from 'react-native';
import { getEmailClients, openInbox, openComposer } from "react-native-email-link"

export function EmailLinkDemo() {
  const [emailClients, setEmailClients] = useState('点击getEmailClients按钮获取邮箱信息');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>{emailClients}</Text>
        <Button title="getEmailClients" onPress={async() => {
          let clients = await getEmailClients();
          setEmailClients(JSON.stringify(clients));
        }} />

        <Button title="openInbox-without-app" onPress={() => {
          openInbox();
        }} />

        <Button title="openInbox-with-app" onPress={() => {
          openInbox({
            app: 'mail'
          });
        }} />

        <Button title="openComposer-without-app" onPress={() => {
          openComposer({
            to: "support@example.com",
            cc: "cc@example.com",
            bcc: "bcc@example.com",
            subject: "I have a question",
            body: "Hi, can you help me with...",
          });
        }} />

        <Button title="openComposer-with-app" onPress={() => {
          openComposer({
            app: "mail",
            to: "support@example.com",
            cc: "cc@example.com",
            bcc: "bcc@example.com",
            subject: "I have a question",
            body: "Hi, can you help me with...",
          });
        }} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 24,
  },
  wrapper: {
    height: 200,
  },
  text: {
    marginBottom: 20,
    textAlign: 'center'
  }
});