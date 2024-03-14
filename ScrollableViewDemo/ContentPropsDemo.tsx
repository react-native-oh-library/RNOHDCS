import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";

export default () => {
    const [contentContainerStyle, setContentContainerStyle] = useState({ height: 150, backgroundColor: "#FF0000" });
    const [showsHorizontalScrollIndicator, setShowsHorizontalScrollIndicator] = useState('false');
    const [indicatorStyle, setIndicatorStyle] = useState('default');


    return (

        <View style={{height:400}}>
            <Text>contentProps</Text>
            <View>
                <Text>contentContainerStyle:{JSON.stringify(contentContainerStyle)}</Text>
            </View>
            <View>
                <Button
                    title='contentContainerStyle1'
                    onPress={() => {
                        setContentContainerStyle({ height: 250, backgroundColor: "#7FFF00" })
                    }}
                />
                <Button
                    title='contentContainerStyle2'
                    onPress={() => {
                        setContentContainerStyle({ height: 300, backgroundColor: "#236B8E" })
                    }}
                />
                <Button
                    title='contentContainerStyle3'
                    onPress={() => {
                        setContentContainerStyle({ height: 350, backgroundColor: "#9F9F5F" })
                    }}
                />
            </View>
            <View>
                <Text>showsHorizontalScrollIndicator:{showsHorizontalScrollIndicator}</Text>
            </View>
            <View>
                <Button
                    title='showsHorizontalScrollIndicator'
                    onPress={() => {
                        JSON.parse(showsHorizontalScrollIndicator)?setShowsHorizontalScrollIndicator('false'):setShowsHorizontalScrollIndicator('true')
                    }}
                />
            </View>
            <View>
                <Text>indicatorStyle:{indicatorStyle}</Text>
            </View>
            <View>
                <Button
                    title='indicatorStyle1 默认'
                    onPress={() => {
                        setIndicatorStyle('default')
                    }}
                />
                <Button
                    title='indicatorStyle2'
                    onPress={() => {
                        setIndicatorStyle('black')
                    }}
                />
                <Button
                    title='indicatorStyle3'
                    onPress={() => {
                        setIndicatorStyle('white')
                    }}
                />
            </View>
            <View style={{height:150}}>
                <ScrollableTabView
                    contentProps={{
                        contentContainerStyle: contentContainerStyle,
                        showsHorizontalScrollIndicator:JSON.parse(showsHorizontalScrollIndicator),
                        indicatorStyle:indicatorStyle,
                        snapToAlignment:'center',
                        snapToInterval:100
                    }}
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