import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, ScrollView, Image } from 'react-native';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import RNThumbnail from 'react-native-thumbnail';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function ThumbnailExample() {
    const [cameraThumbnailPath, setCameraThumbnailPath] = useState<string | null>(null);
    const [cameraThumbnailWidth, setCameraThumbnailWidth] = useState<number | null>(null);
    const [cameraThumbnailHeight, setCameraThumbnailHeight] = useState<number | null>(null);

    const [galleryThumbnailPath, setGalleryThumbnailPath] = useState<string | null>(null);
    const [galleryThumbnailWidth, setGalleryThumbnailWidth] = useState<number | null>(null);
    const [galleryThumbnailHeight, setGalleryThumbnailHeight] = useState<number | null>(null);

    const handleCameraRecording = async () => {
        try {
            const options = {
                mediaType: 'video',
                saveToPhotos: true,
                includeExtra: false,
                durationLimit: 5,
            };
            const result = await launchCamera(options);
            if (result.didCancel) {
                return { success: false };
            } else if (
                result.errorCode === 'permission' ||
                result.errorCode === 'camera_unavailable' ||
                result.errorCode === 'others'
            ) {
                return { success: false };
            } else {
                if (result && result.assets && result.assets.length > 0) {
                    const asset = result.assets[0];
                    if (asset.type.includes('mp4')) {
                        const thumbnailResult = await RNThumbnail.get(asset.uri);
                        if (thumbnailResult && thumbnailResult.path && thumbnailResult.width > 0 && thumbnailResult.height > 0) {
                            return { success: true, thumbnailResult };
                        } else {
                            return { success: false };
                        }
                    } else {
                        return { success: false };
                    }
                } else {
                    return { success: false };
                }
            }
        } catch (error) {
            return { success: false };
        }
    };

    const handleGallerySelection = async () => {
        try {
            const options = {
                mediaType: 'video',
                selectionLimit: 1,
                includeExtra: false,
            };
            const result = await launchImageLibrary(options);
            if (result.didCancel) {
                return { success: false };
            } else if (result.errorCode === 'permission' || result.errorCode === 'others') {
                return { success: false };
            } else {
                if (result && result.assets && result.assets.length > 0) {
                    const asset = result.assets[0];
                    if (asset.type.includes('mp4')) {
                        const thumbnailResult = await RNThumbnail.get(asset.uri);
                        if (thumbnailResult && thumbnailResult.path && thumbnailResult.width > 0 && thumbnailResult.height > 0) {
                            return { success: true, thumbnailResult };
                        } else {
                            return { success: false };
                        }
                    } else {
                        return { success: false };
                    }
                } else {
                    return { success: false };
                }
            }
        } catch (error) {
            return { success: false };
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Tester>
                <TestSuite name="Thumbnail from Camera Test">
                    <TestCase
                        itShould="Verify thumbnail from camera has correct properties"
                        initialState={false}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                        tags={['C_API']}
                        arrange={({ setState }) => {
                            return (
                                <View>
                                    <Text>Camera Thumbnail Width: {cameraThumbnailWidth} Height: {cameraThumbnailHeight}</Text>
                                    <Image
                                        style={{ width: 200, height: 200, borderWidth: 1, borderColor: 'black' }}
                                        source={{ uri: cameraThumbnailPath }}
                                    />
                                    <Button title="Start Camera Recording" onPress={async () => {
                                        const response = await handleCameraRecording();
                                        if (response.success) {
                                            setCameraThumbnailPath(response.thumbnailResult.path);
                                            setCameraThumbnailWidth(response.thumbnailResult.width);
                                            setCameraThumbnailHeight(response.thumbnailResult.height);
                                            setState(true);
                                        } else {
                                            setState(false);
                                        }
                                    }} />

                                </View>
                            );
                        }}
                    />
                </TestSuite>
                <TestSuite name="Thumbnail from Gallery Test">
                    <TestCase
                        itShould="Verify thumbnail from gallery has correct properties"
                        initialState={false}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                        tags={['C_API']}
                        arrange={({ setState }) => {
                            return (
                                <View>
                                    <Text>Gallery Thumbnail  Width: {galleryThumbnailWidth} Height: {galleryThumbnailHeight}</Text>
                                    <Image
                                        style={{ width: 200, height: 200, borderWidth: 1, borderColor: 'black' }}
                                        source={{ uri: galleryThumbnailPath }}
                                    />
                                    <Button title="Open Gallery" onPress={async () => {
                                        const response = await handleGallerySelection();
                                        if (response.success) {
                                            setGalleryThumbnailPath(response.thumbnailResult.path);
                                            setGalleryThumbnailWidth(response.thumbnailResult.width);
                                            setGalleryThumbnailHeight(response.thumbnailResult.height);
                                            setState(true);
                                        } else {
                                            setState(false);
                                        }
                                    }} />
                                </View>
                            );
                        }}
                    />
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
});