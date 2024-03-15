import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";

export default () => {
    const [scrollWithoutAnimation, setScrollWithoutAnimation] = useState('false');

    return (
        <View>
            <Text>scrollWithoutAnimation</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>scrollWithoutAnimation:{scrollWithoutAnimation}</Text>
                <Button
                    title='scrollWithoutAnimation'
                    onPress={() => {
                        JSON.parse(scrollWithoutAnimation) ? setScrollWithoutAnimation('false') : setScrollWithoutAnimation('true')
                    }}
                />
            </View>
            <View style={{ height: 150 }}>
                <ScrollableTabView scrollWithoutAnimation={JSON.parse(scrollWithoutAnimation)}>
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