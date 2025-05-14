import React from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {ffprint, listFFprobeSessions, notNull} from './util';
import {
    FFmpegKit,
    FFmpegKitConfig,
    FFprobeSession,
    Level,
    LogRedirectionStrategy,
    SessionState,
    Packages,
    Signal,
    FFprobeKit
} from "ffmpeg-kit-react-native";
import RNFS from 'react-native-fs';
import {today} from "./util";


export default class CommandTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            commandText: '-i /data/storage/el2/base/haps/entry/cache/testaac.m4a -c copy /data/storage/el2/base/haps/entry/cache/outputtestaac.aac', outputText: '', testlog:'',
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', (_) => {
           this.clearOutput();
           this.setActive();
        });
    }

    setActive() {
        ffprint("Command Tab Activated");
        FFmpegKitConfig.enableLogCallback(undefined);
        FFmpegKitConfig.enableStatisticsCallback(undefined);
    }

    appendOutput(logMessage) {
        this.setState({outputText: this.state.outputText + logMessage});
    };

    clearOutput() {
        this.setState({outputText: ''});
    }

    runTest = async () => {
        this.clearOutput();

        this.appendOutput("init success. \n");
        const version = await FFmpegKitConfig.getFFmpegVersion();
        this.appendOutput(`FFmpeg version: ${version} \n`);
        const platform = await FFmpegKitConfig.getPlatform();
        this.appendOutput(`Platform: ${platform} \n`);
        await FFmpegKitConfig.setLogLevel(Level.AV_LOG_QUIET);
        ffprint('log level: ' + FFmpegKitConfig.getLogLevel());
        if(FFmpegKitConfig.getLogLevel() == -8){
            this.appendOutput(`Old log level: QUIET \n`)
        }
        await FFmpegKitConfig.setLogLevel(Level.AV_LOG_INFO);
        this.appendOutput(`New log level: ${Level.levelToString(FFmpegKitConfig.getLogLevel())} \n`)
        const packageName = await Packages.getPackageName();
        this.appendOutput(`Package name: ${packageName} \n`);
        // Packages.getExternalLibraries().then(packageList => packageList.forEach(value => ffprint(`External library: ${value}`)));
        await FFmpegKitConfig.ignoreSignal(Signal.SIGXCPU);
        this.appendOutput("Testing common api methods ignoreSignal is call \n");
        let sessionsCount = (await FFmpegKitConfig.getSessions()).length
        this.appendOutput(`FFmpegKit getSessions count: ${sessionsCount} \n`);
        

        let fontNameMapping = new Map();
        fontNameMapping["MyFontName"] = "Doppio One";
        await FFmpegKitConfig.setFontDirectoryList([RNFS.CachesDirectoryPath, "/system/fonts", "/System/Library/Fonts"], fontNameMapping);
        this.appendOutput("setFontDirectoryList set success. \n");
        
        await FFmpegKitConfig.setEnvironmentVariable("FFREPORT", "file=" +
            RNFS.CachesDirectoryPath + "/" + today() + "-ffreport.txt");
        this.appendOutput("setEnvironmentVariable set success. \n");

        let sessionList = await FFprobeKit.listFFprobeSessions();
        this.appendOutput(`FFprobe Sessions Listing ${sessionList.length} FFprobe sessions asynchronously.\n`);
    };

    runFFmpeg = () => {
        this.clearOutput();
        this.setState({testlog: ""});

        let ffmpegCommand = this.state.commandText;

        ffprint(`Current log level is ${Level.levelToString(FFmpegKitConfig.getLogLevel())}.`);

        this.setState({testlog: this.state.testlog + `log level is: ${Level.levelToString(FFmpegKitConfig.getLogLevel())}. \n`});

        ffprint('Testing FFmpeg COMMAND asynchronously.');

        ffprint(`FFmpeg process started with arguments: \'${ffmpegCommand}\'.`);

        FFmpegKit.execute(ffmpegCommand).then(async (session) => {
            const state = FFmpegKitConfig.sessionStateToString(await session.getState());
            const returnCode = await session.getReturnCode();
            const failStackTrace = await session.getFailStackTrace();
            const output = await session.getOutput();

            ffprint(`FFmpeg process exited with state ${state} and rc ${returnCode}.${notNull(failStackTrace, "\\n")}`);

            this.setState({testlog: this.state.testlog + `FFmpeg process exited with state ${state} and rc ${returnCode}.${notNull(failStackTrace, "\\n")} \n`});

            this.appendOutput(output);

            if (state === SessionState.FAILED || !returnCode.isValueSuccess()) {
                ffprint("Command failed. Please check output for the details.");
            }
        });
    };

    runFFprobe = () => {
        this.clearOutput();
        this.setState({testlog: ""});

        let ffprobeCommand = this.state.commandText;

        ffprint('Testing FFprobe COMMAND asynchronously.');

        ffprint(`FFprobe process started with arguments: \'${ffprobeCommand}\'.`);

        FFprobeSession.create(FFmpegKitConfig.parseArguments(ffprobeCommand), async (session) => {

            const state = FFmpegKitConfig.sessionStateToString(await session.getState());
            const returnCode = await session.getReturnCode();
            const failStackTrace = await session.getFailStackTrace();
            session.getOutput().then(output => this.appendOutput(output));

            this.setState({testlog: this.state.testlog + "parseArguments 已被调用. \n"});

            ffprint(`FFprobe process exited with state ${state} and rc ${returnCode}.${notNull(failStackTrace, "\\n")}`);

            if (state === SessionState.FAILED || !returnCode.isValueSuccess()) {
                ffprint("Command failed. Please check output for the details.");
            }

        }, undefined, LogRedirectionStrategy.NEVER_PRINT_LOGS).then(session => {
            FFmpegKitConfig.asyncFFprobeExecute(session);

            this.setState({testlog: this.state.testlog + "asyncFFprobeExecute 已被调用. \n"});

            //listFFprobeSessions();
            FFprobeKit.listFFprobeSessions().then(sessionList => {
                this.setState({testlog: this.state.testlog + `FFprobe session count: ${sessionList.length}.\n`});
            });
        });
    };

    render() {
        return (<View style={styles.screenStyle}>
            <View style={styles.headerViewStyle}>
                <Text style={styles.headerTextStyle}>
                    COMMAND
                </Text>
            </View>
            <View style={styles.textInputViewStyle}>
                <TextInput
                    style={styles.textInputStyle}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder="Enter command"
                    underlineColorAndroid="transparent"
                    onChangeText={(commandText) => this.setState({commandText})}
                    value={this.state.commandText}
                />
            </View>
            <View style={[styles.buttonViewStyle, {flexDirection: 'row'}]}>
                <TouchableOpacity
                    style={[styles.buttonStyle, {width: 92}]}
                    onPress={this.runFFmpeg}>
                    <Text style={styles.buttonTextStyle}>RUN FFMPEG</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonStyle, {width: 92, marginHorizontal: 20}]}
                    onPress={this.runFFprobe}>
                    <Text style={styles.buttonTextStyle}>RUN FFPROBE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonStyle, {width: 92}]}
                    onPress={this.runTest}>
                    <Text style={styles.buttonTextStyle}>RUN TEST</Text>
                </TouchableOpacity>
            </View>
            <Text style={{height:40}}>test log 在这里：{this.state.testlog}</Text>
            <View style={styles.outputViewStyle}>
                <ScrollView
                    ref={(view) => {
                        this.scrollViewReference = view;
                    }}
                    onContentSizeChange={(width, height) => this.scrollViewReference.scrollTo({y: height})}
                    style={styles.outputScrollViewStyle}>
                    <Text style={styles.outputTextStyle}>{this.state.outputText}</Text>
                </ScrollView>
            </View>
        </View>);
    };

}
