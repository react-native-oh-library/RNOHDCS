import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "@react-native-oh-tpl/react-native-scrollable-tab-view";

export default () => {
    const [tabBarUnderlineStyle, setTabBarUnderlineStyle] = useState({height:2,backgroundColor:'#000000'});

    return (
        <View>
            <Text>tabBarUnderlineStyle</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text>tabBarUnderlineStyle:{JSON.stringify(tabBarUnderlineStyle)}</Text>
                <Button 
                    title='top'
                    onPress={() => {
                        setTabBarUnderlineStyle({height:4,backgroundColor:'#B5A642'})
                    }}
                />
                <Button 
                    title='bottom'
                    onPress={() => {
                        setTabBarUnderlineStyle({height:6,backgroundColor:'#8C7853'})
                    }}
                />
                <Button 
                    title='overlayTop'
                    onPress={() => {
                        setTabBarUnderlineStyle({height:8,backgroundColor:'#5F9F9F'})
                    }}
                />
            </View>
            <View style={{ height: 150 }}>
                <ScrollableTabView tabBarUnderlineStyle={tabBarUnderlineStyle}>
                    <View tabLabel="Tab #101"></View>
                    <View tabLabel="Tab #102"></View>
                    <View tabLabel="Tab #103"></View>
                    <View tabLabel="Tab #104"></View>
                    <View tabLabel="Tab #105"></View>
                </ScrollableTabView>
            </View>
        </View>
    );
}