import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import SYImagePicker from "react-native-syan-image-picker";

const {width} = Dimensions.get('window');

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            video: [],
        };
    }

    handleOpenImagePicker = () => {
        SYImagePicker.showImagePicker(
            {
                isCamera: true,
                imageCount: 1,
                isCrop: true,
                quality: 10,
                compress: true,
                enableBase64: true,
            }, (err, photos) => {
                if (!err) {
                    this.setState({
                        photos: photos,
                    });
                    {photos.map((item, index) => {
                            console.log("rn_syan_image_picker showImagePicker result: ",
                                "uri:" + item.uri + "-- " +
                                "width:" + item.width + "-- " +
                                "height:" + item.height + "-- " +
                                "type:" + item.type + "-- " +
                                "size:" + item.size + "-- " +
                                "original_uri:" + item.original_uri + "-- " +
                                "base64:" + item.base64 + "-- ");
                        })
                    }
                } else {
                    console.log(err);
                }
            },
        );
    };

    handleOpenImagePicker1 = () => {
        SYImagePicker.showImagePicker(
            {
                isCamera: true,
                imageCount: 1,
                isCrop: true,
                quality: 90,
                compress: true,
                enableBase64: true,
            }, (err, photos) => {
                if (!err) {
                    this.setState({
                        photos: photos,
                    });
                    {photos.map((item, index) => {
                        console.log("rn_syan_image_picker showImagePicker result: ",
                            "uri:" + item.uri + "-- " +
                            "width:" + item.width + "-- " +
                            "height:" + item.height + "-- " +
                            "type:" + item.type + "-- " +
                            "size:" + item.size + "-- " +
                            "original_uri:" + item.original_uri + "-- " +
                            "base64:" + item.base64 + "-- ");
                    })
                    }
                } else {
                    console.log(err);
                }
            },
        );
    };

    /**
     * 使用方式sync/await
     * 相册参数暂时只支持默认参数中罗列的属性；
     * @returns {Promise<void>}
     */
    handleAsyncSelectPhoto = async () => {
        try {
            const photos = await SYImagePicker.asyncShowImagePicker({
                isCamera: false,
                imageCount: 8,
                isCrop: false,
                compress: false,
                enableBase64: false,
            });
            // 选择成功
            this.setState({
                photos: photos,
            });
            {photos.map((item, index) => {
                console.log("rn_syan_image_picker handleAsyncSelectPhoto result: ",
                    "uri:" + item.uri + "-- " +
                    "width:" + item.width + "-- " +
                    "height:" + item.height + "-- " +
                    "type:" + item.type + "-- " +
                    "size:" + item.size + "-- " +
                    "original_uri:" + item.original_uri + "-- " +
                    "base64:" + item.base64 + "-- ");
            })}
        } catch (err) {
            console.log(err);
            // 取消选择，err.message为"取消"
        }
    };

    handlePromiseSelectPhoto = () => {
        this.setState({photos: []});
        SYImagePicker.asyncShowImagePicker({
            imageCount: 3,
            enableBase64: true,
        }).then(photos => {
                this.setState({
                    photos: photos,
                });
                {photos.map((item, index) => {
                        console.log("rn_syan_image_picker handlePromiseSelectPhoto result: ",
                            "uri:" + item.uri + "-- " +
                            "width:" + item.width + "-- " +
                            "height:" + item.height + "-- " +
                            "type:" + item.type + "-- " +
                            "size:" + item.size + "-- " +
                            "original_uri:" + item.original_uri + "-- " +
                            "base64:" + item.base64 + "-- ");
                    })
                }
            }).catch(err => {
                // 取消选择，err.message为"取消"
            });
    };

    handleLaunchCamera = async () => {
        SYImagePicker.openCamera(
            {isCrop: true, showCropCircle: true, showCropFrame: false},
            (err, photos) => {
                if (!err) {
                    this.setState({
                        photos: photos,
                    });
                    {photos.map((item, index) => {
                            console.log("rn_syan_image_picker handleLaunchCamera result: ",
                                "uri:" + item.uri + "-- " +
                                "width:" + item.width + "-- " +
                                "height:" + item.height + "-- " +
                                "type:" + item.type + "-- " +
                                "size:" + item.size + "-- " +
                                "original_uri:" + item.original_uri + "-- " +
                                "base64:" + item.base64 + "-- ");
                        })
                    }
                }
            },
        );
    };

    handleSyncLaunchCamera = async () => {
        try {
            const photos = await SYImagePicker.asyncOpenCamera({
                isCrop: true,
                showCropCircle: true,
                showCropFrame: false
            });
            this.setState({
                photos: photos,
            });

            {photos.map((item, index) => {
                    console.log("rn_syan_image_picker handleSyncLaunchCamera result: ",
                        "uri:" + item.uri + "-- " +
                        "width:" + item.width + "-- " +
                        "height:" + item.height + "-- " +
                        "type:" + item.type + "-- " +
                        "size:" + item.size + "-- " +
                        "original_uri:" + item.original_uri + "-- " +
                        "base64:" + item.base64 + "-- ");
                })}
        } catch (err) {
            console.log(err);
        }
    };

    handleDeleteCache = () => {
        SYImagePicker.deleteCache();
    };

    handleOpenVideoPicker = () => {
        SYImagePicker.openVideoPicker(
            {allowPickingMultipleVideo: true, videoCount: 10},
            (err, res) => {
                if (!err) {
                    this.setState({
                        photos: res,
                    });
                    {res.map((item, index) => {
                        console.log("rn_syan_image_picker handleOpenVideoPicker result: ",
                            "uri:" + item.uri + "-- " +
                            "width:" + item.width + "-- " +
                            "height:" + item.height + "-- " +
                            "type:" + item.type + "--" +
                            "size:" + item.size + "-- " +
                            "original_uri:" + item.original_uri + "-- " +
                            "base64:" + item.base64 + "-- ");
                    })}
                }
            },
        );
    };

    handleOpenVideoPickerNotAllowPickingMultipleVideo = () => {
        SYImagePicker.openVideoPicker(
            {allowPickingMultipleVideo: false},
            (err, res) => {
                if (!err) {
                    this.setState({
                        photos: res,
                    });
                    {res.map((item, index) => {
                        console.log("rn_syan_image_picker handleOpenVideoPickerNotAllowPickingMultipleVideo result: ",
                            "uri:" + item.uri + "-- " +
                            "width:" + item.width + "-- " +
                            "height:" + item.height + "-- " +
                            "type:" + item.type + "-- " +
                            "size:" + item.size + "-- " +
                            "original_uri:" + item.original_uri + "-- " +
                            "base64:" + item.base64 + "-- ");
                    })}
                }
            },
        );
    };

    handleRemoveAll=()=>{
        SYImagePicker.removeAllPhoto();
    }

    handleRemoveAtIndex=()=>{
        const {photos} = this.state;
        if(!!photos && photos.length > 0){
            SYImagePicker.removePhotoAtIndex(0);
        }
    }

    render() {
        const {photos} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.scroll}>
                    <Button title={'拍照'} onPress={this.handleLaunchCamera}/>
                    <Button title={'拍照(异步)'} onPress={this.handleSyncLaunchCamera}/>
                    <Button title={'开启压缩(quality=10)'} onPress={this.handleOpenImagePicker}/>
                    <Button title={'开启压缩(quality=90)'} onPress={this.handleOpenImagePicker1}/>
                    <Button title={'关闭压缩'} onPress={this.handleAsyncSelectPhoto}/>
                    <Button title={'选择照片(Promise)带base64'} onPress={this.handlePromiseSelectPhoto}/>
                    <Button title={'缓存清除'} onPress={this.handleDeleteCache}/>
                    <Button title={'选择视频(allowPickingMultipleVideo=true)'} onPress={this.handleOpenVideoPicker}/>
                    <Button title={'选择视频(allowPickingMultipleVideo=false)'}
                            onPress={this.handleOpenVideoPickerNotAllowPickingMultipleVideo}/>
                    <Button title={'刪除全部图片'} onPress={this.handleRemoveAll}/>
                    <Button title={'通过索引删除图片(第一张)'} onPress={this.handleRemoveAtIndex}/>
                </View>
                <ScrollView style={{flex: 1}} contentContainerStyle={styles.scroll}>
                    {photos.map((item, index) => {
                        let source = {uri: item.uri};
                        return (
                            <Image
                                key={`image-${index}`}
                                style={styles.image}
                                source={source}
                                resizeMode={'contain'}
                            />
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
}

const Button = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={{color: '#fff', fontSize: 16}}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: 40,
    },
    btn: {
        backgroundColor: '#FDA549',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        paddingHorizontal: 12,
        margin: 5,
        borderRadius: 22,
    },
    scroll: {
        padding: 5,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    image: {
        margin: 10,
        width: (width - 80) / 3,
        height: (width - 80) / 3,
        backgroundColor: '#F0F0F0',
    }
});
