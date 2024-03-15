import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";

export default () => {
    const [tabBarUnderlineStyle, setTabBarUnderlineStyle] = useState({ height: 2, backgroundColor: '#000000' });

    return (
        <View>
            <Text>tabBarUnderlineStyle</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>tabBarUnderlineStyle:{JSON.stringify(tabBarUnderlineStyle)}</Text>
                <Button
                    title='tabBarUnderlineStyle1'
                    onPress={() => {
                        setTabBarUnderlineStyle({ height: 4, backgroundColor: '#B5A642' })
                    }}
                />
                <Button
                    title='tabBarUnderlineStyle2'
                    onPress={() => {
                        setTabBarUnderlineStyle({ height: 6, backgroundColor: '#8C7853' })
                    }}
                />
                <Button
                    title='tabBarUnderlineStyle3'
                    onPress={() => {
                        setTabBarUnderlineStyle({ height: 8, backgroundColor: '#5F9F9F' })
                    }}
                />
            </View>
            <View style={{ height: 150 }}>
                <ScrollableTabView renderTabBar={() => { ScrollableTabBar() }} tabBarUnderlineStyle={tabBarUnderlineStyle}>
                    <View tabLabel="Tab #101">
                        <Text>111111111111111111111111111</Text>
                    </View>
                    <View tabLabel="Tab #102">
                        <Text>222222222222222222222222222</Text>
                    </View>
                    <View tabLabel="Tab #103">
                        <Text>333333333333333333333333333</Text>
                    </View>
                    <View tabLabel="Tab #104">
                        <Text>44444444444444444444444444</Text>
                    </View>
                    <View tabLabel="Tab #105">
                        <Text>555555555555555555555555555</Text>
                    </View>
                </ScrollableTabView>
            </View>
        </View>
    );
}