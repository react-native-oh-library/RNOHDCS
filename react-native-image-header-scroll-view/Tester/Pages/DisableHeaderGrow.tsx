
/************
 * 
 * 
 * 此demo是基于0.10.3版本的 因最新版本 TriggeringView组件的回调bug 详情请查看 https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-image-header-scroll-view.md
 * 
 * 
 */

import React, { useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, StatusBar } from 'react-native';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino'
import ImageHeaderScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
const MIN_HEIGHT = 80;
const MAX_HEIGHT = 250;
const tvShowContent = {
    title: 'Doctor Who',
    overview: `
    The Doctor looks and seems human. He's handsome, witty, and could be mistaken for just another man in the street.

    But he is a Time Lord: a 900 year old alien with 2 hearts, part of a gifted civilization who mastered time travel.

    The Doctor saves planets for a living – more of a hobby actually, and he's very, very good at it.

    He's saved us from alien menaces and evil from before time began – but just who is he?`,
    year: 2005,
    genres: ['Action & Adventure', 'Drama', 'Sci-Fi & Fantasy'],
    keywords: [
        'time travel',
        'time machine',
        'phone booth',
        'alien',
        'time traveler',
        'police box',
        'space and aliens',
    ],
};

const styles = StyleSheet.create({
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
    },
    title: {
        fontSize: 20,
    },
    name: {
        fontWeight: 'bold',
    },
    section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'white',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    sectionContent: {
        fontSize: 16,
        textAlign: 'justify',
    },
    keywords: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    keywordContainer: {
        backgroundColor: '#999999',
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    keyword: {
        fontSize: 16,
        color: 'white',
    },
    titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTitle: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 24,
    },
    navTitleView: {
        height: MIN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        opacity: 0,
    },
    navTitle: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'transparent',
    },
    sectionLarge: {
        height: 800,
    },
});

function DisableHeaderGrow() {
    const HeaderRef = useRef(null)

    return (
        <Tester>
            <TestSuite name='disableHeaderGrow'>
                <TestCase itShould='disableHeaderGrow'> 
                        <View style={{ height:1000}}>
                            <ImageHeaderScrollView
                                maxHeight={MAX_HEIGHT}
                                minHeight={MIN_HEIGHT}
                                renderHeader={() => <Image source={require('./doctorwho.jpg')} style={styles.image} />}
                                maxOverlayOpacity={0.8}
                                useNativeDriver={true}
                                disableHeaderGrow={false}
                            >
                                  <>
                                    <View style={styles.section}>
                                        <Text style={styles.sectionTitle}>Overview</Text>
                                        <Text style={styles.sectionContent}>{tvShowContent.overview}</Text>
                                    </View>
                                    <View style={[styles.section, styles.sectionLarge]}>
                                        <Text style={styles.sectionTitle}>Keywords</Text>
                                        <View style={styles.keywords}>
                                            {tvShowContent.keywords.map(keyword => (
                                                <View style={styles.keywordContainer} key={keyword}>
                                                    <Text style={styles.keyword}>{keyword}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    </View>
                                </>
                            </ImageHeaderScrollView>
                        </View>
                  
                </TestCase>
            </TestSuite>
        </Tester>
    );

}

export default DisableHeaderGrow;


