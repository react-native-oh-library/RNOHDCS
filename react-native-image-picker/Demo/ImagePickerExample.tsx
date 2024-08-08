import React from 'react';
import { Image, View, Text } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

export type MediaType = 'photo' | 'video' | 'mixed';
export type CameraType = 'back' | 'front';

export default function ImagePickerExample() {

    const [urlInfo, setUrlInfo] = React.useState<string>();
    const [mediaType, setMediaType] = React.useState<MediaType>('photo');
    const [camera, setUrlCamera] = React.useState<string>();
    const [cameraType, setCameraType] = React.useState<MediaType>('photo');

    return (
        <View>
            <View style={{ minHeight: 220 }} >
                <View>
                    <View style={{
                        width: 160,
                        height: 36,
                        backgroundColor: 'hsl(190,50%,70%)',
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        borderRadius: 8
                    }} onTouchEnd={() => {
                        launchImageLibrary({ mediaType: mediaType }, (data) => {
                            if (data.assets?.length) {
                                setUrlInfo(data.assets[0].uri)
                            }
                        })
                    }}>
                        <Text style={{ width: 160, height: '100%', fontWeight: 'bold', textAlign: 'center' }} >选择</Text>
                    </View>
                    <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                        setMediaType(mediaType === 'photo' ? 'video' : 'mixed')
                    }}>切换:{mediaType}</Text>
                </View>
                <Image
                    source={{ uri: urlInfo }}
                    style={{ width: 100, height: 100, position: 'absolute', top: 50, left: 200 }}
                />
            </View>
            <View style={{ minHeight: 220 }} >
                <View >
                    <View style={{
                        width: 160,
                        height: 36,
                        backgroundColor: 'hsl(190,50%,70%)',
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        borderRadius: 8
                    }} onTouchEnd={() => {
                        launchCamera({ mediaType: cameraType, cameraType: 'back' }, (data) => {
                            if (data.assets?.length) {
                                setUrlCamera(data.assets[0].uri)
                            }
                        })
                    }}>
                        <Text style={{ width: 160, height: '100%', fontWeight: 'bold', textAlign: 'center' }}>选择</Text>
                    </View>
                    <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                        setCameraType(cameraType === 'photo' ? 'video' : 'photo')
                    }}>切换:{cameraType}</Text>
                </View>
                <Image
                    source={{ uri: camera }}
                    style={{ width: 200, height: 200, position: 'absolute', top: -80, left: 600 }}
                />
            </View>
        </View>
    );
};