import React from 'react';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

import {
    View,
    Text,
    ScrollView,
    Image,
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

export type MediaType = 'photo' | 'video' | 'mixed';
export type CameraType = 'back' | 'front';

export const ImagePickerTest = () => {
    return (
        <Tester>
            <ScrollView>
                <TestSuite name="react-native-image-picker">
                    <TestCase
                        key={"getInitStatus_1"}
                        itShould={`launchImageLibrary:Launch gallery to pick image or video`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [urlInfo, setUrlInfo] = React.useState<string>();
                            const [mediaType, setMediaType] = React.useState<MediaType>('photo');

                            return (
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
                                            <Text style={{ width: 160, height: '100%', fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                                setState(true)
                                            }}>选择</Text>

                                        </View>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setMediaType(mediaType === 'photo' ? 'video' : 'mixed')
                                        }}>切换:{mediaType}</Text>
                                        <Text style={{ color: 'black', width: 400, marginTop: 20 }}>{urlInfo}</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_2"}
                        itShould={`launchCamera:Launch camera to take photo or video`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            const [urlInfo, setUrlInfo] = React.useState<string>();
                            const [mediaType, setMediaType] = React.useState<MediaType>('photo');


                            return (
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
                                            launchCamera({ mediaType: mediaType, cameraType: 'back' }, (data) => {
                                                if (data.assets?.length) {
                                                    setUrlInfo(data.assets[0].uri)
                                                }
                                            })
                                        }}>
                                            <Text style={{ width: 160, height: '100%', fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                                setState(true)
                                            }}>选择</Text>
                                        </View>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setMediaType(mediaType === 'photo' ? 'video' : 'photo')
                                        }}>切换:{mediaType}</Text>
                                        <Text style={{ color: 'black', width: 400, marginTop: 20 }}>{urlInfo}</Text>

                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_3"}
                        itShould={`launchImageLibrary:mediaType photo or video or mixed`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            const [urlInfo, setUrlInfo] = React.useState<string>();
                            const [mediaType, setMediaType] = React.useState<MediaType>('photo');

                            return (
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
                                            <Text style={{ width: 160, height: '100%', fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                                setState(true)
                                            }}>选择</Text>

                                        </View>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setMediaType(mediaType === 'photo' ? 'video' : 'mixed')
                                        }}>切换:{mediaType}</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_4"}
                        itShould={`launchCamera:cameraType 'back' or 'front'`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            const [urlInfo, setUrlInfo] = React.useState<string>();
                            const [cameraType, setCameraType] = React.useState<CameraType>('back');

                            return (
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
                                            launchCamera({ mediaType: 'photo', cameraType: cameraType }, (data) => {
                                                if (data.assets?.length) {
                                                    setUrlInfo(data.assets[0].uri)
                                                }
                                            })
                                        }}>
                                            <Text style={{ width: 160, height: '100%', fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                                setState(true)
                                            }}>选择</Text>
                                        </View>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setCameraType(cameraType === 'back' ? 'front' : 'back')
                                        }}>切换:{cameraType}</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        key={"getInitStatus_5"}
                        itShould={`launchImageLibrary:includeBase64: creates base64 string of the image`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            const [urlInfo, setUrlInfo] = React.useState<string>();

                            return (
                                <View style={{ marginTop: 100, minHeight: 120 }} >
                                    <View >
                                        <View style={{
                                            width: 160,
                                            height: 36,
                                            backgroundColor: 'hsl(190,50%,70%)',
                                            paddingHorizontal: 16,
                                            paddingVertical: 8,
                                            borderRadius: 8
                                        }} onTouchEnd={() => {
                                            launchImageLibrary({ mediaType: 'photo', includeBase64: true }, (data) => {
                                                if (data.assets?.length) {
                                                    setUrlInfo(JSON.stringify(data.assets))
                                                }
                                            })
                                        }}>
                                            <Text style={{ width: 160, maxHeight: 500, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                                setState(true)
                                            }}>选择</Text>
                                        </View>
                                        <Text style={{ color: 'black', width: 260, minHeight: 200, overflow: 'hidden' }}>{urlInfo?.substring(0, 300) + '...'}</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_6"}
                        itShould={`launchCamera:saveToPhotos saves the image/video file captured to public photo`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            const [urlInfo, setUrlInfo] = React.useState<string>();

                            return (
                                <View style={{ marginTop: 100, minHeight: 120 }} >
                                    <View >
                                        <View style={{
                                            width: 160,
                                            height: 36,
                                            backgroundColor: 'hsl(190,50%,70%)',
                                            paddingHorizontal: 16,
                                            paddingVertical: 8,
                                            borderRadius: 8
                                        }} onTouchEnd={() => {
                                            launchCamera({ mediaType: 'photo', saveToPhotos: true }, (data) => {
                                                if (data.assets?.length) {
                                                    setUrlInfo(data.assets[0].uri)
                                                }
                                            })
                                        }}>
                                            <Text style={{ width: 160, height: '100%', fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                                setState(true)
                                            }}>选择</Text>
                                        </View>
                                        <Text style={{ color: 'black', width: 560 }}>{urlInfo}</Text>

                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_7"}
                        itShould={`launchImageLibrary:selectionLimit Optional number of pictures`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            const [urlInfo, setUrlInfo] = React.useState<string>();
                            const [limit, setLimit] = React.useState<number>(1);

                            return (
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
                                            launchImageLibrary({ mediaType: 'photo', selectionLimit: limit }, (data) => {
                                                if (data.assets?.length) {
                                                    setUrlInfo(JSON.stringify(data.assets))
                                                    if (data.assets.length = 2) {
                                                        setState(true)
                                                    }
                                                }
                                            })
                                        }}>
                                            <Text style={{ width: 160, height: '100%', fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                                setState(true)
                                            }}>选择</Text>
                                        </View>
                                        <Text style={{ color: 'black', width: 560 }}>{urlInfo}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setLimit(10)
                                        }}>切换:{limit}</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />

                    <TestCase
                        key={"getInitStatus_8"}
                        itShould={`launchImageLibrary:Returned Asset Object`}
                        tags={['C_API']}
                        initialState={false}
                        arrange={({ setState }) => {
                            const [urlInfo, setUrlInfo] = React.useState<string>();

                            return (
                                <View style={{ marginTop: 100, minHeight: 120 }} >
                                    <View >
                                        <View style={{
                                            width: 160,
                                            height: 36,
                                            backgroundColor: 'hsl(190,50%,70%)',
                                            paddingHorizontal: 16,
                                            paddingVertical: 8,
                                            borderRadius: 8
                                        }} onTouchEnd={() => {
                                            launchImageLibrary({ mediaType: 'photo', selectionLimit: 2 }, (data) => {
                                                setUrlInfo(JSON.stringify(data.assets))
                                                if (urlInfo) {
                                                    setState(true)
                                                }

                                            })
                                        }}>
                                            <Text style={{ width: 160, height: '100%', fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                                setState(true)
                                            }}>选择</Text>
                                        </View>
                                        <Text style={{ color: 'black', width: 260 }}>{urlInfo}</Text>

                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>
            </ScrollView>
        </Tester>
    );
}


