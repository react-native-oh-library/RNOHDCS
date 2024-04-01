import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";

export default () => {
    const [tabBarInActiveTextColor, setTabBarInActiveTextColor] = useState('#f1f2f3');

    return (
        <View>
            <Text>tabBarInactiveTextColor</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>tabBarInactiveTextColor:{tabBarInActiveTextColor}</Text>
                <Button
                    title='tabBarInactiveTextColor1'
                    onPress={() => {
                        setTabBarInActiveTextColor('#ADEAEA')
                    }}
                />
                <Button
                    title='tabBarInactiveTextColor2'
                    onPress={() => {
                        setTabBarInActiveTextColor('#8FBC8F')
                    }}
                />
                <Button
                    title='tabBarInactiveTextColor3'
                    onPress={() => {
                        setTabBarInActiveTextColor('#3299CC')
                    }}
                />
            </View>
            <View style={{ height: 150 }}>
                <ScrollableTabView tabBarInactiveTextColor={tabBarInActiveTextColor}>
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