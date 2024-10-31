import React from 'react';
import {
    ScrollView,
    View,
    Button
} from 'react-native';


import RNBugly from 'rn-bugly';

export default class BuglyExample extends React.Component {


    _init() {
        console.log("init");
        RNBugly.init("appid", "appkey");
    }

    _setUserId() {
        console.log("setUserId");
        RNBugly.setUserId("12345678");
    }

    _setDeviceID() {
        console.log("setDeviceID");
        RNBugly.setDeviceID("555555555888");
    }

    _setDeviceModel() {
        console.log("setDeviceModel");
        RNBugly.setDeviceModel("HUAWEI Mate 60 Pro");
    }

    _setAppVersion() {
        console.log("setAppVersion");
        RNBugly.setAppVersion("2.0.3");
    }

    _setAppChannel() {
        console.log("setAppChannel");
        RNBugly.setAppChannel("HarmonyOS");
    }


    _putUserData() {
        console.log("putUserData");
        RNBugly.putUserData("name", "xiaoli");
    }


    _postException() {
        console.log("postException");
        RNBugly.postException({ category: 1, errorType: "test", errorMsg: "throw new err" });
    }

    _crash() {
        console.log("crash");
        RNBugly.testCrash(1);
    }

    _appfree() {
        console.log("appfree");
        RNBugly.testCrash(2);
    }


    render() {
        return (
            <View
                style={{ flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}
            >
                <ScrollView
                    style={{ flex: 1, width: '100%', height: '100%', marginTop: 150 }}
                >

                    <Button title='setAppVersion' onPress={this._setAppVersion} />

                    <Button title='setAppChannel' onPress={this._setAppChannel} />

                    <Button title='setUserId' onPress={this._setUserId} />

                    <Button title='setDeviceID' onPress={this._setDeviceID} />

                    <Button title='setDeviceModel' onPress={this._setDeviceModel} />

                    <Button title='init' onPress={this._init} />

                    <Button title='putUserData' onPress={this._putUserData} />

                    <Button title='postException' onPress={this._postException} />

                    <Button title='appfree' onPress={this._appfree} />

                    <Button title='crash' onPress={this._crash} />

                </ScrollView>
            </View>
        );
    }

}