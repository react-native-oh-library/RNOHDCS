import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CodePush from 'react-native-code-push';
import ProgressBarModal from '../ProgressBarModal';
class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      progressModalVisible: false,
      syncMessage: '',
      syncMessage1: '',
      syncMessage2: '',
      syncMessage3: '',
      syncMessage4: '',
      syncMessage5: '',
      syncMessage6: '',
      progress: {},
    };
  }

  syncImmediate() {
    CodePush.sync(
      {
        // installMode: CodePush.InstallMode.IMMEDIATE,
        updateDialog: {
          appendReleaseDescription: true, //是否显示更新description，默认为false
        },
      },
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this),
    );
  }

  codePushStatusDidChange(syncStatus: string | number) {
    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        this.setState({syncMessage: '正在查询 CodePush 服务器是否有更新'});
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        this.setState({
          syncMessage1: '在从 CodePush 服务器下载可用更新',
          progressModalVisible: true,
        });
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        this.setState({syncMessage2: '有更新可用，并向最终用户显示确认对话框'});
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        this.setState({
          syncMessage3: '已下载可用更新并将安装',
          progressModalVisible: true,
        });
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        this.setState({syncMessage4: '应用程序已完全更新到配置的部署,', progress: false});
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        this.setState({
          syncMessage5: '已安装可用更新',
          progress: false,
        });
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        this.setState({
          syncMessage6: '同步操作发现未知错误',
          progress: false,
        });
        break;
    }
  }

  codePushDownloadDidProgress(progress: any) {
    this.setState({progress});
  }

  render() {
    let progressView;
    if (this.state.progress) {
      let total: any = (this.state.progress.totalBytes / (1024 * 1024)).toFixed(
        2,
      );
      let received: any = (
        this.state.progress.receivedBytes /
        (1024 * 1024)
      ).toFixed(2);
      let progress: number = (received / total) * 100;
      progressView = (
        <ProgressBarModal
          progress={progress}
          totalPackageSize={total}
          receivedPackageSize={received}
          progressModalVisible={this.state.progressModalVisible}
        />
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>欢迎使用热更新--test!</Text>
        <Text>SyncStatus: {this.state.syncMessage}</Text>
        <Text>SyncStatus: {this.state.syncMessage1}</Text>
        <Text>SyncStatus: {this.state.syncMessage2}</Text>
        <Text>SyncStatus: {this.state.syncMessage3}</Text>
        <Text>SyncStatus: {this.state.syncMessage4}</Text>
        <Text>SyncStatus: {this.state.syncMessage5}</Text>
        <Text>SyncStatus: {this.state.syncMessage6}</Text>
        <TouchableOpacity onPress={this.syncImmediate.bind(this)}>
          <Text style={styles.syncButton}>SyncStatus</Text>
        </TouchableOpacity>
        {progressView}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  syncButton: {
    color: 'green',
    fontSize: 17,
  },
});

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.MANUAL};

export default CodePush(codePushOptions)(App);
