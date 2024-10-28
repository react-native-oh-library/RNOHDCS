import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {TestCase, TestSuite, Tester} from '@rnoh/testerino';
import CheckFrequencyOne from './examples/CheckFrequencyOne';
import CheckFrequencyTwo from './examples/CheckFrequencyTwo';
import CheckFrequencyThree from './examples/CheckFrequencyThree';
import InstallModeOne from './examples/InstallModeOne';
import InstallModeTwo from './examples/InstallModeTwo';
import InstallModeThree from './examples/InstallModeThree';
import InstallModeFour from './examples/InstallModeFour';
import AppendReleaseDescription from './examples/AppendReleaseDescription';
import AppendReleaseDescriptionFalse from './examples/AppendReleaseDescriptionFalse';
import DescriptionPrefix from './examples/DescriptionPrefix';
import MandatoryContinueButtonLabel from './examples/MandatoryContinueButtonLabel';
import MandatoryUpdateMessage from './examples/MandatoryUpdateMessage';
import OptionalIgnoreButtonLabel from './examples/OptionalIgnoreButtonLabel';
import OptionalInstallButtonLabel from './examples/OptionalInstallButtonLabel';
import OptionalUpdateMessage from './examples/OptionalUpdateMessage';
import Title from './examples/Title';
import SyncStatus from './examples/SyncStatus'
import RestartApp from './examples/RestartApp'
import GetCurrentPackage from './examples/GetCurrentPackage'
import GetUpdateMetadata from './examples/GetUpdateMetadata'
import GetConfiguration from './examples/GetConfiguration'
import {NavigationContainer, Page} from '../../components';
import {PortalHost, PortalProvider} from '@gorhom/portal';

// 该demo依赖 @gorhom/portal， 请先 npm i @gorhom/portal@1.0.14

const renderElement = (Element: any, title: string) => {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <TestSuite name="react-native-code-push">
          <TestCase itShould={title}>
            <Element style={{flex: 1}} />
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

export default function CodePushTest() {
  return (
    <>
      <View style={{backgroundColor: 'black'}}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <NavigationContainer>
            <PortalProvider>
              <View id="__harmony::ready" />

              <Page name="SyncStatus">
                {renderElement(SyncStatus, 'SyncStatus')}
              </Page>

              <Page name="getConfiguration">
                {renderElement(GetConfiguration, 'getConfiguration')}
              </Page>

              <Page name="getCurrentPackage">
                {renderElement(GetCurrentPackage, 'getCurrentPackage')}
              </Page>

              <Page name="getUpdateMetadata">
                {renderElement(GetUpdateMetadata, 'getUpdateMetadata')}
              </Page>

              <Page name="restartApp">
                {renderElement(RestartApp, 'restartApp')}
              </Page>

              <Page name="CheckFrequencyOne">
                {renderElement(CheckFrequencyOne, 'CheckFrequency.ON_APP_START')}
              </Page>

              <Page name="CheckFrequencyTwo">
                {renderElement(CheckFrequencyTwo, 'CheckFrequency.ON_APP_RESUME')}
              </Page>

              <Page name="CheckFrequencyThree">
                {renderElement(CheckFrequencyThree, 'CheckFrequency.MANUAL')}
              </Page>

              <Page name="InstallModeOne">
                {renderElement(InstallModeOne, 'InstallMode.IMMEDIATE')}
              </Page>

              <Page name="InstallModeTwo">
                {renderElement(InstallModeTwo, 'InstallMode.ON_NEXT_RESTART')}
              </Page>

              <Page name="InstallModeThree">
                {renderElement(InstallModeThree, 'InstallMode.ON_NEXT_RESUME')}
              </Page>

              <Page name="InstallModeFour">
                {renderElement(InstallModeFour, 'InstallMode.ON_NEXT_SUSPEND')}
              </Page>

              <Page name="AppendReleaseDescription">
                {renderElement(AppendReleaseDescription, 'appendReleaseDescription: true')}
              </Page>

              <Page name="AppendReleaseDescriptionFalse">
                {renderElement(AppendReleaseDescriptionFalse, 'appendReleaseDescription: false')}
              </Page>

              <Page name="DescriptionPrefix">
                {renderElement(DescriptionPrefix, 'descriptionPrefix: 更新内容：')}
              </Page>

              <Page name="MandatoryContinueButtonLabel">
                {renderElement(MandatoryContinueButtonLabel, 'mandatoryContinueButtonLabel: 立即更新')}
              </Page>

              <Page name="MandatoryUpdateMessage">
                {renderElement(MandatoryUpdateMessage, 'mandatoryUpdateMessage: 更新通知')}
              </Page>

              <Page name="OptionalIgnoreButtonLabel">
                {renderElement(OptionalIgnoreButtonLabel, 'optionalIgnoreButtonLabel: 稍后')}
              </Page>

              <Page name="OptionalInstallButtonLabel">
                {renderElement(OptionalInstallButtonLabel, 'optionalInstallButtonLabel: 后台更新')}
              </Page>

              <Page name="OptionalUpdateMessage">
                {renderElement(OptionalUpdateMessage, 'optionalUpdateMessage: 有新版本了，是否更新？')}
              </Page>

              <Page name="Title">
                {renderElement(Title, 'title: 更新提示')}
              </Page>

            </PortalProvider>
          </NavigationContainer>
        </SafeAreaView>
      </View>
    </>
  );
}
