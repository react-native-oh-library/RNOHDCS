import React, { useState, ReactElement } from 'react';
import { View, Button, Text, ScrollView, StyleSheet } from 'react-native';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';
import Demo5 from './Demo5';

const App = (): ReactElement => {

    const renderTab = (): ReactElement => {
        const [show1, setShow1] = useState(false);
        const [show2, setShow2] = useState(false);
        const [show3, setShow3] = useState(false);
        const [show5, setShow5] = useState(false);
        return (
            <ScrollView>
                <View>
                    <Text style={styles.title}>接口测试</Text>
                    <Demo4 />
                </View>

                {show1 ? (
                    <View>
                        <Text style={styles.title}>基础自定义属性：height/width/option/backgroundColor</Text>
                        <Demo1 />
                    </View>
                ) : (
                    <Button title='基础自定义属性' onPress={() => { setShow1(true) }}></Button>
                )
                }

                {show2 ? (
                    <View>
                        <Text style={styles.title}>扩展属性：themeName为dark,使用webViewSettings控制宽度为200，地图数据使用customMapData自定义中国地图数据</Text>
                        <Demo2 />
                    </View>
                ) : (
                    <Button title='扩展属性' onPress={() => { setShow2(true) }} />
                )
                }

                {show3 ? (
                    <View>
                        <Text style={styles.title}>extension自定义图：水球图(需要网络)</Text>
                        <Demo3 />
                    </View >
                ) : (
                    <Button title='自定义图' onPress={() => { setShow3(true) }}></Button>
                )
                }

                {show5 ? (
                    <View>
                        <Text style={styles.title}>formatterVariable（Y轴单位使用变量传入）/enableParseStringFunction（使用变量单位必须开启字符串函数）/eventActions（完成事件钩子回调）/fontFamilies（自定义字体为仿宋）</Text>
                        <Demo5 />
                    </View>
                ) : (
                    <Button title='字符串函数，钩子函数' onPress={() => { setShow5(true) }}></Button>
                )
                }
            </ScrollView >
        )
    };

    return (
        <View style={{ flex: 1, padding: 10 }}>
            {renderTab()}
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        backgroundColor: '#D3E3FD',
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    }
})

export default App;
