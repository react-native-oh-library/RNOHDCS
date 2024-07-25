import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';

const MaskedDemo = () => {
    return (
        <MaskedView
            style={styles.maskedView}
            maskElement={
                <View style={styles.maskElementView}>
                    <Text style={styles.maskElementText}>Basic Mask</Text>
                    <Text style={styles.maskElementText}>Basic Mask</Text>
                    <Text style={styles.maskElementText}>Basic Mask</Text>
                </View>
            }
        >
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: '25%', height: 80, backgroundColor: Colors.americanBlue }} />
                <View style={{ width: '25%', height: 80, backgroundColor: Colors.khaki }} />
                <View style={{ width: '25%', height: 80, backgroundColor: Colors.bittersweet }} />
                <View style={{ width: '25%', height: 80, backgroundColor: Colors.chineseWhite }} />
            </View>
            <Image
                resizeMode="cover"
                source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F6651224a-b18d-4456-97b8-14c6daad236d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694154457&t=37e024c7f8fb33d10e154f32353baf4a' }}
                style={styles.image}
            />
            <View style={styles.textView}>
                <Text style={styles.text}>
                    Dear Doctor Brown, on the night that I go back in time, you will be shot
                    by terrorists. Please take whatever precautions are necessary to prevent
                    this terrible disaster. Your friend, Marty. Over there, on my hope
                    chest. I've never seen purple underwear before, Calvin. They're late. My
                    experiment worked. They're all exactly twenty-five minutes slow. Yeah,
                    gimme a Tab. Remember, fellas, the future is in your hands. If you
                    believe in progress, re-elect Mayor Red Thomas, progress is his middle
                    name. Mayor Red Thomas's progress platform means more jobs, better
                    education, bigger civic improvements, and lower taxes. On election day,
                    cast your vote for a proven leader, re-elect Mayor Red Thomas...
                </Text>
            </View>
        </MaskedView>
    );
};

const Colors = {
    americanBlue: '#324376',
    bittersweet: '#F76C5E',
    black: 'black',
    chineseWhite: '#E1E1E1',
    darkChestnut: '#96645D',
    khaki: '#F5DD90',
};

const styles = StyleSheet.create({
    maskedView: {
        width: '100%',
        height: '250'
    },
    maskElementView: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    maskElementText: {
        color: Colors.black,
        width: '100%',
        height: 80,
        fontSize: 50,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 80,
    },
    textView: {
        fontSize: 20,
        alignItems: 'center',
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
        color: Colors.darkChestnut,
        fontSize: 8,
        width: '100%',
        height: 80,
        fontVariant: ['small-caps'],
        fontWeight: 'bold',
    },
});

export default MaskedDemo;