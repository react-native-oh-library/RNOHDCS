import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";

export default () => {
    const [tabBarTabIndex, setTabBarTabIndex] = useState(0);

    return (
        <View>
            <Text>onChangeTab</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>tabIndex:{tabBarTabIndex}</Text>
            </View>
            <View style={{ height: 150 }}>
                <ScrollableTabView onChangeTab={(obj) => { setTabBarTabIndex(obj.i) }}>
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