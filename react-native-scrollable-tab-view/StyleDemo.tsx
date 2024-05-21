import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";

export default () => {
    const [style, setStyle] = useState({ flex: 1, backgroundColor: "#FF0000" });


    return (

        <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text>contentProps</Text>
            <View>
                <Text>contentContainerStyle:{JSON.stringify(style)}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Button
                    title='Style1'
                    onPress={() => {
                        setStyle({ flex: 0.8, backgroundColor: "#7FFF00" })
                    }}
                />
                <Button
                    title='Style2'
                    onPress={() => {
                        setStyle({ flex: 0.6, backgroundColor: "#236B8E" })
                    }}
                />
                <Button
                    title='Style3'
                    onPress={() => {
                        setStyle({ flex: 0.4, backgroundColor: "#9F9F5F" })
                    }}
                />
            </View>
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <ScrollableTabView
                    style={style}
                >
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