import React, { Component } from 'react';
import { View, Alert, Button, Text } from 'react-native';
import Mailer from 'react-native-mail';

export default function () {

  handleEmail = () => {
    Mailer.mail({
      subject: 'need help',
      recipients: ['support@example.com'],
      ccRecipients: ['supportCC@example.com'],
      bccRecipients: ['supportBCC@example.com'],
      body: '<b>A Bold Body</b>',
      customChooserTitle: 'This is my new title', // Android only (defaults to "Send Mail")
      isHTML: true,
      attachments: [{
        // Specify either `path` or `uri` to indicate where to find the file data.
        path: '', // /data/storage/el2/base/haps/entry/files/11.png
        uri: '', // file://<packageName>/data/storage/el2/base/haps/entry/files/11.png
        // Specify either `type` or `mimeType` to indicate the type of data.
        type: '', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
        mimeType: '', // - use only if you want to use custom type
        name: '', // Optional: Custom filename for attachment
      }]
    }, (error, event) => {
      Alert.alert(
        error,
        event,
        [
          { text: 'Ok', onPress: () => console.log('OK: Email Error Response') },
          { text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response') }
        ],
        { cancelable: true }
      )
    });
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1, gap: 10 }}>
      <View style={{ flexDirection: 'row', rowGap: 10 }}>
        <Text>subject：</Text>
        <Text>need help</Text>
      </View>
      <View style={{ flexDirection: 'row', rowGap: 10 }}>
        <Text>recipients：</Text>
        <Text>support@example.com</Text>
      </View>
      <View style={{ flexDirection: 'row', rowGap: 10 }}>
        <Text>ccRecipients：</Text>
        <Text>supportCC@example.com</Text>
      </View>
      <View style={{ flexDirection: 'row', rowGap: 10 }}>
        <Text>bccRecipients：</Text>
        <Text>supportBCC@example.com</Text>
      </View>
      <View style={{ flexDirection: 'row', rowGap: 10 }}>
        <Text>body：</Text>
        <Text>{`<b>A Bold Body</b>`}</Text>
      </View>
      <View style={{ flexDirection: 'row', rowGap: 10 }}>
        <Text>isHTML：</Text>
        <Text>true</Text>
      </View>
      <Button
        onPress={this.handleEmail}
        title="Email Me"
        color="#841584"
        accessabilityLabel="Purple Email Me Button"
      />
    </View>
  );
}