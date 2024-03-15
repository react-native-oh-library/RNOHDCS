import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";

export default () => {
    const [style, setStyle] = useState({ height: 150, backgroundColor: "#FF0000" });


    return (

        <View style={{ height: 400 }}>
            <Text>contentProps</Text>
            <View>
                <Text>contentContainerStyle:{JSON.stringify(contentContainerStyle)}</Text>
            </View>
            <View>
                <Button
                    title='Style1'
                    onPress={() => {
                        setStyle({ height: 250, backgroundColor: "#7FFF00" })
                    }}
                />
                <Button
                    title='Style2'
                    onPress={() => {
                        setStyle({ height: 300, backgroundColor: "#236B8E" })
                    }}
                />
                <Button
                    title='Style3'
                    onPress={() => {
                        setStyle({ height: 350, backgroundColor: "#9F9F5F" })
                    }}
                />
            </View>
            <View style={{ height: 150 }}>
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