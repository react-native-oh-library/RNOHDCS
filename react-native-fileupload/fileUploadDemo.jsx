import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FileUpload from 'react-native-fileupload';

export default class FileUploadDemo extends Component {

  componentDidMount () {
    var obj = {
        uploadUrl: 'http://47.108.234.230:9990/upload',
        method: 'POST',
        headers: {
          
          'Content-Type': 'multipart/form-data',
        },
        files: [
          {
            name: 'file',
            filename: 'assets_placeholder2000x2000.jpg',
            filetype: 'jpg',
          },
        ]
    };
    FileUpload.upload(obj).then((result)=>{
      console.log("fileUplodae successfully!",result);
    },(error)=>{
      console.log("fileUplodae fail!",error);
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});