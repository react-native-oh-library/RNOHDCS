import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "@react-native-oh-tpl/react-native-scrollable-tab-view";

export default () => {
    const [isLocked, setIsLocked] = useState('false');

    return (
        <View>
            <Text>locked</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text>Locked:{isLocked}</Text>
                <Button 
                    title='top'
                    onPress={() => {
                        JSON.parse(isLocked) ? setIsLocked('false') : setIsLocked('true')
                    }}
                />
            </View>
            <View style={{ height: 150 }}>
                <ScrollableTabView locked={JSON.parse(isLocked)}>
                    <View tabLabel="Tab #101"></View>
                    <View tabLabel="Tab #102"></View>
                    <View tabLabel="Tab #103"></View>
                    <View tabLabel="Tab #104"></View>
                    <View tabLabel="Tab #105"></View>
                </ScrollableTabView>
            </View>
        </View>
    );
}