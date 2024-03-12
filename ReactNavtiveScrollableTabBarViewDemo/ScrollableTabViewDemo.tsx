import React, { useState } from 'react';
import {
    Text,
    View,
    Button,
    SafeAreaView,
    ScrollView
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from '@react-native-oh-tpl/react-native-scrollable-tab-view';

export default () => {
    /** DefaultTarView **/
    const [defaultLocked, setDefaultLocked] = useState('false')
    const [defaultPosition, setDefaultPosition] = useState('top')
    const [defaultIndex, setDefaultIndex] = useState(0)
    const [defaultInitialPage, setDefaultInitialPage] = useState(0)
    const [defaultUnderlineStyle, setDefaultUnderlineStyle] = useState({ height: 10, backgroundColor: 'black', borderRadius: 1 })
    const [defaultBackgroundColor, setDefaultBackgroundColor] = useState('#ffffff')
    const [defaultActiveTextColor, setDefaultActiveTextColor] = useState('green')
    const [defaultInactiveTextColor, setDefaultInactiveTextColor] = useState('#000000')
    const [defaultTextStyle, setDefaultTextStyle] = useState({ fontSize: 12, fontWeight: 200 })
    const [defaultStyle, setDefaultStyle] = useState({ height: 200, backgroundColor: '#f1f2f3' })
    const [defaultIsAnimate, setDefaultIsAnimate] = useState('false')
    let defaultIsLocked = false

    /** ScrollableTarView **/
    const [scrollableLocked, setScrollableLocked] = useState('false')
    const [scrollablePosition, setScrollablePosition] = useState('top')
    const [scrollableIndex, setScrollableIndex] = useState(0)
    const [scrollableInitialPage, setScrollableInitialPage] = useState(0)
    const [scrollableUnderlineStyle, setScrollableUnderlineStyle] = useState({ height: 10, backgroundColor: 'black', borderRadius: 1 })
    const [scrollableBackgroundColor, setScrollableBackgroundColor] = useState('#ffffff')
    const [scrollableActiveTextColor, setScrollableActiveTextColor] = useState('green')
    const [scrollableInactiveTextColor, setScrollableInactiveTextColor] = useState('#000000')
    const [scrollableTextStyle, setScrollableTextStyle] = useState({ fontSize: 12, fontWeight: 200 })
    const [scrollableStyle, setScrollableStyle] = useState({ height: 200, backgroundColor: '#f1f2f3' })
    const [scrollableIsAnimate, setScrollableIsAnimate] = useState('false')
    let isLocked = false
    return (
        <SafeAreaView>
            <ScrollView>
                <View testID="defaultBox">
                    <View style={{ flexDirection: "row", alignContent: 'center' }}>
                        <Text>Locked:{JSON.stringify(defaultLocked)}</Text>
                        <Button
                            title='ChangeLocked'
                            onPress={() => {
                                defaultIsLocked = !defaultIsLocked
                                defaultIsLocked ? setDefaultLocked('true') : setDefaultLocked('false')
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: "row", alignContent: 'center' }}>
                        <Text>scrollPosition:{defaultPosition}</Text>
                        <Button
                            title='top'
                            onPress={() => {
                                setDefaultPosition('top')
                            }}
                        />
                        <Button
                            title='bottom'
                            onPress={() => {
                                setDefaultPosition('bottom')
                            }}
                        />
                        <Button
                            title='overlayTop'
                            onPress={() => {
                                setDefaultPosition('overlayTop')
                            }}
                        />
                        <Button
                            title='overlayBottom'
                            onPress={() => {
                                setDefaultPosition('overlayBottom')
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text>TabIndex:{defaultIndex}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignContent: 'center' }}>
                        <Text>InitialPage:{defaultInitialPage}</Text>
                        <Button
                            title='0'
                            onPress={() => {
                                setDefaultInitialPage(0)
                            }}
                        />
                        <Button
                            title='1'
                            onPress={() => {
                                setDefaultInitialPage(1)
                            }}
                        />
                        <Button
                            title='2'
                            onPress={() => {
                                setDefaultInitialPage(2)
                            }}
                        />
                    </View>
                    <View>
                        <Text>UnderlineStyle:{JSON.stringify(defaultUnderlineStyle)}</Text>
                        <Button
                            title='0'
                            onPress={() => {
                                setDefaultUnderlineStyle({ height: 4, backgroundColor: '#4B610B', borderRadius: 10 })
                            }}
                        />
                        <Button
                            title='1'
                            onPress={() => {
                                setDefaultUnderlineStyle({ height: 6, backgroundColor: '#FF00FF', borderRadius: 20 })
                            }}
                        />
                        <Button
                            title='2'
                            onPress={() => {
                                setDefaultUnderlineStyle({ height: 8, backgroundColor: '#DF0101', borderRadius: 40 })
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: "row", alignContent: 'center' }}>
                        <Text>scrollWithoutAnimation:{JSON.stringify(defaultIsAnimate)}</Text>
                        <Button
                            title='IsAnimate'
                            onPress={() => {
                                JSON.parse(defaultIsAnimate) ? setDefaultIsAnimate('false') : setDefaultIsAnimate('true')
                            }}
                        />
                    </View>
                    <View>
                        <Text>tabBarBackgroundColor:{defaultBackgroundColor}</Text>
                        <Button
                            title='#886A08'
                            onPress={() => {
                                setDefaultBackgroundColor('#886A08')
                            }}
                        />
                        <Button
                            title='#BFFF00'
                            onPress={() => {
                                setDefaultBackgroundColor('#BFFF00')
                            }}
                        />
                        <Button
                            title='#0174DF'
                            onPress={() => {
                                setDefaultBackgroundColor('#0174DF')
                            }}
                        />
                        <Button
                            title='#610B21'
                            onPress={() => {
                                setDefaultBackgroundColor('#610B21')
                            }}
                        />
                    </View>
                    <ScrollableTabView
                        style={defaultStyle}
                        onChangeTab={(obj) => {
                            setDefaultIndex(obj.i)
                            console.log('被选中的下标:' + obj.i);
                        }}
                        onScroll={(position) => {
                            console.log('滑动时的位置：' + position);
                        }
                        }
                    >
                        <Text tabLabel='Tab #1'>My</Text>
                        <Text tabLabel='Tab #2'>favorite</Text>
                        <Text tabLabel='Tab #3'>project</Text>
                        <Text tabLabel='Tab #4'>favorite</Text>
                        <Text tabLabel='Tab #5'>project</Text>
                    </ScrollableTabView>
                </View>
                <View testID="ScrollableBox">
                    <ScrollableTabView
                        style={scrollableStyle}
                        onChangeTab={(obj) => {
                            setDefaultIndex(obj.i)
                            console.log('被选中的下标:' + obj.i);
                        }}
                        onScroll={(position) => {
                            console.log('滑动时的位置：' + position);
                        }
                        }
                    >

                    </ScrollableTabView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}