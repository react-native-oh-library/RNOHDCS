import React from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {ffprint, deleteFile, notNull} from './util';
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


export default class CommandTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            commandText: '', outputText: ''
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

    runTest1 = async () => {

        deleteFile("/data/storage/el2/base/haps/entry/cache/outputtestaac.aac");

        FFmpegKit.execute("-i /data/storage/el2/base/haps/entry/cache/testaac.m4a -c copy /data/storage/el2/base/haps/entry/cache/outputtestaac.aac").then(async (session) => {
            const returnCode = await session.getReturnCode();
            if(returnCode == 0){
                this.appendOutput(`m4a音频转aac音频处理测试成功。\n`);
            } else {
                this.appendOutput(`m4a音频转aac音频处理测试失败。\n`);
            }
        });
    };

    runTest2 = () => {
        // 需要先执行videotab中的v8生成video.webm文件
        deleteFile("/data/storage/el2/base/haps/entry/cache/outputmp4.mp4");
        FFmpegKit.execute("-i /data/storage/el2/base/haps/entry/cache/videoTest.webm -c:a aac /data/storage/el2/base/haps/entry/cache/outputmp4.mp4").then(async (session) => {
            const returnCode = await session.getReturnCode();
            if(returnCode == 0){
                this.appendOutput(`webm视频转mp4处理测试成功。 \n`);
            } else {
                this.appendOutput(`webm视频转mp4处理测试失败。 \n`);
            }
        });
    };

    runTest3 = () => {
        // 需要先执行视频转MP4生成outputmp4.mp4
        deleteFile("/data/storage/el2/base/haps/entry/cache/outputjpg.jpg");
        FFmpegKit.execute("-ss 00:00:03 -i /data/storage/el2/base/haps/entry/cache/outputmp4.mp4 -vframes 1 /data/storage/el2/base/haps/entry/cache/outputjpg.jpg").then(async (session) => {
            const returnCode = await session.getReturnCode();
            if(returnCode == 0){
                this.appendOutput(`视频封面处理测试成功。 \n`);
            } else {
                this.appendOutput(`视频封面处理测试失败。 \n`);
            }
        });
    };

    runTest4 = () => {
        // 需要先执行音频转aac生成outputtestaac.aac
        deleteFile("/data/storage/el2/base/haps/entry/cache/outputysaac.aac");
        FFmpegKit.execute("-i /data/storage/el2/base/haps/entry/cache/outputtestaac.aac -b:a 64k /data/storage/el2/base/haps/entry/cache/outputysaac.aac").then(async (session) => {
            const returnCode = await session.getReturnCode();
            if(returnCode == 0){
                this.appendOutput(`音频压缩处理测试成功。\n`);
            } else {
                this.appendOutput(`音频压缩处理测试失败。\n`);
            }

        });
    };

    runTest5 = () => {
        // 需要先执行视频转MP4生成outputmp4.mp4
        deleteFile("/data/storage/el2/base/haps/entry/cache/outputysmp4.mp4");
        FFmpegKit.execute("-i /data/storage/el2/base/haps/entry/cache/outputmp4.mp4 -b:v 100k -bufsize 100k /data/storage/el2/base/haps/entry/cache/outputysmp4.mp4").then(async (session) => {
            const returnCode = await session.getReturnCode();
            if(returnCode == 0){
                this.appendOutput(`视频压缩处理测试成功。\n`);
            } else {
                this.appendOutput(`视频压缩处理测试失败。\n`);
            }

        });
    };

    runTest6 = () => {
        deleteFile("/data/storage/el2/base/haps/entry/cache/outputysjpg.jpg");
        FFmpegKit.execute("-i /data/storage/el2/base/haps/entry/cache/pyramid.jpg -b:v 2k /data/storage/el2/base/haps/entry/cache/outputysjpg.jpg").then(async (session) => {
            const returnCode = await session.getReturnCode();
            if(returnCode == 0){
                this.appendOutput(`图片压缩处理测试成功。\n`);
            } else {
                this.appendOutput(`图片压缩处理测试失败。\n`);
            }

        });
    };
    
    render() {
        return (<View style={styles.screenStyle}>
            <View style={styles.headerViewStyle}>
                <Text style={styles.headerTextStyle}>
                    TEST MAIN
                </Text>
            </View>

            <View style={[styles.buttonViewStyle, {paddingTop: 20, flexDirection: 'row'}]}>
                    <TouchableOpacity
                        style={[styles.buttonStyle, {width: 92}]}
                        onPress={() => this.runTest1()}>
                        <Text style={styles.buttonTextStyle}>音频转aac</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonStyle, {width: 92, marginHorizontal: 20}]}
                        onPress={() => this.runTest2()}>
                        <Text style={styles.buttonTextStyle}>视频转mp4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonStyle, {width: 92}]}
                        onPress={() => this.runTest3()}>
                        <Text style={styles.buttonTextStyle}>视频封面</Text>
                    </TouchableOpacity>
            </View>

            <View style={[styles.buttonViewStyle, {paddingBottom: 0, flexDirection: 'row'}]}>
                    <TouchableOpacity
                        style={[styles.buttonStyle, {width: 92}]}
                        onPress={() => this.runTest4()}>
                        <Text style={styles.buttonTextStyle}>音频压缩</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonStyle, {width: 92, marginHorizontal: 20}]}
                        onPress={() => this.runTest5()}>
                        <Text style={styles.buttonTextStyle}>视频压缩</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonStyle, {width: 92}]}
                        onPress={() => this.runTest6()}>
                        <Text style={styles.buttonTextStyle}>图片压缩</Text>
                    </TouchableOpacity>
            </View>

            
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
