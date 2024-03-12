import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "@react-native-oh-tpl/react-native-scrollable-tab-view";

export default () => {
    const [tabBarTextStyle, setTabBarTextStyle] = useState({height:2,backgroundColor:'#000000'});

    return (
        <View>
            <Text>tabBarTextStyle</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text>tabBarTextStyle:{JSON.stringify(tabBarTextStyle)}</Text>
                <Button 
                    title='top'
                    onPress={() => {
                        setTabBarTextStyle({height:4,backgroundColor:'#B5A642'})
                    }}
                />
                <Button 
                    title='bottom'
                    onPress={() => {
                        setTabBarTextStyle({height:6,backgroundColor:'#8C7853'})
                    }}
                />
                <Button 
                    title='overlayTop'
                    onPress={() => {
                        setTabBarTextStyle({height:8,backgroundColor:'#5F9F9F'})
                    }}
                />
            </View>
            <View style={{ height: 150 }}>
                <ScrollableTabView tabBarTextStyle={tabBarTextStyle}>
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