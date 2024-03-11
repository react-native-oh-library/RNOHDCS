import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "@react-native-oh-tpl/react-native-scrollable-tab-view";

export default () => {
    const [tabBarBackgroundColor, setTabBarBackgroundColor] = useState('#f1f2f3');

    return (
        <View>
            <Text>tabBarBackgroundColor</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text>tabBarBackgroundColor:{tabBarBackgroundColor}</Text>
                <Button 
                    title='top'
                    onPress={() => {
                        setTabBarBackgroundColor('#D19275')
                    }}
                />
                <Button 
                    title='bottom'
                    onPress={() => {
                        setTabBarBackgroundColor('#856363')
                    }}
                />
                <Button 
                    title='overlayTop'
                    onPress={() => {
                        setTabBarBackgroundColor('#3232CD')
                    }}
                />
            </View>
            <View style={{ height: 150 }}>
                <ScrollableTabView tabBarBackgroundColor={tabBarBackgroundColor}>
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