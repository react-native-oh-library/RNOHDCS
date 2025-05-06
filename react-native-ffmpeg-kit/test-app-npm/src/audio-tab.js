import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import RNFS from 'react-native-fs';
import { Picker } from "@react-native-oh-tpl/picker";
import {styles} from './style';
import {ProgressModal} from "./progress_modal";
import {deleteFile, ffprint, listAllLogs, notNull} from './util';
import {FFmpegKit, FFmpegKitConfig, ReturnCode} from 'ffmpeg-kit-react-native';

export default class AudioTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCodec: 'mp2 (twolame)',
            outputText: ''
        };

        this.progressModalReference = React.createRef();
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', (_) => {
            this.clearOutput();
            this.setActive();
        });
    }

    setActive() {
        ffprint("Audio Tab Activated");
        FFmpegKitConfig.enableLogCallback(undefined);
        FFmpegKitConfig.enableStatisticsCallback(undefined);
        this.createAudioSample();
		FFmpegKitConfig.enableLogs();
        FFmpegKitConfig.enableLogCallback(this.logCallback);
    }

    logCallback = (log) => {
        this.appendOutput(`${log.getSessionId()} -> ${log.getMessage()}`);
    };

    appendOutput(logMessage) {
        this.setState({outputText: this.state.outputText + logMessage});
    };

    clearOutput() {
        this.setState({outputText: ''});
    }

    encodeAudio = () => {
        let audioOutputFile = this.getAudioOutputFile();
        deleteFile(audioOutputFile);

        let audioCodec = this.state.selectedCodec;

        ffprint(`Testing AUDIO encoding with '${audioCodec}' codec`);

        let ffmpegCommand = this.generateAudioEncodeScript();

        this.hideProgressDialog();
        this.showProgressDialog();

        this.clearOutput();

        ffprint(`FFmpeg process started with arguments: \'${ffmpegCommand}\'.`);

        FFmpegKit.execute(ffmpegCommand).then(async (session) => {
                const state = FFmpegKitConfig.sessionStateToString(await session.getState());
                const returnCode = await session.getReturnCode();
                const failStackTrace = await session.getFailStackTrace();

                this.hideProgressDialog();

                if (ReturnCode.isSuccess(returnCode)) {
                    ffprint("Encode completed successfully.");
                    ffprint("Encode completed successfully.");
                    listAllLogs(session);
                } else {
                    ffprint("Encode failed. Please check log for the details.");
                    ffprint(`Encode failed with state ${state} and rc ${returnCode}.${notNull(failStackTrace, "\\n")}`);
                }
            }
        );
    }

    createAudioSample() {
        ffprint("Creating AUDIO sample before the test.");

        let audioSampleFile = this.getAudioSampleFile();
        deleteFile(audioSampleFile);

        let ffmpegCommand = `-hide_banner -y -f lavfi -i sine=frequency=1000:duration=5 -c:a pcm_s16le ${audioSampleFile}`;

        ffprint(`Creating audio sample with '${ffmpegCommand}'.`);

        FFmpegKit.execute(ffmpegCommand).then(async (session) => {
                const state = FFmpegKitConfig.sessionStateToString(await session.getState());
                const returnCode = await session.getReturnCode();
                const failStackTrace = await session.getFailStackTrace();

                if (ReturnCode.isSuccess(returnCode)) {
                    ffprint("AUDIO sample created");
                } else {
                    ffprint(`Creating AUDIO sample failed with state ${state} and rc ${returnCode}.${notNull(failStackTrace, "\\n")}`);
                    ffprint("Creating AUDIO sample failed. Please check log for the details.");
                }
            }
        );
    }

    getAudioOutputFile() {
        let audioCodec = this.state.selectedCodec;

        let extension;
        switch (audioCodec) {
            case "mp2 (twolame)":
                extension = "mpg";
                break;
            case "mp3 (liblame)":
                extension = "mp3";
                break;
            case "vorbis":
                extension = "ogg";
                break;
            case "opus":
                extension = "opus";
                break;
            case "speex":
                extension = "spx";
                break;
            case "wavpack":
                extension = "wv";
                break;
            default:
                // soxr
                extension = "wav";
                break;
        }

        return `${RNFS.CachesDirectoryPath}/audio.${extension}`;
    }

    getAudioSampleFile() {
        return `${RNFS.CachesDirectoryPath}/audio-sample.wav`;
    }

    showProgressDialog() {
        this.progressModalReference.current.show(`Encoding audio`);
    }

    hideProgressDialog() {
        this.progressModalReference.current.hide();
    }

    generateAudioEncodeScript() {
        let audioCodec = this.state.selectedCodec;
        let audioSampleFile = this.getAudioSampleFile();
        let audioOutputFile = this.getAudioOutputFile();

        switch (audioCodec) {
            case "mp2 (twolame)":
                return `-hide_banner -y -i ${audioSampleFile} -c:a mp2 -b:a 192k ${audioOutputFile}`;
            case "mp3 (liblame)":
                return `-hide_banner -y -i ${audioSampleFile} -c:a libmp3lame -qscale:a 2 ${audioOutputFile}`;
            case "vorbis":
                return `-hide_banner -y -i ${audioSampleFile} -c:a libvorbis -b:a 64k ${audioOutputFile}`;
            case "wavpack":
                return `-hide_banner -y -i ${audioSampleFile} -c:a wavpack -b:a 64k ${audioOutputFile}`;
            case "opus":
                return `-hide_banner -y -i ${audioSampleFile} -c:a libopus -b:a 64k -vbr on -compression_level 10 ${audioOutputFile}`;
            case "speex":
                return `-hide_banner -y -i ${audioSampleFile} -c:a libspeex -ar 16000 ${audioOutputFile}`;
            default:

                // soxr
                return `-hide_banner -y -i ${audioSampleFile} -af aresample=resampler=soxr -ar 44100 ${audioOutputFile}`;
        }
    }

    render() {
        return (
            <View style={styles.screenStyle}>
                <View style={styles.headerViewStyle}>
                    <Text
                        style={styles.headerTextStyle}>
                        audio tab
                    </Text>
                </View>
                <View>
                <Picker
                        selectedValue={this.state.selectedCodec}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({selectedCodec: itemValue})
                        }>
                        <Picker.Item label="mp2 (twolame)" value="mp2 (twolame)"/>
                        <Picker.Item label="mp3 (liblame)" value="mp3 (liblame)"/>
                        <Picker.Item label="vorbis" value="vorbis"/>
                        <Picker.Item label="wavpack" value="wavpack"/>
                        <Picker.Item label="opus" value="opus"/>
                    </Picker>
                </View>
                <View style={styles.buttonViewStyle}>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.encodeAudio}>
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
