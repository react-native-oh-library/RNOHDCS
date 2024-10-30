import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Accordion } from 'galio-framework';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome6Brands from 'react-native-vector-icons/FontAwesome6Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import { Tester, TestCase } from '@rnoh/testerino';



const AccordionDemo = () => {
    const [result, setReault] = useState('')
    const data = [
        { title: "1nd Chapter", content: "Lorem ipsum dolor sit amet" },
        { title: "2nd Chapter", content: "Lorem ipsum dolor sit amet" },
        { title: "3rd Chapter", content: "Lorem ipsum dolor sit amet" }
    ];

    const onAccordionClose = (index: any) => {
        setReault(JSON.stringify(index))
    };

    const onAccordionOpen = (index: any) => {
        setReault(JSON.stringify(index));
    };

    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <View style={styles.inputArea}>
                <Text style={styles.baseText}>
                    {result}
                </Text>
            </View>
            <Tester children={undefined}>
                <TestCase itShould="dataArray:列表数组" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="style: background is red" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            style={styles.accordion}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="opened: 展开的是第1个" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={0}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="opened: 展开的是第2个" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="opened: 展开的是第3个" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={2}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="listStyle: 列表样式" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            listStyle={styles.listStyle}
                        />
                    </View>
                </TestCase>

                <TestCase itShould="icon:Zocial name='plancast'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Zocial name="plancast" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:Zocial name='tumblr'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Zocial name="tumblr" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:SimpleLineIcons name='badge'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<SimpleLineIcons name="badge" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:SimpleLineIcons name='globe'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<SimpleLineIcons name="globe" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:Octicons name='download'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Octicons name="download" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:Octicons name='flame'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Octicons name="flame" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:MaterialIcons name='archive'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<MaterialIcons name="archive" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:MaterialIcons name='assistant-navigation'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<MaterialIcons name="assistant-navigation" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:MaterialCommunityIcons name='arrow-down-bold-outline'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<MaterialCommunityIcons name="arrow-down-bold-outline" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:MaterialCommunityIcons name='arrow-down-bold-circle'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<MaterialCommunityIcons name="arrow-down-bold-circle" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:Foundation name='check'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Foundation name="check" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:Foundation name='home'" tags={['C_API']} skip="">
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Foundation name="home" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:Fontisto name='tesla'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Fontisto name="tesla" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:Fontisto name='telegram'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Fontisto name="telegram" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:FontAwesome6Brands name='itunes-note'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<FontAwesome6Brands name="itunes-note" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:FontAwesome6Brands name='line'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<FontAwesome6Brands name="line" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:FontAwesome6 name='angles-down'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<FontAwesome6 name="angles-down" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:FontAwesome6 name='arrows-down-to-line'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<FontAwesome6 name="arrows-down-to-line" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:FontAwesome5Brands name='centos'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<FontAwesome5Brands name="centos" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:FontAwesome5Brands name='chrome'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<FontAwesome5Brands name="chrome" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:FontAwesome5 name='angle-down'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<FontAwesome5 name="angle-down" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:FontAwesome5 name='caret-down'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<FontAwesome5 name="caret-down" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:FontAwesome name='arrow-down'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<FontAwesome name="arrow-down" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:FontAwesome name='caret-down'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<FontAwesome name="caret-down" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:Feather name='arrow-down-circle'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Feather name="arrow-down-circle" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:Feather name='chevron-down'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Feather name="chevron-down" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:EvilIcons name='chevron-down'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<EvilIcons name="chevron-down" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:EvilIcons name='arrow-up'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<EvilIcons name="arrow-up" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:Entypo name='arrow-down'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Entypo name="arrow-down" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:Entypo name='arrow-with-circle-down'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Entypo name="arrow-with-circle-down" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:AntDesign name='caretdown'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<AntDesign name="caretdown" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon:AntDesign name='downcircleo'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<AntDesign name="downcircleo" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon: name='caret-down'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="caret-down" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="icon: name='arrow-down-circle'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                        />
                    </View>
                </TestCase>

                <TestCase itShould="expandedIcon:AntDesign name='frown'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<AntDesign name="frown" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:AntDesign name='star'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<AntDesign name="star" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:Entypo name='app-store'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<Entypo name="app-store" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:Entypo name='baidu'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<Entypo name="baidu" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:EvilIcons name='eye'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<EvilIcons name="eye" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:EvilIcons name='pointer'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<EvilIcons name="pointer" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:Feather name='bell'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<Feather name="bell" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:Feather name='bell-off'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<Feather name="bell-off" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:FontAwesome name='heart'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<FontAwesome name="heart" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:FontAwesome name='star'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<FontAwesome name="star" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:FontAwesome5 name='asterisk'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<FontAwesome5 name="asterisk" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:FontAwesome5 name='bahai'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<FontAwesome5 name="bahai" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:FontAwesome5Brands name='diaspora'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<FontAwesome5Brands name="diaspora" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:FontAwesome5Brands name='drupal'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<FontAwesome5Brands name="drupal" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:FontAwesome6 name='bicycle'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<FontAwesome6 name="bicycle" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:FontAwesome6 name='bolt'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<FontAwesome6 name="bolt" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:FontAwesome6Brands name='qq'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<FontAwesome6Brands name="qq" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:FontAwesome6Brands name='freebsd'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<FontAwesome6Brands name="freebsd" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:Fontisto name='tinder'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<Fontisto name="tinder" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:Fontisto name='atom'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<Fontisto name="atom" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:Foundation name='lightbulb'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<Foundation name="lightbulb" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:Foundation name='lock'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<Foundation name="lock" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:MaterialCommunityIcons name='badminton'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<MaterialCommunityIcons name="badminton" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:MaterialCommunityIcons name='balloon'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<MaterialCommunityIcons name="balloon" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:MaterialIcons name='brightness-4'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<MaterialIcons name="brightness-4" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:MaterialIcons name='brightness-medium'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<MaterialIcons name="brightness-medium" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:Octicons name='feed-star'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<Octicons name="feed-star" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:Octicons name='feed-heart'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<Octicons name="feed-heart" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:SimpleLineIcons name='power'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<SimpleLineIcons name="power" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:SimpleLineIcons name='refresh'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<SimpleLineIcons name="refresh" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:Zocial name='plancast'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<Zocial name="plancast" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon:Zocial name='lego'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<Zocial name="lego" size={20} color="red" />}
                        />
                    </View>
                </TestCase>

                <TestCase itShould="expandedIcon: name='caret-down-circle'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<Ionicons name="caret-down-circle" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="expandedIcon: name='arrow-down-circle'" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<Ionicons name="arrow-down-sharp" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="headerStyle: 头部样式" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            headerStyle={styles.headerStyle}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<Ionicons name="arrow-down-sharp" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="contentStyle: 文字样式" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            opened={1}
                            contentStyle={styles.contentStyle}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<Ionicons name="arrow-down-sharp" size={20} color="red" />}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="onAccordionClose: 折叠时触发事件" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<Ionicons name="arrow-down-sharp" size={20} color="red" />}
                            onAccordionClose={onAccordionClose}
                        />
                    </View>
                </TestCase>
                <TestCase itShould="onAccordionOpen: 打开时触发事件" tags={['C_API']} >
                    <View style={{ height: 150 }}>
                        <Accordion
                            dataArray={data}
                            icon={<Ionicons name="arrow-down-circle" size={20} color="red" />}
                            expandedIcon={<Ionicons name="arrow-down-sharp" size={20} color="red" />}
                            onAccordionOpen={onAccordionOpen}
                        />
                    </View>
                </TestCase>
            </Tester>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    accordion: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'red'
    },
    listStyle: {
        borderTopWidth: 5,
        borderTopColor: 'red',
        height: 100,
        backgroundColor: 'purple',
        borderBottomColor: 'red',
        borderBottomWidth: 5,
    },
    headerStyle: {
        backgroundColor: '#5E72E4',
        padding: 10,
        borderTopWidth: 5,
        borderTopColor: 'red',
    },
    contentStyle: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        color: 'purple'
    },
    inputArea: {
        width: '100%',
        height: 80,
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    baseText: {
        width: '100%',
        height: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 14
    },
});
export default AccordionDemo