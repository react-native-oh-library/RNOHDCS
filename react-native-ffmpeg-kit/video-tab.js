import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import RNFS from 'react-native-fs';
import VideoUtil from './video-util';
import {FFmpegKit, FFmpegKitConfig, ReturnCode} from 'ffmpeg-kit-react-native';
import { Picker } from "@react-native-oh-tpl/picker";
import {styles} from './style';
import {ProgressModal} from "./progress_modal";
import Video from 'react-native-video';
import {deleteFile, ffprint, notNull} from './util';

export default class VideoTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCodec: 'mpeg4', statistics: undefined,testlog:''
        };

        this.progressModalReference = React.createRef();
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', (_) => {
            this.pause();
            this.setActive();
        });
    }

    setActive() {
        ffprint("Video Tab Activated");
        FFmpegKitConfig.enableLogCallback(undefined);
        FFmpegKitConfig.enableStatisticsCallback(undefined);
    }

    encodeVideo = () => {
        let image1Path = VideoUtil.assetPath(VideoUtil.ASSET_1);
        let image2Path = VideoUtil.assetPath(VideoUtil.ASSET_2);
        let image3Path = VideoUtil.assetPath(VideoUtil.ASSET_3);
        let videoFile = this.getVideoFile();

        // IF VIDEO IS PLAYING STOP PLAYBACK
        this.pause();

        deleteFile(videoFile);

        let videoCodec = this.getSelectedVideoCodec();

        ffprint(`Testing VIDEO encoding with '${videoCodec}' codec`);

        this.hideProgressDialog();
        this.showProgressDialog();

        let ffmpegCommand = VideoUtil.generateEncodeVideoScriptWithCustomPixelFormat(image1Path, image2Path, image3Path, videoFile, videoCodec, this.getPixelFormat(), this.getCustomOptions());

        ffprint(`FFmpeg process started with arguments: \'${ffmpegCommand}\'.`);
        this.setState({testlog: ''});
        FFmpegKit.executeAsync(ffmpegCommand, async (session) => {
            const state = FFmpegKitConfig.sessionStateToString(await session.getState());
            const returnCode = await session.getReturnCode();
            const failStackTrace = await session.getFailStackTrace();
            const duration = await session.getDuration();

            this.hideProgressDialog();

            if (ReturnCode.isSuccess(returnCode)) {
                ffprint(`Encode completed successfully in ${duration} milliseconds; playing video.`);
                const path = `${RNFS.CachesDirectoryPath}/video.mp4`;

                RNFS.readDir(RNFS.CachesDirectoryPath) // 这将返回该目录下的所有文件和文件夹
                .then((result) => {
                    // 筛选出文件，并打印它们的名字
                    const files = result.filter(item => item.isFile()).map(item => item.name);
                    for(let i = 0; i < files.length; i++){
                        if(videoCodec === "mpeg4" && files[i] === "video.mp4"){
                            this.setState({testlog: `video.mp4 文件已生成.`});
                        }
                    }
                })
                .catch((err) => {
                    console.log(err.message, err.code);
                });
                this.playVideo();
            } else {
                ffprint("Encode failed. Please check log for the details.");
                ffprint(`Encode failed with state ${state} and rc ${returnCode}.${notNull(failStackTrace, "\\n")}`);
            }
        }, log => {
            ffprint(log.getMessage());
        }, statistics => {
            this.setState({statistics: statistics});
            this.updateProgressDialog();
        }).then(session => ffprint(`Async FFmpeg process started with sessionId ${session.getSessionId()}.`));
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

    getPixelFormat() {
        let videoCodec = this.state.selectedCodec;

        let pixelFormat;
        if (videoCodec === "x265") {
            pixelFormat = "yuv420p10le";
        } else {
            pixelFormat = "yuv420p";
        }

        return pixelFormat;
    }

    getSelectedVideoCodec() {
        let videoCodec = this.state.selectedCodec;

        // VIDEO CODEC MENU HAS BASIC NAMES, FFMPEG NEEDS LONGER LIBRARY NAMES.
        // APPLYING NECESSARY TRANSFORMATION HERE
        switch (videoCodec) {
            case "x264":
                videoCodec = "libx264";
                break;
            case "x265":
                videoCodec = "libx265";
                break;
            case "openh264":
                videoCodec = "libopenh264";
                break;
            case "xvid":
                videoCodec = "libxvid";
                break;
            case "vp8":
                videoCodec = "libvpx";
                break;
            case "vp9":
                videoCodec = "libvpx-vp9";
                break;
        }

        return videoCodec;
    }

    getVideoFile() {
        let videoCodec = this.state.selectedCodec;

        let extension;
        switch (videoCodec) {
            case "vp8":
            case "vp9":
                extension = "webm";
                break;
            default:
                // mpeg4, x264, h264_mediacodec, hevc_mediacodec, x265, xvid, kvazaar
                extension = "mp4";
                break;
        }

        return `${RNFS.CachesDirectoryPath}/video.${extension}`;
    }

    getCustomOptions() {
        let videoCodec = this.state.selectedCodec;

        switch (videoCodec) {
            case "x265":
                return "-crf 28 -preset fast ";
            case "vp8":
                return "-b:v 1M -crf 10 ";
            case "vp9":
                return "-b:v 2M ";
            case "aom":
                return "-crf 30 -strict experimental ";
            case "theora":
                return "-qscale:v 7 ";
            case "hap":
                return "-format hap_q ";
            default:
                // kvazaar, mpeg4, x264, h264_mediacodec, hevc_mediacodec, xvid
                return "";
        }
    }

    showProgressDialog() {
        // CLEAN STATISTICS
        this.setState({statistics: undefined});
        this.progressModalReference.current.show(`Encoding video`);
    }

    updateProgressDialog() {
        let statistics = this.state.statistics;
        if (statistics === undefined || statistics.getTime() < 0) {
            return;
        }

        let timeInMilliseconds = statistics.getTime();

        let totalVideoDuration = 9000;
        let completePercentage = Math.round((timeInMilliseconds * 100) / totalVideoDuration);
        this.progressModalReference.current.update(`Encoding video % ${completePercentage}`);
    }

    hideProgressDialog() {
        this.progressModalReference.current.hide();
    }

    onPlayError = (err) => {
        ffprint('Play error: ' + JSON.stringify(err));
    }

    render() {
        return (<View style={styles.screenStyle}>
            <View style={styles.headerViewStyle}>
                <Text
                    style={styles.headerTextStyle}>
                    Video tab
                </Text>
            </View>
            <View>
            <Picker
                    selectedValue={this.state.selectedCodec}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectedCodec: itemValue})}>
                    <Picker.Item label="mpeg4" value="mpeg4"/>
                    <Picker.Item label="x264" value="x264"/>
                    <Picker.Item label="x265" value="x265"/>
                    <Picker.Item label="openh264" value="openh264"/>
                    <Picker.Item label="xvid" value="xvid"/>
                    <Picker.Item label="vp8" value="vp8"/>
                    <Picker.Item label="vp9" value="vp9"/>
                </Picker>
            </View>
            <View style={styles.buttonViewStyle}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this.encodeVideo}>
                    <Text style={styles.buttonTextStyle}>CREATE</Text>
                </TouchableOpacity>
            </View>
            <ProgressModal
                visible={false}
                ref={this.progressModalReference}/>
            <Text style={{height:40}}>test log 在这里：{this.state.testlog}</Text>
            <Video
                source={{uri: this.getVideoFile()}}
                ref={(ref) => {
                    this.player = ref
                }}
                hideShutterView={true}
                paused={this.state.paused}
                // onError={this.onPlayError}
                resizeMode={"stretch"}
                style={styles.videoPlayerViewStyle}/>
        </View>);
    }

}
