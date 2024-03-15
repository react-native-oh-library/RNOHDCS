import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";

export default () => {
    const [tabBarPosition, setTabBarPosition] = useState('top');

    return (
        <View>
            <Text>tabBarPosition</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>tabBarPosition:{tabBarPosition}</Text>
                <Button
                    title='top'
                    onPress={() => {
                        setTabBarPosition('top')
                    }}
                />
                <Button
                    title='bottom'
                    onPress={() => {
                        setTabBarPosition('bottom')
                    }}
                />
                <Button
                    title='overlayTop'
                    onPress={() => {
                        setTabBarPosition('overlayTop')
                    }}
                />
                <Button
                    title='overlayBottom'
                    onPress={() => {
                        setTabBarPosition('overlayBottom')
                    }}
                />
            </View>
            <View style={{ height: 100 }}>
                <ScrollableTabView tabBarPosition={tabBarPosition}>
                    <View tabLabel="Tab #101">
                        <Text>This is probably my favorite navigation pattern on Android, I wish it were more common on iOS! This is a very simple JavaScript-only implementation of it for React Native. For more information about how the animations behind this work, check out the Rebound section of the React Native Animation Guide</Text>
                    </View>
                    <View tabLabel="Tab #102">
                        <Text>This is probably my favorite navigation pattern on Android, I wish it were more common on iOS! This is a very simple JavaScript-only implementation of it for React Native. For more information about how the animations behind this work, check out the Rebound section of the React Native Animation Guide</Text>
                    </View>
                    <View tabLabel="Tab #103">
                        <Text>This is probably my favorite navigation pattern on Android, I wish it were more common on iOS! This is a very simple JavaScript-only implementation of it for React Native. For more information about how the animations behind this work, check out the Rebound section of the React Native Animation Guide</Text>
                    </View>
                    <View tabLabel="Tab #104">
                        <Text>This is probably my favorite navigation pattern on Android, I wish it were more common on iOS! This is a very simple JavaScript-only implementation of it for React Native. For more information about how the animations behind this work, check out the Rebound section of the React Native Animation Guide</Text>
                    </View>
                    <View tabLabel="Tab #105">
                        <Text>This is probably my favorite navigation pattern on Android, I wish it were more common on iOS! This is a very simple JavaScript-only implementation of it for React Native. For more information about how the animations behind this work, check out the Rebound section of the React Native Animation Guide</Text>
                    </View>
                </ScrollableTabView>
            </View>
        </View>
    );
}