import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "@react-native-oh-tpl/react-native-scrollable-tab-view";

export default () => {
    const [tabBarActiveTextColor, setTabBarActiveTextColor] = useState('#f1f2f3');

    return (
        <View>
            <Text>tabBarActiveTextColor</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text>tabBarActiveTextColor:{tabBarActiveTextColor}</Text>
                <Button 
                    title='top'
                    onPress={() => {
                        setTabBarActiveTextColor('#32CD99')
                    }}
                />
                <Button 
                    title='bottom'
                    onPress={() => {
                        setTabBarActiveTextColor('#9370DB')
                    }}
                />
                <Button 
                    title='overlayTop'
                    onPress={() => {
                        setTabBarActiveTextColor('#BC8F8F')
                    }}
                />
            </View>
            <View style={{ height: 150 }}>
                <ScrollableTabView tabBarActiveTextColor={tabBarActiveTextColor}>
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