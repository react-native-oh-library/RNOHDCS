import React, { PureComponent } from 'react';
import {
    View,
    Modal,
    Text,
    ImageBackground,
    StyleSheet
} from 'react-native';
import Bar from './Bar';


const propTypes = {
    ...Modal.propTypes,
};

const defaultProps = {
    animationType: 'none',
    transparent: true,
    progressModalVisible: false,
    onRequestClose: () => {},
};

/* 更新进度条Modal */
class ProgressBarModal extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            title: '正在下载更新文件' // 更新提示标题
        };
    }

    render() {
        const {
            animationType,
            transparent,
            onRequestClose,
            progress,
            progressModalVisible,
            totalPackageSize,
            receivedPackageSize,
        } = this.props;
        return (
            <Modal
                animationType={animationType}
                transparent={transparent}
                visible={progressModalVisible}
                onRequestClose={onRequestClose}
            >
                
                <View style={styles.progressBarView}>
                    <View style={styles.imageBg}>
                        <Text style={styles.title}>
                            {this.state.title}
                        </Text>
                    </View>
                    <View style={styles.subView}>
                        <Bar
                            style={{ width:540, borderRadius:30 }}
                            progress={progress}
                            backgroundStyle={styles.barBackgroundStyle}
                        />
                        <Text style={styles.textPackageSize}>
                            {`${receivedPackageSize}M/${totalPackageSize}M`}
                        </Text>
                        <Text style={{color:'red',marginTop:100}}>*温馨提示:下载完更新文件，应用会重启</Text>
                    </View>
                    <View style={styles.bottomContainer} />
                </View>
            </Modal>
        );
    }
}

ProgressBarModal.propTypes = propTypes;
ProgressBarModal.defaultProps = defaultProps;

export default ProgressBarModal;

const styles = StyleSheet.create({
    imageBg: {
        width: 600,
        height:100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#1083E6',
        borderTopLeftRadius:26,
        borderTopRightRadius:26,
    },
    progressBarView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    // 默认进度条背景底色
    barBackgroundStyle: {
        backgroundColor: '#e0e0e0'
    },
    subView: {
        width: 600,
        height: 296,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomContainer: {
        width:600,
        height:39,
        borderBottomLeftRadius:26,
        borderBottomRightRadius:26,
        backgroundColor: '#FFF'
    },
    textPackageSize: {
        fontSize:40,
        color: '#686868',
        marginTop: 36
    },
    title: {
        color: '#FFF',
        fontSize: 30
    }
})