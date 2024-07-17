import React, { useState, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';

import { SmartRefreshControl, StoreHouseHeader } from '@react-native-oh-tpl/react-native-smartrefreshlayout/src/index';

const itamArray = new Array();
itamArray.push({ id: 0, text: "默认主题", dec: "设置刷新头默认背景颜色" });
itamArray.push({ id: 1, text: "设置红色主题", dec: "设置刷新头默认背景红色主题" });
itamArray.push({ id: 2, text: "设置绿色主题", dec: "设置刷新头默认背景绿色主题" });
itamArray.push({ id: 3, text: "设置蓝色主题", dec: "设置刷新头默认背景蓝色主题" });
itamArray.push({ id: 4, text: "设置自动刷新", dec: "该属性需要初次渲染加载" });
itamArray.push({ id: 5, text: "设置自动过5秒刷新", dec: "该属性需要初次渲染加载" });
itamArray.push({ id: 6, text: "设置阻尼效果", dec: "设置下拉阻尼效果" });
itamArray.push({ id: 7, text: "设置最大下拉高度", dec: "设置最大下拉高度" });
itamArray.push({ id: 8, text: "设置禁止刷新", dec: "开启或关闭刷新" });

itamArray.push({ id: 9, text: "设置文字China", dec: "设置StoreHouseHeader头部展示的字体" });
itamArray.push({ id: 10, text: "设置文字Smart", dec: "设置StoreHouseHeader头部展示的字体" });
itamArray.push({ id: 11, text: "设置文字01Smart2", dec: "设置StoreHouseHeader头部展示的字体" });
itamArray.push({ id: 12, text: "设置StoreHouseHeader字体颜色主题", dec: "设置StoreHouseHeader字体红色颜色" });
itamArray.push({ id: 13, text: "设置StoreHouseHeader字体颜色主题", dec: "设置StoreHouseHeader字体黄色颜色" });
itamArray.push({ id: 14, text: "设置StoreHouseHeader字体颜色主题", dec: "设置StoreHouseHeader白色颜色" });
itamArray.push({ id: 15, text: "设置文字大小", dec: "设置StoreHouseHeader头部展示的字体大小15" });
itamArray.push({ id: 16, text: "设置文字大小", dec: "设置StoreHouseHeader头部展示的字体大小25" });

itamArray.push({ id: 17, text: "设置文字线条宽度", dec: "设置StoreHouseHeader头部展示的字体宽度2" });
itamArray.push({ id: 18, text: "设置文字线条宽度", dec: "设置StoreHouseHeader头部展示的字体宽度8" });

itamArray.push({ id: 19, text: "设置StoreHouseHeader头部dropHeight", dec: "设置StoreHouseHeader头部dropHeight 40" });
itamArray.push({ id: 20, text: "设置StoreHouseHeader头部dropHeight", dec: "设置StoreHouseHeader头部dropHeight 80" });

const App = () => {
    const [data, setData] = useState(itamArray);
    const [headerHeight, setHeaderHeight] = useState(69);
    const [imgHeight, setImgHeight] = useState(0.0);

    const [color, setColor] = useState('#ffffff');
    const [autuR, setAutoR] = useState({ refresh: false, time: -1 })
    const [dragR, setDragRate] = useState(0.5);
    const [maxDragR, setMaxDragRate] = useState(2.0);
    const [enableR, setEnableR] = useState(true);

    const [mText, setText] = useState("StoreHouse");
    const [mTextColor, setTextColor] = useState("#000000");
    const [mTextSize, setTextSize] = useState(25);
    const [mTextLineWidth, setLineWidth] = useState(1);
    const [mTextDropHeight, setDropHeight] = useState(30);

    let smartRefreshControlRef: React.RefObject<SmartRefreshControl> = useRef(null);

    const ItemView = ({ item }) => (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => {
                switch (item.id) {
                    case 0:
                        setColor("#ffffff")
                        break;
                    case 1:
                        setColor('#ff0000')
                        break;
                    case 2:
                        setColor("#00FF00")
                        break;
                    case 3:
                        setColor("#0000FF")
                        break;
                    case 4:
                        setAutoR({ refresh: true, time: -1 })
                        break;
                    case 5:
                        setAutoR({ refresh: true, time: 5000 })
                        break;
                    case 6:
                        setDragRate(3.0)
                        break;
                    case 7:
                        setMaxDragRate(5.0)
                        break;
                    case 8:
                        setEnableR(!enableR);
                        break;
                    case 9:
                        setText("China")
                        break;
                    case 10:
                        setText("Smart")
                        break;
                    case 11:
                        setText("01Smart2")
                        break;
                    case 12:
                        setTextColor("#ff0000")
                        break;
                    case 13:
                        setTextColor("#ffff00")
                        break;
                    case 14:
                        setTextColor("#ffffff")
                        break;
                    case 15:
                        setTextSize(15)
                        break;
                    case 16:
                        setTextSize(25)
                        break;
                    case 17:
                        setLineWidth(2)
                        break;
                    case 18:
                        setLineWidth(8)
                        break;
                    case 19:
                        setDropHeight(40)
                        break;
                    case 20:
                        setDropHeight(80)
                        break;
                }
            }}>
                <Text style={styles.itemText}>{item.text}</Text>
            </TouchableOpacity>
            <Text style={styles.itemTextdec}>{item.dec}</Text>
        </View>
    );

    return (
        <View >
            <SmartRefreshControl
                ref={smartRefreshControlRef}
                primaryColor={color}
                autoRefresh={autuR}
                headerHeight={headerHeight}
                dragRate={dragR}
                maxDragRate={maxDragR}
                enableRefresh={enableR}
                style={{ height: '100%', width: '100%', backgroundColor: '#ffffff' }}
                onReleaseToRefresh={e => {
                    console.log("Smart RN onReleaseToRefresh")
                }}
                onRefresh={() => {
                    console.log("Smart RN onRefresh")
                    setTimeout(() => {
                        smartRefreshControlRef.current.finishRefresh({ delayed: -1, success: true });
                    }, 5000);
                }}
                onHeaderReleasing={(data: any) => {
                    console.log("Smart RN onHeaderReleasing:" + JSON.stringify(data.nativeEvent))
                }}
                onHeaderPulling={(data: any) => {
                    console.log("Smart RN onHeaderPulling" + JSON.stringify(data.nativeEvent))
                }}
                onPullDownToRefresh={() => {
                    console.log("Smart RN onPullDownToRefresh")
                }}
                onHeaderMoving={(data: any) => {
                    if (data.nativeEvent.offset > headerHeight - 20) {
                        return;
                    }
                    setImgHeight(data.nativeEvent.offset);
                }}
                HeaderComponent={
                    <StoreHouseHeader
                        textColor={mTextColor}
                        text={mText} //暂时只支持英文
                        fontSize={mTextSize}
                        lineWidth={mTextLineWidth}
                        dropHeight={mTextDropHeight}
                    />
                }>
                <FlatList
                    style={{ flex: 1, height: '100%', width: '100%', backgroundColor: '#ffffff' }}
                    data={data}
                    renderItem={({ item }) => <ItemView item={item} />}
                    keyExtractor={item => item.id.toString()}
                />
            </SmartRefreshControl>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9f9f9',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "column"
    },
    itemText: {
        fontSize: 14,
    },
    itemTextdec: {
        marginTop: 3,
        fontSize: 10
    },
});

export default App;  
