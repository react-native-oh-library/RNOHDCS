import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "@react-native-oh-tpl/react-native-scrollable-tab-view";

export default () => {
    const [tabBarTabIndex, setTabBarTabIndex] = useState(0);

    return (
        <View>
            <Text>onChangeTab</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text>tabIndex:{tabBarTabIndex}</Text>
            </View>
            <View style={{ height: 150 }}>
                <ScrollableTabView onChangeTab={(obj) => { setTabBarTabIndex(obj.i) }}>
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