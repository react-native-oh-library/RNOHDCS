import React, { Component, useState } from 'react';
import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Gallery from 'react-native-image-gallery';
import { Tester, TestSuite } from '@rnoh/testerino';
import {TestCase} from './TestCase';
const { height, width } = Dimensions.get('window');
const flatListProps = {
    // 初始渲染的item数量  
    initialNumToRender: 2,

    // 窗口大小，即同时渲染的item数量  
    windowSize: 2,
    // 控制滚动条是否显示  
    showsHorizontalScrollIndicator: true,
};
export default class DemoGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            images: [
                {
                    caption: 'Caption 1',
                    source: require('./static/images/placehold.jpg'),
                    dimensions: { width: 540, height: 720 },
                    width: "100%", height: "100%",
                },
                {
                    caption: 'Caption 2',
                    source: { uri: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.e6iItqBlqt6l6K261WPMXAHaFj?w=227&h=180&c=7&r=0&o=5&pid=1.7' }
                },
                {
                    caption: 'Caption 3',
                    source: { uri: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.ExxGcUQiUGACeYIj-4smOAHaE8?w=213&h=180&c=7&r=0&o=5&pid=1.7' },
                    dimensions: { width: 1200, height: 800 }
                },
                { caption: 'Caption 4', source: { uri: 'https://tse4-mm.cn.bing.net/th/id/OIP-C._oMDp4WjMYnk4kulMKcDggHaFj?w=190&h=180&c=7&r=0&o=5&pid=1.7' } },
                { caption: 'Caption 5', source: { uri: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.X936gutT6XLT7u6b1ATUtwHaFL?w=246&h=180&c=7&r=0&o=5&pid=1.7' } },
                { caption: 'Caption 6', source: { uri: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.XE4dPZQC2rbgdzIlsoJ4CQHaFj?w=246&h=184&c=7&r=0&o=5&pid=1.7' } },
                { caption: 'Caption 7', source: { uri: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.AVipv0mgkkdm3UR-IghuXQHaE7?w=248&h=180&c=7&r=0&o=5&pid=1.7' } },
                { caption: 'Caption 8', source: { uri: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.cL93MjCX8TkGzlW0-dHTvwHaE8?w=238&h=180&c=7&r=0&o=5&pid=1.7' } },
                { caption: 'Caption 9', source: { uri: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.6JfylmiEMcrMFv_-1liCfQHaEk?w=269&h=180&c=7&r=0&o=5&pid=1.7' } },
                { caption: 'Caption 10', source: { uri: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.4nmhjB0gHCuFeSnPIvJDRwHaLH?w=115&h=180&c=7&r=0&o=5&pid=1.7' } },
                { caption: 'Caption 11', source: { uri: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.p4yNLK-eqiaAwW6v16ilKAHaE8?w=232&h=180&c=7&r=0&o=5&pid=1.7' } },
                { caption: 'Caption 12', source: { uri: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.IPnPAzi2GHdqi4uNCkBXlQHaE7?w=290&h=187&c=7&r=0&o=5&pid=1.7' } },
                { caption: 'Caption 13', source: { uri: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.O5krOcj44BqOFRpvrc8p_wHaFk?w=256&h=192&c=7&r=0&o=5&pid=1.7' } }
            ]
        };
        this.onChangeImage = this.onChangeImage.bind(this);
    }
    addImages() {
        // Debugging helper : keep adding images at the end of the gallery.
        setInterval(() => {
            const newArray = [...this.state.images, { source: { uri: 'http://i.imgur.com/DYjAHAf.jpg' } }];
            this.setState({ images: newArray });
        }, 5000);
    }

    removeImage(slideIndex, delay) {
        // Debugging helper : remove a given image after some delay.
        // Ensure the gallery doesn't crash and the scroll is updated accordingly.
        setTimeout(() => {
            const newArray = this.state.images.filter((element, index) => index !== slideIndex);
            this.setState({ images: newArray });
        }, delay);
    }

    removeImages() {
        // Debugging helper : keep removing the last slide of the gallery.
        setInterval(() => {
            const { images } = this.state;
            console.log(images.length);
            if (images.length <= 1) {
                return;
            }
            const newArray = this.state.images.filter((element, index) => index !== this.state.images.length - 1);
            this.setState({ images: newArray });
        }, 2000);
    }

    onChangeImage(index) {
        this.setState({ index });
    }

    renderError() {
        return (
            <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 15, fontStyle: 'italic' }}>This image cannot be displayed...</Text>
                <Text style={{ color: 'white', fontSize: 15, fontStyle: 'italic' }}>... but this is fine :)</Text>
            </View>
        );
    }

    get caption() {
        const { images, index } = this.state;
        return (
            <View style={{ bottom: 0, height: 65, backgroundColor: 'rgba(0, 0, 0, 0.7)', width: '100%', position: 'absolute', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontStyle: 'italic' }}>{(images[index] && images[index].caption) || ''} </Text>
            </View>
        );
    }

    get galleryCount() {
        const { index, images } = this.state;
        return (
            <View style={{ top: 0, height: 65, backgroundColor: 'rgba(0, 0, 0, 0.7)', width: '100%', position: 'absolute', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'right', color: 'white', fontSize: 15, fontStyle: 'italic', paddingRight: '10%' }}>{index + 1} / {images.length}</Text>
            </View>
        );
    }

    CustomImageComponent = () => {
        const { images } = this.state;
        return (
            <TouchableOpacity>
                <View style={styles.imageContainer}>
                    <Image source={images.source} style={styles.image} />
                </View>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <ScrollView>
                <Tester>
                    <TestSuite name="reactnativeimagegalleryTest">
                        <TestCase.Example itShould="render a button with a title TGHGRFG ">
                            <View style={{ width: width, height: 500, }} >
                                <Gallery
                                    style={{ backgroundColor: '#696969' }}
                                    images={this.state.images}
                                    errorComponent={this.renderError}
                                    onPageSelected={this.onChangeImage}
                                    initialPage={1}
                                    showPageIndicator={false}
                                    enableSwipe={false}
                                    flatListProps={flatListProps}
                                    pageMargin={30} // 设置图片之间的间距为10  
                                    onPageScrollStateChanged={(state) => {
                                        if (state === 'idle') {
                                            console.log('画廊已停止滚动');
                                        } else if (state === 'dragging') {
                                            console.log('画廊正在拖动');
                                        }
                                    }}
                                    onPageScroll={(event) => {
                                        console.log('当前滚动位置：', JSON.stringify(event.offset));
                                    }}
                                    scrollViewStyle={{ backgroundColor: 'lightgray' }} // 设置画廊背景色为浅灰色  

                                    onSingleTapConfirmed={(index) => {
                                        console.log('点击了第', index + 1, '张图片');
                                    }}
                                    onLongPress={(index) => {
                                        console.log(JSON.stringify(index));
                                    }}
                                />
                                {this.galleryCount}
                                {/* {this.caption} */}

                                <MyGallery />
                            </View>
                        </TestCase.Example>
                    </TestSuite>
                </Tester>
            </ScrollView>
        );
    }
}

const CustomImageComponent = ({ image, index, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image source={image.source} style={styles.image} />
            </View>
        </TouchableOpacity>
    );
};

const images = [
    { source: require('./static/images/placehold.jpg') },
    { source: { uri: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.ExxGcUQiUGACeYIj-4smOAHaE8?w=213&h=180&c=7&r=0&o=5&pid=1.7' } },
    { source: { uri: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.XE4dPZQC2rbgdzIlsoJ4CQHaFj?w=246&h=184&c=7&r=0&o=5&pid=1.7' } },
    // ...更多图片  
];

const MyGallery = () => {
    return (
        <Gallery
            images={images}
            imageComponent={CustomImageComponent} // 使用自定义图片组件  
            style={{ width: '100%', height: 300 }}
        />
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    image: {
        width: '100%',
        height: null, // 保持图片的原始比例  
        width: 300, height: 300
    },
    caption: {
        color: 'white',
        fontSize: 14,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 5,
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        borderRadius: 5,
    },
});  
