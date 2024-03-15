import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";

export default () => {
    const [isLocked, setIsLocked] = useState('false');

    return (
        <View>
            <Text>locked</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>Locked:{isLocked}</Text>
                <Button
                    title='islocked'
                    onPress={() => {
                        JSON.parse(isLocked) ? setIsLocked('false') : setIsLocked('true')
                    }}
                />
            </View>
            <View style={{ height: 150 }}>
                <ScrollableTabView locked={JSON.parse(isLocked)}>
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