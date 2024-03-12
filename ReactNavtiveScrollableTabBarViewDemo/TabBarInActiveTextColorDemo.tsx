import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "@react-native-oh-tpl/react-native-scrollable-tab-view";

export default () => {
    const [tabBarInActiveTextColor, setTabBarInActiveTextColor] = useState('#f1f2f3');

    return (
        <View>
            <Text>tabBarInactiveTextColor</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text>tabBarInactiveTextColor:{tabBarInActiveTextColor}</Text>
                <Button 
                    title='top'
                    onPress={() => {
                        setTabBarInActiveTextColor('#ADEAEA')
                    }}
                />
                <Button 
                    title='bottom'
                    onPress={() => {
                        setTabBarInActiveTextColor('#8FBC8F')
                    }}
                />
                <Button 
                    title='overlayTop'
                    onPress={() => {
                        setTabBarInActiveTextColor('#3299CC')
                    }}
                />
            </View>
            <View style={{ height: 150 }}>
                <ScrollableTabView tabBarInactiveTextColor={tabBarInActiveTextColor}>
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