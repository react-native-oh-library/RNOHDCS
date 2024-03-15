import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";

export default () => {
    const [tabBarActiveTextColor, setTabBarActiveTextColor] = useState('#f1f2f3');

    return (
        <View>
            <Text>tabBarActiveTextColor</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>tabBarActiveTextColor:{tabBarActiveTextColor}</Text>
                <Button
                    title='tabBarActiveTextColor1'
                    onPress={() => {
                        setTabBarActiveTextColor('#32CD99')
                    }}
                />
                <Button
                    title='tabBarActiveTextColor2'
                    onPress={() => {
                        setTabBarActiveTextColor('#9370DB')
                    }}
                />
                <Button
                    title='tabBarActiveTextColor3'
                    onPress={() => {
                        setTabBarActiveTextColor('#BC8F8F')
                    }}
                />
            </View>
            <View style={{ height: 150 }}>
                <ScrollableTabView tabBarActiveTextColor={tabBarActiveTextColor}>
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