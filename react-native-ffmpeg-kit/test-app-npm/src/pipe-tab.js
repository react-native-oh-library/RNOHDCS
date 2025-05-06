import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import RNFS from 'react-native-fs';
import VideoUtil from './video-util';
import {FFmpegKit, FFmpegKitConfig, ReturnCode} from 'ffmpeg-kit-react-native';
import {styles} from './style';
import {ProgressModal} from "./progress_modal";
import {deleteFile, ffprint, listAllStatistics, notNull} from './util';

export default class PipeTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            statistics: undefined,
            outputText: ''
        };

        this.progressModalReference = React.createRef();
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', (_) => {
            this.pause();
            this.clearOutput();
            this.setActive();
        });
    }

    setActive() {
        ffprint("Pipe Tab Activated");
        FFmpegKitConfig.enableLogCallback(this.logCallback);
        FFmpegKitConfig.enableStatisticsCallback(this.statisticsCallback);
    }

    logCallback = (log) => {
        ffprint("logCallback: " + log.getMessage());
        this.appendOutput("logCallback: " + log.getMessage());
    }

    statisticsCallback = (statistics) => {
        this.setState({statistics: statistics});
        this.updateProgressDialog();
    }

    appendOutput(logMessage) {
        this.setState({outputText: this.state.outputText + logMessage});
    };

    clearOutput() {
        this.setState({outputText: ''});
    }

    createVideo = () => {
        let videoFile = this.getVideoFile();
        FFmpegKitConfig.registerNewFFmpegPipe().then((pipe1) => {
            this.appendOutput(`pipe1: ${pipe1}\n`);
            this.appendOutput("管道文件pipe1已经生成，请查看手机目录：/data/storage/el2/base/haps/entry/cache/.cache/ffmpegkit/pipes/fk_pipe_1");
            FFmpegKitConfig.registerNewFFmpegPipe().then((pipe2) => {
                this.appendOutput(`pipe2: ${pipe2}\n`);
                this.appendOutput("管道文件pipe2已经生成，请查看手机目录：/data/storage/el2/base/haps/entry/cache/.cache/ffmpegkit/pipes/fk_pipe_2");
                FFmpegKitConfig.registerNewFFmpegPipe().then((pipe3) => {

                    // IF VIDEO IS PLAYING STOP PLAYBACK
                    this.pause();
                    this.appendOutput(`pipe3: ${pipe3}\n`);
                    this.appendOutput("管道文件pipe3已经生成，请查看手机目录：/data/storage/el2/base/haps/entry/cache/.cache/ffmpegkit/pipes/fk_pipe_3");

                    deleteFile(videoFile);

                    ffprint("Testing PIPE with 'mpeg4' codec");
                    FFmpegKitConfig.writeToPipe(VideoUtil.assetPath(VideoUtil.ASSET_1), pipe1);
                    FFmpegKitConfig.writeToPipe(VideoUtil.assetPath(VideoUtil.ASSET_2), pipe2);
                    FFmpegKitConfig.writeToPipe(VideoUtil.assetPath(VideoUtil.ASSET_3), pipe3);
                });
            });
        });
    }

    playVideo() {
        let player = this.player;
        if (player !== undefined) {
            player.seek(0);
        }
        this.setState({paused: false});
    }

    pause() {
        this.setState({paused: true});
    }

    getVideoFile() {
        return `${RNFS.CachesDirectoryPath}/video.mp4`;
    }

    showProgressDialog() {
        // CLEAN STATISTICS
        this.setState({statistics: undefined});
        this.progressModalReference.current.show(`Creating video`);
    }

    updateProgressDialog() {
        let statistics = this.state.statistics;
        if (statistics === undefined || statistics.getTime() < 0) {
            return;
        }

        let timeInMilliseconds = statistics.getTime();
        let totalVideoDuration = 9000;
        let completePercentage = Math.round((timeInMilliseconds * 100) / totalVideoDuration);
        this.progressModalReference.current.update(`Creating video % ${completePercentage}`);
    }

    hideProgressDialog() {
        this.progressModalReference.current.hide();
    }

    onPlayError = (err) => {
        ffprint('Play error: ' + JSON.stringify(err));
    }

    render() {
        return (
            <View style={styles.screenStyle}>
                <View style={styles.headerViewStyle}>
                    <Text
                        style={styles.headerTextStyle}>
                        FFmpegKit ReactNative
                    </Text>
                </View>
                <View style={[styles.buttonViewStyle, {paddingTop: 50, paddingBottom: 50}]}>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.createVideo}>
                        <Text style={styles.buttonTextStyle}>CREATE</Text>
                    </TouchableOpacity>
                </View>
                <ProgressModal
                    visible={false}
                    ref={this.progressModalReference}/>
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
            </View>
        );
    }

}