import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, PermissionsAndroid } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RNThumbnail from 'react-native-thumbnail';

export default function ThumbnailExample() {
    const [thumbnail, setThumbnail] = React.useState(null);
    const [width, setWidth] = React.useState(null);
    const [height, setHeight] = React.useState(null);

    const openCamera = async () => {
        try {
            const options = {
                mediaType: 'video',
                saveToPhotos: true,
                includeExtra: false,
                durationLimit: 5,
            };
            console.log('Launching camera with options:', options);
            const result = await launchCamera(options);
            console.log('Camera result:', result);
            if (result.didCancel) {
                console.log('User cancelled camera');
            } else if (result.errorCode === 'permission') {
                console.log('Permission not granted for camera.');
            } else if (result.errorCode === 'camera_unavailable') {
                console.log('Camera not available on device.');
            } else if (result.errorCode === 'others') {
                console.log(`Other error: ${result.errorMessage}`);
            } else {
                // 检查是否成功获取到视频
                if (result && result.assets && result.assets.length > 0) {
                    const asset = result.assets[0];
                    if (asset.type.includes('mp4')) {
                        console.log('Received video from camera. Getting thumbnail.');
                        const thumbnailResult = await RNThumbnail.get(asset.uri);
                        console.log('Thumbnail result:', thumbnailResult);
                        setThumbnail(thumbnailResult.path);
                        setWidth(thumbnailResult.width);
                        setHeight(thumbnailResult.height);
                    } else {
                        console.log('Gallery asset.type:', asset.type);
                    }
                } else {
                    console.log('No video selected or other issue occurred.');
                }
            }
        } catch (error) {
            console.log('Error launching camera: ', error);
        }
    };

    const openGallery = async () => {
        try {
            const options = {
                mediaType: 'video', // 修改为只选择视频
                selectionLimit: 1,
                includeExtra: false,
            };
            console.log('Launching gallery with options:', options);
            const result = await launchImageLibrary(options);
            if (result.didCancel) {
                console.log('User cancelled gallery');
            } else if (result.errorCode === 'permission') {
                console.log('Permission not granted for gallery.');
            } else if (result.errorCode === 'others') {
                console.log(`Other error: ${result.errorMessage}`);
            } else {
                if (result && result.assets && result.assets.length > 0) {
                    const asset = result.assets[0];
                    // Check if type is defined
                    if (asset.type === undefined) {
                        console.log('Asset type is undefined.');
                    }

                    if (asset.type.includes('mp4')) {
                        console.log('Received video from gallery. Getting thumbnail.');
                        const thumbnailResult = await RNThumbnail.get(asset.uri);
                        console.log('Thumbnail result:', thumbnailResult);
                        setThumbnail(thumbnailResult.path);
                        setWidth(thumbnailResult.width);
                        setHeight(thumbnailResult.height);
                    } else {
                        console.log('Gallery asset.type:', asset.type);
                    }
                }
            }
        } catch (error) {
            console.log('Error launching gallery: ', error);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openCamera}>
                <Text>Open Camera1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openGallery}>
                <Text>Open Gallery1</Text>
            </TouchableOpacity>
            {thumbnail? (
                <Image style={{ width: 200, height: 200, borderWidth: 1, borderColor: 'black' }} source={{ isStatic: true, uri: thumbnail }} />
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});