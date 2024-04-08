import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";

export default () => {
    const [tabBarTextStyle, setTabBarTextStyle] = useState({ height: 24, backgroundColor: '#ffffff', fontSize: 12, fontWeight: 200 });

    return (
        <View>
            <Text>tabBarTextStyle</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>tabBarTextStyle:{JSON.stringify(tabBarTextStyle)}</Text>
                <Button
                    title='tabBarTextStyle1'
                    onPress={() => {
                        setTabBarTextStyle({ height: 28, backgroundColor: '#B5A642', fontSize: 16, fontWeight: 400 })
                    }}
                />
                <Button
                    title='tabBarTextStyle2'
                    onPress={() => {
                        setTabBarTextStyle({ height: 32, backgroundColor: '#8C7853', fontSize: 20, fontWeight: 600 })
                    }}
                />
                <Button
                    title='tabBarTextStyle3'
                    onPress={() => {
                        setTabBarTextStyle({ height: 36, backgroundColor: '#5F9F9F', fontSize: 24, fontWeight: 800 })
                    }}
                />
            </View>
            <View style={{ height: 150 }}>
                <ScrollableTabView tabBarTextStyle={tabBarTextStyle}>
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