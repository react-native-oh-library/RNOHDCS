import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "@react-native-oh-tpl/react-native-scrollable-tab-view";

export default () => {
    const [tabBarPosition, setTabBarPosition] = useState('top');

    return (
        <View>
            <Text>tabBarPosition</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text>tabBarPosition:{tabBarPosition}</Text>
                <Button 
                    title='top'
                    onPress={() => {
                        setTabBarPosition('top')
                    }}
                />
                <Button 
                    title='bottom'
                    onPress={() => {
                        setTabBarPosition('bottom')
                    }}
                />
                <Button 
                    title='overlayTop'
                    onPress={() => {
                        setTabBarPosition('overlayTop')
                    }}
                />
                <Button 
                    title='overlayBottom'
                    onPress={() => {
                        setTabBarPosition('overlayBottom')
                    }}
                />
            </View>
            <View style={{ height: 150 }}>
                <ScrollableTabView tabBarPosition={tabBarPosition}>
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