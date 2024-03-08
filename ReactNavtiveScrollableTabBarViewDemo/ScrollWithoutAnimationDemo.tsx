import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "@react-native-oh-tpl/react-native-scrollable-tab-view";

export default () => {
    const [scrollWithoutAnimation, setScrollWithoutAnimation] = useState('false');

    return (
        <View>
            <Text>scrollWithoutAnimation</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text>scrollWithoutAnimation:{scrollWithoutAnimation}</Text>
                <Button 
                    title='top'
                    onPress={() => {
                        JSON.parse(scrollWithoutAnimation) ? setScrollWithoutAnimation('false') : setScrollWithoutAnimation('true')
                    }}
                />
            </View>
            <View style={{ height: 150 }}>
                <ScrollableTabView scrollWithoutAnimation={JSON.parse(scrollWithoutAnimation)}>
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