import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";

export default () => {
    const [tabBarBackgroundColor, setTabBarBackgroundColor] = useState('#f1f2f3');

    return (
        <View>
            <Text>tabBarBackgroundColor</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>tabBarBackgroundColor:{tabBarBackgroundColor}</Text>
                <Button
                    title='tabBarBackgroundColor1'
                    onPress={() => {
                        setTabBarBackgroundColor('#D19275')
                    }}
                />
                <Button
                    title='tabBarBackgroundColor2'
                    onPress={() => {
                        setTabBarBackgroundColor('#856363')
                    }}
                />
                <Button
                    title='tabBarBackgroundColor3'
                    onPress={() => {
                        setTabBarBackgroundColor('#3232CD')
                    }}
                />
            </View>
            <View style={{ height: 150 }}>
                <ScrollableTabView tabBarBackgroundColor={tabBarBackgroundColor}>
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